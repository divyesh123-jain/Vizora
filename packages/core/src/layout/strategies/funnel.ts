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

    const count = spec.data?.length ?? 0;
    if (count === 0) return [chartGroup];

    const values = spec.data.map((d) => parseNum(d[yField]));
    const maxVal = Math.max(...values, 1);

    const gap = Math.min(8, Math.max(3, 40 / count));
    const stageHeight = Math.max(16, (innerHeight - (count - 1) * gap) / count);
    const centerX = innerWidth / 2;
    const maxFunnelWidth = innerWidth * 0.92;
    const minStageWidth = Math.min(60, innerWidth * 0.2);

    spec.data.forEach((d, i) => {
      const stageName = String(d[xField] ?? `Stage ${i + 1}`);
      const val = parseNum(d[yField]);
      const prevVal = i > 0 ? parseNum(spec.data[i - 1][yField]) : val;
      const conversionPct = prevVal > 0 ? ((val / prevVal) * 100).toFixed(1) : '100.0';
      const overallPct = ((val / maxVal) * 100).toFixed(1);

      // Interpolate width with a minimum base so lower stages are always clickable/visible
      const prevRatio = i === 0 ? 1 : Math.max(0.12, prevVal / maxVal);
      const currRatio = Math.max(0.12, val / maxVal);

      const topWidth = Math.max(minStageWidth, prevRatio * maxFunnelWidth);
      const bottomWidth = Math.max(minStageWidth, currRatio * maxFunnelWidth);

      const topY = i * (stageHeight + gap);
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
          'data-y-val': `${formatNumber(val)} (${conversionPct}% step, ${overallPct}% total)`,
          'data-index': String(i),
        },
      });

      // Stage label text centered inside trapezoid
      const labelFontSize = Math.min(13, Math.max(10, stageHeight * 0.35));
      chartGroup.children?.push({
        id: `funnel-label-${i}`,
        type: 'text',
        attributes: {
          x: centerX,
          y: topY + stageHeight / 2 + 4,
          'text-anchor': 'middle',
          fill: '#ffffff',
          'font-size': labelFontSize,
          'font-weight': '600',
          'font-family': 'system-ui, -apple-system, sans-serif',
        },
        children: [{ id: `funnel-lbl-${i}`, type: 'text', attributes: { text: `${stageName}: ${formatNumber(val)}` } }],
      });
    });

    return [chartGroup];
  }
}
