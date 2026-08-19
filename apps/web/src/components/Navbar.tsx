'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 1500);
  };

  const navItems = [
    { label: 'Components', href: '/components', match: (p: string) => p.startsWith('/components') || p.startsWith('/charts') },
    { label: 'Playground', href: '/playground', match: (p: string) => p === '/playground' },
    { label: 'Builder', href: '/builder', match: (p: string) => p === '/builder' },
    { label: 'Templates', href: '/templates', match: (p: string) => p.startsWith('/templates') },
    { label: 'Docs', href: '/docs/getting-started', match: (p: string) => p.startsWith('/docs') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4f7f3]/95 backdrop-blur-md border-b border-[#18241b]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-15 flex items-center justify-between gap-3">
        {/* Brand Logo & Version Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Link href="/" className="flex items-center gap-2.5 group focus-visible:outline-none">
            <div className="w-8 h-8 rounded-lg bg-[#18241b] text-[#c2872e] flex items-center justify-center font-mono font-bold text-xs tracking-tight shadow-sm group-hover:bg-[#c2872e] group-hover:text-[#18241b] transition-all duration-200">
              VZ
            </div>
            <span className="font-headline-md text-lg font-bold text-[#18241b] tracking-tight group-hover:text-[#c2872e] transition-colors">
              Vizora
            </span>
          </Link>
          <span className="hidden xs:inline-flex items-center px-2 py-0.5 rounded-full border border-[#c2872e]/30 text-[10px] font-mono font-bold text-[#c2872e] bg-[#c2872e]/10 uppercase tracking-wider">
            v0.1.0 MVP
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs text-[#60685c]">
          {navItems.map((item) => {
            const isActive = item.match ? item.match(pathname) : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'bg-[#18241b] text-white font-bold shadow-sm'
                    : 'hover:bg-[#18241b]/8 hover:text-[#18241b]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyInstall}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f1611] text-[#e0e4dc] hover:text-white border border-[#2d3a30] text-[11px] font-mono shadow-sm transition-all duration-150 hover:border-[#c2872e]/50"
            title="Click to copy npm install command"
          >
            <span className="text-[#c2872e] font-bold">$</span>
            <span>npm i @vizora/react</span>
            {copiedInstall ? (
              <span className="text-[#c2872e] font-bold ml-1">Copied</span>
            ) : (
              <svg className="w-3.5 h-3.5 text-[#9ba196] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          <Link
            href="/builder"
            className="hidden sm:inline-flex px-3.5 py-1.5 rounded-lg bg-white border border-[#18241b]/15 hover:border-[#18241b] text-[#18241b] font-mono text-xs font-semibold shadow-xs transition-all duration-150 hover:-translate-y-0.5"
          >
            Builder
          </Link>

          <Link
            href="/playground"
            className="px-3.5 py-1.5 rounded-lg bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold uppercase tracking-wider shadow-xs transition-all duration-150 hover:-translate-y-0.5"
          >
            Playground
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#18241b] hover:bg-[#18241b]/8 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#18241b]/10 bg-[#f4f7f3] px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = item.match ? item.match(pathname) : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all ${
                    isActive
                      ? 'bg-[#18241b] text-white font-bold shadow-xs'
                      : 'text-[#404641] hover:bg-[#18241b]/8 hover:text-[#18241b]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#18241b]/10 flex flex-col gap-2">
            <Link
              href="/builder"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 rounded-lg bg-white border border-[#18241b]/15 text-[#18241b] font-mono text-xs font-semibold shadow-xs"
            >
              Guided Builder
            </Link>
            <button
              onClick={() => {
                handleCopyInstall();
              }}
              className="w-full py-2 rounded-lg bg-[#0f1611] text-[#e0e4dc] border border-[#2d3a30] text-xs font-mono flex items-center justify-center gap-2"
            >
              <span className="text-[#c2872e] font-bold">$</span>
              <span>npm i @vizora/react</span>
              {copiedInstall && <span className="text-[#c2872e] font-bold">(Copied)</span>}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
