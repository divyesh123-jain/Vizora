export function createScaleLinear(domain, range) {
    const [d0, d1] = domain;
    const [r0, r1] = range;
    const dSpan = d1 - d0 || 1;
    const rSpan = r1 - r0;
    const scale = (value) => {
        return r0 + ((value - d0) / dSpan) * rSpan;
    };
    scale.domain = domain;
    scale.range = range;
    scale.ticks = (count = 5) => {
        const step = dSpan / Math.max(1, count - 1);
        const ticks = [];
        for (let i = 0; i < count; i++) {
            ticks.push(d0 + step * i);
        }
        return ticks;
    };
    return scale;
}
//# sourceMappingURL=linear.js.map