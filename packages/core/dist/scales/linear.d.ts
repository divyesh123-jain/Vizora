export interface ScaleLinear {
    (value: number): number;
    domain: [number, number];
    range: [number, number];
    ticks: (count?: number) => number[];
}
export declare function createScaleLinear(domain: [number, number], range: [number, number]): ScaleLinear;
//# sourceMappingURL=linear.d.ts.map