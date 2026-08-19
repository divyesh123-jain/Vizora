'use client';

import React from 'react';
import Link from 'next/link';
import { CodeBlock } from '../../../components/CodeBlock';
import { ChartPreviewBlock } from '../../../components/ChartPreviewBlock';
import { Chart } from '@vizora/react';

export default function GettingStartedPage() {
  const sampleData = [
    { region: 'North America', sales: 12500 },
    { region: 'Europe', sales: 9800 },
    { region: 'Asia Pacific', sales: 14200 },
    { region: 'Latin America', sales: 6100 },
  ];

  return (
    <div className="space-y-12">
      {/* Page Title Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
            GETTING STARTED
          </span>
          <span className="font-mono text-xs text-[#60685c]">
            Quickstart in Under 2 Minutes
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Quickstart Guide
        </h1>
        <p className="font-body-doc text-sm text-[#404641] max-w-3xl leading-relaxed">
          Learn how to install Vizora and render your first zero-config chart in React with SSR-safe deterministic SVG output.
        </p>
      </div>

      {/* Step 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">01.</span>
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            Install Packages
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641]">
          Install <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-[2px]">@vizora/react</code> alongside <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-[2px]">@vizora/core</code> via your package manager of choice:
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
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">02.</span>
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            Option A: Zero-Config AutoChart
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          Pass any array of JSON objects to <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-[2px]">&lt;AutoChart data=&#123;myData&#125; /&gt;</code>. Vizora profiles field data types and infers the optimal chart bearing automatically:
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
    <div className="p-4 bg-white border border-[#18241b]/15 rounded-[2px]">
      <AutoChart data={salesData} title="Q1 Regional Sales" />
    </div>
  );
}`}
          language="typescript"
          title="AutoChartExample.tsx"
        />
      </section>

      {/* Step 3 */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">03.</span>
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            Option B: Explicit Encoding Component
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          When you want deterministic control over chart type and axis bindings, use the <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-[2px]">&lt;Chart /&gt;</code> component:
        </p>

        <ChartPreviewBlock
          title="Explicit Regional Sales Bar Chart"
          codeSnippet={`import React from 'react';
import { Chart } from '@vizora/react';

const salesData = [
  { region: 'North America', sales: 12500 },
  { region: 'Europe', sales: 9800 },
  { region: 'Asia Pacific', sales: 14200 },
  { region: 'Latin America', sales: 6100 },
];

export function ExplicitSalesChart() {
  return (
    <Chart
      type="bar"
      data={salesData}
      x="region"
      y="sales"
      title="Regional Sales Distribution"
      theme="zinc"
      showGrid={true}
    />
  );
}`}
          dataCount={sampleData.length}
          spec={{
            type: 'bar',
            encoding: { x: { field: 'region' }, y: { field: 'sales' } },
            data: sampleData,
          }}
        >
          <div className="h-60 p-2 flex items-center justify-center">
            <Chart
              type="bar"
              data={sampleData}
              x="region"
              y="sales"
              title="Regional Sales Distribution"
              theme="zinc"
            />
          </div>
        </ChartPreviewBlock>
      </section>

      {/* Next Steps Card */}
      <div className="p-5 bg-white border border-[#18241b]/15 rounded-[2px] space-y-3">
        <h3 className="font-headline-md text-base font-bold text-[#18241b]">
          Ready to Build Custom Visualizations?
        </h3>
        <p className="font-body-ui text-xs text-[#404641]">
          Read our in-depth developer guide on composing complex layouts, custom themes, and server-side SVG rendering:
        </p>
        <div className="flex flex-wrap gap-2.5 pt-1 font-mono text-xs">
          <Link
            href="/docs/build-with-vizora"
            className="px-3.5 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-bold rounded-[2px] transition-colors"
          >
            BUILD WITH VIZORA GUIDE &rarr;
          </Link>
          <Link
            href="/docs/chart-spec"
            className="px-3.5 py-1.5 bg-white border border-[#18241b]/20 hover:border-[#18241b] text-[#18241b] font-bold rounded-[2px] transition-colors"
          >
            READ CHARTSPEC CONTRACT
          </Link>
          <Link
            href="/playground"
            className="px-3.5 py-1.5 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-bold uppercase tracking-wider rounded-[2px] transition-colors"
          >
            OPEN STUDIO PLAYGROUND
          </Link>
        </div>
      </div>
    </div>
  );
}
