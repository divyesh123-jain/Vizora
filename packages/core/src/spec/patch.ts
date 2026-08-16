import { ChartSpec, ChartType } from './types';

export function setChartType(spec: ChartSpec, type: ChartType): ChartSpec {
  return {
    ...spec,
    type,
  };
}

export function setEncoding(
  spec: ChartSpec,
  encodingPatch: Partial<ChartSpec['encoding']>
): ChartSpec {
  return {
    ...spec,
    encoding: {
      ...spec.encoding,
      ...encodingPatch,
    },
  };
}

export function setThemePreset(spec: ChartSpec, theme: string): ChartSpec {
  return {
    ...spec,
    config: {
      ...spec.config,
      theme,
    },
  };
}

export function toggleGridLines(spec: ChartSpec, showGrid?: boolean): ChartSpec {
  const currentGrid = spec.config?.showGrid ?? true;
  return {
    ...spec,
    config: {
      ...spec.config,
      showGrid: showGrid !== undefined ? showGrid : !currentGrid,
    },
  };
}

export function setMultiSeries(
  spec: ChartSpec,
  seriesField: string,
  mode: 'grouped' | 'stacked' = 'grouped'
): ChartSpec {
  return {
    ...spec,
    encoding: {
      ...spec.encoding,
      series: { field: seriesField },
      mode,
    },
  };
}
