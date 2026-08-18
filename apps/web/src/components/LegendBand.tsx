'use client';

import React, { useState } from 'react';
import { ChartSpec } from '@vizora/core';

interface LegendBandProps {
  spec: Partial<ChartSpec> & { type: string; encoding?: { x?: { field?: string }; y?: { field?: string } } };
  dataCount?: number;
  className?: string;
  dark?: boolean;
  highlightField?: string;
}

export const LegendBand: React.FC<LegendBandProps> = ({
  spec,
  dataCount,
  className = '',
  dark = false,
  highlightField,
}) => {
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [copiedModal, setCopiedModal] = useState(false);

  const xField = spec.encoding?.x?.field || (spec.type === 'histogram' ? 'auto_bin' : 'x');
  const yField = spec.encoding?.y?.field || (spec.type === 'candlestick' ? 'ohlc' : 'y');
  const recordCount = dataCount ?? (Array.isArray(spec.data) ? spec.data.length : undefined);

  const isXHighlighted = highlightField === 'x' || highlightField === xField;
  const isYHighlighted = highlightField === 'y' || highlightField === yField;
  const isTypeHighlighted = highlightField === 'type' || highlightField === spec.type;

  return (
    <>
      {/* Desktop / Standard Bar */}
      <div
        className={`h-8 px-3 border-t font-mono text-[11px] flex items-center justify-between overflow-x-auto whitespace-nowrap select-none transition-colors ${
          dark
            ? 'bg-[#0f1611] border-[#2d3a30] text-[#9ba196]'
            : 'bg-[#e7eee1] border-[#18241b]/15 text-[#18241b]'
        } ${className}`}
      >
        {/* Mobile Toggle Trigger (visible on very small screens) */}
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="sm:hidden font-mono text-[11px] text-[#60685c] hover:text-[#18241b] flex items-center gap-1"
        >
          <span>Legend</span>
          <span>{mobileExpanded ? '▾' : '▸'}</span>
        </button>

        {/* Spec Key Coordinates (Desktop: always visible; Mobile: hidden unless expanded) */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1 min-w-[70px]">
            <span className="text-[#60685c] font-semibold">x:</span>
            <span
              className={
                isXHighlighted
                  ? 'text-[#c2872e] font-bold'
                  : dark
                  ? 'text-[#e0e4dc] font-medium'
                  : 'text-[#18241b] font-medium'
              }
            >
              {xField}
            </span>
          </div>

          <span className="text-[#60685c]/40">/</span>

          <div className="flex items-center gap-1 min-w-[70px]">
            <span className="text-[#60685c] font-semibold">y:</span>
            <span
              className={
                isYHighlighted
                  ? 'text-[#c2872e] font-bold'
                  : dark
                  ? 'text-[#e0e4dc] font-medium'
                  : 'text-[#18241b] font-medium'
              }
            >
              {yField}
            </span>
          </div>

          <span className="text-[#60685c]/40">/</span>

          <div className="flex items-center gap-1 min-w-[80px]">
            <span className="text-[#60685c] font-semibold">type:</span>
            <span
              className={
                isTypeHighlighted
                  ? 'text-[#c2872e] font-bold underline'
                  : 'text-[#c2872e] font-bold'
              }
            >
              {spec.type}
            </span>
          </div>

          {recordCount !== undefined && (
            <>
              <span className="text-[#60685c]/40">/</span>
              <div className="flex items-center gap-1 min-w-[45px]">
                <span className="text-[#60685c] font-semibold">n:</span>
                <span className={dark ? 'text-[#e0e4dc] font-medium' : 'text-[#18241b] font-medium'}>
                  {recordCount}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Right: Spec Inspector Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowJsonModal(true);
            }}
            className={`px-2 py-0.5 rounded-[2px] text-[10px] uppercase font-bold tracking-wider transition-colors ${
              dark
                ? 'bg-[#18221b] text-[#9ba196] hover:text-[#c2872e] border border-[#2d3a30]'
                : 'bg-white/80 text-[#60685c] hover:text-[#18241b] border border-[#18241b]/15'
            }`}
            title="Inspect Live ChartSpec JSON"
          >
            Ledger Spec
          </button>
        </div>
      </div>

      {/* Mobile Inline Collapsed Accordion Area (200ms transition) */}
      <div
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out font-mono text-[11px] px-3 ${
          mobileExpanded ? 'max-h-24 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'
        } ${
          dark
            ? 'bg-[#0b100d] border-t border-[#2d3a30] text-[#9ba196]'
            : 'bg-[#dfe6d9] border-t border-[#18241b]/10 text-[#18241b]'
        }`}
      >
        <div className="grid grid-cols-2 gap-1.5">
          <div>
            <span className="text-[#60685c]">x: </span>
            <span className={isXHighlighted ? 'text-[#c2872e] font-bold' : ''}>{xField}</span>
          </div>
          <div>
            <span className="text-[#60685c]">y: </span>
            <span className={isYHighlighted ? 'text-[#c2872e] font-bold' : ''}>{yField}</span>
          </div>
          <div>
            <span className="text-[#60685c]">type: </span>
            <span className="text-[#c2872e] font-bold">{spec.type}</span>
          </div>
          {recordCount !== undefined && (
            <div>
              <span className="text-[#60685c]">n: </span>
              <span>{recordCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* Modal / Popover when clicking Ledger Spec JSON */}
      {showJsonModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setShowJsonModal(false)}
        >
          <div
            className="bg-[#0f1611] text-[#a4c995] border border-[#2d3a30] rounded-[2px] w-full max-w-xl max-h-[80vh] flex flex-col shadow-none overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2d3a30] bg-[#141d16]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#e0e3de] tracking-wide uppercase">
                  ChartSpec Contract Ledger
                </span>
              </div>
              <button
                onClick={() => setShowJsonModal(false)}
                className="text-[#9ba196] hover:text-white font-mono text-sm px-2 py-0.5 rounded-[2px] hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <pre className="p-4 overflow-auto text-xs font-mono leading-relaxed selection:bg-[#c2872e]/30">
              <code>{JSON.stringify(spec, null, 2)}</code>
            </pre>
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#2d3a30] bg-[#141d16]">
              <span className="font-mono text-[10px] text-[#60685c]">
                Framework-agnostic Scene Graph payload
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(spec, null, 2));
                  setCopiedModal(true);
                  setTimeout(() => {
                    setCopiedModal(false);
                    setShowJsonModal(false);
                  }, 1200);
                }}
                className="px-3 py-1 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] text-xs font-bold rounded-[2px] transition-colors font-mono"
              >
                {copiedModal ? 'Copied' : 'Copy Spec JSON'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
