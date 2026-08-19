'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface SidebarSection {
  title: string;
  items: {
    label: string;
    href: string;
    badge?: string;
  }[];
}

interface SidebarProps {
  sections: SidebarSection[];
}

export const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Find currently active item label for mobile header preview
  const currentItem = sections
    .flatMap((s) => s.items)
    .find((item) => pathname === item.href);

  return (
    <>
      {/* Mobile Top Collapsible Trigger (Visible on screens < 768px) */}
      <div className="md:hidden w-full border-b border-[#18241b]/10 bg-[#f4f7f3] px-4 py-3 sticky top-14 z-40 backdrop-blur-md">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-3 py-2 bg-white rounded-lg border border-[#18241b]/15 text-xs font-mono shadow-xs"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#60685c]">Docs Menu:</span>
            <span className="font-bold text-[#18241b]">{currentItem?.label || 'Navigation'}</span>
          </div>
          <span className="text-[#c2872e] font-bold text-sm">
            {mobileOpen ? '▲ Close' : '▼ Menu'}
          </span>
        </button>

        {mobileOpen && (
          <div className="mt-2.5 bg-white border border-[#18241b]/15 rounded-xl p-4 shadow-lg max-h-[60vh] overflow-y-auto space-y-5">
            {sections.map((sec, idx) => (
              <div key={idx} className="space-y-1.5">
                <h4 className="font-mono text-[10px] font-bold text-[#c2872e] uppercase tracking-wider px-2">
                  {sec.title}
                </h4>
                <div className="space-y-0.5">
                  {sec.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg transition-all duration-150 ${
                          isActive
                            ? 'bg-[#18241b] text-white font-bold shadow-sm'
                            : 'text-[#404641] hover:text-[#18241b] hover:bg-[#18241b]/6'
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase shrink-0 ${
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
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar (Visible on screens >= 768px) */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 bg-[#f4f7f3]/95 backdrop-blur-md border-r border-[#18241b]/10 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-5 space-y-6">
        {sections.map((sec, idx) => (
          <div key={idx} className="space-y-1.5">
            <h4 className="font-mono text-[10px] font-bold text-[#c2872e] uppercase tracking-wider px-3">
              {sec.title}
            </h4>
            <div className="space-y-0.5">
              {sec.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2 text-xs font-mono rounded-lg transition-all duration-150 ${
                      isActive
                        ? 'bg-[#18241b] text-white font-bold shadow-sm'
                        : 'text-[#404641] hover:text-[#18241b] hover:bg-[#18241b]/6'
                    }`}
                  >
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase shrink-0 ${
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
    </>
  );
};
