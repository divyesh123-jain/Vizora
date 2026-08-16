import { describe, it, expect } from 'vitest';
import { recommendChartSpec, scoreChartRecommendations } from '../src';

describe('AutoChart Heuristic Recommender (FR-10, NFR-7 Benchmark)', () => {
  it('recommends Line chart for Temporal + Quantitative data', () => {
    const data = [
      { date: '2026-01-01', revenue: 100 },
      { date: '2026-01-02', revenue: 150 },
    ];
    const spec = recommendChartSpec(data);
    expect(spec.type).toBe('line');
  });

  it('recommends Bar chart for Categorical + Quantitative data', () => {
    const data = [
      { region: 'North', sales: 400 },
      { region: 'South', sales: 300 },
    ];
    const spec = recommendChartSpec(data);
    expect(spec.type).toBe('bar');
  });

  it('recommends Scatter chart for 2 Quantitative fields', () => {
    const data = [
      { height: 170, weight: 65 },
      { height: 180, weight: 75 },
    ];
    const spec = recommendChartSpec(data);
    expect(spec.type).toBe('scatter');
  });

  it('computes weighted recommendation scores with reasons', () => {
    const data = [{ date: '2026-01-01', value: 100 }];
    const scores = scoreChartRecommendations(data);
    expect(scores.length).toBeGreaterThan(0);
    expect(scores[0].score).toBeGreaterThan(50);
    expect(scores[0].reason).toBeDefined();
  });
});
