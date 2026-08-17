'use client';

import React from 'react';
import Link from 'next/link';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';

interface CategoryMetadata {
  slug: string;
  title: string;
  badge: string;
  description: string;
  heroChart: ChartType;
  x?: string;
  y?: string;
  data: Record<string, unknown>[];
}

const CATEGORIES: CategoryMetadata[] = [
  {
    slug: 'dashboard',
    title: 'Dashboard & Business',
    badge: 'EXECUTIVE METRICS',
    description: 'High-level business metrics, executive summaries, conversion funnels, and part-to-whole categorical breakdowns.',
    heroChart: 'kpi-sparkline',
    x: 'month',
    y: 'metric',
    data: [
      { month: 'Q1', metric: 1200 },
      { month: 'Q2', metric: 1450 },
      { month: 'Q3', metric: 1890 },
      { month: 'Q4', metric: 2400 },
    ],
  },
  {
    slug: 'trading',
    title: 'Trading & Financial',
    badge: 'MARKET DATA',
    description: 'Dense time-series, financial OHLC candles, and volume overlays for market data and trading applications.',
    heroChart: 'candlestick',
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
    slug: 'statistical',
    title: 'Statistical',
    badge: 'DATA SCIENCE',
    description: 'Distributions, probability densities, correlations, and variance across large statistical datasets.',
    heroChart: 'histogram',
    x: 'score',
    data: [
      { score: 15 }, { score: 18 }, { score: 22 }, { score: 25 }, { score: 28 },
      { score: 32 }, { score: 35 }, { score: 38 }, { score: 45 }, { score: 52 },
    ],
  },
  {
    slug: 'comparison',
    title: 'Comparison & Ranking',
    badge: 'CATEGORICAL ANALYSIS',
    description: 'Rankings, categorical magnitude comparisons, and bivariate scatter correlations.',
    heroChart: 'bar',
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
    slug: 'composition',
    title: 'Composition & Flow',
    badge: 'TRENDS & FLOW',
    description: 'Temporal continuity, volume accumulation, and interconnected flow state changes over time.',
    heroChart: 'line',
    x: 'date',
    y: 'value',
    data: [
      { date: 'Jan 01', value: 340 },
      { date: 'Jan 02', value: 410 },
      { date: 'Jan 03', value: 390 },
      { date: 'Jan 04', value: 520 },
      { date: 'Jan 05', value: 680 },
    ],
  },
];

export default function ChartsOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-3">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          VIZORA COMPONENT GALLERY
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Use Case Categories
        </h1>
        <p className="font-body-doc text-[#404641] max-w-2xl text-base leading-relaxed">
          Explore Vizora\'s deterministic visualization primitives grouped by industry standard use-cases. 
          Each category provides specialized layouts, tailored heuristics, and composed templates.
        </p>
      </div>

      {/* Grid of Category Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {CATEGORIES.map((category) => (
          <div
            key={category.slug}
            className="bg-white/80 border border-[#18241b]/15 rounded-3xl p-6 space-y-4 shadow-xl backdrop-blur-xl hover:border-[#c2872e] transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-3">
                <span className="font-sans text-xs font-bold text-[#c2872e] uppercase tracking-wider">
                  {category.badge}
                </span>
                <span className="font-mono text-[10px] bg-[#18241b]/8 px-2.5 py-0.5 rounded-full border border-[#18241b]/10 font-bold text-[#18241b]">
                  /charts/{category.slug}
                </span>
              </div>

              <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
                {category.title}
              </h2>
              <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-3 h-48 flex items-center justify-center shadow-inner">
                <Chart type={category.heroChart} data={category.data} x={category.x} y={category.y} />
              </div>

              <Link
                href={`/charts/${category.slug}`}
                className="w-full py-2.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>EXPLORE CATEGORY</span>
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
