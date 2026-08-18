'use client';

import React from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '../../../components/Navbar';
import { Chart } from '@vizora/react';
import { LegendBand } from '../../../components/LegendBand';
import { CodeBlock } from '../../../components/CodeBlock';
import { TEMPLATES_LIST, DashboardTemplate } from '../page';

export default function TemplateDetailPage() {
  const params = useParams();
  const slug = params.template as string;
  const router = useRouter();

  const template: DashboardTemplate | undefined = TEMPLATES_LIST.find((t) => t.slug === slug);

  if (!template) {
    notFound();
  }

  const generatedDashboardCode = `import React from 'react';
import { Chart } from '@vizora/react';

// Composed Dashboard: ${template.title}
export default function ${template.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}Dashboard() {
  return (
    <div className="space-y-6 p-6 bg-[#f4f7f3] min-h-screen font-sans">
      <div className="border-b border-[#18241b]/10 pb-4">
        <h1 className="text-2xl font-bold text-[#18241b]">${template.title}</h1>
        <p className="text-xs text-[#60685c]">${template.description}</p>
      </div>

      {/* KPI Headline Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${template.metrics.map(m => `
        <div className="bg-white border border-[#18241b]/10 rounded-2xl p-4">
          <div className="text-xs text-[#60685c]">${m.label}</div>
          <div className="text-2xl font-bold font-mono text-[#18241b] mt-1">${m.value}</div>
          <div className="text-[11px] font-bold text-[#059669] mt-1">${m.change}</div>
        </div>`).join('')}
      </div>

      {/* Composed Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        ${template.charts.map((c) => `
        <div className="${c.widthClass || 'lg:col-span-1'} bg-white rounded-2xl border border-[#18241b]/10 p-4 h-72">
          <Chart
            type="${c.type}"
            data={${JSON.stringify(c.data)}}
            ${c.x ? `x="${c.x}"` : ''}
            ${c.y ? `y="${c.y}"` : ''}
            theme="${template.theme}"
            title="${c.title}"
          />
        </div>`).join('')}
      </div>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {/* Breadcrumbs & Header */}
        <div className="space-y-4 border-b border-[#18241b]/10 pb-6">
          <div className="flex items-center gap-2">
            <Link
              href="/templates"
              className="font-mono text-xs text-[#60685c] hover:text-[#18241b]"
            >
              &larr; Templates Gallery
            </Link>
            <span className="text-[#60685c]">/</span>
            <span className="font-mono text-xs font-bold text-[#c2872e] uppercase">
              {template.badge}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-headline-lg text-3xl sm:text-4xl font-bold text-[#18241b]">
                {template.title}
              </h1>
              <p className="font-body-doc text-sm text-[#404641] max-w-3xl mt-2 leading-relaxed">
                {template.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push(`/playground?type=${template.charts[0].type}`)}
                className="px-4 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                Open in Playground &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Live Dashboard Preview */}
        <section className="bg-white/90 border border-[#18241b]/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-xl">
          {/* KPI Headline Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {template.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#f4f7f3] border border-[#18241b]/10 rounded-2xl p-4 space-y-1"
              >
                <span className="text-xs text-[#60685c] font-medium">{m.label}</span>
                <div className="text-2xl font-bold font-mono text-[#18241b]">{m.value}</div>
                <span
                  className={`text-[11px] font-bold font-mono ${
                    m.isPositive ? 'text-[#059669]' : 'text-red-500'
                  }`}
                >
                  {m.change}
                </span>
              </div>
            ))}
          </div>

          {/* Chart Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {template.charts.map((chart, cIdx) => (
              <div
                key={cIdx}
                className={`bg-[#f9fbf8] rounded-2xl border border-[#18241b]/10 overflow-hidden flex flex-col justify-between ${
                  chart.widthClass || 'lg:col-span-1'
                }`}
              >
                <div className="p-4 border-b border-[#18241b]/8 flex items-center justify-between">
                  <h4 className="font-headline-md font-bold text-sm text-[#18241b]">
                    {chart.title}
                  </h4>
                  <span className="font-mono text-[10px] text-[#c2872e] uppercase font-bold">
                    {chart.type}
                  </span>
                </div>

                <div className="h-64 p-4 flex items-center justify-center">
                  <Chart
                    type={chart.type}
                    data={chart.data}
                    x={chart.x}
                    y={chart.y}
                    theme={template.theme}
                  />
                </div>

                <LegendBand
                  spec={{
                    type: chart.type,
                    encoding: {
                      x: chart.x ? { field: chart.x } : undefined,
                      y: chart.y ? { field: chart.y } : undefined,
                    },
                    data: chart.data,
                  }}
                  dataCount={chart.data.length}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Copyable Full Dashboard Source Code */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-2xl font-bold text-[#18241b]">
              Full Composed Dashboard Code
            </h2>
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedDashboardCode);
                alert('Copied complete dashboard component code to clipboard!');
              }}
              className="px-4 py-1.5 bg-[#18241b] text-white font-mono text-xs font-bold rounded-xl hover:bg-[#2a3c2e] transition-colors"
            >
              Copy Full Code
            </button>
          </div>

          <CodeBlock
            code={generatedDashboardCode}
            language="typescript"
            title={`${template.slug}-dashboard.tsx`}
          />
        </div>
      </main>
    </div>
  );
}
