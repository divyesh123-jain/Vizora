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

function resolveField(record: Record<string, unknown>, explicitField?: string, fallbacks: string[] = []): string {
  if (explicitField && record[explicitField] !== undefined) return explicitField;
  for (const fb of fallbacks) {
    if (record[fb] !== undefined) return fb;
  }
  return explicitField || fallbacks[0] || '';
}

export class CandlestickChartStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField } = ctx;
    const chartGroup: SceneNode = {
      id: 'chart-main-group',
      type: 'group',
      attributes: { transform: `translate(${ctx.margin.left}, ${ctx.margin.top})` },
      children: [],
    };

    if (!spec.data || spec.data.length === 0) {
      return [chartGroup];
    }

    const gridGroup: SceneNode = { id: 'grid-group', type: 'group', attributes: {}, children: [] };
    const axesGroup: SceneNode = { id: 'axes-group', type: 'group', attributes: {}, children: [] };

    const firstRow = spec.data[0] || {};
    const openField = resolveField(firstRow, spec.encoding.open?.field, ['open', 'Open', 'o']);
    const closeField = resolveField(firstRow, spec.encoding.close?.field, ['close', 'Close', 'c']);
    const highField = resolveField(firstRow, spec.encoding.high?.field, ['high', 'High', 'h']);
    const lowField = resolveField(firstRow, spec.encoding.low?.field, ['low', 'Low', 'l']);

    const rawDates = spec.data.map((d) => new Date(String(d[xField] ?? '')));
    const isTemporal = rawDates.every((dt) => !isNaN(dt.getTime()));

    const highs = spec.data.map((d) => parseNum(d[highField] ?? Math.max(parseNum(d[openField]), parseNum(d[closeField]))));
    const lows = spec.data.map((d) => parseNum(d[lowField] ?? Math.min(parseNum(d[openField]), parseNum(d[closeField]))));
    const rawMin = Math.min(...lows);
    const rawMax = Math.max(...highs);
    const pad = (rawMax - rawMin) * 0.05 || 10;
    const minLow = rawMin - pad;
    const maxHigh = rawMax + pad;

    const yScale = createScaleLinear([minLow, maxHigh], [innerHeight, 0]);

    let getXPos: (d: Record<string, unknown>, i: number) => number;
    let candleWidth = 12;
    let xTickLabels: { pos: number; label: string }[] = [];

    if (isTemporal && rawDates.length > 1) {
      const minTime = rawDates[0];
      const maxTime = rawDates[rawDates.length - 1];
      const xScale = createScaleTime([minTime, maxTime], [0, innerWidth]);
      getXPos = (d) => xScale(new Date(String(d[xField] ?? '')));
      candleWidth = Math.max(6, Math.min(28, innerWidth / (spec.data.length * 1.6)));

      xTickLabels = spec.data.map((d) => {
        const dt = new Date(String(d[xField] ?? ''));
        return { pos: xScale(dt), label: formatDate(dt) };
      });
    } else {
      const categories = spec.data.map((d) => String(d[xField] ?? ''));
      const xScale = createScaleBand(categories, [0, innerWidth], 0.35);
      getXPos = (d) => xScale(String(d[xField] ?? '')) + xScale.bandwidth() / 2;
      candleWidth = Math.max(4, xScale.bandwidth());
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

    const COLOR_BULLISH = '#10b981'; // Vibrant Emerald
    const COLOR_BEARISH = '#ef4444'; // Vibrant Rose/Red

    spec.data.forEach((d, i) => {
      const open = parseNum(d[openField] ?? d[closeField]);
      const close = parseNum(d[closeField] ?? open);
      const high = parseNum(d[highField] ?? Math.max(open, close));
      const low = parseNum(d[lowField] ?? Math.min(open, close));

      const isBullish = close >= open;
      const candleColor = isBullish ? COLOR_BULLISH : COLOR_BEARISH;

      const x = getXPos(d, i);
      const highY = yScale(high);
      const lowY = yScale(low);

      const openY = yScale(open);
      const closeY = yScale(close);
      const bodyTopY = Math.min(openY, closeY);
      const bodyHeight = Math.max(1.5, Math.abs(closeY - openY));

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
