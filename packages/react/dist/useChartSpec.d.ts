import { ChartSpec, ChartType } from '@vizora/core';
export interface UseChartSpecOptions {
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
export declare function useChartSpec({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height, }: UseChartSpecOptions): ChartSpec;
//# sourceMappingURL=useChartSpec.d.ts.map