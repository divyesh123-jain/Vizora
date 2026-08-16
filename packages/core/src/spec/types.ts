import { z } from 'zod';
import {
  ChartTypeSchema,
  FieldDataTypeSchema,
  FieldEncodingSchema,
  EncodingMapSchema,
  ChartConfigSchema,
  ChartSpecSchema,
} from './schema';

export type ChartType = z.infer<typeof ChartTypeSchema>;
export type FieldDataType = z.infer<typeof FieldDataTypeSchema>;
export type FieldEncoding = z.infer<typeof FieldEncodingSchema>;
export type EncodingMap = z.infer<typeof EncodingMapSchema>;
export type ChartConfig = z.infer<typeof ChartConfigSchema>;
export type ChartSpec = z.infer<typeof ChartSpecSchema>;

