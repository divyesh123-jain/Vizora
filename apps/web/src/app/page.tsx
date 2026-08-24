'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { CodePlaygroundSection } from '../components/landing/CodePlaygroundSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased selection:bg-[#c2872e] selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* Subtle In-Page Quick Navigation Bar */}
      <div className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-[#18241b]/10 py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-2 text-[#60685c]">
            <span className="w-2 h-2 rounded-full bg-[#c2872e]" />
            <span className="font-bold uppercase tracking-wider text-[11px] text-[#18241b]">Page Navigation:</span>
          </div>
          <div className="flex items-center gap-6 font-medium text-[#404641]">
            <a href="#features" className="hover:text-[#c2872e] transition-colors">
              01 Problem & Solution
            </a>
            <a href="#showcase" className="hover:text-[#c2872e] transition-colors">
              02 Code & API
            </a>
            <a href="#chart-types" className="hover:text-[#c2872e] transition-colors">
              03 MVP Primitives
            </a>
            <a href="#pillars" className="hover:text-[#c2872e] transition-colors">
              04 Three Pillars
            </a>
            <a href="#packages" className="hover:text-[#c2872e] transition-colors">
              05 Packages (<span className="font-mono text-[10px] text-[#c2872e]">&lt;15kb</span>)
            </a>
          </div>
          <a
            href="#features"
            className="flex items-center gap-1 text-[11px] font-bold text-[#c2872e] hover:underline"
          >
            <span>Scroll Guide</span>
            <span>↓</span>
          </a>
        </div>
      </div>

      {/* 3. Features Section */}
      <FeaturesSection />

      {/* 4. API & Code Inspector Showcase */}
      <CodePlaygroundSection />

      {/* 5. Supported MVP Primitives */}
      <section id="chart-types" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              SUPPORTED MVP PRIMITIVES
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
              Core Primitives, Zero Boilerplate
            </h2>
            <p className="font-body-doc text-[#404641] text-base leading-relaxed">
              Vizora MVP strictly focuses on perfected core chart primitives. Each primitive features explicit runtime validation, headless scene-graph resolution, and built-in screen reader accessibility.
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
                  href="/components/line"
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
                  href="/components/bar"
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
                    BIVARIATE CORRELATION
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="scatter"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Scatter Plot
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Positions points on Cartesian coordinates to reveal clustering, non-linear relationships, and bivariate correlations.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  ≥ 2 Quantitative numeric metrics
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/components/scatter"
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
                    DISTRIBUTION DENSITY
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/8 px-2 py-0.5 rounded font-bold text-[#18241b]">
                    type="histogram"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl text-[#18241b] font-bold">
                  Histogram
                </h3>
                <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                  Automatically computes density bins and frequencies from continuous single-variable datasets.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  1 Quantitative (Auto-binned)
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/components/histogram"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>

            {/* Card 5: KPI + Sparkline */}
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
                  Condensed headline metric display with inline trend vector sparklines. Designed for executive dashboards.
                </p>
                <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-mono text-[11px] text-[#404641]">
                  <span className="font-bold font-sans text-[#18241b]">Heuristics: </span>
                  Dashboard Metric Cards
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/components/kpi-sparkline"
                  className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>

            {/* Card 6: Trading / Candlestick */}
            <div className="bg-[#111813] border border-[#2d3a30] text-[#e0e4dc] rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-[#2d3a30] pb-2">
                  <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                    FINANCIAL OHLC
                  </span>
                  <span className="font-mono text-[10px] bg-[#18221b] border border-[#2d3a30] text-[#a4c995] px-2 py-0.5 rounded font-bold">
                    type="candlestick"
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-white">
                  Candlestick Chart
                </h3>
                <p className="font-body-ui text-xs text-[#9ba196] leading-relaxed">
                  Financial market data with bullish/bearish candle wicks and volume profiles.
                </p>
                <div className="p-3 bg-[#18221b] rounded-xl border border-[#2d3a30] font-mono text-[11px] text-[#a4c995]">
                  <span className="font-bold font-sans text-white">Heuristics: </span>
                  OHLC Trading sessions
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/components/candlestick"
                  className="w-full py-2.5 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>VIEW SPECS & PROPS →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Three Pillars Callout Section */}
      <section id="pillars" className="py-16 bg-[#0f1611] text-[#e0e4dc] border-b border-[#2d3a30]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              THREE PILLARS • THE VIZORA SYSTEM
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-white font-bold">
              Browse, Play, or Build Visually
            </h2>
            <p className="font-body-doc text-[#9ba196] text-base leading-relaxed">
              Every chart across all three pillars is natively paired with its live <code className="text-[#c2872e] font-mono">ChartSpec</code> ledger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#151f17] border border-[#2d3a30] rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">Pillar 1</span>
                <h3 className="font-headline-md text-xl font-bold text-white">Component Library</h3>
                <p className="font-body-ui text-xs text-[#9ba196] leading-relaxed">
                  Browse by dashboard use-case category: Business, Trading, Statistical, Comparison, and Composition.
                </p>
              </div>
              <Link
                href="/components"
                className="px-4 py-2.5 bg-[#18221b] hover:bg-[#253329] text-white font-sans text-xs font-bold rounded-xl border border-[#2d3a30] transition-colors text-center"
              >
                Explore Components &rarr;
              </Link>
            </div>

            <div className="bg-[#151f17] border border-[#2d3a30] rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">Pillar 2</span>
                <h3 className="font-headline-md text-xl font-bold text-white">Live Playground</h3>
                <p className="font-body-ui text-xs text-[#9ba196] leading-relaxed">
                  Paste raw JSON/CSV, upload datasets, inspect Compass bearing recommendations, and sync specs in 2 directions.
                </p>
              </div>
              <Link
                href="/playground"
                className="px-4 py-2.5 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-sans text-xs font-bold rounded-xl transition-colors text-center"
              >
                Launch Studio &rarr;
              </Link>
            </div>

            <div className="bg-[#151f17] border border-[#2d3a30] rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#c2872e] font-bold uppercase">Pillar 3</span>
                <h3 className="font-headline-md text-xl font-bold text-white">Guided Builder</h3>
                <p className="font-body-ui text-xs text-[#9ba196] leading-relaxed">
                  A 6-step instrument stepper with field validation, palette customization, and immediate TypeScript component export.
                </p>
              </div>
              <Link
                href="/builder"
                className="px-4 py-2.5 bg-[#18221b] hover:bg-[#253329] text-white font-sans text-xs font-bold rounded-xl border border-[#2d3a30] transition-colors text-center"
              >
                Open Builder &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Modular Package Architecture Section */}
      <section id="packages" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              ECOSYSTEM & MONOREPO
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
              4 Specialized Packages. Zero Bloat.
            </h2>
            <p className="font-body-doc text-[#404641] text-base leading-relaxed">
              Vizora is composed of modular, decoupled packages so you only install what your application needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c2872e]">@vizora/react</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#18241b] text-white">&lt; 8kb</span>
                </div>
                <h3 className="font-headline-md font-bold text-base text-[#18241b]">React Components</h3>
                <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
                  Declarative React components: &lt;Chart /&gt;, &lt;AutoChart /&gt;, &lt;ResponsiveContainer /&gt;, tooltips, and legends.
                </p>
              </div>
              <code className="text-[11px] font-mono bg-white p-2 rounded-lg border border-[#18241b]/10 text-[#18241b]">
                npm i @vizora/react
              </code>
            </div>

            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c2872e]">@vizora/core</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#18241b] text-white">&lt; 12kb</span>
                </div>
                <h3 className="font-headline-md font-bold text-base text-[#18241b]">Pure Core Engine</h3>
                <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
                  Zero-dependency ChartSpec schema validator, coordinate scales math, and SceneGraph AST builder.
                </p>
              </div>
              <code className="text-[11px] font-mono bg-white p-2 rounded-lg border border-[#18241b]/10 text-[#18241b]">
                npm i @vizora/core
              </code>
            </div>

            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c2872e]">@vizora/intelligence</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#18241b] text-white">&lt; 3kb</span>
                </div>
                <h3 className="font-headline-md font-bold text-base text-[#18241b]">Data Profiler</h3>
                <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
                  Deterministic column profiling and heuristic recommendation without external LLM dependencies.
                </p>
              </div>
              <code className="text-[11px] font-mono bg-white p-2 rounded-lg border border-[#18241b]/10 text-[#18241b]">
                npm i @vizora/intelligence
              </code>
            </div>

            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-5 space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c2872e]">@vizora/render-svg</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#18241b] text-white">&lt; 5kb</span>
                </div>
                <h3 className="font-headline-md font-bold text-base text-[#18241b]">SVG & A11Y Renderer</h3>
                <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
                  SSR string markup compiler and semantic HTML data table fallback for WCAG 2.1 AA screen readers.
                </p>
              </div>
              <code className="text-[11px] font-mono bg-white p-2 rounded-lg border border-[#18241b]/10 text-[#18241b]">
                npm i @vizora/render-svg
              </code>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/docs/packages"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>Explore Complete Packages Guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-12 border-t border-[#18241b]/10 bg-[#f4f7f3] text-xs font-sans text-[#60685c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-headline-md font-bold text-sm text-[#18241b]">Vizora</span>
            <span>• Spec-Native Cartographic Data Visualization</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <Link href="/components" className="hover:text-[#18241b]">Components</Link>
            <Link href="/playground" className="hover:text-[#18241b]">Playground</Link>
            <Link href="/builder" className="hover:text-[#18241b]">Builder</Link>
            <Link href="/templates" className="hover:text-[#18241b]">Templates</Link>
            <Link href="/docs/packages" className="hover:text-[#18241b]">Packages</Link>
            <Link href="/docs/getting-started" className="hover:text-[#18241b]">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
