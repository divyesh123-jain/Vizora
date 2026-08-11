export interface ScaleTime {
    (value: Date | number): number;
    domain: [Date, Date];
    range: [number, number];
}
export declare function createScaleTime(domain: [Date, Date], range: [number, number]): ScaleTime;
//# sourceMappingURL=time.d.ts.map