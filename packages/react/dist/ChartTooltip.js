import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from './utils';
export const ChartTooltip = React.forwardRef(({ className, title, items = [], ...props }, ref) => {
    if (!items.length && !title)
        return null;
    return (_jsxs("div", { ref: ref, className: cn('grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl transition-all ease-in-out', className), ...props, children: [title && _jsx("div", { className: "font-medium text-foreground", children: title }), items.map((item, index) => (_jsxs("div", { className: "flex w-full items-center gap-2", children: [item.color && (_jsx("span", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: { backgroundColor: item.color } })), _jsx("span", { className: "text-muted-foreground", children: item.label }), _jsx("span", { className: "ml-auto font-mono font-medium text-foreground", children: item.value })] }, index)))] }));
});
ChartTooltip.displayName = 'ChartTooltip';
//# sourceMappingURL=ChartTooltip.js.map