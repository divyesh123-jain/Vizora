'use client';

import React from 'react';
import { ChartSpec } from '@vizora/core';

interface LegendBandProps {
  spec: ChartSpec;
  dataCount: number;
}

export const LegendBand: React.FC<LegendBandProps> = ({ spec }) => {
  const xField = spec.encoding.x?.field || 'time_series';
  const yField = spec.encoding.y?.field || 'amplitude';

  return (
    <div className="h-10 px-5 bg-[#dee5d7] border-t border-[#1e2a22] font-data-spec text-xs text-[#1e2a22] flex items-center justify-between overflow-x-auto whitespace-nowrap">
      <div className="flex items-center gap-4">
        <span><strong className="font-semibold text-[#6e756a]">X_AXIS |</strong> {xField}</span>
        <span className="text-[#6e756a]">/</span>
        <span><strong className="font-semibold text-[#6e756a]">Y_AXIS |</strong> {yField}</span>
        <span className="text-[#6e756a]">/</span>
        <span><strong className="font-semibold text-[#6e756a]">TYPE |</strong> {spec.type}_plot</span>
      </div>

      <div className="flex items-center gap-2 text-[#d6502b] font-mono text-xs">
        <span className="inline-block w-2.5 h-2.5 bg-[#d6502b]" />
        <span>Outlier_Threshold | &gt; 0.8</span>
      </div>
    </div>
  );
};
