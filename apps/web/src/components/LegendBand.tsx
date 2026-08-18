'use client';

import React, { useState } from 'react';
import { ChartSpec } from '@vizora/core';

interface LegendBandProps {
  spec: Partial<ChartSpec> & { type: string; encoding?: { x?: { field?: string }; y?: { field?: string } } };
  dataCount?: number;
  className?: string;
  dark?: boolean;
}

export const LegendBand: React.FC<LegendBandProps> = ({
  spec,
  dataCount,
  className = '',
  dark = false,
}) => {
  const [showJsonModal, setShowJsonModal] = useState(false);

  const xField = spec.encoding?.x?.field || (spec.type === 'histogram' ? 'auto_bin' : 'x');
  const yField = spec.encoding?.y?.field || (spec.type === 'candlestick' ? 'ohlc' : 'y');
  const recordCount = dataCount ?? (Array.isArray(spec.data) ? spec.data.length : undefined);

  return (
    <>
      <div
        className={`h-9 px-3.5 border-t font-mono text-[11px] flex items-center justify-between overflow-x-auto whitespace-nowrap select-none transition-colors ${
          dark
            ? 'bg-[#0f1611] border-[#2d3a30] text-[#9ba196]'
            : 'bg-[#e7eee1] border-[#18241b]/15 text-[#18241b]'
        } ${className}`}
      >
        {/* Left: Spec Key Coordinates */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className={dark ? 'text-[#60685c] font-semibold' : 'text-[#60685c] font-semibold'}>
              X:
            </span>
            <span className={dark ? 'text-[#a4c995]' : 'text-[#18241b] font-medium'}>
              {xField}
            </span>
          </div>

          <span className="text-[#60685c]/50">/</span>

          <div className="flex items-center gap-1">
            <span className={dark ? 'text-[#60685c] font-semibold' : 'text-[#60685c] font-semibold'}>
              Y:
            </span>
            <span className={dark ? 'text-[#a4c995]' : 'text-[#18241b] font-medium'}>
              {yField}
            </span>
          </div>

          <span className="text-[#60685c]/50">/</span>

          <div className="flex items-center gap-1">
            <span className={dark ? 'text-[#60685c] font-semibold' : 'text-[#60685c] font-semibold'}>
              TYPE:
            </span>
            <span className="text-[#c2872e] font-bold">
              {spec.type}
            </span>
          </div>

          {recordCount !== undefined && (
            <>
              <span className="text-[#60685c]/50">/</span>
              <div className="flex items-center gap-1">
                <span className="text-[#60685c] font-semibold">N:</span>
                <span className="font-semibold">{recordCount}</span>
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
            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider transition-all ${
              dark
                ? 'bg-[#18221b] text-[#c2872e] hover:bg-[#c2872e] hover:text-[#18241b] border border-[#2d3a30]'
                : 'bg-white/80 text-[#18241b] hover:bg-[#18241b] hover:text-white border border-[#18241b]/15'
            }`}
            title="Inspect Live ChartSpec JSON"
          >
            Ledger Spec JSON
          </button>
        </div>
      </div>

      {/* Modal / Popover when clicking Ledger Spec JSON */}
      {showJsonModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowJsonModal(false)}
        >
          <div
            className="bg-[#0f1611] text-[#a4c995] border border-[#2d3a30] rounded-2xl w-full max-w-xl max-h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#2d3a30] bg-[#18221b]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2872e]" />
                <span className="font-mono text-xs font-bold text-white tracking-wide uppercase">
                  ChartSpec Contract Ledger
                </span>
              </div>
              <button
                onClick={() => setShowJsonModal(false)}
                className="text-[#9ba196] hover:text-white font-mono text-sm px-2 py-0.5 rounded hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <pre className="p-5 overflow-auto text-xs font-mono leading-relaxed selection:bg-[#c2872e]/30">
              <code>{JSON.stringify(spec, null, 2)}</code>
            </pre>
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#2d3a30] bg-[#18221b]">
              <span className="font-mono text-[10px] text-[#60685c]">
                Framework-agnostic Scene Graph payload
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(JSON.stringify(spec, null, 2));
                  setShowJsonModal(false);
                }}
                className="px-3 py-1 bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] text-xs font-bold rounded-lg transition-colors font-mono"
              >
                Copy Spec JSON
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
