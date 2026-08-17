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
  const parsedData = result.data;

  if (parsedData.type === 'candlestick' && parsedData.data.length > 0) {
    const openField = parsedData.encoding.open?.field || 'open';
    const closeField = parsedData.encoding.close?.field || 'close';
    const highField = parsedData.encoding.high?.field || 'high';
    const lowField = parsedData.encoding.low?.field || 'low';

    const firstRow = parsedData.data[0];
    const missing = [];
    if (!(openField in firstRow)) missing.push(openField);
    if (!(closeField in firstRow)) missing.push(closeField);
    if (!(highField in firstRow)) missing.push(highField);
    if (!(lowField in firstRow)) missing.push(lowField);

    if (missing.length > 0) {
      throw new ChartSpecValidationError([
        `Candlestick chart data is missing required encoded fields: ${missing.join(', ')}`,
      ]);
    }
  }

  if (['donut', 'pie', 'funnel'].includes(parsedData.type) && parsedData.data.length > 0) {
    const firstRow = parsedData.data[0];
    const xField = parsedData.encoding.x?.field || Object.keys(firstRow)[0];
    const yField = parsedData.encoding.y?.field || Object.keys(firstRow)[1];
    
    const missing = [];
    if (!xField || !(xField in firstRow)) missing.push(xField || 'x');
    if (!yField || !(yField in firstRow)) missing.push(yField || 'y');
    
    if (missing.length > 0) {
      throw new ChartSpecValidationError([
        `${parsedData.type} chart data is missing required encoded fields: ${missing.join(', ')}`,
      ]);
    }
  }

  return parsedData;
}
