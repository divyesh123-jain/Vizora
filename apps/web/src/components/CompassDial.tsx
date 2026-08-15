'use client';

import React from 'react';
import { ChartType } from '@vizora/core';

interface CompassDialProps {
  recommendedType: ChartType;
  selectedType: ChartType;
  onSelectType: (type: ChartType) => void;
  confidence?: number;
  dataSummary?: string;
  className?: string;
}

const CHART_WAYPOINTS: { type: ChartType; label: string; angle: number }[] = [
  { type: 'bar', label: 'BAR', angle: 0 },
  { type: 'line', label: 'LINE', angle: 90 },
  { type: 'scatter', label: 'DIST', angle: 270 },
  { type: 'histogram', label: 'AREA', angle: 180 },
  { type: 'kpi-sparkline', label: 'KPI', angle: 45 },
];

export const CompassDial: React.FC<CompassDialProps> = ({
  recommendedType,
  selectedType,
  onSelectType,
  className = '',
}) => {
  const activeWaypoint = CHART_WAYPOINTS.find((w) => w.type === selectedType) || CHART_WAYPOINTS[0];
  const bearingAngle = activeWaypoint.angle;

  return (
    <div className={`relative w-full aspect-square max-w-[340px] mx-auto bg-white/80 border border-[#18241b]/15 rounded-3xl shadow-xl backdrop-blur-md carto-grid-bg p-6 flex items-center justify-center transition-all ${className}`}>
      {/* Corner Crosshairs ┌ ┐ └ ┘ */}
      <span className="absolute top-2 left-2 font-mono text-xs text-[#1e2a22]/40 select-none">┌</span>
      <span className="absolute top-2 right-2 font-mono text-xs text-[#1e2a22]/40 select-none">┐</span>
      <span className="absolute bottom-2 left-2 font-mono text-xs text-[#1e2a22]/40 select-none">└</span>
      <span className="absolute bottom-2 right-2 font-mono text-xs text-[#1e2a22]/40 select-none">┘</span>

      {/* SVG Radial Instrument Dial */}
      <div className="relative w-full h-full max-w-[280px] max-h-[280px]">
        <svg viewBox="0 0 240 240" className="w-full h-full">
          {/* Outer Geodetic Border */}
          <circle cx="120" cy="120" r="105" fill="#f7faf5" stroke="#1e2a22" strokeWidth="1" />
          <circle cx="120" cy="120" r="96" fill="none" stroke="#6e756a" strokeWidth="0.75" strokeDasharray="2 3" />
          <circle cx="120" cy="120" r="50" fill="none" stroke="rgba(110, 117, 106, 0.15)" strokeWidth="1" />

          {/* Cardinal Ticks & Label Marks (72 total ticks around ring) */}
          {Array.from({ length: 36 }).map((_, i) => {
            const deg = i * 10;
            const rad = (deg - 90) * (Math.PI / 180);
            const isMajor = deg % 90 === 0;
            const len = isMajor ? 8 : 4;
            const x1 = 120 + (96 - len) * Math.cos(rad);
            const y1 = 120 + (96 - len) * Math.sin(rad);
            const x2 = 120 + 96 * Math.cos(rad);
            const y2 = 120 + 96 * Math.sin(rad);
            return (
              <line
                key={deg}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#1e2a22"
                strokeWidth={isMajor ? 1.25 : 0.6}
              />
            );
          })}

          {/* Waypoint Labels around Circle (BAR, LINE, AREA, DIST) */}
          {CHART_WAYPOINTS.map((wp) => {
            const rad = (wp.angle - 90) * (Math.PI / 180);
            const tx = 120 + 72 * Math.cos(rad);
            const ty = 120 + 72 * Math.sin(rad);
            const isSelected = selectedType === wp.type;
            const isRecommended = recommendedType === wp.type;

            return (
              <g
                key={wp.type}
                className="cursor-pointer group"
                onClick={() => onSelectType(wp.type)}
              >
                <text
                  x={tx}
                  y={ty + 4}
                  textAnchor="middle"
                  fill={isSelected ? '#c2872e' : '#1e2a22'}
                  fontSize="11"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight={isSelected ? 'bold' : '500'}
                  className="transition-colors group-hover:fill-[#c2872e]"
                >
                  {wp.label}
                </text>

                {/* Small indicator dot if recommended */}
                {isRecommended && !isSelected && (
                  <circle cx={tx} cy={ty - 10} r="2" fill="#d6502b" />
                )}
              </g>
            );
          })}

          {/* Rotating Needle in Waypoint Ochre (#c2872e) */}
          <g
            style={{
              transform: `rotate(${bearingAngle}deg)`,
              transformOrigin: '120px 120px',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Main Pointer Arrow */}
            <line x1="120" y1="120" x2="120" y2="34" stroke="#c2872e" strokeWidth="2.5" strokeLinecap="square" />
            <polygon points="120,26 125,38 115,38" fill="#c2872e" stroke="#1e2a22" strokeWidth="0.5" />
            
            {/* Counterbalance Tail */}
            <line x1="120" y1="120" x2="120" y2="175" stroke="#1e2a22" strokeWidth="1" />
            <circle cx="120" cy="175" r="3" fill="#1e2a22" />

            {/* Brass Center Pivot Pin */}
            <circle cx="120" cy="120" r="7" fill="#1e2a22" />
            <circle cx="120" cy="120" r="3" fill="#c2872e" />
          </g>
        </svg>
      </div>
    </div>
  );
};
