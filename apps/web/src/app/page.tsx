'use client';

import React from 'react';
import { AutoChart, Chart } from '@vizora/react';

const sampleSalesData = [
  { region: 'North America', sales: 1250 },
  { region: 'Europe', sales: 980 },
  { region: 'Asia Pacific', sales: 1420 },
  { region: 'Latin America', sales: 610 },
];

const sampleTrendData = [
  { date: '2026-01-01', activeUsers: 4500 },
  { date: '2026-02-01', activeUsers: 5200 },
  { date: '2026-03-01', activeUsers: 6800 },
  { date: '2026-04-01', activeUsers: 8100 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans p-8 md:p-16">
      <header className="max-w-5xl mx-auto mb-12">
        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono rounded-full mb-3">
          Vizora Monorepo MVP Engine
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">Vizora Interactive Showcase</h1>
        <p className="text-slate-400 mt-2 text-lg">
          Framework-agnostic chart runtime + deterministic data profiling + automatic heuristic recommendation.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-100">AutoChart (Heuristic Mode)</h2>
            <p className="text-sm text-slate-400">
              Inferring categorical + quantitative fields automatically → Bar chart recommendation
            </p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex justify-center">
            <AutoChart data={sampleSalesData} title="Regional Sales Performance" />
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-100">Explicit Chart API</h2>
            <p className="text-sm text-slate-400">
              Explicitly bound x=&quot;region&quot; and y=&quot;sales&quot; via &lt;Chart /&gt; escape hatch
            </p>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex justify-center">
            <Chart
              data={sampleSalesData}
              type="bar"
              x="region"
              y="sales"
              title="Explicit Regional Breakdown"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
