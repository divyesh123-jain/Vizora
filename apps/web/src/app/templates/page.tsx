'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { AutoChart, Chart } from '@vizora/react';
import { CodeBlock } from '../../components/CodeBlock';

const SAAS_METRICS = [
  { month: 'Jan', mrr: 12400 },
  { month: 'Feb', mrr: 14800 },
  { month: 'Mar', mrr: 18200 },
  { month: 'Apr', mrr: 21500 },
  { month: 'May', mrr: 26800 },
  { month: 'Jun', mrr: 32400 },
];

const REGIONAL_BREAKDOWN = [
  { region: 'North America', arr: 145000 },
  { region: 'Europe', arr: 98000 },
  { region: 'Asia Pacific', arr: 162000 },
  { region: 'Latin America', arr: 48000 },
];

const INFRASTRUCTURE_CPU = [
  { time: '00:00', load: 22 },
  { time: '04:00', load: 18 },
  { time: '08:00', load: 68 },
  { time: '12:00', load: 89 },
  { time: '16:00', load: 74 },
  { time: '20:00', load: 45 },
];

export default function TemplatesPage() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copiedSuite, setCopiedSuite] = useState(false);

  const saasSuiteCode = `import React from 'react';
import { AutoChart, Chart } from '@vizora/react';

const mrrData = [
  { month: 'Jan', mrr: 12400 },
  { month: 'Feb', mrr: 14800 },
  { month: 'Mar', mrr: 18200 },
  { month: 'Apr', mrr: 21500 },
  { month: 'May', mrr: 26800 },
  { month: 'Jun', mrr: 32400 },
];

const regionalData = [
  { region: 'North America', arr: 145000 },
  { region: 'Europe', arr: 98000 },
  { region: 'Asia Pacific', arr: 162000 },
  { region: 'Latin America', arr: 48000 },
];

export function SaaSExecutiveDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 border">
      <div className="bg-white p-4 rounded shadow">
        <AutoChart data={mrrData} title="MRR Growth Trend ($)" />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <Chart type="bar" data={regionalData} x="region" y="arr" title="ARR by Region" />
      </div>
    </div>
  );
}`;

  const handleCopySuite = () => {
    navigator.clipboard.writeText(saasSuiteCode);
    setCopiedSuite(true);
    setTimeout(() => setCopiedSuite(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-10">
        {/* Header */}
        <div className="border-b border-[#18241b]/10 pb-6 space-y-2">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
            READY-TO-USE DASHBOARD BLOCKS
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
            Pre-Built Dashboard Suites
          </h1>
          <p className="font-body-doc text-[#404641] text-base max-w-2xl leading-relaxed">
            Copy complete, fully responsive dashboard layouts directly into your React or Next.js app. Zero configuration needed.
          </p>
        </div>

        {/* Template Suite 1: SaaS Executive Metrics */}
        <div className="bg-white/80 border border-[#18241b]/15 rounded-3xl p-6 space-y-6 shadow-xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#18241b]/10 pb-4">
            <div className="space-y-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#c2872e]">
                SUITE 01 • EXECUTIVE METRICS
              </span>
              <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
                SaaS Growth & ARR Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-3 font-sans text-xs">
              <div className="flex bg-[#18241b]/8 p-1 rounded-full border border-[#18241b]/10">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3.5 py-1.5 font-bold rounded-full transition-all duration-200 ${
                    activeTab === 'preview' ? 'bg-[#18241b] text-white shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3.5 py-1.5 font-bold rounded-full transition-all duration-200 ${
                    activeTab === 'code' ? 'bg-[#18241b] text-white shadow-sm' : 'text-[#60685c] hover:text-[#18241b]'
                  }`}
                >
                  Component Code
                </button>
              </div>

              <button
                onClick={handleCopySuite}
                className="px-4 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-white font-sans text-xs font-bold rounded-xl uppercase tracking-wider shadow-md hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                {copiedSuite ? '✓ COPIED CODE' : 'COPY DASHBOARD CODE'}
              </button>
            </div>
          </div>

          {activeTab === 'preview' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Widget 1 */}
              <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-5 space-y-3 shadow-inner">
                <div className="flex justify-between font-sans text-xs font-bold text-[#60685c] border-b border-[#18241b]/10 pb-2">
                  <span>MRR REVENUE TREND</span>
                  <span className="text-[#c2872e] font-mono text-[11px] font-bold">&lt;AutoChart /&gt;</span>
                </div>
                <div className="min-h-[240px] flex items-center justify-center">
                  <AutoChart data={SAAS_METRICS} title="Monthly Recurring Revenue ($)" />
                </div>
              </div>

              {/* Widget 2 */}
              <div className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-5 space-y-3 shadow-inner">
                <div className="flex justify-between font-sans text-xs font-bold text-[#60685c] border-b border-[#18241b]/10 pb-2">
                  <span>REGIONAL ARR DISTRIBUTION</span>
                  <span className="text-[#c2872e] font-mono text-[11px] font-bold">&lt;Chart type="bar" /&gt;</span>
                </div>
                <div className="min-h-[240px] flex items-center justify-center">
                  <Chart type="bar" data={REGIONAL_BREAKDOWN} x="region" y="arr" title="ARR by Territory ($)" />
                </div>
              </div>
            </div>
          ) : (
            <CodeBlock code={saasSuiteCode} language="typescript" title="SaaSExecutiveDashboard.tsx" />
          )}
        </div>

        {/* Template Suite 2: Infrastructure Monitor */}
        <div className="bg-white/80 border border-[#18241b]/15 rounded-3xl p-6 space-y-6 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-4">
            <div className="space-y-1">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#c2872e]">
                SUITE 02 • INFRASTRUCTURE MONITORING
              </span>
              <h2 className="font-headline-md text-2xl text-[#18241b] font-bold">
                Server Performance & Cpu Telemetry
              </h2>
            </div>
          </div>

          <div className="bg-[#f4f7f3] rounded-2xl border border-[#18241b]/10 p-6 min-h-[260px] flex items-center justify-center shadow-inner">
            <AutoChart data={INFRASTRUCTURE_CPU} title="24-Hour CPU Utilization Rate (%)" />
          </div>
        </div>
      </main>
    </div>
  );
}
