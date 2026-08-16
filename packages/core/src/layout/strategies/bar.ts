import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
} from '../types';
import { createScaleBand } from '../../scales/band';
import { createScaleLinear } from '../../scales/linear';
import { formatNumber } from '../../format/number';
import {
  createGridLineX,
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

export class BarChartStrategy implements ChartLayoutStrategy {
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

    const isHorizontal = spec.encoding.orientation === 'horizontal';

    if (isHorizontal) {
      const categories = spec.data.map((d) => String(d[yField] ?? ''));
      const values = spec.data.map((d) => parseNum(d[xField]));
      const maxVal = Math.max(...values, 0) || 1;
      const maxValIdx = values.indexOf(maxVal);

      const yScale = createScaleBand(categories, [0, innerHeight], 0.25);
      const xScale = createScaleLinear([0, maxVal], [0, innerWidth]);

      xScale.ticks(5).forEach((t, idx) => {
        const x = xScale(t);
        gridGroup.children?.push(createGridLineX(`grid-x-${idx}`, x, innerHeight));
        axesGroup.children?.push(createScaleTickX(`scale-tick-x-${idx}`, x, innerHeight));
        axesGroup.children?.push(createTickTextX(`tick-x-${idx}`, x, innerHeight + 18, formatNumber(t)));
      });

      spec.data.forEach((d, i) => {
        const cat = String(d[yField] ?? '');
        const val = parseNum(d[xField]);
        const y = yScale(cat);
        const bw = yScale.bandwidth();
        const w = xScale(val);

        chartGroup.children?.push({
          id: `bar-${i}`,
          type: 'rect',
          attributes: {
            x: 0,
            y,
            width: w,
            height: bw,
            fill: i === maxValIdx ? palette.waypoint : palette.contour,
            rx: 0,
          },
        });

        axesGroup.children?.push(createScaleTickY(`scale-tick-y-${i}`, y + bw / 2));
        axesGroup.children?.push(createTickTextY(`tick-y-${i}`, -8, y + bw / 2 + 3, cat));
      });

      if (maxValIdx >= 0) {
        const maxCat = String(spec.data[maxValIdx][yField] ?? '');
        const maxBarY = yScale(maxCat) + yScale.bandwidth() / 2;
        const maxBarX = xScale(maxVal);
        chartGroup.children?.push(
          {
            id: 'flag-pin-stem',
            type: 'line',
            attributes: { x1: maxBarX, y1: maxBarY, x2: maxBarX + 12, y2: maxBarY, stroke: palette.flare, 'stroke-width': 1 },
          },
          {
            id: 'flag-pin-top',
            type: 'rect',
            attributes: { x: maxBarX + 12, y: maxBarY - 2, width: 4, height: 4, fill: palette.flare },
          }
        );
      }
    } else {
      const categories = spec.data.map((d) => String(d[xField] ?? ''));
      const values = spec.data.map((d) => parseNum(d[yField]));
      const maxVal = Math.max(...values, 0) || 1;
      const maxValIdx = values.indexOf(maxVal);

      const xScale = createScaleBand(categories, [0, innerWidth], 0.25);
      const yScale = createScaleLinear([0, maxVal], [innerHeight, 0]);

      yScale.ticks(5).forEach((t, idx) => {
        const y = yScale(t);
        gridGroup.children?.push(createGridLineY(`grid-y-${idx}`, y, innerWidth));
        axesGroup.children?.push(createScaleTickY(`scale-tick-y-${idx}`, y));
        axesGroup.children?.push(createTickTextY(`tick-y-${idx}`, -8, y + 3, formatNumber(t)));
      });

      spec.data.forEach((d, i) => {
        const cat = String(d[xField] ?? '');
        const val = parseNum(d[yField]);
        const x = xScale(cat);
        const y = yScale(val);
        const bw = xScale.bandwidth();
        const h = innerHeight - y;

        chartGroup.children?.push({
          id: `bar-${i}`,
          type: 'rect',
          attributes: {
            x,
            y,
            width: bw,
            height: h,
            fill: i === maxValIdx ? palette.waypoint : palette.contour,
            rx: 0,
          },
        });

        axesGroup.children?.push(createScaleTickX(`scale-tick-x-${i}`, x + bw / 2, innerHeight));
        axesGroup.children?.push(createTickTextX(`tick-x-${i}`, x + bw / 2, innerHeight + 18, cat));
      });

      if (maxValIdx >= 0) {
        const maxCat = String(spec.data[maxValIdx][xField] ?? '');
        const maxBarX = xScale(maxCat) + xScale.bandwidth() / 2;
        const maxBarY = yScale(maxVal);
        chartGroup.children?.push(
          {
            id: 'flag-pin-stem',
            type: 'line',
            attributes: { x1: maxBarX, y1: maxBarY, x2: maxBarX, y2: maxBarY - 12, stroke: palette.flare, 'stroke-width': 1 },
          },
          {
            id: 'flag-pin-top',
            type: 'rect',
            attributes: { x: maxBarX - 2, y: maxBarY - 16, width: 4, height: 4, fill: palette.flare },
          }
        );
      }
    }

    axesGroup.children?.push(...createBaseAxes(innerWidth, innerHeight));

    if (spec.config?.showGrid !== false) {
      chartGroup.children?.unshift(gridGroup);
    }
    chartGroup.children?.push(axesGroup);

    return [chartGroup];
  }
}
