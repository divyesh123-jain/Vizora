'use client';

import React from 'react';
import { Chart } from '@vizora/react';

const KPI_MRR = [
  { month: 'Jan', val: 12000 }, { month: 'Feb', val: 12500 }, { month: 'Mar', val: 13200 },
  { month: 'Apr', val: 13100 }, { month: 'May', val: 14800 }, { month: 'Jun', val: 15400 }
];
const KPI_USERS = [
  { month: 'Jan', val: 800 }, { month: 'Feb', val: 950 }, { month: 'Mar', val: 1100 },
  { month: 'Apr', val: 1050 }, { month: 'May', val: 1300 }, { month: 'Jun', val: 1420 }
];
const KPI_CHURN = [
  { month: 'Jan', val: 2.1 }, { month: 'Feb', val: 2.4 }, { month: 'Mar', val: 2.0 },
  { month: 'Apr', val: 1.8 }, { month: 'May', val: 1.5 }, { month: 'Jun', val: 1.4 }
];
const TRAFFIC_DATA = [
  { date: '06-01', pageviews: 2400 }, { date: '06-05', pageviews: 2800 },
  { date: '06-10', pageviews: 2500 }, { date: '06-15', pageviews: 3200 },
  { date: '06-20', pageviews: 3800 }, { date: '06-25', pageviews: 3600 },
  { date: '06-30', pageviews: 4500 },
];
const FUNNEL_DATA = [
  { stage: 'Site Visits', count: 22000 },
  { stage: 'Sign Ups', count: 4500 },
  { stage: 'Trial', count: 2100 },
  { stage: 'Paid', count: 850 },
];
const DONUT_DATA = [
  { source: 'Organic', users: 12500 },
  { source: 'Direct', users: 5400 },
  { source: 'Social', users: 2800 },
  { source: 'Referral', users: 1300 },
];

export default function DashboardCategoryPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="pb-5 border-b border-[#18241b]/10">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          Dashboard & Business
        </span>
        <h1 className="font-headline-lg text-3xl text-[#18241b] font-bold mt-1">
          Executive Overview
        </h1>
        <p className="text-[#60685c] text-sm mt-1 max-w-xl">
          High-level business metrics, traffic trends, and conversion funnels.
        </p>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Monthly Revenue', value: '$15,400', change: '+4.05%', data: KPI_MRR, theme: 'emerald' },
          { label: 'Active Users', value: '1,420', change: '+9.23%', data: KPI_USERS, theme: 'default' },
          { label: 'Churn Rate', value: '1.4%', change: '−0.1%', data: KPI_CHURN, theme: 'sunset' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c]">{kpi.label}</p>
            <p className="font-sans text-2xl font-bold text-[#18241b] mt-1">{kpi.value}</p>
            <p className="font-sans text-xs text-[#10b981] font-semibold mt-0.5">{kpi.change} vs last month</p>
            {/* Chart fills this explicit-height box */}
            <div className="mt-4 h-16 w-full">
              <Chart type="kpi-sparkline" data={kpi.data} x="month" y="val" theme={kpi.theme} />
            </div>
          </div>
        ))}
      </div>

      {/* Traffic Area Chart */}
      <div className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c]">Traffic Acquisition</p>
        <h3 className="font-sans text-base font-bold text-[#18241b] mt-0.5 mb-5">Page Views — Last 30 Days</h3>
        <div className="h-72 w-full">
          <Chart type="area" data={TRAFFIC_DATA} x="date" y="pageviews" theme="default" />
        </div>
      </div>

      {/* Donut + Funnel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c]">Traffic Sources</p>
          <h3 className="font-sans text-base font-bold text-[#18241b] mt-0.5 mb-5">Channel Breakdown</h3>
          <div className="h-64 w-full">
            <Chart type="donut" data={DONUT_DATA} x="source" y="users" theme="default" />
          </div>
        </div>
        <div className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c]">Conversion Funnel</p>
          <h3 className="font-sans text-base font-bold text-[#18241b] mt-0.5 mb-5">User Pipeline</h3>
          <div className="h-64 w-full">
            <Chart type="funnel" data={FUNNEL_DATA} x="stage" y="count" theme="default" />
          </div>
        </div>
      </div>
    </div>
  );
}
