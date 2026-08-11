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
}

export const Chart: React.FC<ChartProps> = ({ data, type, x, y, color, orientation, title }) => {
  const spec = useChartSpec({ data, type, x, y, color, orientation, title });
  return <SVGContainer spec={spec} />;
};

