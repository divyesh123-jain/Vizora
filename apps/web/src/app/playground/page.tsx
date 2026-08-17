'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec } from '@vizora/intelligence';
import { ChartType, buildSceneGraph } from '@vizora/core';
import { CodeBlock } from '../../components/CodeBlock';
import { VisualDataEditor } from '../../components/VisualDataEditor';

const PLAYGROUND_PRESETS: Record<string, {
  name: string;
  type: ChartType;
  x?: string;
  y?: string;
  data: Record<string, unknown>[];
}> = {
  sales: {
    name: 'Regional E-Commerce Revenue',
    type: 'bar',
    x: 'region',
    y: 'revenue',
    data: [
      { region: 'North America', revenue: 18400 },
      { region: 'Europe', revenue: 14200 },
      { region: 'Asia Pacific', revenue: 22100 },
      { region: 'Latin America', revenue: 8900 },
      { region: 'Middle East', revenue: 6400 },
    ],
  },
  areaVolume: {
    name: 'Monthly Bandwidth',
    type: 'area',
    x: 'month',
    y: 'gb',
    data: [
      { month: 'Jan', gb: 120 },
      { month: 'Feb', gb: 190 },
      { month: 'Mar', gb: 310 },
      { month: 'Apr', gb: 480 },
      { month: 'May', gb: 640 },
    ],
  },
  deviceShare: {
    name: 'Device Traffic Share',
    type: 'donut',
    x: 'device',
    y: 'users',
    data: [
      { device: 'Desktop', users: 14200 },
      { device: 'Mobile Safari', users: 9800 },
      { device: 'Mobile Chrome', users: 6100 },
      { device: 'Tablet', users: 1500 },
    ],
  },
  trading: {
    name: 'Daily Asset Price Action',
    type: 'candlestick',
    x: 'date',
    data: [
      { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
      { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
      { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
      { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
      { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
    ],
  },
  conversionFunnel: {
    name: 'Conversion Funnel',
    type: 'funnel',
    x: 'stage',
    y: 'users',
    data: [
      { stage: 'Visitors', users: 125000 },
      { stage: 'Views', users: 68000 },
      { stage: 'Cart', users: 24000 },
      { stage: 'Checkout', users: 14200 },
      { stage: 'Purchased', users: 9800 },
    ],
  },
  financial: {
    name: 'Stock Price Time Series',
    type: 'line',
    x: 'date',
    y: 'price',
    data: [
      { date: '2026-02-01', price: 154.2 },
      { date: '2026-02-02', price: 158.9 },
      { date: '2026-02-03', price: 156.4 },
      { date: '2026-02-04', price: 162.8 },
      { date: '2026-02-05', price: 169.1 },
      { date: '2026-02-06', price: 174.5 },
      { date: '2026-02-07', price: 181.2 },
    ],
  },
  sensors: {
    name: 'IoT Sensor Correlation',
    type: 'scatter',
    x: 'temp',
    y: 'humidity',
    data: [
      { temp: 21.5, humidity: 45 },
      { temp: 24.2, humidity: 52 },
      { temp: 28.1, humidity: 64 },
      { temp: 31.4, humidity: 75 },
      { temp: 35.0, humidity: 88 },
    ],
  },
  distribution: {
    name: 'Customer Age Distribution',
    type: 'histogram',
    x: 'age',
    data: [
      { age: 18 }, { age: 21 }, { age: 24 }, { age: 25 }, { age: 27 },
      { age: 31 }, { age: 33 }, { age: 36 }, { age: 41 }, { age: 48 },
    ],
  },
  kpi: {
    name: 'Executive ARR Metric',
    type: 'kpi-sparkline',
    x: 'qtr',
    y: 'arr',
    data: [
      { qtr: 'Q1', arr: 1.2 },
      { qtr: 'Q2', arr: 1.5 },
      { qtr: 'Q3', arr: 1.9 },
      { qtr: 'Q4', arr: 2.4 },
    ],
  },
};

const PRESET_LABELS: Record<string, string> = {
  sales: 'Bar',
  areaVolume: 'Area',
  deviceShare: 'Donut',
  trading: 'Candlestick',
  conversionFunnel: 'Funnel',
  financial: 'Line',
  sensors: 'Scatter',
  distribution: 'Histogram',
  kpi: 'KPI',
};

export default function StudioPlaygroundPage() {
  const [presetKey, setPresetKey] = useState<string>('sales');
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [mode, setMode] = useState<'auto' | 'explicit'>('auto');
  const [editorMode, setEditorMode] = useState<'table' | 'json'>('table');
  const [inspectorTab, setInspectorTab] = useState<'jsx' | 'spec' | 'scenegraph' | 'table'>('jsx');
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [dataset, setDataset] = useState<Record<string, unknown>[]>(PLAYGROUND_PRESETS.sales.data);
  const [customJson, setCustomJson] = useState<string>('');
  const [jsonError, setJsonError] = useState<string | null>(null);

  const currentPreset = PLAYGROUND_PRESETS[presetKey] || PLAYGROUND_PRESETS.sales;

  const handleSelectPreset = (key: string) => {
    setPresetKey(key);
    setChartType(PLAYGROUND_PRESETS[key].type);
    setDataset(PLAYGROUND_PRESETS[key].data);
    setCustomJson('');
    setJsonError(null);
    setIsStreaming(false);
  };

  const handleJsonTextChange = (text: string) => {
    setCustomJson(text);
    if (!text.trim()) {
      setJsonError(null);
      setDataset(currentPreset.data);
      return;
    }
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setJsonError(null);
        setDataset(parsed);
      } else {
        setJsonError('Must be a JSON array of objects');
      }
    } catch {
      setJsonError('Invalid JSON');
    }
  };

  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setDataset((prev) => {
        const nextValue = Math.floor(Math.random() * 50) + 20;
        const nextTime = `T+${prev.length + 1}s`;
        return [...prev.slice(-9), { time: nextTime, value: nextValue }];
      });
    }, 1200);
    return () => clearInterval(interval);
  }, [isStreaming]);

  const resolvedSpec = useMemo(() => {
    if (mode === 'auto') {
      try {
        const spec = recommendChartSpec(dataset);
        spec.title = currentPreset.name;
        return spec;
      } catch { /* fallback */ }
    }
    return {
      version: '0.1.0' as const,
      type: chartType,
      title: currentPreset.name,
      data: dataset,
      encoding: {
        x: currentPreset.x ? { field: currentPreset.x } : undefined,
        y: currentPreset.y ? { field: currentPreset.y } : undefined,
      },
    };
  }, [mode, chartType, dataset, currentPreset]);

  const sceneGraph = useMemo(() => {
    try { return buildSceneGraph(resolvedSpec); } catch { return null; }
  }, [resolvedSpec]);

  const reactCodeSnippet = mode === 'auto'
    ? `<AutoChart data={data} title="${currentPreset.name}" />`
    : `<Chart\n  type="${chartType}"\n  data={data}\n  ${currentPreset.x ? `x="${currentPreset.x}"` : ''}\n  ${currentPreset.y ? `y="${currentPreset.y}"` : ''}\n  title="${currentPreset.name}"\n/>`;

  const handleExportSvg = () => {
    const svgEl = document.querySelector('#playground-svg-container svg');
    if (!svgEl) return;
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${chartType}-chart.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#18241b]/10 pb-6">
          <div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
              Studio Playground
            </span>
            <h1 className="font-headline-lg text-2xl sm:text-3xl text-[#18241b] font-bold mt-1">
              Interactive Chart Builder
            </h1>
            <p className="font-body-doc text-[#60685c] text-sm mt-1">
              Edit data, switch chart types, and inspect the generated spec in real time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto / Explicit mode toggle */}
            <div className="flex items-center gap-1 bg-white border border-[#18241b]/10 p-1 rounded-xl shadow-sm">
              <button
                onClick={() => setMode('auto')}
                className={`px-3.5 py-1.5 font-sans text-xs font-semibold rounded-lg transition-all duration-150 ${
                  mode === 'auto' ? 'bg-[#18241b] text-white shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                AutoChart
              </button>
              <button
                onClick={() => setMode('explicit')}
                className={`px-3.5 py-1.5 font-sans text-xs font-semibold rounded-lg transition-all duration-150 ${
                  mode === 'explicit' ? 'bg-[#18241b] text-white shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                Explicit
              </button>
            </div>

            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className={`px-4 py-2 font-sans text-xs font-semibold rounded-xl transition-all shadow-sm border ${
                isStreaming
                  ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                  : 'bg-white text-[#18241b] border-[#18241b]/15 hover:border-[#18241b]/30'
              }`}
            >
              {isStreaming ? '⏹ Stop' : '⚡ Stream Live'}
            </button>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="flex overflow-x-auto gap-1.5 scrollbar-thin">
          {Object.keys(PLAYGROUND_PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => handleSelectPreset(key)}
              className={`px-4 py-2 font-sans text-xs font-semibold rounded-lg transition-all whitespace-nowrap border ${
                presetKey === key
                  ? 'bg-[#18241b] text-white border-[#18241b]'
                  : 'bg-white text-[#60685c] hover:text-[#18241b] border-[#18241b]/10 hover:border-[#18241b]/25'
              }`}
            >
              {PRESET_LABELS[key]}
            </button>
          ))}
        </div>

        {/* Main Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Left: Data Editor */}
          <div className="lg:col-span-5 bg-white border border-[#18241b]/10 rounded-2xl overflow-hidden shadow-sm">
            {/* Editor toolbar */}
            <div className="flex items-center justify-between border-b border-[#18241b]/8 px-4 py-3 bg-[#f9fbf8]">
              <div className="flex items-center gap-1 bg-[#f4f7f3] border border-[#18241b]/10 p-0.5 rounded-lg">
                <button
                  onClick={() => setEditorMode('table')}
                  className={`px-3 py-1 font-sans text-xs font-semibold rounded-md transition-all ${
                    editorMode === 'table' ? 'bg-white text-[#18241b] shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  Spreadsheet
                </button>
                <button
                  onClick={() => setEditorMode('json')}
                  className={`px-3 py-1 font-sans text-xs font-semibold rounded-md transition-all ${
                    editorMode === 'json' ? 'bg-white text-[#18241b] shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  JSON
                </button>
              </div>
              {jsonError && <span className="text-red-500 font-mono text-xs">{jsonError}</span>}
            </div>

            <div className="p-4 space-y-3">
              {editorMode === 'table' ? (
                <VisualDataEditor data={dataset} onChange={(updated) => setDataset(updated)} />
              ) : (
                <textarea
                  value={customJson || JSON.stringify(dataset, null, 2)}
                  onChange={(e) => handleJsonTextChange(e.target.value)}
                  rows={14}
                  className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-4 rounded-xl border border-[#18241b]/20 focus:outline-none focus:ring-2 focus:ring-[#c2872e]/20 resize-none"
                  placeholder="Paste JSON array..."
                />
              )}
              <button
                onClick={() => handleSelectPreset(presetKey)}
                className="w-full py-2 text-[#60685c] hover:text-[#18241b] font-sans text-xs font-semibold rounded-lg border border-[#18241b]/10 hover:border-[#18241b]/25 bg-[#f9fbf8] hover:bg-[#f4f7f3] transition-all"
              >
                Reset to preset data
              </button>
            </div>
          </div>

          {/* Right: Chart Canvas */}
          <div className="lg:col-span-7 bg-white border border-[#18241b]/10 rounded-2xl overflow-hidden shadow-sm">
            {/* Canvas toolbar */}
            <div className="flex items-center justify-between border-b border-[#18241b]/8 px-4 py-3 bg-[#f9fbf8]">
              <div>
                <p className="font-sans text-xs text-[#c2872e] font-semibold uppercase tracking-wider">Live Preview</p>
                <h3 className="font-sans text-sm font-bold text-[#18241b] mt-0.5">{currentPreset.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                {mode === 'explicit' && (
                  <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value as ChartType)}
                    className="bg-[#f4f7f3] border border-[#18241b]/15 rounded-lg px-3 py-1.5 font-sans text-xs text-[#18241b] outline-none cursor-pointer"
                  >
                    <option value="line">Line</option>
                    <option value="bar">Bar</option>
                    <option value="area">Area</option>
                    <option value="donut">Donut</option>
                    <option value="pie">Pie</option>
                    <option value="candlestick">Candlestick</option>
                    <option value="funnel">Funnel</option>
                    <option value="scatter">Scatter</option>
                    <option value="histogram">Histogram</option>
                    <option value="kpi-sparkline">KPI</option>
                  </select>
                )}
                <button
                  onClick={handleExportSvg}
                  className="carto-btn-primary text-[10px] py-1.5 px-3"
                >
                  Export SVG
                </button>
              </div>
            </div>

            <div
              id="playground-svg-container"
              className="bg-[#f9fbf8] h-80 w-full flex items-center justify-center"
            >
              {mode === 'auto' ? (
                <AutoChart data={dataset} title={currentPreset.name} />
              ) : (
                <Chart
                  type={chartType}
                  data={dataset}
                  x={currentPreset.x}
                  y={currentPreset.y}
                  title={currentPreset.name}
                />
              )}
            </div>
          </div>
        </div>

        {/* Inspector Panel */}
        <div className="bg-[#0f1611] border border-[#18241b]/30 rounded-2xl overflow-hidden">
          {/* Tab bar */}
          <div className="flex items-center border-b border-white/5 px-3 pt-3 gap-0.5 overflow-x-auto scrollbar-thin">
            {(['jsx', 'spec', 'scenegraph', 'table'] as const).map((tab) => {
              const labels = { jsx: 'React JSX', spec: 'ChartSpec JSON', scenegraph: 'Scene Graph', table: 'Data Table' };
              return (
                <button
                  key={tab}
                  onClick={() => setInspectorTab(tab)}
                  className={`px-4 py-2 font-mono text-xs font-medium rounded-t-lg transition-all whitespace-nowrap border-b-2 ${
                    inspectorTab === tab
                      ? 'bg-[#151f17] text-[#c2872e] border-[#c2872e]'
                      : 'text-[#9ba196] hover:text-white border-transparent'
                  }`}
                >
                  {labels[tab]}
                </button>
              );
            })}
          </div>

          <div className="p-4 overflow-x-auto">
            {inspectorTab === 'jsx' && (
              <CodeBlock code={reactCodeSnippet} language="typescript" title="Generated Component" />
            )}
            {inspectorTab === 'spec' && (
              <CodeBlock code={JSON.stringify(resolvedSpec, null, 2)} language="json" title="ChartSpec Contract" />
            )}
            {inspectorTab === 'scenegraph' && (
              <CodeBlock code={JSON.stringify(sceneGraph, null, 2)} language="json" title="Scene Graph Tree" />
            )}
            {inspectorTab === 'table' && (
              <div className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#151f17] text-[#c2872e] border-b border-white/5">
                      {dataset.length > 0 && Object.keys(dataset[0]).map((k) => (
                        <th key={k} className="px-4 py-2.5 font-bold uppercase border-r border-white/5 last:border-r-0">{k}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataset.map((row, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-[#1a251d]/60 transition-colors">
                        {Object.values(row).map((v, j) => (
                          <td key={j} className="px-4 py-2.5 text-[#a4c995] border-r border-white/5 last:border-r-0">{String(v)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
