import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
} from '../types';
import { formatNumber } from '../../format/number';

const parseNum = (v: unknown): number => {
  const n = Number(v);
  return isNaN(n) ? 0 : n;
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
      const sliceAngle = (val / total) * 2 * Math.PI;
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

        pathD = `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${outerRadius.toFixed(1)} ${outerRadius.toFixed(1)} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} L ${x3.toFixed(1)} ${y3.toFixed(1)} A ${innerRadius.toFixed(1)} ${innerRadius.toFixed(1)} 0 ${largeArc} 0 ${x4.toFixed(1)} ${y4.toFixed(1)} Z`;
      } else {
        // Pie slice
        pathD = `M ${cx.toFixed(1)} ${cy.toFixed(1)} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${outerRadius.toFixed(1)} ${outerRadius.toFixed(1)} 0 ${largeArc} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z`;
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
          y: cy - 4,
          'text-anchor': 'middle',
          fill: palette.contour,
          'font-size': 18,
          'font-weight': '700',
        },
        children: [{ id: 'total-val', type: 'text', attributes: { text: formatNumber(total) } }],
      });
      chartGroup.children?.push({
        id: 'donut-center-label',
        type: 'text',
        attributes: {
          x: cx,
          y: cy + 16,
          'text-anchor': 'middle',
          fill: palette.datum,
          'font-size': 11,
          'font-weight': '500',
        },
        children: [{ id: 'total-lbl', type: 'text', attributes: { text: 'TOTAL' } }],
      });
    }

    return [chartGroup];
  }
}
