import { ChartSpecSchema } from './schema';
export class ChartSpecValidationError extends Error {
    issues;
    constructor(issues) {
        super(`ChartSpec validation failed:\n - ${issues.join('\n - ')}`);
        this.name = 'ChartSpecValidationError';
        this.issues = issues;
    }
}
export function validateChartSpec(spec) {
    const result = ChartSpecSchema.safeParse(spec);
    if (!result.success) {
        const issues = result.error.issues.map((issue) => `${issue.path.join('.') || 'root'}: ${issue.message}`);
        throw new ChartSpecValidationError(issues);
    }
    return result.data;
}
//# sourceMappingURL=validate.js.map