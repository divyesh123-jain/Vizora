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
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased selection:bg-[#c2872e] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden border-b border-[#18241b]/10 bg-gradient-to-b from-[#f4f7f3] via-[#ffffff] to-[#f4f7f3] py-16 sm:py-24">
        <div className="carto-grid-bg absolute inset-0 opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18241b] text-[#f4f7f3] border border-[#18241b] text-[11px] font-mono font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#c2872e] animate-pulse" />
                <span>VIZORA 0.1.0 MVP • ZERO-CONFIG CHART ENGINE</span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-[#18241b] leading-[1.12] tracking-tight font-bold">
                Charts made simple.<br />
                <span className="text-[#c2872e]">Give it data, Vizora profiles the rest.</span>
              </h1>

              <p className="font-body-doc text-[#404641] text-base sm:text-lg max-w-2xl leading-relaxed">
                The framework-agnostic visualization engine designed for developer productivity. Vizora inspects field data types, infers optimal encodings, and renders clean SVG — backed by a typed, JSON-serializable <code className="px-2 py-0.5 rounded-lg bg-[#18241b]/10 text-[#18241b] font-mono text-sm">ChartSpec</code>.
              </p>

              {/* Install Command & Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={handleCopyHeroInstall}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0f1611] text-[#e0e4dc] hover:text-white border border-[#18241b]/40 font-mono text-xs shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <span className="text-[#c2872e] font-bold">$</span>
                  <span>npm install @vizora/react @vizora/core</span>
                  <span className="ml-2 px-2.5 py-0.5 rounded-lg bg-[#1a251d] text-[#9ba196] text-[10px] uppercase tracking-wider group-hover:bg-[#28382c] transition-colors">
                    {copiedHeroInstall ? 'COPIED!' : 'COPY'}
                  </span>
                </button>

                <Link
                  href="/playground"
                  className="px-6 py-3.5 rounded-2xl bg-[#c2872e] hover:bg-[#d99a38] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-600/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>STUDIO PLAYGROUND</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/templates"
                  className="px-6 py-3.5 rounded-2xl bg-[#18241b] hover:bg-[#28382c] text-[#f4f7f3] font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>DASHBOARD BLOCKS</span>
                </Link>

                <Link
                  href="/docs/getting-started"
                  className="px-6 py-3.5 rounded-2xl bg-white hover:bg-[#18241b]/5 text-[#18241b] font-mono text-xs font-bold uppercase tracking-wider border border-[#18241b]/15 shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>READ DOCS</span>
                </Link>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-[#60685c] border-t border-[#18241b]/10">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> Zero JSX Boilerplate
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> Pure TypeScript Core
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> &lt; 15kb Gzipped
                </div>
              </div>
            </div>

            {/* Right Hero Live Interactive Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/80 border border-[#18241b]/15 rounded-3xl shadow-xl backdrop-blur-xl p-6 space-y-4 transition-all">
                <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d6502b] shadow-sm" />
                    <span className="font-mono text-xs font-bold uppercase text-[#18241b]">
                      LIVE INFERENCE PREVIEW
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#c2872e] bg-[#c2872e]/10 px-2.5 py-0.5 rounded-full border border-[#c2872e]/20 font-semibold">
                    &lt;AutoChart /&gt;
                  </span>
                </div>

                {/* Preset Switcher Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {(['line', 'bar', 'scatter', 'histogram'] as ChartType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setHeroPresetKey(type)}
                      className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-200 uppercase ${
                        heroPresetKey === type
                          ? 'bg-[#18241b] text-white font-bold shadow-sm'
                          : 'bg-[#18241b]/5 text-[#60685c] hover:text-[#18241b] hover:bg-[#18241b]/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Live Chart Container */}
                <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-5 min-h-[260px] flex items-center justify-center shadow-inner">
                  <AutoChart data={PRESETS[heroPresetKey].data} title={PRESETS[heroPresetKey].title} />
                </div>

                {/* Profile Output Strip */}
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641] flex items-center justify-between">
                  <span>Profiles: {PRESETS[heroPresetKey].profileDescription}</span>
                  <span className="text-[#c2872e] font-bold uppercase">AUTO-MAPPED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Why Vizora?" Key Pillars */}
      <section id="features" className="py-16 sm:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              SIMPLIFIED ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b]">
              Why developers choose Vizora over raw charting libraries
            </h2>
            <p className="font-body-doc text-[#404641] text-base">
              Traditional chart libraries require dozens of lines of SVG markup, manual scale calculations, and repetitive formatting. Vizora abstracts the complexity behind a single typed contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                01
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Zero-Config AutoChart
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Pass raw arrays of objects directly to <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;AutoChart /&gt;</code>. Vizora automatically inspects field types and selects optimal chart encodings.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                02
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Typed ChartSpec Contract
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Separates chart definition from rendering. Every spec is 100% JSON-serializable, Zod-validated, and easy to save, share, or store in database schemas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                03
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Framework-Agnostic Core
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">@vizora/core</code> has zero React runtime dependencies. Generates pure scene-graph structures suitable for SSR or headless rendering.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-mono font-bold text-lg group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                04
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Accessible & Sub-15KB
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Includes automatic accessible data table fallbacks for screen readers and WCAG compliance. Stays under 15kb gzipped for core + SVG renderer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TanStack-Style Interactive Code & Live Preview Playground */}
      <section id="playground" className="py-16 sm:py-24 border-b border-[#18241b]/10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#18241b]/10 pb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
                INTERACTIVE PLAYGROUND
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] mt-1">
                Explore Chart Types & Live Specs
              </h2>
            </div>

            {/* Mode Selector Toggle */}
            <div className="flex items-center gap-1 bg-[#18241b]/8 p-1.5 rounded-full border border-[#18241b]/10">
              <button
                onClick={() => setMode('auto')}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all duration-200 ${
                  mode === 'auto'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                &lt;AutoChart /&gt; (Auto Inference)
              </button>
              <button
                onClick={() => setMode('explicit')}
                className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition-all duration-200 ${
                  mode === 'explicit'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                &lt;Chart /&gt; (Explicit Props)
              </button>
            </div>
          </div>

          {/* Chart Type Selector Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-thin">
            {(Object.keys(PRESETS) as ChartType[]).map((key) => {
              const isActive = activeChartType === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectPreset(key)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#18241b] text-white shadow-md'
                      : 'bg-white text-[#60685c] hover:text-[#18241b] hover:bg-[#18241b]/5 border border-[#18241b]/10'
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
              <div className="bg-[#0f1611] border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Code Tabs Header */}
                <div className="flex items-center justify-between bg-[#151f17] border-b border-slate-800/80 px-4 pt-3 pb-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setCodeTab('react')}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 ${
                        codeTab === 'react'
                          ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                          : 'text-[#9ba196] hover:text-white'
                      }`}
                    >
                      React Usage
                    </button>
                    <button
                      onClick={() => setCodeTab('spec')}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 ${
                        codeTab === 'spec'
                          ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                          : 'text-[#9ba196] hover:text-white'
                      }`}
                    >
                      ChartSpec JSON
                    </button>
                    <button
                      onClick={() => setCodeTab('profile')}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 ${
                        codeTab === 'profile'
                          ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                          : 'text-[#9ba196] hover:text-white'
                      }`}
                    >
                      Inferred Profile
                    </button>
                    <button
                      onClick={() => setCodeTab('json')}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-medium transition-all duration-200 ${
                        codeTab === 'json'
                          ? 'bg-[#0f1611] text-[#c2872e] shadow-sm font-bold border border-slate-700/60'
                          : 'text-[#9ba196] hover:text-white'
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
                    <div className="space-y-4 font-mono text-xs text-[#e0e4dc] p-2">
                      <div className="p-4 bg-[#151f17] rounded-xl border border-slate-800 space-y-2">
                        <div className="text-[#c2872e] font-bold uppercase">
                          FIELD DATA TYPE INFERENCE REPORT
                        </div>
                        <p className="text-[#9ba196]">
                          Evaluated {parsedData.length} records in dataset:
                        </p>
                        <div className="space-y-2 pt-2">
                          {profiles.map((p) => (
                            <div key={p.field} className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
                              <span className="font-bold text-[#c0c6bd]">{p.field}</span>
                              <span className="px-2.5 py-0.5 rounded-full bg-[#28382c] text-[#a4c995] text-[11px] font-medium">
                                type: {p.type} (distinct: {p.distinctCount})
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-[#151f17] rounded-xl border border-slate-800 space-y-1.5 text-[#9ba196]">
                        <span className="text-white font-bold">Selected Chart Encoding:</span>
                        <div>X Encoding: <code className="text-[#c2872e] bg-[#0f1611] px-1.5 py-0.5 rounded-md">{currentSpec.encoding.x?.field || 'none'}</code> ({profiles.find(p => p.field === currentSpec.encoding.x?.field)?.type || 'auto'})</div>
                        <div>Y Encoding: <code className="text-[#c2872e] bg-[#0f1611] px-1.5 py-0.5 rounded-md">{currentSpec.encoding.y?.field || 'none'}</code> ({profiles.find(p => p.field === currentSpec.encoding.y?.field)?.type || 'auto'})</div>
                      </div>
                    </div>
                  )}

                  {codeTab === 'json' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-[#9ba196]">Edit raw JSON array to watch chart update live:</span>
                        {jsonError && <span className="text-[#d6502b] font-bold">{jsonError}</span>}
                      </div>
                      <textarea
                        value={customDataStr || JSON.stringify(currentPreset.data, null, 2)}
                        onChange={(e) => setCustomDataStr(e.target.value)}
                        rows={12}
                        className="w-full bg-[#151f17] border border-slate-800 rounded-xl p-3 text-[#a4c995] font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#c2872e]/30 resize-y transition-all"
                        placeholder="Paste JSON array here..."
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setCustomDataStr('');
                            setJsonError(null);
                          }}
                          className="px-3.5 py-1.5 bg-[#1b251e] hover:bg-[#28382c] text-[#c0c6bd] border border-slate-700/60 rounded-xl text-[11px] font-bold transition-all active:scale-95 shadow-sm"
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
              <div className="bg-white rounded-3xl border border-[#18241b]/15 shadow-xl p-6 space-y-6">
                {/* Header Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#18241b]/10 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#60685c]">
                      {currentPreset.badge}
                    </span>
                    <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                      {currentPreset.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setShowGrid(!showGrid)}
                      className="flex items-center gap-2 cursor-pointer select-none font-mono text-xs text-[#404641]"
                    >
                      <div className={`w-8 h-4 rounded-full transition-colors duration-200 relative p-0.5 ${showGrid ? 'bg-[#c2872e]' : 'bg-[#18241b]/20'}`}>
                        <div className={`w-3 h-3 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${showGrid ? 'translate-x-4' : 'translate-x-0'}`} />
                      </div>
                      <span>Show Grid</span>
                    </button>
                  </div>
                </div>

                {/* SVG Render Container */}
                <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-6 min-h-[320px] flex items-center justify-center shadow-inner">
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
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-[#18241b]/10 font-mono text-xs text-[#404641]">
                  <div className="bg-[#18241b]/5 p-2.5 rounded-xl border border-[#18241b]/10">
                    <div className="text-[10px] text-[#60685c] uppercase">CHART TYPE</div>
                    <div className="font-bold text-[#18241b]">{activeChartType}</div>
                  </div>
                  <div className="bg-[#18241b]/5 p-2.5 rounded-xl border border-[#18241b]/10">
                    <div className="text-[10px] text-[#60685c] uppercase">X ENCODING</div>
                    <div className="font-bold text-[#18241b]">{currentPreset.x || 'auto'}</div>
                  </div>
                  <div className="bg-[#18241b]/5 p-2.5 rounded-xl border border-[#18241b]/10">
                    <div className="text-[10px] text-[#60685c] uppercase">Y ENCODING</div>
                    <div className="font-bold text-[#18241b]">{currentPreset.y || 'none'}</div>
                  </div>
                  <div className="bg-[#18241b]/5 p-2.5 rounded-xl border border-[#18241b]/10">
                    <div className="text-[10px] text-[#60685c] uppercase">RENDER ENGINE</div>
                    <div className="font-bold text-[#c2872e]">SVG (Headless)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Chart Types Showcase Gallery */}
      <section id="chart-types" className="py-16 sm:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              SUPPORTED MVP CHARTS
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b]">
              5 Essential Chart Types, Fully Supported
            </h2>
            <p className="font-body-doc text-[#404641] text-base">
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
                  className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-5 space-y-3 block hover:border-[#c2872e] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
                    <span className="font-mono text-xs font-bold text-[#c2872e] uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[#60685c] group-hover:text-[#18241b] font-bold">
                      EXPLORE →
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                    {item.title}
                  </h3>
                  <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                    {item.subtitle}
                  </p>
                  <div className="pt-2">
                    <div className="bg-[#f4f7f3] rounded-xl border border-[#18241b]/10 p-3 h-36 flex items-center justify-center overflow-hidden shadow-inner">
                      <Chart type={item.type} data={item.data} x={item.x} y={item.y} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Monorepo Architecture Overview */}
      <section id="architecture" className="py-16 sm:py-24 border-b border-[#18241b]/10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              MONOREPO ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b]">
              Modular, Decoupled Package Ecosystem
            </h2>
            <p className="font-body-doc text-[#404641] text-base">
              Vizora is built as an npm workspace monorepo where responsibilities are strictly separated between pure spec generation, intelligence profiling, and React rendering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Package 1 */}
            <div className="bg-white border border-[#18241b]/10 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2.5">
                <span className="font-mono text-sm font-bold text-[#18241b]">@vizora/core</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-semibold">
                  FRAMEWORK AGNOSTIC
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#404641]">
                Contains the Zod schema for <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">ChartSpec</code>, mathematical scales, binned data transforms, and pure scene-graph data definitions.
              </p>
            </div>

            {/* Package 2 */}
            <div className="bg-white border border-[#18241b]/10 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2.5">
                <span className="font-mono text-sm font-bold text-[#18241b]">@vizora/intelligence</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-semibold">
                  PROFILING ENGINE
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#404641]">
                Deterministic data profiler and chart recommendation engine that maps temporal, categorical, and quantitative field combinations.
              </p>
            </div>

            {/* Package 3 */}
            <div className="bg-white border border-[#18241b]/10 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2.5">
                <span className="font-mono text-sm font-bold text-[#18241b]">@vizora/react</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-semibold">
                  REACT ADAPTER
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#404641]">
                Thin React wrapper components providing <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;AutoChart /&gt;</code> and <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;Chart /&gt;</code> with responsive containers.
              </p>
            </div>

            {/* Package 4 */}
            <div className="bg-white border border-[#18241b]/10 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2.5">
                <span className="font-mono text-sm font-bold text-[#18241b]">@vizora/render-svg</span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-semibold">
                  SVG RUNTIME
                </span>
              </div>
              <p className="font-body-ui text-sm text-[#404641]">
                Converts scene graph nodes into pure, accessible SVG strings. Completely SSR-safe and runnable in Node or Edge environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive API Documentation Reference */}
      <section id="docs" className="py-16 sm:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c2872e]">
              API REFERENCE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] mt-1">
              Component & Schema Specifications
            </h2>
          </div>

          <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#18241b] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider">
              &lt;AutoChart /&gt; Props API
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#18241b]/10 bg-[#18241b]/5 text-[#18241b]">
                    <th className="p-3.5">Prop</th>
                    <th className="p-3.5">Type</th>
                    <th className="p-3.5">Default</th>
                    <th className="p-3.5">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">data</td>
                    <td className="p-3.5 text-[#c2872e]">Record&lt;string, unknown&gt;[]</td>
                    <td className="p-3.5">Required</td>
                    <td className="p-3.5">Array of raw data objects to profile and visualize.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">title</td>
                    <td className="p-3.5 text-[#c2872e]">string</td>
                    <td className="p-3.5">undefined</td>
                    <td className="p-3.5">Optional chart title header displayed above visualization.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#18241b] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider">
              &lt;Chart /&gt; Explicit Props API
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#18241b]/10 bg-[#18241b]/5 text-[#18241b]">
                    <th className="p-3.5">Prop</th>
                    <th className="p-3.5">Type</th>
                    <th className="p-3.5">Default</th>
                    <th className="p-3.5">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">type</td>
                    <td className="p-3.5 text-[#c2872e]">'line' | 'bar' | 'scatter' | 'histogram' | 'kpi-sparkline'</td>
                    <td className="p-3.5">'bar'</td>
                    <td className="p-3.5">Explicit chart type specification override.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">data</td>
                    <td className="p-3.5 text-[#c2872e]">Record&lt;string, unknown&gt;[]</td>
                    <td className="p-3.5">Required</td>
                    <td className="p-3.5">Array of objects containing dataset fields.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">x</td>
                    <td className="p-3.5 text-[#c2872e]">string</td>
                    <td className="p-3.5">undefined</td>
                    <td className="p-3.5">Field key to map onto the X axis dimension.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">y</td>
                    <td className="p-3.5 text-[#c2872e]">string</td>
                    <td className="p-3.5">undefined</td>
                    <td className="p-3.5">Field key to map onto the Y axis dimension.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Modern Developer Footer */}
      <footer className="w-full bg-[#0f1611] text-[#e0e4dc] border-t border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-[#c2872e] to-[#d99a38] text-[#18241b] font-bold flex items-center justify-center shadow-md">
              VZ
            </div>
            <span className="font-bold text-white text-sm">Vizora Engine</span>
            <span className="text-[#9ba196]">• Framework-Agnostic Chart Runtime</span>
          </div>

          <div className="flex items-center gap-6 text-[#9ba196]">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#playground" className="hover:text-white transition-colors">Playground</a>
            <a href="#chart-types" className="hover:text-white transition-colors">Chart Types</a>
            <a href="#docs" className="hover:text-white transition-colors">Docs</a>
          </div>

          <div className="text-[#60685c] text-[11px]">
            © {new Date().getFullYear()} Vizora. Open source software under MVP spec.
          </div>
        </div>
      </footer>
    </div>
  );
}
