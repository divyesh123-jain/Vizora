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
  const legendItems: LegendItem[] = spec.encoding.color?.field
    ? (() => {
        const field = spec.encoding.color.field;
        const data = spec.data || [];
        const values = data
          .map((d) => d[field])
          .filter((v): v is string => typeof v === 'string' && v.length > 0)
          .filter((v, i, arr) => arr.indexOf(v) === i);
        const palette = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
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