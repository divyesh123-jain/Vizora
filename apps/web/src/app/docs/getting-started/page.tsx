'use client';

import React from 'react';
import { CodeBlock } from '../../../components/CodeBlock';
import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="space-y-10">
      {/* Page Title Header */}
      <div className="border-b border-[#1e2a22]/20 pb-6 space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          GETTING STARTED
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] font-bold">
          Quickstart Guide
        </h1>
        <p className="font-body-doc text-[#434844] text-base leading-relaxed">
          Learn how to install Vizora and render your first zero-config chart in React in under 2 minutes.
        </p>
      </div>

      {/* Step 1 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1e2a22] text-[#c2872e] font-mono font-bold flex items-center justify-center text-sm">
            01
          </div>
          <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
            Install Packages
          </h2>
        </div>

        <p className="font-body-ui text-sm text-[#434844]">
          Install <code className="font-mono text-xs bg-[#f7faf5] px-1.5 py-0.5 border border-[#1e2a22]/20">@vizora/react</code> alongside <code className="font-mono text-xs bg-[#f7faf5] px-1.5 py-0.5 border border-[#1e2a22]/20">@vizora/core</code> via npm, yarn, or pnpm:
        </p>

        <CodeBlock
          code={`# Using npm
npm install @vizora/react @vizora/core

# Using pnpm
pnpm add @vizora/react @vizora/core

# Using yarn
yarn add @vizora/react @vizora/core`}
          language="bash"
          title="Terminal Installation"
        />
      </div>

      {/* Step 2 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1e2a22] text-[#c2872e] font-mono font-bold flex items-center justify-center text-sm">
            02
          </div>
          <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
            Option A: Zero-Config AutoChart
          </h2>
        </div>

        <p className="font-body-ui text-sm text-[#434844]">
          Pass any array of JSON objects to <code className="font-mono text-xs bg-[#f7faf5] px-1.5 py-0.5 border border-[#1e2a22]/20">&lt;AutoChart data=&#123;myData&#125; /&gt;</code>. Vizora automatically profiles field data types and infers the correct chart type.
        </p>

        <CodeBlock
          code={`import React from 'react';
import { AutoChart } from '@vizora/react';

const salesData = [
  { region: 'North America', sales: 12500 },
  { region: 'Europe', sales: 9800 },
  { region: 'Asia Pacific', sales: 14200 },
  { region: 'Latin America', sales: 6100 },
];

export function SalesOverviewWidget() {
  return (
    <div className="p-4 border rounded">
      <AutoChart data={salesData} title="Q1 Sales Breakdown" />
    </div>
  );
}`}
          language="typescript"
          title="AutoChartExample.tsx"
        />
      </div>

      {/* Step 3 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#1e2a22] text-[#c2872e] font-mono font-bold flex items-center justify-center text-sm">
            03
          </div>
          <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
            Option B: Explicit Encoding Component
          </h2>
        </div>

        <p className="font-body-ui text-sm text-[#434844]">
          When you want explicit control over chart type and axis bindings, use <code className="font-mono text-xs bg-[#f7faf5] px-1.5 py-0.5 border border-[#1e2a22]/20">&lt;Chart /&gt;</code>:
        </p>

        <CodeBlock
          code={`import React from 'react';
import { Chart } from '@vizora/react';

const stockData = [
  { date: '2026-01-01', price: 145.2 },
  { date: '2026-01-02', price: 149.8 },
  { date: '2026-01-03', price: 152.4 },
];

export function StockChart() {
  return (
    <Chart
      type="line"
      data={stockData}
      x="date"
      y="price"
      title="AAPL Stock Price"
    />
  );
}`}
          language="typescript"
          title="ExplicitChartExample.tsx"
        />
      </div>

      {/* Next Steps Links */}
      <div className="p-6 bg-[#f7faf5] border border-[#1e2a22] space-y-4">
        <h3 className="font-headline-md text-lg font-bold text-[#1e2a22]">
          Next Steps & Exploration
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
          <Link
            href="/docs/data-profiling"
            className="p-3 bg-white border border-[#1e2a22]/20 hover:border-[#c2872e] transition-colors"
          >
            <div className="font-bold text-[#1e2a22]">🔍 Data Profiling Rules →</div>
            <div className="text-[#6e756a] mt-1">Learn how Vizora infers chart types automatically.</div>
          </Link>
          <Link
            href="/docs/chart-spec"
            className="p-3 bg-white border border-[#1e2a22]/20 hover:border-[#c2872e] transition-colors"
          >
            <div className="font-bold text-[#1e2a22]">📜 ChartSpec JSON Contract →</div>
            <div className="text-[#6e756a] mt-1">Understand the JSON specification schema.</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
