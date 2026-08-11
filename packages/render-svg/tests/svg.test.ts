import { describe, it, expect } from 'vitest';
import { buildSceneGraph } from '@vizora/core';
import { renderSceneGraphToSVGString, renderAccessibleDataTable } from '../src';

describe('SVG Renderer & Accessible Data Table', () => {
  it('renders SceneGraph to an SVG string', () => {
    const spec = {
      version: '0.1.0' as const,
      type: 'bar' as const,
      data: [{ category: 'X', value: 100 }],
      encoding: { x: { field: 'category' }, y: { field: 'value' } },
    };

    const scene = buildSceneGraph(spec);
    const svgStr = renderSceneGraphToSVGString(scene);
    expect(svgStr).toContain('<svg');
    expect(svgStr).toContain('<rect');
    expect(svgStr).toContain('fill="#3b82f6"');
  });

  it('generates a screen-reader accessible HTML data table fallback', () => {
    const spec = {
      version: '0.1.0' as const,
      type: 'bar' as const,
      title: 'Sales Report',
      data: [{ category: 'Product A', sales: 500 }],
      encoding: { x: { field: 'category' }, y: { field: 'sales' } },
    };

    const tableHtml = renderAccessibleDataTable(spec);
    expect(tableHtml).toContain('<table');
    expect(tableHtml).toContain('Sales Report');
    expect(tableHtml).toContain('Product A');
  });
});
