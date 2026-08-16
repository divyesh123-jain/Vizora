import { describe, it, expect } from 'vitest';
import React from 'react';
import {
  Chart,
  AutoChart,
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ResponsiveContainer,
  ChartEmptyState,
  exportToPNG,
  exportToSVG,
  copyChartSpec,
} from '../src';

describe('React Component Wrappers', () => {
  it('exports Chart and AutoChart React component functions', () => {
    expect(typeof Chart).toBe('function');
    expect(typeof AutoChart).toBe('function');
  });

  it('exports Shadcn chart components (ChartContainer, ChartTooltip, ChartLegend)', () => {
    expect(ChartContainer).toBeDefined();
    expect(ChartTooltip).toBeDefined();
    expect(ChartLegend).toBeDefined();
  });

  it('exports ResponsiveContainer, ChartEmptyState, and export utilities', () => {
    expect(ResponsiveContainer).toBeDefined();
    expect(ChartEmptyState).toBeDefined();
    expect(typeof exportToPNG).toBe('function');
    expect(typeof exportToSVG).toBe('function');
    expect(typeof copyChartSpec).toBe('function');
  });
});

