'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [copiedInstall, setCopiedInstall] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f4f7f3]/85 backdrop-blur-md border-b border-[#18241b]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Version Badge */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#18241b] to-[#2a3c2e] text-[#c2872e] shadow-md shadow-emerald-950/10 flex items-center justify-center font-bold text-xs tracking-tighter group-hover:scale-105 group-hover:from-[#c2872e] group-hover:to-[#d99a38] group-hover:text-[#18241b] transition-all duration-300">
              VZ
            </div>
            <span className="font-headline-md text-xl font-bold text-[#18241b] tracking-tight group-hover:text-[#c2872e] transition-colors">
              Vizora
            </span>
          </Link>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-[#c2872e]/20 text-[10px] font-mono font-semibold text-[#c2872e] bg-[#c2872e]/10 uppercase tracking-wider">
            v0.1.0 MVP
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-sans font-semibold text-[#404641]">
          <Link
            href="/"
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              pathname === '/'
                ? 'bg-[#18241b] text-white font-bold shadow-sm'
                : 'hover:bg-[#18241b]/8 hover:text-[#18241b]'
            }`}
          >
            Overview
          </Link>
          <Link
            href="/charts/line"
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              pathname.startsWith('/charts')
                ? 'bg-[#18241b] text-white font-bold shadow-sm'
                : 'hover:bg-[#18241b]/8 hover:text-[#18241b]'
            }`}
          >
            Charts Gallery
          </Link>
          <Link
            href="/templates"
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              pathname === '/templates'
                ? 'bg-[#18241b] text-white font-bold shadow-sm'
                : 'hover:bg-[#18241b]/8 hover:text-[#18241b]'
            }`}
          >
            Dashboard Blocks
          </Link>
          <Link
            href="/playground"
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              pathname === '/playground'
                ? 'bg-[#18241b] text-white font-bold shadow-sm'
                : 'hover:bg-[#18241b]/8 hover:text-[#18241b]'
            }`}
          >
            Playground Studio
          </Link>
          <Link
            href="/docs/getting-started"
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              pathname.startsWith('/docs')
                ? 'bg-[#18241b] text-white font-bold shadow-sm'
                : 'hover:bg-[#18241b]/8 hover:text-[#18241b]'
            }`}
          >
            Docs & API
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyInstall}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0f1611] text-[#e0e4dc] hover:text-white border border-[#18241b]/40 text-[11px] font-mono shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            title="Click to copy npm install command"
          >
            <span className="text-[#c2872e] font-bold">$</span>
            <span>npm i @vizora/react</span>
            {copiedInstall ? (
              <span className="text-[#88c070] font-bold ml-1">✓</span>
            ) : (
              <svg className="w-3.5 h-3.5 text-[#9ba196] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          <Link
            href="/playground"
            className="px-4 py-2 rounded-xl bg-[#c2872e] hover:bg-[#d99a38] text-white font-sans text-[11px] font-bold uppercase tracking-wider shadow-md shadow-amber-600/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all"
          >
            STUDIO PLAYGROUND
          </Link>
        </div>
      </div>
    </header>
  );
};

