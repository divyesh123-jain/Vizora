'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';
import { profileField } from '@vizora/intelligence';
import { StepperProgress, StepItem } from '../../components/StepperProgress';
import { CompassDial } from '../../components/CompassDial';
import { PalettePicker } from '../../components/PalettePicker';
import { LegendBand } from '../../components/LegendBand';
import { ChartPreviewBlock } from '../../components/ChartPreviewBlock';

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
    const xProf = fieldProfiles.find((p) => p.field === xField);
    const yProf = fieldProfiles.find((p) => p.field === yField);

    if (chartType === 'line' && xProf && xProf.type !== 'temporal') {
      return `Selected X field "${xField}" inferred as ${xProf.type}. Line charts typically track temporal time series.`;
    }
    if (chartType === 'scatter' && ((xProf && xProf.type !== 'quantitative') || (yProf && yProf.type !== 'quantitative'))) {
      return 'Scatter plots require quantitative numeric metrics on both X and Y dimensions.';
    }
    if (chartType === 'histogram' && xProf && xProf.type !== 'quantitative') {
      return 'Histograms require a quantitative continuous metric to calculate statistical bins.';
    }
    return null;
  }, [chartType, xField, yField, fieldProfiles]);

  // Resolved ChartSpec
  const resolvedSpec = useMemo(() => {
    return {
      version: '0.1.0' as const,
      type: chartType,
      title: chartTitle,
      data: dataset,
      encoding: {
        x: { field: xField },
        y: { field: yField },
        orientation,
      },
    };
  }, [chartType, chartTitle, dataset, xField, yField, orientation]);

  // Generated standalone component code
  const generatedCode = `import React from 'react';
import { Chart } from '@vizora/react';

export default function Custom${chartType.replace(/-/g, '')}Chart() {
  const data = ${JSON.stringify(dataset, null, 2)};

  return (
    <Chart
      type="${chartType}"
      data={data}
      x="${xField}"
      y="${yField}"
      title="${chartTitle}"
      orientation="${orientation}"
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

  // Annotated Spec Mapping Explanation for Tab 3 (§4)
  const specMappingContent = (
    <div className="p-4 bg-[#f4f7f3] dark:bg-[#151f17] rounded-lg font-mono text-xs space-y-3">
      <div className="flex items-center gap-2 border-b border-[#18241b]/10 dark:border-[#2d3a30] pb-2">
        <span className="font-bold text-[#c2872e] uppercase text-[10px]">Contract Schema Mapping</span>
        <span className="text-[#60685c]">|</span>
        <span className="text-[#60685c] text-[11px]">How JSX props compile into headless ChartSpec</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
        <div className="p-3 bg-white dark:bg-[#0f1611] rounded-lg border border-[#18241b]/10 dark:border-[#2d3a30] space-y-1 shadow-xs">
          <div className="text-[#c2872e] font-bold">type=&quot;{chartType}&quot;</div>
          <div className="text-[#60685c]">
            &rarr; Compiles to <code className="text-[#18241b] dark:text-[#e0e4dc]">ChartSpec.type</code>. Determines scene graph layout strategy.
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-[#0f1611] rounded-lg border border-[#18241b]/10 dark:border-[#2d3a30] space-y-1 shadow-xs">
          <div className="text-[#c2872e] font-bold">x=&quot;{xField}&quot;</div>
          <div className="text-[#60685c]">
            &rarr; Compiles to <code className="text-[#18241b] dark:text-[#e0e4dc]">ChartSpec.encoding.x.field</code>. Inferred as domain coordinate scale.
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-[#0f1611] rounded-lg border border-[#18241b]/10 dark:border-[#2d3a30] space-y-1 shadow-xs">
          <div className="text-[#c2872e] font-bold">y=&quot;{yField}&quot;</div>
          <div className="text-[#60685c]">
            &rarr; Compiles to <code className="text-[#18241b] dark:text-[#e0e4dc]">ChartSpec.encoding.y.field</code>. Scaled to range dimension ticks.
          </div>
        </div>

        <div className="p-3 bg-white dark:bg-[#0f1611] rounded-lg border border-[#18241b]/10 dark:border-[#2d3a30] space-y-1 shadow-xs">
          <div className="text-[#c2872e] font-bold">data=&#123;data&#125;</div>
          <div className="text-[#60685c]">
            &rarr; Serialized data payload ({dataset.length} records) evaluated through headless transforms.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Header Banner */}
        <div className="space-y-2.5 border-b border-[#18241b]/10 pb-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
              PILLAR 3 • GUIDED BUILDER
            </span>
            <span className="font-mono text-xs text-[#60685c]">
              Step-by-step instrument flow
            </span>
          </div>

          <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#18241b]">
            Guided Chart Component Builder
          </h1>

          <p className="font-body-doc text-xs sm:text-sm text-[#404641] max-w-2xl leading-relaxed">
            Follow the 6-step flow to configure data fields, validate encodings, apply cartographic themes, and export a ready-to-use TypeScript component.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="bg-white border border-[#18241b]/10 rounded-xl p-4 shadow-sm">
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
          <div className="step-page-transition bg-white border border-[#18241b]/10 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 01 / 06
              </span>
              <h2 className="font-headline-md text-xl font-bold mt-1">
                Choose a Dashboard Category
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-0.5">
                Select the domain context for your chart.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {CATEGORY_OPTIONS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id);
                    setChartType(cat.types[0]);
                  }}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-3 shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                    category === cat.id
                      ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                      : 'bg-[#f9fbf8] border-[#18241b]/10 text-[#18241b] hover:border-[#c2872e]'
                  }`}
                >
                  <div className="space-y-1">
                    <h3 className="font-headline-md font-bold text-sm">{cat.title}</h3>
                    <p
                      className={`text-xs leading-relaxed ${
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
                        className={`px-2 py-0.5 rounded-md ${
                          category === cat.id ? 'bg-white/15 text-white' : 'bg-[#18241b]/8 text-[#18241b]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-3 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-5 py-2 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
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
          <div className="step-page-transition bg-white border border-[#18241b]/10 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 02 / 06
              </span>
              <h2 className="font-headline-md text-xl font-bold mt-1">
                Select Chart Bearing & Type
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-0.5">
                Click a bearing directly on the Compass dial or select from the options below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-center justify-center p-2">
                <CompassDial
                  selectedType={chartType}
                  onSelectType={(t) => setChartType(t)}
                />
              </div>

              <div className="space-y-3">
                <span className="font-mono text-[10px] font-bold text-[#c2872e] uppercase block">
                  Available Chart Types in &quot;{category}&quot;
                </span>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  {CATEGORY_OPTIONS.find((c) => c.id === category)?.types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setChartType(t)}
                      className={`p-2.5 rounded-lg border font-bold uppercase transition-all duration-150 shadow-xs ${
                        chartType === t
                          ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                          : 'bg-[#f4f7f3] text-[#18241b] border-[#18241b]/10 hover:border-[#c2872e] hover:bg-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-3 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(1)}
                className="px-4 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b] rounded-lg transition-colors"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-5 py-2 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
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
          <div className="step-page-transition bg-white border border-[#18241b]/10 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 03 / 06
              </span>
              <h2 className="font-headline-md text-xl font-bold mt-1">
                Connect or Paste Your Data
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-0.5">
                Provide dataset payloads via sample bundles, raw JSON/CSV text, or file upload.
              </p>
            </div>

            {/* Input Method Switcher */}
            <div className="flex gap-2 border-b border-[#18241b]/10 pb-2.5 font-mono text-xs">
              {(['sample', 'paste', 'upload'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setDataSource(m)}
                  className={`px-3 py-1.5 font-mono text-xs font-bold rounded-lg transition-all duration-150 capitalize ${
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                    className={`p-3.5 rounded-xl border text-left font-mono text-xs transition-all duration-150 shadow-xs hover:shadow-sm ${
                      selectedSampleKey === k
                        ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                        : 'bg-[#f9fbf8] border-[#18241b]/10 text-[#18241b] hover:border-[#c2872e]'
                    }`}
                  >
                    <div className="font-bold">{s.name}</div>
                    <div className="text-[11px] opacity-75 mt-0.5">{s.data.length} records</div>
                  </button>
                ))}
              </div>
            )}

            {dataSource === 'paste' && (
              <div className="space-y-2 font-mono">
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
                  rows={7}
                  className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-3.5 rounded-xl border border-[#2d3a30] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all"
                />
                {parseError && <div className="text-[#d6502b] text-xs font-mono">{parseError}</div>}
              </div>
            )}

            {dataSource === 'upload' && (
              <div className="border-2 border-dashed border-[#18241b]/15 p-8 rounded-xl text-center space-y-2 bg-[#f9fbf8] hover:border-[#c2872e] transition-colors">
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

            <div className="flex justify-between pt-3 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(2)}
                className="px-4 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b] rounded-lg transition-colors"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-5 py-2 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
              >
                Continue to Map Fields &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 4: Map Encodings & Fields with Live Side Preview */}
        {/* ========================================================= */}
        {currentStep === 4 && (
          <div className="step-page-transition bg-white border border-[#18241b]/10 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 04 / 06
              </span>
              <h2 className="font-headline-md text-xl font-bold mt-1">
                Map Field Encodings
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-0.5">
                Assign data object keys to coordinate axes with instant live preview.
              </p>
            </div>

            {validationWarning && (
              <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg font-mono text-xs flex items-center gap-2">
                <span className="text-[#c2872e] font-bold">⚠️ Warning:</span>
                <span>{validationWarning}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Controls Column */}
              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-[#18241b] block">X AXIS FIELD</label>
                  <select
                    value={xField}
                    onChange={(e) => setXField(e.target.value)}
                    className="w-full bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg p-2.5 text-xs text-[#18241b] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-xs"
                  >
                    {availableFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <span className="text-[10px] text-[#60685c] block">
                    Maps to independent domain dimension
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#18241b] block">Y AXIS FIELD</label>
                  <select
                    value={yField}
                    onChange={(e) => setYField(e.target.value)}
                    className="w-full bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg p-2.5 text-xs text-[#18241b] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-xs"
                  >
                    {availableFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                  <span className="text-[10px] text-[#60685c] block">
                    Maps to dependent metric magnitude
                  </span>
                </div>

                {chartType === 'bar' && (
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#18241b] block">BAR ORIENTATION</label>
                    <div className="flex gap-2">
                      {(['vertical', 'horizontal'] as const).map((o) => (
                        <button
                          key={o}
                          onClick={() => setOrientation(o)}
                          className={`px-3.5 py-1.5 rounded-lg border capitalize transition-all duration-150 shadow-xs ${
                            orientation === o
                              ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                              : 'bg-[#f4f7f3] text-[#60685c] border-[#18241b]/10 hover:bg-white'
                          }`}
                        >
                          {o}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Persistent Live Chart Preview Column */}
              <div className="rounded-xl border border-[#18241b]/10 bg-[#f9fbf8] overflow-hidden flex flex-col justify-between shadow-xs">
                <div className="p-3 border-b border-[#18241b]/8 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#60685c] font-bold">Live Mapping Preview</span>
                  <span className="text-[#c2872e] uppercase font-bold">{chartType}</span>
                </div>
                <div className="h-52 p-2 flex items-center justify-center">
                  <Chart
                    type={chartType}
                    data={dataset}
                    x={xField}
                    y={yField}
                    orientation={orientation}
                  />
                </div>
                <LegendBand
                  spec={resolvedSpec}
                  dataCount={dataset.length}
                />
              </div>
            </div>

            <div className="flex justify-between pt-3 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(3)}
                className="px-4 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b] rounded-lg transition-colors"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(5)}
                className="px-5 py-2 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
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
          <div className="step-page-transition bg-white border border-[#18241b]/10 rounded-xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div>
              <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">
                Step 05 / 06
              </span>
              <h2 className="font-headline-md text-xl font-bold mt-1">
                Style & Theme Customization
              </h2>
              <p className="font-body-ui text-xs text-[#60685c] mt-0.5">
                Customize palette swatches, dark mode, and gridlines.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-mono text-xs font-bold text-[#18241b] block mb-1.5">
                  CHART TITLE
                </label>
                <input
                  type="text"
                  value={chartTitle}
                  onChange={(e) => setChartTitle(e.target.value)}
                  className="w-full bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg p-2.5 font-mono text-xs text-[#18241b] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-xs"
                />
              </div>

              <div>
                <PalettePicker selectedId={palette} onSelect={(p) => setPalette(p.id)} />
              </div>

              <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
                <button
                  onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all duration-150 shadow-xs ${
                    themeMode === 'dark'
                      ? 'bg-[#0f1611] text-white border-[#2d3a30] shadow-sm'
                      : 'bg-[#f4f7f3] text-[#18241b] border-[#18241b]/10 hover:bg-white'
                  }`}
                >
                  Theme: {themeMode === 'dark' ? 'Dark Terminal' : 'Light Carto'}
                </button>

                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all duration-150 shadow-xs ${
                    showGrid
                      ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                      : 'bg-[#f4f7f3] text-[#60685c] border-[#18241b]/10 hover:bg-white'
                  }`}
                >
                  Gridlines: {showGrid ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            <div className="flex justify-between pt-3 border-t border-[#18241b]/10">
              <button
                onClick={() => setCurrentStep(4)}
                className="px-4 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b] rounded-lg transition-colors"
              >
                &larr; Back
              </button>
              <button
                onClick={() => setCurrentStep(6)}
                className="px-5 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
              >
                Generate Final Export &rarr;
              </button>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* Step 6: Final Export (3-Tab Standardized Block) */}
        {/* ========================================================= */}
        {currentStep === 6 && (
          <div className="step-page-transition space-y-6">
            {/* Payoff Banner */}
            <div className="bg-[#18241b] text-white rounded-xl p-6 sm:p-7 space-y-2 border border-[#18241b] shadow-md">
              <span className="font-mono text-[10px] font-bold text-[#c2872e] uppercase tracking-wider">
                Step 06 / 06 • COMPONENT READY
              </span>
              <h2 className="font-headline-lg text-2xl font-bold">
                Your Vizora Component Is Ready!
              </h2>
              <p className="font-body-ui text-xs text-[#a4c995] max-w-2xl leading-relaxed">
                Deterministic SVG layout resolved. Copy the TypeScript component below, download the .tsx module, or review the ChartSpec contract mapping.
              </p>
            </div>

            {/* Standardized 3-Tab Component Block */}
            <ChartPreviewBlock
              title={chartTitle}
              codeSnippet={generatedCode}
              dataCount={dataset.length}
              dark={themeMode === 'dark'}
              spec={resolvedSpec}
              extraTabs={[
                {
                  id: 'spec-mapping',
                  label: 'How this maps to Vizora',
                  content: specMappingContent,
                },
              ]}
            >
              <div
                className={`h-72 p-4 flex items-center justify-center ${
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
                  theme={themeMode === 'dark' ? 'zinc' : palette}
                />
              </div>
            </ChartPreviewBlock>

            {/* Persistent Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setCurrentStep(5)}
                className="px-4 py-2 text-xs font-mono text-[#60685c] hover:text-[#18241b] rounded-lg transition-colors"
              >
                &larr; Back to Customization
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleDownloadTsx}
                  className="px-4 py-2 bg-[#18241b] hover:bg-[#25382a] text-white font-mono text-xs font-bold rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
                >
                  Download .tsx
                </button>

                <button
                  onClick={() => {
                    router.push(`/playground?type=${chartType}`);
                  }}
                  className="px-4 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold rounded-lg transition-all duration-150 shadow-sm hover:-translate-y-0.5"
                >
                  Open in Playground &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
