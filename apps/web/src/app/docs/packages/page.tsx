'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CodeBlock } from '../../../components/CodeBlock';

interface PackageInfo {
  name: string;
  npmCommand: string;
  role: string;
  badge: string;
  bundleSize: string;
  runtime: string;
  description: string;
  keyExports: string[];
  codeExample: string;
}

const PACKAGES: PackageInfo[] = [
  {
    name: '@vizora/react',
    npmCommand: 'npm install @vizora/react @vizora/core',
    role: 'React Component Library & Hook Suite',
    badge: 'Primary Package',
    bundleSize: '< 8kb (gzipped)',
    runtime: 'React 18+ (Client & SSR)',
    description:
      'The developer-facing component layer. Provides declarative React wrappers including <Chart />, zero-config <AutoChart />, <ResponsiveContainer />, dynamic tooltips, and accessibility table overlays. Automatically resolves ChartSpec into vector SVG scenes without manual scale wiring.',
    keyExports: [
      '<Chart /> — Explicit-encoding chart primitive',
      '<AutoChart /> — Heuristic zero-config auto-profiling component',
      '<ResponsiveContainer /> — Aspect-ratio aware SVG wrapper',
      '<ChartTooltip /> — Interactive hover datum inspector',
      '<ChartLegend /> — Series color swatches & filter controls',
      '<ChartEmptyState /> & <ChartErrorFallback /> — Resilient fallback states',
    ],
    codeExample: `import React from 'react';
import { Chart, AutoChart } from '@vizora/react';

const dataset = [
  { quarter: 'Q1', revenue: 45000 },
  { quarter: 'Q2', revenue: 62000 },
  { quarter: 'Q3', revenue: 89000 },
];

export function AnalyticsWidget() {
  return (
    // Explicit declarative mapping:
    <Chart
      type="bar"
      data={dataset}
      x="quarter"
      y="revenue"
      theme="cartography"
      title="Quarterly Revenue"
    />
  );
}`,
  },
  {
    name: '@vizora/core',
    npmCommand: 'npm install @vizora/core',
    role: 'Framework-Agnostic Layout Engine & Scene Graph',
    badge: 'Core Runtime',
    bundleSize: '< 12kb (gzipped)',
    runtime: 'Universal (Node.js, Browser, Edge, Workers)',
    description:
      'The pure TypeScript heart of Vizora with zero runtime dependencies (and zero React dependency). Defines the Zod-validated ChartSpec contract, computes numerical and temporal coordinate scales (linear, band, time, ordinal), evaluates data transforms, and builds the intermediate SceneGraph AST.',
    keyExports: [
      'ChartSpec — Typed JSON-serializable chart specification schema',
      'validateChartSpec() — Runtime Zod validation against contract',
      'buildSceneGraph(spec, options) — Compiles spec + data into Scene AST',
      'createLinearScale() / createBandScale() — Scale math engines',
      'formatNumber() / formatDate() / formatCurrency() — Shared formatters',
    ],
    codeExample: `import { buildSceneGraph, validateChartSpec } from '@vizora/core';

const rawSpec = {
  version: '0.1.0',
  type: 'line',
  data: [
    { date: '2026-01-01', value: 100 },
    { date: '2026-02-01', value: 180 },
  ],
  encoding: {
    x: { field: 'date' },
    y: { field: 'value' },
  },
};

// 1. Validate spec against schema
const validSpec = validateChartSpec(rawSpec);

// 2. Resolve scene graph (no DOM / React needed!)
const scene = buildSceneGraph(validSpec, { width: 600, height: 350 });
console.log('Scene elements:', scene.elements.length);`,
  },
  {
    name: '@vizora/intelligence',
    npmCommand: 'npm install @vizora/intelligence',
    role: 'Deterministic Data Profiler & Recommender',
    badge: 'Profiling Engine',
    bundleSize: '< 3kb (gzipped)',
    runtime: 'Universal (Node.js, Browser, Edge)',
    description:
      'Inspects raw data payloads without external LLM calls or network latency. Incurs deterministic profiling rules to detect data types (temporal dates, quantitative numbers, categorical strings, discrete ordinal rankings), distinct frequencies, and recommends the best chart type and axis bindings.',
    keyExports: [
      'profileField(data, fieldName) — Detects type & cardinality of a column',
      'profileDataset(data) — Complete dataset profiling summary',
      'recommendChartSpec(data) — Simple heuristic recommender yielding a ChartSpec',
      'FieldType — "temporal" | "quantitative" | "categorical" | "ordinal"',
    ],
    codeExample: `import { profileField, profileDataset, recommendChartSpec } from '@vizora/intelligence';

const metrics = [
  { timestamp: '2026-01-01T00:00:00Z', cpuUsage: 45.2, server: 'us-east-1' },
  { timestamp: '2026-01-01T01:00:00Z', cpuUsage: 58.7, server: 'us-east-1' },
];

// Profile individual column
const colProfile = profileField(metrics, 'timestamp');
console.log(colProfile.type); // "temporal"

// Automatically generate optimal ChartSpec contract
const recommendation = recommendChartSpec(metrics);
console.log(recommendation.type); // "line"
console.log(recommendation.encoding.x.field); // "timestamp"
console.log(recommendation.encoding.y.field); // "cpuUsage"`,
  },
  {
    name: '@vizora/render-svg',
    npmCommand: 'npm install @vizora/render-svg',
    role: 'Vector SVG & Accessible Table Renderer',
    badge: 'Renderer',
    bundleSize: '< 5kb (gzipped)',
    runtime: 'Universal (SSR string / Browser DOM)',
    description:
      'Consumes the SceneGraph AST emitted by @vizora/core and serializes it into deterministic vector SVG markup or DOM nodes. Also generates the accessible semantic HTML data table fallback (<table summary="...">) ensuring full screen-reader compliance (WCAG 2.1 AA).',
    keyExports: [
      'renderSceneToSvgString(scene) — SSR-safe static SVG generator',
      'renderAccessibleTable(scene) — Semantic HTML table fallback string',
      'svgPathFromPoints(points) — Smooth cubic bezier SVG path generator',
      'svgStyleFromTheme(theme) — Cartographic CSS token mapper',
    ],
    codeExample: `import { buildSceneGraph } from '@vizora/core';
import { renderSceneToSvgString, renderAccessibleTable } from '@vizora/render-svg';

// In Next.js Server Component or Node.js backend:
const scene = buildSceneGraph(spec, { width: 800, height: 400 });

// 1. Generate pure SVG markup as raw string:
const svgString = renderSceneToSvgString(scene);

// 2. Generate screen-reader accessibility table:
const a11yTableString = renderAccessibleTable(scene);`,
  },
];

export default function PackagesOverviewPage() {
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);

  const handleCopy = (cmd: string, pkgName: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedPkg(pkgName);
    setTimeout(() => setCopiedPkg(null), 1500);
  };

  return (
    <div className="space-y-10 font-sans antialiased text-[#18241b]">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#18241b]/10">
        <div className="flex items-center gap-2 font-mono text-xs text-[#c2872e] uppercase font-bold">
          <span>ARCHITECTURE & ECOSYSTEM</span>
          <span className="text-[#60685c]">/</span>
          <span>4 MODULAR PACKAGES</span>
        </div>

        <h1 className="font-headline-lg text-3xl sm:text-4xl font-bold">
          Vizora Package Architecture
        </h1>

        <p className="font-body-doc text-base text-[#404641] max-w-3xl leading-relaxed">
          Vizora is engineered as a decoupled monorepo of lightweight, specialized packages.
          Whether you need zero-boilerplate React components, a headless Node.js SVG scene generator, or deterministic data profiling, install only what you need.
        </p>
      </div>

      {/* Package Quick Comparison Matrix */}
      <div className="space-y-3">
        <h2 className="font-headline-md text-xl font-bold">Package Overview & Responsibilities</h2>
        <div className="bg-white border border-[#18241b]/10 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="bg-[#18241b] text-white border-b border-[#18241b]">
                  <th className="p-3">Package</th>
                  <th className="p-3">Primary Role</th>
                  <th className="p-3">Runtime</th>
                  <th className="p-3">Bundle Size</th>
                </tr>
              </thead>
              <tbody>
                {PACKAGES.map((pkg, idx) => (
                  <tr key={idx} className="border-b border-[#18241b]/10 hover:bg-[#18241b]/4 transition-colors">
                    <td className="p-3.5 font-bold text-[#c2872e]">
                      <a href={`#${pkg.name.replace('@vizora/', '')}`} className="hover:underline">
                        {pkg.name}
                      </a>
                    </td>
                    <td className="p-3.5 text-[#18241b] font-sans font-medium">{pkg.role}</td>
                    <td className="p-3.5 text-[#60685c]">{pkg.runtime}</td>
                    <td className="p-3.5 text-[#18241b] font-bold">{pkg.bundleSize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Deep-dive Cards for Each Package */}
      <div className="space-y-8">
        {PACKAGES.map((pkg) => {
          const anchorId = pkg.name.replace('@vizora/', '');
          return (
            <section
              key={pkg.name}
              id={anchorId}
              className="bg-white border border-[#18241b]/10 rounded-xl p-6 sm:p-7 space-y-6 shadow-sm scroll-mt-20"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#18241b]/10 pb-4 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase bg-[#c2872e]/10 text-[#c2872e] px-2.5 py-0.5 rounded-full border border-[#c2872e]/20">
                      {pkg.badge}
                    </span>
                    <span className="font-mono text-xs text-[#60685c]">{pkg.bundleSize}</span>
                  </div>
                  <h3 className="font-headline-md text-2xl font-bold text-[#18241b] mt-1 font-mono">
                    {pkg.name}
                  </h3>
                  <p className="font-body-ui text-xs font-semibold text-[#60685c] mt-0.5">
                    {pkg.role}
                  </p>
                </div>

                {/* Copy Install Command */}
                <button
                  onClick={() => handleCopy(pkg.npmCommand, pkg.name)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0f1611] text-[#e0e4dc] border border-[#2d3a30] font-mono text-xs shadow-xs hover:border-[#c2872e] transition-all self-start sm:self-center"
                >
                  <span className="text-[#c2872e] font-bold">$</span>
                  <span>{pkg.npmCommand}</span>
                  <span className="text-[10px] uppercase font-bold text-[#c2872e] ml-1">
                    {copiedPkg === pkg.name ? 'Copied' : 'Copy'}
                  </span>
                </button>
              </div>

              {/* Description */}
              <p className="font-body-doc text-sm text-[#404641] leading-relaxed">
                {pkg.description}
              </p>

              {/* Key Exports */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#c2872e] uppercase block">
                  Key APIs & Exports:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  {pkg.keyExports.map((exp, i) => (
                    <div
                      key={i}
                      className="p-2.5 bg-[#f4f7f3] border border-[#18241b]/8 rounded-lg text-[#18241b] flex items-start gap-2"
                    >
                      <span className="text-[#c2872e] font-bold shrink-0">›</span>
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Example */}
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#60685c] uppercase block">
                  Usage Example:
                </span>
                <CodeBlock
                  code={pkg.codeExample}
                  language="typescript"
                  title={`${anchorId}-example.ts`}
                />
              </div>
            </section>
          );
        })}
      </div>

      {/* Navigation Footnotes */}
      <div className="pt-6 border-t border-[#18241b]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/docs/getting-started"
          className="text-[#60685c] hover:text-[#18241b] flex items-center gap-1.5"
        >
          <span>←</span>
          <span>Getting Started Guide</span>
        </Link>
        <Link
          href="/docs/build-with-vizora"
          className="px-4 py-2 bg-[#18241b] hover:bg-[#c2872e] text-white rounded-lg font-bold uppercase transition-all shadow-xs"
        >
          <span>Build Custom Charts Guide →</span>
        </Link>
      </div>
    </div>
  );
}
