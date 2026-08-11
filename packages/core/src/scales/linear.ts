export interface ScaleLinear {
  (value: number): number;
  domain: [number, number];
  range: [number, number];
  ticks: (count?: number) => number[];
}

export function createScaleLinear(domain: [number, number], range: [number, number]): ScaleLinear {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const dSpan = d1 - d0 || 1;
  const rSpan = r1 - r0;

  const scale = (value: number) => {
    return r0 + ((value - d0) / dSpan) * rSpan;
  };

  scale.domain = domain;
  scale.range = range;
  scale.ticks = (count = 5) => {
    const step = dSpan / Math.max(1, count - 1);
    const ticks: number[] = [];
    for (let i = 0; i < count; i++) {
      ticks.push(d0 + step * i);
    }
    return ticks;
  };

  return scale;
}
