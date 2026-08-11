export type ChartType = 'line' | 'bar' | 'scatter' | 'histogram' | 'kpi-sparkline';
export type FieldDataType = 'quantitative' | 'temporal' | 'categorical';
export interface FieldEncoding {
    field: string;
    type?: FieldDataType;
    label?: string;
    format?: string;
}
export interface EncodingMap {
    x?: FieldEncoding;
    y?: FieldEncoding;
    color?: FieldEncoding;
    size?: FieldEncoding;
    orientation?: 'vertical' | 'horizontal';
    bins?: number;
}
export interface ChartConfig {
    width?: number;
    height?: number;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    theme?: 'light' | 'dark';
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
}
export interface ChartSpec {
    $schema?: string;
    version: '0.1.0';
    type: ChartType;
    title?: string;
    subtitle?: string;
    data: Record<string, unknown>[];
    encoding: EncodingMap;
    config?: ChartConfig;
}
//# sourceMappingURL=types.d.ts.map