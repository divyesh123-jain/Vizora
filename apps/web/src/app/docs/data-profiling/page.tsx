'use client';

import React from 'react';

export default function DataProfilingPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          INTELLIGENCE MODULE
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Data Profiling & Heuristic Recommender
        </h1>
        <p className="font-body-doc text-[#404641] text-base leading-relaxed">
          How <code className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-[#18241b]/15 text-[#18241b]">@vizora/intelligence</code> inspects field data types and recommends optimal chart specs without AI hallucinations.
        </p>
      </div>

      {/* Overview Section */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
          1. Field Type Detection (`profileField`)
        </h2>
        <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
          When an array of data objects is passed to <code className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-[#18241b]/15 font-bold">recommendChartSpec(data)</code>, Vizora evaluates sample values for every key. Fields are classified into one of three primitive types:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 space-y-2 shadow-sm">
            <span className="font-bold text-[#c2872e] uppercase block">📅 Temporal</span>
            <p className="text-[#60685c] font-sans text-xs leading-relaxed">
              JavaScript <code className="font-mono text-xs">Date</code> instances or ISO-compliant date strings (e.g. <code className="font-mono text-xs">&quot;2026-01-01&quot;</code>).
            </p>
          </div>
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 space-y-2 shadow-sm">
            <span className="font-bold text-[#c2872e] uppercase block">📊 Categorical</span>
            <p className="text-[#60685c] font-sans text-xs leading-relaxed">
              Discrete, non-date string values representing labels, names, territories, or statuses.
            </p>
          </div>
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 space-y-2 shadow-sm">
            <span className="font-bold text-[#c2872e] uppercase block">🔢 Quantitative</span>
            <p className="text-[#60685c] font-sans text-xs leading-relaxed">
              Continuous or discrete numerical metrics, floats, integers, or amounts.
            </p>
          </div>
        </div>
      </div>

      {/* Heuristic Rules Matrix */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
          2. Heuristic Recommendation Table
        </h2>

        <div className="bg-white border border-[#18241b]/15 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3.5">Detected Field Signature</th>
                <th className="p-3.5">Recommended Chart</th>
                <th className="p-3.5">Behavior & Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">≥ 1 Temporal + ≥ 1 Quantitative</td>
                <td className="p-3.5 text-[#c2872e] font-bold">type=&quot;line&quot;</td>
                <td className="p-3.5">Temporal dimension is mapped to continuous X-axis time series.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">≥ 1 Categorical + ≥ 1 Quantitative</td>
                <td className="p-3.5 text-[#c2872e] font-bold">type=&quot;bar&quot;</td>
                <td className="p-3.5">Categories mapped to band scales with quantitative proportional bar lengths.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">≥ 2 Quantitative</td>
                <td className="p-3.5 text-[#c2872e] font-bold">type=&quot;scatter&quot;</td>
                <td className="p-3.5">Cartesian scatter points to reveal bivariate correlations.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-[#18241b]">1 Quantitative (No keys)</td>
                <td className="p-3.5 text-[#c2872e] font-bold">type=&quot;histogram&quot;</td>
                <td className="p-3.5">Continuous values are automatically binned into frequency intervals.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
