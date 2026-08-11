export function createScaleBand(domain, range, padding = 0.2) {
    const [r0, r1] = range;
    const rangeSpan = Math.abs(r1 - r0);
    const count = domain.length;
    const step = count > 0 ? rangeSpan / count : rangeSpan;
    const bw = step * (1 - padding);
    const map = new Map();
    domain.forEach((d, i) => {
        map.set(d, r0 + i * step + (step * padding) / 2);
    });
    const scale = (value) => {
        return map.get(value) ?? r0;
    };
    scale.bandwidth = () => bw;
    scale.domain = domain;
    scale.range = range;
    return scale;
}
//# sourceMappingURL=band.js.map