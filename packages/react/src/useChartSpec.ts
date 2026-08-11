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
}

export function useChartSpec({ data, type, x, y, color, orientation, title }: UseChartSpecOptions): ChartSpec {
  return useMemo(() => {
    if (!type && !x && !y) {
      const recommended = recommendChartSpec(data);
      if (title) recommended.title = title;
      if (orientation) recommended.encoding.orientation = orientation;
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
      },
    };
  }, [data, type, x, y, color, orientation, title]);
}

