import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from './utils';
export const ChartLegend = React.forwardRef(({ className, payload = [], ...props }, ref) => {
    if (!payload.length)
        return null;
    return (_jsx("div", { ref: ref, className: cn('flex items-center justify-center gap-4 text-xs font-medium', className), ...props, children: payload.map((item, index) => (_jsxs("div", { className: "flex items-center gap-1.5", children: [_jsx("span", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: { backgroundColor: item.color || 'var(--chart-1)' } }), _jsx("span", { className: "text-muted-foreground", children: item.value })] }, index))) }));
});
ChartLegend.displayName = 'ChartLegend';
//# sourceMappingURL=ChartLegend.js.map