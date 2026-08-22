'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Chart, AutoChart } from '@vizora/react';
import { CodeBlock } from '../CodeBlock';

interface DemoDataset {
  id: string;
  name: string;
  typeBadge: string;
  description: string;
  inferredEncoding: string;
  data: Record<string, unknown>[];
  code: string;
}

const DEMO_PRESETS: DemoDataset[] = [
  {
    id: 'mrr',
    name: 'MRR Growth',
    typeBadge: 'type="line"',
    description: 'Temporal trend auto-inferred from date strings',
    inferredEncoding: 'month (temporal) → revenue ($)',
    data: [
      { month: 'Jan', revenue: 12400 },
      { month: 'Feb', revenue: 14800 },
      { month: 'Mar', revenue: 18200 },
      { month: 'Apr', revenue: 21500 },
      { month: 'May', revenue: 26800 },
      { month: 'Jun', revenue: 31200 },
    ],
    code: `import { AutoChart } from '@vizora/react';

const salesData = [
  { month: 'Jan', revenue: 12400 },
  { month: 'Feb', revenue: 14800 },
  { month: 'Mar', revenue: 18200 },
  { month: 'Apr', revenue: 21500 },
  { month: 'May', revenue: 26800 },
  { month: 'Jun', revenue: 31200 },
];

export function RevenueWidget() {
  return (
    // Zero-config: Vizora infers temporal X & quantitative Y
    <AutoChart data={salesData} title="Monthly Recurring Revenue ($)" />
  );
}`,
  },
  {
    id: 'regional',
    name: 'Regional ARR',
    typeBadge: 'type="bar"',
    description: 'Categorical distribution auto-inferred from names',
    inferredEncoding: 'region (categorical) → sales ($)',
    data: [
      { region: 'NA', sales: 48500 },
      { region: 'EMEA', sales: 36200 },
      { region: 'APAC', sales: 29800 },
      { region: 'LATAM', sales: 14100 },
    ],
    code: `import { Chart } from '@vizora/react';

const regionalData = [
  { region: 'NA', sales: 48500 },
  { region: 'EMEA', sales: 36200 },
  { region: 'APAC', sales: 29800 },
  { region: 'LATAM', sales: 14100 },
];

export function RegionalSales() {
  return (
    <Chart
      type="bar"
      data={regionalData}
      x="region"
      y="sales"
      color="#c2872e"
      showGrid={true}
    />
  );
}`,
  },
  {
    id: 'latency',
    name: 'Latency vs QPS',
    typeBadge: 'type="scatter"',
    description: 'Bivariate correlation between two continuous metrics',
    inferredEncoding: 'qps (quantitative) → latencyMs (quantitative)',
    data: [
      { qps: 120, latencyMs: 14 },
      { qps: 280, latencyMs: 18 },
      { qps: 450, latencyMs: 25 },
      { qps: 720, latencyMs: 42 },
      { qps: 980, latencyMs: 78 },
      { qps: 1240, latencyMs: 112 },
    ],
    code: `import { Chart } from '@vizora/react';

const latencyData = [
  { qps: 120, latencyMs: 14 },
  { qps: 280, latencyMs: 18 },
  { qps: 450, latencyMs: 25 },
  { qps: 720, latencyMs: 42 },
  { qps: 980, latencyMs: 78 },
  { qps: 1240, latencyMs: 112 },
];

export function SystemMetrics() {
  return (
    <Chart
      type="scatter"
      data={latencyData}
      x="qps"
      y="latencyMs"
      color="#c2872e"
      showGrid={true}
    />
  );
}`,
  },
];

export const HeroSection: React.FC = () => {
  const [copiedHeroInstall, setCopiedHeroInstall] = useState<boolean>(false);
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');

  const activePreset = DEMO_PRESETS[activePresetIndex];

  const handleCopyHeroInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedHeroInstall(true);
    setTimeout(() => setCopiedHeroInstall(false), 2000);
  };

  return (
    <section className="relative overflow-hidden border-b border-[#18241b]/10 bg-gradient-to-b from-[#f4f7f3] via-[#ffffff] to-[#f4f7f3] py-12 lg:py-20">
      <div className="carto-grid-bg absolute inset-0 opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18241b] text-[#f4f7f3] border border-[#18241b] text-[11px] font-sans font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c2872e] animate-pulse" />
              <span>VIZORA • CARTOGRAPHY OF DATA</span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-5xl lg:text-6xl text-[#18241b] leading-[1.12] tracking-tight font-extrabold">
              Declarative, Headless & Typed Data Visualization.
            </h1>

            <p className="font-body-doc text-[#404641] text-base sm:text-lg max-w-xl leading-relaxed">
              Framework-agnostic SVG chart runtime for React & TypeScript. Zero JSX boilerplate, deterministic data profiling, and a typed JSON-serializable <code className="px-2 py-0.5 rounded-md bg-[#18241b]/8 text-[#18241b] font-mono text-xs sm:text-sm font-semibold">ChartSpec</code> contract.
            </p>

            {/* "See it in 3 seconds" Mini-Demo Switcher */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/90 border border-[#18241b]/15 shadow-sm space-y-3 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c2872e] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c2872e]"></span>
                  </span>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#18241b]">
                    See it in 3 seconds: Data → Chart
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#60685c] bg-[#18241b]/5 px-2 py-0.5 rounded-full">
                  Click preset to test live
                </span>
              </div>

              {/* Preset Selector Buttons */}
              <div className="grid grid-cols-3 gap-2">
                {DEMO_PRESETS.map((preset, idx) => (
                  <button
                    key={preset.id}
                    onClick={() => setActivePresetIndex(idx)}
                    className={`px-2.5 py-2 rounded-xl text-left font-sans text-xs transition-all duration-200 border ${
                      activePresetIndex === idx
                        ? 'bg-[#18241b] text-white border-[#18241b] shadow-sm font-bold scale-[1.02]'
                        : 'bg-[#f4f7f3] text-[#404641] border-[#18241b]/10 hover:bg-[#18241b]/8 hover:border-[#18241b]/20 font-medium'
                    }`}
                  >
                    <div className="truncate font-semibold">{preset.name}</div>
                    <div className={`font-mono text-[10px] truncate ${activePresetIndex === idx ? 'text-[#c2872e]' : 'text-[#60685c]'}`}>
                      {preset.typeBadge}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Clear CTA Hierarchy (1. Primary: Studio Playground, 2. Secondary: Explore Components, 3. Tertiary: Chart Builder) */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                {/* 1. PRIMARY CTA */}
                <Link
                  href="/playground"
                  className="px-6 py-3.5 rounded-xl bg-[#c2872e] hover:bg-[#d99a38] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-600/25 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2 group ring-2 ring-[#c2872e]/30"
                >
                  <span>STUDIO PLAYGROUND</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>

                {/* 2. SECONDARY CTA */}
                <Link
                  href="/components"
                  className="px-5 py-3.5 rounded-xl bg-[#18241b] hover:bg-[#28382c] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>EXPLORE COMPONENTS</span>
                </Link>

                {/* 3. TERTIARY CTA */}
                <Link
                  href="/builder"
                  className="px-4 py-3.5 rounded-xl bg-white/90 hover:bg-[#18241b]/5 text-[#18241b] font-sans text-xs font-bold uppercase tracking-wider border border-[#18241b]/20 shadow-xs hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <span>CHART BUILDER</span>
                </Link>
              </div>

              {/* Interactive Copy Terminal Install Command */}
              <button
                onClick={handleCopyHeroInstall}
                className="flex items-center justify-between w-full max-w-lg px-4 py-2.5 rounded-xl bg-[#0f1611] text-[#e0e4dc] border border-slate-800/80 font-mono text-xs shadow-md transition-all hover:border-[#c2872e] group text-left"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[#c2872e] font-bold">$</span>
                  <span className="truncate">npm install @vizora/react @vizora/core</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-[#1a251d] text-[#9ba196] text-[10px] font-sans font-bold uppercase tracking-wider group-hover:bg-[#28382c] group-hover:text-white transition-colors shrink-0 ml-2">
                  {copiedHeroInstall ? '✓ COPIED' : 'COPY'}
                </span>
              </button>
            </div>

            {/* Developer Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs font-sans font-semibold text-[#60685c] border-t border-[#18241b]/10">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> Zero React in Core
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> Pure Vector SVG
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> &lt; 15kb Gzipped
              </div>
            </div>
          </div>

          {/* Right Hero Code & Live Demo Window */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f1611] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Window Header with Tabs */}
              <div className="flex flex-wrap items-center justify-between bg-[#151f17] border-b border-slate-800/80 px-4 py-2.5 gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-1.5 font-mono text-xs text-[#9ba196] hidden sm:inline">
                    {activePreset.id}.tsx
                  </span>
                </div>

                {/* View Switcher: Live SVG vs Code */}
                <div className="flex items-center bg-[#0a0e0b] p-1 rounded-xl border border-slate-800 text-[11px] font-sans">
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      viewMode === 'preview'
                        ? 'bg-[#c2872e] text-[#18241b] shadow-xs'
                        : 'text-[#9ba196] hover:text-white'
                    }`}
                  >
                    Live SVG Render
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all ${
                      viewMode === 'code'
                        ? 'bg-[#18241b] text-white border border-[#2d3a30] shadow-xs'
                        : 'text-[#9ba196] hover:text-white'
                    }`}
                  >
                    TypeScript TSX
                  </button>
                </div>
              </div>

              {/* Main Content: Live Preview or Code View */}
              <div className="min-h-[280px] sm:min-h-[320px] flex flex-col justify-center">
                {viewMode === 'preview' ? (
                  <div className="p-4 sm:p-6 bg-[#0f1611] flex flex-col justify-between h-full space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                      <span className="font-mono text-[#c2872e] text-xs font-bold">
                        {activePreset.name} Preview
                      </span>
                      <span className="text-[11px] font-mono text-[#9ba196] bg-[#151f17] px-2 py-0.5 rounded border border-slate-800">
                        {activePreset.data.length} records • Headless SVG
                      </span>
                    </div>

                    <div className="w-full h-48 sm:h-56 bg-[#151f17]/90 rounded-xl border border-slate-800/80 p-3 flex items-center justify-center overflow-hidden">
                      {activePreset.id === 'mrr' && (
                        <AutoChart data={activePreset.data} />
                      )}
                      {activePreset.id === 'regional' && (
                        <Chart
                          type="bar"
                          data={activePreset.data}
                          x="region"
                          y="sales"
                          color="#c2872e"
                          showGrid={true}
                        />
                      )}
                      {activePreset.id === 'latency' && (
                        <Chart
                          type="scatter"
                          data={activePreset.data}
                          x="qps"
                          y="latencyMs"
                          color="#c2872e"
                          showGrid={true}
                        />
                      )}
                    </div>

                    <div className="text-[11px] font-sans text-[#9ba196] flex items-center justify-between">
                      <span className="truncate">{activePreset.description}</span>
                      <Link
                        href="/playground"
                        className="text-[#c2872e] hover:underline font-bold text-[11px] shrink-0 ml-2"
                      >
                        Customize in Studio →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-[#0f1611] max-h-[340px] overflow-y-auto">
                    <CodeBlock
                      code={activePreset.code}
                      language="typescript"
                      title={activePreset.name}
                    />
                  </div>
                )}
              </div>

              {/* Bottom Inferred Bar */}
              <div className="bg-[#151f17] border-t border-slate-800/80 px-4 py-3 flex flex-wrap items-center justify-between font-sans text-xs text-[#9ba196] gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#88c070]" />
                  <span>
                    Inferred: <code className="text-[#c2872e] font-mono text-[11px]">{activePreset.inferredEncoding}</code>
                  </span>
                </div>
                <Link
                  href="/playground"
                  className="text-[#c2872e] hover:text-[#d99a38] font-bold text-xs flex items-center gap-1"
                >
                  <span>Open Studio Playground</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
