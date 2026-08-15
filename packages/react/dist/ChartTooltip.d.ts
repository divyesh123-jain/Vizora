import React from 'react';
export interface ChartTooltipProps extends React.ComponentProps<'div'> {
    title?: string;
    items?: {
        label: string;
        value: string | number;
        color?: string;
    }[];
}
export declare const ChartTooltip: React.ForwardRefExoticComponent<Omit<ChartTooltipProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ChartTooltip.d.ts.map