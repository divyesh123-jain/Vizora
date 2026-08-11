import { describe, it, expect } from 'vitest';
import React from 'react';
import { Chart, AutoChart } from '../src';

describe('React Component Wrappers', () => {
  it('exports Chart and AutoChart React component functions', () => {
    expect(typeof Chart).toBe('function');
    expect(typeof AutoChart).toBe('function');
  });
});
