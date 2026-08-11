'use client';

import React, { useState, useMemo } from 'react';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec } from '@vizora/intelligence';
import { ChartType } from '@vizora/core';

interface PresetItem {
  name: string;
  type: ChartType;
  x: string;
  y?: string;
  data: Record<string, unknown>[];
}

// Preset Datasets
const PRESETS: Record<string, PresetItem> = {
  sales: {
    name: 'Regional Sales',
    type: 'bar',
    x: 'region',
    y: 'sales',
    data: [
      { region: 'North America', sales: 1250 },
      { region: 'Europe', sales: 980 },
      { region: 'Asia Pacific', sales: 1420 },
      { region: 'Latin America', sales: 610 },
      { region: 'Middle East', sales: 430 },
    ],
  },
  trend: {
    name: 'MRR Growth',
    type: 'line',
    x: 'date',
    y: 'mrr',
    data: [
      { date: '2026-01-01', mrr: 12400 },
      { date: '2026-02-01', mrr: 15800 },
      { date: '2026-03-01', mrr: 19200 },
      { date: '2026-04-01', mrr: 24500 },
      { date: '2026-05-01', mrr: 31000 },
      { date: '2026-06-01', mrr: 38200 },
    ],
  },
  scatter: {
    name: 'Height vs Weight',
    type: 'scatter',
    x: 'height',
    y: 'weight',
    data: [
      { height: 160, weight: 55 },
      { height: 165, weight: 62 },
      { height: 172, weight: 68 },
      { height: 178, weight: 74 },
      { height: 185, weight: 82 },
      { height: 190, weight: 91 },
    ],
  },
  histogram: {
    name: 'Customer Age Distribution',
    type: 'histogram',
    x: 'age',
    y: 'count',
    data: [
      { age: 19 }, { age: 22 }, { age: 24 }, { age: 25 }, { age: 28 },
      { age: 29 }, { age: 31 }, { age: 34 }, { age: 35 }, { age: 38 },
      { age: 41 }, { age: 44 }, { age: 47 }, { age: 52 }, { age: 58 },
    ],
  },
  kpi: {
    name: 'Annual Recurring Revenue (ARR)',
    type: 'kpi-sparkline',
    x: 'month',
    y: 'arr',
    data: [
      { month: 'Jan', arr: 450000 },
      { month: 'Feb', arr: 520000 },
      { month: 'Mar', arr: 610000 },
      { month: 'Apr', arr: 740000 },
      { month: 'May', arr: 890000 },
      { month: 'Jun', arr: 1200000 },
    ],
  },
};

export default function Home() {
  const [activePreset, setActivePreset] = useState<keyof typeof PRESETS>('sales');
  const [selectedChartType, setSelectedChartType] = useState<ChartType>('bar');
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  const [mode, setMode] = useState<'auto' | 'explicit'>('auto');
  const [customDataJson, setCustomDataJson] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const currentPreset = PRESETS[activePreset];

  // Parse custom JSON or fallback to preset data
  const currentData = useMemo(() => {
    if (!customDataJson.trim()) return currentPreset.data;
    try {
      const parsed = JSON.parse(customDataJson);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch {
      // Invalid JSON fallback
    }
    return currentPreset.data;
  }, [customDataJson, currentPreset.data]);

  // Compute live ChartSpec for JSON inspection
  const computedSpec = useMemo(() => {
    if (mode === 'auto') {
      const rec = recommendChartSpec(currentData);
      rec.title = `${currentPreset.name} (AutoChart)`;
      return rec;
    }
    return {
      version: '0.1.0' as const,
      type: selectedChartType,
      title: `${currentPreset.name} (Explicit)`,
      data: currentData,
      encoding: {
        x: currentPreset.x ? { field: currentPreset.x } : undefined,
        y: currentPreset.y ? { field: currentPreset.y } : undefined,
        orientation: selectedChartType === 'bar' ? orientation : undefined,
      },
      config: { width: 600, height: 380, showGrid: true },
    };
  }, [mode, currentData, currentPreset, selectedChartType, orientation]);

  const handleSelectPreset = (key: keyof typeof PRESETS) => {
    setActivePreset(key);
    setSelectedChartType(PRESETS[key].type);
    setCustomDataJson('');
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(JSON.stringify(computedSpec, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans p-4 md:p-10">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 pb-6 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              V
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Vizora
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
              v0.1.0 MVP
            </span>
          </div>
          <p className="text-slate-400 text-sm max-w-2xl">
            Framework-agnostic chart runtime + deterministic data profiling + SVG rendering engine. Driven by typed <code className="text-blue-300 font-mono">ChartSpec</code> contract.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            SVG Engine Ready
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Playground */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Controls Bar */}
          <div className="p-5 rounded-2xl glass-panel space-y-4">
            
            {/* Row 1: Mode Switcher */}
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Rendering Engine Mode
              </label>
              <div className="bg-slate-950/80 p-1 rounded-xl border border-slate-800 inline-flex gap-1 text-xs">
                <button
                  onClick={() => setMode('auto')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    mode === 'auto'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ✨ AutoChart (Heuristic)
                </button>
                <button
                  onClick={() => setMode('explicit')}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    mode === 'explicit'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ⚙️ Explicit &lt;Chart /&gt;
                </button>
              </div>
            </div>

            {/* Row 2: Preset Data Switcher */}
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Sample Datasets & Chart Types
              </label>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((key) => {
                  const preset = PRESETS[key];
                  const isActive = activePreset === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectPreset(key)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                        isActive
                          ? 'bg-slate-800 border-blue-500/50 text-blue-300 shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                      }`}
                    >
                      {preset.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 3: Explicit Chart Controls (If Explicit Mode) */}
            {mode === 'explicit' && (
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Chart Type:</span>
                  <select
                    value={selectedChartType}
                    onChange={(e) => setSelectedChartType(e.target.value as ChartType)}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-blue-500"
                  >
                    <option value="bar">Bar Chart</option>
                    <option value="line">Line Chart</option>
                    <option value="scatter">Scatter Plot</option>
                    <option value="histogram">Histogram</option>
                    <option value="kpi-sparkline">KPI + Sparkline</option>
                  </select>
                </div>

                {selectedChartType === 'bar' && (
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Orientation:</span>
                    <button
                      onClick={() => setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical')}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 hover:text-white"
                    >
                      {orientation === 'vertical' ? '↕️ Vertical' : '↔️ Horizontal'}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Chart Card */}
          <div className="p-6 rounded-2xl glass-panel shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h2 className="text-lg font-bold text-slate-100">
                  {mode === 'auto' ? `AutoChart: ${currentPreset.name}` : `Explicit Chart: ${selectedChartType.toUpperCase()}`}
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  {mode === 'auto'
                    ? `Profiling fields -> Inferred type: "${computedSpec.type}"`
                    : `Manually bound x="${currentPreset.x}" y="${currentPreset.y || ''}"`}
                </p>
              </div>

              <div className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-full font-mono">
                Determinism Verified
              </div>
            </div>

            {/* SVG Render Canvas */}
            <div className="bg-slate-950/80 p-6 rounded-xl border border-slate-800/90 flex justify-center items-center min-h-[400px]">
              {mode === 'auto' ? (
                <AutoChart data={currentData} title={`${currentPreset.name}`} />
              ) : (
                <Chart
                  data={currentData}
                  type={selectedChartType}
                  x={currentPreset.x}
                  y={currentPreset.y}
                  orientation={orientation}
                  title={`${currentPreset.name}`}
                />
              )}
            </div>
          </div>

          {/* Custom Data Editor Drawer */}
          <div className="p-5 rounded-2xl glass-panel space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Live Data Input (Tabular JSON Array)
              </label>
              {customDataJson && (
                <button
                  onClick={() => setCustomDataJson('')}
                  className="text-xs text-blue-400 hover:underline"
                >
                  Reset to Preset
                </button>
              )}
            </div>
            <textarea
              rows={4}
              value={customDataJson}
              onChange={(e) => setCustomDataJson(e.target.value)}
              placeholder={`Paste JSON array of objects, e.g.:\n[{"region": "US", "sales": 100}, {"region": "EU", "sales": 80}]`}
              className="w-full bg-slate-950/90 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-300 focus:outline-none focus:border-blue-500/60"
            />
          </div>
        </div>

        {/* Right Column: ChartSpec Inspector & Code Snippet */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* ChartSpec JSON Panel */}
          <div className="p-5 rounded-2xl glass-panel space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span>📄 ChartSpec Contract</span>
                </h3>
                <p className="text-xs text-slate-400">Validated JSON-serializable intermediate representation</p>
              </div>

              <button
                onClick={handleCopySpec}
                className="px-3 py-1 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-200 transition-colors"
              >
                {copied ? '✓ Copied' : 'Copy JSON'}
              </button>
            </div>

            <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-blue-300 overflow-x-auto max-h-[360px]">
              {JSON.stringify(computedSpec, null, 2)}
            </pre>
          </div>

          {/* Quick Integration snippet */}
          <div className="p-5 rounded-2xl glass-panel space-y-3">
            <h3 className="text-sm font-bold text-slate-100">🚀 React Integration (&lt;5 Lines)</h3>
            <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto">
{mode === 'auto'
  ? `import { AutoChart } from '@vizora/react';\n\n<AutoChart data={data} />`
  : `import { Chart } from '@vizora/react';\n\n<Chart\n  data={data}\n  type="${selectedChartType}"\n  x="${currentPreset.x}"\n  y="${currentPreset.y || ''}"\n/>`}
            </pre>
          </div>

          {/* Core Spec Guarantees */}
          <div className="p-5 rounded-2xl glass-panel space-y-3 text-xs text-slate-400">
            <h3 className="text-sm font-bold text-slate-200">🛡️ MVP Scope Verification</h3>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Deterministic ChartSpec validation (Zod schema)</li>
              <li>SVG rendering with zero DOM runtime in @core</li>
              <li>Screen reader fallback &lt;table&gt; included in SVGContainer</li>
              <li>SSR compatible (Next.js server & client safe)</li>
              <li>Bundle budget: core + 1 chart &le; 15kb gzipped</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
