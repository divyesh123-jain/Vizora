import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
  FONT_SERIF,
} from '../types';
import { createScaleLinear } from '../../scales/linear';
import { formatNumber } from '../../format/number';

export class KpiSparklineStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField, yField, margin } = ctx;
    const palette = resolveThemeColors(spec.config?.theme, spec.encoding.color?.field);

    const values = spec.data.map((d) => Number(d[yField] ?? d[xField] ?? 0)).filter((v) => !isNaN(v));
    const currentValue = values.length > 0 ? values[values.length - 1] : 0;
    const formattedVal = formatNumber(currentValue);

    const kpiGroup: SceneNode = {
      id: 'kpi-group',
      type: 'group',
      attributes: { transform: `translate(${margin.left}, ${margin.top})` },
      children: [
        {
          id: 'kpi-value',
          type: 'text',
          attributes: {
            x: 0,
            y: 45,
            fill: palette.contour,
            'font-size': 42,
            'font-weight': '600',
            'font-family': FONT_SERIF,
          },
          children: [{ id: 'kpi-val-text', type: 'text', attributes: { text: formattedVal } }],
        },
      ],
    };

    if (values.length > 1) {
      const minV = Math.min(...values);
      const maxV = Math.max(...values);
      const xScale = createScaleLinear([0, values.length - 1], [0, innerWidth]);
      const yScale = createScaleLinear([minV, maxV || 1], [innerHeight - 20, 80]);

      const points = values.map((v, i) => `${xScale(i).toFixed(1)},${yScale(v).toFixed(1)}`).join(' L ');
      const sparklinePath: SceneNode = {
        id: 'kpi-sparkline-path',
        type: 'path',
        attributes: {
          d: `M ${points}`,
          fill: 'none',
          stroke: palette.waypoint,
          'stroke-width': 2,
          'stroke-linecap': 'square',
          'stroke-linejoin': 'miter',
        },
      };
      kpiGroup.children?.push(sparklinePath);

      const lastX = xScale(values.length - 1);
      const lastY = yScale(values[values.length - 1]);
      kpiGroup.children?.push({
        id: 'kpi-waypoint-dot',
        type: 'rect',
        attributes: {
          x: lastX - 4,
          y: lastY - 4,
          width: 8,
          height: 8,
          fill: palette.waypoint,
          stroke: palette.contour,
          'stroke-width': 1,
        },
      });
    }

    return [kpiGroup];
  }
}
