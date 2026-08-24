'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { CategoryCard, CategoryInfo } from '../../components/CategoryCard';
import { ChartType } from '@vizora/core';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    slug: 'dashboard',
    title: 'Business & Dashboard',
    badge: 'EXECUTIVE METRICS',
    description: 'High-level business KPIs, conversion drop-off funnels, and categorical proportion breakdowns.',
    count: 4,
    heroChart: 'kpi-sparkline',
    x: 'quarter',
    y: 'arr',
    data: [
      { quarter: 'Q1', arr: 1.2 },
      { quarter: 'Q2', arr: 1.6 },
      { quarter: 'Q3', arr: 2.1 },
      { quarter: 'Q4', arr: 2.8 },
    ],
  },
  {
    slug: 'trading',
    title: 'Trading & Financial',
    badge: 'MARKET DATA',
    description: 'Financial OHLC candlestick sessions, price time-series, and trading volume profiles.',
    count: 3,
    heroChart: 'candlestick',
    x: 'date',
    data: [
      { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
      { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
      { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
      { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
      { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
    ],
    dark: true,
  },
  {
    slug: 'statistical',
    title: 'Statistical',
    badge: 'DATA SCIENCE',
    description: 'Continuous variable frequency distributions, density bins, and bivariate scatter correlations.',
    count: 3,
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
    description: 'Categorical magnitude ranking, regional comparisons, and discrete entity benchmarking.',
    count: 3,
    heroChart: 'bar',
    x: 'team',
    y: 'output',
    data: [
      { team: 'Eng', output: 142 },
      { team: 'Prod', output: 98 },
      { team: 'Design', output: 84 },
      { team: 'Ops', output: 51 },
    ],
  },
  {
    slug: 'composition',
    title: 'Composition & Flow',
    badge: 'TRENDS & FLOW',
    description: 'Temporal continuity, gradient volume accumulation, and proportion shares over time.',
    count: 4,
    heroChart: 'line',
    x: 'day',
    y: 'traffic',
    data: [
      { day: 'Mon', traffic: 320 },
      { day: 'Tue', traffic: 410 },
      { day: 'Wed', traffic: 390 },
      { day: 'Thu', traffic: 540 },
      { day: 'Fri', traffic: 680 },
    ],
  },
];

interface ChartDirectoryItem {
  type: ChartType;
  name: string;
  category: string;
  categorySlug: string;
  fields: string;
  description: string;
}

const ALL_CHARTS: ChartDirectoryItem[] = [
  {
    type: 'line',
    name: 'Line Chart',
    category: 'Composition & Flow',
    categorySlug: 'composition',
    fields: '1 Temporal + 1 Quantitative',
    description: 'Continuous quantitative metrics tracked across time or date dimensions.',
  },
  {
    type: 'bar',
    name: 'Bar Chart',
    category: 'Comparison & Ranking',
    categorySlug: 'comparison',
    fields: '1 Categorical + 1 Quantitative',
    description: 'Discrete categorical magnitude comparison with vertical/horizontal orientation.',
  },
  {
    type: 'scatter',
    name: 'Scatter Plot',
    category: 'Statistical',
    categorySlug: 'statistical',
    fields: '2 Quantitative',
    description: 'Bivariate Cartesian correlation and distribution clustering.',
  },
  {
    type: 'histogram',
    name: 'Histogram',
    category: 'Statistical',
    categorySlug: 'statistical',
    fields: '1 Quantitative (Continuous)',
    description: 'Auto-binning density distribution and frequency analysis.',
  },
  {
    type: 'kpi-sparkline',
    name: 'KPI + Sparkline',
    category: 'Business & Dashboard',
    categorySlug: 'dashboard',
    fields: '1 Temporal + 1 Quantitative',
    description: 'Condensed headline metric display with inline trend sparkline.',
  },
  {
    type: 'candlestick',
    name: 'Candlestick Chart',
    category: 'Trading & Financial',
    categorySlug: 'trading',
    fields: '1 Date + Open/High/Low/Close',
    description: 'Financial price action visualization with bullish/bearish wicks.',
  },
  {
    type: 'funnel',
    name: 'Funnel Chart',
    category: 'Business & Dashboard',
    categorySlug: 'dashboard',
    fields: '1 Stage + 1 Count',
    description: 'Stage-by-stage user conversion and drop-off progression.',
  },
  {
    type: 'donut',
    name: 'Donut Chart',
    category: 'Business & Dashboard',
    categorySlug: 'dashboard',
    fields: '1 Categorical + 1 Quantitative',
    description: 'Radial proportional wedge distribution with center cutout.',
  },
  {
    type: 'area',
    name: 'Area Chart',
    category: 'Composition & Flow',
    categorySlug: 'composition',
    fields: '1 Temporal + 1 Quantitative',
    description: 'Continuous time-series trend with vector gradient volume fill.',
  },
];

export default function ComponentsIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCharts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return ALL_CHARTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.fields.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Header Banner */}
        <div className="space-y-4 border-b border-[#18241b]/10 pb-8">
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
              PILLAR 1 • COMPONENT LIBRARY
            </span>
            <span className="font-mono text-xs text-[#60685c]">
              5 Categories • 9 Primitives
            </span>
          </div>

          <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
            Cartographic Visualization Components
          </h1>

          <p className="font-body-doc text-[#404641] max-w-3xl text-base leading-relaxed">
            Browse Vizora's deterministic, spec-driven chart primitives organized by dashboard use-case.
            Every component guarantees headless scene-graph resolution, zero React core coupling, and an accessible data-table ledger.
          </p>

          {/* Global Search Input */}
          <div className="pt-2 max-w-xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by chart name, category, or field type..."
                className="w-full bg-white border border-[#18241b]/15 rounded-xl px-4 py-2.5 pl-10 font-mono text-xs text-[#18241b] placeholder:text-[#60685c]/60 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all"
              />
              <svg
                className="w-4 h-4 text-[#60685c] absolute left-3.5 top-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-2.5 text-xs font-mono text-[#60685c] hover:text-[#18241b] px-1.5 py-0.5 rounded-md hover:bg-[#18241b]/5"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Results Display if Query present */}
        {searchQuery.trim() && (
          <div className="space-y-3 bg-white border border-[#18241b]/10 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-base font-bold text-[#18241b]">
                Search Matches ({filteredCharts.length})
              </h2>
              <span className="font-mono text-xs text-[#60685c]">Query: &quot;{searchQuery}&quot;</span>
            </div>

            {filteredCharts.length === 0 ? (
              <p className="font-mono text-xs text-[#60685c] py-2">
                No charts matched your search query. Try &quot;temporal&quot;, &quot;scatter&quot;, &quot;trading&quot;, or &quot;bar&quot;.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredCharts.map((item) => (
                  <Link
                    key={item.type}
                    href={`/components/${item.type}`}
                    className="p-3.5 bg-[#f4f7f3] border border-[#18241b]/10 rounded-xl hover:border-[#c2872e] shadow-xs hover:shadow-sm transition-all duration-150 space-y-1.5 group hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-headline-md font-bold text-sm text-[#18241b] group-hover:text-[#c2872e]">
                        {item.name}
                      </span>
                      <span className="font-mono text-[10px] text-[#c2872e] font-bold">
                        {item.type}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] text-[#60685c]">{item.fields}</p>
                    <p className="font-body-ui text-xs text-[#404641] line-clamp-2">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 5 Use-Case Category Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
              Use Case Categories
            </h2>
            <span className="font-mono text-xs text-[#60685c]">
              Select a category to explore specialized charts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES_DATA.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>

        {/* Pillar Navigation Callout Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
          <div className="bg-[#18241b] text-white rounded-[2px] p-5 space-y-2 border border-[#18241b]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#c2872e] font-bold uppercase">
                Pillar 2 • Live Studio
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold">Live Playground</h3>
            <p className="font-body-ui text-xs text-[#a4c995] leading-relaxed">
              Paste your own CSV or JSON, watch AutoChart infer the optimal bearing with the Compass Dial, and tweak styling live.
            </p>
            <Link
              href="/playground"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#c2872e] hover:text-white transition-colors pt-1"
            >
              <span>Open Studio Playground</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="bg-[#18241b] text-white rounded-[2px] p-5 space-y-2 border border-[#18241b]">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-[#c2872e] font-bold uppercase">
                Pillar 3 • Guided Stepper
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold">Guided Chart Builder</h3>
            <p className="font-body-ui text-xs text-[#a4c995] leading-relaxed">
              Step-by-step instrument workflow for selecting chart families, mapping field encodings with inline validation, and exporting code.
            </p>
            <Link
              href="/builder"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#c2872e] hover:text-white transition-colors pt-1"
            >
              <span>Launch Chart Builder</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
