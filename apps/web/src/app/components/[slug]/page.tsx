'use client';

import React, { useState, useMemo } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '../../../components/Navbar';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';
import { LegendBand } from '../../../components/LegendBand';
import { CodeBlock } from '../../../components/CodeBlock';
import { ChartPreviewBlock } from '../../../components/ChartPreviewBlock';
import {
  PropControlRow,
  SelectControl,
  TextControl,
} from '../../../components/InteractivePropControls';

// ==========================================
// Category Configuration & Datasets
// ==========================================
interface CategoryConfig {
  slug: string;
  title: string;
  badge: string;
  framingNote: string;
  dark?: boolean;
  charts: {
    type: ChartType;
    name: string;
    description: string;
    x?: string;
    y?: string;
    statusBadge?: string;
    data: Record<string, unknown>[];
    snippet: string;
  }[];
}

const CATEGORY_MAP: Record<string, CategoryConfig> = {
  dashboard: {
    slug: 'dashboard',
    title: 'Business & Executive Dashboard',
    badge: 'EXECUTIVE METRICS',
    framingNote:
      'High-level executive metrics, retention funnels, and proportional compositions designed for high-density business dashboards. Standard SVG rendering ensures SSR safety with zero client-side layout shift. Multi-chart cross-filtering and drill-downs are scheduled for [V1].',
    charts: [
      {
        type: 'kpi-sparkline',
        name: 'KPI Headline + Trend Sparkline',
        description: 'Prominent metric headline with inline micro-trend sparkline.',
        x: 'month',
        y: 'mrr',
        data: [
          { month: 'Jan', mrr: 12000 },
          { month: 'Feb', mrr: 13500 },
          { month: 'Mar', mrr: 15200 },
          { month: 'Apr', mrr: 18400 },
          { month: 'May', mrr: 21900 },
        ],
        snippet: '<Chart type="kpi-sparkline" data={data} x="month" y="mrr" />',
      },
      {
        type: 'funnel',
        name: 'Conversion Funnel',
        description: 'Progressive stage-by-stage drop-off tracking across purchase pipelines.',
        x: 'stage',
        y: 'count',
        data: [
          { stage: 'Visitors', count: 120000 },
          { stage: 'Signups', count: 48000 },
          { stage: 'Trial Active', count: 22000 },
          { stage: 'Subscribed', count: 11500 },
        ],
        snippet: '<Chart type="funnel" data={data} x="stage" y="count" />',
      },
      {
        type: 'donut',
        name: 'Donut Proportions',
        description: 'Categorical distribution represented as radial arc slices with inner cutout.',
        x: 'tier',
        y: 'users',
        data: [
          { tier: 'Enterprise', users: 1420 },
          { tier: 'Pro', users: 3800 },
          { tier: 'Starter', users: 6100 },
        ],
        snippet: '<Chart type="donut" data={data} x="tier" y="users" />',
      },
      {
        type: 'bar',
        name: 'Quarterly Revenue Bar',
        description: 'Categorical comparison across business quarters.',
        x: 'quarter',
        y: 'revenue',
        data: [
          { quarter: 'Q1', revenue: 45000 },
          { quarter: 'Q2', revenue: 58000 },
          { quarter: 'Q3', revenue: 72000 },
          { quarter: 'Q4', revenue: 91000 },
        ],
        snippet: '<Chart type="bar" data={data} x="quarter" y="revenue" />',
      },
    ],
  },

  trading: {
    slug: 'trading',
    title: 'Trading & Financial Terminals',
    badge: 'MARKET DATA TERMINAL',
    dark: true,
    framingNote:
      'High-frequency time series, OHLC price candles, and trading volume distributions. Note: Interactive crosshair hovering, real-time WebSocket feeds, and pan/zoom viewports are scheduled for [V1]. The current release provides deterministic SVG candle layout resolution.',
    charts: [
      {
        type: 'candlestick',
        name: 'OHLC Candlestick Session',
        description: 'Open, High, Low, Close price action with bullish green and bearish red candle wicks.',
        x: 'date',
        data: [
          { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
          { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
          { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
          { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
          { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
        ],
        snippet: '<Chart type="candlestick" data={ohlcData} x="date" />',
      },
      {
        type: 'bar',
        name: 'Volume Profile Histogram',
        description: 'Session trading volume magnitude bars.',
        x: 'date',
        y: 'volume',
        data: [
          { date: 'Mon', volume: 14200 },
          { date: 'Tue', volume: 22800 },
          { date: 'Wed', volume: 18400 },
          { date: 'Thu', volume: 31000 },
          { date: 'Fri', volume: 27500 },
        ],
        snippet: '<Chart type="bar" data={volumeData} x="date" y="volume" theme="zinc" />',
      },
      {
        type: 'line',
        name: 'Moving Average (SMA/EMA)',
        description: 'Continuous price trajectory curve.',
        x: 'date',
        y: 'price',
        data: [
          { date: '2026-02-01', price: 154.2 },
          { date: '2026-02-02', price: 158.9 },
          { date: '2026-02-03', price: 156.4 },
          { date: '2026-02-04', price: 162.8 },
          { date: '2026-02-05', price: 169.1 },
          { date: '2026-02-06', price: 174.5 },
        ],
        snippet: '<Chart type="line" data={priceData} x="date" y="price" theme="zinc" />',
      },
    ],
  },

  statistical: {
    slug: 'statistical',
    title: 'Statistical & Distribution Analysis',
    badge: 'DATA SCIENCE',
    framingNote:
      'Continuous variable frequency distributions, density bins, and bivariate scatter correlations. Automatic bin inference detects numerical domain ranges deterministically without client-side heavy calculation. Box plots and violin distributions are planned for [V2].',
    charts: [
      {
        type: 'histogram',
        name: 'Continuous Density Histogram',
        description: 'Auto-binning continuous numerical values into frequency intervals.',
        x: 'score',
        data: [
          { score: 15 }, { score: 18 }, { score: 22 }, { score: 25 }, { score: 28 },
          { score: 32 }, { score: 35 }, { score: 38 }, { score: 45 }, { score: 52 },
        ],
        snippet: '<Chart type="histogram" data={data} x="score" bins={5} />',
      },
      {
        type: 'scatter',
        name: 'Bivariate Scatter Plot',
        description: 'Two continuous quantitative metrics mapped onto Cartesian coordinates.',
        x: 'temperature',
        y: 'pressure',
        data: [
          { temperature: 20, pressure: 101.3 },
          { temperature: 25, pressure: 102.1 },
          { temperature: 30, pressure: 104.5 },
          { temperature: 35, pressure: 107.8 },
          { temperature: 40, pressure: 112.0 },
        ],
        snippet: '<Chart type="scatter" data={data} x="temperature" y="pressure" />',
      },
    ],
  },

  comparison: {
    slug: 'comparison',
    title: 'Comparison & Ranking',
    badge: 'CATEGORICAL ANALYSIS',
    framingNote:
      'Direct categorical magnitude benchmarking, regional sales distributions, and discrete entity comparisons. Supports vertical column and horizontal ranking bar layouts with deterministic scale calculations.',
    charts: [
      {
        type: 'bar',
        name: 'Categorical Bar / Ranking',
        description: 'Discrete category comparisons with proportional bar lengths.',
        x: 'category',
        y: 'sales',
        data: [
          { category: 'North America', sales: 18400 },
          { category: 'Europe', sales: 14200 },
          { category: 'Asia Pacific', sales: 22100 },
          { category: 'Latin America', sales: 8900 },
        ],
        snippet: '<Chart type="bar" data={data} x="category" y="sales" />',
      },
      {
        type: 'scatter',
        name: 'Multivariate Positioning',
        description: 'Entity comparison across cost vs performance metrics.',
        x: 'cost',
        y: 'performance',
        data: [
          { cost: 120, performance: 85 },
          { cost: 250, performance: 140 },
          { cost: 400, performance: 195 },
          { cost: 600, performance: 230 },
        ],
        snippet: '<Chart type="scatter" data={data} x="cost" y="performance" />',
      },
    ],
  },

  composition: {
    slug: 'composition',
    title: 'Composition & Flow',
    badge: 'TRENDS & FLOW',
    framingNote:
      'Continuous temporal trends, cumulative volume accumulation, and proportional shares over time. All area paths utilize native linear gradient defs for high visual fidelity.',
    charts: [
      {
        type: 'line',
        name: 'Temporal Trend Line',
        description: 'Sequential time series tracking metrics over dates and timestamps.',
        x: 'date',
        y: 'activeUsers',
        data: [
          { date: '2026-01-01', activeUsers: 3400 },
          { date: '2026-01-02', activeUsers: 4100 },
          { date: '2026-01-03', activeUsers: 3950 },
          { date: '2026-01-04', activeUsers: 5200 },
          { date: '2026-01-05', activeUsers: 6800 },
        ],
        snippet: '<Chart type="line" data={data} x="date" y="activeUsers" />',
      },
      {
        type: 'area',
        name: 'Gradient Area Volume',
        description: 'Continuous volume accumulation with linear SVG gradient fills.',
        x: 'month',
        y: 'bandwidth',
        data: [
          { month: 'Jan', bandwidth: 120 },
          { month: 'Feb', bandwidth: 190 },
          { month: 'Mar', bandwidth: 310 },
          { month: 'Apr', bandwidth: 480 },
          { month: 'May', bandwidth: 640 },
        ],
        snippet: '<Chart type="area" data={data} x="month" y="bandwidth" />',
      },
    ],
  },
};

// ==========================================
// Chart Type Details & Presets
// ==========================================
interface ChartDetailConfig {
  type: ChartType;
  title: string;
  badge: string;
  description: string;
  heuristics: string;
  category: string;
  categorySlug: string;
  xDefault: string;
  yDefault: string;
  presets: {
    name: string;
    data: Record<string, unknown>[];
  }[];
  variants?: {
    name: string;
    orientation?: 'vertical' | 'horizontal';
    type?: ChartType;
    description: string;
  }[];
  a11yNotes: string;
}

const CHART_DETAILS: Record<string, ChartDetailConfig> = {
  line: {
    type: 'line',
    title: 'Line Chart',
    badge: 'TEMPORAL TREND',
    category: 'Composition & Flow',
    categorySlug: 'composition',
    description:
      'The Line Chart maps temporal fields along the X axis and quantitative metric values along the Y axis, connecting sequential data points with crisp vector paths.',
    heuristics: 'Inferred when data profiling detects ≥ 1 Temporal field and ≥ 1 Quantitative field.',
    xDefault: 'date',
    yDefault: 'revenue',
    presets: [
      {
        name: '7-Day Revenue Trend',
        data: [
          { date: '2026-01-01', revenue: 4200 },
          { date: '2026-01-02', revenue: 4800 },
          { date: '2026-01-03', revenue: 4500 },
          { date: '2026-01-04', revenue: 5900 },
          { date: '2026-01-05', revenue: 6400 },
          { date: '2026-01-06', revenue: 7100 },
        ],
      },
      {
        name: 'Server CPU Load (%)',
        data: [
          { date: '00:00', revenue: 15 },
          { date: '04:00', revenue: 22 },
          { date: '08:00', revenue: 65 },
          { date: '12:00', revenue: 88 },
          { date: '16:00', revenue: 74 },
        ],
      },
    ],
    variants: [
      { name: 'Standard Line', type: 'line', description: 'Sharp crisp vector polyline' },
      { name: 'Area Fill Variant', type: 'area', description: 'Gradient volume under trend' },
    ],
    a11yNotes:
      'Emits an accessible HTML <table> element fallback with proper <thead>, <th>, and <td> tags. Screen readers announce sequential values with min/max summaries.',
  },

  bar: {
    type: 'bar',
    title: 'Bar Chart',
    badge: 'CATEGORICAL AGGREGATE',
    category: 'Comparison & Ranking',
    categorySlug: 'comparison',
    description:
      'The Bar Chart renders rectangular bars whose lengths are proportional to quantitative totals across discrete categories. Supports both vertical columns and horizontal rankings.',
    heuristics: 'Inferred when data profiling detects ≥ 1 Categorical string field and ≥ 1 Quantitative metric.',
    xDefault: 'category',
    yDefault: 'sales',
    presets: [
      {
        name: 'Regional Sales Performance',
        data: [
          { category: 'North America', sales: 12500 },
          { category: 'Europe', sales: 9800 },
          { category: 'Asia Pacific', sales: 14200 },
          { category: 'Latin America', sales: 6100 },
        ],
      },
      {
        name: 'Browser Market Share',
        data: [
          { category: 'Chrome', sales: 64 },
          { category: 'Safari', sales: 19 },
          { category: 'Edge', sales: 5 },
          { category: 'Firefox', sales: 3 },
        ],
      },
    ],
    variants: [
      { name: 'Vertical Column', orientation: 'vertical', description: 'Standard vertical category bars' },
      { name: 'Horizontal Ranking', orientation: 'horizontal', description: 'Horizontal rank ordering' },
    ],
    a11yNotes:
      'Each bar maps to an accessible semantic data-table row with ARIA role="graphics-symbol" and descriptive aria-label attributes.',
  },

  scatter: {
    type: 'scatter',
    title: 'Scatter Plot',
    badge: 'QUANTITATIVE CORRELATION',
    category: 'Statistical',
    categorySlug: 'statistical',
    description:
      'The Scatter Plot positions individual data points along a Cartesian plane to reveal clusters, correlations, outliers, and variance between two continuous numerical metrics.',
    heuristics: 'Inferred when data profiling detects ≥ 2 Quantitative numeric fields.',
    xDefault: 'spend',
    yDefault: 'conversions',
    presets: [
      {
        name: 'Marketing Spend vs Conversions',
        data: [
          { spend: 100, conversions: 12 },
          { spend: 250, conversions: 28 },
          { spend: 500, conversions: 58 },
          { spend: 750, conversions: 79 },
          { spend: 1000, conversions: 115 },
        ],
      },
    ],
    a11yNotes:
      'Cartesian coordinates are structured into an accessible tabular matrix with coordinate pair descriptions for assistive devices.',
  },

  histogram: {
    type: 'histogram',
    title: 'Histogram',
    badge: 'FREQUENCY DISTRIBUTION',
    category: 'Statistical',
    categorySlug: 'statistical',
    description:
      'The Histogram auto-bins continuous single-variable numerical data into frequency count intervals to reveal distribution shape, central tendency, and skewness.',
    heuristics: 'Inferred when data profiling detects 1 Quantitative metric with no explicit temporal or categorical keys.',
    xDefault: 'score',
    yDefault: 'score',
    presets: [
      {
        name: 'Exam Score Frequency',
        data: [
          { score: 15 }, { score: 18 }, { score: 22 }, { score: 25 }, { score: 28 },
          { score: 32 }, { score: 35 }, { score: 38 }, { score: 45 }, { score: 52 },
        ],
      },
    ],
    a11yNotes:
      'Bin ranges and corresponding frequency counts are rendered as a structured frequency distribution table.',
  },

  'kpi-sparkline': {
    type: 'kpi-sparkline',
    title: 'KPI + Sparkline',
    badge: 'EXECUTIVE KPI',
    category: 'Business & Dashboard',
    categorySlug: 'dashboard',
    description:
      'Combines a prominent headline KPI figure with a micro-trend sparkline vector path to give instant contextual trend direction for dashboards.',
    heuristics: 'Recommended for dashboard executive summary cards.',
    xDefault: 'month',
    yDefault: 'mrr',
    presets: [
      {
        name: 'Monthly Recurring Revenue',
        data: [
          { month: 'Jan', mrr: 12000 },
          { month: 'Feb', mrr: 13500 },
          { month: 'Mar', mrr: 15200 },
          { month: 'Apr', mrr: 18400 },
          { month: 'May', mrr: 21900 },
        ],
      },
    ],
    a11yNotes:
      'Summary value is rendered inside an accessible headline with percentage delta announced to screen readers.',
  },

  candlestick: {
    type: 'candlestick',
    title: 'Candlestick Chart',
    badge: 'FINANCIAL OHLC',
    category: 'Trading & Financial',
    categorySlug: 'trading',
    description:
      'Maps trading sessions using green bullish and red bearish candle bodies with open, high, low, and close wick lines.',
    heuristics: 'Inferred when data profiling detects Open, High, Low, and Close price fields.',
    xDefault: 'date',
    yDefault: 'close',
    presets: [
      {
        name: 'Daily Asset Price Action',
        data: [
          { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
          { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
          { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
          { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
          { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
        ],
      },
    ],
    a11yNotes:
      'Each trading candle includes semantic table row output containing Date, Open, High, Low, Close, and Bullish/Bearish classification.',
  },

  funnel: {
    type: 'funnel',
    title: 'Funnel Chart',
    badge: 'CONVERSION STAGES',
    category: 'Business & Dashboard',
    categorySlug: 'dashboard',
    description:
      'Renders proportional trapezoids to track conversion progression and drop-off rates across sequential sales or signup funnel stages.',
    heuristics: 'Recommended for sequential user conversion funnels.',
    xDefault: 'stage',
    yDefault: 'count',
    presets: [
      {
        name: 'E-Commerce Purchase Funnel',
        data: [
          { stage: 'Visitors', count: 125000 },
          { stage: 'Views', count: 68000 },
          { stage: 'Cart', count: 24000 },
          { stage: 'Checkout', count: 14200 },
          { stage: 'Purchased', count: 9800 },
        ],
      },
    ],
    a11yNotes:
      'Calculates step-to-step drop-off percentages and provides an accessible conversion step hierarchy.',
  },

  donut: {
    type: 'donut',
    title: 'Donut Chart',
    badge: 'PROPORTIONAL SHARE',
    category: 'Business & Dashboard',
    categorySlug: 'dashboard',
    description:
      'Calculates radial slice angle proportions (0 to 2π) to visualize market share, device usage, and percentage breakdowns with an inner cutout.',
    heuristics: 'Recommended for discrete categorical shares (3–7 items) summing to 100%.',
    xDefault: 'device',
    yDefault: 'users',
    presets: [
      {
        name: 'Device Traffic Share',
        data: [
          { device: 'Desktop', users: 14200 },
          { device: 'Mobile Safari', users: 9800 },
          { device: 'Mobile Chrome', users: 6100 },
          { device: 'Tablet', users: 1500 },
        ],
      },
    ],
    a11yNotes:
      'Percentages and category proportions are structured into accessible tabular data with descriptive percentage annotations.',
  },

  area: {
    type: 'area',
    title: 'Area Chart',
    badge: 'GRADIENT VOLUME',
    category: 'Composition & Flow',
    categorySlug: 'composition',
    description:
      'Emphasizes cumulative magnitude over continuous time dimensions with linear SVG gradient fills below trend lines.',
    heuristics: 'Recommended for continuous volume, bandwidth, and cumulative metrics.',
    xDefault: 'month',
    yDefault: 'bandwidth',
    presets: [
      {
        name: 'Monthly Bandwidth Consumption',
        data: [
          { month: 'Jan', bandwidth: 120 },
          { month: 'Feb', bandwidth: 190 },
          { month: 'Mar', bandwidth: 310 },
          { month: 'Apr', bandwidth: 480 },
          { month: 'May', bandwidth: 640 },
        ],
      },
    ],
    a11yNotes:
      'Provides accessible time-series data table with cumulative aggregate statistics announced for screen readers.',
  },
};

export default function DynamicComponentOrCategoryPage() {
  const params = useParams();
  const slug = (params.slug as string) || 'dashboard';
  const router = useRouter();

  const isCategory = !!CATEGORY_MAP[slug];
  const isChartDetail = !!CHART_DETAILS[slug];

  if (!isCategory && !isChartDetail) {
    notFound();
  }

  // ==========================================
  // Render Category Page View
  // ==========================================
  if (isCategory) {
    const category = CATEGORY_MAP[slug];
    const isDark = category.dark;

    return (
      <div
        className={`min-h-screen font-sans antialiased transition-colors ${
          isDark ? 'bg-[#0f1611] text-[#e0e4dc]' : 'bg-[#f4f7f3] text-[#18241b]'
        }`}
      >
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
          {/* Category Header */}
          <div
            className={`space-y-4 pb-8 border-b ${
              isDark ? 'border-[#2d3a30]' : 'border-[#18241b]/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <Link
                href="/components"
                className="font-mono text-xs text-[#c2872e] hover:underline"
              >
                &larr; ALL CATEGORIES
              </Link>
              <span className={isDark ? 'text-[#60685c]' : 'text-[#60685c]'}>/</span>
              <span className="font-mono text-xs font-bold text-[#c2872e] uppercase">
                {category.badge}
              </span>
            </div>

            <h1 className="font-headline-lg text-3xl sm:text-4xl font-bold">
              {category.title}
            </h1>

            {/* Category Framing Note */}
            <div
              className={`p-4 rounded-xl border text-xs leading-relaxed ${
                isDark
                  ? 'bg-[#18221b] border-[#2d3a30] text-[#a4c995]'
                  : 'bg-white/80 border-[#18241b]/10 text-[#404641]'
              }`}
            >
              <span className="font-bold text-[#c2872e] mr-1">Framing Note:</span>
              {category.framingNote}
            </div>
          </div>

          {/* List of Chart Types in Category */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-2xl font-bold">
                Charts in {category.title} ({category.charts.length})
              </h2>
            </div>

            <div className="space-y-8">
              {category.charts.map((chartItem, idx) => (
                <div
                  key={idx}
                  className={`rounded-[2px] border p-5 space-y-4 transition-colors ${
                    isDark
                      ? 'bg-[#151f17] border-[#2d3a30] hover:border-[#9ba196]/30'
                      : 'bg-white border-[#18241b]/15 hover:border-[#18241b]/30'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3 border-inherit">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase font-bold text-[#c2872e] px-1.5 py-0.2 rounded-[2px] bg-[#c2872e]/10 border border-[#c2872e]/20">
                          {chartItem.type}
                        </span>
                        <h3 className="font-headline-md text-lg font-bold">
                          {chartItem.name}
                        </h3>
                      </div>
                      <p
                        className={`text-xs mt-0.5 ${
                          isDark ? 'text-[#9ba196]' : 'text-[#60685c]'
                        }`}
                      >
                        {chartItem.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/components/${chartItem.type}`}
                        className={`px-2.5 py-1 rounded-[2px] font-mono text-xs font-semibold border transition-colors ${
                          isDark
                            ? 'bg-[#18221b] border-[#2d3a30] text-[#e0e4dc] hover:bg-[#253329]'
                            : 'bg-[#f4f7f3] border-[#18241b]/15 text-[#18241b] hover:bg-[#e7eee1]'
                        }`}
                      >
                        View Detail
                      </Link>

                      <button
                        onClick={() => {
                          router.push(`/playground?type=${chartItem.type}`);
                        }}
                        className="px-2.5 py-1 rounded-[2px] bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold transition-colors"
                      >
                        Open in Playground
                      </button>
                    </div>
                  </div>

                  {/* Standardized Preview / Code Block */}
                  <ChartPreviewBlock
                    codeSnippet={chartItem.snippet}
                    dark={isDark}
                    dataCount={chartItem.data.length}
                    spec={{
                      type: chartItem.type,
                      encoding: {
                        x: chartItem.x ? { field: chartItem.x } : undefined,
                        y: chartItem.y ? { field: chartItem.y } : undefined,
                      },
                      data: chartItem.data,
                    }}
                  >
                    <div className="h-60 flex items-center justify-center">
                      <Chart
                        type={chartItem.type}
                        data={chartItem.data}
                        x={chartItem.x}
                        y={chartItem.y}
                        theme={isDark ? 'zinc' : undefined}
                      />
                    </div>
                  </ChartPreviewBlock>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ==========================================
  // Render Chart Detail Page View
  // ==========================================
  const config = CHART_DETAILS[slug];
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [xKey, setXKey] = useState(config.xDefault);
  const [yKey, setYKey] = useState(config.yDefault);
  const [chartTitle, setChartTitle] = useState(config.presets[0].name);
  const [color, setColor] = useState('#c2872e');
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');

  const currentPreset = config.presets[activePresetIdx] || config.presets[0];
  const currentData = currentPreset.data;
  const fieldOptions = Object.keys(currentData[0] || {}).map((f) => ({ label: f, value: f }));

  const currentSpec = useMemo(() => {
    return {
      version: '0.1.0' as const,
      type: config.type,
      title: chartTitle,
      data: currentData,
      encoding: {
        x: { field: xKey },
        y: { field: yKey },
        orientation,
      },
    };
  }, [config.type, chartTitle, currentData, xKey, yKey, orientation]);

  const liveJsxSnippet = `<Chart
  type="${config.type}"
  data={data}
  x="${xKey}"
  y="${yKey}"
  orientation="${orientation}"
  color="${color}"
  title="${chartTitle}"
/>`;

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Breadcrumb & Header */}
        <div className="space-y-4 pb-6 border-b border-[#18241b]/10">
          <div className="flex items-center gap-2">
            <Link
              href="/components"
              className="font-mono text-xs text-[#60685c] hover:text-[#18241b]"
            >
              Components
            </Link>
            <span className="text-[#60685c]">/</span>
            <Link
              href={`/components/${config.categorySlug}`}
              className="font-mono text-xs text-[#c2872e] hover:underline"
            >
              {config.category}
            </Link>
            <span className="text-[#60685c]">/</span>
            <span className="font-mono text-xs font-bold text-[#18241b] uppercase">
              {config.type}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#c2872e] bg-[#c2872e]/10 px-2.5 py-0.5 rounded-full border border-[#c2872e]/20 uppercase">
                  {config.badge}
                </span>
                <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold">
                  {config.title}
                </h1>
              </div>
              <p className="font-body-doc text-xs text-[#404641] max-w-3xl mt-1.5 leading-relaxed">
                {config.description}
              </p>
            </div>

            <button
              onClick={() => router.push(`/playground?type=${config.type}`)}
              className="px-4 py-2 rounded-lg bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 shadow-sm hover:-translate-y-0.5 whitespace-nowrap"
            >
              Try it in Playground &rarr;
            </button>
          </div>
        </div>

        {/* Live Chart Sandbox with Preview / Code and Preset Switcher */}
        <div className="space-y-3">
          {/* Preset Datasets Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold text-[#18241b] uppercase">
                Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {config.presets.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActivePresetIdx(i);
                      setChartTitle(p.name);
                    }}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-150 shadow-xs ${
                      activePresetIdx === i
                        ? 'bg-[#18241b] text-white font-bold shadow-sm'
                        : 'bg-white text-[#60685c] hover:text-[#18241b] border border-[#18241b]/12 hover:bg-[#f9fbf8]'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#60685c] uppercase">
              SVG Render Engine • SSR Safe
            </span>
          </div>

          <ChartPreviewBlock
            spec={currentSpec}
            codeSnippet={liveJsxSnippet}
            dataCount={currentData.length}
          >
            <div className="h-72 p-2 flex items-center justify-center">
              <Chart
                type={config.type}
                data={currentData}
                x={xKey}
                y={yKey}
                orientation={orientation}
                color={color}
                title={chartTitle}
              />
            </div>
          </ChartPreviewBlock>
        </div>

        {/* Full Interactive Prop Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-lg font-bold">Component Props Reference</h2>
            <span className="font-mono text-[11px] text-[#60685c]">
              Interactive controls update preview live
            </span>
          </div>

          <div className="bg-white border border-[#18241b]/10 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="bg-[#18241b] text-white border-b border-[#18241b]">
                  <th className="p-3 w-1/4">Name</th>
                  <th className="p-3 w-1/2">Description & Type</th>
                  <th className="p-3 w-1/4">Live Control</th>
                </tr>
              </thead>
              <tbody>
                <PropControlRow
                  name="title"
                  type="string"
                  defaultVal={`"${config.presets[0].name}"`}
                  description="Headline title rendered at the top of the chart scene."
                >
                  <TextControl value={chartTitle} onChange={(v) => setChartTitle(v)} />
                </PropControlRow>

                <PropControlRow
                  name="x"
                  type="string"
                  defaultVal={`"${config.xDefault}"`}
                  description="Data key corresponding to X-axis domain."
                >
                  <SelectControl
                    value={xKey}
                    options={fieldOptions}
                    onChange={(v) => setXKey(v)}
                  />
                </PropControlRow>

                <PropControlRow
                  name="y"
                  type="string"
                  defaultVal={`"${config.yDefault}"`}
                  description="Data key corresponding to Y-axis metric value."
                >
                  <SelectControl
                    value={yKey}
                    options={fieldOptions}
                    onChange={(v) => setYKey(v)}
                  />
                </PropControlRow>

                {config.type === 'bar' && (
                  <PropControlRow
                    name="orientation"
                    type="'vertical' | 'horizontal'"
                    defaultVal="'vertical'"
                    description="Switch between vertical column bars and horizontal ranking bars."
                  >
                    <SelectControl
                      value={orientation}
                      options={[
                        { label: 'vertical', value: 'vertical' },
                        { label: 'horizontal', value: 'horizontal' },
                      ]}
                      onChange={(v) => setOrientation(v as 'vertical' | 'horizontal')}
                    />
                  </PropControlRow>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Accessibility Ledger Section (NFR-5 Compliance) */}
        <div className="space-y-3 bg-white border border-[#18241b]/15 rounded-[2px] p-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#c2872e] uppercase px-1.5 py-0.2 rounded-[2px] bg-[#c2872e]/10 border border-[#c2872e]/20">
              A11Y Specification
            </span>
            <span className="font-headline-md text-base font-bold">
              Screen Reader & Keyboard Accessible Data Table
            </span>
          </div>

          <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
            {config.a11yNotes}
          </p>

          <div className="p-2.5 bg-[#f4f7f3] border border-[#18241b]/10 rounded-[2px] overflow-x-auto">
            <span className="font-mono text-[10px] text-[#60685c] uppercase block mb-1.5 font-bold">
              Rendered Semantic HTML Data Table:
            </span>
            <table className="w-full text-left font-mono text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-[#18241b]/20 text-[#18241b]">
                  {Object.keys(currentData[0] || {}).map((k) => (
                    <th key={k} className="p-1.5 uppercase font-bold">
                      {k}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, i) => (
                  <tr key={i} className="border-b border-[#18241b]/10 hover:bg-white/80">
                    {Object.values(row).map((v, j) => (
                      <td key={j} className="p-1.5 text-[#404641]">
                        {String(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Variants Preview Section */}
        {config.variants && config.variants.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-headline-md text-lg font-bold">Layout Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {config.variants.map((variant, idx) => {
                const variantSnippet = `<Chart\n  type="${variant.type || config.type}"\n  data={data}\n  x="${xKey}"\n  y="${yKey}"\n  orientation="${variant.orientation || 'vertical'}"\n/>`;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#18241b]/15 rounded-[2px] p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-md font-bold text-sm">{variant.name}</h3>
                      <span className="font-mono text-[10px] text-[#c2872e] font-bold uppercase">
                        {variant.orientation || variant.type}
                      </span>
                    </div>
                    <p className="font-body-ui text-xs text-[#60685c]">{variant.description}</p>
                    <ChartPreviewBlock
                      codeSnippet={variantSnippet}
                      dataCount={currentData.length}
                      spec={{
                        type: variant.type || config.type,
                        encoding: { x: { field: xKey }, y: { field: yKey } },
                        data: currentData,
                      }}
                    >
                      <div className="h-44 flex items-center justify-center">
                        <Chart
                          type={variant.type || config.type}
                          data={currentData}
                          x={xKey}
                          y={yKey}
                          orientation={variant.orientation}
                        />
                      </div>
                    </ChartPreviewBlock>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
