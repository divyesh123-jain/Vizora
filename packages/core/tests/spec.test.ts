import { describe, it, expect } from 'vitest';
import {
  validateChartSpec,
  ChartSpecValidationError,
  setChartType,
  setThemePreset,
  toggleGridLines,
  setMultiSeries,
} from '../src';

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

  it('transforms ChartSpecs deterministically using patch functions', () => {
    const baseSpec = {
      version: '0.1.0' as const,
      type: 'bar' as const,
      data: [{ a: 1 }],
      encoding: { x: { field: 'a' } },
    };

    const patchedType = setChartType(baseSpec, 'line');
    expect(patchedType.type).toBe('line');

    const patchedTheme = setThemePreset(baseSpec, 'emerald');
    expect(patchedTheme.config?.theme).toBe('emerald');

    const toggledGrid = toggleGridLines(baseSpec, false);
    expect(toggledGrid.config?.showGrid).toBe(false);

    const multiSeries = setMultiSeries(baseSpec, 'region', 'stacked');
    expect(multiSeries.encoding.series?.field).toBe('region');
    expect(multiSeries.encoding.mode).toBe('stacked');
  });

  it('validates a Candlestick chart spec successfully when OHLC fields are present', () => {
    const validSpec = {
      version: '0.1.0',
      type: 'candlestick',
      data: [{ open: 10, high: 20, low: 5, close: 15 }],
      encoding: {
        x: { field: 'date' },
      },
    };
    const parsed = validateChartSpec(validSpec);
    expect(parsed.type).toBe('candlestick');
  });

  it('throws a ChartSpecValidationError for candlestick missing OHLC data fields', () => {
    const invalidSpec = {
      version: '0.1.0',
      type: 'candlestick',
      data: [{ missingAll: 10 }],
      encoding: {
        x: { field: 'date' },
      },
    };
    expect(() => validateChartSpec(invalidSpec)).toThrow(ChartSpecValidationError);
  });

  it('validates Funnel and Donut chart specs successfully with required fields', () => {
    const funnelSpec = {
      version: '0.1.0',
      type: 'funnel',
      data: [{ stage: 'A', value: 100 }],
      encoding: { x: { field: 'stage' }, y: { field: 'value' } },
    };
    expect(validateChartSpec(funnelSpec).type).toBe('funnel');

    const donutSpec = {
      version: '0.1.0',
      type: 'donut',
      data: [{ cat: 'A', val: 50 }],
      encoding: { x: { field: 'cat' }, y: { field: 'val' } },
    };
    expect(validateChartSpec(donutSpec).type).toBe('donut');
  });

  it('throws a ChartSpecValidationError for funnel/donut missing y field', () => {
    const invalidFunnelSpec = {
      version: '0.1.0',
      type: 'funnel',
      data: [{ stage: 'A' }],
      encoding: { x: { field: 'stage' }, y: { field: 'missingY' } },
    };
    expect(() => validateChartSpec(invalidFunnelSpec)).toThrow(ChartSpecValidationError);
  });
});
