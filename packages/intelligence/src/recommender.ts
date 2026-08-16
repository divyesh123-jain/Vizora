import { ChartSpec, ChartType } from '@vizora/core';
import { profileField } from './profile';

export function recommendChartSpec(data: Record<string, unknown>[]): ChartSpec {
  if (!data || data.length === 0) {
    return {
      version: '0.1.0',
      type: 'bar',
      data: [],
      encoding: {
        x: { field: 'x' },
        y: { field: 'y' },
      },
    };
  }

  const fields = Object.keys(data[0]);
  const profiles = fields.map((f) => profileField(data, f));

  const temporalFields = profiles.filter((p) => p.type === 'temporal');
  const quantFields = profiles.filter((p) => p.type === 'quantitative');
  const catFields = profiles.filter((p) => p.type === 'categorical');

  let chosenType: ChartType = 'bar';
  let xField = fields[0];
  let yField = fields[1] || fields[0];

  if (temporalFields.length >= 1 && quantFields.length >= 1) {
    chosenType = 'line';
    xField = temporalFields[0].field;
    yField = quantFields[0].field;
  } else if (catFields.length >= 1 && quantFields.length >= 1) {
    chosenType = 'bar';
    xField = catFields[0].field;
    yField = quantFields[0].field;
  } else if (quantFields.length >= 2) {
    chosenType = 'scatter';
    xField = quantFields[0].field;
    yField = quantFields[1].field;
  } else if (quantFields.length === 1 && catFields.length === 0 && temporalFields.length === 0) {
    chosenType = 'histogram';
    xField = quantFields[0].field;
  }

  return {
    version: '0.1.0',
    type: chosenType,
    data,
    encoding: {
      x: { field: xField, type: profiles.find((p) => p.field === xField)?.type },
      y: { field: yField, type: profiles.find((p) => p.field === yField)?.type },
    },
  };
}
