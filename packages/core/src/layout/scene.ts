import { ChartSpec } from '../spec/types';
import { validateChartSpec } from '../spec/validate';
import { createScaleLinear } from '../scales/linear';
import { createScaleBand } from '../scales/band';

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

export function buildSceneGraph(inputSpec: unknown): SceneGraph {
  const spec = validateChartSpec(inputSpec);
  const width = spec.config?.width ?? 600;
  const height = spec.config?.height ?? 400;
  const margin = spec.config?.margin ?? { top: 20, right: 20, bottom: 40, left: 50 };

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const scene: SceneGraph = {
    width,
    height,
    viewBox: `0 0 ${width} ${height}`,
    children: [],
  };

  const xField = spec.encoding.x?.field || 'x';
  const yField = spec.encoding.y?.field || 'y';

  if (spec.type === 'bar') {
    const categories = spec.data.map((d) => String(d[xField] ?? ''));
    const values = spec.data.map((d) => Number(d[yField] ?? 0));
    const maxVal = Math.max(...values, 0);

    const xScale = createScaleBand(categories, [0, innerWidth], 0.2);
    const yScale = createScaleLinear([0, maxVal], [innerHeight, 0]);

    const barGroup: SceneNode = {
      id: 'bars-group',
      type: 'group',
      attributes: { transform: `translate(${margin.left}, ${margin.top})` },
      children: spec.data.map((d, i) => {
        const cat = String(d[xField] ?? '');
        const val = Number(d[yField] ?? 0);
        const x = xScale(cat);
        const y = yScale(val);
        const bw = xScale.bandwidth();
        const h = innerHeight - y;

        return {
          id: `bar-${i}`,
          type: 'rect',
          attributes: {
            x,
            y,
            width: bw,
            height: h,
            fill: '#3b82f6',
            rx: 4,
          },
        };
      }),
    };

    scene.children.push(barGroup);
  }

  return scene;
}
