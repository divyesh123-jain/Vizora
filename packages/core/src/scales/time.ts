export interface ScaleTime {
  (value: Date | number): number;
  domain: [Date, Date];
  range: [number, number];
}

export function createScaleTime(domain: [Date, Date], range: [number, number]): ScaleTime {
  const t0 = domain[0].getTime();
  const t1 = domain[1].getTime();
  const [r0, r1] = range;
  const tSpan = t1 - t0 || 1;
  const rSpan = r1 - r0;

  const scale = (value: Date | number) => {
    const time = typeof value === 'number' ? value : value.getTime();
    return r0 + ((time - t0) / tSpan) * rSpan;
  };

  scale.domain = domain;
  scale.range = range;

  return scale;
}
