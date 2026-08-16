import { ChartSpec, ChartType } from '@vizora/core';
import { profileField, FieldProfile } from './profile';

export interface ChartRecommendationScore {
  type: ChartType;
  score: number; // 0 to 100
  reason: string;
  encoding: {
    x: string;
    y?: string;
    color?: string;
    orientation?: 'vertical' | 'horizontal';
    mode?: 'grouped' | 'stacked';
    area?: boolean;
  };
}

export function scoreChartRecommendations(data: Record<string, unknown>[]): ChartRecommendationScore[] {
  if (!data || data.length === 0) {
    return [
      {
        type: 'bar',
        score: 10,
        reason: 'Empty dataset provided',
        encoding: { x: 'x', y: 'y' },
      },
    ];
  }

  const fields = Object.keys(data[0]);
  const profiles = fields.map((f) => profileField(data, f));

  const temporalFields = profiles.filter((p) => p.type === 'temporal');
  const quantFields = profiles.filter((p) => p.type === 'quantitative');
  const catFields = profiles.filter((p) => p.type === 'categorical');

  const scores: ChartRecommendationScore[] = [];

  // 1. Line Chart Scoring
  if (temporalFields.length >= 1 && quantFields.length >= 1) {
    scores.push({
      type: 'line',
      score: 95,
      reason: `Temporal field '${temporalFields[0].field}' and quantitative metric '${quantFields[0].field}' show optimal time-series trend performance.`,
      encoding: {
        x: temporalFields[0].field,
        y: quantFields[0].field,
        area: true,
      },
    });
  }

  // 2. Bar / Horizontal Bar Scoring
  if (catFields.length >= 1 && quantFields.length >= 1) {
    const cat = catFields[0];
    const isHighCardinality = cat.distinctCount > 12;

    scores.push({
      type: 'bar',
      score: isHighCardinality ? 92 : 88,
      reason: isHighCardinality
        ? `High cardinality category '${cat.field}' (${cat.distinctCount} items) recommended for horizontal bar layout.`
        : `Discrete category '${cat.field}' and quantitative '${quantFields[0].field}' ideal for bar comparison.`,
      encoding: {
        x: isHighCardinality ? quantFields[0].field : cat.field,
        y: isHighCardinality ? cat.field : quantFields[0].field,
        orientation: isHighCardinality ? 'horizontal' : 'vertical',
      },
    });
  }

  // 3. Scatter Plot Scoring
  if (quantFields.length >= 2) {
    scores.push({
      type: 'scatter',
      score: 95,
      reason: `Dual quantitative metrics '${quantFields[0].field}' and '${quantFields[1].field}' show strong correlation visualization capabilities.`,
      encoding: {
        x: quantFields[0].field,
        y: quantFields[1].field,
      },
    });
  }

  // 4. Histogram Scoring
  if (quantFields.length >= 1) {
    const isSingleQuant = quantFields.length === 1 && catFields.length === 0 && temporalFields.length === 0;
    scores.push({
      type: 'histogram',
      score: isSingleQuant ? 90 : 60,
      reason: `Quantitative metric '${quantFields[0].field}' evaluated for frequency distribution binning.`,
      encoding: {
        x: quantFields[0].field,
      },
    });
  }

  // Sort scores descending
  scores.sort((a, b) => b.score - a.score);
  return scores;
}

export function recommendChartSpec(data: Record<string, unknown>[]): ChartSpec {
  if (!data || data.length === 0) {
    return {
      version: '0.1.0',
      type: 'bar',
      data: [],
      encoding: {
        x: { field: 'x' },
        y: { field: 'y' },
      },
    };
  }

  const recommendations = scoreChartRecommendations(data);
  const best = recommendations[0] || {
    type: 'bar',
    encoding: { x: Object.keys(data[0])[0], y: Object.keys(data[0])[1] || Object.keys(data[0])[0] },
  };

  const fields = Object.keys(data[0]);
  const profiles = fields.map((f) => profileField(data, f));

  return {
    version: '0.1.0',
    type: best.type,
    data,
    encoding: {
      x: { field: best.encoding.x, type: profiles.find((p) => p.field === best.encoding.x)?.type },
      y: best.encoding.y ? { field: best.encoding.y, type: profiles.find((p) => p.field === best.encoding.y)?.type } : undefined,
      orientation: best.encoding.orientation,
      area: best.encoding.area,
    },
  };
}
