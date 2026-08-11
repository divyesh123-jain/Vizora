import React from 'react';
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';

export interface AutoChartProps {
  data: Record<string, unknown>[];
  title?: string;
}

export const AutoChart: React.FC<AutoChartProps> = ({ data, title }) => {
  const spec = useChartSpec({ data, title });
  return <SVGContainer spec={spec} />;
};
