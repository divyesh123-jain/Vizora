'use client';

import React from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '../../../components/Navbar';
import { Chart } from '@vizora/react';
import { CodeBlock } from '../../../components/CodeBlock';
import { ChartPreviewBlock } from '../../../components/ChartPreviewBlock';
import { TEMPLATES_LIST, DashboardTemplate } from '../page';

// Pure 3-element KPI Card: Numeral, Label, Waypoint Sparkline (§3.6)
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
    <div className="bg-[#f4f7f3] dark:bg-[#151f17] border border-[#18241b]/10 dark:border-[#2d3a30] rounded-[2px] p-3.5 flex items-center justify-between">
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

      {/* KPI Headline Metrics (3 Elements: Numeral, Label, Sparkline) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        ${template.metrics.map(m => `
        <div className="bg-white border border-[#18241b]/10 rounded-[2px] p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-[#60685c]">${m.label}</div>
            <div className="text-2xl font-bold font-mono text-[#18241b] mt-1">${m.value}</div>
          </div>
        </div>`).join('')}
      </div>

      {/* Composed Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        ${template.charts.map((c) => `
        <div className="${c.widthClass || 'lg:col-span-1'} bg-white rounded-[2px] border border-[#18241b]/10 p-4 h-72">
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Breadcrumbs & Header */}
        <div className="space-y-3 border-b border-[#18241b]/10 pb-5">
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

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#18241b]">
                {template.title}
              </h1>
              <p className="font-body-doc text-xs text-[#404641] max-w-3xl mt-1 leading-relaxed">
                {template.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push(`/playground?type=${template.charts[0].type}`)}
                className="px-3.5 py-1.5 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold uppercase tracking-wider rounded-[2px] transition-colors"
              >
                Open in Playground &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Live Dashboard Preview */}
        <section className="bg-white border border-[#18241b]/15 rounded-[2px] p-5 sm:p-6 space-y-5">
          {/* KPI Headline Cards (Tremor-style 3 elements per §3.6) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {template.metrics.map((m, idx) => (
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
            {template.charts.map((chart, cIdx) => {
              const snippet = `<Chart\n  type="${chart.type}"\n  data={data}\n  ${chart.x ? `x="${chart.x}"\n  ` : ''}${chart.y ? `y="${chart.y}"\n  ` : ''}title="${chart.title}"\n  theme="${template.theme}"\n/>`;
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
                        theme={template.theme}
                      />
                    </div>
                  </ChartPreviewBlock>
                </div>
              );
            })}
          </div>
        </section>

        {/* Copyable Full Dashboard Source Code */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-lg font-bold text-[#18241b]">
              Full Composed Dashboard Code
            </h2>
            <span className="font-mono text-xs text-[#60685c]">
              React JSX • SSR Safe
            </span>
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
