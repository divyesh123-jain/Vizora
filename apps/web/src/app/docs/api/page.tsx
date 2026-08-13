'use client';

import React from 'react';

export default function ApiReferencePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#1e2a22]/20 pb-6 space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          API REFERENCE
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] font-bold">
          Package Exports Reference
        </h1>
        <p className="font-body-doc text-[#434844] text-base leading-relaxed">
          Comprehensive API specification across all monorepo npm packages.
        </p>
      </div>

      {/* Package 1: @vizora/react */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
          <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
            1. @vizora/react
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#ecefea] px-2 py-0.5 border border-[#1e2a22]/20">
            React Adapter
          </span>
        </div>

        <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1e2a22]/20 bg-[#1e2a22] text-[#ecefea]">
                <th className="p-3">Exported Symbol</th>
                <th className="p-3">Kind</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2a22]/10 text-[#434844]">
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">&lt;AutoChart /&gt;</td>
                <td className="p-3 text-[#c2872e]">React.FC&lt;AutoChartProps&gt;</td>
                <td className="p-3">Zero-config component that profiles data and renders optimal SVG chart.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">&lt;Chart /&gt;</td>
                <td className="p-3 text-[#c2872e]">React.FC&lt;ChartProps&gt;</td>
                <td className="p-3">Explicit chart component accepting type, x, y, and color props.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">useChartSpec()</td>
                <td className="p-3 text-[#c2872e]">Custom Hook</td>
                <td className="p-3">React hook that memoizes ChartSpec resolution for data props.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Package 2: @vizora/intelligence */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
          <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
            2. @vizora/intelligence
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#ecefea] px-2 py-0.5 border border-[#1e2a22]/20">
            Profiling Engine
          </span>
        </div>

        <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1e2a22]/20 bg-[#1e2a22] text-[#ecefea]">
                <th className="p-3">Exported Function</th>
                <th className="p-3">Signature</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2a22]/10 text-[#434844]">
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">recommendChartSpec()</td>
                <td className="p-3 text-[#c2872e]">(data: Record&lt;string, unknown&gt;[]) =&gt; ChartSpec</td>
                <td className="p-3">Evaluates field data types and returns inferred ChartSpec.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">profileField()</td>
                <td className="p-3 text-[#c2872e]">(data, field) =&gt; FieldProfile</td>
                <td className="p-3">Inspects a single field name and returns temporal/categorical/quantitative classification.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Package 3: @vizora/render-svg */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-2">
          <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
            3. @vizora/render-svg
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#ecefea] px-2 py-0.5 border border-[#1e2a22]/20">
            SVG Renderer
          </span>
        </div>

        <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1e2a22]/20 bg-[#1e2a22] text-[#ecefea]">
                <th className="p-3">Exported Function</th>
                <th className="p-3">Signature</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2a22]/10 text-[#434844]">
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">renderSceneGraphToSVGString()</td>
                <td className="p-3 text-[#c2872e]">(scene: SceneGraph) =&gt; string</td>
                <td className="p-3">Converts scene graph tree into SVG string.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
