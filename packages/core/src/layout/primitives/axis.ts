import { SceneNode, COLOR_CONTOUR, COLOR_DATUM, COLOR_GRID_LINE, FONT_MONO } from '../types';

export function createGridLineX(id: string, x: number, innerHeight: number): SceneNode {
  return {
    id,
    type: 'line',
    attributes: { x1: x, y1: 0, x2: x, y2: innerHeight, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
  };
}

export function createGridLineY(id: string, y: number, innerWidth: number): SceneNode {
  return {
    id,
    type: 'line',
    attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '2,2' },
  };
}

export function createScaleTickX(id: string, x: number, innerHeight: number): SceneNode {
  return {
    id,
    type: 'line',
    attributes: { x1: x, y1: innerHeight, x2: x, y2: innerHeight + 4, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
  };
}

export function createScaleTickY(id: string, y: number): SceneNode {
  return {
    id,
    type: 'line',
    attributes: { x1: -4, y1: y, x2: 0, y2: y, stroke: COLOR_CONTOUR, 'stroke-width': 1 },
  };
}

export function createTickTextX(id: string, x: number, y: number, label: string): SceneNode {
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

export function createTickTextY(id: string, x: number, y: number, label: string): SceneNode {
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

export function createBaseAxes(innerWidth: number, innerHeight: number): SceneNode[] {
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
