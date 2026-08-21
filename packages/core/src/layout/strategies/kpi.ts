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

    // Compute trend direction
    const prevValue = values.length > 1 ? values[values.length - 2] : currentValue;
    const trendUp = currentValue >= prevValue;
    const trendPct = prevValue > 0 ? (((currentValue - prevValue) / prevValue) * 100).toFixed(1) : '0.0';
    const trendLabel = `${trendUp ? '+' : ''}${trendPct}%`;

    const kpiGroup: SceneNode = {
      id: 'kpi-group',
      type: 'group',
      attributes: { transform: `translate(${margin.left}, ${margin.top})` },
      children: [
        // Large headline value
        {
          id: 'kpi-value',
          type: 'text',
          attributes: {
            x: 0,
            y: 36,
            fill: palette.contour,
            'font-size': 38,
            'font-weight': '700',
            'font-family': FONT_SERIF,
          },
          children: [{ id: 'kpi-val-text', type: 'text', attributes: { text: formattedVal } }],
        },
        // Trend indicator
        {
          id: 'kpi-trend',
          type: 'text',
          attributes: {
            x: 0,
            y: 56,
            fill: trendUp ? '#10b981' : '#ef4444',
            'font-size': 13,
            'font-weight': '600',
            'font-family': FONT_SERIF,
          },
          children: [{ id: 'kpi-trend-text', type: 'text', attributes: { text: `${trendUp ? '▲' : '▼'} ${trendLabel} from previous` } }],
        },
      ],
    };

    if (values.length > 1) {
      const minV = Math.min(...values);
      const maxV = Math.max(...values);
      // Sparkline occupies lower portion of the chart area
      const sparkTop = 75;
      const sparkBottom = innerHeight - 10;
      const xScale = createScaleLinear([0, values.length - 1], [0, innerWidth]);
      const yScale = createScaleLinear([minV * 0.95, (maxV || 1) * 1.05], [sparkBottom, sparkTop]);

      const points = values.map((v, i) => `${xScale(i).toFixed(1)},${yScale(v).toFixed(1)}`).join(' L ');

      // Area fill under sparkline
      const firstX = xScale(0);
      const lastX = xScale(values.length - 1);
      const gradId = 'vizora-kpi-sparkline-grad';
      kpiGroup.children?.push({
        id: 'kpi-area-defs',
        type: 'defs',
        attributes: {},
        children: [
          {
            id: gradId,
            type: 'linearGradient',
            attributes: { x1: '0', y1: '0', x2: '0', y2: '1' },
            children: [
              { id: 'kpi-stop-1', type: 'stop', attributes: { offset: '0%', 'stop-color': palette.waypoint, 'stop-opacity': 0.25 } },
              { id: 'kpi-stop-2', type: 'stop', attributes: { offset: '100%', 'stop-color': palette.waypoint, 'stop-opacity': 0.02 } },
            ],
          },
        ],
      });

      const areaD = `M ${points} L ${lastX.toFixed(1)},${sparkBottom} L ${firstX.toFixed(1)},${sparkBottom} Z`;
      kpiGroup.children?.push({
        id: 'kpi-sparkline-area',
        type: 'path',
        attributes: {
          d: areaD,
          fill: `url(#${gradId})`,
          stroke: 'none',
        },
      });

      // Sparkline path
      kpiGroup.children?.push({
        id: 'kpi-sparkline-path',
        type: 'path',
        attributes: {
          d: `M ${points}`,
          fill: 'none',
          stroke: palette.waypoint,
          'stroke-width': 2.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
      });

      // Endpoint waypoint dot
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
          'stroke-width': 1.5,
          'data-vizora-item': 'true',
          'data-x-val': spec.title || 'Current',
          'data-y-val': formattedVal,
          'data-index': String(values.length - 1),
        },
      });
    }

    return [kpiGroup];
  }
}
