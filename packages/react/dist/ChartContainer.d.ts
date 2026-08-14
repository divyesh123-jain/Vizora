import React from 'react';
export type ChartConfig = Record<string, {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<string, string>;
}>;
interface ChartContextProps {
    config: ChartConfig;
}
export declare function useChartContext(): ChartContextProps | null;
export interface ChartContainerProps extends React.ComponentProps<'div'> {
    config?: ChartConfig;
    children: React.ReactNode;
}
export declare const ChartContainer: React.ForwardRefExoticComponent<Omit<ChartContainerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React.JSX.Element | null;
export {};
//# sourceMappingURL=ChartContainer.d.ts.map