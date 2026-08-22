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
import { TourOverlay } from './TourOverlay';

// ==========================================
// Bundled Sample Datasets
// ==========================================
interface SampleDataset {
  id: string;
  name: string;
  category: string;
  description: string;
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
    description: 'Monthly MRR & user growth tracking temporal trajectory over time.',
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
    description: 'Multi-region sales vs quota performance comparison across territories.',
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
    description: 'Daily Open, High, Low, Close asset pricing with traded volume metrics.',
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
    description: 'Correlation analysis between digital advertising budget and customer acquisitions.',
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
    description: 'Breakdown of web visitors across mobile, desktop, and tablet platforms.',
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
    description: 'Frequency distribution of customer demographics across discrete age brackets.',
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

interface DataValidationState {
  status: 'idle' | 'valid' | 'invalid';
  message: string;
  rowCount?: number;
  colCount?: number;
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
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const [validationState, setValidationState] = useState<DataValidationState>({
    status: 'idle',
    message: 'Ready for data input',
  });

  // Active dataset state
  const [dataset, setDataset] = useState<Record<string, unknown>[]>(BUNDLED_DATASETS[0].data);

  // Chart Mode: 'auto' | 'manual'
  const [mode, setMode] = useState<'auto' | 'manual'>(initialTypeParam ? 'manual' : 'auto');
  const [selectedType, setSelectedType] = useState<ChartType>(initialTypeParam || 'line');

  // Compare Mode State (§5)
  const [isCompareMode, setIsCompareMode] = useState<boolean>(false);
  const [compareType, setCompareType] = useState<ChartType>('bar');

  // Encoding & Styling State
  const [xField, setXField] = useState<string>('month');
  const [yField, setYField] = useState<string>('revenue');
  const [palette, setPalette] = useState<string>('default');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [chartTitle, setChartTitle] = useState<string>('SaaS Monthly Revenue');

  // Progressive Disclosure Advanced Options (§8)
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  const [zeroBaseline, setZeroBaseline] = useState<boolean>(true);
  const [histogramBins, setHistogramBins] = useState<number>(10);

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

  // Profiled field types map for live previews in encoding selects
  const fieldTypeMap = useMemo(() => {
    if (!dataset || dataset.length === 0) return {} as Record<string, string>;
    const map: Record<string, string> = {};
    availableFields.forEach((f) => {
      try {
        map[f] = profileField(dataset, f).type;
      } catch {
        map[f] = 'categorical';
      }
    });
    return map;
  }, [dataset, availableFields]);

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
    setValidationState({
      status: 'valid',
      message: `Loaded "${sample.name}" — ${sample.data.length} rows, ${Object.keys(sample.data[0] || {}).length} fields detected`,
      rowCount: sample.data.length,
      colCount: Object.keys(sample.data[0] || {}).length,
    });
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

  // When raw text changes with real-time validation
  const handleRawTextChange = (text: string, format: 'json' | 'csv') => {
    setRawText(text);
    setDataError(null);

    if (!text.trim()) {
      setDataset([]);
      setValidationState({
        status: 'idle',
        message: 'Enter or paste data records to visualize',
      });
      return;
    }

    try {
      if (format === 'json') {
        const parsed = JSON.parse(text);
        if (!Array.isArray(parsed)) {
          const err = 'JSON root must be an array of objects (e.g. [{"a": 1}])';
          setDataError(err);
          setValidationState({ status: 'invalid', message: err });
          return;
        }
        if (parsed.length === 0) {
          setDataset([]);
          setValidationState({ status: 'invalid', message: 'JSON array is empty — provide at least 1 object record' });
          return;
        }
        if (typeof parsed[0] !== 'object' || parsed[0] === null) {
          const err = 'Array elements must be JSON key-value objects';
          setDataError(err);
          setValidationState({ status: 'invalid', message: err });
          return;
        }

        setDataset(parsed);
        const keys = Object.keys(parsed[0]);
        if (keys.length > 0 && (!xField || !keys.includes(xField))) setXField(keys[0]);
        if (keys.length > 1 && (!yField || !keys.includes(yField))) setYField(keys[1]);

        setValidationState({
          status: 'valid',
          message: `Valid JSON payload: ${parsed.length} row${parsed.length > 1 ? 's' : ''}, ${keys.length} field${keys.length > 1 ? 's' : ''} detected`,
          rowCount: parsed.length,
          colCount: keys.length,
        });
      } else {
        const parsed = parseCsv(text);
        if (parsed.length === 0) {
          const err = 'CSV parsing failed. Ensure a valid header row and at least 1 data row.';
          setDataError(err);
          setValidationState({ status: 'invalid', message: err });
          return;
        }
        setDataset(parsed);
        const keys = Object.keys(parsed[0]);
        if (keys.length > 0 && (!xField || !keys.includes(xField))) setXField(keys[0]);
        if (keys.length > 1 && (!yField || !keys.includes(yField))) setYField(keys[1]);

        setValidationState({
          status: 'valid',
          message: `Valid CSV payload: ${parsed.length} row${parsed.length > 1 ? 's' : ''}, ${keys.length} column${keys.length > 1 ? 's' : ''} detected`,
          rowCount: parsed.length,
          colCount: keys.length,
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Invalid data format';
      setDataError(msg);
      setValidationState({
        status: 'invalid',
        message: `Parse Error: ${msg}`,
      });
    }
  };

  // Drag and drop handlers (§9)
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      if (file.name.endsWith('.csv')) {
        setDataTab('paste');
        setRawFormat('csv');
        handleRawTextChange(content, 'csv');
      } else {
        setDataTab('paste');
        setRawFormat('json');
        handleRawTextChange(content, 'json');
      }
    };
    reader.readAsText(file);
  };

  // When file is uploaded via input
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

      {/* Onboarding Tour - guides new users through Data → Encoding → Chart Type */}
      <TourOverlay onComplete={() => {}} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8">
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
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/builder"
              className="px-3.5 py-1.5 rounded-lg border border-[#18241b]/15 bg-white hover:bg-[#18241b] hover:text-white font-mono text-xs font-semibold shadow-xs transition-all duration-150 flex items-center gap-1.5 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
            >
              <span>Guided Stepper instead?</span>
              <span>&rarr;</span>
            </Link>

            {/* Mode Switch: AutoChart vs Manual */}
            <div className="flex items-center p-0.5 bg-white border border-[#18241b]/15 rounded-lg shadow-xs">
              <button
                onClick={() => setMode('auto')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                  mode === 'auto'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                AutoChart
              </button>
              <button
                onClick={() => setMode('manual')}
                className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
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

        {/* Main Layered Studio Panel - Responsive Grid (§12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* ========================================================= */}
          {/* Left Pane (40%): Data Input Studio */}
          {/* ========================================================= */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`lg:col-span-5 bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col transition-all ${
              isDraggingOver
                ? 'border-[#c2872e] ring-2 ring-[#c2872e]/30 bg-[#c2872e]/5'
                : 'border-[#18241b]/10'
            }`}
          >
            {/* Data Input Tabs */}
            <div className="flex items-center justify-between border-b border-[#18241b]/10 bg-[#f9fbf8] px-4 pt-3 overflow-x-auto">
              <div className="flex gap-1 font-mono text-xs">
                {(['sample', 'paste', 'upload'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setDataTab(t)}
                    className={`px-3 py-1.5 font-mono text-xs font-bold rounded-t-md transition-all duration-150 capitalize border-b-2 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
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
              <div className="flex items-center gap-2 font-mono text-[10px]">
                <span className="text-[#60685c]">{dataset.length} rows</span>
                {dataset.length > 0 && (
                  <button
                    onClick={() => {
                      setDataset([]);
                      setRawText('');
                      setDataError(null);
                      setValidationState({ status: 'idle', message: 'Dataset cleared' });
                    }}
                    className="text-[#d6502b] hover:underline focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none rounded"
                    title="Clear active dataset"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Drag and Drop Active Banner (§9) */}
            {isDraggingOver && (
              <div className="p-4 m-3 bg-[#c2872e]/10 border-2 border-dashed border-[#c2872e] rounded-xl text-center font-mono text-xs text-[#18241b] animate-pulse">
                <span className="font-bold block">Drop CSV or JSON file here</span>
                <span className="text-[11px] text-[#60685c]">Instant client-side parser will ingest dataset</span>
              </div>
            )}

            <div className="p-4 space-y-4">
              {/* Empty State Illustration for Playground when no data is loaded */}
              {dataset.length === 0 && (
                <div className="p-5 text-center space-y-3 bg-[#f7faf5] border border-dashed border-[#18241b]/20 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[#c2872e]/10 text-[#c2872e] flex items-center justify-center mx-auto ring-4 ring-[#c2872e]/5">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
                      <polygon points="12,6 14.5,12 12,10.5 9.5,12" fill="#c2872e" stroke="none" />
                      <polygon points="12,18 14.5,12 12,13.5 9.5,12" fill="#60685c" stroke="none" />
                      <circle cx="12" cy="12" r="1.5" fill="#18241b" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-[#18241b]">No Data Loaded Yet</h4>
                    <p className="font-mono text-[11px] text-[#60685c] mt-1 max-w-xs mx-auto leading-relaxed">
                      Start by pasting custom JSON/CSV records, dropping a file, or choosing a benchmark sample below.
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <button
                      onClick={() => handleSelectSample(BUNDLED_DATASETS[0])}
                      className="px-3 py-1.5 rounded-lg bg-[#18241b] text-white font-mono text-xs font-bold shadow-xs hover:bg-[#2c3d31] transition-all focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
                    >
                      Try SaaS Sample
                    </button>
                    <button
                      onClick={() => {
                        setDataTab('paste');
                        setRawFormat('json');
                        setRawText('[\n  { "month": "2026-01-01", "revenue": 45000 },\n  { "month": "2026-02-01", "revenue": 62000 }\n]');
                        handleRawTextChange('[\n  { "month": "2026-01-01", "revenue": 45000 },\n  { "month": "2026-02-01", "revenue": 62000 }\n]', 'json');
                      }}
                      className="px-3 py-1.5 rounded-lg border border-[#18241b]/15 bg-white text-[#18241b] font-mono text-xs font-semibold hover:border-[#c2872e] transition-all focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
                    >
                      Paste JSON
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 1: Bundled Samples */}
              {dataTab === 'sample' && (
                <div className="space-y-3">
                  <span className="font-mono text-[11px] text-[#60685c] block">
                    Choose a curated dataset to test heuristic profiling and visualization:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {BUNDLED_DATASETS.map((sample) => {
                      const isSelected = selectedSampleId === sample.id && dataset.length > 0;
                      return (
                        <button
                          key={sample.id}
                          onClick={() => handleSelectSample(sample)}
                          className={`p-3 rounded-lg border text-left font-mono text-xs transition-all duration-150 flex flex-col gap-1.5 shadow-xs hover:shadow-sm focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                            isSelected
                              ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm'
                              : 'bg-[#f4f7f3] border-[#18241b]/10 text-[#18241b] hover:border-[#c2872e]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold truncate text-sm">{sample.name}</span>
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                              isSelected
                                ? 'bg-[#c2872e] text-[#18241b]'
                                : 'bg-[#c2872e]/15 text-[#c2872e]'
                            }`}>
                              {sample.suggestedType}
                            </span>
                          </div>
                          {/* Sample Dataset Description (§3) */}
                          <p className={`text-[11px] leading-snug line-clamp-2 ${
                            isSelected ? 'text-[#a4c995]' : 'text-[#60685c]'
                          }`}>
                            {sample.description}
                          </p>
                          <div className="flex items-center justify-between text-[10px] opacity-75 pt-1 border-t border-current/10">
                            <span>Category: <strong>{sample.category}</strong></span>
                            <span>{sample.data.length} records</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 2: Paste JSON or CSV (§4) */}
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
                        className={`px-2.5 py-0.5 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
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
                        className={`px-2.5 py-0.5 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                          rawFormat === 'csv' ? 'bg-[#18241b] text-white font-bold shadow-xs' : 'text-[#60685c]'
                        }`}
                      >
                        CSV
                      </button>
                    </div>
                  </div>

                  <textarea
                    value={rawText || (dataset.length > 0 ? JSON.stringify(dataset, null, 2) : '')}
                    onChange={(e) => handleRawTextChange(e.target.value, rawFormat)}
                    rows={9}
                    placeholder={
                      rawFormat === 'json'
                        ? '[{ "date": "2026-01-01", "value": 100 }, ...]'
                        : 'date,value\n2026-01-01,100\n2026-01-02,150'
                    }
                    className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-3.5 rounded-xl border border-[#18241b]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e] transition-all resize-none font-medium leading-relaxed"
                  />

                  {/* Inline Real-Time Validation Status */}
                  {validationState.status === 'valid' && (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-xs">
                      <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium truncate">{validationState.message}</span>
                    </div>
                  )}

                  {validationState.status === 'invalid' && (
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 font-mono text-xs">
                      <svg className="w-4 h-4 text-rose-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="font-medium truncate">{validationState.message}</span>
                    </div>
                  )}

                  {validationState.status === 'idle' && (
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-[#f4f7f3] border border-[#18241b]/10 text-[#60685c] font-mono text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-[#c2872e]"></span>
                      <span>Paste JSON array or CSV text above for real-time validation</span>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Upload / Drop File (§9) */}
              {dataTab === 'upload' && (
                <div className="space-y-3">
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className="border-2 border-dashed border-[#18241b]/20 hover:border-[#c2872e] rounded-xl p-8 text-center space-y-2 bg-[#f9fbf8] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c2872e]/10 text-[#c2872e] flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <label className="cursor-pointer font-mono text-xs font-bold text-[#c2872e] hover:underline focus-within:ring-2 focus-within:ring-[#c2872e] rounded">
                        <span>Click to browse files or drop here</span>
                        <input
                          type="file"
                          accept=".csv,.json"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <p className="font-mono text-[11px] text-[#60685c] mt-1">
                        Supports .csv and .json structured payloads
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Encodings & Profiling Summary */}
            <div className="border-t border-[#18241b]/10 p-4 bg-[#f9fbf8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#c2872e] uppercase">
                  Detected Field Encodings
                </span>
                <span className="font-mono text-[10px] text-[#60685c]">
                  {availableFields.length} field{availableFields.length !== 1 ? 's' : ''} available
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                {/* X Axis Field Select with Type Preview (§2) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] text-[#60685c]">X AXIS FIELD</label>
                    {xField && fieldTypeMap[xField] && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                        fieldTypeMap[xField] === 'temporal'
                          ? 'bg-amber-100 text-amber-800'
                          : fieldTypeMap[xField] === 'quantitative'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {fieldTypeMap[xField]}
                      </span>
                    )}
                  </div>
                  <select
                    value={xField}
                    onChange={(e) => setXField(e.target.value)}
                    disabled={availableFields.length === 0}
                    className="w-full bg-white border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e] transition-all shadow-xs disabled:opacity-50"
                  >
                    {availableFields.length === 0 ? (
                      <option value="">(No fields detected)</option>
                    ) : (
                      availableFields.map((f) => (
                        <option key={f} value={f}>
                          {f} ({fieldTypeMap[f] || 'categorical'})
                        </option>
                      ))
                    )}
                  </select>
                </div>

                {/* Y Axis Field Select with Type Preview (§2) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[10px] text-[#60685c]">Y AXIS FIELD</label>
                    {yField && fieldTypeMap[yField] && (
                      <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                        fieldTypeMap[yField] === 'temporal'
                          ? 'bg-amber-100 text-amber-800'
                          : fieldTypeMap[yField] === 'quantitative'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {fieldTypeMap[yField]}
                      </span>
                    )}
                  </div>
                  <select
                    value={yField}
                    onChange={(e) => setYField(e.target.value)}
                    disabled={availableFields.length === 0}
                    className="w-full bg-white border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e] transition-all shadow-xs disabled:opacity-50"
                  >
                    {availableFields.length === 0 ? (
                      <option value="">(No fields detected)</option>
                    ) : (
                      availableFields.map((f) => (
                        <option key={f} value={f}>
                          {f} ({fieldTypeMap[f] || 'quantitative'})
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              {/* Progressive Disclosure of Advanced Options (§8) */}
              <div className="pt-2 border-t border-[#18241b]/10">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center justify-between w-full text-left font-mono text-xs font-semibold text-[#18241b] hover:text-[#c2872e] py-1 transition-colors focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none rounded"
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#c2872e]">{showAdvanced ? '▼' : '▶'}</span>
                    <span>Advanced Encoding Options</span>
                  </span>
                  <span className="text-[10px] text-[#60685c] uppercase">
                    {showAdvanced ? 'Hide' : 'Expand'}
                  </span>
                </button>

                {showAdvanced && (
                  <div className="mt-2.5 pt-2.5 border-t border-dashed border-[#18241b]/10 space-y-3 font-mono text-xs animate-in fade-in duration-150">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-[#60685c] block mb-1">ORIENTATION</label>
                        <select
                          value={orientation}
                          onChange={(e) => setOrientation(e.target.value as 'vertical' | 'horizontal')}
                          className="w-full bg-white border border-[#18241b]/15 rounded-lg p-1.5 text-xs text-[#18241b] outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e]"
                        >
                          <option value="vertical">Vertical</option>
                          <option value="horizontal">Horizontal</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] text-[#60685c] block mb-1">HISTOGRAM BINS</label>
                        <select
                          value={histogramBins}
                          onChange={(e) => setHistogramBins(Number(e.target.value))}
                          className="w-full bg-white border border-[#18241b]/15 rounded-lg p-1.5 text-xs text-[#18241b] outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e]"
                        >
                          <option value={5}>5 Bins (Coarse)</option>
                          <option value={10}>10 Bins (Standard)</option>
                          <option value={20}>20 Bins (Granular)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px] text-[#60685c]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={zeroBaseline}
                          onChange={(e) => setZeroBaseline(e.target.checked)}
                          className="rounded border-[#18241b]/20 text-[#c2872e] focus-visible:ring-2 focus-visible:ring-[#c2872e]"
                        />
                        <span>Zero Baseline (Y-min at 0)</span>
                      </label>
                      <span className="text-[10px] opacity-75">Auto-scale applied</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* Right Pane (60%): Live Chart Preview & Comparison (§5) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Standardized Chart Viewport Card with Preview / Code */}
            <ChartPreviewBlock
              title={isCompareMode ? `${chartTitle} (Primary)` : chartTitle}
              codeSnippet={reactSnippet}
              dataCount={dataset.length}
              dark={themeMode === 'dark'}
              spec={currentSpec}
            >
              {/* Canvas Controls Sub-header (§5 Compare Mode & §7 Theme Toggle) */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#18241b]/10 dark:border-[#2d3a30] pb-2.5 mb-2.5 gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#60685c]">
                    Bearing: <strong className="text-[#18241b] dark:text-[#f1f5ee] uppercase">{activeType}</strong>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Compare Mode Toggle (§5) */}
                  <button
                    onClick={() => setIsCompareMode(!isCompareMode)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all shadow-xs flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                      isCompareMode
                        ? 'bg-[#c2872e] text-[#18241b] border-[#c2872e] font-bold shadow-sm'
                        : 'bg-white text-[#60685c] border-[#18241b]/15 dark:bg-[#0f1611] dark:border-[#2d3a30] hover:text-[#18241b] dark:hover:text-white'
                    }`}
                    title="Compare two chart types side-by-side with synchronized data"
                  >
                    <span>{isCompareMode ? '◫ Comparing' : '◫ Compare Mode'}</span>
                  </button>

                  {/* Theme Mode Toggle with Distinct Visual Feedback (§7) */}
                  <button
                    onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all shadow-xs flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                      themeMode === 'dark'
                        ? 'bg-[#0f1611] text-[#f1f5ee] border-[#3a4d3f] ring-1 ring-[#c2872e]/30 shadow-inner'
                        : 'bg-white text-[#18241b] border-[#18241b]/20 shadow-xs hover:bg-[#f4f7f3]'
                    }`}
                    title="Toggle light/dark visualization canvas theme"
                  >
                    {themeMode === 'light' ? (
                      <>
                        <span>☀️</span>
                        <span className="font-semibold">Light</span>
                      </>
                    ) : (
                      <>
                        <span>🌙</span>
                        <span className="font-semibold text-[#c2872e]">Dark</span>
                      </>
                    )}
                  </button>

                  {/* Grid Toggle */}
                  <button
                    onClick={() => setShowGrid(!showGrid)}
                    className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
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
                      className="bg-white dark:bg-[#0f1611] border border-[#18241b]/20 dark:border-[#2d3a30] rounded-lg px-2.5 py-1 font-mono text-xs text-[#18241b] dark:text-[#f1f5ee] outline-none shadow-xs focus-visible:ring-2 focus-visible:ring-[#c2872e]"
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

              {/* Viewports: Single View vs Compare Mode (§5) */}
              <div
                id="playground-svg-viewport"
                className={`p-4 transition-colors rounded-lg ${
                  themeMode === 'dark' ? 'bg-[#0f1611]' : 'bg-[#f7faf5]'
                }`}
              >
                {dataset.length === 0 ? (
                  <div className="h-72 flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#18241b]/5 flex items-center justify-center text-[#c2872e] ring-8 ring-[#18241b]/5">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                        <polygon points="12,6 14.5,12 12,10.5 9.5,12" fill="#c2872e" stroke="none" />
                        <polygon points="12,18 14.5,12 12,13.5 9.5,12" fill="#60685c" stroke="none" />
                        <circle cx="12" cy="12" r="1.5" fill="#18241b" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-[#18241b] dark:text-[#f1f5ee]">
                        Awaiting Coordinates
                      </h4>
                      <p className="font-mono text-[11px] text-[#60685c] max-w-xs mt-1">
                        No dataset active. Select a benchmark sample or paste data on the left panel to chart.
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectSample(BUNDLED_DATASETS[0])}
                      className="px-3 py-1.5 rounded-lg bg-[#c2872e] text-[#18241b] font-mono text-xs font-bold hover:bg-[#d99a38] transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
                    >
                      Load SaaS Revenue Sample
                    </button>
                  </div>
                ) : isCompareMode ? (
                  /* Side-by-Side Comparison Mode (§5) */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Primary Chart Viewport */}
                    <div className="border border-[#18241b]/10 dark:border-[#2d3a30] rounded-xl p-3 bg-white dark:bg-[#141d16] flex flex-col justify-between shadow-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#18241b]/10 dark:border-[#2d3a30] font-mono text-xs">
                        <span className="font-bold text-[#18241b] dark:text-[#f1f5ee] uppercase">
                          Chart A: {activeType}
                        </span>
                        <span className="text-[10px] text-[#c2872e] font-bold">PRIMARY</span>
                      </div>
                      <div className="h-64 flex items-center justify-center pt-2">
                        {mode === 'auto' ? (
                          <AutoChart data={dataset} title={`${chartTitle} (A)`} />
                        ) : (
                          <Chart
                            type={activeType}
                            data={dataset}
                            x={xField}
                            y={yField}
                            title={`${chartTitle} (A)`}
                            showGrid={showGrid}
                            theme={themeMode === 'dark' ? 'zinc' : (palette as any)}
                          />
                        )}
                      </div>
                    </div>

                    {/* Comparison Chart Viewport */}
                    <div className="border border-[#18241b]/10 dark:border-[#2d3a30] rounded-xl p-3 bg-white dark:bg-[#141d16] flex flex-col justify-between shadow-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-[#18241b]/10 dark:border-[#2d3a30] font-mono text-xs">
                        <span className="font-bold text-[#18241b] dark:text-[#f1f5ee] uppercase">
                          Chart B:
                        </span>
                        <select
                          value={compareType}
                          onChange={(e) => setCompareType(e.target.value as ChartType)}
                          className="bg-[#f4f7f3] dark:bg-[#0f1611] border border-[#18241b]/15 dark:border-[#2d3a30] rounded px-2 py-0.5 font-mono text-xs text-[#18241b] dark:text-[#f1f5ee] outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e]"
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
                      </div>
                      <div className="h-64 flex items-center justify-center pt-2">
                        <Chart
                          type={compareType}
                          data={dataset}
                          x={xField}
                          y={yField}
                          title={`${chartTitle} (B)`}
                          showGrid={showGrid}
                          theme={themeMode === 'dark' ? 'zinc' : (palette as any)}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Single Viewport */
                  <div className="h-72 flex items-center justify-center">
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
                    className="w-full bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg p-2 text-xs text-[#18241b] outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e] transition-all shadow-xs"
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
            <div className="flex gap-1 font-mono text-xs overflow-x-auto">
              <button
                onClick={() => setActiveBottomTab('jsx')}
                className={`px-3.5 py-2 font-mono text-xs font-bold transition-all duration-150 border-b-2 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                  activeBottomTab === 'jsx'
                    ? 'border-[#c2872e] text-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                React JSX Code
              </button>
              <button
                onClick={() => setActiveBottomTab('spec')}
                className={`px-3.5 py-2 font-mono text-xs font-bold transition-all duration-150 border-b-2 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
                  activeBottomTab === 'spec'
                    ? 'border-[#c2872e] text-[#c2872e]'
                    : 'text-[#9ba196] hover:text-white border-transparent'
                }`}
              >
                2-Way ChartSpec JSON
              </button>
              <button
                onClick={() => setActiveBottomTab('profile')}
                className={`px-3.5 py-2 font-mono text-xs font-bold transition-all duration-150 border-b-2 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none ${
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
                className="px-3 py-1.5 rounded-lg bg-[#1f2c22] hover:bg-[#2e4032] text-white font-mono text-xs transition-all duration-150 border border-[#2d3a30] shadow-xs focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
              >
                Export SVG
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(reactSnippet);
                  alert('Copied React code snippet!');
                }}
                className="px-3 py-1.5 rounded-lg bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold transition-all duration-150 shadow-xs hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
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
                {/* Data Type Badges in Spec View (§10) */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-[#141d16] border border-[#2d3a30] text-xs">
                  <span className="text-[#9ba196] text-[11px]">Active Fields & Data Types:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {availableFields.map((f) => {
                      const t = fieldTypeMap[f] || 'categorical';
                      return (
                        <span
                          key={f}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${
                            t === 'quantitative'
                              ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                              : t === 'temporal'
                              ? 'bg-amber-950/60 text-amber-400 border-amber-800/60'
                              : 'bg-slate-900/80 text-slate-300 border-slate-700/60'
                          }`}
                        >
                          <span>{t === 'quantitative' ? '🔴' : t === 'temporal' ? '🟢' : '🟡'}</span>
                          <span>{f}</span>
                          <span className="opacity-70 font-normal">({t})</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#9ba196]">
                  <span>Edit the JSON below directly — changes immediately sync to the chart:</span>
                  {specJsonError && <span className="text-[#d6502b] font-bold">{specJsonError}</span>}
                </div>
                <textarea
                  value={specJsonText}
                  onChange={(e) => handleSpecJsonChange(e.target.value)}
                  rows={9}
                  className="w-full bg-[#0b100d] text-[#a4c995] font-mono text-xs p-4 rounded-xl border border-[#2d3a30] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c2872e] resize-none leading-relaxed transition-all"
                />
              </div>
            )}

            {activeBottomTab === 'profile' && (
              <div className="space-y-3 font-mono text-xs">
                <span className="text-[#c2872e] font-bold uppercase block text-[10px]">
                  Deterministic Field Profiler Output (§10)
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {profiledFields.map((p) => (
                    <div
                      key={p.field}
                      className="p-3.5 bg-[#141d16] border border-[#2d3a30] rounded-xl space-y-1 shadow-xs hover:border-[#c2872e]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <span>{p.type === 'quantitative' ? '🔴' : p.type === 'temporal' ? '🟢' : '🟡'}</span>
                          <span>{p.field}</span>
                        </span>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                          p.type === 'quantitative'
                            ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                            : p.type === 'temporal'
                            ? 'bg-amber-950/60 text-amber-400 border-amber-800/60'
                            : 'bg-slate-900/80 text-slate-300 border-slate-700/60'
                        }`}>
                          {p.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#9ba196]">
                        Distinct values: <span className="text-white font-semibold">{p.distinctCount}</span>
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
