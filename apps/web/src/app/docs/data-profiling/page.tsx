'use client';

import React from 'react';
import { CodeBlock } from '../../../components/CodeBlock';

export default function DataProfilingPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          INTELLIGENCE MODULE
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] font-bold">
          Data Profiling & Heuristic Recommender
        </h1>
        <p className="font-body-doc text-[#434844] text-base leading-relaxed">
          How <code className="font-mono text-xs bg-[#f7faf5] px-1 py-0.5 border border-[#1e2a22]/20">@vizora/intelligence</code> inspects field data types and recommends optimal chart specs without AI hallucinations.
        </p>
      </div>

      {/* Overview Section */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
          1. Field Type Detection (`profileField`)
        </h2>
        <p className="font-body-ui text-sm text-[#434844] leading-relaxed">
          When an array of data objects is passed to <code className="font-mono text-xs bg-[#f7faf5] px-1 font-bold">recommendChartSpec(data)</code>, Vizora evaluates sample values for every key in the first record. Fields are classified into one of three primitive types:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="bg-[#f7faf5] border border-[#1e2a22] p-4 space-y-2">
            <span className="font-bold text-[#c2872e] uppercase">📅 Temporal</span>
            <p className="text-[#434844] font-sans text-xs">
              JavaScript <code className="font-mono text-xs">Date</code> instances or ISO-compliant date strings (e.g. <code className="font-mono text-xs">"2026-01-01"</code>).
            </p>
          </div>
          <div className="bg-[#f7faf5] border border-[#1e2a22] p-4 space-y-2">
            <span className="font-bold text-[#c2872e] uppercase">📊 Categorical</span>
            <p className="text-[#434844] font-sans text-xs">
              Discrete, non-date string values representing labels, names, territories, or statuses.
            </p>
          </div>
          <div className="bg-[#f7faf5] border border-[#1e2a22] p-4 space-y-2">
            <span className="font-bold text-[#c2872e] uppercase">🔢 Quantitative</span>
            <p className="text-[#434844] font-sans text-xs">
              Continuous or discrete numerical metrics, floats, integers, or amounts.
            </p>
          </div>
        </div>
      </div>

      {/* Heuristic Rules Matrix */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
          2. Heuristic Recommendation Table
        </h2>

        <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1e2a22]/20 bg-[#1e2a22] text-[#ecefea]">
                <th className="p-3">Detected Field Profile</th>
                <th className="p-3">Recommended Chart</th>
                <th className="p-3">Inferred Encodings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2a22]/10 text-[#434844]">
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">≥ 1 Temporal + ≥ 1 Quantitative</td>
                <td className="p-3 text-[#c2872e] font-bold">Line Chart</td>
                <td className="p-3">X = Temporal, Y = Quantitative</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">≥ 1 Categorical + ≥ 1 Quantitative</td>
                <td className="p-3 text-[#c2872e] font-bold">Bar Chart</td>
                <td className="p-3">X = Categorical, Y = Quantitative</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">≥ 2 Quantitative Fields</td>
                <td className="p-3 text-[#c2872e] font-bold">Scatter Plot</td>
                <td className="p-3">X = Quant 1, Y = Quant 2</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#1e2a22]">1 Quantitative (No Cat/Temp)</td>
                <td className="p-3 text-[#c2872e] font-bold">Histogram</td>
                <td className="p-3">X = Quant (Auto-Binned)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
          3. Standalone Intelligence API Usage
        </h2>

        <CodeBlock
          code={`import { profileField, recommendChartSpec } from '@vizora/intelligence';

const rawData = [
  { timestamp: '2026-01-01T00:00:00Z', cpuLoad: 42.5 },
  { timestamp: '2026-01-01T01:00:00Z', cpuLoad: 58.1 },
];

// Profile individual field
const profile = profileField(rawData, 'timestamp');
console.log(profile); 
// Output: { field: 'timestamp', type: 'temporal', distinctCount: 2 }

// Generate full recommended spec
const spec = recommendChartSpec(rawData);
console.log(spec.type); // 'line'`}
          language="typescript"
          title="IntelligenceAPI.ts"
        />
      </div>
    </div>
  );
}
