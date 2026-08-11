import { useMemo } from 'react';
import { ChartSpec, ChartType } from '@vizora/core';
import { recommendChartSpec } from '@vizora/intelligence';

export interface UseChartSpecOptions {
  data: Record<string, unknown>[];
  type?: ChartType;
  x?: string;
  y?: string;
  color?: string;
  title?: string;
}

export function useChartSpec({ data, type, x, y, color, title }: UseChartSpecOptions): ChartSpec {
  return useMemo(() => {
    if (!type && !x && !y) {
      const recommended = recommendChartSpec(data);
      if (title) recommended.title = title;
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
      },
    };
  }, [data, type, x, y, color, title]);
}
