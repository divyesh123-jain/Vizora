import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { buildSceneGraph } from '@vizora/core';
import { renderSceneGraphToSVGString, renderAccessibleDataTable } from '@vizora/render-svg';
export const SVGContainer = ({ spec }) => {
    const scene = buildSceneGraph(spec);
    const svgMarkup = renderSceneGraphToSVGString(scene);
    const tableMarkup = renderAccessibleDataTable(spec);
    return (_jsxs("div", { className: "vizora-chart-container", style: { position: 'relative', display: 'inline-block' }, children: [_jsx("div", { className: "vizora-svg-wrapper", dangerouslySetInnerHTML: { __html: svgMarkup } }), _jsx("div", { className: "vizora-accessible-wrapper", dangerouslySetInnerHTML: { __html: tableMarkup } })] }));
};
//# sourceMappingURL=SVGContainer.js.map