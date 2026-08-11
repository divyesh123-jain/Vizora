export interface ScaleBand {
  (value: string): number;
  bandwidth: () => number;
  domain: string[];
  range: [number, number];
}

export function createScaleBand(domain: string[], range: [number, number], padding = 0.2): ScaleBand {
  const [r0, r1] = range;
  const rangeSpan = Math.abs(r1 - r0);
  const count = domain.length;
  const step = count > 0 ? rangeSpan / count : rangeSpan;
  const bw = step * (1 - padding);

  const map = new Map<string, number>();
  domain.forEach((d, i) => {
    map.set(d, r0 + i * step + (step * padding) / 2);
  });

  const scale = (value: string) => {
    return map.get(value) ?? r0;
  };

  scale.bandwidth = () => bw;
  scale.domain = domain;
  scale.range = range;

  return scale;
}
