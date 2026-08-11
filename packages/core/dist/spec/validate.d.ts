import { ChartSpec } from './types';
export declare class ChartSpecValidationError extends Error {
    readonly issues: string[];
    constructor(issues: string[]);
}
export declare function validateChartSpec(spec: unknown): ChartSpec;
//# sourceMappingURL=validate.d.ts.map