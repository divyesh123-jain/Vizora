import React from 'react';
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';

export interface AutoChartProps {
  data: Record<string, unknown>[];
  title?: string;
}

export const AutoChart: React.FC<AutoChartProps> = ({ data, title }) => {
  const { spec, validationError } = useChartSpec({ data, title });

  if (validationError) {
    console.warn(validationError);
    // Render with a default spec when validation fails
    return <SVGContainer spec={{ version: '0.1.0', type: 'bar', data, encoding: { x: undefined, y: undefined } }} />;
  }

  return <SVGContainer spec={spec} />;
};
