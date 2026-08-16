import React from 'react';
import { ChartType } from '@vizora/core';
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';
import { ChartContainer, ChartConfig } from './ChartContainer';

export interface ChartProps {
  data: Record<string, unknown>[];
  type?: ChartType;
  x?: string;
  y?: string;
  color?: string;
  series?: string;
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
  color,
  series,
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
  const spec = useChartSpec({
    data,
    type,
    x,
    y,
    color,
    series,
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

  if (config || containerClassName) {
    return (
      <ChartContainer config={config} className={containerClassName}>
        <SVGContainer spec={spec} className={className} style={style} />
      </ChartContainer>
    );
  }

  return <SVGContainer spec={spec} className={className} style={style} />;
};


