import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
} from '../types';
import { formatNumber } from '../../format/number';

const parseNum = (v: unknown, fallback = 0): number => {
  const n = Number(v);
  return isNaN(n) ? fallback : n;
};

export class DonutChartStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField, yField } = ctx;
    const palette = resolveThemeColors(spec.config?.theme, spec.encoding.color?.field);
    const chartGroup: SceneNode = {
      id: 'chart-main-group',
      type: 'group',
      attributes: { transform: `translate(${ctx.margin.left}, ${ctx.margin.top})` },
      children: [],
    };

    if (!spec.data || spec.data.length === 0) {
      return [chartGroup];
    }

    const isPie = spec.type === 'pie';
    const cx = innerWidth / 2;
    const cy = innerHeight / 2;
    const outerRadius = Math.min(innerWidth, innerHeight) / 2 * 0.85;
    const innerRadius = isPie ? 0 : outerRadius * 0.58;

    const values = spec.data.map((d) => parseNum(d[yField]));
    const total = values.reduce((sum, v) => sum + v, 0) || 1;

    let currentAngle = -Math.PI / 2; // Start from top 12 o'clock

    spec.data.forEach((d, i) => {
      const cat = String(d[xField] ?? `Category ${i + 1}`);
      const val = parseNum(d[yField]);
      // Cap slice angle slightly below 2*PI if single item to avoid SVG arc singularity
      const sliceAngle = Math.min((val / total) * 2 * Math.PI, 2 * Math.PI - 0.0001);
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      currentAngle = endAngle;

      const largeArc = sliceAngle > Math.PI ? 1 : 0;
      const color = palette.series[i % palette.series.length];

      // Outer arc points
      const x1 = cx + outerRadius * Math.cos(startAngle);
      const y1 = cy + outerRadius * Math.sin(startAngle);
      const x2 = cx + outerRadius * Math.cos(endAngle);
      const y2 = cy + outerRadius * Math.sin(endAngle);

      let pathD = '';

      if (innerRadius > 0) {
        // Donut slice with inner cutout
        const x3 = cx + innerRadius * Math.cos(endAngle);
        const y3 = cy + innerRadius * Math.sin(endAngle);
        const x4 = cx + innerRadius * Math.cos(startAngle);
        const y4 = cy + innerRadius * Math.sin(startAngle);

        pathD = `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${outerRadius.toFixed(2)} ${outerRadius.toFixed(2)} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${x3.toFixed(2)} ${y3.toFixed(2)} A ${innerRadius.toFixed(2)} ${innerRadius.toFixed(2)} 0 ${largeArc} 0 ${x4.toFixed(2)} ${y4.toFixed(2)} Z`;
      } else {
        // Pie slice
        pathD = `M ${cx.toFixed(2)} ${cy.toFixed(2)} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${outerRadius.toFixed(2)} ${outerRadius.toFixed(2)} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
      }

      chartGroup.children?.push({
        id: `slice-${i}`,
        type: 'path',
        attributes: {
          d: pathD,
          fill: color,
          stroke: palette.contour,
          'stroke-width': 1.5,
          'data-vizora-item': 'true',
          'data-x-val': cat,
          'data-y-val': `${formatNumber(val)} (${((val / total) * 100).toFixed(1)}%)`,
          'data-index': String(i),
        },
      });
    });

    // Center metric text for Donut Chart
    if (!isPie) {
      chartGroup.children?.push({
        id: 'donut-center-total',
        type: 'text',
        attributes: {
          x: cx,
          y: cy - 2,
          'text-anchor': 'middle',
          fill: palette.contour,
          'font-size': Math.min(20, Math.max(14, innerRadius * 0.45)),
          'font-weight': '700',
          'font-family': 'system-ui, -apple-system, sans-serif',
        },
        children: [{ id: 'total-val', type: 'text', attributes: { text: formatNumber(total) } }],
      });
      chartGroup.children?.push({
        id: 'donut-center-label',
        type: 'text',
        attributes: {
          x: cx,
          y: cy + 18,
          'text-anchor': 'middle',
          fill: palette.datum,
          'font-size': 10,
          'font-weight': '600',
          'letter-spacing': '0.05em',
          'font-family': 'system-ui, -apple-system, sans-serif',
        },
        children: [{ id: 'total-lbl', type: 'text', attributes: { text: 'TOTAL' } }],
      });
    }

    return [chartGroup];
  }
}
