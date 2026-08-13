import { useMemo } from 'react';
import { ChartSpec, ChartType } from '@vizora/core';
import { recommendChartSpec } from '@vizora/intelligence';

export interface UseChartSpecOptions {
  data: Record<string, unknown>[];
  type?: ChartType;
  x?: string;
  y?: string;
  color?: string;
  orientation?: 'vertical' | 'horizontal';
  title?: string;
  bins?: number;
  showGrid?: boolean;
  theme?: 'light' | 'dark';
  width?: number;
  height?: number;
}

export function useChartSpec({
  data,
  type,
  x,
  y,
  color,
  orientation,
  title,
  bins,
  showGrid,
  theme,
  width,
  height,
}: UseChartSpecOptions): ChartSpec {
  return useMemo(() => {
    if (!type && !x && !y) {
      const recommended = recommendChartSpec(data);
      if (title) recommended.title = title;
      if (orientation) recommended.encoding.orientation = orientation;
      if (bins) recommended.encoding.bins = bins;
      if (showGrid !== undefined || theme || width || height) {
        recommended.config = {
          ...recommended.config,
          ...(showGrid !== undefined ? { showGrid } : {}),
          ...(theme ? { theme } : {}),
          ...(width ? { width } : {}),
          ...(height ? { height } : {}),
        };
      }
      return recommended;
    }

    return {
      version: '0.1.0',
      type: type || 'bar',
      title,
      data,
      encoding: {
        x: x ? { field: x } : undefined,
        y: y ? { field: y } : undefined,
        color: color ? { field: color } : undefined,
        orientation,
        bins,
      },
      config: {
        showGrid: showGrid ?? true,
        theme: theme || 'light',
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      },
    };
  }, [data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height]);
}

