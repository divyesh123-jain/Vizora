import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar, SidebarSection } from '../../components/Sidebar';

const docsSections: SidebarSection[] = [
  {
    title: 'Guides & Concepts',
    items: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Build with Vizora', href: '/docs/build-with-vizora', badge: 'Guide' },
      { label: 'ChartSpec Schema', href: '/docs/chart-spec' },
      { label: 'Data Profiling Rules', href: '/docs/data-profiling' },
      { label: 'Theming & Tokens', href: '/docs/theming' },
      { label: 'API Reference', href: '/docs/api' },
    ],
  },
  {
    title: 'Component Primitives',
    items: [
      { label: 'All Components', href: '/components' },
      { label: 'Line Chart', href: '/components/line' },
      { label: 'Bar / Ranking Chart', href: '/components/bar' },
      { label: 'Scatter Plot', href: '/components/scatter' },
      { label: 'Histogram', href: '/components/histogram' },
      { label: 'KPI + Sparkline', href: '/components/kpi-sparkline' },
      { label: 'Candlestick (OHLC)', href: '/components/candlestick' },
      { label: 'Donut Chart', href: '/components/donut' },
      { label: 'Area Chart', href: '/components/area' },
      { label: 'Funnel Chart', href: '/components/funnel' },
    ],
  },
  {
    title: 'Interactive Tools',
    items: [
      { label: 'Live Playground', href: '/playground' },
      { label: 'Guided Chart Builder', href: '/builder' },
      { label: 'Composed Templates', href: '/templates' },
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
