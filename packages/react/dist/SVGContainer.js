import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { buildSceneGraph } from '@vizora/core';
import { renderSceneGraphToSVGString, renderAccessibleDataTable } from '@vizora/render-svg';
import { cn } from './utils';
export const SVGContainer = ({ spec, className, style }) => {
    const scene = buildSceneGraph(spec);
    const svgMarkup = renderSceneGraphToSVGString(scene);
    const tableMarkup = renderAccessibleDataTable(spec);
    return (_jsxs("div", { className: cn('vizora-chart-container relative inline-block w-full', className), style: { position: 'relative', display: 'inline-block', ...style }, children: [_jsx("div", { className: "vizora-svg-wrapper w-full flex justify-center [&_svg]:max-w-full [&_svg]:h-auto", dangerouslySetInnerHTML: { __html: svgMarkup } }), _jsx("div", { className: "vizora-accessible-wrapper sr-only", dangerouslySetInnerHTML: { __html: tableMarkup } })] }));
};
//# sourceMappingURL=SVGContainer.js.map