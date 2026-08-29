import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
  COLOR_FIELD_BRIGHT,
} from '../types';
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
  createAxisTitleX,
  createAxisTitleY,
  createInChartLegend,
  resolveAxisLabel,
} from '../primitives/axis';

export class ScatterChartStrategy implements ChartLayoutStrategy {
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

    const xValues = spec.data.map((d) => Number(d[xField] ?? 0));
    const yValues = spec.data.map((d) => Number(d[yField] ?? 0));

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues) || 1;
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues) || 1;

    const xScale = createScaleLinear([minX * 0.9, maxX * 1.05], [0, innerWidth]);
    const yScale = createScaleLinear([minY * 0.9, maxY * 1.05], [innerHeight, 0]);

    // 1. Horizontal gridlines (Y)
    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push(createGridLineY(`grid-y-${idx}`, y, innerWidth));
      axesGroup.children?.push(createScaleTickY(`scale-tick-y-${idx}`, y));
      axesGroup.children?.push(createTickTextY(`tick-y-${idx}`, -8, y + 4, formatNumber(t)));
    });

    // 2. Vertical gridlines (X)
    xScale.ticks(5).forEach((t, idx) => {
      const x = xScale(t);
      gridGroup.children?.push(createGridLineX(`grid-x-${idx}`, x, innerHeight));
      axesGroup.children?.push(createScaleTickX(`scale-tick-x-${idx}`, x, innerHeight));
      axesGroup.children?.push(createTickTextX(`tick-x-${idx}`, x, innerHeight + 18, formatNumber(t)));
    });

    const seriesField = spec.encoding.series?.field || spec.encoding.color?.field;
    const isMultiSeries = Boolean(seriesField);

    spec.data.forEach((d, i) => {
      const xVal = Number(d[xField] ?? 0);
      const yVal = Number(d[yField] ?? 0);
      const x = xScale(xVal);
      const y = yScale(yVal);
      const dotColor = isMultiSeries
        ? palette.series[i % palette.series.length]
        : palette.waypoint;

      chartGroup.children?.push({
        id: `scatter-dot-${i}`,
        type: 'circle',
        attributes: {
          cx: x,
          cy: y,
          r: 5,
          fill: dotColor,
          stroke: COLOR_FIELD_BRIGHT(),
          'stroke-width': 1.5,
          'data-vizora-item': 'true',
          'data-x-val': formatNumber(xVal),
          'data-y-val': formatNumber(yVal),
          'data-index': String(i),
        },
      });
    });

    if (spec.config?.showLegend !== false) {
      const legendItems = isMultiSeries
        ? Array.from(new Set(spec.data.map((d) => String(d[seriesField!] ?? '')))).map((label, sIdx) => ({
            label,
            color: palette.series[sIdx % palette.series.length],
          }))
        : [
            {
              label: `${xField} vs ${yField}`,
              color: palette.waypoint,
            },
          ];

      const legendNode = createInChartLegend(
        'scatter-series-legend',
        legendItems,
        innerWidth,
        -14,
        palette.datum,
        'circle'
      );
      if (legendNode) {
        chartGroup.children?.push(legendNode);
      }
    }

    const xLabel = resolveAxisLabel(spec.encoding.x?.label, spec.encoding.x?.field, xField);
    const yLabel = resolveAxisLabel(spec.encoding.y?.label, spec.encoding.y?.field, yField);

    axesGroup.children?.push(createAxisTitleX('axis-title-x', innerWidth, innerHeight, xLabel, palette.datum));
    axesGroup.children?.push(createAxisTitleY('axis-title-y', innerHeight, yLabel, palette.datum));

    axesGroup.children?.push(...createBaseAxes(innerWidth, innerHeight));

    if (spec.config?.showGrid !== false) {
      chartGroup.children?.unshift(gridGroup);
    }
    chartGroup.children?.push(axesGroup);

    return [chartGroup];
  }
}
