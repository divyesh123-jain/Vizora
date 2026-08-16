import { SceneGraph, SceneNode } from '@vizora/core';

export function renderSceneNodeToString(node: SceneNode): string {
  const attrs = Object.entries(node.attributes)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');

  if (node.type === 'group') {
    const childrenStr = (node.children || [])
      .map((c) => renderSceneNodeToString(c))
      .join('');
    return `<g ${attrs}>${childrenStr}</g>`;
  }

  if (node.type === 'text') {
    const textContent = (node.attributes.text as string) ?? '';
    const childStr = (node.children || []).map((c) => renderSceneNodeToString(c)).join('');
    const { text: _text, ...restAttrs } = node.attributes;
    const cleanAttrs = Object.entries(restAttrs)
      .map(([k, v]) => `${k}="${v}"`)
      .join(' ');
    const attrString = cleanAttrs ? ` ${cleanAttrs}` : '';
    return `<text${attrString}>${textContent}${childStr}</text>`;
  }

  return `<${node.type} ${attrs} />`;
}

export function renderSceneGraphToSVGString(scene: SceneGraph): string {
  const childrenStr = scene.children
    .map((node) => renderSceneNodeToString(node))
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${scene.viewBox}" width="${scene.width}" height="${scene.height}">${childrenStr}</svg>`;
}
