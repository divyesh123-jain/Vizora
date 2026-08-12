'use client';

import React, { useState, useMemo } from 'react';
import { AutoChart, Chart } from '@vizora/react';
import { recommendChartSpec } from '@vizora/intelligence';
import { ChartType } from '@vizora/core';
import { CompassDial } from '../components/CompassDial';
import { LegendBand } from '../components/LegendBand';
import { CartoButton } from '../components/CartoButton';

// Datasets
const PRESETS: Record<string, {
  name: string;
  type: ChartType;
  x: string;
  y?: string;
  profile: string;
  data: Record<string, unknown>[];
}> = {
  harmonic: {
    name: 'FIG 1. HARMONIC OSCILLATION SURVEY',
    type: 'line',
    x: 't',
    y: 'amp',
    profile: 'temporal [t] + quantitative [amp]',
    data: [
      { t: '1.00', amp: 0.35 },
      { t: '2.00', amp: 0.52 },
      { t: '3.00', amp: 0.28 },
      { t: '4.00', amp: 0.68 },
      { t: '5.00', amp: 0.54 },
      { t: '6.00', amp: 0.24 },
      { t: '7.00', amp: 0.88 },
      { t: '8.00', amp: 0.62 },
      { t: '9.00', amp: 0.18 },
      { t: '10.00', amp: 0.58 },
      { t: '11.00', amp: 0.44 },
    ],
  },
  sales: {
    name: 'FIG 2. REGIONAL SALES SURVEY',
    type: 'bar',
    x: 'region',
    y: 'sales',
    profile: 'categorical [region] + quantitative [sales]',
    data: [
      { region: 'North America', sales: 1250 },
      { region: 'Europe', sales: 980 },
      { region: 'Asia Pacific', sales: 1420 },
      { region: 'Latin America', sales: 610 },
      { region: 'Middle East', sales: 430 },
    ],
  },
  scatter: {
    name: 'FIG 3. COORD DISTRIBUTIVE SCATTER',
    type: 'scatter',
    x: 'height',
    y: 'weight',
    profile: 'quantitative [height] + quantitative [weight]',
    data: [
      { height: 160, weight: 55 },
      { height: 165, weight: 62 },
      { height: 172, weight: 68 },
      { height: 178, weight: 74 },
      { height: 185, weight: 82 },
      { height: 190, weight: 91 },
    ],
  },
  histogram: {
    name: 'FIG 4. ELEVATION FREQUENCY DENSITY',
    type: 'histogram',
    x: 'age',
    y: 'count',
    profile: 'quantitative distribution [age]',
    data: [
      { age: 19 }, { age: 22 }, { age: 24 }, { age: 25 }, { age: 28 },
      { age: 29 }, { age: 31 }, { age: 34 }, { age: 35 }, { age: 38 },
      { age: 41 }, { age: 44 }, { age: 47 }, { age: 52 }, { age: 58 },
    ],
  },
};

export default function Home() {
  const [activePresetKey, setActivePresetKey] = useState<keyof typeof PRESETS>('harmonic');
  const [selectedChartType, setSelectedChartType] = useState<ChartType>('line');
  const [mode, setMode] = useState<'auto' | 'explicit'>('auto');
  const [customJson, setCustomJson] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [copiedSpec, setCopiedSpec] = useState<boolean>(false);
  const [playgroundOpen, setPlaygroundOpen] = useState<boolean>(false);

  const currentPreset = PRESETS[activePresetKey];

  // Data processing
  const currentData = useMemo(() => {
    if (!customJson.trim()) return currentPreset.data;
    try {
      const parsed = JSON.parse(customJson);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch {
      // Fallback
    }
    return currentPreset.data;
  }, [customJson, currentPreset.data]);

  // Recommended Spec
  const autoSpec = useMemo(() => {
    const rec = recommendChartSpec(currentData);
    rec.title = currentPreset.name;
    return rec;
  }, [currentData, currentPreset.name]);

  // Computed Spec
  const computedSpec = useMemo(() => {
    if (mode === 'auto') return autoSpec;
    return {
      version: '0.1.0' as const,
      type: selectedChartType,
      title: currentPreset.name,
      data: currentData,
      encoding: {
        x: currentPreset.x ? { field: currentPreset.x } : undefined,
        y: currentPreset.y ? { field: currentPreset.y } : undefined,
      },
      config: { width: 700, height: 360 },
    };
  }, [mode, autoSpec, selectedChartType, currentPreset, currentData]);

  const handleSelectPreset = (key: keyof typeof PRESETS) => {
    setActivePresetKey(key);
    setSelectedChartType(PRESETS[key].type);
    setCustomJson('');
  };

  const handleCopyCode = () => {
    const code = `import { AutoChart } from '@vizora/react';\n\n<AutoChart data={surveyData} height={360} flagAnomalies={true} />`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopySpec = () => {
    navigator.clipboard.writeText(JSON.stringify(computedSpec, null, 2));
    setCopiedSpec(true);
    setTimeout(() => setCopiedSpec(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased selection:bg-[#c2872e] selection:text-white">
      
      {/* 1. Header / Navigation Bar */}
      <header className="w-full bg-[#f7faf5] border-b border-[#1e2a22] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-display-hero text-xl font-bold text-[#1e2a22] tracking-tight">
              Vizora
            </span>
            <nav className="hidden md:flex items-center gap-6 font-data-spec text-xs text-[#434844]">
              <a href="#docs" className="hover:text-[#1e2a22] transition-colors">Docs</a>
              <a href="#gallery" className="hover:text-[#1e2a22] transition-colors">Gallery</a>
              <a href="#playground" onClick={() => setPlaygroundOpen(true)} className="hover:text-[#1e2a22] transition-colors">Playground</a>
            </nav>
          </div>

          <a
            href="#playground"
            onClick={() => setPlaygroundOpen(true)}
            className="carto-btn-primary px-5 py-2 text-xs"
          >
            GET STARTED
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 border-b border-[#1e2a22]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display-hero italic text-4xl sm:text-5xl md:text-6xl text-[#1e2a22] leading-[1.15] tracking-tight">
              Give it data.<br />
              <span className="not-italic">It finds the bearing.</span>
            </h1>

            <p className="font-body-doc text-[#434844] text-base md:text-lg max-w-xl leading-relaxed">
              The intelligent visualization engine designed for analytical rigor. We treat your data as a landscape to be surveyed, yielding precision cartography rather than mere stylistic charts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#demo" className="carto-btn-primary px-6 py-3 text-xs flex items-center gap-2">
                INITIALIZE ENGINE
              </a>

              <a
                href="#docs"
                className="carto-btn-secondary px-6 py-3 text-xs flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-[#1e2a22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Documentation
              </a>
            </div>
          </div>

          {/* Hero Right Geodetic Compass Dial */}
          <div className="lg:col-span-5">
            <CompassDial
              recommendedType={autoSpec.type}
              selectedType={mode === 'auto' ? autoSpec.type : selectedChartType}
              onSelectType={(type) => {
                setSelectedChartType(type);
                setMode('explicit');
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. The Engine of Insight Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20 bg-[#f7faf5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Section Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-headline-lg text-2xl md:text-3xl text-[#1e2a22]">
              The Engine of Insight
            </h2>
            
            <p className="font-body-ui text-[#434844] leading-relaxed text-sm md:text-base">
              Our Compass recommendation engine operates on a simple principle: form follows data. By analyzing the shape, cardinality, and distribution of your dataset, it calculates the optimal visualization bearing.
            </p>

            <p className="font-body-ui text-[#434844] leading-relaxed text-sm md:text-base">
              No more guessing which chart to use. The engine autonomously navigates through a multidimensional space of possibilities, selecting the precise cartographic representation that maximizes analytical clarity.
            </p>
          </div>

          {/* Section Right Polar Radar Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-square bg-[#ecefea]/60 border border-[#1e2a22]/30 carto-grid-bg p-4 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Concentric Radar Rings */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#1e2a22" strokeWidth="0.75" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="#6e756a" strokeWidth="0.5" strokeDasharray="2 3" />
                <circle cx="100" cy="100" r="35" fill="none" stroke="rgba(110, 117, 106, 0.2)" strokeWidth="0.5" />
                
                {/* Radial Cross Lines */}
                <line x1="15" y1="100" x2="185" y2="100" stroke="#6e756a" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="100" y1="15" x2="100" y2="185" stroke="#6e756a" strokeWidth="0.5" strokeDasharray="3 3" />
                <line x1="40" y1="40" x2="160" y2="160" stroke="rgba(110, 117, 106, 0.25)" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Golden Bearing Ray */}
                <line x1="100" y1="100" x2="155" y2="142" stroke="#c2872e" strokeWidth="2" strokeLinecap="square" />
                <circle cx="155" cy="142" r="4" fill="#c2872e" stroke="#1e2a22" strokeWidth="1" />
                <circle cx="100" cy="100" r="3" fill="#1e2a22" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Chart Demonstration ("FIG 1. HARMONIC OSCILLATION SURVEY") */}
      <section id="demo" className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20">
        
        {/* Preset Selector Tabs above Main Chart */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 font-data-spec text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#6e756a]">SURVEY PRESETS:</span>
            {(Object.keys(PRESETS) as Array<keyof typeof PRESETS>).map((key) => {
              const isActive = activePresetKey === key;
              return (
                <button
                  key={key}
                  onClick={() => handleSelectPreset(key)}
                  className={`px-3 py-1 border transition-all ${
                    isActive
                      ? 'bg-[#1e2a22] text-[#f7faf5] border-[#1e2a22] font-semibold'
                      : 'bg-[#f7faf5] text-[#1e2a22] border-[#6e756a]/30 hover:border-[#1e2a22]'
                  }`}
                >
                  {PRESETS[key].name.split('.')[1] || PRESETS[key].name}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode(mode === 'auto' ? 'explicit' : 'auto')}
              className="px-3 py-1 bg-[#dee5d7] border border-[#1e2a22] text-[#1e2a22] font-mono text-xs hover:bg-[#c2872e] transition-colors"
            >
              MODE: {mode.toUpperCase()}
            </button>
          </div>
        </div>

        {/* Chart Frame Box */}
        <div className="carto-panel bg-[#f7faf5]">
          
          {/* Header Row */}
          <div className="p-4 border-b border-[#1e2a22] flex items-center justify-between bg-[#ecefea]">
            <span className="font-data-spec text-xs text-[#1e2a22] tracking-wider font-semibold">
              {currentPreset.name}
            </span>

            <span className="font-data-spec text-[11px] text-[#1e2a22] px-2.5 py-0.5 border border-[#1e2a22] bg-[#f7faf5]">
              REC: {computedSpec.type.toUpperCase()}-A
            </span>
          </div>

          {/* Live SVG Chart Viewport */}
          <div className="p-6 md:p-8 bg-[#f7faf5] flex justify-center items-center overflow-x-auto min-h-[380px]">
            {mode === 'auto' ? (
              <AutoChart data={currentData} title="" />
            ) : (
              <Chart
                data={currentData}
                type={selectedChartType}
                x={currentPreset.x}
                y={currentPreset.y}
                title=""
              />
            )}
          </div>

          {/* Signature Legend Band directly underneath */}
          <LegendBand spec={computedSpec} dataCount={currentData.length} />
        </div>
      </section>

      {/* 5. Surveyor's Precision Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20 bg-[#f7faf5]">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <h2 className="font-headline-lg text-2xl md:text-3xl text-[#1e2a22]">
            Surveyor's Precision
          </h2>
          <p className="font-body-ui text-[#434844] text-sm md:text-base leading-relaxed">
            Every cartographic output is anchored by a deterministic, coordinate-style specification. The Legend Band provides immediate, rigorous context to the surveyor, mapping raw data types to their visual representation without ambiguity.
          </p>
        </div>

        {/* Spec Property Table */}
        <div className="max-w-xl mx-auto carto-panel bg-[#f7faf5] mb-12">
          <div className="grid grid-cols-2 p-3 bg-[#dee5d7] border-b border-[#1e2a22] font-data-spec text-xs font-semibold">
            <span>SPEC PROPERTY</span>
            <span className="text-right">RENDERED VALUE</span>
          </div>
          <div className="divide-y divide-[#1e2a22]/20 font-data-spec text-xs text-[#1e2a22]">
            <div className="grid grid-cols-2 p-3">
              <span className="text-[#6e756a]">domain</span>
              <span className="text-right">[0.0, 100.0]</span>
            </div>
            <div className="grid grid-cols-2 p-3">
              <span className="text-[#6e756a]">scale_type</span>
              <span className="text-right">linear_continuous</span>
            </div>
            <div className="grid grid-cols-2 p-3">
              <span className="text-[#6e756a]">projection</span>
              <span className="text-right">cartesian_2d</span>
            </div>
          </div>
        </div>

        {/* 3 Mini Chart Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mini 1: Line */}
          <div className="carto-panel p-3 bg-[#f7faf5] space-y-2">
            <div className="font-data-spec text-[10px] text-[#6e756a] uppercase">PROFIT ANALYSIS</div>
            <div className="h-28 bg-[#ecefea] border border-[#1e2a22]/20 flex items-center justify-center p-2">
              <svg viewBox="0 0 160 60" className="w-full h-full">
                <path d="M 10 40 L 40 30 L 70 50 L 100 20 L 130 35 L 150 15" fill="none" stroke="#1e2a22" strokeWidth="1.5" />
                <rect x="97" y="17" width="6" height="6" fill="#c2872e" stroke="#1e2a22" strokeWidth="1" />
              </svg>
            </div>
            <div className="font-data-spec text-[10px] text-[#6e756a] flex justify-between">
              <span>type: line</span>
              <span>rec: 0.98</span>
            </div>
          </div>

          {/* Mini 2: Bar */}
          <div className="carto-panel p-3 bg-[#f7faf5] space-y-2">
            <div className="font-data-spec text-[10px] text-[#6e756a] uppercase">VOLUME DISTRIBUTION</div>
            <div className="h-28 bg-[#ecefea] border border-[#1e2a22]/20 flex items-center justify-center p-2">
              <svg viewBox="0 0 160 60" className="w-full h-full">
                <rect x="15" y="35" width="20" height="25" fill="#1e2a22" />
                <rect x="45" y="15" width="20" height="45" fill="#1e2a22" />
                <rect x="75" y="10" width="20" height="50" fill="#c2872e" />
                <rect x="105" y="28" width="20" height="32" fill="#1e2a22" />
                <rect x="135" y="42" width="20" height="18" fill="#1e2a22" />
              </svg>
            </div>
            <div className="font-data-spec text-[10px] text-[#6e756a] flex justify-between">
              <span>type: bar</span>
              <span>rec: 0.95</span>
            </div>
          </div>

          {/* Mini 3: Scatter */}
          <div className="carto-panel p-3 bg-[#f7faf5] space-y-2">
            <div className="font-data-spec text-[10px] text-[#6e756a] uppercase">CLUSTER FREQUENCY</div>
            <div className="h-28 bg-[#ecefea] border border-[#1e2a22]/20 flex items-center justify-center p-2">
              <svg viewBox="0 0 160 60" className="w-full h-full">
                <circle cx="120" cy="35" r="15" fill="none" stroke="#c2872e" strokeWidth="0.75" strokeDasharray="2 2" />
                <rect x="30" y="40" width="4" height="4" fill="#1e2a22" />
                <rect x="50" y="25" width="4" height="4" fill="#1e2a22" />
                <rect x="115" y="32" width="4" height="4" fill="#c2872e" />
                <rect x="122" y="38" width="4" height="4" fill="#c2872e" />
                <rect x="125" y="28" width="4" height="4" fill="#c2872e" />
              </svg>
            </div>
            <div className="font-data-spec text-[10px] text-[#6e756a] flex justify-between">
              <span>type: scatter</span>
              <span>rec: 0.94</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Anomalies in the Field Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Anomaly Target Box */}
          <div className="lg:col-span-6">
            <div className="carto-panel bg-[#f7faf5] p-6 carto-grid-bg relative h-64 flex items-center justify-center">
              <svg viewBox="0 0 300 160" className="w-full h-full">
                <path d="M 20 120 Q 90 20 160 110 T 280 40" fill="none" stroke="#6e756a" strokeWidth="1.5" />
                
                {/* Target Anomaly Circle in Red (#d6502b) */}
                <circle cx="160" cy="110" r="22" fill="rgba(214, 80, 43, 0.15)" stroke="#d6502b" strokeWidth="1.5" />
                <circle cx="160" cy="110" r="6" fill="#d6502b" />

                {/* Callout Pointer line */}
                <line x1="160" y1="110" x2="205" y2="70" stroke="#d6502b" strokeWidth="1" />
                <rect x="205" y="58" width="64" height="20" fill="#f7faf5" stroke="#d6502b" strokeWidth="1" />
                <text x="237" y="72" textAnchor="middle" fill="#d6502b" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="bold">
                  DEV &gt; 1.2
                </text>
              </svg>
            </div>
          </div>

          {/* Anomaly Text Content */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-headline-lg text-2xl md:text-3xl text-[#1e2a22]">
              Anomalies in the Field
            </h2>
            <p className="font-body-ui text-[#434844] text-sm md:text-base leading-relaxed">
              The terrain of data is rarely perfectly smooth. Our 'Flare' detection system continuously surveys the landscape for irregularities, flagging statistical outliers like landmarks on a topographic map.
            </p>
            <p className="font-body-ui text-[#434844] text-sm md:text-base leading-relaxed">
              These anomalies are highlighted with distinct cartographic markers, ensuring that critical deviations are never lost in the noise of the broader dataset.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Technical Integration Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20 bg-[#f7faf5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-headline-lg text-2xl md:text-3xl text-[#1e2a22]">
              Technical Integration
            </h2>
            <p className="font-body-ui text-[#434844] text-sm md:text-base leading-relaxed">
              The instrument is operated via a precise, minimal API. Feed the coordinate data; the engine derives the optimal cartographic representation autonomously, applying appropriate scales and datum constraints.
            </p>
          </div>

          {/* Right Dark Terminal Code Box */}
          <div className="lg:col-span-6">
            <div className="carto-panel bg-[#1e2a22] text-[#ecefea] overflow-hidden">
              <div className="px-4 py-2 bg-[#121e17] border-b border-[#ecefea]/20 font-data-spec text-xs text-[#849287] flex items-center justify-between">
                <span>survey_data.tsx</span>
                <button
                  onClick={handleCopyCode}
                  className="hover:text-white transition-colors"
                >
                  {copiedCode ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              <pre className="p-5 font-data-spec text-xs leading-relaxed overflow-x-auto text-[#dee5d7]">
                <span className="text-[#c2872e]">import</span> &#123; AutoChart &#125; <span className="text-[#c2872e]">from</span> <span className="text-[#bd822a]">'@vizora/react'</span>;<br /><br />
                <span className="text-[#849287]">// Engine handles auto-generation, datum scaling,</span><br />
                <span className="text-[#849287]">// and anomaly detection autonomously.</span><br />
                &lt;<span className="text-[#c2872e]">AutoChart</span><br />
                &nbsp;&nbsp;<span className="text-[#bccabe]">data</span>=&#123;surveyData&#125;<br />
                &nbsp;&nbsp;<span className="text-[#bccabe]">height</span>=&#123;<span className="text-[#fdba5c]">360</span>&#125;<br />
                &nbsp;&nbsp;<span className="text-[#bccabe]">flagAnomalies</span>=&#123;<span className="text-[#fdba5c]">true</span>&#125;<br />
                &nbsp;&nbsp;<span className="text-[#bccabe]">datumUnits</span>=<span className="text-[#bd822a]">"0.15"</span><br />
                /&gt;
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Interactive Developer Playground Drawer Section */}
      <section id="playground" className="max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-data-spec text-xs text-[#6e756a]">LIVE EXPERIMENTAL LABORATORY</span>
            <h2 className="font-headline-lg text-2xl text-[#1e2a22]">Interactive Data Playground</h2>
          </div>
          <button
            onClick={() => setPlaygroundOpen(!playgroundOpen)}
            className="carto-btn-secondary"
          >
            {playgroundOpen ? 'Collapse Drawer [-]' : 'Expand Inspector [+]'}
          </button>
        </div>

        {playgroundOpen && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Live Data Editor */}
            <div className="lg:col-span-6 carto-panel p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-[#1e2a22] pb-2 font-label-caps">
                <span>Tabular Data Input (JSON)</span>
                {customJson && (
                  <button onClick={() => setCustomJson('')} className="text-[#d6502b] text-xs lowercase">
                    Reset
                  </button>
                )}
              </div>
              <textarea
                rows={8}
                value={customJson}
                onChange={(e) => setCustomJson(e.target.value)}
                placeholder={`[{"region": "US", "sales": 100}, {"region": "EU", "sales": 80}]`}
                className="w-full bg-[#f7faf5] border border-[#6e756a] p-3 font-data-spec text-xs text-[#1e2a22] outline-none focus:border-[#c2872e]"
              />
            </div>

            {/* Zod ChartSpec JSON Output */}
            <div className="lg:col-span-6 carto-panel p-4 space-y-3 bg-[#f7faf5]">
              <div className="flex justify-between items-center border-b border-[#1e2a22] pb-2 font-label-caps">
                <span>ChartSpec JSON Output</span>
                <button onClick={handleCopySpec} className="text-[#1e2a22] text-xs font-mono">
                  {copiedSpec ? '✓ Copied' : 'Copy Spec'}
                </button>
              </div>
              <pre className="bg-[#1e2a22] text-[#ecefea] p-3 font-data-spec text-xs overflow-x-auto max-h-[220px]">
                {JSON.stringify(computedSpec, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </section>

      {/* 9. Deployed in the Field By Logos */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-b border-[#1e2a22]/20 text-center space-y-6">
        <div className="font-data-spec text-xs text-[#6e756a] uppercase tracking-widest">
          DEPLOYED IN THE FIELD BY
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 font-data-spec text-xs text-[#1e2a22] font-semibold tracking-wider opacity-75">
          <span>ACME_CORP</span>
          <span>GLOBEX_INC</span>
          <span>SOYUZ_SYSTEMS</span>
          <span>MASSIVE_DYNAMIC</span>
          <span>INITECH</span>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-data-spec text-xs text-[#6e756a]">
        <div>
          © 1894 GEODETIC VISUALIZATION SYSTEMS. INSTRUMENTAL MINIMALISM.
        </div>

        <div className="flex items-center gap-6">
          <a href="#docs" className="hover:text-[#1e2a22]">Documentation</a>
          <a href="#changelog" className="hover:text-[#1e2a22]">Changelog</a>
          <a href="#terms" className="hover:text-[#1e2a22]">Terms of Survey</a>
          <a href="#contact" className="hover:text-[#1e2a22]">Contact</a>
        </div>
      </footer>
    </div>
  );
}
