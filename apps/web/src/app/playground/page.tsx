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
        const lastRow = prev[prev.length - 1] || { time: '00:00', value: 10 };
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
    <div className="min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
        {/* Studio Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2a22]/20 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c2872e]">
                STUDIO PLAYGROUND
              </span>
              {isStreaming && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-600 text-white text-[10px] font-mono font-bold animate-pulse">
                  🔴 LIVE STREAMING
                </span>
              )}
            </div>
            <h1 className="font-headline-lg text-2xl sm:text-3xl text-[#1e2a22] font-bold">
              Interactive Chart Customizer
            </h1>
          </div>

          {/* Mode Switcher & Stream Button */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsStreaming(!isStreaming)}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-all border ${
                isStreaming
                  ? 'bg-red-600 text-white border-red-700'
                  : 'bg-[#1b251e] text-[#c2872e] border-[#2d3a30] hover:bg-[#2d3a30]'
              }`}
            >
              {isStreaming ? 'STOP STREAMING' : '⚡ STREAM LIVE DATA'}
            </button>

            <div className="flex items-center gap-2 bg-[#f7faf5] p-1 border border-[#1e2a22]">
              <button
                onClick={() => setMode('auto')}
                className={`px-3 py-1 font-mono text-xs font-bold transition-all ${
                  mode === 'auto'
                    ? 'bg-[#1e2a22] text-[#ecefea]'
                    : 'text-[#6e756a] hover:text-[#1e2a22]'
                }`}
              >
                &lt;AutoChart /&gt;
              </button>
              <button
                onClick={() => setMode('explicit')}
                className={`px-3 py-1 font-mono text-xs font-bold transition-all ${
                  mode === 'explicit'
                    ? 'bg-[#1e2a22] text-[#ecefea]'
                    : 'text-[#6e756a] hover:text-[#1e2a22]'
                }`}
              >
                &lt;Chart /&gt;
              </button>
            </div>
          </div>
        </div>

        {/* Preset Selector Bar */}
        <div className="flex overflow-x-auto gap-2 border-b border-[#1e2a22]/20 pb-2 scrollbar-thin">
          {Object.keys(PLAYGROUND_PRESETS).map((key) => (
            <button
              key={key}
              onClick={() => handleSelectPreset(key)}
              className={`px-3 py-1.5 font-mono text-xs font-bold transition-all border whitespace-nowrap ${
                presetKey === key
                  ? 'bg-[#1e2a22] text-[#ecefea] border-[#1e2a22]'
                  : 'bg-[#f7faf5] text-[#6e756a] hover:text-[#1e2a22] border-[#1e2a22]/20'
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
          <div className="lg:col-span-5 bg-[#f7faf5] border border-[#1e2a22] p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setEditorMode('table')}
                  className={`px-2.5 py-1 font-bold transition-colors ${
                    editorMode === 'table' ? 'bg-[#1e2a22] text-[#ecefea]' : 'text-[#6e756a]'
                  }`}
                >
                  Spreadsheet Grid
                </button>
                <button
                  onClick={() => setEditorMode('json')}
                  className={`px-2.5 py-1 font-bold transition-colors ${
                    editorMode === 'json' ? 'bg-[#1e2a22] text-[#ecefea]' : 'text-[#6e756a]'
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
                className="w-full bg-[#18221b] text-[#a4c995] font-mono text-xs p-3 border border-[#1e2a22] focus:outline-none focus:border-[#c2872e] resize-y"
                placeholder="Paste custom JSON array here..."
              />
            )}

            <button
              onClick={() => handleSelectPreset(presetKey)}
              className="w-full py-2 bg-[#ecefea] hover:bg-[#1e2a22] hover:text-[#ecefea] font-mono text-xs font-bold uppercase border border-[#1e2a22] transition-colors"
            >
              RESET TO PRESET DATA
            </button>
          </div>

          {/* Right Live SVG Canvas */}
          <div className="lg:col-span-7 bg-white border border-[#1e2a22] p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-3">
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] font-bold uppercase text-[#c2872e]">
                  LIVE WORKBENCH PREVIEW
                </span>
                <h3 className="font-headline-md text-xl font-bold text-[#1e2a22]">
                  {currentPreset.name}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {mode === 'explicit' && (
                  <select
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value as ChartType)}
                    className="bg-[#ecefea] border border-[#1e2a22]/30 px-2 py-1 font-mono text-xs font-bold text-[#1e2a22]"
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
                  className="px-3 py-1 bg-[#1e2a22] hover:bg-[#c2872e] text-[#ecefea] hover:text-[#1e2a22] font-mono text-xs font-bold uppercase transition-colors"
                >
                  DOWNLOAD SVG
                </button>
              </div>
            </div>

            <div id="playground-svg-container" className="bg-[#f7faf5] border border-[#1e2a22]/20 p-6 min-h-[320px] flex items-center justify-center">
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
        <div className="bg-[#111813] border border-[#1e2a22] shadow-lg">
          <div className="flex items-center bg-[#1b251e] border-b border-[#2d3a30] px-3 pt-2">
            <button
              onClick={() => setInspectorTab('jsx')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                inspectorTab === 'jsx'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              React JSX Code
            </button>
            <button
              onClick={() => setInspectorTab('spec')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                inspectorTab === 'spec'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              ChartSpec JSON
            </button>
            <button
              onClick={() => setInspectorTab('scenegraph')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                inspectorTab === 'scenegraph'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              Scene Graph Tree
            </button>
            <button
              onClick={() => setInspectorTab('table')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                inspectorTab === 'table'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
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
              <div className="space-y-3 font-mono text-xs text-[#e0e3de]">
                <div className="text-[#c2872e] font-bold uppercase">Screen Reader Fallback Table</div>
                <table className="w-full text-left border-collapse border border-[#2d3a30]">
                  <thead>
                    <tr className="bg-[#18221b] text-[#c2872e]">
                      {dataset.length > 0 && Object.keys(dataset[0]).map((k) => (
                        <th key={k} className="p-2 border border-[#2d3a30] uppercase">{k}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {dataset.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#18221b]/50 border-b border-[#2d3a30]">
                        {Object.values(row).map((v, j) => (
                          <td key={j} className="p-2 border border-[#2d3a30] text-[#a4c995]">{String(v)}</td>
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
