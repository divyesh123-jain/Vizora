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

export class FunnelChartStrategy implements ChartLayoutStrategy {
  render(ctx: LayoutContext): SceneNode[] {
    const { spec, innerWidth, innerHeight, xField, yField } = ctx;
    const palette = resolveThemeColors(spec.config?.theme, spec.encoding.color?.field);
    const chartGroup: SceneNode = {
      id: 'chart-main-group',
      type: 'group',
      attributes: { transform: `translate(${ctx.margin.left}, ${ctx.margin.top})` },
      children: [],
    };

    const count = spec.data.length;
    if (count === 0) return [chartGroup];

    const values = spec.data.map((d) => parseNum(d[yField]));
    const maxVal = values[0] || 1; // Top stage is 100% width

    const stageHeight = (innerHeight - (count - 1) * 8) / count;
    const centerX = innerWidth / 2;

    spec.data.forEach((d, i) => {
      const stageName = String(d[xField] ?? `Stage ${i + 1}`);
      const val = parseNum(d[yField]);
      const prevVal = i > 0 ? parseNum(spec.data[i - 1][yField]) : val;
      const conversionPct = prevVal > 0 ? ((val / prevVal) * 100).toFixed(1) : '100.0';

      const topWidth = i === 0 ? innerWidth * 0.9 : (prevVal / maxVal) * (innerWidth * 0.9);
      const bottomWidth = (val / maxVal) * (innerWidth * 0.9);

      const topY = i * (stageHeight + 8);
      const bottomY = topY + stageHeight;

      const x1 = centerX - topWidth / 2;
      const x2 = centerX + topWidth / 2;
      const x3 = centerX + bottomWidth / 2;
      const x4 = centerX - bottomWidth / 2;

      const pathD = `M ${x1.toFixed(1)} ${topY.toFixed(1)} L ${x2.toFixed(1)} ${topY.toFixed(1)} L ${x3.toFixed(1)} ${bottomY.toFixed(1)} L ${x4.toFixed(1)} ${bottomY.toFixed(1)} Z`;
      const color = palette.series[i % palette.series.length];

      chartGroup.children?.push({
        id: `funnel-stage-${i}`,
        type: 'path',
        attributes: {
          d: pathD,
          fill: color,
          stroke: palette.contour,
          'stroke-width': 1.5,
          'data-vizora-item': 'true',
          'data-x-val': stageName,
          'data-y-val': `${formatNumber(val)} (${conversionPct}% retained)`,
          'data-index': String(i),
        },
      });

      // Stage label text centered inside trapezoid
      chartGroup.children?.push({
        id: `funnel-label-${i}`,
        type: 'text',
        attributes: {
          x: centerX,
          y: topY + stageHeight / 2 + 4,
          'text-anchor': 'middle',
          fill: '#ffffff',
          'font-size': 12,
          'font-weight': '600',
        },
        children: [{ id: `funnel-lbl-${i}`, type: 'text', attributes: { text: `${stageName}: ${formatNumber(val)}` } }],
      });
    });

    return [chartGroup];
  }
}
