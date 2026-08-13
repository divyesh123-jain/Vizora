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
    title: 'Supported Chart Types',
    items: [
      { label: 'Line Chart', href: '/charts/line', icon: '📈' },
      { label: 'Bar Chart', href: '/charts/bar', icon: '📊' },
      { label: 'Scatter Plot', href: '/charts/scatter', icon: '🟢' },
      { label: 'Histogram', href: '/charts/histogram', icon: '📶' },
      { label: 'KPI + Sparkline', href: '/charts/kpi-sparkline', icon: '⚡' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { label: 'Studio Playground', href: '/playground', icon: '🛠️' },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <Sidebar sections={docsSections} />
        <main className="flex-1 p-4 md:p-8 min-w-0 max-w-4xl">{children}</main>
      </div>
    </div>
  );
}
