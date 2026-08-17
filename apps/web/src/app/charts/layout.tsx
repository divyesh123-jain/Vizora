import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar, SidebarSection } from '../../components/Sidebar';

const chartSections: SidebarSection[] = [
  {
    title: 'Dashboard & Business',
    items: [
      { label: 'Overview', href: '/charts/dashboard', icon: '📊' },
      { label: 'KPI + Sparkline', href: '/charts/kpi-sparkline' },
      { label: 'Funnel', href: '/charts/funnel' },
      { label: 'Donut / Pie', href: '/charts/donut' },
    ],
  },
  {
    title: 'Trading & Financial',
    items: [
      { label: 'Overview', href: '/charts/trading', icon: '📈' },
      { label: 'Candlestick', href: '/charts/candlestick' },
    ],
  },
  {
    title: 'Statistical',
    items: [
      { label: 'Overview', href: '/charts/statistical', icon: '📉' },
      { label: 'Histogram', href: '/charts/histogram' },
    ],
  },
  {
    title: 'Comparison & Ranking',
    items: [
      { label: 'Overview', href: '/charts/comparison', icon: '⚖️' },
      { label: 'Bar Chart', href: '/charts/bar' },
      { label: 'Scatter Plot', href: '/charts/scatter' },
    ],
  },
  {
    title: 'Composition & Flow',
    items: [
      { label: 'Overview', href: '/charts/composition', icon: '🌊' },
      { label: 'Line Chart', href: '/charts/line' },
      { label: 'Area Chart', href: '/charts/area' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Studio Playground', href: '/playground', icon: '🛠️' },
      { label: 'Data Profiling Rules', href: '/docs/data-profiling', icon: '🔍' },
      { label: 'ChartSpec Schema', href: '/docs/chart-spec', icon: '📜' },
    ],
  },
];

export default function ChartsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <Sidebar sections={chartSections} />
        <main className="flex-1 p-4 md:p-8 min-w-0">{children}</main>
      </div>
    </div>
  );
}
