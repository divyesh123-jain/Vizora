'use client';

import React from 'react';
import Link from 'next/link';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';

const CHARTS_METADATA: {
  slug: ChartType;
  title: string;
  badge: string;
  description: string;
  heuristics: string;
  data: Record<string, unknown>[];
  x?: string;
  y?: string;
}[] = [
  {
    slug: 'line',
    title: 'Temporal Line Chart',
    badge: 'TEMPORAL TREND',
    description: 'Optimal for displaying quantitative value progression across continuous temporal date or time scales.',
    heuristics: 'Inferred when data contains ≥ 1 Temporal field and ≥ 1 Quantitative metric.',
    x: 'date',
    y: 'value',
    data: [
      { date: '2026-01-01', value: 340 },
      { date: '2026-01-02', value: 410 },
      { date: '2026-01-03', value: 390 },
      { date: '2026-01-04', value: 520 },
      { date: '2026-01-05', value: 680 },
    ],
  },
  {
    slug: 'bar',
    title: 'Categorical Bar Chart',
    badge: 'CATEGORICAL BREAKDOWN',
    description: 'Designed for comparing quantitative totals or aggregates across discrete categorical categories.',
    heuristics: 'Inferred when data contains ≥ 1 Categorical field and ≥ 1 Quantitative metric.',
    x: 'category',
    y: 'amount',
    data: [
      { category: 'Design', amount: 8400 },
      { category: 'Engineering', amount: 14200 },
      { category: 'Product', amount: 9600 },
      { category: 'Ops', amount: 5100 },
    ],
  },
  {
    slug: 'scatter',
    title: 'Bivariate Scatter Plot',
    badge: 'QUANTITATIVE CORRELATION',
    description: 'Visualizes numerical relationships and statistical distributions between two quantitative variables.',
    heuristics: 'Inferred when data contains ≥ 2 Quantitative numeric fields.',
    x: 'xVal',
    y: 'yVal',
    data: [
      { xVal: 10, yVal: 25 },
      { xVal: 20, yVal: 45 },
      { xVal: 35, yVal: 60 },
      { xVal: 50, yVal: 85 },
      { xVal: 65, yVal: 95 },
    ],
  },
  {
    slug: 'histogram',
    title: 'Distribution Histogram',
    badge: 'FREQUENCY DENSITY',
    description: 'Auto-bins continuous single quantitative metrics into frequency distribution bars.',
    heuristics: 'Inferred when dataset contains 1 Quantitative metric with no explicit temporal or categorical keys.',
    x: 'score',
    data: [
      { score: 15 }, { score: 18 }, { score: 22 }, { score: 25 }, { score: 28 },
      { score: 32 }, { score: 35 }, { score: 38 }, { score: 45 }, { score: 52 },
    ],
  },
  {
    slug: 'kpi-sparkline',
    title: 'KPI + Sparkline Summary',
    badge: 'EXECUTIVE SUMMARY',
    description: 'Presents high-level headline metrics alongside condensed temporal trend sparklines.',
    heuristics: 'Used for executive metrics and KPI dashboard widgets.',
    x: 'month',
    y: 'metric',
    data: [
      { month: 'Q1', metric: 1200 },
      { month: 'Q2', metric: 1450 },
      { month: 'Q3', metric: 1890 },
      { month: 'Q4', metric: 2400 },
    ],
  },
];

export default function ChartsOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#1e2a22]/20 pb-6 space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          VIZORA COMPONENT GALLERY
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22]">
          Supported MVP Chart Types
        </h1>
        <p className="font-body-doc text-[#434844] max-w-2xl text-base">
          Vizora implements 5 core chart primitives with strict Zod validation, headless scene graph resolution, and accessible fallback data tables.
        </p>
      </div>

      {/* Grid of Chart Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CHARTS_METADATA.map((chart) => (
          <div
            key={chart.slug}
            className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-4 hover:border-[#c2872e] shadow-sm transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#1e2a22]/15 pb-2">
                <span className="font-mono text-xs font-bold text-[#c2872e] uppercase">
                  {chart.badge}
                </span>
                <span className="font-mono text-[10px] bg-[#ecefea] px-2 py-0.5 border border-[#1e2a22]/20 font-bold text-[#1e2a22]">
                  /charts/{chart.slug}
                </span>
              </div>

              <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
                {chart.title}
              </h2>
              <p className="font-body-ui text-xs text-[#434844] leading-relaxed">
                {chart.description}
              </p>
              <div className="p-2 bg-[#ecefea] border border-[#1e2a22]/20 font-mono text-[11px] text-[#6e756a]">
                <span className="font-bold text-[#1e2a22]">Inference Rule: </span>
                {chart.heuristics}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="bg-white border border-[#1e2a22]/20 p-3 h-44 flex items-center justify-center">
                <Chart type={chart.slug} data={chart.data} x={chart.x} y={chart.y} />
              </div>

              <Link
                href={`/charts/${chart.slug}`}
                className="w-full py-2 bg-[#1e2a22] hover:bg-[#c2872e] text-[#ecefea] hover:text-[#1e2a22] font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>OPEN DETAILED PAGE & PROPS</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
