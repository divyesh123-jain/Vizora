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

export function createAxisTitleX(
  id: string,
  innerWidth: number,
  innerHeight: number,
  label: string,
  color = COLOR_DATUM
): SceneNode {
  return {
    id,
    type: 'text',
    attributes: {
      x: innerWidth / 2,
      y: innerHeight + 36,
      fill: color,
      'font-size': 11,
      'font-weight': '600',
      'text-anchor': 'middle',
      'font-family': FONT_MONO,
      'letter-spacing': '0.04em',
    },
    children: [{ id: `${id}-txt`, type: 'text', attributes: { text: label } }],
  };
}

export function createAxisTitleY(
  id: string,
  innerHeight: number,
  label: string,
  color = COLOR_DATUM
): SceneNode {
  const centerY = innerHeight / 2;
  return {
    id,
    type: 'text',
    attributes: {
      x: -42,
      y: centerY,
      transform: `rotate(-90 -42 ${centerY})`,
      fill: color,
      'font-size': 11,
      'font-weight': '600',
      'text-anchor': 'middle',
      'font-family': FONT_MONO,
      'letter-spacing': '0.04em',
    },
    children: [{ id: `${id}-txt`, type: 'text', attributes: { text: label } }],
  };
}

export interface InChartLegendItem {
  label: string;
  color: string;
}

export function createInChartLegend(
  id: string,
  items: InChartLegendItem[],
  innerWidth: number,
  y = -14,
  textColor = COLOR_DATUM
): SceneNode | null {
  if (!items || items.length === 0) return null;

  const legendGroup: SceneNode = {
    id,
    type: 'group',
    attributes: {
      class: 'vizora-chart-legend',
    },
    children: [],
  };

  let totalWidth = 0;
  const itemMetrics = items.map((item) => {
    const itemWidth = 12 + item.label.length * 6.5 + 14;
    totalWidth += itemWidth;
    return { item, width: itemWidth };
  });

  let currentX = Math.max(0, innerWidth - totalWidth);

  itemMetrics.forEach(({ item, width }, idx) => {
    legendGroup.children?.push({
      id: `${id}-swatch-${idx}`,
      type: 'rect',
      attributes: {
        x: currentX,
        y: y - 8,
        width: 8,
        height: 8,
        rx: 2,
        fill: item.color,
      },
    });

    legendGroup.children?.push({
      id: `${id}-label-${idx}`,
      type: 'text',
      attributes: {
        x: currentX + 12,
        y,
        fill: textColor,
        'font-size': 10,
        'font-weight': '500',
        'font-family': FONT_MONO,
      },
      children: [{ id: `${id}-lbl-txt-${idx}`, type: 'text', attributes: { text: item.label } }],
    });

    currentX += width;
  });

  return legendGroup;
}
