import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useId } from 'react';
import { cn } from './utils';
const ChartContext = createContext(null);
export function useChartContext() {
    const context = useContext(ChartContext);
    return context;
}
export const ChartContainer = React.forwardRef(({ id, className, children, config = {}, style, ...props }, ref) => {
    const uniqueId = useId();
    const chartId = `vizora-chart-${id || uniqueId.replace(/:/g, '')}`;
    return (_jsx(ChartContext.Provider, { value: { config }, children: _jsxs("div", { "data-chart": chartId, ref: ref, className: cn('vizora-shadcn-container relative flex aspect-video w-full justify-center text-xs [&_.vizora-chart-container]:flex [&_.vizora-chart-container]:w-full [&_.vizora-chart-container]:justify-center', className), style: style, ...props, children: [_jsx(ChartStyle, { id: chartId, config: config }), children] }) }));
});
ChartContainer.displayName = 'ChartContainer';
export const ChartStyle = ({ id, config }) => {
    const colorConfig = Object.entries(config).filter(([_, itemConfig]) => itemConfig.theme || itemConfig.color);
    if (!colorConfig.length) {
        return null;
    }
    const cssString = Object.entries(config)
        .map(([key, itemConfig]) => {
        const color = itemConfig.color;
        return color ? `--color-${key}: ${color};` : null;
    })
        .filter(Boolean)
        .join('\n');
    return (_jsx("style", { dangerouslySetInnerHTML: {
            __html: `[data-chart="${id}"] {\n${cssString}\n}`,
        } }));
};
//# sourceMappingURL=ChartContainer.js.map