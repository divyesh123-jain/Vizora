'use client';

import React from 'react';

export default function ApiReferencePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          API REFERENCE
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Package Exports Reference
        </h1>
        <p className="font-body-doc text-[#404641] text-base leading-relaxed">
          Comprehensive API specification across all monorepo npm packages.
        </p>
      </div>

      {/* Package 1: @vizora/react */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
          <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
            1. @vizora/react
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#c2872e]/10 px-2.5 py-0.5 rounded-full border border-[#c2872e]/20 font-bold">
            React Adapter
          </span>
        </div>

        <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3.5">Exported Symbol</th>
                <th className="p-3.5">Kind</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">&lt;AutoChart /&gt;</td>
                <td className="p-3.5 text-[#c2872e]">React.FC&lt;AutoChartProps&gt;</td>
                <td className="p-3.5">Zero-config component that profiles data and renders optimal SVG chart.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">&lt;Chart /&gt;</td>
                <td className="p-3.5 text-[#c2872e]">React.FC&lt;ChartProps&gt;</td>
                <td className="p-3.5">Explicit chart component accepting type, x, y, and color props.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">useChartSpec()</td>
                <td className="p-3.5 text-[#c2872e]">Custom Hook</td>
                <td className="p-3.5">React hook that memoizes ChartSpec resolution for data props.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Package 2: @vizora/core */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
          <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
            2. @vizora/core
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#c2872e]/10 px-2.5 py-0.5 rounded-full border border-[#c2872e]/20 font-bold">
            Core Engine (Zero React)
          </span>
        </div>

        <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3.5">Function / Schema</th>
                <th className="p-3.5">Kind</th>
                <th className="p-3.5">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">validateChartSpec()</td>
                <td className="p-3.5 text-[#c2872e]">Function</td>
                <td className="p-3.5">Validates an unknown JS object against the Zod ChartSpec contract.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">buildSceneGraph()</td>
                <td className="p-3.5 text-[#c2872e]">Function</td>
                <td className="p-3.5">Transforms a validated ChartSpec into an abstract headless scene graph tree.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
