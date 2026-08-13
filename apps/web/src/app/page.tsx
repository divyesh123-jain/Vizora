'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec, profileField } from '@vizora/intelligence';
import { ChartType } from '@vizora/core';
import { Navbar } from '../components/Navbar';
import { CodeBlock } from '../components/CodeBlock';

// Presets for the 5 MVP chart types
interface PresetItem {
  id: ChartType;
  title: string;
  subtitle: string;
  badge: string;
  type: ChartType;
  x?: string;
  y?: string;
  profileDescription: string;
  data: Record<string, unknown>[];
}

const PRESETS: Record<ChartType, PresetItem> = {
  line: {
    id: 'line',
    title: 'Temporal Financial Trend',
    subtitle: 'Temporal field [date] + Quantitative metric [revenue]',
    badge: 'TEMPORAL LINE',
    type: 'line',
    x: 'date',
    y: 'revenue',
    profileDescription: 'date: temporal (distinct: 7), revenue: quantitative (distinct: 7)',
    data: [
      { date: '2026-01-01', revenue: 4200 },
      { date: '2026-01-02', revenue: 4800 },
      { date: '2026-01-03', revenue: 4500 },
      { date: '2026-01-04', revenue: 5900 },
      { date: '2026-01-05', revenue: 6400 },
      { date: '2026-01-06', revenue: 7100 },
      { date: '2026-01-07', revenue: 7900 },
    ],
  },
  bar: {
    id: 'bar',
    title: 'Regional Sales Breakdown',
    subtitle: 'Categorical dimension [region] + Quantitative metric [sales]',
    badge: 'CATEGORICAL BAR',
    type: 'bar',
    x: 'region',
    y: 'sales',
    profileDescription: 'region: categorical (distinct: 5), sales: quantitative (distinct: 5)',
    data: [
      { region: 'North America', sales: 12500 },
      { region: 'Europe', sales: 9800 },
      { region: 'Asia Pacific', sales: 14200 },
      { region: 'Latin America', sales: 6100 },
      { region: 'Middle East', sales: 4300 },
    ],
  },
  scatter: {
    id: 'scatter',
    title: 'Bivariate Height vs Weight',
    subtitle: 'Two Quantitative metrics [height] vs [weight]',
    badge: 'BIVARIATE SCATTER',
    type: 'scatter',
    x: 'height',
    y: 'weight',
    profileDescription: 'height: quantitative (distinct: 6), weight: quantitative (distinct: 6)',
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
    id: 'histogram',
    title: 'Demographic Age Frequency',
    subtitle: 'Single Quantitative field [age] auto-binned into frequency distribution',
    badge: 'DISTRIBUTION HISTOGRAM',
    type: 'histogram',
    x: 'age',
    profileDescription: 'age: quantitative distribution (distinct: 15 samples)',
    data: [
      { age: 19 }, { age: 22 }, { age: 24 }, { age: 25 }, { age: 28 },
      { age: 29 }, { age: 31 }, { age: 34 }, { age: 35 }, { age: 38 },
      { age: 41 }, { age: 44 }, { age: 47 }, { age: 52 }, { age: 58 },
    ],
  },
  'kpi-sparkline': {
    id: 'kpi-sparkline',
    title: 'MRR Growth KPI & Sparkline',
    subtitle: 'Headline quantitative value + historical trend array',
    badge: 'KPI + SPARKLINE',
    type: 'kpi-sparkline',
    x: 'month',
    y: 'mrr',
    profileDescription: 'mrr: quantitative metric with trend time-series',
    data: [
      { month: 'Jan', mrr: 12000 },
      { month: 'Feb', mrr: 12800 },
      { month: 'Mar', mrr: 13500 },
      { month: 'Apr', mrr: 14200 },
      { month: 'May', mrr: 15800 },
      { month: 'Jun', mrr: 17400 },
    ],
  },
};

export default function Home() {
  // Hero dataset selection
  const [heroPresetKey, setHeroPresetKey] = useState<ChartType>('line');

  // Playground state
  const [activeChartType, setActiveChartType] = useState<ChartType>('line');
  const [mode, setMode] = useState<'auto' | 'explicit'>('auto');
  const [codeTab, setCodeTab] = useState<'react' | 'spec' | 'profile' | 'json'>('react');
  const [customDataStr, setCustomDataStr] = useState<string>('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [copiedHeroInstall, setCopiedHeroInstall] = useState<boolean>(false);

  const currentPreset = PRESETS[activeChartType];

  // Live parsed playground data
  const parsedData = useMemo(() => {
    if (!customDataStr.trim()) {
      setJsonError(null);
      return currentPreset.data;
    }
    try {
      const parsed = JSON.parse(customDataStr);
      if (Array.isArray(parsed) && parsed.length > 0) {
        setJsonError(null);
        return parsed;
      } else {
        setJsonError('Data must be a non-empty array of objects');
        return currentPreset.data;
      }
    } catch {
      setJsonError('Invalid JSON format');
      return currentPreset.data;
    }
  }, [customDataStr, currentPreset.data]);

  // Recommended ChartSpec computed via intelligence module
  const autoSpec = useMemo(() => {
    try {
      const spec = recommendChartSpec(parsedData);
      spec.title = currentPreset.title;
      return spec;
    } catch {
      return {
        version: '0.1.0' as const,
        type: activeChartType,
        title: currentPreset.title,
        data: parsedData,
        encoding: {
          x: currentPreset.x ? { field: currentPreset.x } : undefined,
          y: currentPreset.y ? { field: currentPreset.y } : undefined,
        },
      };
    }
  }, [parsedData, currentPreset, activeChartType]);

  // Explicit spec definition
  const explicitSpec = useMemo(() => {
    return {
      version: '0.1.0' as const,
      type: activeChartType,
      title: currentPreset.title,
      data: parsedData,
      encoding: {
        x: currentPreset.x ? { field: currentPreset.x } : undefined,
        y: currentPreset.y ? { field: currentPreset.y } : undefined,
      },
      config: {
        showGrid,
      },
    };
  }, [activeChartType, currentPreset, parsedData, showGrid]);

  const currentSpec = mode === 'auto' ? autoSpec : explicitSpec;

  // Field profiling metadata
  const profiles = useMemo(() => {
    if (!parsedData || parsedData.length === 0) return [];
    const fields = Object.keys(parsedData[0]);
    return fields.map((f) => profileField(parsedData, f));
  }, [parsedData]);

  // Code snippet string generation
  const generatedReactCode = useMemo(() => {
    if (mode === 'auto') {
      return `import { AutoChart } from '@vizora/react';

const data = ${JSON.stringify(parsedData.slice(0, 3), null, 2).replace(/\n/g, '\n')}
// ... (${parsedData.length} records total)

export function MyChartComponent() {
  return (
    <AutoChart
      data={data}
      title="${currentPreset.title}"
    />
  );
}`;
    }

    return `import { Chart } from '@vizora/react';

const data = ${JSON.stringify(parsedData.slice(0, 3), null, 2)}

export function MyExplicitChart() {
  return (
    <Chart
      type="${activeChartType}"
      data={data}
      x="${currentPreset.x || 'x'}"
      ${currentPreset.y ? `y="${currentPreset.y}"` : ''}
      title="${currentPreset.title}"
    />
  );
}`;
  }, [mode, parsedData, currentPreset, activeChartType]);

  const handleSelectPreset = (chartType: ChartType) => {
    setActiveChartType(chartType);
    setCustomDataStr('');
    setJsonError(null);
  };

  const handleCopyHeroInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedHeroInstall(true);
    setTimeout(() => setCopiedHeroInstall(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased selection:bg-[#c2872e] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden border-b border-[#1e2a22]/20 bg-gradient-to-b from-[#f7faf5] to-[#ecefea] py-16 sm:py-20">
        <div className="carto-grid-bg absolute inset-0 opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e2a22] text-[#ecefea] border border-[#1e2a22] text-[11px] font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-[#c2872e] animate-pulse" />
                <span>VIZORA 0.1.0 MVP • ZERO-CONFIG CHART ENGINE</span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-[#1e2a22] leading-[1.12] tracking-tight font-bold">
                Charts made simple.<br />
                <span className="text-[#c2872e]">Give it data, Vizora profiles the rest.</span>
              </h1>

              <p className="font-body-doc text-[#434844] text-base sm:text-lg max-w-2xl leading-relaxed">
                The framework-agnostic visualization engine designed for developer productivity. Vizora inspects field data types, infers optimal encodings, and renders clean SVG — backed by a typed, JSON-serializable <code className="px-1.5 py-0.5 bg-[#d8dbd6] text-[#1e2a22] font-mono text-sm">ChartSpec</code>.
              </p>

              {/* Install Command & Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleCopyHeroInstall}
                  className="flex items-center gap-3 px-4 py-3 bg-[#111813] text-[#e0e3de] hover:text-white border border-[#1e2a22] font-mono text-xs shadow-md transition-all group"
                >
                  <span className="text-[#c2872e] font-bold">$</span>
                  <span>npm install @vizora/react @vizora/core</span>
                  <span className="ml-2 px-2 py-0.5 bg-[#1b251e] text-[#909c8d] text-[10px] uppercase tracking-wider group-hover:bg-[#2d3a30] transition-colors">
                    {copiedHeroInstall ? 'COPIED!' : 'COPY'}
                  </span>
                </button>

                <Link
                  href="/playground"
                  className="px-6 py-3 bg-[#c2872e] hover:bg-[#d99a38] text-[#1e2a22] font-mono text-xs font-bold uppercase tracking-wider border border-[#1e2a22] transition-colors flex items-center gap-2"
                >
                  <span>STUDIO PLAYGROUND</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/templates"
                  className="px-6 py-3 bg-[#1e2a22] hover:bg-[#c2872e] text-[#ecefea] hover:text-[#1e2a22] font-mono text-xs font-bold uppercase tracking-wider border border-[#1e2a22] transition-colors flex items-center gap-2"
                >
                  <span>DASHBOARD BLOCKS</span>
                </Link>

                <Link
                  href="/docs/getting-started"
                  className="px-6 py-3 bg-[#ecefea] hover:bg-[#1e2a22] text-[#1e2a22] hover:text-[#ecefea] font-mono text-xs font-bold uppercase tracking-wider border border-[#1e2a22] transition-colors flex items-center gap-2"
                >
                  <span>READ DOCS</span>
                </Link>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[#6e756a] border-t border-[#1e2a22]/15">
                <div className="flex items-center gap-2">
                  <span className="text-[#c2872e] font-bold">✓</span> Zero JSX Boilerplate
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#c2872e] font-bold">✓</span> Pure TypeScript Core
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#c2872e] font-bold">✓</span> &lt; 15kb Gzipped
                </div>
              </div>
            </div>

            {/* Right Hero Live Interactive Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#f7faf5] border border-[#1e2a22] shadow-xl p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#d6502b]" />
                    <span className="font-mono text-xs font-bold uppercase text-[#1e2a22]">
                      LIVE INFERENCE PREVIEW
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#c2872e] bg-[#ecefea] px-2 py-0.5 border border-[#1e2a22]/20 font-semibold">
                    &lt;AutoChart /&gt;
                  </span>
                </div>

                {/* Preset Switcher Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {(['line', 'bar', 'scatter', 'histogram'] as ChartType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setHeroPresetKey(type)}
                      className={`px-2.5 py-1 text-[11px] font-mono transition-colors uppercase ${
                        heroPresetKey === type
                          ? 'bg-[#1e2a22] text-[#ecefea] font-bold'
                          : 'bg-[#ecefea] text-[#6e756a] hover:text-[#1e2a22] border border-[#1e2a22]/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Live Chart Container */}
                <div className="bg-white border border-[#1e2a22]/20 p-4 min-h-[260px] flex items-center justify-center">
                  <AutoChart data={PRESETS[heroPresetKey].data} title={PRESETS[heroPresetKey].title} />
                </div>

                {/* Profile Output Strip */}
                <div className="p-2.5 bg-[#ecefea] border border-[#1e2a22]/20 font-mono text-[11px] text-[#434844] flex items-center justify-between">
                  <span>Profiles: {PRESETS[heroPresetKey].profileDescription}</span>
                  <span className="text-[#c2872e] font-bold uppercase">AUTO-MAPPED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Why Vizora?" Key Pillars */}
      <section id="features" className="py-16 sm:py-24 border-b border-[#1e2a22]/20 bg-[#ecefea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              SIMPLIFIED ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22]">
              Why developers choose Vizora over raw charting libraries
            </h2>
            <p className="font-body-doc text-[#434844] text-base">
              Traditional chart libraries require dozens of lines of SVG markup, manual scale calculations, and repetitive formatting. Vizora abstracts the complexity behind a single typed contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-3 hover:border-[#c2872e] transition-colors group">
              <div className="w-10 h-10 bg-[#1e2a22] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-[#1e2a22] transition-colors">
                01
              </div>
              <h3 className="font-headline-md text-lg text-[#1e2a22] font-bold">
                Zero-Config AutoChart
              </h3>
              <p className="font-body-ui text-sm text-[#434844] leading-relaxed">
                Pass raw arrays of objects directly to <code className="font-mono text-xs bg-[#ecefea] px-1">&lt;AutoChart /&gt;</code>. Vizora automatically inspects field types and selects optimal chart encodings.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-3 hover:border-[#c2872e] transition-colors group">
              <div className="w-10 h-10 bg-[#1e2a22] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-[#1e2a22] transition-colors">
                02
              </div>
              <h3 className="font-headline-md text-lg text-[#1e2a22] font-bold">
                Typed ChartSpec Contract
              </h3>
              <p className="font-body-ui text-sm text-[#434844] leading-relaxed">
                Separates chart definition from rendering. Every spec is 100% JSON-serializable, Zod-validated, and easy to save, share, or store in database schemas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-3 hover:border-[#c2872e] transition-colors group">
              <div className="w-10 h-10 bg-[#1e2a22] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-[#1e2a22] transition-colors">
                03
              </div>
              <h3 className="font-headline-md text-lg text-[#1e2a22] font-bold">
                Framework-Agnostic Core
              </h3>
              <p className="font-body-ui text-sm text-[#434844] leading-relaxed">
                <code className="font-mono text-xs bg-[#ecefea] px-1">@vizora/core</code> has zero React runtime dependencies. Generates pure scene-graph structures suitable for SSR or headless rendering.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-3 hover:border-[#c2872e] transition-colors group">
              <div className="w-10 h-10 bg-[#1e2a22] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-[#1e2a22] transition-colors">
                04
              </div>
              <h3 className="font-headline-md text-lg text-[#1e2a22] font-bold">
                Accessible & Sub-15KB
              </h3>
              <p className="font-body-ui text-sm text-[#434844] leading-relaxed">
                Includes automatic accessible data table fallbacks for screen readers and WCAG compliance. Stays under 15kb gzipped for core + SVG renderer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TanStack-Style Interactive Code & Live Preview Playground */}
      <section id="playground" className="py-16 sm:py-24 border-b border-[#1e2a22]/20 bg-[#f7faf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1e2a22]/20 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
                INTERACTIVE PLAYGROUND
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] mt-1">
                Explore Chart Types & Live Specs
              </h2>
            </div>

            {/* Mode Selector Toggle */}
            <div className="flex items-center gap-2 bg-[#ecefea] p-1 border border-[#1e2a22]">
              <button
                onClick={() => setMode('auto')}
                className={`px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                  mode === 'auto'
                    ? 'bg-[#1e2a22] text-[#ecefea]'
                    : 'text-[#6e756a] hover:text-[#1e2a22]'
                }`}
              >
                &lt;AutoChart /&gt; (Auto Inference)
              </button>
              <button
                onClick={() => setMode('explicit')}
                className={`px-3 py-1.5 font-mono text-xs font-bold transition-all ${
                  mode === 'explicit'
                    ? 'bg-[#1e2a22] text-[#ecefea]'
                    : 'text-[#6e756a] hover:text-[#1e2a22]'
                }`}
              >
                &lt;Chart /&gt; (Explicit Props)
              </button>
            </div>
          </div>

          {/* Chart Type Selector Tabs */}
          <div className="flex overflow-x-auto gap-2 border-b border-[#1e2a22] pb-px scrollbar-thin">
            {(Object.keys(PRESETS) as ChartType[]).map((key) => {
              const preset = PRESETS[key];
              const isActive = activeChartType === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectPreset(key)}
                  className={`px-4 py-2.5 font-mono text-xs font-bold uppercase whitespace-nowrap transition-all border-t border-x border-[#1e2a22] ${
                    isActive
                      ? 'bg-[#ecefea] text-[#1e2a22] border-b-2 border-b-[#c2872e]'
                      : 'bg-[#f7faf5] text-[#6e756a] hover:text-[#1e2a22] hover:bg-[#ecefea]/50'
                  }`}
                >
                  <span className="mr-1.5 text-[#c2872e] font-normal">
                    {key === 'line' ? '📈' : key === 'bar' ? '📊' : key === 'scatter' ? '🟢' : key === 'histogram' ? '📶' : '⚡'}
                  </span>
                  {key}
                </button>
              );
            })}
          </div>

          {/* Split Screen Layout (Left: Code/Data Tabs, Right: SVG Chart Canvas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Code & Spec Inspector Box */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-[#111813] border border-[#1e2a22] shadow-lg">
                {/* Code Tabs Header */}
                <div className="flex items-center justify-between bg-[#1b251e] border-b border-[#2d3a30] px-3 pt-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setCodeTab('react')}
                      className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                        codeTab === 'react'
                          ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                          : 'text-[#909c8d] hover:text-white'
                      }`}
                    >
                      React Usage
                    </button>
                    <button
                      onClick={() => setCodeTab('spec')}
                      className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                        codeTab === 'spec'
                          ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                          : 'text-[#909c8d] hover:text-white'
                      }`}
                    >
                      ChartSpec JSON
                    </button>
                    <button
                      onClick={() => setCodeTab('profile')}
                      className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                        codeTab === 'profile'
                          ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                          : 'text-[#909c8d] hover:text-white'
                      }`}
                    >
                      Inferred Profile
                    </button>
                    <button
                      onClick={() => setCodeTab('json')}
                      className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                        codeTab === 'json'
                          ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                          : 'text-[#909c8d] hover:text-white'
                      }`}
                    >
                      Edit Live Data
                    </button>
                  </div>
                </div>

                {/* Tab Content Display */}
                <div className="p-4">
                  {codeTab === 'react' && (
                    <CodeBlock
                      code={generatedReactCode}
                      language="typescript"
                      title={mode === 'auto' ? 'AutoChart.tsx' : 'ExplicitChart.tsx'}
                    />
                  )}

                  {codeTab === 'spec' && (
                    <CodeBlock
                      code={JSON.stringify(currentSpec, null, 2)}
                      language="json"
                      title="Resolved ChartSpec Contract"
                    />
                  )}

                  {codeTab === 'profile' && (
                    <div className="space-y-4 font-mono text-xs text-[#e0e3de] p-2">
                      <div className="p-3 bg-[#18221b] border border-[#2d3a30] space-y-2">
                        <div className="text-[#c2872e] font-bold uppercase">
                          FIELD DATA TYPE INFERENCE REPORT
                        </div>
                        <p className="text-[#909c8d]">
                          Evaluated {parsedData.length} records in dataset:
                        </p>
                        <div className="space-y-1.5 pt-2">
                          {profiles.map((p) => (
                            <div key={p.field} className="flex items-center justify-between border-b border-[#2d3a30]/50 pb-1">
                              <span className="font-bold text-[#c3c8c2]">{p.field}</span>
                              <span className="px-2 py-0.5 bg-[#2d3a30] text-[#a4c995] text-[11px]">
                                type: {p.type} (distinct: {p.distinctCount})
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-[#18221b] border border-[#2d3a30] space-y-1 text-[#909c8d]">
                        <span className="text-white font-bold">Selected Chart Encoding:</span>
                        <div>X Encoding: <code className="text-[#c2872e]">{currentSpec.encoding.x?.field || 'none'}</code> ({profiles.find(p => p.field === currentSpec.encoding.x?.field)?.type || 'auto'})</div>
                        <div>Y Encoding: <code className="text-[#c2872e]">{currentSpec.encoding.y?.field || 'none'}</code> ({profiles.find(p => p.field === currentSpec.encoding.y?.field)?.type || 'auto'})</div>
                      </div>
                    </div>
                  )}

                  {codeTab === 'json' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#909c8d]">Edit raw JSON array to watch chart update live:</span>
                        {jsonError && <span className="text-[#d6502b] font-bold">{jsonError}</span>}
                      </div>
                      <textarea
                        value={customDataStr || JSON.stringify(currentPreset.data, null, 2)}
                        onChange={(e) => setCustomDataStr(e.target.value)}
                        rows={12}
                        className="w-full bg-[#18221b] border border-[#2d3a30] p-3 text-[#a4c995] font-mono text-xs focus:outline-none focus:border-[#c2872e] resize-y"
                        placeholder="Paste JSON array here..."
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setCustomDataStr('');
                            setJsonError(null);
                          }}
                          className="px-3 py-1 bg-[#1b251e] hover:bg-[#2d3a30] text-[#c3c8c2] border border-[#2d3a30] text-[11px]"
                        >
                          RESET PRESET DATA
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side: Live SVG Render Canvas */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white border border-[#1e2a22] shadow-lg p-6 space-y-6">
                {/* Header Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1e2a22]/20 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6e756a]">
                      {currentPreset.badge}
                    </span>
                    <h3 className="font-headline-md text-xl text-[#1e2a22] font-bold">
                      {currentPreset.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1.5 font-mono text-xs text-[#434844] cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={showGrid}
                        onChange={(e) => setShowGrid(e.target.checked)}
                        className="accent-[#c2872e]"
                      />
                      <span>Show Grid</span>
                    </label>
                  </div>
                </div>

                {/* SVG Render Container */}
                <div className="bg-[#f7faf5] border border-[#1e2a22]/20 p-6 min-h-[320px] flex items-center justify-center">
                  {mode === 'auto' ? (
                    <AutoChart data={parsedData} title={currentPreset.title} />
                  ) : (
                    <Chart
                      type={activeChartType}
                      data={parsedData}
                      x={currentPreset.x}
                      y={currentPreset.y}
                      title={currentPreset.title}
                    />
                  )}
                </div>

                {/* Chart Specs Meta Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#1e2a22]/10 font-mono text-xs text-[#434844]">
                  <div className="bg-[#ecefea] p-2 border border-[#1e2a22]/20">
                    <div className="text-[10px] text-[#6e756a] uppercase">CHART TYPE</div>
                    <div className="font-bold text-[#1e2a22]">{activeChartType}</div>
                  </div>
                  <div className="bg-[#ecefea] p-2 border border-[#1e2a22]/20">
                    <div className="text-[10px] text-[#6e756a] uppercase">X ENCODING</div>
                    <div className="font-bold text-[#1e2a22]">{currentPreset.x || 'auto'}</div>
                  </div>
                  <div className="bg-[#ecefea] p-2 border border-[#1e2a22]/20">
                    <div className="text-[10px] text-[#6e756a] uppercase">Y ENCODING</div>
                    <div className="font-bold text-[#1e2a22]">{currentPreset.y || 'none'}</div>
                  </div>
                  <div className="bg-[#ecefea] p-2 border border-[#1e2a22]/20">
                    <div className="text-[10px] text-[#6e756a] uppercase">RENDER ENGINE</div>
                    <div className="font-bold text-[#c2872e]">SVG (Headless)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Chart Types Showcase Gallery */}
      <section id="chart-types" className="py-16 sm:py-24 border-b border-[#1e2a22]/20 bg-[#ecefea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              SUPPORTED MVP CHARTS
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22]">
              5 Essential Chart Types, Fully Supported
            </h2>
            <p className="font-body-doc text-[#434844] text-base">
              Vizora MVP strictly focuses on perfected core charts. Each chart features explicit validation, headless scene-graph resolution, and built-in screen reader access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(PRESETS) as ChartType[]).map((key) => {
              const item = PRESETS[key];
              return (
                <Link
                  key={key}
                  href={`/charts/${key}`}
                  className="bg-[#f7faf5] border border-[#1e2a22] p-5 space-y-3 block hover:border-[#c2872e] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between border-b border-[#1e2a22]/15 pb-2">
                    <span className="font-mono text-xs font-bold text-[#c2872e] uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#6e756a] group-hover:text-[#1e2a22] font-bold">
                      EXPLORE /charts/{key} →
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg text-[#1e2a22] font-bold">
                    {item.title}
                  </h3>
                  <p className="font-body-ui text-xs text-[#434844] leading-relaxed">
                    {item.subtitle}
                  </p>
                  <div className="pt-2">
                    <div className="bg-white border border-[#1e2a22]/15 p-2 h-36 flex items-center justify-center overflow-hidden">
                      <Chart type={item.type} data={item.data} x={item.x} y={item.y} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. 4-Step Quickstart & Architecture Overview */}
      <section id="architecture" className="py-16 sm:py-24 border-b border-[#1e2a22]/20 bg-[#f7faf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              MONOREPO ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22]">
              Modular, Decoupled Package Ecosystem
            </h2>
            <p className="font-body-doc text-[#434844] text-base">
              Vizora is built as an npm workspace monorepo where responsibilities are strictly separated between pure spec generation, intelligence profiling, and React rendering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Package 1 */}
            <div className="bg-white border border-[#1e2a22] p-6 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
                <span className="font-mono text-sm font-bold text-[#1e2a22]">@vizora/core</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#ecefea] text-[#1e2a22] border border-[#1e2a22]/20">
                  FRAMEWORK AGNOSTIC
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#434844]">
                Contains the Zod schema for <code className="font-mono text-xs">ChartSpec</code>, mathematical scales, binned data transforms, and pure scene-graph data definitions.
              </p>
            </div>

            {/* Package 2 */}
            <div className="bg-white border border-[#1e2a22] p-6 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
                <span className="font-mono text-sm font-bold text-[#1e2a22]">@vizora/intelligence</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#ecefea] text-[#1e2a22] border border-[#1e2a22]/20">
                  PROFILING ENGINE
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#434844]">
                Deterministic data profiler and chart recommendation engine that maps temporal, categorical, and quantitative field combinations.
              </p>
            </div>

            {/* Package 3 */}
            <div className="bg-white border border-[#1e2a22] p-6 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
                <span className="font-mono text-sm font-bold text-[#1e2a22]">@vizora/react</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#ecefea] text-[#1e2a22] border border-[#1e2a22]/20">
                  REACT ADAPTER
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#434844]">
                Thin React wrapper components providing <code className="font-mono text-xs">&lt;AutoChart /&gt;</code> and <code className="font-mono text-xs">&lt;Chart /&gt;</code> with responsive containers.
              </p>
            </div>

            {/* Package 4 */}
            <div className="bg-white border border-[#1e2a22] p-6 space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
                <span className="font-mono text-sm font-bold text-[#1e2a22]">@vizora/render-svg</span>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-[#ecefea] text-[#1e2a22] border border-[#1e2a22]/20">
                  SVG RUNTIME
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#434844]">
                Converts scene graph nodes into pure, accessible SVG strings. Completely SSR-safe and runnable in Node or Edge environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive API Documentation Reference */}
      <section id="docs" className="py-16 sm:py-24 border-b border-[#1e2a22]/20 bg-[#ecefea]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              API REFERENCE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] mt-1">
              Component & Schema Specifications
            </h2>
          </div>

          <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
            <div className="bg-[#1e2a22] text-[#ecefea] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider">
              &lt;AutoChart /&gt; Props API
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#1e2a22]/20 bg-[#ecefea] text-[#1e2a22]">
                    <th className="p-3">Prop</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Default</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2a22]/10 text-[#434844]">
                  <tr>
                    <td className="p-3 font-bold text-[#1e2a22]">data</td>
                    <td className="p-3 text-[#c2872e]">Record&lt;string, unknown&gt;[]</td>
                    <td className="p-3">Required</td>
                    <td className="p-3">Array of raw data objects to profile and visualize.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1e2a22]">title</td>
                    <td className="p-3 text-[#c2872e]">string</td>
                    <td className="p-3">undefined</td>
                    <td className="p-3">Optional chart title header displayed above visualization.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
            <div className="bg-[#1e2a22] text-[#ecefea] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider">
              &lt;Chart /&gt; Explicit Props API
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#1e2a22]/20 bg-[#ecefea] text-[#1e2a22]">
                    <th className="p-3">Prop</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Default</th>
                    <th className="p-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e2a22]/10 text-[#434844]">
                  <tr>
                    <td className="p-3 font-bold text-[#1e2a22]">type</td>
                    <td className="p-3 text-[#c2872e]">'line' | 'bar' | 'scatter' | 'histogram' | 'kpi-sparkline'</td>
                    <td className="p-3">'bar'</td>
                    <td className="p-3">Explicit chart type specification override.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1e2a22]">data</td>
                    <td className="p-3 text-[#c2872e]">Record&lt;string, unknown&gt;[]</td>
                    <td className="p-3">Required</td>
                    <td className="p-3">Array of objects containing dataset fields.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1e2a22]">x</td>
                    <td className="p-3 text-[#c2872e]">string</td>
                    <td className="p-3">undefined</td>
                    <td className="p-3">Field key to map onto the X axis dimension.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#1e2a22]">y</td>
                    <td className="p-3 text-[#c2872e]">string</td>
                    <td className="p-3">undefined</td>
                    <td className="p-3">Field key to map onto the Y axis dimension.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Modern Developer Footer */}
      <footer className="w-full bg-[#111813] text-[#e0e3de] border-t border-[#1e2a22] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-[#c2872e] text-[#1e2a22] font-bold flex items-center justify-center">
              VZ
            </div>
            <span className="font-bold text-white text-sm">Vizora Engine</span>
            <span className="text-[#6e756a]">• Framework-Agnostic Chart Runtime</span>
          </div>

          <div className="flex items-center gap-6 text-[#909c8d]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#playground" className="hover:text-white transition-colors">Playground</a>
            <a href="#chart-types" className="hover:text-white transition-colors">Chart Types</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          </div>

          <div className="text-[#6e756a] text-[11px]">
            © {new Date().getFullYear()} Vizora. Open source software under MVP spec.
          </div>
        </div>
      </footer>
    </div>
  );
}
