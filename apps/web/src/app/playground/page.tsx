'use client';

import React, { useState, useMemo, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec, profileField } from '@vizora/intelligence';
import { ChartType, ChartSpec } from '@vizora/core';
import { CompassDial } from '../../components/CompassDial';
import { PalettePicker } from '../../components/PalettePicker';
import { CodeBlock } from '../../components/CodeBlock';
import { ChartPreviewBlock } from '../../components/ChartPreviewBlock';

// ==========================================
// Bundled Sample Datasets
// ==========================================
interface SampleDataset {
  id: string;
  name: string;
  category: string;
  data: Record<string, unknown>[];
  suggestedType?: ChartType;
  x?: string;
  y?: string;
}

const BUNDLED_DATASETS: SampleDataset[] = [
  {
    id: 'revenue-by-month',
    name: 'SaaS Monthly Revenue',
    category: 'Business',
    suggestedType: 'line',
    x: 'month',
    y: 'revenue',
    data: [
      { month: '2026-01-01', revenue: 42000, users: 1200 },
      { month: '2026-02-01', revenue: 58000, users: 1450 },
      { month: '2026-03-01', revenue: 84000, users: 1890 },
      { month: '2026-04-01', revenue: 110000, users: 2400 },
      { month: '2026-05-01', revenue: 145000, users: 3100 },
    ],
  },
  {
    id: 'regional-sales',
    name: 'Regional Sales Magnitude',
    category: 'Comparison',
    suggestedType: 'bar',
    x: 'region',
    y: 'sales',
    data: [
      { region: 'North America', sales: 18400, quota: 15000 },
      { region: 'Europe', sales: 14200, quota: 13000 },
      { region: 'Asia Pacific', sales: 22100, quota: 18000 },
      { region: 'Latin America', sales: 8900, quota: 8000 },
      { region: 'Middle East', sales: 6400, quota: 6000 },
    ],
  },
  {
    id: 'stock-ohlc-sample',
    name: 'Stock Daily OHLC',
    category: 'Trading',
    suggestedType: 'candlestick',
    x: 'date',
    data: [
      { date: 'Mon', open: 150, high: 162, low: 145, close: 158, volume: 12000 },
      { date: 'Tue', open: 158, high: 165, low: 152, close: 153, volume: 18400 },
      { date: 'Wed', open: 153, high: 170, low: 150, close: 168, volume: 24000 },
      { date: 'Thu', open: 168, high: 174, low: 160, close: 162, volume: 16000 },
      { date: 'Fri', open: 162, high: 180, low: 159, close: 176, volume: 29000 },
    ],
  },
  {
    id: 'marketing-scatter',
    name: 'Ad Spend vs Conversions',
    category: 'Statistical',
    suggestedType: 'scatter',
    x: 'spend',
    y: 'conversions',
    data: [
      { spend: 100, conversions: 12, ctr: 2.1 },
      { spend: 250, conversions: 28, ctr: 2.8 },
      { spend: 500, conversions: 58, ctr: 3.4 },
      { spend: 750, conversions: 79, ctr: 3.1 },
      { spend: 1000, conversions: 115, ctr: 4.2 },
      { spend: 1300, conversions: 142, ctr: 4.6 },
    ],
  },
  {
    id: 'device-share',
    name: 'Device Traffic Proportions',
    category: 'Composition',
    suggestedType: 'donut',
    x: 'device',
    y: 'users',
    data: [
      { device: 'Desktop', users: 14200 },
      { device: 'Mobile Safari', users: 9800 },
      { device: 'Mobile Chrome', users: 6100 },
      { device: 'Tablet', users: 1500 },
    ],
  },
  {
    id: 'demographic-ages',
    name: 'Customer Age Distribution',
    category: 'Statistical',
    suggestedType: 'histogram',
    x: 'age',
    data: [
      { age: 19 }, { age: 22 }, { age: 24 }, { age: 25 }, { age: 28 },
      { age: 29 }, { age: 31 }, { age: 34 }, { age: 35 }, { age: 38 },
      { age: 41 }, { age: 44 }, { age: 47 }, { age: 52 }, { age: 58 },
    ],
  },
];

// Helper to parse CSV string into objects array
function parseCsv(csvText: string): Record<string, unknown>[] {
  const lines = csvText.trim().split(/\r?\n/).filter((l) => l.trim().length > 0);
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map((h) => h.trim().replace(/^["']|["']$/g, ''));
  const rows: Record<string, unknown>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map((v) => v.trim().replace(/^["']|["']$/g, ''));
    const row: Record<string, unknown> = {};
    headers.forEach((h, idx) => {
      const raw = values[idx] ?? '';
      const num = Number(raw);
      row[h] = !isNaN(num) && raw !== '' ? num : raw;
    });
    rows.push(row);
  }
  return rows;
}

function LivePlaygroundContent() {
  const searchParams = useSearchParams();
  const initialTypeParam = searchParams.get('type') as ChartType | null;

  // Data Input Tabs: 'sample' | 'paste' | 'upload'
  const [dataTab, setDataTab] = useState<'sample' | 'paste' | 'upload'>('sample');
  const [selectedSampleId, setSelectedSampleId] = useState<string>('revenue-by-month');
  const [rawText, setRawText] = useState<string>('');
  const [rawFormat, setRawFormat] = useState<'json' | 'csv'>('json');
  const [dataError, setDataError] = useState<string | null>(null);

  // Active dataset state
  const [dataset, setDataset] = useState<Record<string, unknown>[]>(BUNDLED_DATASETS[0].data);

  // Chart Mode: 'auto' | 'manual'
  const [mode, setMode] = useState<'auto' | 'manual'>(initialTypeParam ? 'manual' : 'auto');
  const [selectedType, setSelectedType] = useState<ChartType>(initialTypeParam || 'line');

  // Encoding & Styling State
  const [xField, setXField] = useState<string>('month');
  const [yField, setYField] = useState<string>('revenue');
  const [palette, setPalette] = useState<string>('default');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [chartTitle, setChartTitle] = useState<string>('SaaS Monthly Revenue');

  // 2-Way ChartSpec JSON & Bottom Tabs
  const [activeBottomTab, setActiveBottomTab] = useState<'jsx' | 'spec' | 'profile'>('jsx');
  const [specJsonText, setSpecJsonText] = useState<string>('');
  const [specJsonError, setSpecJsonError] = useState<string | null>(null);

  // Auto recommendation
  const recommendedSpec = useMemo(() => {
    try {
      if (!dataset || dataset.length === 0) return null;
      const rec = recommendChartSpec(dataset);
      return { ...rec, title: chartTitle };
    } catch {
      return null;
    }
  }, [dataset, chartTitle]);

  const recommendedBearing: ChartType = recommendedSpec?.type || 'bar';
  const activeType: ChartType = mode === 'auto' ? recommendedBearing : selectedType;

  // Field names in dataset
  const availableFields = useMemo(() => {
    if (!dataset || dataset.length === 0) return [];
    return Object.keys(dataset[0]);
  }, [dataset]);

  // When sample changes
  const handleSelectSample = (sample: SampleDataset) => {
    setSelectedSampleId(sample.id);
    setDataset(sample.data);
    setChartTitle(sample.name);
    if (sample.suggestedType) {
      setSelectedType(sample.suggestedType);
    }
    if (sample.x) setXField(sample.x);
    if (sample.y) setYField(sample.y);
    setRawText(JSON.stringify(sample.data, null, 2));
    setDataError(null);
  };

  // Smart type selector with dataset auto-alignment
  const handleSelectChartType = (type: ChartType) => {
    setMode('manual');
    setSelectedType(type);

    // If switching to candlestick and current data lacks OHLC fields, auto-switch to stock OHLC sample
    if (type === 'candlestick') {
      const firstRow = dataset[0] || {};
      const hasOHLC = 'open' in firstRow && 'close' in firstRow && 'high' in firstRow && 'low' in firstRow;
      if (!hasOHLC) {
        const ohlcSample = BUNDLED_DATASETS.find((s) => s.id === 'stock-ohlc-sample');
        if (ohlcSample) {
          handleSelectSample(ohlcSample);
        }
      }
    } else if (type === 'donut' || type === 'pie' || type === 'funnel') {
      const firstRow = dataset[0] || {};
      const keys = Object.keys(firstRow);
      if (keys.length >= 2) {
        if (!xField || !(xField in firstRow)) setXField(keys[0]);
        if (!yField || !(yField in firstRow)) setYField(keys[1]);
      }
    }
  };

  // When raw text changes
  const handleRawTextChange = (text: string, format: 'json' | 'csv') => {
    setRawText(text);
    setDataError(null);
    if (!text.trim()) return;

    try {
      if (format === 'json') {
        const parsed = JSON.parse(text);
        if (!Array.isArray(parsed) || parsed.length === 0) {
          setDataError('Input must be a non-empty array of JSON objects.');
          return;
        }
        setDataset(parsed);
        const keys = Object.keys(parsed[0]);
        if (keys.length > 0) setXField(keys[0]);
        if (keys.length > 1) setYField(keys[1]);
      } else {
        const parsed = parseCsv(text);
        if (parsed.length === 0) {
          setDataError('CSV parsing failed. Ensure valid header row.');
          return;
        }
        setDataset(parsed);
        const keys = Object.keys(parsed[0]);
        if (keys.length > 0) setXField(keys[0]);
        if (keys.length > 1) setYField(keys[1]);
      }
    } catch (err: unknown) {
      setDataError(err instanceof Error ? err.message : 'Invalid data format');
    }
  };

  // When file is uploaded
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      if (file.name.endsWith('.csv')) {
        setRawFormat('csv');
        handleRawTextChange(content, 'csv');
      } else {
        setRawFormat('json');
        handleRawTextChange(content, 'json');
      }
    };
    reader.readAsText(file);
  };

  // Resolved Current Spec
  const currentSpec: Partial<ChartSpec> & { type: ChartType } = useMemo(() => {
    if (mode === 'auto' && recommendedSpec) {
      return recommendedSpec;
    }
    return {
      version: '0.1.0' as const,
      type: activeType,
      title: chartTitle,
      data: dataset,
      encoding: {
        x: { field: xField },
        y: { field: yField },
      },
    };
  }, [mode, recommendedSpec, activeType, chartTitle, dataset, xField, yField]);

  // Keep spec JSON text synced
  useEffect(() => {
    setSpecJsonText(JSON.stringify(currentSpec, null, 2));
  }, [currentSpec]);

  // Handle 2-Way Spec JSON edits
  const handleSpecJsonChange = (newJson: string) => {
    setSpecJsonText(newJson);
    setSpecJsonError(null);
    try {
      const parsed = JSON.parse(newJson);
      if (parsed.type) {
        setMode('manual');
        setSelectedType(parsed.type);
      }
      if (parsed.title) setChartTitle(parsed.title);
      if (parsed.encoding?.x?.field) setXField(parsed.encoding.x.field);
      if (parsed.encoding?.y?.field) setYField(parsed.encoding.y.field);
      if (Array.isArray(parsed.data) && parsed.data.length > 0) {
        setDataset(parsed.data);
      }
    } catch {
      setSpecJsonError('Invalid JSON format');
    }
  };

  // Generate Copyable React JSX snippet
  const reactSnippet = useMemo(() => {
    if (mode === 'auto') {
      return `<AutoChart
  data={data}
  title="${chartTitle}"
/>`;
    }
    return `<Chart
  type="${activeType}"
  data={data}
  x="${xField}"
  y="${yField}"
  title="${chartTitle}"
  showGrid={${showGrid}}
  theme="${themeMode === 'dark' ? 'zinc' : palette}"
/>`;
  }, [mode, activeType, chartTitle, xField, yField, showGrid, themeMode, palette]);

  // Export SVG handler
  const handleExportSvg = useCallback(() => {
    const svgEl = document.querySelector('#playground-svg-viewport svg');
    if (!svgEl) {
      alert('No rendered SVG found in the active viewport.');
      return;
    }
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `vizora-${activeType}-export.svg`;
    link.click();
    URL.revokeObjectURL(url);
  }, [activeType]);

  // Profiled fields list for Profiling tab
  const profiledFields = useMemo(() => {
    if (!dataset || dataset.length === 0) return [];
    try {
      return Object.keys(dataset[0]).map((f) => {
        const p = profileField(dataset, f);
        return {
          field: f,
          type: p.type,
          distinctCount: p.distinctCount,
        };
      });
    } catch {
      return [];
    }
  }, [dataset]);

  // Soft cap indicator for large datasets (§5)
  const isLargeDataset = dataset.length > 5000;

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Playground Top Title & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#18241b]/10 pb-5 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
                PILLAR 2 • LIVE STUDIO
              </span>
              <span className="font-mono text-xs text-[#60685c]">
                Live In-Browser Chart Creation
              </span>
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#18241b]">
              Interactive Chart Studio & Playground
            </h1>
          </div>

          {/* Quick Actions & Handoff to Builder */}
          <div className="flex items-center gap-3">
            <Link
              href="/builder"
              className="px-3.5 py-1.5 rounded-lg border border-[#18241b]/15 bg-white hover:bg-[#18241b] hover:text-white font-mono text-xs font-semibold shadow-xs transition-all duration-150 flex items-center gap-1.5 hover:-translate-y-0.5"
            >
              <span>Guided Stepper instead?</span>
              <span>&rarr;</span>
            </Link>

            {/* Mode Switch: AutoChart vs Manual */}
            <div className="flex items-center p-0.5 bg-white border border-[#18241b]/15 rounded-lg shadow-xs">
              <button
                onClick={() => setMode('auto')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all duration-150 ${
                  mode === 'auto'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                AutoChart
              </button>
              <button
                onClick={() => setMode('manual')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all duration-150 ${
                  mode === 'manual'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                Manual
              </button>
            </div>
          </div>
        </div>

        {/* Large Dataset Soft Cap Warning */}
        {isLargeDataset && (
          <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg font-mono text-xs shadow-xs">
            Showing first 5,000 rows — large datasets get a faster renderer in a future release.
          </div>
        )}

        {/* Main Layered Studio Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ========================================================= */}
          {/* Left Pane (40%): Data Input Studio */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white border border-[#18241b]/10 rounded-xl overflow-hidden shadow-sm flex flex-col">
            {/* Data Input Tabs */}
            <div className="flex items-center justify-between border-b border-[#18241b]/10 bg-[#f9fbf8] px-4 pt-3">
              <div className="flex gap-1 font-mono text-xs">
                {(['sample', 'paste', 'upload'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setDataTab(t)}
                    className={`px-3 py-1.5 font-mono text-xs font-bold rounded-t-md transition-all duration-150 capitalize border-b-2 ${
                      dataTab === t
                        ? 'border-[#c2872e] text-[#c2872e]'
                        : 'border-transparent text-[#60685c] hover:text-[#18241b]'
                    }`}
                  >
                    {t === 'sample' && '1. Samples'}
                    {t === 'paste' && '2. Paste'}
                    {t === 'upload' && '3. Upload'}
                  </button>
                ))}
              </div>
              <span className="font-mono text-[10px] text-[#60685c]">{dataset.length} rows</span>
            </div>

            <div className="p-4 space-y-4">
              {/* Tab 1: Bundled Samples */}
              {dataTab === 'sample' && (
                <div className="space-y-3">
                  <span className="font-mono text-[11px] text-[#60685c] block">
                    Choose a curated dataset to test heuristic profiling:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUNDLED_DATASETS.map((sample) => (
                      <button
                        key={sample.id}
                        onClick={() => handleSelectSample(sample)}
                        className={`p-3 rounded-lg border text-left font-mono text-xs transition-all duration-150 flex flex-col justify-between gap-1 shadow-xs hover:shadow-sm ${
                          selectedSampleId === sample.id
                            ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                            : 'bg-[#f4f7f3] border-[#18241b]/10 text-[#18241b] hover:border-[#c2872e]'
                        }`}
                      >
                        <span className="font-bold truncate">{sample.name}</span>
                        <div className="flex items-center justify-between text-[10px] opacity-80">
                          <span>{sample.category}</span>
                          <span className="uppercase">{sample.suggestedType}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Paste JSON or CSV */}
              {dataTab === 'paste' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#60685c]">
                      Paste raw JSON objects or CSV text:
                    </span>
                    <div className="flex items-center gap-1 font-mono text-xs">
                      <button
                        onClick={() => {
                          setRawFormat('json');
                          handleRawTextChange(rawText, 'json');
                        }}
                        className={`px-2.5 py-0.5 rounded-md transition-colors ${
                          rawFormat === 'json' ? 'bg-[#18241b] text-white font-bold shadow-xs' : 'text-[#60685c]'
                        }`}
                      >
                        JSON
                      </button>
                      <button
                        onClick={() => {
                          setRawFormat('csv');
                          handleRawTextChange(rawText, 'csv');
                        }}
                        className={`px-2.5 py-0.5 rounded-md transition-colors ${
                          rawFormat === 'csv' ? 'bg-[#18241b] text-white font-bold shadow-xs' : 'text-[#60685c]'
                        }`}
                      >
                        CSV
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={rawText || JSON.stringify(dataset, null, 2)}
                    onChange={(e) => handleRawTextChange(e.target.value, rawFormat)}
                    rows={10}
                    placeholder={
                      rawFormat === 'json'
                        ? '[{ "date": "2026-01-01", "value": 100 }, ...]'
                        : 'date,value\n2026-01-01,100\n2026-01-02,150'
                    }
                    className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-3.5 rounded-xl border border-[#18241b]/20 focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all resize-none"
                  />

                  {dataError && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-[#d6502b] font-mono text-xs">
                      {dataError}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Upload File */}
              {dataTab === 'upload' && (
                <div className="space-y-3">
                  <div className="border-2 border-dashed border-[#18241b]/15 rounded-xl p-8 text-center space-y-2 bg-[#f9fbf8] hover:border-[#c2872e] transition-colors">
                    <div>
                      <label className="cursor-pointer font-mono text-xs font-bold text-[#c2872e] hover:underline">
                        <span>Click to browse files</span>
                        <input
                          type="file"
                          accept=".csv,.json"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="font-mono text-[11px] text-[#60685c] mt-1">
                        Supports .csv and .json data payloads
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Encodings & Profiling Summary */}
            <div className="border-t border-[#18241b]/10 p-4 bg-[#f9fbf8] space-y-3">
              <span className="font-mono text-[10px] font-bold text-[#c2872e] uppercase block">
                Detected Field Encodings
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <label className="text-[10px] text-[#60685c] block mb-1">X AXIS FIELD</label>
                  <select
                    value={xField}
                    onChange={(e) => setXField(e.target.value)}
                    className="w-full bg-white border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-xs"
                  >
                    {availableFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-[#60685c] block mb-1">Y AXIS FIELD</label>
                  <select
                    value={yField}
                    onChange={(e) => setYField(e.target.value)}
                    className="w-full bg-white border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-xs"
                  >
                    {availableFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Right Pane (60%): Live Chart Preview & Compass Dial */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Standardized Chart Viewport Card with Preview / Code */}
            <ChartPreviewBlock
              title={chartTitle}
              codeSnippet={reactSnippet}
              dataCount={dataset.length}
              dark={themeMode === 'dark'}
              spec={currentSpec}
            >
              {/* Canvas Controls Sub-header */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#18241b]/10 dark:border-[#2d3a30] pb-2.5 mb-2.5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#60685c]">
                    Bearing: <strong className="text-[#18241b] dark:text-[#f1f5ee] uppercase">{activeType}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Theme Mode Toggle */}
                  <button
                    onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg border border-[#18241b]/15 dark:border-[#2d3a30] bg-white dark:bg-[#0f1611] text-[#18241b] dark:text-[#f1f5ee] hover:bg-[#18241b] hover:text-white transition-all shadow-xs"
                  >
                    {themeMode === 'light' ? '☀️ Light' : '🌙 Dark'}
                  </button>

                  {/* Grid Toggle */}
                  <button
                    onClick={() => setShowGrid(!showGrid)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all shadow-xs ${
                      showGrid
                        ? 'bg-[#18241b] text-white border-[#18241b] dark:bg-white dark:text-[#18241b] shadow-sm'
                        : 'bg-white text-[#60685c] border-[#18241b]/15 dark:bg-[#0f1611]'
                    }`}
                  >
                    Grid: {showGrid ? 'ON' : 'OFF'}
                  </button>

                  {/* Manual Type Dropdown if manual mode */}
                  {mode === 'manual' && (
                    <select
                      value={selectedType}
                      onChange={(e) => handleSelectChartType(e.target.value as ChartType)}
                      className="bg-white dark:bg-[#0f1611] border border-[#18241b]/20 dark:border-[#2d3a30] rounded-lg px-2.5 py-1 font-mono text-xs text-[#18241b] dark:text-[#f1f5ee] outline-none shadow-xs"
                    >
                      <option value="line">line</option>
                      <option value="bar">bar</option>
                      <option value="area">area</option>
                      <option value="donut">donut</option>
                      <option value="pie">pie</option>
                      <option value="candlestick">candlestick</option>
                      <option value="funnel">funnel</option>
                      <option value="scatter">scatter</option>
                      <option value="histogram">histogram</option>
                      <option value="kpi-sparkline">kpi-sparkline</option>
                    </select>
                  )}
                </div>
              </div>

              <div
                id="playground-svg-viewport"
                className={`h-72 p-4 flex items-center justify-center transition-colors ${
                  themeMode === 'dark' ? 'bg-[#0f1611]' : 'bg-[#f7faf5]'
                }`}
              >
                {mode === 'auto' ? (
                  <AutoChart
                    data={dataset}
                    title={chartTitle}
                  />
                ) : (
                  <Chart
                    type={activeType}
                    data={dataset}
                    x={xField}
                    y={yField}
                    title={chartTitle}
                    showGrid={showGrid}
                    theme={themeMode === 'dark' ? 'zinc' : (palette as any)}
                  />
                )}
              </div>
            </ChartPreviewBlock>

            {/* Compass Dial & Palette Picker Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Compass Dial */}
              <div className="bg-white border border-[#18241b]/10 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                <span className="font-mono text-[10px] text-[#c2872e] uppercase font-bold mb-1">
                  Compass Bearing Instrument
                </span>
                <CompassDial
                  recommendedType={recommendedBearing}
                  selectedType={activeType}
                  onSelectType={(type) => {
                    handleSelectChartType(type);
                  }}
                />
              </div>

              {/* Palette & Theme Controls */}
              <div className="bg-white border border-[#18241b]/10 rounded-xl p-5 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#c2872e] uppercase font-bold">
                    Theme Tokens & Palette
                  </span>
                  <span className="font-mono text-xs text-[#60685c]">{palette}</span>
                </div>

                <PalettePicker selectedId={palette} onSelect={(p) => setPalette(p.id)} />

                <div className="space-y-1.5 pt-2 border-t border-[#18241b]/10 font-mono text-xs">
                  <label className="text-[10px] text-[#60685c] block">CHART TITLE</label>
                  <input
                    type="text"
                    value={chartTitle}
                    onChange={(e) => setChartTitle(e.target.value)}
                    className="w-full bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Bottom Panel: Live 2-Way Spec Editor & Code Export */}
        {/* ========================================================= */}
        <div className="bg-[#0f1611] border border-[#18241b]/30 rounded-xl overflow-hidden text-[#a4c995] shadow-lg">
          {/* Tab Header & Action Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#2d3a30] bg-[#141d16] px-4 pt-2.5">
            <div className="flex gap-1 font-mono text-xs">
              <button
                onClick={() => setActiveBottomTab('jsx')}
                className={`px-3.5 py-2 font-mono text-xs font-bold transition-all duration-150 border-b-2 ${
                  activeBottomTab === 'jsx'
                    ? 'border-[#c2872e] text-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                React JSX Code
              </button>
              <button
                onClick={() => setActiveBottomTab('spec')}
                className={`px-3.5 py-2 font-mono text-xs font-bold transition-all duration-150 border-b-2 ${
                  activeBottomTab === 'spec'
                    ? 'border-[#c2872e] text-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                2-Way ChartSpec JSON
              </button>
              <button
                onClick={() => setActiveBottomTab('profile')}
                className={`px-3.5 py-2 font-mono text-xs font-bold transition-all duration-150 border-b-2 ${
                  activeBottomTab === 'profile'
                    ? 'border-[#c2872e] text-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                Data Profile Ledger
              </button>
            </div>

            {/* Persistent Export Actions */}
            <div className="flex items-center gap-2 py-2">
              <button
                onClick={handleExportSvg}
                className="px-3 py-1.5 rounded-lg bg-[#1f2c22] hover:bg-[#2e4032] text-white font-mono text-xs transition-all duration-150 border border-[#2d3a30] shadow-xs"
              >
                Export SVG
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(reactSnippet);
                  alert('Copied React code snippet!');
                }}
                className="px-3 py-1.5 rounded-lg bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold transition-all duration-150 shadow-xs hover:-translate-y-0.5"
              >
                Copy JSX
              </button>

              {/* Disabled / V1 Share Link Button */}
              <div className="flex flex-col items-center">
                <button
                  disabled
                  title="Cloud spec sharing requires backend service (Scheduled for V1)"
                  className="px-3 py-1.5 rounded-lg bg-[#141d16] border border-[#2d3a30] text-[#60685c] font-mono text-xs cursor-not-allowed flex items-center gap-1 opacity-70"
                >
                  <span>Share Link</span>
                  <span className="text-[9px] bg-[#c2872e]/20 text-[#c2872e] px-1.5 py-0.2 rounded-full font-bold">
                    V1
                  </span>
                </button>
                <span className="text-[9px] text-[#60685c] font-mono mt-0.5">(coming soon)</span>
              </div>
            </div>
          </div>

          {/* Bottom Tab Content */}
          <div className="p-5">
            {activeBottomTab === 'jsx' && (
              <CodeBlock
                code={reactSnippet}
                language="typescript"
                title="Generated React Component Snippet"
              />
            )}

            {activeBottomTab === 'spec' && (
              <div className="space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs text-[#9ba196]">
                  <span>Edit the JSON below directly — changes immediately sync to the chart:</span>
                  {specJsonError && <span className="text-[#d6502b] font-bold">{specJsonError}</span>}
                </div>
                <textarea
                  value={specJsonText}
                  onChange={(e) => handleSpecJsonChange(e.target.value)}
                  rows={9}
                  className="w-full bg-[#0b100d] text-[#a4c995] font-mono text-xs p-4 rounded-xl border border-[#2d3a30] focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 resize-none leading-relaxed transition-all"
                />
              </div>
            )}

            {activeBottomTab === 'profile' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-[#c2872e] font-bold uppercase block text-[10px]">
                  Deterministic Field Profiler Output
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {profiledFields.map((p) => (
                    <div
                      key={p.field}
                      className="p-3.5 bg-[#141d16] border border-[#2d3a30] rounded-xl space-y-1 shadow-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{p.field}</span>
                        <span className="text-[#c2872e] text-[10px] uppercase font-bold">{p.type}</span>
                      </div>
                      <div className="text-[11px] text-[#9ba196]">
                        Distinct count: <span className="text-white">{p.distinctCount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function LivePlaygroundPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono text-xs text-[#60685c]">Loading Playground Studio...</div>}>
      <LivePlaygroundContent />
    </Suspense>
  );
}
