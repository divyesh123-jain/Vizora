'use client';

import React, { useState } from 'react';
import { CodeBlock } from './CodeBlock';
import { ChartSpec } from '@vizora/core';

export interface ChartTabItem {
  id: string;
  label: string;
}

interface ChartPreviewBlockProps {
  spec?: Partial<ChartSpec> & { type: string; encoding?: { x?: { field?: string }; y?: { field?: string } } };
  codeSnippet: string;
  dataCount?: number;
  dark?: boolean;
  className?: string;
  title?: string;
  extraTabs?: { id: string; label: string; content: React.ReactNode }[];
  children: React.ReactNode;
  loading?: boolean;
  error?: string | null;
  isEmpty?: boolean;
  highlightField?: string;
}

export const ChartPreviewBlock: React.FC<ChartPreviewBlockProps> = ({
  spec,
  codeSnippet,
  dataCount,
  dark = false,
  className = '',
  title,
  extraTabs = [],
  children,
  loading = false,
  error = null,
  isEmpty = false,
  highlightField,
}) => {
  const [activeTab, setActiveTab] = useState<string>('preview');
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const defaultSpec = spec || {
    type: 'bar' as const,
    encoding: { x: { field: 'x' }, y: { field: 'y' } },
  };

  return (
    <div
      className={`rounded-xl border overflow-hidden shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-[#c2872e]/40 ${
        dark
          ? 'bg-[#151f17] border-[#2d3a30] hover:border-[#9ba196]/30'
          : 'bg-white border-[#18241b]/10 hover:border-[#18241b]/25 hover:shadow-md'
      } ${className}`}
    >
      {/* Tab Row + Right-Aligned Copy Button */}
      <div
        className={`flex items-center justify-between px-4 border-b text-xs transition-colors ${
          dark
            ? 'bg-[#0f1611] border-[#2d3a30] text-[#9ba196]'
            : 'bg-[#f4f7f3]/80 border-[#18241b]/10 text-[#18241b]'
        }`}
      >
        {/* Left: Tab Switcher (Preview / Code / Extra) */}
        <div className="flex items-center gap-4 font-mono text-xs">
          {title && (
            <span
              className={`font-sans text-xs font-semibold py-2.5 mr-1 ${
                dark ? 'text-[#e0e4dc]' : 'text-[#18241b]'
              }`}
            >
              {title}
            </span>
          )}

          <button
            onClick={() => setActiveTab('preview')}
            className={`py-2.5 tracking-wide transition-colors border-b-2 ${
              activeTab === 'preview'
                ? 'border-[#c2872e] text-[#c2872e] font-bold'
                : 'border-transparent text-[#60685c] hover:text-[#18241b] dark:hover:text-[#e0e4dc]'
            }`}
          >
            Preview
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`py-2.5 tracking-wide transition-colors border-b-2 ${
              activeTab === 'code'
                ? 'border-[#c2872e] text-[#c2872e] font-bold'
                : 'border-transparent text-[#60685c] hover:text-[#18241b] dark:hover:text-[#e0e4dc]'
            }`}
          >
            Code
          </button>

          {extraTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2.5 tracking-wide transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#c2872e] text-[#c2872e] font-bold'
                  : 'border-transparent text-[#60685c] hover:text-[#18241b] dark:hover:text-[#e0e4dc]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Clean Copy Button (Outline icon + text, changes to Copied for 1.5s) */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[11px] transition-all duration-150 focus-visible:ring-1 focus-visible:ring-[#c2872e] ${
            dark
              ? 'text-[#9ba196] hover:text-[#c2872e] hover:bg-white/5'
              : 'text-[#60685c] hover:text-[#c2872e] hover:bg-[#18241b]/5'
          }`}
          title="Copy snippet"
          aria-label={copied ? 'Code snippet copied' : 'Copy code snippet'}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span className={copied ? 'text-[#c2872e] font-bold' : ''}>
            {copied ? 'Copied' : 'Copy'}
          </span>
        </button>
      </div>

      {/* Main Block Content */}
      <div className="relative min-h-[220px]">
        {activeTab === 'preview' && (
          <div className="w-full h-full flex flex-col justify-center p-4">
            {error ? (
              <div className="p-4 font-mono text-xs text-[#d6502b] flex items-center justify-center">
                <span>Error: {error}</span>
              </div>
            ) : isEmpty ? (
              <div className="p-6 font-body-ui text-xs text-[#60685c] flex items-center justify-center text-center">
                <span>No data points recorded for this series.</span>
              </div>
            ) : loading ? (
              <div className="p-6 font-mono text-xs text-[#60685c] flex items-center justify-center">
                <span className="animate-pulse">Rendering scene graph...</span>
              </div>
            ) : (
              children
            )}
          </div>
        )}

        {activeTab === 'code' && (
          <div className="p-0 bg-[#0f1611]">
            <CodeBlock
              code={codeSnippet}
              language="tsx"
              showLineNumbers={true}
              className="border-0 rounded-none"
            />
          </div>
        )}

        {extraTabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="p-4 bg-transparent">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};
