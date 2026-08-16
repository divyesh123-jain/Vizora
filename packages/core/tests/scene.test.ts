import { describe, it, expect } from 'vitest';
import { buildSceneGraph } from '../src/layout/scene';

describe('Headless SceneGraph Resolution', () => {
  it('builds a deterministic scene graph for bar chart without DOM', () => {
    const spec = {
      version: '0.1.0',
      type: 'bar',
      data: [
        { category: 'A', value: 10 },
        { category: 'B', value: 25 },
      ],
      encoding: {
        x: { field: 'category' },
        y: { field: 'value' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene.width).toBe(600);
    expect(scene.height).toBe(380);
    expect(scene.children.length).toBe(1); // main chart group
  });

  it('builds scene graph for line chart', () => {
    const spec = {
      version: '0.1.0',
      type: 'line',
      data: [
        { date: '2026-01-01', val: 100 },
        { date: '2026-02-01', val: 200 },
      ],
      encoding: {
        x: { field: 'date' },
        y: { field: 'val' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    expect(scene.children.length).toBeGreaterThan(0);
  });

  it('builds scene graph for scatter plot', () => {
    const spec = {
      version: '0.1.0',
      type: 'scatter',
      data: [
        { height: 170, weight: 65 },
        { height: 180, weight: 78 },
      ],
      encoding: {
        x: { field: 'height' },
        y: { field: 'weight' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
  });

  it('builds scene graph for histogram', () => {
    const spec = {
      version: '0.1.0',
      type: 'histogram',
      data: [{ age: 20 }, { age: 25 }, { age: 30 }, { age: 45 }],
      encoding: {
        x: { field: 'age' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
  });

  it('builds scene graph for KPI sparkline', () => {
    const spec = {
      version: '0.1.0',
      type: 'kpi-sparkline',
      data: [{ val: 10 }, { val: 15 }, { val: 24 }],
      encoding: {
        x: { field: 'val' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    expect(scene.children[0].id).toBe('kpi-group');
  });

  it('handles dark theme configuration and custom colors', () => {
    const spec = {
      version: '0.1.0',
      type: 'bar',
      data: [{ item: 'A', count: 50 }],
      encoding: {
        x: { field: 'item' },
        y: { field: 'count' },
        color: { field: '#00ff88' },
      },
      config: {
        theme: 'dark' as const,
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    expect(scene.children.length).toBeGreaterThan(0);
  });

  it('renders horizontal bar chart strategy correctly', () => {
    const spec = {
      version: '0.1.0',
      type: 'bar',
      data: [
        { cat: 'Alpha', score: 90 },
        { cat: 'Beta', score: 100 },
      ],
      encoding: {
        x: { field: 'score' },
        y: { field: 'cat' },
        orientation: 'horizontal' as const,
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    expect(scene.children[0].id).toBe('chart-main-group');
  });
});


