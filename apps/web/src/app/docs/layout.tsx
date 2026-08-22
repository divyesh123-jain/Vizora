import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar, SidebarSection } from '../../components/Sidebar';

const docsSections: SidebarSection[] = [
  {
    title: 'Guides & Concepts',
    items: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Packages Architecture', href: '/docs/packages', badge: 'Ecosystem' },
      { label: 'Build with Vizora', href: '/docs/build-with-vizora', badge: 'Guide' },
      { label: 'ChartSpec Schema', href: '/docs/chart-spec' },
      { label: 'Data Profiling Rules', href: '/docs/data-profiling' },
      { label: 'Theming & Tokens', href: '/docs/theming' },
      { label: 'API Reference', href: '/docs/api' },
    ],
  },
  {
    title: 'Dashboard & Business',
    items: [
      { label: 'Category Overview', href: '/components/dashboard' },
      { label: 'KPI + Sparkline', href: '/components/kpi-sparkline' },
      { label: 'Funnel Chart', href: '/components/funnel' },
      { label: 'Donut Chart', href: '/components/donut' },
    ],
  },
  {
    title: 'Trading & Financial',
    items: [
      { label: 'Category Overview', href: '/components/trading' },
      { label: 'Candlestick (OHLC)', href: '/components/candlestick' },
    ],
  },
  {
    title: 'Statistical',
    items: [
      { label: 'Category Overview', href: '/components/statistical' },
      { label: 'Histogram', href: '/components/histogram' },
      { label: 'Scatter Plot', href: '/components/scatter' },
    ],
  },
  {
    title: 'Comparison & Ranking',
    items: [
      { label: 'Category Overview', href: '/components/comparison' },
      { label: 'Bar & Ranking Chart', href: '/components/bar' },
    ],
  },
  {
    title: 'Composition & Flow',
    items: [
      { label: 'Category Overview', href: '/components/composition' },
      { label: 'Line Chart', href: '/components/line' },
      { label: 'Area Chart', href: '/components/area' },
    ],
  },
  {
    title: 'Interactive Tools',
    items: [
      { label: 'Live Studio Playground', href: '/playground', badge: 'Studio' },
      { label: 'Guided Chart Builder', href: '/builder', badge: 'Wizard' },
      { label: 'Composed Templates', href: '/templates', badge: 'Gallery' },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f4f7f3] text-[#18241b] font-sans antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
        <Sidebar sections={docsSections} />
        <main className="flex-1 p-6 md:p-10 min-w-0 max-w-4xl">{children}</main>
      </div>
    </div>
  );
}
