import React, { useState } from 'react';
import Link from 'next/link';
import { CodeBlock } from '../CodeBlock';

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

export const HeroSection: React.FC = () => {
  const [copiedHeroInstall, setCopiedHeroInstall] = useState<boolean>(false);

  const handleCopyHeroInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedHeroInstall(true);
    setTimeout(() => setCopiedHeroInstall(false), 2000);
  };

  return (
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

          {/* Right Hero Code Window */}
          <div className="lg:col-span-6">
            <div className="bg-[#0f1611] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
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

              <div className="p-4">
                <CodeBlock
                  code={autoCodeExample}
                  language="typescript"
                  title="Quickstart Example"
                />
              </div>

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
  );
};
