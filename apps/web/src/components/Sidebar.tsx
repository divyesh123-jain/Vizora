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
    <aside className="w-full md:w-64 shrink-0 bg-[#f4f7f3]/95 backdrop-blur-md border-r border-[#18241b]/10 p-4 md:p-5 space-y-6 md:min-h-[calc(100vh-3.5rem)]">
      {sections.map((sec, idx) => (
        <div key={idx} className="space-y-1.5">
          <h4 className="font-mono text-[10px] font-bold text-[#c2872e] uppercase tracking-wider px-2.5">
            {sec.title}
          </h4>
          <div className="space-y-0.5">
            {sec.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-2.5 py-1.5 text-xs font-mono rounded-[2px] transition-colors ${
                    isActive
                      ? 'bg-[#18241b] text-white font-bold'
                      : 'text-[#404641] hover:text-[#18241b] hover:bg-[#18241b]/5'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    {item.icon && <span className="text-xs">{item.icon}</span>}
                    <span className="truncate">{item.label}</span>
                  </span>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.2 rounded-[2px] font-bold uppercase shrink-0 ${
                        isActive
                          ? 'bg-[#c2872e] text-[#18241b]'
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
