import { useMemo } from 'react';
import { ChartSpec, ChartType } from '@vizora/core';
import { recommendChartSpec } from '@vizora/intelligence';

export interface UseChartSpecOptions {
  data: Record<string, unknown>[];
  type?: ChartType;
  x?: string;
  y?: string;
  color?: string;
  series?: string;
  open?: string;
  high?: string;
  low?: string;
  close?: string;
  orientation?: 'vertical' | 'horizontal';
  title?: string;
  bins?: number;
  mode?: 'grouped' | 'stacked';
  area?: boolean;
  curve?: boolean;
  showGrid?: boolean;
  theme?: string;
  width?: number;
  height?: number;
}

export function useChartSpec({
  data,
  type,
  x,
  y,
  color,
  series,
  open,
  high,
  low,
  close,
  orientation,
  title,
  bins,
  mode,
  area,
  curve,
  showGrid,
  theme,
  width,
  height,
}: UseChartSpecOptions): ChartSpec {
  return useMemo(() => {
    if (!type && !x && !y && !open && !close) {
      const recommended = recommendChartSpec(data);
      if (title) recommended.title = title;
      if (orientation) recommended.encoding.orientation = orientation;
      if (bins) recommended.encoding.bins = bins;
      if (series) recommended.encoding.series = { field: series };
      if (mode) recommended.encoding.mode = mode;
      if (area !== undefined) recommended.encoding.area = area;
      if (curve !== undefined) recommended.encoding.curve = curve;
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
        series: series ? { field: series } : undefined,
        open: open ? { field: open } : undefined,
        high: high ? { field: high } : undefined,
        low: low ? { field: low } : undefined,
        close: close ? { field: close } : undefined,
        orientation,
        bins,
        mode,
        area,
        curve,
      },
      config: {
        showGrid: showGrid ?? true,
        theme: theme || 'light',
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      },
    };
  }, [data, type, x, y, color, series, open, high, low, close, orientation, title, bins, mode, area, curve, showGrid, theme, width, height]);
}

