import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
} from '../types';
import { createScaleBand } from '../../scales/band';
import { createScaleLinear } from '../../scales/linear';
import { binValues } from '../../transforms/bin';
import {
  createGridLineY,
  createScaleTickX,
  createScaleTickY,
  createTickTextX,
  createTickTextY,
  createBaseAxes,
} from '../primitives/axis';

export class HistogramChartStrategy implements ChartLayoutStrategy {
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

    const rawValues = spec.data.map((d) => Number(d[xField] ?? d[yField] ?? 0)).filter((v) => !isNaN(v));
    const bins = binValues(rawValues, spec.encoding.bins || 5);
    const maxCount = Math.max(...bins.map((b) => b.count), 1);

    const categories = bins.map((b) => b.label);
    const xScale = createScaleBand(categories, [0, innerWidth], 0.15);
    const yScale = createScaleLinear([0, maxCount], [innerHeight, 0]);

    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push(createGridLineY(`grid-y-${idx}`, y, innerWidth));
      axesGroup.children?.push(createScaleTickY(`scale-tick-y-${idx}`, y));
      axesGroup.children?.push(createTickTextY(`tick-y-${idx}`, -8, y + 3, String(Math.round(t))));
    });

    bins.forEach((b, i) => {
      const x = xScale(b.label);
      const y = yScale(b.count);
      const bw = xScale.bandwidth();
      const h = innerHeight - y;

      chartGroup.children?.push({
        id: `hist-bar-${i}`,
        type: 'rect',
        attributes: {
          x,
          y,
          width: bw,
          height: h,
          fill: palette.contour,
          rx: 0,
        },
      });

      axesGroup.children?.push(createScaleTickX(`scale-tick-x-${i}`, x + bw / 2, innerHeight));
      axesGroup.children?.push(createTickTextX(`tick-x-${i}`, x + bw / 2, innerHeight + 18, b.label));
    });

    axesGroup.children?.push(...createBaseAxes(innerWidth, innerHeight));

    if (spec.config?.showGrid !== false) {
      chartGroup.children?.unshift(gridGroup);
    }
    chartGroup.children?.push(axesGroup);

    return [chartGroup];
  }
}
