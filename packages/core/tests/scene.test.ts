import { describe, it, expect } from 'vitest';
import { buildSceneGraph } from '../src/layout/scene';

describe('Headless SceneGraph Resolution', () => {
  it('builds a deterministic scene graph from a valid ChartSpec without DOM', () => {
    const spec = {
      version: '0.1.0',
      type: 'bar',
      data: [{ category: 'A', value: 10 }, { category: 'B', value: 25 }],
      encoding: {
        x: { field: 'category' },
        y: { field: 'value' },
      },
    };

    const scene = buildSceneGraph(spec);
    expect(scene.width).toBe(600);
    expect(scene.height).toBe(400);
    expect(scene.children.length).toBe(1);
    expect(scene.children[0].children?.length).toBe(2);
  });
});
