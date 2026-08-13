import React from 'react';
import { ChartType } from '@vizora/core';
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
export declare const Chart: React.FC<ChartProps>;
//# sourceMappingURL=Chart.d.ts.map