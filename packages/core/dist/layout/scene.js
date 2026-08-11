import { validateChartSpec } from '../spec/validate';
import { createScaleLinear } from '../scales/linear';
import { createScaleBand } from '../scales/band';
import { createScaleTime } from '../scales/time';
import { binValues } from '../transforms/bin';
import { formatNumber } from '../format/number';
import { formatDate } from '../format/date';
export function buildSceneGraph(inputSpec) {
    const spec = validateChartSpec(inputSpec);
    const width = spec.config?.width ?? 600;
    const height = spec.config?.height ?? 380;
    const margin = spec.config?.margin ?? { top: 40, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const scene = {
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
                fill: '#f8fafc',
                'font-size': 16,
                'font-weight': '600',
                'font-family': 'sans-serif',
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
        const kpiGroup = {
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
                        fill: '#f8fafc',
                        'font-size': 44,
                        'font-weight': '800',
                        'font-family': 'sans-serif',
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
            const sparklinePath = {
                id: 'kpi-sparkline-path',
                type: 'path',
                attributes: {
                    d: `M ${points}`,
                    fill: 'none',
                    stroke: '#10b981',
                    'stroke-width': 3,
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                },
            };
            kpiGroup.children?.push(sparklinePath);
        }
        scene.children.push(kpiGroup);
        return scene;
    }
    // Create main chart content group
    const chartGroup = {
        id: 'chart-main-group',
        type: 'group',
        attributes: { transform: `translate(${margin.left}, ${margin.top})` },
        children: [],
    };
    const gridGroup = { id: 'grid-group', type: 'group', attributes: {}, children: [] };
    const axesGroup = { id: 'axes-group', type: 'group', attributes: {}, children: [] };
    const isHorizontalBar = spec.type === 'bar' && spec.encoding.orientation === 'horizontal';
    if (spec.type === 'bar') {
        if (isHorizontalBar) {
            const categories = spec.data.map((d) => String(d[yField] ?? ''));
            const values = spec.data.map((d) => Number(d[xField] ?? 0));
            const maxVal = Math.max(...values, 0) || 1;
            const yScale = createScaleBand(categories, [0, innerHeight], 0.25);
            const xScale = createScaleLinear([0, maxVal], [0, innerWidth]);
            // Grid lines
            xScale.ticks(5).forEach((t, idx) => {
                const x = xScale(t);
                gridGroup.children?.push({
                    id: `grid-x-${idx}`,
                    type: 'line',
                    attributes: { x1: x, y1: 0, x2: x, y2: innerHeight, stroke: '#334155', 'stroke-dasharray': '3,3' },
                });
                axesGroup.children?.push({
                    id: `tick-x-${idx}`,
                    type: 'text',
                    attributes: {
                        x,
                        y: innerHeight + 18,
                        fill: '#94a3b8',
                        'font-size': 11,
                        'text-anchor': 'middle',
                        'font-family': 'sans-serif',
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
                    attributes: { x: 0, y, width: w, height: bw, fill: '#3b82f6', rx: 4 },
                });
                axesGroup.children?.push({
                    id: `tick-y-${i}`,
                    type: 'text',
                    attributes: {
                        x: -8,
                        y: y + bw / 2 + 4,
                        fill: '#94a3b8',
                        'font-size': 11,
                        'text-anchor': 'end',
                        'font-family': 'sans-serif',
                    },
                    children: [{ id: `tick-y-txt-${i}`, type: 'text', attributes: { text: cat } }],
                });
            });
        }
        else {
            const categories = spec.data.map((d) => String(d[xField] ?? ''));
            const values = spec.data.map((d) => Number(d[yField] ?? 0));
            const maxVal = Math.max(...values, 0) || 1;
            const xScale = createScaleBand(categories, [0, innerWidth], 0.25);
            const yScale = createScaleLinear([0, maxVal], [innerHeight, 0]);
            // Y Grid & Ticks
            yScale.ticks(5).forEach((t, idx) => {
                const y = yScale(t);
                gridGroup.children?.push({
                    id: `grid-y-${idx}`,
                    type: 'line',
                    attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: '#334155', 'stroke-dasharray': '3,3' },
                });
                axesGroup.children?.push({
                    id: `tick-y-${idx}`,
                    type: 'text',
                    attributes: {
                        x: -8,
                        y: y + 4,
                        fill: '#94a3b8',
                        'font-size': 11,
                        'text-anchor': 'end',
                        'font-family': 'sans-serif',
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
                    attributes: { x, y, width: bw, height: h, fill: '#3b82f6', rx: 4 },
                });
                axesGroup.children?.push({
                    id: `tick-x-${i}`,
                    type: 'text',
                    attributes: {
                        x: x + bw / 2,
                        y: innerHeight + 18,
                        fill: '#94a3b8',
                        'font-size': 11,
                        'text-anchor': 'middle',
                        'font-family': 'sans-serif',
                    },
                    children: [{ id: `tick-x-txt-${i}`, type: 'text', attributes: { text: cat } }],
                });
            });
        }
    }
    else if (spec.type === 'line') {
        const rawDates = spec.data.map((d) => new Date(String(d[xField] ?? '')));
        const isTemporal = rawDates.every((dt) => !isNaN(dt.getTime()));
        const values = spec.data.map((d) => Number(d[yField] ?? 0));
        const maxVal = Math.max(...values, 0) || 1;
        const yScale = createScaleLinear([0, maxVal * 1.1], [innerHeight, 0]);
        let getXPos;
        let xTickLabels = [];
        if (isTemporal && rawDates.length > 0) {
            const minTime = rawDates[0];
            const maxTime = rawDates[rawDates.length - 1];
            const xScale = createScaleTime([minTime, maxTime], [0, innerWidth]);
            getXPos = (d) => xScale(new Date(String(d[xField] ?? '')));
            xTickLabels = spec.data.map((d) => {
                const dt = new Date(String(d[xField] ?? ''));
                return { pos: xScale(dt), label: formatDate(dt) };
            });
        }
        else {
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
                attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: '#334155', 'stroke-dasharray': '3,3' },
            });
            axesGroup.children?.push({
                id: `tick-y-${idx}`,
                type: 'text',
                attributes: {
                    x: -8,
                    y: y + 4,
                    fill: '#94a3b8',
                    'font-size': 11,
                    'text-anchor': 'end',
                    'font-family': 'sans-serif',
                },
                children: [{ id: `tick-y-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
            });
        });
        // X Ticks
        xTickLabels.forEach((t, idx) => {
            axesGroup.children?.push({
                id: `tick-x-${idx}`,
                type: 'text',
                attributes: {
                    x: t.pos,
                    y: innerHeight + 18,
                    fill: '#94a3b8',
                    'font-size': 11,
                    'text-anchor': 'middle',
                    'font-family': 'sans-serif',
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
                stroke: '#3b82f6',
                'stroke-width': 3,
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
            },
        });
        // Dots
        spec.data.forEach((d, i) => {
            const x = getXPos(d, i);
            const y = yScale(Number(d[yField] ?? 0));
            chartGroup.children?.push({
                id: `line-dot-${i}`,
                type: 'circle',
                attributes: { cx: x, cy: y, r: 4, fill: '#60a5fa', stroke: '#1e3a8a', 'stroke-width': 2 },
            });
        });
    }
    else if (spec.type === 'scatter') {
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
                attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: '#334155', 'stroke-dasharray': '3,3' },
            });
            axesGroup.children?.push({
                id: `tick-y-${idx}`,
                type: 'text',
                attributes: {
                    x: -8,
                    y: y + 4,
                    fill: '#94a3b8',
                    'font-size': 11,
                    'text-anchor': 'end',
                    'font-family': 'sans-serif',
                },
                children: [{ id: `tick-y-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
            });
        });
        xScale.ticks(5).forEach((t, idx) => {
            const x = xScale(t);
            axesGroup.children?.push({
                id: `tick-x-${idx}`,
                type: 'text',
                attributes: {
                    x,
                    y: innerHeight + 18,
                    fill: '#94a3b8',
                    'font-size': 11,
                    'text-anchor': 'middle',
                    'font-family': 'sans-serif',
                },
                children: [{ id: `tick-x-txt-${idx}`, type: 'text', attributes: { text: formatNumber(t) } }],
            });
        });
        // Scatter circles
        spec.data.forEach((d, i) => {
            const x = xScale(Number(d[xField] ?? 0));
            const y = yScale(Number(d[yField] ?? 0));
            chartGroup.children?.push({
                id: `scatter-dot-${i}`,
                type: 'circle',
                attributes: { cx: x, cy: y, r: 6, fill: '#818cf8', opacity: 0.85, stroke: '#312e81', 'stroke-width': 1.5 },
            });
        });
    }
    else if (spec.type === 'histogram') {
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
                attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: '#334155', 'stroke-dasharray': '3,3' },
            });
            axesGroup.children?.push({
                id: `tick-y-${idx}`,
                type: 'text',
                attributes: {
                    x: -8,
                    y: y + 4,
                    fill: '#94a3b8',
                    'font-size': 11,
                    'text-anchor': 'end',
                    'font-family': 'sans-serif',
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
                attributes: { x, y, width: bw, height: h, fill: '#38bdf8', rx: 3 },
            });
            axesGroup.children?.push({
                id: `tick-x-${i}`,
                type: 'text',
                attributes: {
                    x: x + bw / 2,
                    y: innerHeight + 18,
                    fill: '#94a3b8',
                    'font-size': 10,
                    'text-anchor': 'middle',
                    'font-family': 'sans-serif',
                },
                children: [{ id: `tick-x-txt-${i}`, type: 'text', attributes: { text: b.label } }],
            });
        });
    }
    // Base Axis lines
    axesGroup.children?.push({
        id: 'x-axis-line',
        type: 'line',
        attributes: { x1: 0, y1: innerHeight, x2: innerWidth, y2: innerHeight, stroke: '#475569', 'stroke-width': 1.5 },
    }, {
        id: 'y-axis-line',
        type: 'line',
        attributes: { x1: 0, y1: 0, x2: 0, y2: innerHeight, stroke: '#475569', 'stroke-width': 1.5 },
    });
    chartGroup.children?.unshift(gridGroup);
    chartGroup.children?.push(axesGroup);
    scene.children.push(chartGroup);
    return scene;
}
//# sourceMappingURL=scene.js.map