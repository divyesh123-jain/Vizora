import { jsx as _jsx } from "react/jsx-runtime";
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';
export const Chart = ({ data, type, x, y, color, title }) => {
    const spec = useChartSpec({ data, type, x, y, color, title });
    return _jsx(SVGContainer, { spec: spec });
};
//# sourceMappingURL=Chart.js.map