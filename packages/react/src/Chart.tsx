import React from 'react';
import { ChartType } from '@vizora/core';
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';

export interface ChartProps {
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

export const Chart: React.FC<ChartProps> = ({
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
}) => {
  const spec = useChartSpec({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height });
  return <SVGContainer spec={spec} />;
};

