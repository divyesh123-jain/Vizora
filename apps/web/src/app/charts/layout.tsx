import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Sidebar, SidebarSection } from '../../components/Sidebar';

const chartSections: SidebarSection[] = [
  {
    title: 'Chart Types Gallery',
    items: [
      { label: 'Line Chart', href: '/charts/line', icon: '📈', badge: 'Temporal' },
      { label: 'Bar Chart', href: '/charts/bar', icon: '📊', badge: 'Categorical' },
      { label: 'Scatter Plot', href: '/charts/scatter', icon: '🟢', badge: 'Quantitative' },
      { label: 'Histogram', href: '/charts/histogram', icon: '📶', badge: 'Distribution' },
      { label: 'KPI + Sparkline', href: '/charts/kpi-sparkline', icon: '⚡', badge: 'Executive' },
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
