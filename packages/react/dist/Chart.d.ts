import React from 'react';
import { ChartType } from '@vizora/core';
export interface ChartProps {
    data: Record<string, unknown>[];
    type?: ChartType;
    x?: string;
    y?: string;
    color?: string;
    title?: string;
}
export declare const Chart: React.FC<ChartProps>;
//# sourceMappingURL=Chart.d.ts.map