'use client';

import React from 'react';
import { CodeBlock } from '../../../components/CodeBlock';

export default function ChartSpecPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#1e2a22]/20 pb-6 space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          SPECIFICATION CONTRACT
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] font-bold">
          The ChartSpec JSON Schema
        </h1>
        <p className="font-body-doc text-[#434844] text-base leading-relaxed">
          <code className="font-mono text-xs bg-[#f7faf5] px-1 py-0.5 border border-[#1e2a22]/20">ChartSpec</code> is the foundational contract in Vizora. It decouples visualization intent completely from React JSX or DOM rendering.
        </p>
      </div>

      {/* Why ChartSpec Section */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
          Why a Typed JSON Contract?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f7faf5] border border-[#1e2a22] p-5 space-y-2">
            <h3 className="font-bold text-[#1e2a22]">100% Serialisable & Database Friendly</h3>
            <p className="font-body-ui text-xs text-[#434844]">
              Every <code className="font-mono text-xs">ChartSpec</code> is a valid JSON object. Store charts directly in Postgres, MongoDB, or transmit them across HTTP APIs.
            </p>
          </div>
          <div className="bg-[#f7faf5] border border-[#1e2a22] p-5 space-y-2">
            <h3 className="font-bold text-[#1e2a22]">Headless & SSR Testable</h3>
            <p className="font-body-ui text-xs text-[#434844]">
              Convert any <code className="font-mono text-xs">ChartSpec</code> into an abstract scene graph in Node or Edge environments without mounting DOM elements.
            </p>
          </div>
        </div>
      </div>

      {/* Schema Structure */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
          TypeScript Interface Definition
        </h2>

        <CodeBlock
          code={`export type ChartType = 'line' | 'bar' | 'scatter' | 'histogram' | 'kpi-sparkline';

export type FieldDataType = 'quantitative' | 'temporal' | 'categorical';

export interface FieldEncoding {
  field: string;
  type?: FieldDataType;
  label?: string;
  format?: string;
}

export interface EncodingMap {
  x?: FieldEncoding;
  y?: FieldEncoding;
  color?: FieldEncoding;
  size?: FieldEncoding;
  orientation?: 'vertical' | 'horizontal';
  bins?: number;
}

export interface ChartConfig {
  width?: number;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
}

export interface ChartSpec {
  version: '0.1.0';
  type: ChartType;
  title?: string;
  subtitle?: string;
  data: Record<string, unknown>[];
  encoding: EncodingMap;
  config?: ChartConfig;
}`}
          language="typescript"
          title="spec/types.ts"
        />
      </div>

      {/* Example Valid JSON */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
          Example Serialised Spec
        </h2>

        <CodeBlock
          code={`{
  "version": "0.1.0",
  "type": "bar",
  "title": "Regional Sales Survey",
  "data": [
    { "region": "North America", "sales": 12500 },
    { "region": "Europe", "sales": 9800 }
  ],
  "encoding": {
    "x": { "field": "region", "type": "categorical" },
    "y": { "field": "sales", "type": "quantitative" }
  },
  "config": {
    "showGrid": true
  }
}`}
          language="json"
          title="chart-spec.json"
        />
      </div>
    </div>
  );
}
