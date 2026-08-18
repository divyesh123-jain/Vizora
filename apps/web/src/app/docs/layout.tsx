import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar, SidebarSection } from '../../components/Sidebar';

const docsSections: SidebarSection[] = [
  {
    title: 'Documentation',
    items: [
      { label: 'Getting Started', href: '/docs/getting-started', icon: '🚀' },
      { label: 'Data Profiling Rules', href: '/docs/data-profiling', icon: '🔍' },
      { label: 'ChartSpec Schema', href: '/docs/chart-spec', icon: '📜' },
      { label: 'API Reference', href: '/docs/api', icon: '📖' },
    ],
  },
  {
    title: 'Component Library',
    items: [
      { label: 'All Components', href: '/components', icon: '📦' },
      { label: 'Line Chart', href: '/components/line', icon: '📈' },
      { label: 'Bar Chart', href: '/components/bar', icon: '📊' },
      { label: 'Scatter Plot', href: '/components/scatter', icon: '🟢' },
      { label: 'Histogram', href: '/components/histogram', icon: '📶' },
      { label: 'KPI + Sparkline', href: '/components/kpi-sparkline', icon: '⚡' },
      { label: 'Candlestick', href: '/components/candlestick', icon: '🕯️' },
      { label: 'Donut Chart', href: '/components/donut', icon: '🍩' },
      { label: 'Area Chart', href: '/components/area', icon: '🌊' },
      { label: 'Funnel Chart', href: '/components/funnel', icon: '🎯' },
    ],
  },
  {
    title: 'Interactive Studio',
    items: [
      { label: 'Live Playground', href: '/playground', icon: '🛠️' },
      { label: 'Guided Chart Builder', href: '/builder', icon: '🧭' },
      { label: 'Dashboard Templates', href: '/templates', icon: '📑' },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <Sidebar sections={docsSections} />
        <main className="flex-1 p-6 md:p-10 min-w-0 max-w-4xl">{children}</main>
      </div>
    </div>
  );
}
