import { ChartSpec } from '@vizora/core';

export interface LegendItem {
  value: string;
  color?: string;
}

export interface UseChartLegendResult {
  legendItems: LegendItem[];
  hasLegend: boolean;
  isLoading: boolean;
}

/**
 * Generates legend items from a ChartSpec when color encoding is present.
 * Extracts unique category values from the data and maps them to the
 * chart's color palette so the LegendReact component can display them.
 *
 * @param spec - The validated ChartSpec instance
 * @returns Legend items keyed by series color, or empty array if no color encoding
 */
export function useChartLegend(spec: ChartSpec): UseChartLegendResult {
  const isRadial = spec.type === 'donut' || spec.type === 'pie';
  const targetField =
    spec.encoding.series?.field ||
    spec.encoding.color?.field ||
    (isRadial ? spec.encoding.x?.field : undefined);

  const palette = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const legendItems: LegendItem[] = targetField
    ? (() => {
        const data = spec.data || [];
        const values = data
          .map((d) => String(d[targetField] ?? ''))
          .filter((v): v is string => v.length > 0)
          .filter((v, i, arr) => arr.indexOf(v) === i);
        return values.map((value, i) => ({
          value,
          color: palette[i % palette.length],
        }));
      })()
    : [];

  return {
    legendItems,
    hasLegend: legendItems.length > 0,
    isLoading: false,
  };
}