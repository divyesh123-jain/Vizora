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

      {/* 6. Monorepo Architecture Package Cards */}
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

      {/* 7. Call to Action Banner & Developer Footer */}
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
          </div>

          <div className="text-[#60685c] text-[11px]">
            © {new Date().getFullYear()} Vizora. Open source software under MVP spec.
          </div>
        </div>
      </footer>
    </div>
  );
}
