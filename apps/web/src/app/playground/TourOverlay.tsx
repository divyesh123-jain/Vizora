"use client";

import React, { useEffect } from "react";
import { useTourState } from "./useTourState";

type TourStepInfo = {
  stepNumber: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  cta: string;
  iconSvg: React.ReactNode;
  features: string[];
};

const STEP_DATA: TourStepInfo = {
  stepNumber: "01",
  badge: "DATA INGESTION & PROFILING",
  title: "Feed Raw Data or Choose a Sample",
  tagline: "Instant parsing for JSON arrays, CSV spreadsheets, and bundled benchmarks.",
  description:
    "Paste your dataset, upload a file, or choose an executive sample. Vizora instantly profiles field data types (temporal, categorical, quantitative) with zero client latency.",
  cta: "Next: Encoding Coordinates →",
  features: ["Automatic JSON/CSV parser", "Strict type detection", "Zero DOM pre-computation"],
  iconSvg: (
    <svg className="w-6 h-6 text-[#c2872e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),
};

const STEP_ENCODING: TourStepInfo = {
  stepNumber: "02",
  badge: "CARTESIAN ENCODING",
  title: "Map Dimensions & Numerical Metrics",
  tagline: "Explicit binding of X, Y, Series, and OHLC variables without boilerplate.",
  description:
    "Bind your dataset fields directly to chart axes. Vizora automatically computes linear, band, or time scales with deterministic domain calculations and tick formatting.",
  cta: "Next: Choose Chart Bearing →",
  features: ["Time, Band & Linear scales", "Auto tick formatting", "Accessible table ledger generation"],
  iconSvg: (
    <svg className="w-6 h-6 text-[#c2872e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 3v18h18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16l4-5 4 3 6-8" />
      <circle cx="7" cy="16" r="1.5" fill="#c2872e" />
      <circle cx="11" cy="11" r="1.5" fill="#c2872e" />
      <circle cx="15" cy="14" r="1.5" fill="#c2872e" />
      <circle cx="21" cy="6" r="1.5" fill="#c2872e" />
    </svg>
  ),
};

const STEP_CHART_TYPE: TourStepInfo = {
  stepNumber: "03",
  badge: "INSTRUMENT SELECTION",
  title: "Select Chart Type via Compass Dial",
  tagline: "Choose your visualization bearing across 9 specialized primitives.",
  description:
    "Use AutoChart for instant heuristic inference or rotate the Compass Dial to select temporal Line, categorical Bar, statistical Histogram, Candlestick OHLC, Funnel, or Donut.",
  cta: "Launch Studio Playground 🚀",
  features: ["Compass 9-waypoint dial", "Live 2-way ChartSpec sync", "SVG & TSX code export"],
  iconSvg: (
    <svg className="w-6 h-6 text-[#c2872e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="9" strokeWidth={1.75} />
      <polygon points="12,6 14.5,12 12,10.5 9.5,12" fill="#c2872e" stroke="none" />
      <polygon points="12,18 14.5,12 12,13.5 9.5,12" fill="#60685c" stroke="none" />
      <circle cx="12" cy="12" r="1.5" fill="#18241b" />
    </svg>
  ),
};

export function TourOverlay({ onComplete }: { onComplete?: () => void }) {
  const { step, isActive, next, prev, complete, skip, completed } = useTourState();

  // Keyboard navigation support
  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skip();
      } else if (e.key === "ArrowRight") {
        next();
      } else if (e.key === "ArrowLeft") {
        prev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, next, prev, skip]);

  if (!isActive) {
    return null;
  }

  const stepDataMap: Record<string, TourStepInfo> = {
    data: STEP_DATA,
    encoding: STEP_ENCODING,
    "chart-type": STEP_CHART_TYPE,
  };
  const stepData = stepDataMap[step] || STEP_DATA;
  const stepIndex = step === "data" ? 0 : step === "encoding" ? 1 : 2;
  const progressPercent = Math.round(((stepIndex + 1) / 3) * 100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tour-dialog-title"
    >
      {/* Dimmed backdrop with subtle blur */}
      <div
        className="fixed inset-0 bg-[#060a08]/75 backdrop-blur-xs transition-opacity"
        onClick={skip}
        aria-hidden="true"
      />

      {/* Main Cartographic Instrument Modal */}
      <div className="relative z-10 w-full max-w-lg bg-[#0f1611] text-[#e0e4dc] border border-[#2d3a30] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        {/* Top Cartographic Header Bar */}
        <div className="bg-[#141d16] border-b border-[#2d3a30] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1a261d] border border-[#c2872e]/30 flex items-center justify-center text-[#c2872e] shadow-xs">
              {stepData.iconSvg}
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#c2872e] block">
                {stepData.badge}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs text-[#9ba196]">
                <span>WAYPOINT {stepData.stepNumber} OF 03</span>
                <span className="text-[#c2872e] font-semibold">({progressPercent}% COMPLETE)</span>
              </div>
            </div>
          </div>

          <button
            onClick={skip}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#9ba196] hover:text-white hover:bg-white/10 transition-colors font-mono text-sm focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
            title="Close Tour (Esc)"
            aria-label="Close Tour"
          >
            ✕
          </button>
        </div>

        {/* 3-Step Segment Progress Line with Step Labels */}
        <div className="px-6 pt-4 pb-2 bg-[#0f1611] space-y-1.5">
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx <= stepIndex
                    ? "bg-[#c2872e] shadow-xs shadow-[#c2872e]/50"
                    : "bg-[#233126]"
                }`}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 text-[10px] font-mono text-[#9ba196]">
            <span className={stepIndex === 0 ? "text-[#c2872e] font-bold" : ""}>1. Data</span>
            <span className={`text-center ${stepIndex === 1 ? "text-[#c2872e] font-bold" : ""}`}>2. Encoding</span>
            <span className={`text-right ${stepIndex === 2 ? "text-[#c2872e] font-bold" : ""}`}>3. Chart Type</span>
          </div>
        </div>

        {/* Body Content Area */}
        <div className="p-6 space-y-5">
          <div className="space-y-1.5">
            <h2
              id="tour-dialog-title"
              className="font-headline-md text-xl sm:text-2xl font-bold text-[#f1f5ee] tracking-tight"
            >
              {stepData.title}
            </h2>
            <p className="font-mono text-xs text-[#c2872e] leading-snug">
              {stepData.tagline}
            </p>
          </div>

          <p className="font-body-ui text-sm text-[#9ba196] leading-relaxed">
            {stepData.description}
          </p>

          {/* Key Feature Bullets */}
          <div className="p-3.5 bg-[#141d16] border border-[#233126] rounded-xl space-y-2 font-mono text-xs text-[#a4c995]">
            {stepData.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2.5">
                <span className="text-[#c2872e] font-bold text-xs">◆</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          {/* Action Button Controls */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {stepIndex > 0 && (
                <button
                  onClick={prev}
                  className="px-4 py-2 rounded-xl border border-[#2d3a30] bg-[#141d16] hover:bg-[#1f2c22] text-[#e0e4dc] font-mono text-xs font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
                >
                  <span>← Back</span>
                </button>
              )}

              <button
                onClick={skip}
                className="px-3.5 py-2 rounded-xl text-[#9ba196] hover:text-white font-mono text-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
              >
                Skip Guide
              </button>
            </div>

            <button
              onClick={() => {
                if (step === "chart-type") {
                  complete();
                  onComplete?.();
                } else {
                  next();
                }
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#c2872e] hover:bg-[#d99a38] text-[#18241b] font-mono text-xs font-bold shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#c2872e] focus-visible:outline-none"
            >
              <span>{stepData.cta}</span>
            </button>
          </div>
        </div>

        {/* Footer info & Don't show again option */}
        <div className="border-t border-[#233126] bg-[#121a14] px-6 py-3 flex items-center justify-between text-[11px] font-mono text-[#60685c]">
          <label className="flex items-center gap-2 cursor-pointer hover:text-[#9ba196] transition-colors">
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => {
                if (e.target.checked) complete();
              }}
              className="rounded border-[#2d3a30] bg-[#0f1611] text-[#c2872e] focus:ring-0 w-3.5 h-3.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#c2872e]"
            />
            <span>Don&apos;t show this guide on startup</span>
          </label>

          <span className="hidden sm:inline text-[#9ba196]/60">
            Esc to skip • Arrows to navigate
          </span>
        </div>
      </div>
    </div>
  );
}