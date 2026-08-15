import { jsx as _jsx } from "react/jsx-runtime";
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';
import { ChartContainer } from './ChartContainer';
export const Chart = ({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height, className, containerClassName, config, style, }) => {
    const spec = useChartSpec({ data, type, x, y, color, orientation, title, bins, showGrid, theme, width, height });
    if (config || containerClassName) {
        return (_jsx(ChartContainer, { config: config, className: containerClassName, children: _jsx(SVGContainer, { spec: spec, className: className, style: style }) }));
    }
    return _jsx(SVGContainer, { spec: spec, className: className, style: style });
};
//# sourceMappingURL=Chart.js.map