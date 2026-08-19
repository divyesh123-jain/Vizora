'use client';

import React from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '../../../components/Navbar';
import { Chart } from '@vizora/react';
import { CodeBlock } from '../../../components/CodeBlock';
import { ChartPreviewBlock } from '../../../components/ChartPreviewBlock';
import { TEMPLATES_LIST, DashboardTemplate } from '../page';

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
        <div className="bg-white border border-[#18241b]/10 rounded-xl p-4 flex items-center justify-between shadow-sm">
          <div>
            <div className="text-xs text-[#60685c]">${m.label}</div>
            <div className="text-2xl font-bold font-mono text-[#18241b] mt-1">${m.value}</div>
          </div>
        </div>`).join('')}
      </div>

      {/* Composed Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        ${template.charts.map((c) => `
        <div className="${c.widthClass || 'lg:col-span-1'} bg-white rounded-xl border border-[#18241b]/10 p-4 h-72 shadow-sm">
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
              className="font-mono text-xs text-[#60685c] hover:text-[#18241b] transition-colors"
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
              <p className="font-body-ui text-xs sm:text-sm text-[#404641] max-w-2xl mt-1">
                {template.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generatedDashboardCode);
                  alert('Copied complete dashboard component code!');
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#18241b] hover:bg-[#25382a] text-white font-mono text-xs font-bold transition-all shadow-sm hover:-translate-y-0.5"
              >
                Copy Full Dashboard JSX
              </button>

              <button
                onClick={() => router.push(`/playground?type=${template.charts[0].type}`)}
                className="px-3.5 py-1.5 rounded-lg bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold uppercase transition-all shadow-sm hover:-translate-y-0.5"
              >
                Edit in Playground &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 1. Live Interactive Dashboard Sandbox */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-lg font-bold text-[#18241b]">
              Live Rendered Composition
            </h2>
            <span className="font-mono text-xs text-[#60685c]">
              Theme: <strong className="text-[#18241b] uppercase">{template.theme}</strong>
            </span>
          </div>

          {/* KPI Headline Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {template.metrics.map((m, idx) => (
              <MicroKpiCard
                key={idx}
                label={m.label}
                value={m.value}
                sparkline={m.sparkline}
              />
            ))}
          </div>

          {/* Composed Chart Grid with Standard Preview / Code blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {template.charts.map((c, idx) => (
              <div key={idx} className={c.widthClass || 'lg:col-span-1'}>
                <ChartPreviewBlock
                  title={c.title}
                  codeSnippet={`<Chart
  type="${c.type}"
  data={${JSON.stringify(c.data, null, 2)}}
  ${c.x ? `x="${c.x}"` : ''}
  ${c.y ? `y="${c.y}"` : ''}
  theme="${template.theme}"
  title="${c.title}"
/>`}
                  dataCount={c.data.length}
                  spec={{
                    type: c.type,
                    encoding: {
                      x: c.x ? { field: c.x } : undefined,
                      y: c.y ? { field: c.y } : undefined,
                    },
                    data: c.data,
                  }}
                >
                  <div className="h-60 p-2 flex items-center justify-center">
                    <Chart
                      type={c.type}
                      data={c.data}
                      x={c.x}
                      y={c.y}
                      theme={template.theme}
                      title={c.title}
                    />
                  </div>
                </ChartPreviewBlock>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Standalone Composed Code Block */}
        <div className="space-y-3 pt-4 border-t border-[#18241b]/10">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-lg font-bold text-[#18241b]">
              Complete Standalone Dashboard Source Code
            </h2>
            <span className="font-mono text-xs text-[#60685c]">Ready for copy-paste</span>
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
