import { describe, it, expect } from 'vitest';
import { validateChartSpec, ChartSpecValidationError } from '../src/spec/validate';

describe('ChartSpec Zod Schema Validation', () => {
  it('validates a valid Bar chart spec successfully', () => {
    const validSpec = {
      version: '0.1.0',
      type: 'bar',
      data: [{ category: 'A', value: 10 }, { category: 'B', value: 20 }],
      encoding: {
        x: { field: 'category', type: 'categorical' },
        y: { field: 'value', type: 'quantitative' },
      },
    };

    const parsed = validateChartSpec(validSpec);
    expect(parsed.type).toBe('bar');
    expect(parsed.data.length).toBe(2);
  });

  it('throws a ChartSpecValidationError for invalid chart specs', () => {
    const invalidSpec = {
      version: '0.1.0',
      type: 'invalid-type',
      data: [],
      encoding: {},
    };

    expect(() => validateChartSpec(invalidSpec)).toThrow(ChartSpecValidationError);
  });
});
