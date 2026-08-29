import {
  ChartLayoutStrategy,
  LayoutContext,
  SceneNode,
  resolveThemeColors,
  COLOR_FIELD_BRIGHT,
} from '../types';
import { createScaleBand } from '../../scales/band';
import { createScaleLinear } from '../../scales/linear';
import { createScaleTime } from '../../scales/time';
import { formatNumber } from '../../format/number';
import { formatDate } from '../../format/date';
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
  generateSmoothBezierPath,
  resolveAxisLabel,
} from '../primitives/axis';

const parseNum = (v: unknown): number => {
  const n = Number(v);
  return isNaN(n) ? 0 : n;
};

export class LineChartStrategy implements ChartLayoutStrategy {
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

    const rawDates = spec.data.map((d) => new Date(String(d[xField] ?? '')));
    const isTemporal = rawDates.every((dt) => !isNaN(dt.getTime()));

    // Detect series format: explicit series field (long format) OR multiple numeric fields (wide format)
    const seriesField = spec.encoding.series?.field || spec.encoding.color?.field;
    const firstRow = spec.data[0] || {};
    const numericKeys = Object.keys(firstRow).filter(
      (k) => k !== xField && typeof firstRow[k] === 'number'
    );

    const isLongFormat = Boolean(seriesField);
    const isWideMultiSeries = !isLongFormat && numericKeys.length > 1 && (!spec.encoding.y?.field || numericKeys.includes(spec.encoding.y.field));

    let seriesKeys: string[] = [];
    if (isLongFormat) {
      seriesKeys = Array.from(new Set(spec.data.map((d) => String(d[seriesField!] ?? ''))));
    } else if (isWideMultiSeries) {
      seriesKeys = numericKeys;
    } else {
      seriesKeys = [yField];
    }

    // Compute max value across all series/columns
    let allValues: number[] = [];
    if (isWideMultiSeries) {
      spec.data.forEach((d) => {
        seriesKeys.forEach((k) => allValues.push(parseNum(d[k])));
      });
    } else {
      allValues = spec.data.map((d) => parseNum(d[yField]));
    }

    const maxVal = Math.max(...allValues, 0) || 1;
    const yScale = createScaleLinear([0, maxVal * 1.1], [innerHeight, 0]);

    let getXPos: (d: Record<string, unknown>, i: number) => number;
    let xTickLabels: { pos: number; label: string }[] = [];

    if (isTemporal && rawDates.length > 0) {
      const minTime = rawDates[0];
      const maxTime = rawDates[rawDates.length - 1];
      const xScale = createScaleTime([minTime, maxTime], [0, innerWidth]);
      getXPos = (d) => xScale(new Date(String(d[xField] ?? '')));

      xTickLabels = spec.data.map((d) => {
        const dt = new Date(String(d[xField] ?? ''));
        return { pos: xScale(dt), label: formatDate(dt) };
      });
    } else {
      const categories = Array.from(new Set(spec.data.map((d) => String(d[xField] ?? ''))));
      const xScale = createScaleBand(categories, [0, innerWidth], 0);
      getXPos = (d) => xScale(String(d[xField] ?? '')) + xScale.bandwidth() / 2;
      xTickLabels = categories.map((cat) => ({
        pos: xScale(cat) + xScale.bandwidth() / 2,
        label: cat,
      }));
    }

    // 1. Horizontal gridlines (Y)
    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push(createGridLineY(`grid-y-${idx}`, y, innerWidth));
      axesGroup.children?.push(createScaleTickY(`scale-tick-y-${idx}`, y));
      axesGroup.children?.push(createTickTextY(`tick-y-${idx}`, -8, y + 4, formatNumber(t)));
    });

    // 2. Vertical gridlines (X) and Ticks
    xTickLabels.forEach((t, idx) => {
      gridGroup.children?.push(createGridLineX(`grid-x-${idx}`, t.pos, innerHeight));
      axesGroup.children?.push(createScaleTickX(`scale-tick-x-${idx}`, t.pos, innerHeight));
      axesGroup.children?.push(createTickTextX(`tick-x-${idx}`, t.pos, innerHeight + 18, t.label));
    });

    // 3. Render series lines and points
    if (isWideMultiSeries) {
      // Wide format: each series is a separate numeric column
      seriesKeys.forEach((sKey, sIdx) => {
        const sColor = palette.series[sIdx % palette.series.length];
        const sPoints = spec.data.map((d, i) => ({
          x: getXPos(d, i),
          y: yScale(parseNum(d[sKey])),
        }));

        const smoothPath = generateSmoothBezierPath(sPoints);

        chartGroup.children?.push({
          id: `line-path-${sIdx}`,
          type: 'path',
          attributes: {
            d: smoothPath,
            fill: 'none',
            stroke: sColor,
            'stroke-width': 2.5,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
          },
        });

        spec.data.forEach((d, i) => {
          const x = getXPos(d, i);
          const val = parseNum(d[sKey]);
          const y = yScale(val);
          const xVal = isTemporal ? formatDate(new Date(String(d[xField] ?? ''))) : String(d[xField] ?? '');

          chartGroup.children?.push({
            id: `line-dot-${sIdx}-${i}`,
            type: 'circle',
            attributes: {
              cx: x,
              cy: y,
              r: 4.5,
              fill: sColor,
              stroke: COLOR_FIELD_BRIGHT(),
              'stroke-width': 2,
              'data-vizora-item': 'true',
              'data-x-val': `${xVal} (${sKey})`,
              'data-y-val': String(val),
              'data-index': `${sIdx}-${i}`,
            },
          });
        });
      });
    } else if (isLongFormat && seriesKeys.length > 1) {
      // Long format: records tagged by series field
      seriesKeys.forEach((sKey, sIdx) => {
        const sData = spec.data.filter((d) => String(d[seriesField!] ?? '') === sKey);
        const sColor = palette.series[sIdx % palette.series.length];

        const sPoints = sData.map((d, i) => ({
          x: getXPos(d, i),
          y: yScale(parseNum(d[yField])),
        }));

        const smoothPath = generateSmoothBezierPath(sPoints);

        chartGroup.children?.push({
          id: `line-path-${sIdx}`,
          type: 'path',
          attributes: {
            d: smoothPath,
            fill: 'none',
            stroke: sColor,
            'stroke-width': 2.5,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
          },
        });

        sData.forEach((d, i) => {
          const x = getXPos(d, i);
          const val = parseNum(d[yField]);
          const y = yScale(val);
          const xVal = isTemporal ? formatDate(new Date(String(d[xField] ?? ''))) : String(d[xField] ?? '');

          chartGroup.children?.push({
            id: `line-dot-${sIdx}-${i}`,
            type: 'circle',
            attributes: {
              cx: x,
              cy: y,
              r: 4.5,
              fill: sColor,
              stroke: COLOR_FIELD_BRIGHT(),
              'stroke-width': 2,
              'data-vizora-item': 'true',
              'data-x-val': `${xVal} (${sKey})`,
              'data-y-val': String(val),
              'data-index': `${sIdx}-${i}`,
            },
          });
        });
      });
    } else {
      // Single series
      const pointsList = spec.data.map((d, i) => ({
        x: getXPos(d, i),
        y: yScale(parseNum(d[yField])),
      }));

      const smoothPath = generateSmoothBezierPath(pointsList);

      if (spec.encoding.area !== false) {
        const firstX = getXPos(spec.data[0], 0);
        const lastX = getXPos(spec.data[spec.data.length - 1], spec.data.length - 1);
        const gradId = `vizora-line-area-grad`;
        chartGroup.children?.push({
          id: 'area-defs',
          type: 'defs',
          attributes: {},
          children: [
            {
              id: gradId,
              type: 'linearGradient',
              attributes: { x1: '0', y1: '0', x2: '0', y2: '1' },
              children: [
                { id: 'stop-1', type: 'stop', attributes: { offset: '0%', 'stop-color': palette.waypoint, 'stop-opacity': 0.35 } },
                { id: 'stop-2', type: 'stop', attributes: { offset: '100%', 'stop-color': palette.waypoint, 'stop-opacity': 0.02 } },
              ],
            },
          ],
        });

        const areaD = `${smoothPath} L ${lastX.toFixed(1)},${innerHeight} L ${firstX.toFixed(1)},${innerHeight} Z`;
        chartGroup.children?.push({
          id: 'area-path',
          type: 'path',
          attributes: {
            d: areaD,
            fill: `url(#${gradId})`,
            stroke: 'none',
          },
        });
      }

      chartGroup.children?.push({
        id: 'line-path',
        type: 'path',
        attributes: {
          d: smoothPath,
          fill: 'none',
          stroke: palette.waypoint,
          'stroke-width': 2.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        },
      });

      const maxValIdx = allValues.indexOf(maxVal);

      spec.data.forEach((d, i) => {
        const x = getXPos(d, i);
        const val = parseNum(d[yField]);
        const y = yScale(val);
        const xVal = isTemporal ? formatDate(new Date(String(d[xField] ?? ''))) : String(d[xField] ?? '');

        chartGroup.children?.push({
          id: `line-dot-${i}`,
          type: 'circle',
          attributes: {
            cx: x,
            cy: y,
            r: 4.5,
            fill: i === maxValIdx ? palette.waypoint : palette.waypoint,
            stroke: COLOR_FIELD_BRIGHT(),
            'stroke-width': 2,
            'data-vizora-item': 'true',
            'data-x-val': xVal,
            'data-y-val': String(val),
            'data-index': String(i),
          },
        });
      });
    }

    // 4. In-Chart Legend (Top-Right aligned with line-dot icon)
    if (spec.config?.showLegend !== false) {
      const legendItems = (isWideMultiSeries || (isLongFormat && seriesKeys.length > 1))
        ? seriesKeys.map((k, sIdx) => ({
            label: k,
            color: palette.series[sIdx % palette.series.length],
            fill: palette.series[sIdx % palette.series.length],
          }))
        : [
            {
              label: yField,
              color: palette.waypoint,
              fill: palette.waypoint,
            },
          ];

      const legendNode = createInChartLegend(
        'line-series-legend',
        legendItems,
        innerWidth,
        -14,
        palette.datum,
        'line-dot'
      );
      if (legendNode) {
        chartGroup.children?.push(legendNode);
      }
    }

    const xLabel = resolveAxisLabel(spec.encoding.x?.label, spec.encoding.x?.field, xField);
    const yLabel = isWideMultiSeries
      ? (spec.encoding.y?.label || 'Metric Values')
      : resolveAxisLabel(spec.encoding.y?.label, spec.encoding.y?.field, yField);

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
