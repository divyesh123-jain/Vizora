'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface SidebarSection {
  title: string;
  items: {
    label: string;
    href: string;
    badge?: string;
    icon?: string;
  }[];
}

interface SidebarProps {
  sections: SidebarSection[];
}

export const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0 bg-[#f7faf5] border-r border-[#1e2a22] p-4 md:p-6 space-y-6 md:min-h-[calc(100vh-4rem)]">
      {sections.map((sec, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="font-mono text-[11px] font-bold text-[#c2872e] uppercase tracking-wider px-2">
            {sec.title}
          </h4>
          <div className="space-y-0.5">
            {sec.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-2 text-xs font-mono transition-colors border ${
                    isActive
                      ? 'bg-[#1e2a22] text-[#ecefea] font-bold border-[#1e2a22]'
                      : 'text-[#434844] hover:text-[#1e2a22] hover:bg-[#ecefea] border-transparent'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <span className="text-xs">{item.icon}</span>}
                    <span>{item.label}</span>
                  </span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 uppercase ${
                        isActive
                          ? 'bg-[#c2872e] text-[#1e2a22] font-bold'
                          : 'bg-[#ecefea] text-[#6e756a] border border-[#1e2a22]/20'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
};
