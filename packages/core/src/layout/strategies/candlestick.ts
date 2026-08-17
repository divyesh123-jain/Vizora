import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
} from '../types';
import { createScaleBand } from '../../scales/band';
import { createScaleLinear } from '../../scales/linear';
import { createScaleTime } from '../../scales/time';
import { formatNumber } from '../../format/number';
import { formatDate } from '../../format/date';
import {
  createGridLineY,
  createScaleTickX,
  createScaleTickY,
  createTickTextX,
  createTickTextY,
  createBaseAxes,
} from '../primitives/axis';

const parseNum = (v: unknown, fallback = 0): number => {
  const n = Number(v);
  return isNaN(n) ? fallback : n;
};

export class CandlestickChartStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField } = ctx;
    const palette = resolveThemeColors(spec.config?.theme, spec.encoding.color?.field);
    const chartGroup: SceneNode = {
      id: 'chart-main-group',
      type: 'group',
      attributes: { transform: `translate(${ctx.margin.left}, ${ctx.margin.top})` },
      children: [],
    };

    const gridGroup: SceneNode = { id: 'grid-group', type: 'group', attributes: {}, children: [] };
    const axesGroup: SceneNode = { id: 'axes-group', type: 'group', attributes: {}, children: [] };

    const rawDates = spec.data.map((d) => new Date(String(d[xField] ?? '')));
    const isTemporal = rawDates.every((dt) => !isNaN(dt.getTime()));

    const highs = spec.data.map((d) => parseNum(d.high ?? d.open ?? d.close));
    const lows = spec.data.map((d) => parseNum(d.low ?? d.open ?? d.close));
    const minLow = Math.min(...lows) * 0.98 || 0;
    const maxHigh = Math.max(...highs) * 1.02 || 100;

    const yScale = createScaleLinear([minLow, maxHigh], [innerHeight, 0]);

    let getXPos: (d: Record<string, unknown>, i: number) => number;
    let candleWidth = 12;
    let xTickLabels: { pos: number; label: string }[] = [];

    if (isTemporal && rawDates.length > 0) {
      const minTime = rawDates[0];
      const maxTime = rawDates[rawDates.length - 1];
      const xScale = createScaleTime([minTime, maxTime], [0, innerWidth]);
      getXPos = (d) => xScale(new Date(String(d[xField] ?? '')));
      candleWidth = Math.max(6, Math.min(24, innerWidth / (spec.data.length * 1.8)));

      xTickLabels = spec.data.map((d) => {
        const dt = new Date(String(d[xField] ?? ''));
        return { pos: xScale(dt), label: formatDate(dt) };
      });
    } else {
      const categories = spec.data.map((d) => String(d[xField] ?? ''));
      const xScale = createScaleBand(categories, [0, innerWidth], 0.3);
      getXPos = (d) => xScale(String(d[xField] ?? '')) + xScale.bandwidth() / 2;
      candleWidth = xScale.bandwidth();
      xTickLabels = categories.map((cat) => ({
        pos: xScale(cat) + xScale.bandwidth() / 2,
        label: cat,
      }));
    }

    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push(createGridLineY(`grid-y-${idx}`, y, innerWidth));
      axesGroup.children?.push(createScaleTickY(`scale-tick-y-${idx}`, y));
      axesGroup.children?.push(createTickTextY(`tick-y-${idx}`, -8, y + 3, formatNumber(t)));
    });

    xTickLabels.forEach((t, idx) => {
      axesGroup.children?.push(createScaleTickX(`scale-tick-x-${idx}`, t.pos, innerHeight));
      axesGroup.children?.push(createTickTextX(`tick-x-${idx}`, t.pos, innerHeight + 18, t.label));
    });

    const COLOR_BULLISH = '#10b981'; // Green
    const COLOR_BEARISH = '#ef4444'; // Red

    spec.data.forEach((d, i) => {
      const open = parseNum(d.open ?? d.close);
      const high = parseNum(d.high ?? Math.max(open, parseNum(d.close)));
      const low = parseNum(d.low ?? Math.min(open, parseNum(d.close)));
      const close = parseNum(d.close ?? open);

      const isBullish = close >= open;
      const candleColor = isBullish ? COLOR_BULLISH : COLOR_BEARISH;

      const x = getXPos(d, i);
      const highY = yScale(high);
      const lowY = yScale(low);

      const openY = yScale(open);
      const closeY = yScale(close);
      const bodyTopY = Math.min(openY, closeY);
      const bodyHeight = Math.max(2, Math.abs(closeY - openY));

      const xDateStr = isTemporal ? formatDate(new Date(String(d[xField] ?? ''))) : String(d[xField] ?? '');

      // 1. High-Low Wick Line
      chartGroup.children?.push({
        id: `wick-${i}`,
        type: 'line',
        attributes: {
          x1: x,
          y1: highY,
          x2: x,
          y2: lowY,
          stroke: candleColor,
          'stroke-width': 1.5,
        },
      });

      // 2. Open-Close Body Rect
      chartGroup.children?.push({
        id: `candle-${i}`,
        type: 'rect',
        attributes: {
          x: x - candleWidth / 2,
          y: bodyTopY,
          width: candleWidth,
          height: bodyHeight,
          fill: candleColor,
          stroke: candleColor,
          'stroke-width': 1,
          rx: 1,
          'data-vizora-item': 'true',
          'data-x-val': xDateStr,
          'data-y-val': `O: ${formatNumber(open)} | H: ${formatNumber(high)} | L: ${formatNumber(low)} | C: ${formatNumber(close)}`,
          'data-index': String(i),
        },
      });
    });

    axesGroup.children?.push(...createBaseAxes(innerWidth, innerHeight));

    if (spec.config?.showGrid !== false) {
      chartGroup.children?.unshift(gridGroup);
    }
    chartGroup.children?.push(axesGroup);

    return [chartGroup];
  }
}
