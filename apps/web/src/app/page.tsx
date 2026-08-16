'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { CodeBlock } from '../components/CodeBlock';

export default function Home() {
  const [copiedHeroInstall, setCopiedHeroInstall] = useState<boolean>(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'auto' | 'explicit' | 'spec' | 'profile'>('auto');

  const handleCopyHeroInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedHeroInstall(true);
    setTimeout(() => setCopiedHeroInstall(false), 2000);
  };

  const autoCodeExample = `import React from 'react';
import { AutoChart } from '@vizora/react';

const salesData = [
  { month: 'Jan', revenue: 12400 },
  { month: 'Feb', revenue: 14800 },
  { month: 'Mar', revenue: 18200 },
  { month: 'Apr', revenue: 21500 },
];

export function RevenueWidget() {
  return (
    // Zero-config: Vizora infers temporal X & quantitative Y automatically
    <AutoChart
      data={salesData}
      title="Monthly Recurring Revenue ($)"
    />
  );
}`;

  const explicitCodeExample = `import React from 'react';
import { Chart } from '@vizora/react';

const regionalData = [
  { region: 'North America', sales: 12500 },
  { region: 'Europe', sales: 9800 },
  { region: 'Asia Pacific', sales: 14200 },
];

export function RegionalSalesChart() {
  return (
    // Explicit encoding props for deterministic control
    <Chart
      type="bar"
      data={regionalData}
      x="region"
      y="sales"
      color="#c2872e"
      title="ARR by Region ($)"
      showGrid={true}
    />
  );
}`;

  const chartSpecJsonExample = `{
  "version": "0.1.0",
  "type": "line",
  "title": "Monthly Recurring Revenue ($)",
  "data": [
    { "month": "Jan", "revenue": 12400 },
    { "month": "Feb", "revenue": 14800 }
  ],
  "encoding": {
    "x": { "field": "month" },
    "y": { "field": "revenue" }
  },
  "config": {
    "showGrid": true,
    "theme": "light"
  }
}`;

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased selection:bg-[#c2872e] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section - TanStack Library Style */}
      <section className="relative overflow-hidden border-b border-[#18241b]/10 bg-gradient-to-b from-[#f4f7f3] via-[#ffffff] to-[#f4f7f3] py-16 lg:py-24">
        <div className="carto-grid-bg absolute inset-0 opacity-25 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18241b] text-[#f4f7f3] border border-[#18241b] text-[11px] font-sans font-bold tracking-wider uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#c2872e] animate-pulse" />
                <span>VIZORA 0.1.0 MVP • POWERFUL & FLEXIBLE CHART ENGINE</span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-[#18241b] leading-[1.1] tracking-tight font-extrabold">
                Declarative, Headless & Typed Data Visualization.
              </h1>

              <p className="font-body-doc text-[#404641] text-base sm:text-lg max-w-xl leading-relaxed">
                Framework-agnostic SVG chart runtime for React & TypeScript. Zero JSX boilerplate, deterministic data profiling, and a typed JSON-serializable <code className="px-2 py-0.5 rounded-md bg-[#18241b]/8 text-[#18241b] font-mono text-sm font-semibold">ChartSpec</code> contract.
              </p>

              {/* Install Command & Hero Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/docs/getting-started"
                    className="px-6 py-3.5 rounded-xl bg-[#c2872e] hover:bg-[#d99a38] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-600/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                  >
                    <span>GET STARTED →</span>
                  </Link>

                  <Link
                    href="/playground"
                    className="px-6 py-3.5 rounded-xl bg-[#18241b] hover:bg-[#28382c] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                  >
                    <span>STUDIO PLAYGROUND</span>
                  </Link>

                  <Link
                    href="/charts/line"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#18241b]/5 text-[#18241b] font-sans text-xs font-bold uppercase tracking-wider border border-[#18241b]/15 shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center gap-2"
                  >
                    <span>VIEW GALLERY</span>
                  </Link>
                </div>

                {/* Interactive Copy Terminal Install Command */}
                <button
                  onClick={handleCopyHeroInstall}
                  className="flex items-center justify-between w-full max-w-lg px-4 py-3 rounded-xl bg-[#0f1611] text-[#e0e4dc] border border-slate-800/80 font-mono text-xs shadow-lg transition-all hover:border-[#c2872e] group text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c2872e] font-bold">$</span>
                    <span>npm install @vizora/react @vizora/core</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#1a251d] text-[#9ba196] text-[10px] font-sans font-bold uppercase tracking-wider group-hover:bg-[#28382c] group-hover:text-white transition-colors">
                    {copiedHeroInstall ? '✓ COPIED' : 'COPY'}
                  </span>
                </button>
              </div>

              {/* Developer Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-sans font-semibold text-[#60685c] border-t border-[#18241b]/10">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> Zero React Dependency in Core
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> Pure Vector SVG Output
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#c2872e]/15 text-[#c2872e] flex items-center justify-center font-bold text-[10px]">✓</span> &lt; 15kb Gzipped
                </div>
              </div>
            </div>

            {/* Right Hero Code Window (TanStack Style) */}
            <div className="lg:col-span-6">
              <div className="bg-[#0f1611] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Code Window Header */}
                <div className="flex items-center justify-between bg-[#151f17] border-b border-slate-800/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-mono text-xs text-[#9ba196]">SalesOverviewWidget.tsx</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#c2872e] bg-[#1a251d] px-2.5 py-0.5 rounded-full border border-[#c2872e]/30 font-semibold uppercase">
                    TypeScript TSX
                  </span>
                </div>

                {/* Hero Code Snippet */}
                <div className="p-4">
                  <CodeBlock
                    code={autoCodeExample}
                    language="typescript"
                    title="Quickstart Example"
                  />
                </div>

                {/* Hero Footer Meta */}
                <div className="bg-[#151f17] border-t border-slate-800/80 p-4 flex items-center justify-between font-sans text-xs text-[#9ba196]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#88c070]" />
                    <span>Inferred Encoding: <code className="text-[#c2872e] font-mono text-[11px]">month (temporal) → revenue (quantitative)</code></span>
                  </div>
                  <Link href="/playground" className="text-[#c2872e] hover:underline font-bold">
                    Open Studio Playground →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TanStack-Style "Why Vizora?" Feature Cards */}
      <section id="features" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              BUILT FOR MODERN DEVELOPERS
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
              Why developers choose Vizora over raw charting libraries?
            </h2>
            <p className="font-body-doc text-[#404641] text-base leading-relaxed">
              Traditional chart libraries require dozens of lines of SVG setup, manual scale calculations, and repetitive prop wiring. Vizora abstracts visualization logic into a typed, deterministic runtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                ⚡
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Zero-Config AutoChart
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Pass raw arrays of JSON objects directly to <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;AutoChart /&gt;</code>. Vizora profiles field data types and maps axis encodings automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                📜
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Typed ChartSpec Contract
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Decouples chart definitions from DOM rendering. Every spec is a 100% JSON-serializable, Zod-validated object easy to store in database schemas or send across HTTP APIs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                ⚙️
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Headless & SSR Safe
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">@vizora/core</code> has zero DOM or React dependencies. Computes pure vector scene-graphs suitable for Node, Edge, or server-side rendering.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                🛡️
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Pure TypeScript & Lightweight
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Written ground-up in strict TypeScript with zero heavy dependencies. Stays under 15kb gzipped for core + vector SVG renderer package.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                ♿
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Accessible Data Fallbacks
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Includes built-in accessible HTML data tables for screen reader support and WCAG compliance.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
              <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
                🧩
              </div>
              <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
                Modular npm Workspaces
              </h3>
              <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                Separates concern into modular npm packages: <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded">@core</code>, <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded">@intelligence</code>, <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded">@react</code>, and <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded">@render-svg</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TanStack-Style API & Code Inspector Showcase */}
      <section id="showcase" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#18241b]/10 pb-6">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
                API & CODE SHOWCASE
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold mt-1">
                Flexible APIs Designed For Flexibility
              </h2>
            </div>

            {/* Code Tab Selector Buttons */}
            <div className="flex items-center gap-1.5 bg-[#18241b]/8 p-1.5 rounded-full border border-[#18241b]/10 font-sans text-xs">
              <button
                onClick={() => setActiveCodeTab('auto')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all duration-200 ${
                  activeCodeTab === 'auto'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                &lt;AutoChart /&gt;
              </button>
              <button
                onClick={() => setActiveCodeTab('explicit')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all duration-200 ${
                  activeCodeTab === 'explicit'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                &lt;Chart /&gt;
              </button>
              <button
                onClick={() => setActiveCodeTab('spec')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all duration-200 ${
                  activeCodeTab === 'spec'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                ChartSpec JSON
              </button>
              <button
                onClick={() => setActiveCodeTab('profile')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all duration-200 ${
                  activeCodeTab === 'profile'
                    ? 'bg-[#18241b] text-white shadow-sm'
                    : 'text-[#60685c] hover:text-[#18241b]'
                }`}
              >
                Data Profiling
              </button>
            </div>
          </div>

          {/* Code Inspection Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="bg-[#0f1611] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                <div className="flex items-center justify-between bg-[#151f17] border-b border-slate-800/80 px-4 py-3">
                  <span className="font-mono text-xs text-[#c2872e] font-bold uppercase tracking-wider">
                    {activeCodeTab === 'auto'
                      ? 'AutoChart.tsx'
                      : activeCodeTab === 'explicit'
                      ? 'ExplicitChart.tsx'
                      : activeCodeTab === 'spec'
                      ? 'ChartSpecSchema.json'
                      : 'ProfilingEngine.ts'}
                  </span>
                  <span className="font-mono text-[10px] text-[#9ba196]">
                    {activeCodeTab === 'spec' ? 'JSON' : 'TypeScript'}
                  </span>
                </div>
                <div className="p-4">
                  {activeCodeTab === 'auto' && (
                    <CodeBlock code={autoCodeExample} language="typescript" title="AutoChart Usage" />
                  )}
                  {activeCodeTab === 'explicit' && (
                    <CodeBlock code={explicitCodeExample} language="typescript" title="Explicit Encoding Usage" />
                  )}
                  {activeCodeTab === 'spec' && (
                    <CodeBlock code={chartSpecJsonExample} language="json" title="JSON Schema Contract" />
                  )}
                  {activeCodeTab === 'profile' && (
                    <CodeBlock
                      code={`import { profileField, recommendChartSpec } from '@vizora/intelligence';

// 1. Inspect field type signatures
const monthProfile = profileField(salesData, 'month');
// Output: { field: 'month', type: 'temporal', distinctCount: 4 }

const revenueProfile = profileField(salesData, 'revenue');
// Output: { field: 'revenue', type: 'quantitative', distinctCount: 4 }

// 2. Recommend ChartSpec contract
const spec = recommendChartSpec(salesData);
// Output: { type: 'line', encoding: { x: { field: 'month' }, y: { field: 'revenue' } } }`}
                      language="typescript"
                      title="Data Profiler API"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right Information Card */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white rounded-2xl border border-[#18241b]/15 shadow-sm p-6 space-y-4">
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#c2872e]">
                  DEVELOPER EXPERIENCE
                </span>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Zero Boilerplate. Typed Contracts.
                </h3>
                <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
                  Whether you want automatic heuristics with <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded">&lt;AutoChart /&gt;</code> or explicit axis mapping with <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded">&lt;Chart /&gt;</code>, Vizora guarantees 100% type safety and SSR rendering compatibility.
                </p>
                <div className="pt-2">
                  <Link
                    href="/playground"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>TEST IN PLAYGROUND →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Supported MVP Primitives (Recharts Showcase Style) */}
      <section id="chart-types" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              SUPPORTED MVP PRIMITIVES
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
              5 Core Primitives, Zero Boilerplate
            </h2>
            <p className="font-body-doc text-[#404641] text-base leading-relaxed">
              Vizora MVP strictly focuses on perfected core chart primitives. Each primitive features explicit Zod validation, headless scene-graph resolution, and built-in screen reader accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Line */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                    TEMPORAL LINE
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="line"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Line Chart
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Maps temporal date/time fields on X and quantitative metrics on Y. Connects points with continuous vector paths.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  ≥ 1 Temporal + ≥ 1 Quantitative
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/charts/line"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Bar */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                    CATEGORICAL BAR
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="bar"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Bar Chart
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Renders vertical or horizontal column bars proportional to quantitative totals across discrete categories.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  ≥ 1 Categorical + ≥ 1 Quantitative
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/charts/bar"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Scatter */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                    BIVARIATE SCATTER
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="scatter"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Scatter Plot
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Positions data points along a Cartesian plane to reveal statistical clusters and correlation patterns.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  ≥ 2 Quantitative numeric fields
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/charts/scatter"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Histogram */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                    FREQUENCY HISTOGRAM
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="histogram"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Histogram
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Auto-bins continuous single quantitative metrics into frequency distribution bars.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  1 Quantitative metric (no dates)
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/charts/histogram"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>

            {/* Card 5: KPI Sparkline */}
            <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                    EXECUTIVE KPI
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="kpi-sparkline"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  KPI + Sparkline
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Combines headline KPI metric displays with inline trend sparkline vector paths.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  Dashboard KPI summary metrics
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/charts/kpi-sparkline"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Monorepo Architecture Package Cards (TanStack Style) */}
      <section id="architecture" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              MONOREPO ARCHITECTURE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
              Modular, Decoupled Package Ecosystem
            </h2>
            <p className="font-body-doc text-[#404641] text-base leading-relaxed">
              Vizora is structured as an npm workspace monorepo where responsibilities are strictly separated between pure spec generation, intelligence profiling, and React rendering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Package 1 */}
            <div className="bg-white border border-[#18241b]/10 rounded-2xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2.5">
                <span className="font-mono text-sm font-bold text-[#18241b]">@vizora/core</span>
                <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-bold uppercase tracking-wider">
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
                <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-bold uppercase tracking-wider">
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
                <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-bold uppercase tracking-wider">
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
                <span className="text-[10px] font-sans px-2.5 py-0.5 rounded-full bg-[#c2872e]/10 text-[#c2872e] border border-[#c2872e]/20 font-bold uppercase tracking-wider">
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

      {/* 7. API Quick Reference Tables */}
      <section id="docs" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              API REFERENCE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold mt-1">
              Component & Schema Specifications
            </h2>
          </div>

          <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#18241b] text-white px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-wider">
              &lt;AutoChart /&gt; Props API
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#18241b]/10 bg-[#18241b]/5 text-[#18241b] font-sans">
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
                    <td className="p-3.5 font-sans">Array of raw data objects to profile and visualize.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">title</td>
                    <td className="p-3.5 text-[#c2872e]">string</td>
                    <td className="p-3.5">undefined</td>
                    <td className="p-3.5 font-sans">Optional chart title header displayed above visualization.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#18241b] text-white px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-wider">
              &lt;Chart /&gt; Explicit Props API
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#18241b]/10 bg-[#18241b]/5 text-[#18241b] font-sans">
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
                    <td className="p-3.5 font-sans">Explicit chart type specification override.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">data</td>
                    <td className="p-3.5 text-[#c2872e]">Record&lt;string, unknown&gt;[]</td>
                    <td className="p-3.5">Required</td>
                    <td className="p-3.5 font-sans">Array of objects containing dataset fields.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">x</td>
                    <td className="p-3.5 text-[#c2872e]">string</td>
                    <td className="p-3.5">undefined</td>
                    <td className="p-3.5 font-sans">Field key to map onto the X axis dimension.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-[#18241b]">y</td>
                    <td className="p-3.5 text-[#c2872e]">string</td>
                    <td className="p-3.5">undefined</td>
                    <td className="p-3.5 font-sans">Field key to map onto the Y axis dimension.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner & Developer Footer */}
      <section className="py-16 bg-[#18241b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-headline-lg text-3xl sm:text-4xl font-bold text-white">
            Ready to build data visualizations with zero boilerplate?
          </h2>
          <p className="font-body-doc text-[#e0e4dc] max-w-xl mx-auto text-base">
            Start using Vizora today with React, Next.js, or pure Node.js.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/docs/getting-started"
              className="px-6 py-3.5 rounded-xl bg-[#c2872e] hover:bg-[#d99a38] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              GETTING STARTED GUIDE →
            </Link>
            <Link
              href="/playground"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-bold uppercase tracking-wider border border-white/20 transition-all"
            >
              STUDIO PLAYGROUND
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#0f1611] text-[#e0e4dc] border-t border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c2872e] to-[#d99a38] text-[#18241b] font-bold flex items-center justify-center shadow-md text-xs">
              VZ
            </div>
            <span className="font-bold text-white text-sm">Vizora Engine</span>
            <span className="text-[#9ba196]">• Framework-Agnostic Chart Runtime</span>
          </div>

          <div className="flex items-center gap-6 text-[#9ba196] font-medium">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="hover:text-white transition-colors">API Showcase</a>
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
