import { SceneGraph, SceneNode } from '@vizora/core';

export function escapeXml(val: unknown): string {
  if (val === null || val === undefined) return '';
  return String(val)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderSceneNodeToString(node: SceneNode): string {
  const attrs = Object.entries(node.attributes)
    .map(([k, v]) => `${k}="${escapeXml(v)}"`)
    .join(' ');

  if (node.type === 'group' || node.type === 'defs' || node.type === 'linearGradient') {
    const tagName = node.type === 'group' ? 'g' : node.type;
    const childrenStr = (node.children || [])
      .map((c) => renderSceneNodeToString(c))
      .join('');
    return attrs ? `<${tagName} ${attrs}>${childrenStr}</${tagName}>` : `<${tagName}>${childrenStr}</${tagName}>`;
  }

  if (node.type === 'text') {
    const textContent = escapeXml(node.attributes.text ?? '');
    const childStr = (node.children || []).map((c) => renderSceneNodeToString(c)).join('');
    const { text: _text, ...restAttrs } = node.attributes;
    const cleanAttrs = Object.entries(restAttrs)
      .map(([k, v]) => `${k}="${escapeXml(v)}"`)
      .join(' ');
    const attrString = cleanAttrs ? ` ${cleanAttrs}` : '';
    return `<text${attrString}>${textContent}${childStr}</text>`;
  }

  return attrs ? `<${node.type} ${attrs} />` : `<${node.type} />`;
}

export function renderSceneGraphToSVGString(scene: SceneGraph): string {
  const childrenStr = scene.children
    .map((node) => renderSceneNodeToString(node))
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${escapeXml(scene.viewBox)}" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;">${childrenStr}</svg>`;
}

