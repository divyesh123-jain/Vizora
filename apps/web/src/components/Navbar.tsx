'use client';

import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [copiedInstall, setCopiedInstall] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install @vizora/react @vizora/core');
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7faf5]/95 backdrop-blur border-b border-[#1e2a22] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Version Badge */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-[#1e2a22] text-[#ecefea] flex items-center justify-center font-bold text-xs tracking-tighter group-hover:bg-[#c2872e] transition-colors">
              VZ
            </div>
            <span className="font-headline-md text-xl font-bold text-[#1e2a22] tracking-tight group-hover:text-[#c2872e] transition-colors">
              Vizora
            </span>
          </a>
          <span className="inline-flex items-center px-2 py-0.5 border border-[#1e2a22]/30 text-[10px] font-mono font-semibold text-[#6e756a] bg-[#ecefea] uppercase tracking-wider">
            v0.1.0 MVP
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-medium text-[#434844]">
          <a href="#features" className="hover:text-[#1e2a22] hover:underline underline-offset-4 transition-colors">
            Features
          </a>
          <a href="#playground" className="hover:text-[#1e2a22] hover:underline underline-offset-4 transition-colors">
            Playground
          </a>
          <a href="#chart-types" className="hover:text-[#1e2a22] hover:underline underline-offset-4 transition-colors">
            Chart Types
          </a>
          <a href="#architecture" className="hover:text-[#1e2a22] hover:underline underline-offset-4 transition-colors">
            Architecture
          </a>
          <a href="#docs" className="hover:text-[#1e2a22] hover:underline underline-offset-4 transition-colors">
            API Docs
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyInstall}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#111813] text-[#e0e3de] hover:text-white border border-[#1e2a22] text-[11px] font-mono transition-all"
            title="Click to copy npm install command"
          >
            <span className="text-[#c2872e] font-bold">$</span>
            <span>npm i @vizora/react</span>
            {copiedInstall ? (
              <span className="text-[#88c070] font-bold ml-1">✓</span>
            ) : (
              <svg className="w-3.5 h-3.5 text-[#909c8d] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          <a
            href="#playground"
            className="px-4 py-2 bg-[#c2872e] hover:bg-[#d99a38] text-[#1e2a22] font-mono text-[11px] font-bold uppercase tracking-wider border border-[#1e2a22] transition-colors"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </header>
  );
};
