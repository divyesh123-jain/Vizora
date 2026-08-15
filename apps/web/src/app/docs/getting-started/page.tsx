'use client';

import React from 'react';
import { CodeBlock } from '../../../components/CodeBlock';
import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="space-y-10">
      {/* Page Title Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          GETTING STARTED
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Quickstart Guide
        </h1>
        <p className="font-body-doc text-[#404641] text-base leading-relaxed">
          Learn how to install Vizora and render your first zero-config chart in React in under 2 minutes.
        </p>
      </div>

      {/* Step 1 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#18241b] text-[#c2872e] font-sans font-bold flex items-center justify-center text-sm shadow-sm">
            01
          </div>
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            Install Packages
          </h2>
        </div>

        <p className="font-body-ui text-sm text-[#404641]">
          Install <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">@vizora/react</code> alongside <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">@vizora/core</code> via npm, yarn, or pnpm:
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
          <div className="w-8 h-8 rounded-xl bg-[#18241b] text-[#c2872e] font-sans font-bold flex items-center justify-center text-sm shadow-sm">
            02
          </div>
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            Option A: Zero-Config AutoChart
          </h2>
        </div>

        <p className="font-body-ui text-sm text-[#404641]">
          Pass any array of JSON objects to <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;AutoChart data=&#123;myData&#125; /&gt;</code>. Vizora automatically profiles field data types and infers the correct chart type.
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
          <div className="w-8 h-8 rounded-xl bg-[#18241b] text-[#c2872e] font-sans font-bold flex items-center justify-center text-sm shadow-sm">
            03
          </div>
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            Option B: Explicit Encoding Component
          </h2>
        </div>

        <p className="font-body-ui text-sm text-[#404641]">
          When you want explicit control over chart type and axis bindings, use <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;Chart /&gt;</code>:
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
      title="Stock Price History"
    />
  );
}`}
          language="typescript"
          title="ExplicitChartExample.tsx"
        />
      </div>

      {/* Next Steps Card */}
      <div className="p-6 bg-white/80 rounded-2xl border border-[#18241b]/15 shadow-sm space-y-3">
        <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
          Next Steps & Exploration
        </h3>
        <p className="font-body-ui text-sm text-[#404641]">
          Deepen your understanding of Vizora's architecture and typed spec model:
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/docs/chart-spec"
            className="px-4 py-2 rounded-xl bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            READ CHARTSPEC CONTRACT →
          </Link>
          <Link
            href="/playground"
            className="px-4 py-2 rounded-xl bg-[#c2872e] hover:bg-[#d99a38] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            OPEN STUDIO PLAYGROUND →
          </Link>
        </div>
      </div>
    </div>
  );
}
