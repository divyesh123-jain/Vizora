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
    <div className="min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto p-4 sm:p-6 space-y-10">
        {/* Header */}
        <div className="border-b border-[#1e2a22]/20 pb-6 space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c2872e]">
            READY-TO-USE DASHBOARD BLOCKS
          </span>
          <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] font-bold">
            Pre-Built Dashboard Suites
          </h1>
          <p className="font-body-doc text-[#434844] text-base max-w-2xl leading-relaxed">
            Copy complete, fully responsive dashboard layouts directly into your React or Next.js app. Zero configuration needed.
          </p>
        </div>

        {/* Template Suite 1: SaaS Executive Metrics */}
        <div className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-6 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1e2a22]/20 pb-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold uppercase text-[#c2872e]">
                SUITE 01 • EXECUTIVE METRICS
              </span>
              <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
                SaaS Growth & ARR Dashboard
              </h2>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs">
              <div className="flex bg-[#ecefea] p-1 border border-[#1e2a22]">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 font-bold transition-all ${
                    activeTab === 'preview' ? 'bg-[#1e2a22] text-[#ecefea]' : 'text-[#6e756a]'
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-3 py-1 font-bold transition-all ${
                    activeTab === 'code' ? 'bg-[#1e2a22] text-[#ecefea]' : 'text-[#6e756a]'
                  }`}
                >
                  Component Code
                </button>
              </div>

              <button
                onClick={handleCopySuite}
                className="px-4 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-[#1e2a22] font-bold uppercase tracking-wider transition-colors"
              >
                {copiedSuite ? '✓ COPIED CODE' : 'COPY DASHBOARD CODE'}
              </button>
            </div>
          </div>

          {activeTab === 'preview' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Widget 1 */}
              <div className="bg-white border border-[#1e2a22]/20 p-5 space-y-3">
                <div className="flex justify-between font-mono text-xs text-[#6e756a] border-b border-[#1e2a22]/10 pb-2">
                  <span>MRR REVENUE TREND</span>
                  <span className="text-[#c2872e] font-bold">&lt;AutoChart /&gt;</span>
                </div>
                <div className="min-h-[240px] flex items-center justify-center">
                  <AutoChart data={SAAS_METRICS} title="Monthly Recurring Revenue ($)" />
                </div>
              </div>

              {/* Widget 2 */}
              <div className="bg-white border border-[#1e2a22]/20 p-5 space-y-3">
                <div className="flex justify-between font-mono text-xs text-[#6e756a] border-b border-[#1e2a22]/10 pb-2">
                  <span>REGIONAL ARR DISTRIBUTION</span>
                  <span className="text-[#c2872e] font-bold">&lt;Chart type="bar" /&gt;</span>
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
        <div className="bg-[#f7faf5] border border-[#1e2a22] p-6 space-y-6 shadow-md">
          <div className="flex items-center justify-between border-b border-[#1e2a22]/20 pb-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold uppercase text-[#c2872e]">
                SUITE 02 • INFRASTRUCTURE MONITORING
              </span>
              <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
                Server Performance & Cpu Telemetry
              </h2>
            </div>
          </div>

          <div className="bg-white border border-[#1e2a22]/20 p-6 min-h-[260px] flex items-center justify-center">
            <AutoChart data={INFRASTRUCTURE_CPU} title="24-Hour CPU Utilization Rate (%)" />
          </div>
        </div>
      </main>
    </div>
  );
}
