import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
  COLOR_FIELD_BRIGHT,
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

const parseNum = (v: unknown): number => {
  const n = Number(v);
  return isNaN(n) ? 0 : n;
};

export class LineChartStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField, yField } = ctx;
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

    const values = spec.data.map((d) => parseNum(d[yField]));
    const maxVal = Math.max(...values, 0) || 1;
    const maxValIdx = values.indexOf(maxVal);
    const yScale = createScaleLinear([0, maxVal * 1.1], [innerHeight, 0]);

    let getXPos: (d: Record<string, unknown>, i: number) => number;
    let xTickLabels: { pos: number; label: string }[] = [];

    if (isTemporal && rawDates.length > 0) {
      const minTime = rawDates[0];
      const maxTime = rawDates[rawDates.length - 1];
      const xScale = createScaleTime([minTime, maxTime], [0, innerWidth]);
      getXPos = (d) => xScale(new Date(String(d[xField] ?? '')));

      xTickLabels = spec.data.map((d) => {
        const dt = new Date(String(d[xField] ?? ''));
        return { pos: xScale(dt), label: formatDate(dt) };
      });
    } else {
      const categories = spec.data.map((d) => String(d[xField] ?? ''));
      const xScale = createScaleBand(categories, [0, innerWidth], 0);
      getXPos = (d) => xScale(String(d[xField] ?? '')) + xScale.bandwidth() / 2;
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

    const points = spec.data
      .map((d, i) => {
        const x = getXPos(d, i);
        const y = yScale(parseNum(d[yField]));
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' L ');

    chartGroup.children?.push({
      id: 'line-path',
      type: 'path',
      attributes: {
        d: `M ${points}`,
        fill: 'none',
        stroke: palette.contour,
        'stroke-width': 2,
        'stroke-linecap': 'square',
        'stroke-linejoin': 'miter',
      },
    });

    spec.data.forEach((d, i) => {
      const x = getXPos(d, i);
      const y = yScale(parseNum(d[yField]));
      chartGroup.children?.push({
        id: `line-dot-${i}`,
        type: 'rect',
        attributes: {
          x: x - 3,
          y: y - 3,
          width: 6,
          height: 6,
          fill: i === maxValIdx ? palette.waypoint : COLOR_FIELD_BRIGHT(),
          stroke: palette.contour,
          'stroke-width': 1,
        },
      });
    });

    if (maxValIdx >= 0) {
      const maxX = getXPos(spec.data[maxValIdx], maxValIdx);
      const maxY = yScale(maxVal);
      chartGroup.children?.push(
        {
          id: 'flag-pin-stem',
          type: 'line',
          attributes: { x1: maxX, y1: maxY, x2: maxX, y2: maxY - 14, stroke: palette.flare, 'stroke-width': 1 },
        },
        {
          id: 'flag-pin-top',
          type: 'rect',
          attributes: { x: maxX - 2, y: maxY - 18, width: 4, height: 4, fill: palette.flare },
        }
      );
    }

    axesGroup.children?.push(...createBaseAxes(innerWidth, innerHeight));

    if (spec.config?.showGrid !== false) {
      chartGroup.children?.unshift(gridGroup);
    }
    chartGroup.children?.push(axesGroup);

    return [chartGroup];
  }
}
