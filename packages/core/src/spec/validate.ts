import { ChartSpecSchema } from './schema';
import { ChartSpec } from './types';

export class ChartSpecValidationError extends Error {
  public readonly issues: string[];

  constructor(issues: string[]) {
    super(`ChartSpec validation failed:\n - ${issues.join('\n - ')}`);
    this.name = 'ChartSpecValidationError';
    this.issues = issues;
  }
}

export function validateChartSpec(spec: unknown): ChartSpec {
  const result = ChartSpecSchema.safeParse(spec);
  if (!result.success) {
    const issues = result.error.issues.map(
      (issue) => `${issue.path.join('.') || 'root'}: ${issue.message}`
    );
    throw new ChartSpecValidationError(issues);
  }
  return result.data as ChartSpec;
}
