import React from 'react';
import { ChartType } from '@vizora/core';
import { ChartConfig } from './ChartContainer';
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
    className?: string;
    containerClassName?: string;
    config?: ChartConfig;
    style?: React.CSSProperties;
}
export declare const Chart: React.FC<ChartProps>;
//# sourceMappingURL=Chart.d.ts.map