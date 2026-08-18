'use client';

import React from 'react';
import { CodeBlock } from '../../../components/CodeBlock';

export default function ChartSpecPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          SPECIFICATION CONTRACT
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          The ChartSpec JSON Schema
        </h1>
        <p className="font-body-doc text-[#404641] text-base leading-relaxed">
          <code className="font-mono text-xs bg-white px-2 py-0.5 rounded border border-[#18241b]/15 text-[#18241b]">ChartSpec</code> is the foundational contract in Vizora. It decouples visualization intent completely from React JSX or DOM rendering.
        </p>
      </div>

      {/* Why ChartSpec Section */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
          Why a Typed JSON Contract?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 space-y-2 shadow-sm">
            <h3 className="font-headline-md font-bold text-base text-[#18241b]">100% Serializable & Database Friendly</h3>
            <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
              Every <code className="font-mono text-xs">ChartSpec</code> is a valid JSON object. Store charts directly in Postgres, MongoDB, or transmit them across HTTP APIs.
            </p>
          </div>
          <div className="bg-white border border-[#18241b]/15 rounded-2xl p-5 space-y-2 shadow-sm">
            <h3 className="font-headline-md font-bold text-base text-[#18241b]">Headless & SSR Testable</h3>
            <p className="font-body-ui text-xs text-[#60685c] leading-relaxed">
              Convert any <code className="font-mono text-xs">ChartSpec</code> into an abstract scene graph in Node or Edge environments without mounting DOM elements.
            </p>
          </div>
        </div>
      </div>

      {/* Schema Structure */}
      <div className="space-y-4">
        <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
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
  data: Record<string, unknown>[];
  encoding: {
    x?: FieldEncoding;
    y?: FieldEncoding;
    color?: string;
    orientation?: 'vertical' | 'horizontal';
    bins?: number;
  };
  config?: {
    theme?: 'default' | 'zinc' | 'emerald' | 'amber' | 'sunset';
    showGrid?: boolean;
  };
}`}
          language="typescript"
          title="packages/core/src/types/spec.ts"
        />
      </div>
    </div>
  );
}
