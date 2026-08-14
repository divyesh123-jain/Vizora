import { describe, it, expect } from 'vitest';
import React from 'react';
import { Chart, AutoChart, ChartContainer, ChartTooltip, ChartLegend } from '../src';

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
});

