import { COLOR_CONTOUR, COLOR_DATUM, COLOR_GRID_LINE, FONT_MONO } from '../types';
export function createGridLineX(id, x, innerHeight) {
    return {
        id,
        type: 'line',
        attributes: { x1: x, y1: 0, x2: x, y2: innerHeight, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
    };
}
export function createGridLineY(id, y, innerWidth) {
    return {
        id,
        type: 'line',
        attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
    };
}
export function createScaleTickX(id, x, innerHeight) {
    return {
        id,
        type: 'line',
        attributes: { x1: x, y1: innerHeight, x2: x, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
    };
}
export function createScaleTickY(id, y) {
    return {
        id,
        type: 'line',
        attributes: { x1: -4, y1: y, x2: 0, y2: y, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
    };
}
export function createTickTextX(id, x, y, label) {
    return {
        id,
        type: 'text',
        attributes: {
            x,
            y,
            fill: COLOR_DATUM,
            'font-size': 10,
            'text-anchor': 'middle',
            'font-family': FONT_MONO,
        },
        children: [{ id: `${id}-txt`, type: 'text', attributes: { text: label } }],
    };
}
export function createTickTextY(id, x, y, label) {
    return {
        id,
        type: 'text',
        attributes: {
            x,
            y,
            fill: COLOR_DATUM,
            'font-size': 10,
            'text-anchor': 'end',
            'font-family': FONT_MONO,
        },
        children: [{ id: `${id}-txt`, type: 'text', attributes: { text: label } }],
    };
}
export function createBaseAxes(innerWidth, innerHeight) {
    return [
        {
            id: 'x-axis-line',
            type: 'line',
            attributes: { x1: 0, y1: innerHeight, x2: innerWidth, y2: innerHeight, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
        },
        {
            id: 'y-axis-line',
            type: 'line',
            attributes: { x1: 0, y1: 0, x2: 0, y2: innerHeight, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
        },
    ];
}
//# sourceMappingURL=axis.js.map