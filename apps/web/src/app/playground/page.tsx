'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from '../../components/Navbar';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec } from '@vizora/intelligence';
import { ChartType, buildSceneGraph } from '@vizora/core';
import { CodeBlock } from '../../components/CodeBlock';
import { VisualDataEditor } from '../../components/VisualDataEditor';
import { PalettePicker, PALETTES, ThemePalette } from '../../components/PalettePicker';

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

export default function StudioPlaygroundPage() {
  const [presetKey, setPresetKey] = useState<string>('sales');
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [mode, setMode] = useState<'auto' | 'explicit'>('auto');
  const [editorMode, setEditorMode] = useState<'table' | 'json'>('table');
  const [inspectorTab, setInspectorTab] = useState<'jsx' | 'spec' | 'scenegraph' | 'table'>('jsx');
  const [selectedPalette, setSelectedPalette] = useState<ThemePalette>(PALETTES[0]);

  // Live streaming simulation state
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [dataset, setDataset] = useState<Record<string, unknown>[]>(PLAYGROUND_PRESETS.sales.data);
  const [customJson, setCustomJson] = useState<string>('');
  const [jsonError, setJsonError] = useState<string | null>(null);

  const currentPreset = PLAYGROUND_PRESETS[presetKey] || PLAYGROUND_PRESETS.sales;

  // Sync dataset on preset change
  const handleSelectPreset = (key: string) => {
    setPresetKey(key);
    setChartType(PLAYGROUND_PRESETS[key].type);
    setDataset(PLAYGROUND_PRESETS[key].data);
    setCustomJson('');
    setJsonError(null);
    setIsStreaming(false);
  };

  // Handle JSON text change
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
        setJsonError('Must be an array of objects');
      }
    } catch {
      setJsonError('Invalid JSON format');
    }
  };

  // Real-time streaming effect
  useEffect(() => {
    if (!isStreaming) return;

    const interval = setInterval(() => {
      setDataset((prev) => {
        const _lastRow = prev[prev.length - 1] || { time: '00:00', value: 10 };
        const nextValue = Math.floor(Math.random() * 50) + 20;
        const nextTime = `T+${prev.length + 1}s`;
        const updated = [...prev.slice(-9), { time: nextTime, value: nextValue }];
        return updated;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isStreaming]);

  // Resolved Spec
  const resolvedSpec = useMemo(() => {
    if (mode === 'auto') {
      try {
        const spec = recommendChartSpec(dataset);
        spec.title = currentPreset.name;
        return spec;
      } catch {
        // fallback
      }
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

  // Scene graph resolution
  const sceneGraph = useMemo(() => {
    try {
      return buildSceneGraph(resolvedSpec);
    } catch {
      return null;
    }
  }, [resolvedSpec]);

  const reactCodeSnippet = mode === 'auto'
    ? `<AutoChart data={data} title="${currentPreset.name}" />`
    : `<Chart
  type="${chartType}"
  data={data}
  ${currentPreset.x ? `x="${currentPreset.x}"` : ''}
  ${currentPreset.y ? `y="${currentPreset.y}"` : ''}
  color="${selectedPalette.primary}"
  title="${currentPreset.name}"
/>`;

  // SVG Export function
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

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
        {/* Studio Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#18241b]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
                STUDIO PLAYGROUND
              </span>
              {isStreaming && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-sans font-bold rounded-full animate-pulse shadow-sm">
                  🔴 LIVE STREAMING
                </span>
              )}
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl text-[#18241b] font-bold">
              Interactive Chart Customizer
            </h1>
          </div>

          {/* Mode Switcher & Stream Button */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className={`px-3.5 py-2 font-sans text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 border ${
                isStreaming
                  ? 'bg-red-600 text-white border-red-700'
                  : 'bg-[#0f1611] text-[#c2872e] border-slate-800 hover:bg-[#1a251d]'
              }`}
            >
              {isStreaming ? 'STOP STREAMING' : '⚡ STREAM LIVE DATA'}
            </button>

            <div className="flex items-center gap-1 bg-[#18241b]/8 p-1 rounded-full border border-[#18241b]/10">
              <button
                onClick={() => setMode('auto')}
                className={`px-3.5 py-1.5 font-sans text-xs font-bold rounded-full transition-all duration-200 ${
                  mode === 'auto'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                &lt;AutoChart /&gt;
              </button>
              <button
                onClick={() => setMode('explicit')}
                className={`px-3.5 py-1.5 font-sans text-xs font-bold rounded-full transition-all duration-200 ${
                  mode === 'explicit'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                &lt;Chart /&gt;
              </button>
            </div>
          </div>
        </div>

        {/* Preset Selector Bar */}
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin">
          {Object.keys(PLAYGROUND_PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => handleSelectPreset(key)}
              className={`px-3.5 py-1.5 font-sans text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap active:scale-95 border ${
                presetKey === key
                  ? 'bg-[#18241b] text-white border-[#18241b] shadow-md font-bold'
                  : 'bg-white text-[#60685c] hover:text-[#18241b] hover:bg-[#18241b]/5 border-[#18241b]/15 shadow-sm'
              }`}
            >
              Preset: {PLAYGROUND_PRESETS[key].name}
            </button>
          ))}
        </div>

        {/* Color Palette Switcher */}
        <PalettePicker selectedId={selectedPalette.id} onSelect={(p) => setSelectedPalette(p)} />

        {/* Studio Grid (Left: Visual Spreadsheet/JSON Data Editor, Right: SVG Live Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Data Editor */}
          <div className="lg:col-span-5 bg-white/80 border border-[#18241b]/15 rounded-3xl p-5 space-y-4 shadow-xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-3">
              <div className="flex items-center gap-1.5 font-mono text-xs bg-[#18241b]/8 p-1 rounded-full border border-[#18241b]/10">
                <button
                  onClick={() => setEditorMode('table')}
                  className={`px-3 py-1 font-bold rounded-full transition-all duration-200 ${
                    editorMode === 'table' ? 'bg-[#18241b] text-white shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  Spreadsheet Grid
                </button>
                <button
                  onClick={() => setEditorMode('json')}
                  className={`px-3 py-1 font-bold rounded-full transition-all duration-200 ${
                    editorMode === 'json' ? 'bg-[#18241b] text-white shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  Raw JSON
                </button>
              </div>

              {jsonError && <span className="text-[#d6502b] font-mono text-xs font-bold">{jsonError}</span>}
            </div>

            {editorMode === 'table' ? (
              <VisualDataEditor data={dataset} onChange={(updated) => setDataset(updated)} />
            ) : (
              <textarea
                value={customJson || JSON.stringify(dataset, null, 2)}
                onChange={(e) => handleJsonTextChange(e.target.value)}
                rows={14}
                className="w-full bg-[#0f1611] text-[#a4c995] font-mono text-xs p-3.5 rounded-2xl border border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#c2872e]/30 resize-y transition-all"
                placeholder="Paste custom JSON array here..."
              />
            )}

            <button
              onClick={() => handleSelectPreset(presetKey)}
              className="w-full py-2.5 bg-[#18241b]/5 hover:bg-[#18241b] hover:text-white text-[#18241b] font-mono text-xs font-bold uppercase rounded-xl border border-[#18241b]/15 transition-all shadow-sm active:scale-95"
            >
              RESET TO PRESET DATA
            </button>
          </div>

          {/* Right Live SVG Canvas */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#18241b]/15 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-3">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] font-bold uppercase text-[#c2872e]">
                  LIVE WORKBENCH PREVIEW
                </span>
                <h3 className="font-headline-md text-xl font-bold text-[#18241b]">
                  {currentPreset.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {mode === 'explicit' && (
                  <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value as ChartType)}
                    className="bg-[#f4f7f3] border border-[#18241b]/20 rounded-xl px-3 py-1.5 font-mono text-xs font-bold text-[#18241b] outline-none cursor-pointer shadow-sm"
                  >
                    <option value="line">line</option>
                    <option value="bar">bar</option>
                    <option value="scatter">scatter</option>
                    <option value="histogram">histogram</option>
                    <option value="kpi-sparkline">kpi-sparkline</option>
                  </select>
                )}

                <button
                  onClick={handleExportSvg}
                  className="px-4 py-2 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold uppercase rounded-xl shadow-md hover:-translate-y-0.5 active:scale-95 transition-all"
                >
                  DOWNLOAD SVG
                </button>
              </div>
            </div>

            <div id="playground-svg-container" className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-6 min-h-[320px] flex items-center justify-center shadow-inner">
              {mode === 'auto' ? (
                <AutoChart data={dataset} title={currentPreset.name} />
              ) : (
                <Chart
                  type={chartType}
                  data={dataset}
                  x={currentPreset.x}
                  y={currentPreset.y}
                  color={selectedPalette.primary}
                  title={currentPreset.name}
                />
              )}
            </div>
          </div>
        </div>

        {/* Multi-Tab Inspector Section */}
        <div className="bg-[#0f1611] border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="flex items-center bg-[#151f17] border-b border-slate-800/80 px-4 pt-3 pb-2 gap-1.5 overflow-x-auto scrollbar-thin">
            <button
              onClick={() => setInspectorTab('jsx')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                inspectorTab === 'jsx'
                  ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                  : 'text-[#9ba196] hover:text-white'
              }`}
            >
              React JSX Code
            </button>
            <button
              onClick={() => setInspectorTab('spec')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                inspectorTab === 'spec'
                  ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                  : 'text-[#9ba196] hover:text-white'
              }`}
            >
              ChartSpec JSON
            </button>
            <button
              onClick={() => setInspectorTab('scenegraph')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                inspectorTab === 'scenegraph'
                  ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                  : 'text-[#9ba196] hover:text-white'
              }`}
            >
              Scene Graph Tree
            </button>
            <button
              onClick={() => setInspectorTab('table')}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                inspectorTab === 'table'
                  ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                  : 'text-[#9ba196] hover:text-white'
              }`}
            >
              Accessible Data Table
            </button>
          </div>

          <div className="p-4 overflow-x-auto">
            {inspectorTab === 'jsx' && (
              <CodeBlock code={reactCodeSnippet} language="typescript" title="Generated Component Code" />
            )}

            {inspectorTab === 'spec' && (
              <CodeBlock code={JSON.stringify(resolvedSpec, null, 2)} language="json" title="Resolved ChartSpec Contract" />
            )}

            {inspectorTab === 'scenegraph' && (
              <CodeBlock code={JSON.stringify(sceneGraph, null, 2)} language="json" title="Headless SceneGraph Structure" />
            )}

            {inspectorTab === 'table' && (
              <div className="space-y-3 font-mono text-xs text-[#e0e4dc]">
                <div className="text-[#c2872e] font-bold uppercase">Screen Reader Fallback Table</div>
                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#151f17] text-[#c2872e] border-b border-slate-800">
                        {dataset.length > 0 && Object.keys(dataset[0]).map((k) => (
                          <th key={k} className="p-2.5 border-r border-slate-800 uppercase font-bold text-[11px]">{k}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataset.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#1a251d]/60 border-b border-slate-800/50 transition-colors">
                          {Object.values(row).map((v, j) => (
                            <td key={j} className="p-2.5 border-r border-slate-800/50 text-[#a4c995]">{String(v)}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
