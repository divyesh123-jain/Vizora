'use client';

import React from 'react';
import Link from 'next/link';
import { CodeBlock } from '../../../components/CodeBlock';
import { Chart } from '@vizora/react';
import { ChartPreviewBlock } from '../../../components/ChartPreviewBlock';

export default function BuildWithVizoraPage() {
  const basicLineData = [
    { month: '2026-01-01', revenue: 42000, users: 1200 },
    { month: '2026-02-01', revenue: 58000, users: 1450 },
    { month: '2026-03-01', revenue: 84000, users: 1890 },
    { month: '2026-04-01', revenue: 110000, users: 2400 },
    { month: '2026-05-01', revenue: 145000, users: 3100 },
  ];

  const rankingBarData = [
    { team: 'Platform Infrastructure', tasks: 142 },
    { team: 'Core Runtime Engine', tasks: 118 },
    { team: 'Design Systems', tasks: 94 },
    { team: 'Security & Auth', tasks: 62 },
    { team: 'Developer Experience', tasks: 48 },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
            DEVELOPER GUIDE
          </span>
          <span className="font-mono text-xs text-[#60685c]">
            Comprehensive Code Walkthrough
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Build with Vizora
        </h1>
        <p className="font-body-doc text-sm text-[#404641] max-w-3xl leading-relaxed">
          Learn how to build, customize, and compose production-grade data visualizations entirely in code using Vizora&apos;s modular npm packages.
        </p>
      </div>

      {/* 0. Mental Model */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">00.</span>
          <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
            The Vizora Mental Model
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          Traditional chart libraries either force you to manipulate imperatively fragile D3 selections, or give you inflexible black-box widgets that fight your design system. Vizora separates visualization into three distinct, deterministic tiers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 font-mono text-xs">
          <div className="p-3.5 bg-white border border-[#18241b]/15 rounded-[2px] space-y-1">
            <span className="text-[#c2872e] font-bold block">1. The Contract</span>
            <div className="text-[#18241b] font-bold">ChartSpec JSON</div>
            <p className="text-[11px] text-[#60685c] leading-relaxed">
              A 100% serializable, validated description of data, encodings, scales, and themes.
            </p>
          </div>

          <div className="p-3.5 bg-white border border-[#18241b]/15 rounded-[2px] space-y-1">
            <span className="text-[#c2872e] font-bold block">2. Headless Layout</span>
            <div className="text-[#18241b] font-bold">@vizora/core</div>
            <p className="text-[11px] text-[#60685c] leading-relaxed">
              Transforms specs into abstract scene graph trees. Zero React, zero DOM, runs anywhere.
            </p>
          </div>

          <div className="p-3.5 bg-white border border-[#18241b]/15 rounded-[2px] space-y-1">
            <span className="text-[#c2872e] font-bold block">3. Pure SVG Render</span>
            <div className="text-[#18241b] font-bold">@vizora/react</div>
            <p className="text-[11px] text-[#60685c] leading-relaxed">
              Paints the scene graph to clean, accessible SVG with zero hydration layout shifts.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Installation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">01.</span>
          <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
            Install the Packages
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641]">
          Install the official React adapter and Core engine. You can also optionally install the intelligence profiling package for automatic heuristic detection:
        </p>

        <CodeBlock
          code={`npm install @vizora/react @vizora/core
# Optional data profiling & automatic recommendation:
npm install @vizora/intelligence`}
          language="bash"
          title="Terminal Installation"
        />
      </section>

      {/* 2. Building Your First Chart with <Chart /> */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">02.</span>
          <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
            Creating Explicit Charts with &lt;Chart /&gt;
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          The <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-[2px]">&lt;Chart /&gt;</code> component accepts an array of JSON objects and maps data keys directly to coordinate dimensions:
        </p>

        <ChartPreviewBlock
          title="Monthly Recurring Revenue Trend"
          codeSnippet={`import React from 'react';
import { Chart } from '@vizora/react';

const mrrData = [
  { month: '2026-01-01', revenue: 42000 },
  { month: '2026-02-01', revenue: 58000 },
  { month: '2026-03-01', revenue: 84000 },
  { month: '2026-04-01', revenue: 110000 },
  { month: '2026-05-01', revenue: 145000 },
];

export function MonthlyRevenueChart() {
  return (
    <Chart
      type="line"
      data={mrrData}
      x="month"
      y="revenue"
      title="SaaS MRR Progression"
      theme="zinc"
      showGrid={true}
    />
  );
}`}
          dataCount={basicLineData.length}
          spec={{
            type: 'line',
            encoding: { x: { field: 'month' }, y: { field: 'revenue' } },
            data: basicLineData,
          }}
        >
          <div className="h-60 p-2 flex items-center justify-center">
            <Chart
              type="line"
              data={basicLineData}
              x="month"
              y="revenue"
              title="SaaS MRR Progression"
              theme="zinc"
            />
          </div>
        </ChartPreviewBlock>
      </section>

      {/* 3. Customizing Orientations, Themes, and Overrides */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">03.</span>
          <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
            Horizontal Rankings & Custom Palette Swatches
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          For categorical comparison rankings with long labels, switch orientation to <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">horizontal</code> and apply custom hex color overrides:
        </p>

        <ChartPreviewBlock
          title="Team Sprint Velocity Ranking"
          codeSnippet={`import React from 'react';
import { Chart } from '@vizora/react';

const teamData = [
  { team: 'Platform Infrastructure', tasks: 142 },
  { team: 'Core Runtime Engine', tasks: 118 },
  { team: 'Design Systems', tasks: 94 },
  { team: 'Security & Auth', tasks: 62 },
  { team: 'Developer Experience', tasks: 48 },
];

export function TeamVelocityRanking() {
  return (
    <Chart
      type="bar"
      data={teamData}
      x="team"
      y="tasks"
      orientation="horizontal"
      color="#c2872e"
      title="Sprint Velocity Ranking"
    />
  );
}`}
          dataCount={rankingBarData.length}
          spec={{
            type: 'bar',
            encoding: { x: { field: 'team' }, y: { field: 'tasks' }, orientation: 'horizontal' },
            data: rankingBarData,
          }}
        >
          <div className="h-60 p-2 flex items-center justify-center">
            <Chart
              type="bar"
              data={rankingBarData}
              x="team"
              y="tasks"
              orientation="horizontal"
              color="#c2872e"
              title="Sprint Velocity Ranking"
            />
          </div>
        </ChartPreviewBlock>
      </section>

      {/* 4. Headless Scene Graph Compilation (Node / SSR) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">04.</span>
          <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
            Headless Server-Side Rendering (Node / Edge / CLI)
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          Because <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-[2px]">@vizora/core</code> is completely framework-agnostic, you can validate specs, build scene graphs, and generate raw standalone SVG strings on a Node server or CLI tool without mounting a browser DOM:
        </p>

        <CodeBlock
          code={`import { validateChartSpec, buildSceneGraph } from '@vizora/core';
import { renderSceneToSvgString, renderAccessibleTable } from '@vizora/render-svg';

// 1. Define and validate the ChartSpec contract
const rawSpec = {
  version: '0.1.0',
  type: 'line',
  title: 'Automated Daily Health Report',
  data: [
    { timestamp: '2026-02-18', p99: 42 },
    { timestamp: '2026-02-19', p99: 38 },
  ],
  encoding: {
    x: { field: 'timestamp' },
    y: { field: 'p99' },
  },
};

const spec = validateChartSpec(rawSpec);

// 2. Headless Scene Graph Resolution (spec -> scene graph)
const scene = buildSceneGraph(spec, {
  width: 800,
  height: 450,
  margin: { top: 40, right: 30, bottom: 40, left: 50 },
});

// 3. Serialize directly to standalone SVG markup string
const svgString = renderSceneToSvgString(scene);

// 4. Generate accessible semantic HTML table fallback (NFR-5)
const accessibleTableHtml = renderAccessibleTable(spec);`}
          language="typescript"
          title="server-render-example.ts"
        />
      </section>

      {/* 5. Composing KPI Summaries & Micro Sparklines */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e]">05.</span>
          <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
            Building Composite Dashboard Cards
          </h2>
        </div>

        <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
          Combine headline metric cards with micro trend sparklines using the <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">kpi-sparkline</code> primitive:
        </p>

        <CodeBlock
          code={`import React from 'react';
import { Chart } from '@vizora/react';

export function ExecutiveMetricsBoard() {
  const metricData = [
    { day: 'Mon', count: 120 },
    { day: 'Tue', count: 145 },
    { day: 'Wed', count: 190 },
    { day: 'Thu', count: 240 },
    { day: 'Fri', count: 310 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="p-4 bg-white border border-[#18241b]/15 rounded-[2px]">
        <span className="font-mono text-xs text-[#60685c]">Daily Signups</span>
        <Chart
          type="kpi-sparkline"
          data={metricData}
          x="day"
          y="count"
          color="#c2872e"
        />
      </div>
    </div>
  );
}`}
          language="typescript"
          title="CompositeDashboard.tsx"
        />
      </section>

      {/* Next Navigation */}
      <div className="p-5 bg-white border border-[#18241b]/15 rounded-[2px] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-headline-md text-base font-bold text-[#18241b]">
            Explore the API Reference
          </h3>
          <p className="font-body-ui text-xs text-[#60685c] mt-0.5">
            Read complete TypeScript props, hook signatures, and export tables.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <Link
            href="/docs/api"
            className="px-3.5 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-bold rounded-[2px] transition-colors"
          >
            API Reference &rarr;
          </Link>
          <Link
            href="/playground"
            className="px-3.5 py-1.5 bg-white border border-[#18241b]/20 hover:border-[#18241b] text-[#18241b] font-bold rounded-[2px] transition-colors"
          >
            Open Playground
          </Link>
        </div>
      </div>
    </div>
  );
}
