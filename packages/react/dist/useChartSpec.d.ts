import { ChartSpec, ChartType } from '@vizora/core';
export interface UseChartSpecOptions {
    data: Record<string, unknown>[];
    type?: ChartType;
    x?: string;
    y?: string;
    color?: string;
    orientation?: 'vertical' | 'horizontal';
    title?: string;
}
export declare function useChartSpec({ data, type, x, y, color, orientation, title }: UseChartSpecOptions): ChartSpec;
//# sourceMappingURL=useChartSpec.d.ts.map