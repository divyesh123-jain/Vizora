import { ChartSpec } from '../spec/types';
import { validateChartSpec } from '../spec/validate';
import { createScaleLinear } from '../scales/linear';
import { createScaleBand } from '../scales/band';
import { createScaleTime } from '../scales/time';
import { binValues } from '../transforms/bin';
import { formatNumber } from '../format/number';
import { formatDate } from '../format/date';

export interface SceneNode {
  id: string;
  type: 'group' | 'line' | 'rect' | 'circle' | 'text' | 'path';
  attributes: Record<string, string | number>;
  children?: SceneNode[];
}

export interface SceneGraph {
  width: number;
  height: number;
  viewBox: string;
  children: SceneNode[];
}

// Cartography of Data Palette Tokens with Shadcn CSS Variable fallbacks
const COLOR_CONTOUR = 'var(--foreground, #1e2a22)';
const COLOR_DATUM = 'var(--muted-foreground, #6e756a)';
const COLOR_WAYPOINT = 'var(--chart-1, #c2872e)';
const COLOR_FLARE = 'var(--chart-3, #d6502b)';
const COLOR_DEPTH = 'var(--chart-2, #b9c4b4)';
const COLOR_GRID_LINE = 'var(--border, rgba(110, 117, 106, 0.2))';
const FONT_MONO = 'var(--font-mono, IBM Plex Mono, monospace)';
const FONT_SERIF = 'var(--font-sans, system-ui, sans-serif)';

export function buildSceneGraph(inputSpec: unknown): SceneGraph {
  const spec = validateChartSpec(inputSpec);
  const width = spec.config?.width ?? 600;
  const height = spec.config?.height ?? 380;
  const margin = spec.config?.margin ?? { top: 40, right: 30, bottom: 50, left: 60 };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const scene: SceneGraph = {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`,
    children: [],
  };

  // Title rendering
  if (spec.title) {
    scene.children.push({
      id: 'title',
      type: 'text',
      attributes: {
        x: width / 2,
        y: 24,
        'text-anchor': 'middle',
        fill: COLOR_CONTOUR,
        'font-size': 15,
        'font-weight': '600',
        'font-family': FONT_SERIF,
      },
      children: [{ id: 'title-text', type: 'text', attributes: { text: spec.title } }],
    });
  }

  const xField = spec.encoding.x?.field || Object.keys(spec.data[0] || {})[0] || 'x';
  const yField = spec.encoding.y?.field || Object.keys(spec.data[0] || {})[1] || 'y';

  // KPI + Sparkline special rendering
  if (spec.type === 'kpi-sparkline') {
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
            fill: COLOR_CONTOUR,
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
          stroke: COLOR_WAYPOINT,
          'stroke-width': 2,
          'stroke-linecap': 'square',
          'stroke-linejoin': 'miter',
        },
      };
      kpiGroup.children?.push(sparklinePath);

      // Last value waypoint dot (square)
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
          fill: COLOR_WAYPOINT,
          stroke: COLOR_CONTOUR,
          'stroke-width': 1,
        },
      });
    }

    scene.children.push(kpiGroup);
    return scene;
  }

  // Create main chart content group
  const chartGroup: SceneNode = {
    id: 'chart-main-group',
    type: 'group',
    attributes: { transform: `translate(${margin.left}, ${margin.top})` },
    children: [],
  };

  const gridGroup: SceneNode = { id: 'grid-group', type: 'group', attributes: {}, children: [] };
  const axesGroup: SceneNode = { id: 'axes-group', type: 'group', attributes: {}, children: [] };

  const isHorizontalBar = spec.type === 'bar' && spec.encoding.orientation === 'horizontal';

  if (spec.type === 'bar') {
    if (isHorizontalBar) {
      const categories = spec.data.map((d) => String(d[yField] ?? ''));
      const values = spec.data.map((d) => Number(d[xField] ?? 0));
      const maxVal = Math.max(...values, 0) || 1;
      const maxValIdx = values.indexOf(maxVal);

      const yScale = createScaleBand(categories, [0, innerHeight], 0.25);
      const xScale = createScaleLinear([0, maxVal], [0, innerWidth]);

      // Grid lines & Scale Bar Ticks (X axis)
      xScale.ticks(5).forEach((t, idx) => {
        const x = xScale(t);
        gridGroup.children?.push({
          id: `grid-x-${idx}`,
          type: 'line',
          attributes: { x1: x, y1: 0, x2: x, y2: innerHeight, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
        });
        // 4px Scale Bar Tick
        axesGroup.children?.push({
          id: `scale-tick-x-${idx}`,
          type: 'line',
          attributes: { x1: x, y1: innerHeight, x2: x, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
        });
        axesGroup.children?.push({
          id: `tick-x-${idx}`,
          type: 'text',
          attributes: {
            x,
            y: innerHeight + 18,
            fill: COLOR_DATUM,
            'font-size': 10,
            'text-anchor': 'middle',
            'font-family': FONT_MONO,
          },
          children: [{ id: `tick-x-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
        });
      });

      // Render horizontal bars
      spec.data.forEach((d, i) => {
        const cat = String(d[yField] ?? '');
        const val = Number(d[xField] ?? 0);
        const y = yScale(cat);
        const bw = yScale.bandwidth();
        const w = xScale(val);

        chartGroup.children?.push({
          id: `bar-${i}`,
          type: 'rect',
          attributes: {
            x: 0,
            y,
            width: w,
            height: bw,
            fill: i === maxValIdx ? COLOR_WAYPOINT : COLOR_CONTOUR,
            rx: 0,
          },
        });

        // 4px Scale Bar Tick (Y axis)
        axesGroup.children?.push({
          id: `scale-tick-y-${i}`,
          type: 'line',
          attributes: { x1: -4, y1: y + bw / 2, x2: 0, y2: y + bw / 2, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
        });

        axesGroup.children?.push({
          id: `tick-y-${i}`,
          type: 'text',
          attributes: {
            x: -8,
            y: y + bw / 2 + 3,
            fill: COLOR_DATUM,
            'font-size': 10,
            'text-anchor': 'end',
            'font-family': FONT_MONO,
          },
          children: [{ id: `tick-y-txt-${i}`, type: 'text', attributes: { text: cat } }],
        });
      });

      // Flag Pin Anomaly on Max Bar
      if (maxValIdx >= 0) {
        const maxCat = String(spec.data[maxValIdx][yField] ?? '');
        const maxBarY = yScale(maxCat) + yScale.bandwidth() / 2;
        const maxBarX = xScale(maxVal);
        chartGroup.children?.push(
          {
            id: 'flag-pin-stem',
            type: 'line',
            attributes: { x1: maxBarX, y1: maxBarY, x2: maxBarX + 12, y2: maxBarY, stroke: COLOR_FLARE, 'stroke-width': 1 },
          },
          {
            id: 'flag-pin-top',
            type: 'rect',
            attributes: { x: maxBarX + 12, y: maxBarY - 2, width: 4, height: 4, fill: COLOR_FLARE },
          }
        );
      }
    } else {
      const categories = spec.data.map((d) => String(d[xField] ?? ''));
      const values = spec.data.map((d) => Number(d[yField] ?? 0));
      const maxVal = Math.max(...values, 0) || 1;
      const maxValIdx = values.indexOf(maxVal);

      const xScale = createScaleBand(categories, [0, innerWidth], 0.25);
      const yScale = createScaleLinear([0, maxVal], [innerHeight, 0]);

      // Y Grid & Ticks
      yScale.ticks(5).forEach((t, idx) => {
        const y = yScale(t);
        gridGroup.children?.push({
          id: `grid-y-${idx}`,
          type: 'line',
          attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
        });
        // 4px Scale Bar Tick (Y axis)
        axesGroup.children?.push({
          id: `scale-tick-y-${idx}`,
          type: 'line',
          attributes: { x1: -4, y1: y, x2: 0, y2: y, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
        });
        axesGroup.children?.push({
          id: `tick-y-${idx}`,
          type: 'text',
          attributes: {
            x: -8,
            y: y + 3,
            fill: COLOR_DATUM,
            'font-size': 10,
            'text-anchor': 'end',
            'font-family': FONT_MONO,
          },
          children: [{ id: `tick-y-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
        });
      });

      // Render vertical bars
      spec.data.forEach((d, i) => {
        const cat = String(d[xField] ?? '');
        const val = Number(d[yField] ?? 0);
        const x = xScale(cat);
        const y = yScale(val);
        const bw = xScale.bandwidth();
        const h = innerHeight - y;

        chartGroup.children?.push({
          id: `bar-${i}`,
          type: 'rect',
          attributes: {
            x,
            y,
            width: bw,
            height: h,
            fill: i === maxValIdx ? COLOR_WAYPOINT : COLOR_CONTOUR,
            rx: 0,
          },
        });

        // 4px Scale Bar Tick (X axis)
        axesGroup.children?.push({
          id: `scale-tick-x-${i}`,
          type: 'line',
          attributes: { x1: x + bw / 2, y1: innerHeight, x2: x + bw / 2, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
        });

        axesGroup.children?.push({
          id: `tick-x-${i}`,
          type: 'text',
          attributes: {
            x: x + bw / 2,
            y: innerHeight + 18,
            fill: COLOR_DATUM,
            'font-size': 10,
            'text-anchor': 'middle',
            'font-family': FONT_MONO,
          },
          children: [{ id: `tick-x-txt-${i}`, type: 'text', attributes: { text: cat } }],
        });
      });

      // Flag Pin Anomaly on Max Bar
      if (maxValIdx >= 0) {
        const maxCat = String(spec.data[maxValIdx][xField] ?? '');
        const maxBarX = xScale(maxCat) + xScale.bandwidth() / 2;
        const maxBarY = yScale(maxVal);
        chartGroup.children?.push(
          {
            id: 'flag-pin-stem',
            type: 'line',
            attributes: { x1: maxBarX, y1: maxBarY, x2: maxBarX, y2: maxBarY - 12, stroke: COLOR_FLARE, 'stroke-width': 1 },
          },
          {
            id: 'flag-pin-top',
            type: 'rect',
            attributes: { x: maxBarX - 2, y: maxBarY - 16, width: 4, height: 4, fill: COLOR_FLARE },
          }
        );
      }
    }
  } else if (spec.type === 'line') {
    const rawDates = spec.data.map((d) => new Date(String(d[xField] ?? '')));
    const isTemporal = rawDates.every((dt) => !isNaN(dt.getTime()));

    const values = spec.data.map((d) => Number(d[yField] ?? 0));
    const maxVal = Math.max(...values, 0) || 1;
    const maxValIdx = values.indexOf(maxVal);
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
      const categories = spec.data.map((d) => String(d[xField] ?? ''));
      const xScale = createScaleBand(categories, [0, innerWidth], 0);
      getXPos = (d) => xScale(String(d[xField] ?? '')) + xScale.bandwidth() / 2;
      xTickLabels = categories.map((cat) => ({
        pos: xScale(cat) + xScale.bandwidth() / 2,
        label: cat,
      }));
    }

    // Y Grid & Ticks
    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push({
        id: `grid-y-${idx}`,
        type: 'line',
        attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
      });
      // 4px Scale Bar Tick (Y axis)
      axesGroup.children?.push({
        id: `scale-tick-y-${idx}`,
        type: 'line',
        attributes: { x1: -4, y1: y, x2: 0, y2: y, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
      });
      axesGroup.children?.push({
        id: `tick-y-${idx}`,
        type: 'text',
        attributes: {
          x: -8,
          y: y + 3,
          fill: COLOR_DATUM,
          'font-size': 10,
          'text-anchor': 'end',
          'font-family': FONT_MONO,
        },
        children: [{ id: `tick-y-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
      });
    });

    // X Ticks & Scale Bar Ticks
    xTickLabels.forEach((t, idx) => {
      axesGroup.children?.push({
        id: `scale-tick-x-${idx}`,
        type: 'line',
        attributes: { x1: t.pos, y1: innerHeight, x2: t.pos, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
      });
      axesGroup.children?.push({
        id: `tick-x-${idx}`,
        type: 'text',
        attributes: {
          x: t.pos,
          y: innerHeight + 18,
          fill: COLOR_DATUM,
          'font-size': 10,
          'text-anchor': 'middle',
          'font-family': FONT_MONO,
        },
        children: [{ id: `tick-x-txt-${idx}`, type: 'text', attributes: { text: t.label } }],
      });
    });

    // Line Path
    const points = spec.data
      .map((d, i) => {
        const x = getXPos(d, i);
        const y = yScale(Number(d[yField] ?? 0));
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' L ');

    chartGroup.children?.push({
      id: 'line-path',
      type: 'path',
      attributes: {
        d: `M ${points}`,
        fill: 'none',
        stroke: COLOR_CONTOUR,
        'stroke-width': 2,
        'stroke-linecap': 'square',
        'stroke-linejoin': 'miter',
      },
    });

    // Square Markers (Instrumental Precision: No round circles per shape rules!)
    spec.data.forEach((d, i) => {
      const x = getXPos(d, i);
      const y = yScale(Number(d[yField] ?? 0));
      chartGroup.children?.push({
        id: `line-dot-${i}`,
        type: 'rect',
        attributes: {
          x: x - 3,
          y: y - 3,
          width: 6,
          height: 6,
          fill: i === maxValIdx ? COLOR_WAYPOINT : COLOR_FIELD_BRIGHT(),
          stroke: COLOR_CONTOUR,
          'stroke-width': 1,
        },
      });
    });

    // Flag Pin Anomaly on Max Point
    if (maxValIdx >= 0) {
      const maxX = getXPos(spec.data[maxValIdx], maxValIdx);
      const maxY = yScale(maxVal);
      chartGroup.children?.push(
        {
          id: 'flag-pin-stem',
          type: 'line',
          attributes: { x1: maxX, y1: maxY, x2: maxX, y2: maxY - 14, stroke: COLOR_FLARE, 'stroke-width': 1 },
        },
        {
          id: 'flag-pin-top',
          type: 'rect',
          attributes: { x: maxX - 2, y: maxY - 18, width: 4, height: 4, fill: COLOR_FLARE },
        }
      );
    }
  } else if (spec.type === 'scatter') {
    const xValues = spec.data.map((d) => Number(d[xField] ?? 0));
    const yValues = spec.data.map((d) => Number(d[yField] ?? 0));

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues) || 1;
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues) || 1;

    const xScale = createScaleLinear([minX * 0.9, maxX * 1.05], [0, innerWidth]);
    const yScale = createScaleLinear([minY * 0.9, maxY * 1.05], [innerHeight, 0]);

    // Grid & Ticks
    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push({
        id: `grid-y-${idx}`,
        type: 'line',
        attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
      });
      axesGroup.children?.push({
        id: `scale-tick-y-${idx}`,
        type: 'line',
        attributes: { x1: -4, y1: y, x2: 0, y2: y, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
      });
      axesGroup.children?.push({
        id: `tick-y-${idx}`,
        type: 'text',
        attributes: {
          x: -8,
          y: y + 3,
          fill: COLOR_DATUM,
          'font-size': 10,
          'text-anchor': 'end',
          'font-family': FONT_MONO,
        },
        children: [{ id: `tick-y-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
      });
    });

    xScale.ticks(5).forEach((t, idx) => {
      const x = xScale(t);
      axesGroup.children?.push({
        id: `scale-tick-x-${idx}`,
        type: 'line',
        attributes: { x1: x, y1: innerHeight, x2: x, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
      });
      axesGroup.children?.push({
        id: `tick-x-${idx}`,
        type: 'text',
        attributes: {
          x,
          y: innerHeight + 18,
          fill: COLOR_DATUM,
          'font-size': 10,
          'text-anchor': 'middle',
          'font-family': FONT_MONO,
        },
        children: [{ id: `tick-x-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
      });
    });

    // Scatter Square Markers
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
  } else if (spec.type === 'histogram') {
    const rawValues = spec.data.map((d) => Number(d[xField] ?? d[yField] ?? 0)).filter((v) => !isNaN(v));
    const bins = binValues(rawValues, spec.encoding.bins || 5);
    const maxCount = Math.max(...bins.map((b) => b.count), 1);

    const categories = bins.map((b) => b.label);
    const xScale = createScaleBand(categories, [0, innerWidth], 0.15);
    const yScale = createScaleLinear([0, maxCount], [innerHeight, 0]);

    // Grid & Y Ticks
    yScale.ticks(5).forEach((t, idx) => {
      const y = yScale(t);
      gridGroup.children?.push({
        id: `grid-y-${idx}`,
        type: 'line',
        attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
      });
      axesGroup.children?.push({
        id: `scale-tick-y-${idx}`,
        type: 'line',
        attributes: { x1: -4, y1: y, x2: 0, y2: y, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
      });
      axesGroup.children?.push({
        id: `tick-y-${idx}`,
        type: 'text',
        attributes: {
          x: -8,
          y: y + 3,
          fill: COLOR_DATUM,
          'font-size': 10,
          'text-anchor': 'end',
          'font-family': FONT_MONO,
        },
        children: [{ id: `tick-y-txt-${idx}`, type: 'text', attributes: { text: String(Math.round(t)) } }],
      });
    });

    // Render Histogram Bars
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
          fill: COLOR_CONTOUR,
          rx: 0,
        },
      });

      axesGroup.children?.push({
        id: `scale-tick-x-${i}`,
        type: 'line',
        attributes: { x1: x + bw / 2, y1: innerHeight, x2: x + bw / 2, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
      });

      axesGroup.children?.push({
        id: `tick-x-${i}`,
        type: 'text',
        attributes: {
          x: x + bw / 2,
          y: innerHeight + 18,
          fill: COLOR_DATUM,
          'font-size': 10,
          'text-anchor': 'middle',
          'font-family': FONT_MONO,
        },
        children: [{ id: `tick-x-txt-${i}`, type: 'text', attributes: { text: b.label } }],
      });
    });
  }

  // Base Physical Axis lines (1px solid Contour rule)
  axesGroup.children?.push(
    {
      id: 'x-axis-line',
      type: 'line',
      attributes: { x1: 0, y1: innerHeight, x2: innerWidth, y2: innerHeight, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
    },
    {
      id: 'y-axis-line',
      type: 'line',
      attributes: { x1: 0, y1: 0, x2: 0, y2: innerHeight, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
    }
  );

  if (spec.config?.showGrid !== false) {
    chartGroup.children?.unshift(gridGroup);
  }
  chartGroup.children?.push(axesGroup);
  scene.children.push(chartGroup);

  return scene;
}

function COLOR_FIELD_BRIGHT(): string {
  return 'var(--background, #f7faf5)';
}
