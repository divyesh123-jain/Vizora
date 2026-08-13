import { jsx as _jsx } from "react/jsx-runtime";
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';
export const Chart = ({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height, }) => {
    const spec = useChartSpec({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height });
    return _jsx(SVGContainer, { spec: spec });
};
//# sourceMappingURL=Chart.js.map