'use client';

import React from 'react';
import Link from 'next/link';
import { CodeBlock } from '../../../components/CodeBlock';

export default function DataProfilingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
            DATA INTELLIGENCE
          </span>
          <span className="font-mono text-xs text-[#60685c]">
            Deterministic Heuristics Engine
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Data Profiling & Heuristic Rules
        </h1>
        <p className="font-body-doc text-sm text-[#404641] max-w-3xl leading-relaxed">
          Vizora does not require complex configuration files. Its deterministic data profiling engine scans your dataset and chooses the mathematically appropriate chart representation.
        </p>
      </div>

      {/* Inference Rules */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Deterministic Type Inference Rules
        </h2>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3">Detected Pattern</th>
                <th className="p-3">Inferred Type</th>
                <th className="p-3">Recommended Bearing</th>
                <th className="p-3">Layout Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3 font-bold text-[#18241b]">ISO-8601 Date / Timestamp + Numeric Metric</td>
                <td className="p-3 text-[#c2872e]">temporal + quantitative</td>
                <td className="p-3 font-bold">Line / Area</td>
                <td className="p-3 text-[11px]">Time-scale linear interpolation with gradient volume fill.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">Discrete Strings + Numeric Metric (&le; 12 items)</td>
                <td className="p-3 text-[#c2872e]">categorical + quantitative</td>
                <td className="p-3 font-bold">Vertical Bar</td>
                <td className="p-3 text-[11px]">Band-scale categorical discrete columns with uniform padding.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">Discrete Strings + Numeric Metric (&gt; 12 items)</td>
                <td className="p-3 text-[#c2872e]">categorical + quantitative</td>
                <td className="p-3 font-bold">Horizontal Bar</td>
                <td className="p-3 text-[11px]">High-cardinality ranking bars for readability of long labels.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">Two Continuous Numeric Metrics</td>
                <td className="p-3 text-[#c2872e]">quantitative + quantitative</td>
                <td className="p-3 font-bold">Scatter Plot</td>
                <td className="p-3 text-[11px]">Dual linear scales mapping bivariate correlation dots.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">Single Continuous Numeric Metric</td>
                <td className="p-3 text-[#c2872e]">quantitative</td>
                <td className="p-3 font-bold">Histogram</td>
                <td className="p-3 text-[11px]">Statistical Sturges binning frequency distribution.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Programmatic Profiling API */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Using the Profiler in Your Own Code
        </h2>

        <p className="font-body-ui text-xs text-[#404641]">
          You can use <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">profileField()</code> and <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">recommendChartSpec()</code> from <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">@vizora/intelligence</code> directly:
        </p>

        <CodeBlock
          code={`import { profileField, recommendChartSpec, scoreChartRecommendations } from '@vizora/intelligence';

const rawData = [
  { timestamp: '2026-01-01', revenue: 45000, region: 'US' },
  { timestamp: '2026-02-01', revenue: 62000, region: 'EU' },
];

// 1. Profile an individual field
const profile = profileField(rawData, 'timestamp');
console.log(profile);
// -> { field: 'timestamp', type: 'temporal', distinctCount: 2 }

// 2. Recommend complete ChartSpec automatically
const spec = recommendChartSpec(rawData);
console.log(spec.type);
// -> 'line'

// 3. Inspect ranked candidate scores
const scores = scoreChartRecommendations(rawData);
console.log(scores);
// -> [
//   { type: 'line', score: 95, reason: "Temporal field 'timestamp' ..." },
//   { type: 'bar', score: 88, ... }
// ]`}
          language="typescript"
          title="profiler-usage-example.ts"
        />
      </section>

      {/* Navigation */}
      <div className="p-5 bg-white border border-[#18241b]/15 rounded-[2px] flex items-center justify-between">
        <div>
          <h3 className="font-headline-md text-sm font-bold text-[#18241b]">
            Next: Theming & Color Tokens
          </h3>
          <p className="font-body-ui text-xs text-[#60685c]">
            Learn how the 6-token cartography palette styles your visualizations.
          </p>
        </div>
        <Link
          href="/docs/theming"
          className="px-3.5 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold rounded-[2px] transition-colors"
        >
          Theming Guide &rarr;
        </Link>
      </div>
    </div>
  );
}
