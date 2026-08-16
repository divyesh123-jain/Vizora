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
    expect(svgStr).toContain('var(--chart-1, #c2872e)');
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

  it('renders SVG text elements with inner text content instead of text attribute', () => {
    const spec = {
      version: '0.1.0' as const,
      type: 'bar' as const,
      title: 'Sales Overview',
      data: [{ category: 'Widget', sales: 250 }],
      encoding: { x: { field: 'category' }, y: { field: 'sales' } },
    };

    const scene = buildSceneGraph(spec);
    const svgStr = renderSceneGraphToSVGString(scene);
    expect(svgStr).toContain('<text');
    expect(svgStr).toContain('Sales Overview</text>');
    expect(svgStr).not.toContain('text="Sales Overview"');
  });
});
