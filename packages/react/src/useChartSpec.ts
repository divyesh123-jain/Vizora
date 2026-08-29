import { useMemo } from "react";
import { ChartSpec, ChartType } from "@vizora/core";
import { recommendChartSpec } from "@vizora/intelligence";
import { validateChartSpec } from "@vizora/core";
import { ChartSpecValidationError } from "@vizora/core";

export interface UseChartSpecOptions {
  data: Record<string, unknown>[];
  type?: ChartType;
  x?: string;
  y?: string;
  xLabel?: string;
  yLabel?: string;
  xTitle?: string;
  yTitle?: string;
  color?: string;
  series?: string;
  open?: string;
  high?: string;
  low?: string;
  close?: string;
  orientation?: "vertical" | "horizontal";
  title?: string;
  bins?: number;
  mode?: "grouped" | "stacked";
  area?: boolean;
  curve?: boolean;
  showGrid?: boolean;
  theme?: string;
  width?: number;
  height?: number;
}

export interface UseChartSpecReturn {
  spec: ChartSpec;
  validationError?: string;
}

export function useChartSpec({
  data,
  type,
  x,
  y,
  xLabel,
  yLabel,
  xTitle,
  yTitle,
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
}: UseChartSpecOptions): UseChartSpecReturn {
  const resolvedXLabel = xTitle || xLabel;
  const resolvedYLabel = yTitle || yLabel;

  const spec = useMemo<ChartSpec>(() => {
    if (!type && !x && !y && !open && !close) {
      const recommended = recommendChartSpec(data);
      if (title) recommended.title = title;
      if (orientation) recommended.encoding.orientation = orientation;
      if (bins) recommended.encoding.bins = bins;
      if (series) recommended.encoding.series = { field: series };
      if (mode) recommended.encoding.mode = mode;
      if (area !== undefined) recommended.encoding.area = area;
      if (curve !== undefined) recommended.encoding.curve = curve;
      if (resolvedXLabel && recommended.encoding.x) recommended.encoding.x.label = resolvedXLabel;
      if (resolvedYLabel && recommended.encoding.y) recommended.encoding.y.label = resolvedYLabel;
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
      version: "0.1.0" as const,
      type: type || "bar",
      title,
      data,
      encoding: {
        x: x ? { field: x, label: resolvedXLabel } : (resolvedXLabel ? { field: 'x', label: resolvedXLabel } : undefined),
        y: y ? { field: y, label: resolvedYLabel } : (resolvedYLabel ? { field: 'y', label: resolvedYLabel } : undefined),
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
        theme: theme || "light",
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      },
    };
  }, [data, type, x, y, color, series, open, high, low, close, orientation, title, bins, mode, area, curve, showGrid, theme, width, height]);

  // Validate the generated spec and capture any validation errors
  const validationError = useMemo(() => {
    try {
      validateChartSpec(spec);
      return undefined;
    } catch (err: unknown) {
      if (err instanceof ChartSpecValidationError) {
        const issues = err.issues.join("\n - ");
        return `ChartSpec validation failed:\n - ${issues}`;
      }
      return "ChartSpec validation failed: " + (err instanceof Error ? err.message : "Unknown error");
    }
  }, [spec]);

  return { spec, validationError };
}

