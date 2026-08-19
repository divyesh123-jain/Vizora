'use client';

import React from 'react';
import { ChartType } from '@vizora/core';

interface CompassDialProps {
  recommendedType?: ChartType;
  selectedType: ChartType;
  onSelectType: (type: ChartType) => void;
  confidence?: number;
  dataSummary?: string;
  className?: string;
}

const round2 = (num: number): number => Math.round(num * 100) / 100;

interface DialTick {
  deg: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isMajor: boolean;
}

// Precompute static dial tick marks rounded to 2 decimal places to guarantee 100% SSR/Client hydration parity
const DIAL_TICKS: DialTick[] = Array.from({ length: 36 }).map((_, i) => {
  const deg = i * 10;
  const rad = (deg - 90) * (Math.PI / 180);
  const isMajor = deg % 45 === 0;
  const len = isMajor ? 7 : 3.5;
  return {
    deg,
    isMajor,
    x1: round2(120 + (96 - len) * Math.cos(rad)),
    y1: round2(120 + (96 - len) * Math.sin(rad)),
    x2: round2(120 + 96 * Math.cos(rad)),
    y2: round2(120 + 96 * Math.sin(rad)),
  };
});

interface WaypointDef {
  type: ChartType;
  label: string;
  angle: number;
  tx: number;
  ty: number;
}

const RAW_WAYPOINTS: { type: ChartType; label: string; angle: number }[] = [
  { type: 'bar', label: 'BAR', angle: 0 },
  { type: 'kpi-sparkline', label: 'KPI', angle: 45 },
  { type: 'line', label: 'LINE', angle: 90 },
  { type: 'area', label: 'AREA', angle: 135 },
  { type: 'histogram', label: 'HIST', angle: 180 },
  { type: 'donut', label: 'DONUT', angle: 225 },
  { type: 'scatter', label: 'SCAT', angle: 270 },
  { type: 'candlestick', label: 'OHLC', angle: 315 },
];

// Precompute static waypoint coordinates rounded to 2 decimal places
const CHART_WAYPOINTS: WaypointDef[] = RAW_WAYPOINTS.map((wp) => {
  const rad = (wp.angle - 90) * (Math.PI / 180);
  return {
    ...wp,
    tx: round2(120 + 72 * Math.cos(rad)),
    ty: round2(120 + 72 * Math.sin(rad)),
  };
});

export const CompassDial: React.FC<CompassDialProps> = ({
  recommendedType = 'bar',
  selectedType,
  onSelectType,
  className = '',
}) => {
  const activeWaypoint = CHART_WAYPOINTS.find((w) => w.type === selectedType) || CHART_WAYPOINTS[0];
  const bearingAngle = activeWaypoint.angle;

  return (
    <div
      className={`relative w-full max-w-[260px] mx-auto bg-transparent p-2 flex flex-col items-center justify-center transition-all select-none ${className}`}
    >
      {/* SVG Radial Instrument Dial */}
      <div className="relative w-full aspect-square max-w-[230px]">
        <svg viewBox="0 0 240 240" className="w-full h-full select-none overflow-visible">
          {/* Outer Geodetic Border */}
          <circle cx="120" cy="120" r="105" fill="none" stroke="currentColor" className="text-[#18241b]/20 dark:text-[#9ba196]/20" strokeWidth="1" />
          <circle cx="120" cy="120" r="96" fill="none" stroke="currentColor" className="text-[#60685c]/40 dark:text-[#9ba196]/40" strokeWidth="0.75" strokeDasharray="2 3" />
          <circle cx="120" cy="120" r="50" fill="none" stroke="currentColor" className="text-[#60685c]/15 dark:text-[#9ba196]/15" strokeWidth="1" />

          {/* Cardinal Ticks & Label Marks */}
          {DIAL_TICKS.map((t) => (
            <line
              key={t.deg}
              x1={t.x1}
              y1={t.y1}
              x2={t.x2}
              y2={t.y2}
              stroke="currentColor"
              className="text-[#18241b]/60 dark:text-[#9ba196]/60"
              strokeWidth={t.isMajor ? 1.2 : 0.6}
            />
          ))}

          {/* Waypoint Labels around Circle with 44px touch targets */}
          {CHART_WAYPOINTS.map((wp) => {
            const isSelected = selectedType === wp.type;
            const isRecommended = recommendedType === wp.type;

            return (
              <g
                key={wp.type}
                className="cursor-pointer group focus-visible:outline-none"
                onClick={() => onSelectType(wp.type)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectType(wp.type);
                  }
                }}
                aria-label={`Select ${wp.label} chart type`}
              >
                {/* 44px min invisible touch target circle */}
                <circle cx={wp.tx} cy={wp.ty} r="22" fill="transparent" />

                <text
                  x={wp.tx}
                  y={wp.ty + 4}
                  textAnchor="middle"
                  fill={isSelected ? '#c2872e' : 'currentColor'}
                  fontSize="10"
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight={isSelected ? '700' : '500'}
                  className={`transition-colors text-[#18241b] dark:text-[#e0e4dc] ${
                    isSelected ? 'fill-[#c2872e]' : 'hover:fill-[#c2872e]'
                  }`}
                >
                  {wp.label}
                </text>

                {/* Indicator dot if recommended and not selected */}
                {isRecommended && !isSelected && (
                  <circle cx={wp.tx} cy={wp.ty - 9} r="2" fill="#d6502b" />
                )}
              </g>
            );
          })}

          {/* Rotating Needle in Waypoint Ochre (#c2872e) with 250ms ease-out */}
          <g
            style={{
              transform: `rotate(${bearingAngle}deg)`,
              transformOrigin: '120px 120px',
              transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Main Pointer Arrow */}
            <line
              x1="120"
              y1="120"
              x2="120"
              y2="34"
              stroke="#c2872e"
              strokeWidth="2.5"
              strokeLinecap="square"
            />
            <polygon
              points="120,26 125,38 115,38"
              fill="#c2872e"
              stroke="#18241b"
              strokeWidth="0.5"
            />

            {/* Counterbalance Tail */}
            <line
              x1="120"
              y1="120"
              x2="120"
              y2="175"
              stroke="currentColor"
              className="text-[#18241b] dark:text-[#9ba196]"
              strokeWidth="1"
            />
            <circle
              cx="120"
              cy="175"
              r="3"
              fill="currentColor"
              className="text-[#18241b] dark:text-[#9ba196]"
            />

            {/* Center Pivot Pin */}
            <circle
              cx="120"
              cy="120"
              r="6"
              fill="currentColor"
              className="text-[#18241b] dark:text-[#9ba196]"
            />
            <circle cx="120" cy="120" r="2.5" fill="#c2872e" />
          </g>
        </svg>
      </div>

      {/* Bearing readout caption */}
      <div className="mt-2 font-mono text-[11px] text-[#60685c] flex items-center gap-2">
        <span>BEARING:</span>
        <span className="text-[#18241b] dark:text-[#e0e4dc] font-bold uppercase">
          {selectedType}
        </span>
        {recommendedType === selectedType && (
          <span className="text-[#c2872e] text-[10px] font-bold px-1.5 py-0.2 rounded-[2px] border border-[#c2872e]/30">
            AUTO
          </span>
        )}
      </div>
    </div>
  );
};
