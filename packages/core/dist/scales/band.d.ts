export interface ScaleBand {
    (value: string): number;
    bandwidth: () => number;
    domain: string[];
    range: [number, number];
}
export declare function createScaleBand(domain: string[], range: [number, number], padding?: number): ScaleBand;
//# sourceMappingURL=band.d.ts.map