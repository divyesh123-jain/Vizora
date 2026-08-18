'use client';

import React, { useState, useMemo, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec, profileField } from '@vizora/intelligence';
import { ChartType, ChartSpec } from '@vizora/core';
import { CompassDial } from '../../components/CompassDial';
import { LegendBand } from '../../components/LegendBand';
import { PalettePicker } from '../../components/PalettePicker';
import { CodeBlock } from '../../components/CodeBlock';

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

  // Data Input Tabs: 'paste' | 'upload' | 'sample'
  const [dataTab, setDataTab] = useState<'paste' | 'upload' | 'sample'>('sample');
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

  // Live Spec Editor State (2-way sync)
  const [specJsonText, setSpecJsonText] = useState<string>('');
  const [specJsonError, setSpecJsonError] = useState<string | null>(null);
  const [activeBottomTab, setActiveBottomTab] = useState<'spec' | 'jsx' | 'profile'>('jsx');

  // Detected fields from current dataset
  const availableFields = useMemo(() => {
    if (!dataset || dataset.length === 0) return [];
    return Object.keys(dataset[0]);
  }, [dataset]);

  // Profile data for AutoChart heuristic detection
  const profiledFields = useMemo(() => {
    if (!dataset || dataset.length === 0) return [];
    try {
      return Object.keys(dataset[0]).map((f) => profileField(dataset, f));
    } catch {
      return [];
    }
  }, [dataset]);

  // AutoChart recommendation spec
  const autoSpec = useMemo(() => {
    try {
      return recommendChartSpec(dataset);
    } catch {
      return null;
    }
  }, [dataset]);

  const recommendedBearing: ChartType = autoSpec?.type || 'bar';

  // Effective chart type
  const activeType: ChartType = mode === 'auto' ? recommendedBearing : selectedType;

  // Ensure field pickers default sensibly when dataset changes
  useEffect(() => {
    if (availableFields.length > 0) {
      if (!availableFields.includes(xField)) {
        setXField(availableFields[0]);
      }
      if (availableFields.length > 1 && !availableFields.includes(yField)) {
        setYField(availableFields[1]);
      }
    }
  }, [availableFields, xField, yField]);

  // Handle Preset Switching
  const handleSelectSample = (sample: SampleDataset) => {
    setSelectedSampleId(sample.id);
    setDataset(sample.data);
    setChartTitle(sample.name);
    if (sample.suggestedType) {
      setSelectedType(sample.suggestedType);
    }
    if (sample.x) setXField(sample.x);
    if (sample.y) setYField(sample.y);
    setDataError(null);
  };

  // Handle Raw Text Change
  const handleRawTextChange = useCallback((text: string, format: 'json' | 'csv') => {
    setRawText(text);
    if (!text.trim()) {
      setDataError(null);
      return;
    }
    try {
      if (format === 'json') {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setDataError(null);
          setDataset(parsed);
        } else {
          setDataError('JSON must be a non-empty array of objects.');
        }
      } else {
        const parsed = parseCsv(text);
        if (parsed.length > 0) {
          setDataError(null);
          setDataset(parsed);
        } else {
          setDataError('CSV must have a header line and at least one data row.');
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Syntax error in data';
      setDataError(message);
    }
  }, []);

  // Handle File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      const isCsv = file.name.endsWith('.csv');
      setRawFormat(isCsv ? 'csv' : 'json');
      setRawText(content);
      handleRawTextChange(content, isCsv ? 'csv' : 'json');
    };
    reader.readAsText(file);
  };

  // Constructed live ChartSpec object
  const currentSpec: ChartSpec = useMemo(() => {
    return {
      version: '0.1.0' as const,
      type: activeType,
      title: chartTitle,
      data: dataset,
      encoding: {
        x: xField ? { field: xField } : undefined,
        y: yField ? { field: yField } : undefined,
      },
      config: {
        showGrid,
        theme: themeMode === 'dark' ? 'zinc' : palette === 'default' ? undefined : (palette as any),
      },
    };
  }, [activeType, chartTitle, dataset, xField, yField, showGrid, themeMode, palette]);

  // Keep spec editor text in sync with state
  useEffect(() => {
    setSpecJsonText(JSON.stringify(currentSpec, null, 2));
    setSpecJsonError(null);
  }, [currentSpec]);

  // Handle manual edits to the live ChartSpec JSON (2-way sync)
  const handleSpecJsonChange = (text: string) => {
    setSpecJsonText(text);
    try {
      const parsed = JSON.parse(text);
      setSpecJsonError(null);
      if (parsed.type) setSelectedType(parsed.type);
      if (parsed.title) setChartTitle(parsed.title);
      if (parsed.encoding?.x?.field) setXField(parsed.encoding.x.field);
      if (parsed.encoding?.y?.field) setYField(parsed.encoding.y.field);
      if (Array.isArray(parsed.data) && parsed.data.length > 0) setDataset(parsed.data);
    } catch {
      setSpecJsonError('Invalid JSON format');
    }
  };

  // Generated React JSX snippet
  const reactSnippet = mode === 'auto'
    ? `<AutoChart\n  data={data}\n  title="${chartTitle}"\n  theme="${themeMode === 'dark' ? 'zinc' : palette}"\n/>`
    : `<Chart\n  type="${activeType}"\n  data={data}\n  x="${xField}"\n  y="${yField}"\n  title="${chartTitle}"\n  showGrid={${showGrid}}\n  theme="${themeMode === 'dark' ? 'zinc' : palette}"\n/>`;

  // Export SVG handler
  const handleExportSvg = () => {
    const svgEl = document.querySelector('#playground-svg-viewport svg');
    if (!svgEl) {
      alert('Could not locate SVG element to export.');
      return;
    }
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeType}-chart.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Top Header & Pillar Bridge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#18241b]/10 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
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
              className="px-3.5 py-1.5 rounded-xl border border-[#18241b]/20 bg-white hover:bg-[#18241b] hover:text-white font-sans text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>Guided Stepper instead?</span>
              <span>&rarr;</span>
            </Link>

            {/* Mode Switch: AutoChart vs Manual */}
            <div className="flex items-center p-1 bg-white border border-[#18241b]/15 rounded-xl shadow-sm">
              <button
                onClick={() => setMode('auto')}
                className={`px-3 py-1 text-xs font-sans font-bold rounded-lg transition-all ${
                  mode === 'auto'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                AutoChart
              </button>
              <button
                onClick={() => setMode('manual')}
                className={`px-3 py-1 text-xs font-sans font-bold rounded-lg transition-all ${
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

        {/* 3-Band Main Layered Studio Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ========================================================= */}
          {/* Left Pane (40%): Data Input Studio */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            {/* Data Input Tabs */}
            <div className="flex items-center justify-between border-b border-[#18241b]/10 bg-[#f9fbf8] px-4 pt-3">
              <div className="flex gap-1">
                {(['sample', 'paste', 'upload'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setDataTab(t)}
                    className={`px-3.5 py-1.5 font-sans text-xs font-bold rounded-t-lg transition-all capitalize border-t border-x ${
                      dataTab === t
                        ? 'bg-white text-[#18241b] border-[#18241b]/15 -mb-px'
                        : 'border-transparent text-[#60685c] hover:text-[#18241b]'
                    }`}
                  >
                    {t === 'sample' && '1. Bundled Samples'}
                    {t === 'paste' && '2. Paste JSON/CSV'}
                    {t === 'upload' && '3. Upload File'}
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
                    Choose a curated dataset to instantly test heuristic profiling:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUNDLED_DATASETS.map((sample) => (
                      <button
                        key={sample.id}
                        onClick={() => handleSelectSample(sample)}
                        className={`p-2.5 rounded-xl border text-left font-mono text-xs transition-all flex flex-col justify-between gap-1 ${
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
                      Paste raw JSON objects array or CSV text:
                    </span>
                    <div className="flex items-center gap-1 font-mono text-xs">
                      <button
                        onClick={() => {
                          setRawFormat('json');
                          handleRawTextChange(rawText, 'json');
                        }}
                        className={`px-2 py-0.5 rounded ${
                          rawFormat === 'json' ? 'bg-[#18241b] text-white font-bold' : 'text-[#60685c]'
                        }`}
                      >
                        JSON
                      </button>
                      <button
                        onClick={() => {
                          setRawFormat('csv');
                          handleRawTextChange(rawText, 'csv');
                        }}
                        className={`px-2 py-0.5 rounded ${
                          rawFormat === 'csv' ? 'bg-[#18241b] text-white font-bold' : 'text-[#60685c]'
                        }`}
                      >
                        CSV
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={rawText || JSON.stringify(dataset, null, 2)}
                    onChange={(e) => handleRawTextChange(e.target.value, rawFormat)}
                    rows={12}
                    placeholder={
                      rawFormat === 'json'
                        ? '[{ "date": "2026-01-01", "value": 100 }, ...]'
                        : 'date,value\n2026-01-01,100\n2026-01-02,150'
                    }
                    className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-3.5 rounded-xl border border-[#18241b]/20 focus:outline-none focus:ring-2 focus:ring-[#c2872e]/30 resize-none"
                  />

                  {dataError && (
                    <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 font-mono text-xs">
                      {dataError}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Upload File */}
              {dataTab === 'upload' && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-[#18241b]/20 rounded-2xl p-6 text-center space-y-3 bg-[#f9fbf8] hover:border-[#c2872e] transition-colors">
                    <svg
                      className="w-8 h-8 mx-auto text-[#c2872e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div>
                      <label className="cursor-pointer font-sans text-xs font-bold text-[#c2872e] hover:underline">
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
              <span className="font-mono text-[11px] font-bold text-[#c2872e] uppercase block">
                Detected Field Encodings
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div>
                  <label className="text-[10px] text-[#60685c] block mb-1">X AXIS FIELD</label>
                  <select
                    value={xField}
                    onChange={(e) => setXField(e.target.value)}
                    className="w-full bg-white border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none"
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
                    className="w-full bg-white border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none"
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
          {/* Right Pane (60%): Live Chart & Compass Dial */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Chart Canvas Card */}
            <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              
              {/* Canvas Controls Header */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#18241b]/10 px-5 py-3.5 bg-[#f9fbf8] gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase">
                    Live Viewport
                  </span>
                  <span className="font-mono text-xs text-[#60685c]">
                    • Bearing: <strong className="text-[#18241b]">{activeType}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Theme Mode Toggle */}
                  <button
                    onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg border border-[#18241b]/15 bg-white hover:bg-[#18241b] hover:text-white transition-all"
                  >
                    {themeMode === 'light' ? '☀️ Light' : '🌙 Dark'}
                  </button>

                  {/* Grid Toggle */}
                  <button
                    onClick={() => setShowGrid(!showGrid)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all ${
                      showGrid
                        ? 'bg-[#18241b] text-white border-[#18241b]'
                        : 'bg-white text-[#60685c] border-[#18241b]/15'
                    }`}
                  >
                    Grid: {showGrid ? 'ON' : 'OFF'}
                  </button>

                  {/* Manual Type Dropdown if manual mode */}
                  {mode === 'manual' && (
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value as ChartType)}
                      className="bg-white border border-[#18241b]/20 rounded-lg px-2.5 py-1 font-mono text-xs text-[#18241b] outline-none"
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

              {/* Chart Viewport Canvas */}
              <div
                id="playground-svg-viewport"
                className={`h-80 p-6 flex items-center justify-center transition-colors ${
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

              {/* Spec Ledger Band */}
              <LegendBand
                spec={currentSpec}
                dataCount={dataset.length}
                dark={themeMode === 'dark'}
              />
            </div>

            {/* Compass Dial & Palette Picker Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Compass Dial (Auto Bearing or Direct Waypoint Selection) */}
              <div className="bg-white border border-[#18241b]/15 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
                <span className="font-mono text-[10px] text-[#c2872e] uppercase font-bold mb-2">
                  Compass Bearing Instrument
                </span>
                <CompassDial
                  recommendedType={recommendedBearing}
                  selectedType={activeType}
                  onSelectType={(type) => {
                    setMode('manual');
                    setSelectedType(type);
                  }}
                />
              </div>

              {/* Palette & Theme Controls */}
              <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#c2872e] uppercase font-bold">
                    Theme Tokens & Palette
                  </span>
                  <span className="font-mono text-xs text-[#60685c]">{palette}</span>
                </div>

                <PalettePicker selectedId={palette} onSelect={(p) => setPalette(p.id)} />

                <div className="space-y-2 pt-2 border-t border-[#18241b]/10 font-mono text-xs">
                  <label className="text-[10px] text-[#60685c] block">CHART TITLE</label>
                  <input
                    type="text"
                    value={chartTitle}
                    onChange={(e) => setChartTitle(e.target.value)}
                    className="w-full bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Bottom Panel: Live 2-Way Spec Editor & Code Export */}
        {/* ========================================================= */}
        <div className="bg-[#0f1611] border border-[#18241b]/30 rounded-2xl overflow-hidden shadow-xl text-[#a4c995]">
          {/* Tab Header & Action Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#2d3a30] bg-[#18221b] px-4 pt-3">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveBottomTab('jsx')}
                className={`px-4 py-2 font-mono text-xs font-bold rounded-t-lg transition-all border-b-2 ${
                  activeBottomTab === 'jsx'
                    ? 'bg-[#0f1611] text-[#c2872e] border-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                React JSX Code
              </button>
              <button
                onClick={() => setActiveBottomTab('spec')}
                className={`px-4 py-2 font-mono text-xs font-bold rounded-t-lg transition-all border-b-2 ${
                  activeBottomTab === 'spec'
                    ? 'bg-[#0f1611] text-[#c2872e] border-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                2-Way ChartSpec JSON
              </button>
              <button
                onClick={() => setActiveBottomTab('profile')}
                className={`px-4 py-2 font-mono text-xs font-bold rounded-t-lg transition-all border-b-2 ${
                  activeBottomTab === 'profile'
                    ? 'bg-[#0f1611] text-[#c2872e] border-[#c2872e]'
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
                className="px-3 py-1 rounded-lg bg-[#253329] hover:bg-[#34473a] text-white font-mono text-xs transition-colors"
              >
                Export SVG
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(reactSnippet);
                  alert('Copied React code snippet!');
                }}
                className="px-3 py-1 rounded-lg bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold transition-colors"
              >
                Copy JSX
              </button>

              {/* Disabled / V1 Share Link Button */}
              <button
                disabled
                title="Cloud spec sharing requires backend service (Scheduled for V1)"
                className="px-3 py-1 rounded-lg bg-[#18221b] border border-[#2d3a30] text-[#60685c] font-mono text-xs cursor-not-allowed opacity-75 flex items-center gap-1"
              >
                <span>Share Link</span>
                <span className="text-[9px] bg-[#c2872e]/20 text-[#c2872e] px-1.5 py-0.2 rounded font-bold">
                  V1
                </span>
              </button>
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
                  {specJsonError && <span className="text-red-400 font-bold">{specJsonError}</span>}
                </div>
                <textarea
                  value={specJsonText}
                  onChange={(e) => handleSpecJsonChange(e.target.value)}
                  rows={10}
                  className="w-full bg-[#0b100d] text-[#a4c995] font-mono text-xs p-4 rounded-xl border border-[#2d3a30] focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 resize-none leading-relaxed"
                />
              </div>
            )}

            {activeBottomTab === 'profile' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-[#c2872e] font-bold uppercase block">
                  Deterministic Field Profiler Output
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {profiledFields.map((p) => (
                    <div
                      key={p.field}
                      className="p-3 bg-[#151f17] border border-[#2d3a30] rounded-xl space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{p.field}</span>
                        <span className="text-[#c2872e] text-[10px] uppercase">{p.type}</span>
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
