'use client';

import React from 'react';
import { Chart, ChartContainer, ChartTooltip, ChartLegend } from '@vizora/react';
import { Navbar } from '../../components/Navbar';

const SAAS_METRICS_DATA = [
  { month: 'Jan', arr: 42000, mrr: 3500 },
  { month: 'Feb', arr: 58000, mrr: 4800 },
  { month: 'Mar', arr: 84000, mrr: 7000 },
  { month: 'Apr', arr: 110000, mrr: 9200 },
  { month: 'May', arr: 145000, mrr: 12100 },
];

const DEVICE_SHARE_DATA = [
  { device: 'Desktop', users: 14200 },
  { device: 'Mobile Safari', users: 9800 },
  { device: 'Mobile Chrome', users: 6100 },
  { device: 'Tablet', users: 1500 },
];

const TRAFFIC_TREND_DATA = [
  { day: 'Mon', visitors: 2400 },
  { day: 'Tue', visitors: 3800 },
  { day: 'Wed', visitors: 4200 },
  { day: 'Thu', visitors: 3900 },
  { day: 'Fri', visitors: 5100 },
  { day: 'Sat', visitors: 2800 },
  { day: 'Sun', visitors: 3100 },
];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Title */}
        <div className="space-y-3 border-b border-[#18241b]/10 pb-6">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
            PRODUCTION DASHBOARD TEMPLATES
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
            Real-World Analytics Dashboards
          </h1>
          <p className="font-body-doc text-[#404641] max-w-2xl text-base leading-relaxed">
            Demonstrates how Vizora's framework-agnostic core primitives and React adapters compose into production-grade SaaS, Web Analytics, and DevOps monitoring dashboards.
          </p>
        </div>

        {/* Template 1: SaaS Revenue & Growth */}
        <section className="bg-white/90 border border-[#18241b]/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#18241b]/10 pb-4 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase bg-[#c2872e]/15 text-[#c2872e] px-2.5 py-0.5 rounded-full font-bold">
                TEMPLATE 01
              </span>
              <h2 className="font-headline-md text-2xl text-[#18241b] font-bold mt-1">
                SaaS Revenue & MRR Growth
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#60685c]">Theme: Zinc Preset</span>
            </div>
          </div>

          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-4 space-y-1">
              <span className="text-xs text-[#60685c] font-medium">ARR (Annual Recurring)</span>
              <div className="text-2xl font-bold font-mono text-[#18241b]">$145,000</div>
              <span className="text-[11px] text-[#059669] font-bold">↑ +31.8% vs last month</span>
            </div>
            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-4 space-y-1">
              <span className="text-xs text-[#60685c] font-medium">Net MRR Added</span>
              <div className="text-2xl font-bold font-mono text-[#18241b]">$12,100</div>
              <span className="text-[11px] text-[#059669] font-bold">↑ +18.2% new subscribers</span>
            </div>
            <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-4 space-y-1">
              <span className="text-xs text-[#60685c] font-medium">Gross Retention Rate</span>
              <div className="text-2xl font-bold font-mono text-[#18241b]">97.4%</div>
              <span className="text-[11px] text-[#60685c]">Enterprise cohort tier</span>
            </div>
          </div>

          {/* Main Revenue Chart */}
          <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-4 h-72">
            <Chart
              type="area"
              data={SAAS_METRICS_DATA}
              x="month"
              y="arr"
              theme="zinc"
              title="Annual Recurring Revenue Progression ($)"
            />
          </div>
        </section>

        {/* Template 2: Web Traffic & Device Share */}
        <section className="bg-white/90 border border-[#18241b]/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#18241b]/10 pb-4 gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase bg-[#059669]/15 text-[#059669] px-2.5 py-0.5 rounded-full font-bold">
                TEMPLATE 02
              </span>
              <h2 className="font-headline-md text-2xl text-[#18241b] font-bold mt-1">
                Web Traffic & Proportional Share
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#60685c]">Theme: Emerald Preset</span>
            </div>
          </div>

          {/* Grid Layout: Line + Donut */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-4 h-72">
              <Chart
                type="line"
                data={TRAFFIC_TREND_DATA}
                x="day"
                y="visitors"
                theme="emerald"
                title="Daily Active Visitors (7-Day)"
              />
            </div>
            <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-4 h-72">
              <Chart
                type="donut"
                data={DEVICE_SHARE_DATA}
                x="device"
                y="users"
                theme="emerald"
                title="Device Breakdown"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
