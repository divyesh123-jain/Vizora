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

export const CodePlaygroundSection: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'auto' | 'explicit' | 'spec' | 'profile'>('auto');

  return (
    <section id="showcase" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#18241b]/10 pb-6">
          <div>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
              API & CODE SHOWCASE
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold mt-1">
              Flexible APIs Designed For Flexibility
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-[#18241b]/8 p-1.5 rounded-2xl sm:rounded-full border border-[#18241b]/10 font-sans text-xs">
            <button
              onClick={() => setActiveCodeTab('auto')}
              className={`px-3.5 py-1.5 rounded-full font-bold transition-all duration-200 ${
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
  );
};
