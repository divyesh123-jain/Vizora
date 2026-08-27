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

  it('builds scene graph for candlestick chart', () => {
    const spec = {
      version: '0.1.0',
      type: 'candlestick',
      data: [
        { date: '2026-01-01', open: 100, high: 110, low: 90, close: 105 },
        { date: '2026-01-02', open: 105, high: 120, low: 100, close: 115 },
      ],
      encoding: {
        x: { field: 'date' },
        open: { field: 'open' },
        high: { field: 'high' },
        low: { field: 'low' },
        close: { field: 'close' }
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    const mainGroup = scene.children.find(c => c.id === 'chart-main-group');
    expect(mainGroup).toBeDefined();
    // 2 wicks and 2 bodies = 4 elements in the chart group (plus grid/axes)
    const wicksAndCandles = mainGroup?.children?.filter(c => c.id.startsWith('wick-') || c.id.startsWith('candle-'));
    expect(wicksAndCandles?.length).toBe(4);
  });

  it('builds scene graph for funnel chart', () => {
    const spec = {
      version: '0.1.0',
      type: 'funnel',
      data: [
        { stage: 'Views', count: 1000 },
        { stage: 'Clicks', count: 500 },
      ],
      encoding: {
        x: { field: 'stage' },
        y: { field: 'count' }
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    const mainGroup = scene.children.find(c => c.id === 'chart-main-group');
    expect(mainGroup).toBeDefined();
    const stages = mainGroup?.children?.filter(c => c.id.startsWith('funnel-stage-'));
    expect(stages?.length).toBe(2);
  });

  it('builds scene graph for donut and pie charts', () => {
    const spec = {
      version: '0.1.0',
      type: 'donut',
      data: [
        { cat: 'A', val: 30 },
        { cat: 'B', val: 70 },
      ],
      encoding: {
        x: { field: 'cat' },
        y: { field: 'val' }
      },
    };

    const sceneDonut = buildSceneGraph(spec);
    expect(sceneDonut).toBeDefined();
    const mainGroupDonut = sceneDonut.children.find(c => c.id === 'chart-main-group');
    const slicesDonut = mainGroupDonut?.children?.filter(c => c.id.startsWith('slice-'));
    expect(slicesDonut?.length).toBe(2);
    
    // Check Pie
    const pieSpec = { ...spec, type: 'pie' as const };
    const scenePie = buildSceneGraph(pieSpec);
    expect(scenePie).toBeDefined();
    const mainGroupPie = scenePie.children.find(c => c.id === 'chart-main-group');
    const slicesPie = mainGroupPie?.children?.filter(c => c.id.startsWith('slice-'));
    expect(slicesPie?.length).toBe(2);
  });

  it('handles candlestick with case-insensitive fallback fields and doji bars', () => {
    const spec = {
      version: '0.1.0' as const,
      type: 'candlestick' as const,
      data: [
        { date: '2026-01-01', Open: 100, High: 105, Low: 95, Close: 100 }, // Doji (open === close)
        { date: '2026-01-02', Open: 100, High: 120, Low: 90, Close: 115 },  // Bullish
      ],
      encoding: {
        x: { field: 'date' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene).toBeDefined();
    const mainGroup = scene.children.find(c => c.id === 'chart-main-group');
    expect(mainGroup).toBeDefined();
    const candles = mainGroup?.children?.filter(c => c.id.startsWith('candle-'));
    expect(candles?.length).toBe(2);
    // Ensure doji has non-zero height
    const dojiCandle = candles?.[0];
    expect(Number(dojiCandle?.attributes?.height)).toBeGreaterThanOrEqual(1.5);
  });

  it('handles empty dataset gracefully for all strategies', () => {
    const emptyDonut = buildSceneGraph({
      version: '0.1.0' as const,
      type: 'donut' as const,
      data: [],
      encoding: { x: { field: 'x' }, y: { field: 'y' } },
    });
    expect(emptyDonut.children.length).toBeGreaterThan(0);

    const emptyCandle = buildSceneGraph({
      version: '0.1.0' as const,
      type: 'candlestick' as const,
      data: [],
      encoding: { x: { field: 'x' } },
    });
    expect(emptyCandle.children.length).toBeGreaterThan(0);

    const emptyFunnel = buildSceneGraph({
      version: '0.1.0' as const,
      type: 'funnel' as const,
      data: [],
      encoding: { x: { field: 'stage' }, y: { field: 'val' } },
    });
    expect(emptyFunnel.children.length).toBeGreaterThan(0);
  });

  it('renders X and Y axis legends (titles) inside Cartesian charts', () => {
    const spec = {
      version: '0.1.0' as const,
      type: 'bar' as const,
      data: [
        { month: 'Jan', revenue: 100 },
        { month: 'Feb', revenue: 200 },
      ],
      encoding: {
        x: { field: 'month', label: 'Billing Month' },
        y: { field: 'revenue', label: 'Gross Revenue ($)' },
      },
    };

    const scene = buildSceneGraph(spec);
    const mainGroup = scene.children.find((c) => c.id === 'chart-main-group');
    const axesGroup = mainGroup?.children?.find((c) => c.id === 'axes-group');
    expect(axesGroup).toBeDefined();

    const titleX = axesGroup?.children?.find((c) => c.id === 'axis-title-x');
    expect(titleX).toBeDefined();
    expect(titleX?.children?.[0]?.attributes?.text).toBe('Billing Month');

    const titleY = axesGroup?.children?.find((c) => c.id === 'axis-title-y');
    expect(titleY).toBeDefined();
    expect(titleY?.children?.[0]?.attributes?.text).toBe('Gross Revenue ($)');
  });

  it('renders in-chart series legend for multi-series grouped bar and donut charts', () => {
    const barSpec = {
      version: '0.1.0' as const,
      type: 'bar' as const,
      data: [
        { quarter: 'Q1', revenue: 100, region: 'US' },
        { quarter: 'Q1', revenue: 150, region: 'EU' },
      ],
      encoding: {
        x: { field: 'quarter' },
        y: { field: 'revenue' },
        series: { field: 'region' },
        mode: 'grouped' as const,
      },
    };

    const barScene = buildSceneGraph(barSpec);
    const barMain = barScene.children.find((c) => c.id === 'chart-main-group');
    const barLegend = barMain?.children?.find((c) => c.id === 'bar-series-legend');
    expect(barLegend).toBeDefined();
    expect(barLegend?.children?.some((c) => c.id.includes('swatch'))).toBe(true);

    const donutSpec = {
      version: '0.1.0' as const,
      type: 'donut' as const,
      data: [
        { tier: 'Free', users: 500 },
        { tier: 'Pro', users: 200 },
      ],
      encoding: {
        x: { field: 'tier' },
        y: { field: 'users' },
      },
    };

    const donutScene = buildSceneGraph(donutSpec);
    const donutMain = donutScene.children.find((c) => c.id === 'chart-main-group');
    const donutLegend = donutMain?.children?.find((c) => c.id === 'donut-legend');
    expect(donutLegend).toBeDefined();
  });
});


