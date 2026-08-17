'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';

interface ChartMetadata {
  slug: ChartType;
  category: 'trends' | 'comparison' | 'proportions' | 'kpis';
  title: string;
  badge: string;
  subtitle?: string;
  description: string;
  heuristics: string;
  data: Record<string, unknown>[];
  x?: string;
  y?: string;
}

const CHARTS_METADATA: ChartMetadata[] = [
  {
    slug: 'line',
    category: 'trends',
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
    slug: 'area',
    category: 'trends',
    title: 'Gradient Area Chart',
    badge: 'VOLUME TREND',
    description: 'Displays cumulative quantitative metric progression with sleek gradient SVG vector fills.',
    heuristics: 'Ideal for continuous growth, bandwidth, and cumulative volume trends.',
    x: 'month',
    y: 'bandwidth',
    data: [
      { month: 'Jan', bandwidth: 120 },
      { month: 'Feb', bandwidth: 190 },
      { month: 'Mar', bandwidth: 310 },
      { month: 'Apr', bandwidth: 480 },
      { month: 'May', bandwidth: 640 },
    ],
  },
  {
    slug: 'bar',
    category: 'comparison',
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
    slug: 'donut',
    category: 'proportions',
    title: 'Donut & Pie Chart',
    badge: 'PROPORTIONAL SHARE',
    description: 'Calculates radial slice angles to display market share, device breakdowns, and categorical proportions.',
    heuristics: 'Recommended for discrete categorical shares (3-7 items) summing to 100%.',
    x: 'channel',
    y: 'users',
    data: [
      { channel: 'Direct', users: 4500 },
      { channel: 'Organic Search', users: 3200 },
      { channel: 'Referral', users: 1800 },
      { channel: 'Social', users: 950 },
    ],
  },
  {
    slug: 'scatter',
    category: 'comparison',
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
    category: 'proportions',
    title: 'Distribution Histogram',
    badge: 'FREQUENCY DENSITY',
    description: 'Auto-bins continuous single quantitative metrics into frequency distribution bars.',
    heuristics: 'Inferred when dataset contains 1 Quantitative metric with no explicit temporal keys.',
    x: 'score',
    data: [
      { score: 15 }, { score: 18 }, { score: 22 }, { score: 25 }, { score: 28 },
      { score: 32 }, { score: 35 }, { score: 38 }, { score: 45 }, { score: 52 },
    ],
  },
  {
    slug: 'candlestick',
    category: 'trends',
    title: 'Candlestick Trading Chart',
    badge: 'FINANCIAL OHLC',
    subtitle: 'Financial trading candles with Open, High, Low, and Close prices.',
    description: 'Visualizes stock, crypto, and commodity price action with green bullish and red bearish wicks.',
    heuristics: 'Inferred when dataset contains Open, High, Low, and Close price keys.',
    x: 'date',
    data: [
      { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
      { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
      { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
      { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
      { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
    ],
  },
  {
    slug: 'funnel',
    category: 'proportions',
    title: 'Funnel Conversion Chart',
    badge: 'CONVERSION STAGES',
    description: 'Displays user conversion retention and drop-off across sequential sales funnel stages.',
    heuristics: 'Ideal for tracking signup, checkout, and onboarding drop-offs.',
    x: 'stage',
    y: 'count',
    data: [
      { stage: 'Site Visitors', count: 125000 },
      { stage: 'Product Views', count: 68000 },
      { stage: 'Added to Cart', count: 24000 },
      { stage: 'Checkout Started', count: 14200 },
      { stage: 'Purchase Complete', count: 9800 },
    ],
  },
  {
    slug: 'kpi-sparkline',
    category: 'kpis',
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

const CATEGORY_TABS: { id: string; label: string }[] = [
  { id: 'all', label: 'All Primitives' },
  { id: 'trends', label: 'Trends & Time-Series' },
  { id: 'comparison', label: 'Categorical Comparison' },
  { id: 'proportions', label: 'Proportions & Share' },
  { id: 'kpis', label: 'Executive KPIs' },
];

export default function ChartsOverviewPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCharts = CHARTS_METADATA.filter(
    (chart) => activeTab === 'all' || chart.category === activeTab
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-3">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          VIZORA COMPONENT GALLERY
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Chart Primitives & Layouts
        </h1>
        <p className="font-body-doc text-[#404641] max-w-2xl text-base leading-relaxed">
          Vizora implements deterministic visualization primitives with strict Zod schema validation, headless scene graph resolution, and built-in screen reader accessibility.
        </p>

        {/* Category Tabs */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#18241b] text-white border-[#18241b] shadow-md'
                  : 'bg-white/80 text-[#404641] border-[#18241b]/15 hover:border-[#c2872e]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Chart Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCharts.map((chart) => (
          <div
            key={chart.slug}
            className="bg-white/80 border border-[#18241b]/15 rounded-3xl p-6 space-y-4 shadow-xl backdrop-blur-xl hover:border-[#c2872e] transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-3">
                <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                  {chart.badge}
                </span>
                <span className="font-mono text-[10px] bg-[#18241b]/8 px-2.5 py-0.5 rounded-full border border-[#18241b]/10 font-bold text-[#18241b]">
                  /charts/{chart.slug}
                </span>
              </div>

              <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
                {chart.title}
              </h2>
              <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                {chart.description}
              </p>
              <div className="p-3 bg-[#18241b]/5 rounded-xl border border-[#18241b]/10 font-sans text-[11px] text-[#60685c]">
                <span className="font-bold text-[#18241b]">Inference Rule: </span>
                {chart.heuristics}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-3 h-48 flex items-center justify-center shadow-inner">
                <Chart type={chart.slug} data={chart.data} x={chart.x} y={chart.y} />
              </div>

              <Link
                href={`/charts/${chart.slug}`}
                className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2"
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
