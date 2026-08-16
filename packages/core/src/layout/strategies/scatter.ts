import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  COLOR_CONTOUR,
  COLOR_WAYPOINT,
} from '../types';
import { createScaleLinear } from '../../scales/linear';
import { formatNumber } from '../../format/number';
import {
  createGridLineY,
  createScaleTickX,
  createScaleTickY,
  createTickTextX,
  createTickTextY,
  createBaseAxes,
} from '../primitives/axis';

export class ScatterChartStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField, yField } = ctx;
    const chartGroup: SceneNode = {
      id: 'chart-main-group',
      type: 'group',
      attributes: { transform: `translate(${ctx.margin.left}, ${ctx.margin.top})` },
      children: [],
    };

    const gridGroup: SceneNode = { id: 'grid-group', type: 'group', attributes: {}, children: [] };
    const axesGroup: SceneNode = { id: 'axes-group', type: 'group', attributes: {}, children: [] };

    const xValues = spec.data.map((d) => Number(d[xField] ?? 0));
    const yValues = spec.data.map((d) => Number(d[yField] ?? 0));

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues) || 1;
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues) || 1;

    const xScale = createScaleLinear([minX * 0.9, maxX * 1.05], [0, innerWidth]);
    const yScale = createScaleLinear([minY * 0.9, maxY * 1.05], [innerHeight, 0]);

    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push(createGridLineY(`grid-y-${idx}`, y, innerWidth));
      axesGroup.children?.push(createScaleTickY(`scale-tick-y-${idx}`, y));
      axesGroup.children?.push(createTickTextY(`tick-y-${idx}`, -8, y + 3, formatNumber(t)));
    });

    xScale.ticks(5).forEach((t, idx) => {
      const x = xScale(t);
      axesGroup.children?.push(createScaleTickX(`scale-tick-x-${idx}`, x, innerHeight));
      axesGroup.children?.push(createTickTextX(`tick-x-${idx}`, x, innerHeight + 18, formatNumber(t)));
    });

    spec.data.forEach((d, i) => {
      const x = xScale(Number(d[xField] ?? 0));
      const y = yScale(Number(d[yField] ?? 0));
      chartGroup.children?.push({
        id: `scatter-dot-${i}`,
        type: 'rect',
        attributes: {
          x: x - 3,
          y: y - 3,
          width: 6,
          height: 6,
          fill: COLOR_WAYPOINT,
          stroke: COLOR_CONTOUR,
          'stroke-width': 1,
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
