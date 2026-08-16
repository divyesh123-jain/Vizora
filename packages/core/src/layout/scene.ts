import { validateChartSpec } from '../spec/validate';
import { SceneGraph, LayoutContext, COLOR_CONTOUR, FONT_SERIF } from './types';
import { BarChartStrategy } from './strategies/bar';
import { LineChartStrategy } from './strategies/line';
import { ScatterChartStrategy } from './strategies/scatter';
import { HistogramChartStrategy } from './strategies/histogram';
import { KpiSparklineStrategy } from './strategies/kpi';
import { DonutChartStrategy } from './strategies/donut';
import { AreaChartStrategy } from './strategies/area';
import { CandlestickChartStrategy } from './strategies/candlestick';
import { FunnelChartStrategy } from './strategies/funnel';

export * from './types';

export function buildSceneGraph(inputSpec: unknown): SceneGraph {
  const spec = validateChartSpec(inputSpec);
  const width = spec.config?.width ?? 600;
  const height = spec.config?.height ?? 380;
  const margin = {
    top: spec.config?.margin?.top ?? 40,
    right: spec.config?.margin?.right ?? 30,
    bottom: spec.config?.margin?.bottom ?? 50,
    left: spec.config?.margin?.left ?? 60,
  };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const scene: SceneGraph = {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`,
    children: [],
  };

  if (spec.title) {
    scene.children.push({
      id: 'title',
      type: 'text',
      attributes: {
        x: width / 2,
        y: 24,
        'text-anchor': 'middle',
        fill: COLOR_CONTOUR,
        'font-size': 15,
        'font-weight': '600',
        'font-family': FONT_SERIF,
      },
      children: [{ id: 'title-text', type: 'text', attributes: { text: spec.title } }],
    });
  }

  const xField = spec.encoding.x?.field || Object.keys(spec.data[0] || {})[0] || 'x';
  const yField = spec.encoding.y?.field || Object.keys(spec.data[0] || {})[1] || 'y';

  const ctx: LayoutContext = {
    spec,
    width,
    height,
    margin,
    innerWidth,
    innerHeight,
    xField,
    yField,
  };

  switch (spec.type) {
    case 'bar':
      scene.children.push(...new BarChartStrategy().render(ctx));
      break;
    case 'line':
      scene.children.push(...new LineChartStrategy().render(ctx));
      break;
    case 'scatter':
      scene.children.push(...new ScatterChartStrategy().render(ctx));
      break;
    case 'histogram':
      scene.children.push(...new HistogramChartStrategy().render(ctx));
      break;
    case 'kpi-sparkline':
      scene.children.push(...new KpiSparklineStrategy().render(ctx));
      break;
    case 'donut':
    case 'pie':
      scene.children.push(...new DonutChartStrategy().render(ctx));
      break;
    case 'area':
      scene.children.push(...new AreaChartStrategy().render(ctx));
      break;
    case 'candlestick':
      scene.children.push(...new CandlestickChartStrategy().render(ctx));
      break;
    case 'funnel':
      scene.children.push(...new FunnelChartStrategy().render(ctx));
      break;
    default:
      scene.children.push(...new BarChartStrategy().render(ctx));
  }

  return scene;
}
