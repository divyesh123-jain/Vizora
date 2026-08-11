import { jsx as _jsx } from "react/jsx-runtime";
import { useChartSpec } from './useChartSpec';
import { SVGContainer } from './SVGContainer';
export const AutoChart = ({ data, title }) => {
    const spec = useChartSpec({ data, title });
    return _jsx(SVGContainer, { spec: spec });
};
//# sourceMappingURL=AutoChart.js.map