import { z } from 'zod';

export const ChartTypeSchema = z.enum(['line', 'bar', 'scatter', 'histogram', 'kpi-sparkline', 'donut', 'pie', 'area', 'candlestick', 'funnel']);

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
  series: FieldEncodingSchema.optional(),
  size: FieldEncodingSchema.optional(),
  orientation: z.enum(['vertical', 'horizontal']).optional(),
  bins: z.number().positive().optional(),
  mode: z.enum(['grouped', 'stacked']).optional(),
  area: z.boolean().optional(),
  curve: z.boolean().optional(),
});

export const ChartConfigSchema = z.object({
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
  margin: z
    .object({
      top: z.number().optional(),
      right: z.number().optional(),
      bottom: z.number().optional(),
      left: z.number().optional(),
    })
    .optional(),
  theme: z.string().optional(),
  showGrid: z.boolean().optional(),
  showLegend: z.boolean().optional(),
  showTooltip: z.boolean().optional(),
});

export const ChartSpecSchema = z.object({
  $schema: z.string().optional(),
  version: z.literal('0.1.0'),
  type: ChartTypeSchema,
  title: z.string().optional(),
  subtitle: z.string().optional(),
  data: z.array(z.record(z.unknown())),
  encoding: EncodingMapSchema,
  config: ChartConfigSchema.optional(),
});
