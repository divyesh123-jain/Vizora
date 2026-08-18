'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Chart } from '@vizora/react';
import { ChartType, ChartSpec } from '@vizora/core';
import { profileField } from '@vizora/intelligence';
import { StepperProgress, StepItem } from '../../components/StepperProgress';
import { CompassDial } from '../../components/CompassDial';
import { PalettePicker } from '../../components/PalettePicker';
import { LegendBand } from '../../components/LegendBand';
import { CodeBlock } from '../../components/CodeBlock';

const BUILDER_STEPS: StepItem[] = [
  { number: 1, label: 'Choose Category', short: 'Category' },
  { number: 2, label: 'Chart Bearing', short: 'Type' },
  { number: 3, label: 'Connect Data', short: 'Data' },
  { number: 4, label: 'Map Encodings', short: 'Fields' },
  { number: 5, label: 'Style & Theme', short: 'Style' },
  { number: 6, label: 'Export Code', short: 'Export' },
];

const CATEGORY_OPTIONS = [
  {
    id: 'dashboard',
    title: 'Business & Dashboard',
    desc: 'Executive KPIs, retention funnels, and part-to-whole proportions.',
    types: ['kpi-sparkline', 'funnel', 'donut', 'bar'] as ChartType[],
  },
  {
    id: 'trading',
    title: 'Trading & Financial',
    desc: 'OHLC candlestick sessions, market data, and volume profiles.',
    types: ['candlestick', 'line', 'bar'] as ChartType[],
  },
  {
    id: 'statistical',
    title: 'Statistical & Distribution',
    desc: 'Density histograms, probability distributions, and scatter correlation.',
    types: ['histogram', 'scatter'] as ChartType[],
  },
  {
    id: 'comparison',
    title: 'Comparison & Ranking',
    desc: 'Categorical magnitude ranking and discrete comparisons.',
    types: ['bar', 'scatter'] as ChartType[],
  },
  {
    id: 'composition',
    title: 'Composition & Flow',
    desc: 'Continuous temporal continuity and gradient volume accumulation.',
    types: ['line', 'area', 'donut'] as ChartType[],
  },
];

const SAMPLE_DATASETS: Record<string, { name: string; data: Record<string, unknown>[]; defaultX: string; defaultY: string }> = {
  saas: {
    name: 'SaaS Monthly Performance',
    defaultX: 'month',
    defaultY: 'revenue',
    data: [
      { month: '2026-01-01', revenue: 42000, users: 1200 },
      { month: '2026-02-01', revenue: 58000, users: 1450 },
      { month: '2026-03-01', revenue: 84000, users: 1890 },
      { month: '2026-04-01', revenue: 110000, users: 2400 },
      { month: '2026-05-01', revenue: 145000, users: 3100 },
    ],
  },
  regional: {
    name: 'Regional Sales Magnitude',
    defaultX: 'region',
    defaultY: 'sales',
    data: [
      { region: 'North America', sales: 18400 },
      { region: 'Europe', sales: 14200 },
      { region: 'Asia Pacific', sales: 22100 },
      { region: 'Latin America', sales: 8900 },
    ],
  },
  trading: {
    name: 'Stock Price Action (OHLC)',
    defaultX: 'date',
    defaultY: 'close',
    data: [
      { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
      { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
      { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
      { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
      { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
    ],
  },
  demographics: {
    name: 'Customer Age Distribution',
    defaultX: 'age',
    defaultY: 'age',
    data: [
      { age: 19 }, { age: 22 }, { age: 24 }, { age: 25 }, { age: 28 },
      { age: 29 }, { age: 31 }, { age: 34 }, { age: 35 }, { age: 38 },
      { age: 41 }, { age: 44 }, { age: 47 }, { age: 52 }, { age: 58 },
    ],
  },
};

export default function ChartBuilderPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Step 1: Category
  const [category, setCategory] = useState<string>('dashboard');

  // Step 2: Chart Type
  const [chartType, setChartType] = useState<ChartType>('bar');

  // Step 3: Data
  const [dataSource, setDataSource] = useState<'sample' | 'paste' | 'upload'>('sample');
  const [selectedSampleKey, setSelectedSampleKey] = useState<string>('saas');
  const [dataset, setDataset] = useState<Record<string, unknown>[]>(SAMPLE_DATASETS.saas.data);
  const [pasteText, setPasteText] = useState<string>('');
  const [parseError, setParseError] = useState<string | null>(null);

  // Step 4: Fields & Encodings
  const [xField, setXField] = useState<string>('month');
  const [yField, setYField] = useState<string>('revenue');
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');

  // Step 5: Styling
  const [palette, setPalette] = useState<string>('default');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [chartTitle, setChartTitle] = useState<string>('My Custom Chart');

  // Detected fields
  const availableFields = useMemo(() => {
    if (!dataset || dataset.length === 0) return [];
    return Object.keys(dataset[0]);
  }, [dataset]);

  // Profile data for inline validation
  const fieldProfiles = useMemo(() => {
    if (!dataset || dataset.length === 0) return [];
    try {
      return Object.keys(dataset[0]).map((f) => profileField(dataset, f));
    } catch {
      return [];
    }
  }, [dataset]);

  // Field validation rules per chart type
  const validationWarning = useMemo(() => {
    const xProfile = fieldProfiles.find((p) => p.field === xField);
    const yProfile = fieldProfiles.find((p) => p.field === yField);

    if (chartType === 'line' && xProfile && xProfile.type !== 'temporal' && xProfile.type !== 'categorical') {
      return 'Note: Line charts typically expect a temporal date/time field on the X axis for accurate trend continuity.';
    }
    if (chartType === 'scatter' && xProfile && xProfile.type !== 'quantitative') {
      return 'Note: Scatter plots require continuous quantitative numeric values on both axes.';
    }
    if (chartType === 'histogram' && xProfile && xProfile.type !== 'quantitative') {
      return 'Note: Histograms require a continuous numerical field to compute auto-bins.';
    }
    return null;
  }, [chartType, xField, yField, fieldProfiles]);

  // Constructed live ChartSpec
  const resolvedSpec: ChartSpec = useMemo(() => {
    return {
      version: '0.1.0' as const,
      type: chartType,
      title: chartTitle,
      data: dataset,
      encoding: {
        x: xField ? { field: xField } : undefined,
        y: yField ? { field: yField } : undefined,
        orientation: chartType === 'bar' ? orientation : undefined,
      },
      config: {
        showGrid,
        theme: themeMode === 'dark' ? 'zinc' : palette === 'default' ? undefined : (palette as any),
      },
    };
  }, [chartType, chartTitle, dataset, xField, yField, orientation, showGrid, themeMode, palette]);

  // Generated React Component Code
  const generatedCode = `import React from 'react';
import { Chart } from '@vizora/react';

export default function Custom${chartType.replace(/[^a-zA-Z0-9]/g, '')}Chart() {
  const data = ${JSON.stringify(dataset, null, 2)};

  return (
    <Chart
      type="${chartType}"
      data={data}
      x="${xField}"
      y="${yField}"
      ${chartType === 'bar' ? `orientation="${orientation}"\n      ` : ''}title="${chartTitle}"
      showGrid={${showGrid}}
      theme="${themeMode === 'dark' ? 'zinc' : palette}"
    />
  );
}`;

  // Download .tsx file handler
  const handleDownloadTsx = () => {
    const blob = new Blob([generatedCode], { type: 'text/typescript;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Custom${chartType}Chart.tsx`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Header Banner */}
        <div className="space-y-3 border-b border-[#18241b]/10 pb-6">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
              PILLAR 3 • GUIDED BUILDER
            </span>
            <span className="font-mono text-xs text-[#60685c]">
              Step-by-step instrument flow
            </span>
          </div>

          <h1 className="font-headline-lg text-3xl font-bold text-[#18241b]">
            Guided Chart Component Builder
          </h1>

          <p className="font-body-doc text-sm text-[#404641] max-w-2xl leading-relaxed">
            Follow the 6-step flow to configure data fields, validate encodings, apply cartographic themes, and export a ready-to-use TypeScript component.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 shadow-sm">
          <StepperProgress
            steps={BUILDER_STEPS}
            currentStep={currentStep}
            onSelectStep={(step) => setCurrentStep(step)}
          />
        </div>

        {/* ========================================================= */}
        {/* Step 1: Category Selection */}
        {/* ========================================================= */}
        {currentStep === 1 && (
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 01 / 06
              </span>
              <h2 className="font-headline-md text-2xl font-bold mt-1">
                Choose a Dashboard Category
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-1">
                Select the domain context for your chart.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CATEGORY_OPTIONS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id);
                    setChartType(cat.types[0]);
                  }}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                    category === cat.id
                      ? 'bg-[#18241b] text-white border-[#18241b] shadow-md scale-[1.01]'
                      : 'bg-[#f9fbf8] border-[#18241b]/15 text-[#18241b] hover:border-[#c2872e]'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-headline-md font-bold text-base">{cat.title}</h3>
                    <p
                      className={`text-xs ${
                        category === cat.id ? 'text-[#a4c995]' : 'text-[#60685c]'
                      }`}
                    >
                      {cat.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                    {cat.types.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded ${
                          category === cat.id ? 'bg-white/10 text-white' : 'bg-[#18241b]/8 text-[#18241b]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-4 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-6 py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Continue to Chart Type &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 2: Chart Type Selection (with Compass Dial) */}
        {/* ========================================================= */}
        {currentStep === 2 && (
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 02 / 06
              </span>
              <h2 className="font-headline-md text-2xl font-bold mt-1">
                Select Chart Bearing & Type
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-1">
                Click a bearing directly on the Compass dial or select from the options below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center justify-center">
                <CompassDial
                  selectedType={chartType}
                  onSelectType={(t) => setChartType(t)}
                />
              </div>

              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#c2872e] uppercase block">
                  Available Chart Types in &quot;{category}&quot;
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {CATEGORY_OPTIONS.find((c) => c.id === category)?.types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setChartType(t)}
                      className={`p-3 rounded-xl border font-bold uppercase transition-all ${
                        chartType === t
                          ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                          : 'bg-[#f4f7f3] text-[#18241b] border-[#18241b]/15 hover:border-[#c2872e]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-5 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b]"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-6 py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Continue to Connect Data &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 3: Connect Data */}
        {/* ========================================================= */}
        {currentStep === 3 && (
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 03 / 06
              </span>
              <h2 className="font-headline-md text-2xl font-bold mt-1">
                Connect or Paste Your Data
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-1">
                Provide dataset payloads via sample bundles, raw JSON/CSV text, or file upload.
              </p>
            </div>

            {/* Input Method Switcher */}
            <div className="flex gap-2 border-b border-[#18241b]/10 pb-3">
              {(['sample', 'paste', 'upload'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setDataSource(m)}
                  className={`px-4 py-1.5 font-sans text-xs font-bold rounded-lg transition-all capitalize ${
                    dataSource === m
                      ? 'bg-[#18241b] text-white shadow-sm'
                      : 'bg-[#f4f7f3] text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  {m === 'sample' && 'Sample Datasets'}
                  {m === 'paste' && 'Paste JSON / CSV'}
                  {m === 'upload' && 'Upload File'}
                </button>
              ))}
            </div>

            {dataSource === 'sample' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(SAMPLE_DATASETS).map(([k, s]) => (
                  <button
                    key={k}
                    onClick={() => {
                      setSelectedSampleKey(k);
                      setDataset(s.data);
                      setXField(s.defaultX);
                      setYField(s.defaultY);
                      setChartTitle(s.name);
                    }}
                    className={`p-4 rounded-xl border text-left font-mono text-xs transition-all ${
                      selectedSampleKey === k
                        ? 'bg-[#18241b] text-white border-[#18241b]'
                        : 'bg-[#f9fbf8] border-[#18241b]/15 text-[#18241b] hover:border-[#c2872e]'
                    }`}
                  >
                    <div className="font-bold">{s.name}</div>
                    <div className="text-[11px] opacity-75 mt-1">{s.data.length} records</div>
                  </button>
                ))}
              </div>
            )}

            {dataSource === 'paste' && (
              <div className="space-y-3 font-mono">
                <textarea
                  value={pasteText || JSON.stringify(dataset, null, 2)}
                  onChange={(e) => {
                    setPasteText(e.target.value);
                    try {
                      const p = JSON.parse(e.target.value);
                      if (Array.isArray(p)) {
                        setDataset(p);
                        setParseError(null);
                      }
                    } catch {
                      setParseError('Invalid JSON format');
                    }
                  }}
                  rows={8}
                  className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-3 rounded-xl border border-[#2d3a30]"
                />
                {parseError && <div className="text-red-500 text-xs">{parseError}</div>}
              </div>
            )}

            {dataSource === 'upload' && (
              <div className="border-2 border-dashed border-[#18241b]/20 p-8 rounded-2xl text-center space-y-2">
                <input
                  type="file"
                  accept=".json,.csv"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (evt) => {
                      try {
                        const parsed = JSON.parse(evt.target?.result as string);
                        if (Array.isArray(parsed)) setDataset(parsed);
                      } catch {
                        alert('Uploaded file must be a JSON array.');
                      }
                    };
                    reader.readAsText(file);
                  }}
                  className="text-xs font-mono"
                />
                <p className="font-mono text-[11px] text-[#60685c]">Select .json or .csv data file</p>
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b]"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-6 py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Continue to Map Fields &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 4: Map Encodings & Fields */}
        {/* ========================================================= */}
        {currentStep === 4 && (
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 04 / 06
              </span>
              <h2 className="font-headline-md text-2xl font-bold mt-1">
                Map Field Encodings
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-1">
                Assign data object keys to chart coordinate axes.
              </p>
            </div>

            {validationWarning && (
              <div className="p-3.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl font-mono text-xs flex items-center gap-2">
                <span className="text-amber-600 font-bold">⚠️ Warning:</span>
                <span>{validationWarning}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div className="space-y-2">
                <label className="font-bold text-[#18241b] block">X AXIS FIELD</label>
                <select
                  value={xField}
                  onChange={(e) => setXField(e.target.value)}
                  className="w-full bg-[#f4f7f3] border border-[#18241b]/20 rounded-xl p-3 text-xs text-[#18241b] outline-none"
                >
                  {availableFields.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-[#60685c] block">
                  Maps to independent domain dimension
                </span>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-[#18241b] block">Y AXIS FIELD</label>
                <select
                  value={yField}
                  onChange={(e) => setYField(e.target.value)}
                  className="w-full bg-[#f4f7f3] border border-[#18241b]/20 rounded-xl p-3 text-xs text-[#18241b] outline-none"
                >
                  {availableFields.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-[#60685c] block">
                  Maps to dependent metric magnitude
                </span>
              </div>

              {chartType === 'bar' && (
                <div className="space-y-2 sm:col-span-2">
                  <label className="font-bold text-[#18241b] block">BAR ORIENTATION</label>
                  <div className="flex gap-2">
                    {(['vertical', 'horizontal'] as const).map((o) => (
                      <button
                        key={o}
                        onClick={() => setOrientation(o)}
                        className={`px-4 py-2 rounded-xl border capitalize ${
                          orientation === o
                            ? 'bg-[#18241b] text-white border-[#18241b]'
                            : 'bg-[#f4f7f3] text-[#60685c] border-[#18241b]/15'
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b]"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(5)}
                className="px-6 py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Continue to Style & Theme &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 5: Style & Theme */}
        {/* ========================================================= */}
        {currentStep === 5 && (
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 05 / 06
              </span>
              <h2 className="font-headline-md text-2xl font-bold mt-1">
                Style & Theme Customization
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-1">
                Customize palette swatches, dark mode, and gridlines.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="font-mono text-xs font-bold text-[#18241b] block mb-2">
                  CHART TITLE
                </label>
                <input
                  type="text"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="w-full bg-[#f4f7f3] border border-[#18241b]/20 rounded-xl p-3 font-mono text-xs text-[#18241b] outline-none"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-[#18241b] block mb-2">
                  PALETTE PRESET
                </label>
                <PalettePicker selectedId={palette} onSelect={(p) => setPalette(p.id)} />
              </div>

              <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
                <button
                  onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                  className={`px-4 py-2 rounded-xl border ${
                    themeMode === 'dark'
                      ? 'bg-[#0f1611] text-white border-[#2d3a30]'
                      : 'bg-[#f4f7f3] text-[#18241b] border-[#18241b]/15'
                  }`}
                >
                  Theme: {themeMode === 'dark' ? 'Dark Terminal' : 'Light Carto'}
                </button>

                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`px-4 py-2 rounded-xl border ${
                    showGrid
                      ? 'bg-[#18241b] text-white border-[#18241b]'
                      : 'bg-[#f4f7f3] text-[#60685c] border-[#18241b]/15'
                  }`}
                >
                  Gridlines: {showGrid ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-4 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(4)}
                className="px-5 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b]"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(6)}
                className="px-6 py-2.5 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Generate Final Export &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 6: Final Export (Emotional Payoff Screen) */}
        {/* ========================================================= */}
        {currentStep === 6 && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Payoff Banner */}
            <div className="bg-gradient-to-br from-[#18241b] to-[#25382a] text-white rounded-3xl p-6 sm:p-8 space-y-3 shadow-2xl">
              <span className="font-mono text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                Step 06 / 06 • COMPONENT READY
              </span>
              <h2 className="font-headline-lg text-3xl font-bold">
                Your Vizora Component Is Ready!
              </h2>
              <p className="font-body-ui text-sm text-[#a4c995] max-w-2xl leading-relaxed">
                Deterministic SVG layout resolved. Copy the TypeScript component below, download the .tsx module, or carry your spec into the live Playground.
              </p>
            </div>

            {/* Rendered Chart Preview with LegendBand */}
            <div className="bg-white border border-[#18241b]/15 rounded-3xl overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#18241b]/10 bg-[#f9fbf8]">
                <span className="font-headline-md font-bold text-lg text-[#18241b]">
                  {chartTitle}
                </span>
                <span className="font-mono text-xs font-bold text-[#c2872e] uppercase">
                  TYPE: {chartType}
                </span>
              </div>

              <div
                className={`h-80 p-6 flex items-center justify-center ${
                  themeMode === 'dark' ? 'bg-[#0f1611]' : 'bg-[#f7faf5]'
                }`}
              >
                <Chart
                  type={chartType}
                  data={dataset}
                  x={xField}
                  y={yField}
                  orientation={orientation}
                  title={chartTitle}
                  showGrid={showGrid}
                  theme={themeMode === 'dark' ? 'zinc' : (palette as any)}
                />
              </div>

              <LegendBand
                spec={resolvedSpec}
                dataCount={dataset.length}
                dark={themeMode === 'dark'}
              />
            </div>

            {/* Generated Code Block & Actions */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-headline-md text-xl font-bold">Generated React Component</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(generatedCode);
                      alert('Copied React component code!');
                    }}
                    className="px-4 py-2 bg-[#18241b] hover:bg-[#2a3c2e] text-white font-mono text-xs font-bold rounded-xl transition-all shadow-sm"
                  >
                    Copy Component Code
                  </button>

                  <button
                    onClick={handleDownloadTsx}
                    className="px-4 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold rounded-xl transition-all shadow-sm"
                  >
                    Download as .tsx
                  </button>

                  <button
                    onClick={() => {
                      router.push(`/playground?type=${chartType}`);
                    }}
                    className="px-4 py-2 bg-white border border-[#18241b]/20 hover:border-[#18241b] text-[#18241b] font-mono text-xs font-semibold rounded-xl transition-all shadow-sm"
                  >
                    Open in Playground &rarr;
                  </button>
                </div>
              </div>

              <CodeBlock
                code={generatedCode}
                language="typescript"
                title={`Custom${chartType}Chart.tsx`}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
