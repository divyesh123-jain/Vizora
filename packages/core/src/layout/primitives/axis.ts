import { SceneNode, COLOR_CONTOUR, COLOR_DATUM, COLOR_GRID_LINE, FONT_MONO } from '../types';

export function createGridLineX(id: string, x: number, innerHeight: number): SceneNode {
  return {
    id,
    type: 'line',
    attributes: { x1: x, y1: 0, x2: x, y2: innerHeight, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '3,3', 'stroke-width': 1 },
  };
}

export function createGridLineY(id: string, y: number, innerWidth: number): SceneNode {
  return {
    id,
    type: 'line',
    attributes: { x1: 0, y1: y, x2: innerWidth, y2: y, stroke: COLOR_GRID_LINE, 'stroke-dasharray': '3,3', 'stroke-width': 1 },
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
      'font-size': 11,
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
      'font-size': 11,
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
  fill?: string;
}

export type LegendIconType = 'line-dot' | 'rect' | 'circle';

export function createInChartLegend(
  id: string,
  items: InChartLegendItem[],
  innerWidth: number,
  y = -14,
  textColor = COLOR_DATUM,
  iconType: LegendIconType = 'rect'
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

  const iconWidth = iconType === 'line-dot' ? 20 : 10;
  const gap = 16;
  let totalWidth = 0;
  const itemMetrics = items.map((item) => {
    const itemWidth = iconWidth + 6 + item.label.length * 7 + gap;
    totalWidth += itemWidth;
    return { item, width: itemWidth };
  });

  let currentX = Math.max(0, innerWidth - totalWidth + gap);

  itemMetrics.forEach(({ item, width }, idx) => {
    if (iconType === 'line-dot') {
      // Horizontal line segment
      legendGroup.children?.push({
        id: `${id}-line-${idx}`,
        type: 'line',
        attributes: {
          x1: currentX,
          y1: y - 4,
          x2: currentX + 16,
          y2: y - 4,
          stroke: item.color,
          'stroke-width': 2,
        },
      });

      // Circular marker on center of line
      legendGroup.children?.push({
        id: `${id}-dot-${idx}`,
        type: 'circle',
        attributes: {
          cx: currentX + 8,
          cy: y - 4,
          r: 3.5,
          fill: item.fill || '#1e293b',
          stroke: item.color,
          'stroke-width': 1.5,
        },
      });
    } else if (iconType === 'circle') {
      legendGroup.children?.push({
        id: `${id}-circle-${idx}`,
        type: 'circle',
        attributes: {
          cx: currentX + 5,
          cy: y - 4,
          r: 4,
          fill: item.color,
        },
      });
    } else {
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
    }

    const textX = currentX + iconWidth + 6;
    legendGroup.children?.push({
      id: `${id}-label-${idx}`,
      type: 'text',
      attributes: {
        x: textX,
        y,
        fill: item.color || textColor,
        'font-size': 11,
        'font-weight': '500',
        'font-family': FONT_MONO,
      },
      children: [{ id: `${id}-lbl-txt-${idx}`, type: 'text', attributes: { text: item.label } }],
    });

    currentX += width;
  });

  return legendGroup;
}

/**
 * Generates a smooth cubic Bezier path from an array of 2D points (Catmull-Rom spline interpolation).
 */
export function generateSmoothBezierPath(points: { x: number; y: number }[]): string {
  if (!points || points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;
  if (points.length === 2) {
    return `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)} L ${points[1].x.toFixed(1)},${points[1].y.toFixed(1)}`;
  }

  let d = `M ${points[0].x.toFixed(1)},${points[0].y.toFixed(1)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = i < points.length - 2 ? points[i + 2] : p2;

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }

  return d;
}
