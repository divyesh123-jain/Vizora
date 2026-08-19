'use client';

import React from 'react';
import Link from 'next/link';
import { Chart } from '@vizora/react';
import { Navbar } from '../../components/Navbar';
import { ChartPreviewBlock } from '../../components/ChartPreviewBlock';

export interface DashboardTemplate {
  slug: string;
  title: string;
  badge: string;
  category: string;
  theme: 'default' | 'zinc' | 'emerald' | 'amber';
  description: string;
  metrics: { label: string; value: string; sparkline: number[] }[];
  charts: {
    title: string;
    type: 'line' | 'bar' | 'scatter' | 'histogram' | 'kpi-sparkline' | 'donut' | 'area' | 'candlestick' | 'funnel';
    x?: string;
    y?: string;
    data: Record<string, unknown>[];
    widthClass?: string;
  }[];
}

export const TEMPLATES_LIST: DashboardTemplate[] = [
  {
    slug: 'saas-revenue',
    title: 'Executive SaaS Revenue & MRR Growth',
    badge: 'TEMPLATE 01 • EXECUTIVE',
    category: 'Business Analytics',
    theme: 'zinc',
    description:
      'High-level SaaS recurring revenue progression, net MRR added, and gross retention metrics composed into an executive summary board.',
    metrics: [
      { label: 'ARR (Annual Recurring)', value: '$145,000', sparkline: [42, 58, 84, 110, 145] },
      { label: 'Net MRR Added', value: '$12,100', sparkline: [7.8, 9.2, 10.4, 11.1, 12.1] },
      { label: 'Gross Retention', value: '97.4%', sparkline: [95.8, 96.2, 96.9, 97.1, 97.4] },
    ],
    charts: [
      {
        title: 'Annual Recurring Revenue ($)',
        type: 'area',
        x: 'month',
        y: 'arr',
        widthClass: 'lg:col-span-2',
        data: [
          { month: 'Jan', arr: 42000 },
          { month: 'Feb', arr: 58000 },
          { month: 'Mar', arr: 84000 },
          { month: 'Apr', arr: 110000 },
          { month: 'May', arr: 145000 },
        ],
      },
      {
        title: 'New Subscriber Additions',
        type: 'bar',
        x: 'month',
        y: 'subs',
        widthClass: 'lg:col-span-1',
        data: [
          { month: 'Jan', subs: 120 },
          { month: 'Feb', subs: 190 },
          { month: 'Mar', subs: 280 },
          { month: 'Apr', subs: 390 },
          { month: 'May', subs: 510 },
        ],
      },
    ],
  },
  {
    slug: 'web-traffic',
    title: 'Web Traffic & Device Conversion',
    badge: 'TEMPLATE 02 • ANALYTICS',
    category: 'Web Analytics',
    theme: 'emerald',
    description:
      'Daily visitor acquisition tracking paired with device market share breakdowns and signup funnel conversions.',
    metrics: [
      { label: 'Daily Active Visitors', value: '38,420', sparkline: [24, 38, 42, 39, 51, 28, 31] },
      { label: 'Mobile Share', value: '62.8%', sparkline: [58, 59, 61, 60, 62.8] },
      { label: 'Avg Session Duration', value: '4m 12s', sparkline: [3.8, 3.9, 4.0, 4.1, 4.2] },
    ],
    charts: [
      {
        title: '7-Day Active Visitors',
        type: 'line',
        x: 'day',
        y: 'visitors',
        widthClass: 'lg:col-span-2',
        data: [
          { day: 'Mon', visitors: 2400 },
          { day: 'Tue', visitors: 3800 },
          { day: 'Wed', visitors: 4200 },
          { day: 'Thu', visitors: 3900 },
          { day: 'Fri', visitors: 5100 },
          { day: 'Sat', visitors: 2800 },
          { day: 'Sun', visitors: 3100 },
        ],
      },
      {
        title: 'Traffic by Device Tier',
        type: 'donut',
        x: 'device',
        y: 'users',
        widthClass: 'lg:col-span-1',
        data: [
          { device: 'Desktop', users: 14200 },
          { device: 'Mobile Safari', users: 9800 },
          { device: 'Mobile Chrome', users: 6100 },
          { device: 'Tablet', users: 1500 },
        ],
      },
    ],
  },
  {
    slug: 'market-terminal',
    title: 'Financial Market Data Terminal',
    badge: 'TEMPLATE 03 • TRADING',
    category: 'Financial Markets',
    theme: 'zinc',
    description:
      'High-frequency trading terminal with OHLC candlestick price action wicks, volume profile bars, and multi-symbol watchlists.',
    metrics: [
      { label: 'VIZ / USD Last Price', value: '$176.40', sparkline: [150, 158, 153, 168, 176.4] },
      { label: '24h Volume', value: '$1.42B', sparkline: [1.1, 1.2, 1.35, 1.28, 1.42] },
      { label: 'Market Cap', value: '$48.6B', sparkline: [42, 44, 46, 45, 48.6] },
    ],
    charts: [
      {
        title: 'Daily Price Candlestick Session',
        type: 'candlestick',
        x: 'date',
        widthClass: 'lg:col-span-2',
        data: [
          { date: 'Mon', open: 150, high: 162, low: 145, close: 158 },
          { date: 'Tue', open: 158, high: 165, low: 152, close: 153 },
          { date: 'Wed', open: 153, high: 170, low: 150, close: 168 },
          { date: 'Thu', open: 168, high: 174, low: 160, close: 162 },
          { date: 'Fri', open: 162, high: 180, low: 159, close: 176 },
        ],
      },
      {
        title: 'Trading Session Volume',
        type: 'bar',
        x: 'date',
        y: 'volume',
        widthClass: 'lg:col-span-1',
        data: [
          { date: 'Mon', volume: 14200 },
          { date: 'Tue', volume: 22800 },
          { date: 'Wed', volume: 18400 },
          { date: 'Thu', volume: 31000 },
          { date: 'Fri', volume: 27500 },
        ],
      },
    ],
  },
  {
    slug: 'devops-health',
    title: 'DevOps & Infrastructure Health',
    badge: 'TEMPLATE 04 • INFRASTRUCTURE',
    category: 'System Operations',
    theme: 'amber',
    description:
      'Continuous latency distribution histogram, server CPU load sparklines, and cluster memory scatter correlations.',
    metrics: [
      { label: 'P99 Latency', value: '42ms', sparkline: [58, 52, 48, 45, 42] },
      { label: 'Cluster CPU Average', value: '44.8%', sparkline: [38, 42, 51, 48, 44.8] },
      { label: 'Active Pods', value: '128 / 128', sparkline: [120, 124, 128, 128, 128] },
    ],
    charts: [
      {
        title: 'P99 Response Latency Distribution (ms)',
        type: 'histogram',
        x: 'latency',
        widthClass: 'lg:col-span-2',
        data: [
          { latency: 15 }, { latency: 18 }, { latency: 22 }, { latency: 25 }, { latency: 28 },
          { latency: 32 }, { latency: 35 }, { latency: 38 }, { latency: 45 }, { latency: 52 },
        ],
      },
      {
        title: 'Server CPU Utilization',
        type: 'kpi-sparkline',
        x: 'hour',
        y: 'cpu',
        widthClass: 'lg:col-span-1',
        data: [
          { hour: '00:00', cpu: 22 },
          { hour: '04:00', cpu: 18 },
          { hour: '08:00', cpu: 65 },
          { hour: '12:00', cpu: 84 },
          { hour: '16:00', cpu: 52 },
        ],
      },
    ],
  },
];

// Pure 3-element KPI Card: Numeral, Label, Waypoint Sparkline
function MicroKpiCard({ label, value, sparkline }: { label: string; value: string; sparkline: number[] }) {
  const min = Math.min(...sparkline);
  const max = Math.max(...sparkline);
  const range = max - min || 1;
  const points = sparkline
    .map((v, i) => {
      const x = (i / (sparkline.length - 1)) * 60;
      const y = 20 - ((v - min) / range) * 16;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="bg-[#f4f7f3] dark:bg-[#151f17] border border-[#18241b]/10 dark:border-[#2d3a30] rounded-xl p-4 flex items-center justify-between shadow-xs hover:shadow-sm transition-all">
      <div className="space-y-1">
        <span className="font-mono text-xs text-[#60685c] block">{label}</span>
        <div className="text-xl font-bold font-mono text-[#18241b] dark:text-[#f1f5ee]">{value}</div>
      </div>
      <svg className="w-16 h-6 shrink-0 overflow-visible" viewBox="0 0 60 20">
        <polyline
          fill="none"
          stroke="#c2872e"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    </div>
  );
}

export default function TemplatesGalleryPage() {
  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Header */}
        <div className="space-y-2.5 border-b border-[#18241b]/10 pb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
              COMPOSED TEMPLATES GALLERY
            </span>
            <span className="font-mono text-xs text-[#60685c]">
              4 Production Layouts
            </span>
          </div>

          <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
            Real-World Analytics Dashboards
          </h1>

          <p className="font-body-doc text-[#404641] max-w-3xl text-xs sm:text-sm leading-relaxed">
            Pre-assembled, production-grade dashboard compositions combining Vizora&apos;s deterministic visualization primitives with responsive layouts, KPI summaries, and spec ledger bands.
          </p>
        </div>

        {/* Templates List */}
        <div className="space-y-10">
          {TEMPLATES_LIST.map((tpl) => (
            <section
              key={tpl.slug}
              className="bg-white border border-[#18241b]/10 rounded-xl p-5 sm:p-6 space-y-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#18241b]/20"
            >
              {/* Template Title & Action Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#18241b]/10 pb-3.5 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase bg-[#c2872e]/10 text-[#c2872e] px-2.5 py-0.5 rounded-full font-bold border border-[#c2872e]/20">
                      {tpl.badge}
                    </span>
                    <span className="font-mono text-xs text-[#60685c]">{tpl.category}</span>
                  </div>
                  <h2 className="font-headline-md text-xl text-[#18241b] font-bold mt-1">
                    {tpl.title}
                  </h2>
                  <p className="font-body-ui text-xs text-[#60685c] mt-0.5 max-w-2xl">
                    {tpl.description}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/templates/${tpl.slug}`}
                    className="px-3 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold rounded-[2px] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Dashboard Code</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* 3-Element KPI Summary Cards (§3.6) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {tpl.metrics.map((m, idx) => (
                  <MicroKpiCard
                    key={idx}
                    label={m.label}
                    value={m.value}
                    sparkline={m.sparkline}
                  />
                ))}
              </div>

              {/* Composed Chart Grid with Standardized Preview / Code Block */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {tpl.charts.map((chart, cIdx) => {
                  const snippet = `<Chart\n  type="${chart.type}"\n  data={data}\n  ${chart.x ? `x="${chart.x}"\n  ` : ''}${chart.y ? `y="${chart.y}"\n  ` : ''}title="${chart.title}"\n  theme="${tpl.theme}"\n/>`;
                  return (
                    <div key={cIdx} className={chart.widthClass || 'lg:col-span-1'}>
                      <ChartPreviewBlock
                        title={chart.title}
                        codeSnippet={snippet}
                        dataCount={chart.data.length}
                        spec={{
                          type: chart.type,
                          encoding: {
                            x: chart.x ? { field: chart.x } : undefined,
                            y: chart.y ? { field: chart.y } : undefined,
                          },
                          data: chart.data,
                        }}
                      >
                        <div className="h-60 p-2 flex items-center justify-center">
                          <Chart
                            type={chart.type}
                            data={chart.data}
                            x={chart.x}
                            y={chart.y}
                            theme={tpl.theme}
                          />
                        </div>
                      </ChartPreviewBlock>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
