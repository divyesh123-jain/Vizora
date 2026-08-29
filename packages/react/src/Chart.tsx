import React from 'react';
import { ChartType } from '@vizora/core';
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';
import { ChartContainer, ChartConfig } from './ChartContainer';
import { ChartErrorFallback } from './ChartErrorFallback';

export interface ChartProps {
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
  className?: string;
  containerClassName?: string;
  config?: ChartConfig;
  style?: React.CSSProperties;
}

export const Chart: React.FC<ChartProps> = ({
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
  className,
  containerClassName,
  config,
  style,
}) => {
  const { spec, validationError } = useChartSpec({
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
  });

  if (validationError) {
    return <ChartErrorFallback message={validationError} className={className} />;
  }

  if (config || containerClassName) {
    return (
      <ChartContainer config={config} className={containerClassName}>
        <SVGContainer spec={spec} className={className} style={style} />
      </ChartContainer>
    );
  }

  return <SVGContainer spec={spec} className={className} style={style} />;
};


