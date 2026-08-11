import { z } from 'zod';
export const ChartTypeSchema = z.enum(['line', 'bar', 'scatter', 'histogram', 'kpi-sparkline']);
export const FieldDataTypeSchema = z.enum(['quantitative', 'temporal', 'categorical']);
export const FieldEncodingSchema = z.object({
    field: z.string().min(1, 'Field name must not be empty'),
    type: FieldDataTypeSchema.optional(),
    label: z.string().optional(),
    format: z.string().optional(),
});
export const EncodingMapSchema = z.object({
    x: FieldEncodingSchema.optional(),
    y: FieldEncodingSchema.optional(),
    color: FieldEncodingSchema.optional(),
    size: FieldEncodingSchema.optional(),
    orientation: z.enum(['vertical', 'horizontal']).optional(),
    bins: z.number().positive().optional(),
});
export const ChartConfigSchema = z.object({
    width: z.number().positive().optional().default(600),
    height: z.number().positive().optional().default(400),
    margin: z
        .object({
        top: z.number().default(20),
        right: z.number().default(20),
        bottom: z.number().default(40),
        left: z.number().default(50),
    })
        .optional(),
    theme: z.enum(['light', 'dark']).optional().default('light'),
    showGrid: z.boolean().optional().default(true),
    showLegend: z.boolean().optional().default(true),
    showTooltip: z.boolean().optional().default(true),
});
export const ChartSpecSchema = z.object({
    $schema: z.string().optional(),
    version: z.literal('0.1.0'),
    type: ChartTypeSchema,
    title: z.string().optional(),
    subtitle: z.string().optional(),
    data: z.array(z.record(z.unknown())).min(1, 'ChartSpec data array must contain at least 1 record'),
    encoding: EncodingMapSchema,
    config: ChartConfigSchema.optional(),
});
//# sourceMappingURL=schema.js.map