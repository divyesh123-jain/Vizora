import React from 'react';
export interface ChartLegendProps extends React.ComponentProps<'div'> {
    payload?: {
        value: string;
        color?: string;
    }[];
}
export declare const ChartLegend: React.ForwardRefExoticComponent<Omit<ChartLegendProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ChartLegend.d.ts.map