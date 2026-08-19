'use client';

import React from 'react';
import Link from 'next/link';
import { CodeBlock } from '../../../components/CodeBlock';

export default function ChartSpecPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
            SPECIFICATION CONTRACT
          </span>
          <span className="font-mono text-xs text-[#60685c]">
            Zero DOM • 100% Serializable
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          The ChartSpec JSON Contract
        </h1>
        <p className="font-body-doc text-sm text-[#404641] max-w-3xl leading-relaxed">
          <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded-[2px] border border-[#18241b]/15 text-[#18241b]">ChartSpec</code> is the immutable contract in Vizora. It decouples visualization intent completely from React JSX and browser DOM rendering.
        </p>
      </div>

      {/* Why ChartSpec Section */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Why a Typed JSON Contract?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#18241b]/15 rounded-[2px] p-4 space-y-2">
            <h3 className="font-headline-md font-bold text-sm text-[#18241b]">100% Serializable & Database-Friendly</h3>
            <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
              Every <code className="font-mono text-xs">ChartSpec</code> is a pure JSON object. Store charts directly in PostgreSQL, SQLite, or MongoDB, and serialize across REST or gRPC APIs.
            </p>
          </div>
          <div className="bg-white border border-[#18241b]/15 rounded-[2px] p-4 space-y-2">
            <h3 className="font-headline-md font-bold text-sm text-[#18241b]">Headless & SSR Deterministic</h3>
            <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
              Compile any <code className="font-mono text-xs">ChartSpec</code> into an abstract scene graph in Node.js or Edge runtimes without mounting a browser DOM or incurring hydration layout shifts.
            </p>
          </div>
        </div>
      </section>

      {/* Schema Structure */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          TypeScript Interface Definition
        </h2>

        <CodeBlock
          code={`export type ChartType =
  | 'line'
  | 'bar'
  | 'scatter'
  | 'histogram'
  | 'kpi-sparkline'
  | 'candlestick'
  | 'funnel'
  | 'donut'
  | 'area';

export type FieldDataType = 'quantitative' | 'temporal' | 'categorical';

export interface FieldEncoding {
  field: string;
  type?: FieldDataType;
  label?: string;
  format?: string;
}

export interface ChartSpec {
  version: '0.1.0';
  type: ChartType;
  title?: string;
  subtitle?: string;
  data: Record<string, unknown>[];
  encoding: {
    x?: FieldEncoding;
    y?: FieldEncoding;
    color?: string;
    orientation?: 'vertical' | 'horizontal';
    bins?: number;
    area?: boolean;
  };
  config?: {
    theme?: 'default' | 'zinc' | 'emerald' | 'amber' | 'sunset';
    showGrid?: boolean;
  };
}`}
          language="typescript"
          title="packages/core/src/types/spec.ts"
        />
      </section>

      {/* Spec Example */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Example ChartSpec Payloads
        </h2>

        <div className="space-y-3 font-mono text-xs">
          <CodeBlock
            code={`{
  "version": "0.1.0",
  "type": "bar",
  "title": "Quarterly Revenue Magnitude",
  "data": [
    { "quarter": "Q1", "revenue": 145000 },
    { "quarter": "Q2", "revenue": 182000 },
    { "quarter": "Q3", "revenue": 215000 },
    { "quarter": "Q4", "revenue": 290000 }
  ],
  "encoding": {
    "x": { "field": "quarter", "type": "categorical" },
    "y": { "field": "revenue", "type": "quantitative" },
    "orientation": "vertical"
  },
  "config": {
    "theme": "zinc",
    "showGrid": true
  }
}`}
            language="json"
            title="bar-spec.json"
          />
        </div>
      </section>

      {/* Navigation */}
      <div className="p-5 bg-white border border-[#18241b]/15 rounded-[2px] flex items-center justify-between">
        <div>
          <h3 className="font-headline-md text-sm font-bold text-[#18241b]">
            How to Build with ChartSpec
          </h3>
          <p className="font-body-ui text-xs text-[#60685c]">
            Learn how to use ChartSpec in React components and server-side runtimes.
          </p>
        </div>
        <Link
          href="/docs/build-with-vizora"
          className="px-3.5 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold rounded-[2px] transition-colors"
        >
          Build with Vizora &rarr;
        </Link>
      </div>
    </div>
  );
}
