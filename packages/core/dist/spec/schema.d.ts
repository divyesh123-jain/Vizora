import { z } from 'zod';
export declare const ChartTypeSchema: z.ZodEnum<["line", "bar", "scatter", "histogram", "kpi-sparkline"]>;
export declare const FieldDataTypeSchema: z.ZodEnum<["quantitative", "temporal", "categorical"]>;
export declare const FieldEncodingSchema: z.ZodObject<{
    field: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
    label: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    field: string;
    type?: "quantitative" | "temporal" | "categorical" | undefined;
    label?: string | undefined;
    format?: string | undefined;
}, {
    field: string;
    type?: "quantitative" | "temporal" | "categorical" | undefined;
    label?: string | undefined;
    format?: string | undefined;
}>;
export declare const EncodingMapSchema: z.ZodObject<{
    x: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
        label: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }>>;
    y: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
        label: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }>>;
    color: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
        label: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }>>;
    size: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
        label: z.ZodOptional<z.ZodString>;
        format: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }, {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    }>>;
    orientation: z.ZodOptional<z.ZodEnum<["vertical", "horizontal"]>>;
    bins: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    x?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    y?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    color?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    size?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    bins?: number | undefined;
}, {
    x?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    y?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    color?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    size?: {
        field: string;
        type?: "quantitative" | "temporal" | "categorical" | undefined;
        label?: string | undefined;
        format?: string | undefined;
    } | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    bins?: number | undefined;
}>;
export declare const ChartConfigSchema: z.ZodObject<{
    width: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    height: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    margin: z.ZodOptional<z.ZodObject<{
        top: z.ZodDefault<z.ZodNumber>;
        right: z.ZodDefault<z.ZodNumber>;
        bottom: z.ZodDefault<z.ZodNumber>;
        left: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        top: number;
        right: number;
        bottom: number;
        left: number;
    }, {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    }>>;
    theme: z.ZodDefault<z.ZodOptional<z.ZodEnum<["light", "dark"]>>>;
    showGrid: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    showLegend: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    showTooltip: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    theme: "light" | "dark";
    showGrid: boolean;
    showLegend: boolean;
    showTooltip: boolean;
    margin?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    } | undefined;
}, {
    width?: number | undefined;
    height?: number | undefined;
    margin?: {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    } | undefined;
    theme?: "light" | "dark" | undefined;
    showGrid?: boolean | undefined;
    showLegend?: boolean | undefined;
    showTooltip?: boolean | undefined;
}>;
export declare const ChartSpecSchema: z.ZodObject<{
    $schema: z.ZodOptional<z.ZodString>;
    version: z.ZodLiteral<"0.1.0">;
    type: z.ZodEnum<["line", "bar", "scatter", "histogram", "kpi-sparkline"]>;
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    data: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    encoding: z.ZodObject<{
        x: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
            label: z.ZodOptional<z.ZodString>;
            format: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }>>;
        y: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
            label: z.ZodOptional<z.ZodString>;
            format: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }>>;
        color: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
            label: z.ZodOptional<z.ZodString>;
            format: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }>>;
        size: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<["quantitative", "temporal", "categorical"]>>;
            label: z.ZodOptional<z.ZodString>;
            format: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }, {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        }>>;
        orientation: z.ZodOptional<z.ZodEnum<["vertical", "horizontal"]>>;
        bins: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        x?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        y?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        color?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        size?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        bins?: number | undefined;
    }, {
        x?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        y?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        color?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        size?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        bins?: number | undefined;
    }>;
    config: z.ZodOptional<z.ZodObject<{
        width: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        height: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        margin: z.ZodOptional<z.ZodObject<{
            top: z.ZodDefault<z.ZodNumber>;
            right: z.ZodDefault<z.ZodNumber>;
            bottom: z.ZodDefault<z.ZodNumber>;
            left: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            top: number;
            right: number;
            bottom: number;
            left: number;
        }, {
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
        }>>;
        theme: z.ZodDefault<z.ZodOptional<z.ZodEnum<["light", "dark"]>>>;
        showGrid: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        showLegend: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        showTooltip: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        theme: "light" | "dark";
        showGrid: boolean;
        showLegend: boolean;
        showTooltip: boolean;
        margin?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        } | undefined;
    }, {
        width?: number | undefined;
        height?: number | undefined;
        margin?: {
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
        } | undefined;
        theme?: "light" | "dark" | undefined;
        showGrid?: boolean | undefined;
        showLegend?: boolean | undefined;
        showTooltip?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "line" | "bar" | "scatter" | "histogram" | "kpi-sparkline";
    version: "0.1.0";
    data: Record<string, unknown>[];
    encoding: {
        x?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        y?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        color?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        size?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        bins?: number | undefined;
    };
    $schema?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    config?: {
        width: number;
        height: number;
        theme: "light" | "dark";
        showGrid: boolean;
        showLegend: boolean;
        showTooltip: boolean;
        margin?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        } | undefined;
    } | undefined;
}, {
    type: "line" | "bar" | "scatter" | "histogram" | "kpi-sparkline";
    version: "0.1.0";
    data: Record<string, unknown>[];
    encoding: {
        x?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        y?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        color?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        size?: {
            field: string;
            type?: "quantitative" | "temporal" | "categorical" | undefined;
            label?: string | undefined;
            format?: string | undefined;
        } | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
        bins?: number | undefined;
    };
    $schema?: string | undefined;
    title?: string | undefined;
    subtitle?: string | undefined;
    config?: {
        width?: number | undefined;
        height?: number | undefined;
        margin?: {
            top?: number | undefined;
            right?: number | undefined;
            bottom?: number | undefined;
            left?: number | undefined;
        } | undefined;
        theme?: "light" | "dark" | undefined;
        showGrid?: boolean | undefined;
        showLegend?: boolean | undefined;
        showTooltip?: boolean | undefined;
    } | undefined;
}>;
//# sourceMappingURL=schema.d.ts.map