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
    <aside className="w-full md:w-64 shrink-0 bg-[#f4f7f3]/80 backdrop-blur-md border-r border-[#18241b]/10 p-4 md:p-6 space-y-6 md:min-h-[calc(100vh-4rem)]">
      {sections.map((sec, idx) => (
        <div key={idx} className="space-y-2">
          <h4 className="font-sans text-[11px] font-bold text-[#c2872e] uppercase tracking-wider px-2">
            {sec.title}
          </h4>
          <div className="space-y-1">
            {sec.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-xs font-sans font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-[#18241b] text-[#f4f7f3] font-bold shadow-md shadow-emerald-950/10'
                      : 'text-[#404641] hover:text-[#18241b] hover:bg-[#18241b]/5 hover:translate-x-0.5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon && <span className="text-xs">{item.icon}</span>}
                    <span>{item.label}</span>
                  </span>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-sans px-2 py-0.5 rounded-full font-bold uppercase ${
                        isActive
                          ? 'bg-[#c2872e] text-white'
                          : 'bg-[#18241b]/10 text-[#60685c]'
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
