export function createScaleTime(domain, range) {
    const t0 = domain[0].getTime();
    const t1 = domain[1].getTime();
    const [r0, r1] = range;
    const tSpan = t1 - t0 || 1;
    const rSpan = r1 - r0;
    const scale = (value) => {
        const time = typeof value === 'number' ? value : value.getTime();
        return r0 + ((time - t0) / tSpan) * rSpan;
    };
    scale.domain = domain;
    scale.range = range;
    return scale;
}
//# sourceMappingURL=time.js.map