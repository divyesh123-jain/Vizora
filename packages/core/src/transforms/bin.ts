export interface BinResult {
  binMin: number;
  binMax: number;
  count: number;
  label: string;
}

export function binValues(values: number[], numBins = 5): BinResult[] {
  if (values.length === 0) return [];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const step = (max - min) / (numBins || 1) || 1;

  const bins: BinResult[] = Array.from({ length: numBins }, (_, i) => {
    const binMin = min + i * step;
    const binMax = binMin + step;
    return {
      binMin,
      binMax,
      count: 0,
      label: `${binMin.toFixed(1)} - ${binMax.toFixed(1)}`,
    };
  });

  for (const v of values) {
    let index = Math.floor((v - min) / step);
    if (index >= numBins) index = numBins - 1;
    if (index < 0) index = 0;
    bins[index].count++;
  }

  return bins;
}
