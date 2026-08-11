export function renderSceneNodeToString(node) {
    const attrs = Object.entries(node.attributes)
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ');
    if (node.type === 'group') {
        const childrenStr = (node.children || [])
            .map((c) => renderSceneNodeToString(c))
            .join('');
        return `<g ${attrs}>${childrenStr}</g>`;
    }
    return `<${node.type} ${attrs} />`;
}
export function renderSceneGraphToSVGString(scene) {
    const childrenStr = scene.children
        .map((node) => renderSceneNodeToString(node))
        .join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${scene.viewBox}" width="${scene.width}" height="${scene.height}">${childrenStr}</svg>`;
}
//# sourceMappingURL=renderer.js.map