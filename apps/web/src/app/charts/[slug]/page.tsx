'use client';

import React, { useState, useMemo } from 'react';
import { notFound, useParams } from 'next/navigation';
import { Chart } from '@vizora/react';
import { recommendChartSpec, profileField } from '@vizora/intelligence';
import { ChartType } from '@vizora/core';
import { CodeBlock } from '../../../components/CodeBlock';
import {
  PropControlRow,
  ColorControl,
  SelectControl,
  ToggleControl,
  NumberControl,
  TextControl,
} from '../../../components/InteractivePropControls';

interface ChartDetailConfig {
  slug: ChartType;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  heuristics: string;
  xDefault: string;
  yDefault: string;
  availableFields: string[];
  parents: string[];
  childrenNodes: string[];
  presets: {
    name: string;
    description: string;
    data: Record<string, unknown>[];
  }[];
}

const DETAILS_MAP: Record<ChartType, ChartDetailConfig> = {
  line: {
    slug: 'line',
    title: 'Line Chart (Temporal Time-Series)',
    badge: 'TEMPORAL TREND',
    subtitle: 'Continuous quantitative metrics tracked across time or date dimensions.',
    description:
      'The Line Chart maps temporal fields along the X axis and quantitative metric values along the Y axis. It connects sequential points with crisp vector paths to highlight trends, acceleration, and periodicity.',
    heuristics:
      'Inferred when data profiling detects ≥ 1 Temporal field (Date or date-string ISO format) and ≥ 1 Quantitative field.',
    xDefault: 'date',
    yDefault: 'revenue',
    availableFields: ['date', 'revenue', 'cpu'],
    parents: ['<AutoChart />', '<Chart />', '<SVGContainer />'],
    childrenNodes: ['<g>', '<path>', '<rect>', '<line>', '<text>'],
    presets: [
      {
        name: 'Financial Revenue Trend',
        description: '7-day revenue performance tracking.',
        data: [
          { date: '2026-01-01', revenue: 4200 },
          { date: '2026-01-02', revenue: 4800 },
          { date: '2026-01-03', revenue: 4500 },
          { date: '2026-01-04', revenue: 5900 },
          { date: '2026-01-05', revenue: 6400 },
          { date: '2026-01-06', revenue: 7100 },
          { date: '2026-01-07', revenue: 7900 },
        ],
      },
      {
        name: 'Server CPU Load',
        description: 'System resource usage metric.',
        data: [
          { date: '00:00', revenue: 15 },
          { date: '04:00', revenue: 22 },
          { date: '08:00', revenue: 65 },
          { date: '12:00', revenue: 88 },
          { date: '16:00', revenue: 74 },
          { date: '20:00', revenue: 42 },
        ],
      },
    ],
  },

  bar: {
    slug: 'bar',
    title: 'Bar Chart (Categorical Breakdown)',
    badge: 'CATEGORICAL AGGREGATE',
    subtitle: 'Quantitative comparisons across discrete, unordered categorical groups.',
    description:
      'The Bar Chart renders rectangular bars whose lengths are proportional to quantitative totals. Supports both vertical column and horizontal bar orientations.',
    heuristics:
      'Inferred when data profiling detects ≥ 1 Categorical string field and ≥ 1 Quantitative metric.',
    xDefault: 'category',
    yDefault: 'sales',
    availableFields: ['category', 'sales', 'share'],
    parents: ['<AutoChart />', '<Chart />', '<SVGContainer />'],
    childrenNodes: ['<g>', '<rect>', '<line>', '<text>'],
    presets: [
      {
        name: 'Regional Sales Distribution',
        description: 'Sales volume categorized by geographic territory.',
        data: [
          { category: 'North America', sales: 12500 },
          { category: 'Europe', sales: 9800 },
          { category: 'Asia Pacific', sales: 14200 },
          { category: 'Latin America', sales: 6100 },
          { category: 'Middle East', sales: 4300 },
        ],
      },
      {
        name: 'Browser Market Share',
        description: 'User breakdown by web client.',
        data: [
          { category: 'Chrome', sales: 64 },
          { category: 'Safari', sales: 19 },
          { category: 'Edge', sales: 5 },
          { category: 'Firefox', sales: 3 },
          { category: 'Other', sales: 9 },
        ],
      },
    ],
  },

  scatter: {
    slug: 'scatter',
    title: 'Scatter Plot (Bivariate Correlation)',
    badge: 'QUANTITATIVE CORRELATION',
    subtitle: 'Statistical relationships between two continuous numerical variables.',
    description:
      'The Scatter Plot positions data points along a Cartesian plane to reveal clusters, correlations, outliers, and non-linear patterns between two numerical metrics.',
    heuristics: 'Inferred when data profiling detects ≥ 2 Quantitative numeric fields.',
    xDefault: 'height',
    yDefault: 'weight',
    availableFields: ['height', 'weight', 'spend', 'conversions'],
    parents: ['<AutoChart />', '<Chart />', '<SVGContainer />'],
    childrenNodes: ['<g>', '<rect>', '<line>', '<text>'],
    presets: [
      {
        name: 'Physical Biometrics (Height vs Weight)',
        description: 'Correlation between subject height and weight.',
        data: [
          { height: 160, weight: 55 },
          { height: 165, weight: 62 },
          { height: 172, weight: 68 },
          { height: 178, weight: 74 },
          { height: 185, weight: 82 },
          { height: 190, weight: 91 },
        ],
      },
      {
        name: 'Marketing Spend vs Conversions',
        description: 'Ad budget efficiency scatter.',
        data: [
          { height: 100, weight: 12 },
          { height: 250, weight: 28 },
          { height: 500, weight: 58 },
          { height: 750, weight: 79 },
          { height: 1000, weight: 115 },
        ],
      },
    ],
  },

  histogram: {
    slug: 'histogram',
    title: 'Histogram (Distribution Density)',
    badge: 'FREQUENCY DISTRIBUTION',
    subtitle: 'Auto-binning continuous single-variable data into frequency counts.',
    description:
      'The Histogram divides continuous numerical data into discrete value bins and counts occurrences in each interval to show distribution shape (skewness, variance, central tendency).',
    heuristics:
      'Inferred when data profiling detects 1 Quantitative metric with no explicit temporal or categorical keys.',
    xDefault: 'age',
    yDefault: 'age',
    availableFields: ['age'],
    parents: ['<AutoChart />', '<Chart />', '<SVGContainer />'],
    childrenNodes: ['<g>', '<rect>', '<line>', '<text>'],
    presets: [
      {
        name: 'Demographic Age Frequency',
        description: 'Distribution of participant ages.',
        data: [
          { age: 19 },
          { age: 22 },
          { age: 24 },
          { age: 25 },
          { age: 28 },
          { age: 29 },
          { age: 31 },
          { age: 34 },
          { age: 35 },
          { age: 38 },
          { age: 41 },
          { age: 44 },
          { age: 47 },
          { age: 52 },
          { age: 58 },
        ],
      },
    ],
  },

  'kpi-sparkline': {
    slug: 'kpi-sparkline',
    title: 'KPI + Sparkline (Executive Metric)',
    badge: 'EXECUTIVE KPI',
    subtitle: 'Condensed headline metric display with inline trend sparkline.',
    description:
      'Combines a prominent headline KPI figure with a micro sparkline vector path to give instant contextual trend direction for dashboards.',
    heuristics: 'Ideal for dashboard KPI summary cards.',
    xDefault: 'month',
    yDefault: 'mrr',
    availableFields: ['month', 'mrr'],
    parents: ['<AutoChart />', '<Chart />', '<SVGContainer />'],
    childrenNodes: ['<g>', '<text>', '<path>', '<rect>'],
    presets: [
      {
        name: 'Monthly Recurring Revenue (MRR)',
        description: 'MRR growth progression.',
        data: [
          { month: 'Jan', mrr: 12000 },
          { month: 'Feb', mrr: 12800 },
          { month: 'Mar', mrr: 13500 },
          { month: 'Apr', mrr: 14200 },
          { month: 'May', mrr: 15800 },
          { month: 'Jun', mrr: 17400 },
        ],
      },
    ],
  },
};

export default function DynamicChartDetailPage() {
  const params = useParams();
  const slug = (params.slug as ChartType) || 'line';

  const config = DETAILS_MAP[slug];
  if (!config) {
    notFound();
  }

  // Interactive Presets & Tab State
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [activeInspectorTab, setActiveInspectorTab] = useState<'jsx' | 'spec' | 'profile' | 'table'>('jsx');
  const [activePropsTab, setActivePropsTab] = useState<'general' | 'style' | 'events' | 'animation'>('general');

  // Interactive Live Prop Controls State
  const [xKey, setXKey] = useState<string>(config.xDefault);
  const [yKey, setYKey] = useState<string>(config.yDefault);
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  const [chartTitle, setChartTitle] = useState<string>(config.presets[0].name);
  const [color, setColor] = useState<string>('#c2872e');
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [bins, setBins] = useState<number>(5);
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [isAnimationActive, setIsAnimationActive] = useState<boolean>(true);
  const [animationDuration, setAnimationDuration] = useState<number>(400);
  const [animationEasing, setAnimationEasing] = useState<string>('linear');

  // Real-time Event Stream Log
  const [eventLogs, setEventLogs] = useState<string[]>([]);

  const logEvent = (evtName: string, detail?: string) => {
    const time = new Date().toLocaleTimeString();
    const log = `[${time}] ${evtName}${detail ? `: ${detail}` : ''}`;
    setEventLogs((prev) => [log, ...prev.slice(0, 9)]);
  };

  const currentPreset = config.presets[activePresetIndex] || config.presets[0];
  const currentData = currentPreset.data;

  // Resolved ChartSpec for preview inspector
  const inferredSpec = useMemo(() => {
    try {
      return recommendChartSpec(currentData);
    } catch {
      return {
        version: '0.1.0' as const,
        type: config.slug,
        title: chartTitle,
        data: currentData,
        encoding: {
          x: { field: xKey },
          y: { field: yKey },
          orientation,
          bins,
        },
        config: {
          showGrid,
          theme,
        },
      };
    }
  }, [currentData, config.slug, chartTitle, xKey, yKey, orientation, bins, showGrid, theme]);

  const profiles = useMemo(() => {
    if (!currentData || currentData.length === 0) return [];
    return Object.keys(currentData[0]).map((f) => profileField(currentData, f));
  }, [currentData]);

  // Dynamic Live React Code Snippet Generator
  const reactCodeSnippet = `<Chart
  type="${config.slug}"
  data={data}
  x="${xKey}"
  y="${yKey}"
  orientation="${orientation}"
  color="${color}"
  title="${chartTitle}"
  showGrid={${showGrid}}
  theme="${theme}"
  ${config.slug === 'histogram' ? `bins={${bins}}\n  ` : ''}onClick={(e) => console.log('Chart click', e)}
/>`;

  const fieldOptions = Object.keys(currentData[0] || {}).map((f) => ({ label: f, value: f }));

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="border-b border-[#1e2a22]/20 pb-6 space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#c2872e] bg-[#ecefea] px-2.5 py-0.5 border border-[#1e2a22]/20 uppercase">
            {config.badge}
          </span>
          <span className="font-mono text-xs text-[#6e756a]">
            @vizora/react • &lt;Chart type="{config.slug}" /&gt;
          </span>
        </div>

        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#1e2a22] font-bold">
          {config.title}
        </h1>

        <p className="font-body-doc text-[#434844] max-w-3xl text-base leading-relaxed">
          {config.description}
        </p>

        <div className="p-3 bg-[#f7faf5] border border-[#1e2a22]/20 font-mono text-xs text-[#1e2a22] flex items-center gap-2">
          <span className="text-[#c2872e] font-bold">Heuristic Profiling:</span>
          <span>{config.heuristics}</span>
        </div>
      </div>

      {/* Parent & Child Component Hierarchy Badges (Recharts Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[#f7faf5] border border-[#1e2a22]/20 space-y-2">
          <h3 className="font-mono text-xs font-bold text-[#c2872e] uppercase tracking-wider">
            Parent Component
          </h3>
          <p className="font-body-doc text-xs text-[#6e756a]">
            This chart element can be wrapped inside the following parent runtime containers:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {config.parents.map((p) => (
              <span
                key={p}
                className="font-mono text-xs bg-[#1e2a22] text-[#ecefea] px-2.5 py-1 font-semibold border border-[#1e2a22]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 bg-[#f7faf5] border border-[#1e2a22]/20 space-y-2">
          <h3 className="font-mono text-xs font-bold text-[#c2872e] uppercase tracking-wider">
            Child Components / Scene Nodes
          </h3>
          <p className="font-body-doc text-xs text-[#6e756a]">
            Headless scene graph nodes emitted during SVG layout resolution:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {config.childrenNodes.map((c) => (
              <span
                key={c}
                className="font-mono text-xs bg-[#ecefea] text-[#1e2a22] px-2 py-0.5 border border-[#1e2a22]/30 font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Preset Switcher & Sandbox Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-xl text-[#1e2a22] font-bold">
            Interactive Live Component Sandbox
          </h2>
          <div className="font-mono text-xs text-[#6e756a]">
            Real-time interactive prop updates below
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {config.presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActivePresetIndex(idx);
                setChartTitle(preset.name);
                logEvent('Preset Switch', preset.name);
              }}
              className={`px-3 py-1.5 font-mono text-xs transition-all border ${
                activePresetIndex === idx
                  ? 'bg-[#1e2a22] text-[#ecefea] font-bold border-[#1e2a22]'
                  : 'bg-[#f7faf5] text-[#6e756a] hover:text-[#1e2a22] border-[#1e2a22]/20'
              }`}
            >
              Preset {idx + 1}: {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Split Interactive Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left SVG Chart Viewport */}
        <div className="lg:col-span-7 bg-white border border-[#1e2a22] p-6 space-y-4 shadow-md">
          <div className="flex items-center justify-between border-b border-[#1e2a22]/15 pb-3">
            <span className="font-mono text-xs font-bold text-[#1e2a22] uppercase">
              {chartTitle}
            </span>
            <span className="font-mono text-[10px] text-[#c2872e] font-bold uppercase">
              RENDER MODE: SVG
            </span>
          </div>

          <div
            onClick={() => logEvent('onClick', 'Chart canvas clicked')}
            onMouseEnter={() => logEvent('onMouseEnter', 'Mouse entered SVG viewport')}
            onMouseLeave={() => logEvent('onMouseLeave', 'Mouse left SVG viewport')}
            className={`p-6 min-h-[320px] flex items-center justify-center transition-colors ${
              theme === 'dark'
                ? 'bg-[#111813] border border-[#2d3a30]'
                : 'bg-[#f7faf5] border border-[#1e2a22]/20'
            }`}
          >
            <Chart
              type={config.slug}
              data={currentData}
              x={xKey}
              y={yKey}
              orientation={orientation}
              color={color}
              title={chartTitle}
              showGrid={showGrid}
              theme={theme}
              bins={bins}
            />
          </div>

          {/* Interactive Event Stream Logger Box */}
          <div className="p-3 bg-[#111813] border border-[#1e2a22] font-mono text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[#c2872e] font-bold border-b border-[#2d3a30] pb-1">
              <span>Interactive Events Logger</span>
              <button
                onClick={() => setEventLogs([])}
                className="text-[10px] text-[#909c8d] hover:text-white underline uppercase"
              >
                Clear Stream
              </button>
            </div>
            <div className="h-20 overflow-y-auto space-y-1 text-[11px] text-[#a4c995]">
              {eventLogs.length === 0 ? (
                <div className="text-[#6e756a] italic">
                  Hover or click the chart above to trigger component mouse events...
                </div>
              ) : (
                eventLogs.map((log, idx) => <div key={idx}>{log}</div>)
              )}
            </div>
          </div>
        </div>

        {/* Right Code / Spec / Table Inspector */}
        <div className="lg:col-span-5 bg-[#111813] border border-[#1e2a22] shadow-md">
          <div className="flex items-center bg-[#1b251e] border-b border-[#2d3a30] px-3 pt-2">
            <button
              onClick={() => setActiveInspectorTab('jsx')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                activeInspectorTab === 'jsx'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              React JSX
            </button>
            <button
              onClick={() => setActiveInspectorTab('spec')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                activeInspectorTab === 'spec'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              ChartSpec JSON
            </button>
            <button
              onClick={() => setActiveInspectorTab('profile')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                activeInspectorTab === 'profile'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              Profiles
            </button>
            <button
              onClick={() => setActiveInspectorTab('table')}
              className={`px-3 py-1.5 font-mono text-xs font-medium transition-colors ${
                activeInspectorTab === 'table'
                  ? 'bg-[#111813] text-[#c2872e] border-t border-x border-[#2d3a30]'
                  : 'text-[#909c8d] hover:text-white'
              }`}
            >
              A11y Table
            </button>
          </div>

          <div className="p-4 overflow-x-auto">
            {activeInspectorTab === 'jsx' && (
              <CodeBlock
                code={reactCodeSnippet}
                language="typescript"
                title="Dynamic React Component Code"
              />
            )}

            {activeInspectorTab === 'spec' && (
              <CodeBlock
                code={JSON.stringify(inferredSpec, null, 2)}
                language="json"
                title="Resolved ChartSpec JSON"
              />
            )}

            {activeInspectorTab === 'profile' && (
              <div className="space-y-3 font-mono text-xs text-[#e0e3de]">
                <div className="text-[#c2872e] font-bold uppercase">Field Profile Metadata</div>
                {profiles.map((p) => (
                  <div key={p.field} className="p-2 bg-[#18221b] border border-[#2d3a30] flex justify-between">
                    <span className="font-bold text-white">{p.field}</span>
                    <span className="text-[#a4c995]">
                      type: {p.type} (distinct: {p.distinctCount})
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeInspectorTab === 'table' && (
              <div className="space-y-3 font-mono text-xs text-[#e0e3de]">
                <div className="text-[#c2872e] font-bold uppercase">Accessible Data Table Fallback</div>
                <table className="w-full text-left border-collapse border border-[#2d3a30]">
                  <thead>
                    <tr className="bg-[#18221b] text-[#c2872e]">
                      {Object.keys(currentData[0] || {}).map((k) => (
                        <th key={k} className="p-2 border border-[#2d3a30] uppercase">
                          {k}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row, i) => (
                      <tr key={i} className="hover:bg-[#18221b]/50 border-b border-[#2d3a30]">
                        {Object.values(row).map((v, j) => (
                          <td key={j} className="p-2 border border-[#2d3a30] text-[#a4c995]">
                            {String(v)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Categorized Props Reference Table with Interactive Controls (Recharts Documentation Style) */}
      <div className="space-y-4 pt-6 border-t border-[#1e2a22]/20">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-2xl text-[#1e2a22] font-bold">
            Component Props Interactive Reference
          </h2>
          <span className="font-mono text-xs text-[#6e756a]">
            Modify any prop to update the chart live
          </span>
        </div>

        {/* Props Category Navigation Bar */}
        <div className="flex border-b border-[#1e2a22]">
          {(['general', 'style', 'events', 'animation'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActivePropsTab(tab)}
              className={`px-5 py-2.5 font-mono text-xs font-bold capitalize transition-all border-t border-x ${
                activePropsTab === tab
                  ? 'bg-[#1e2a22] text-[#ecefea] border-[#1e2a22]'
                  : 'bg-[#f7faf5] text-[#6e756a] hover:text-[#1e2a22] border-transparent'
              }`}
            >
              {tab === 'general' && 'General Props'}
              {tab === 'style' && 'Style & Theme'}
              {tab === 'events' && 'Events'}
              {tab === 'animation' && 'Animation'}
            </button>
          ))}
        </div>

        {/* Interactive Props Table Content */}
        <div className="bg-[#f7faf5] border border-[#1e2a22] overflow-hidden shadow-sm">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#1e2a22] bg-[#1e2a22] text-[#ecefea]">
                <th className="p-3 w-1/4">Name</th>
                <th className="p-3 w-1/2">Description</th>
                <th className="p-3 w-1/4">Interactive Control</th>
              </tr>
            </thead>
            <tbody>
              {/* Category: General */}
              {activePropsTab === 'general' && (
                <>
                  <PropControlRow
                    name="title"
                    type="string"
                    defaultVal={`"${config.presets[0].name}"`}
                    description="Headline title rendered at the top of the chart scene."
                  >
                    <TextControl
                      value={chartTitle}
                      onChange={(v) => {
                        setChartTitle(v);
                        logEvent('Prop Change', `title = "${v}"`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="x"
                    type="string"
                    defaultVal={`"${config.xDefault}"`}
                    description="Field key in data objects corresponding to the X axis domain."
                  >
                    <SelectControl
                      value={xKey}
                      options={fieldOptions}
                      onChange={(v) => {
                        setXKey(v);
                        logEvent('Prop Change', `x = "${v}"`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="y"
                    type="string"
                    defaultVal={`"${config.yDefault}"`}
                    description="Field key in data objects corresponding to the Y axis metric value."
                  >
                    <SelectControl
                      value={yKey}
                      options={fieldOptions}
                      onChange={(v) => {
                        setYKey(v);
                        logEvent('Prop Change', `y = "${v}"`);
                      }}
                    />
                  </PropControlRow>

                  {config.slug === 'bar' && (
                    <PropControlRow
                      name="orientation"
                      type="'vertical' | 'horizontal'"
                      defaultVal="'vertical'"
                      description="Bar chart layout orientation direction."
                    >
                      <SelectControl
                        value={orientation}
                        options={[
                          { label: 'vertical', value: 'vertical' },
                          { label: 'horizontal', value: 'horizontal' },
                        ]}
                        onChange={(v) => {
                          setOrientation(v as 'vertical' | 'horizontal');
                          logEvent('Prop Change', `orientation = "${v}"`);
                        }}
                      />
                    </PropControlRow>
                  )}

                  {config.slug === 'histogram' && (
                    <PropControlRow
                      name="bins"
                      type="number"
                      defaultVal="5"
                      description="Number of continuous value frequency interval bins."
                    >
                      <NumberControl
                        value={bins}
                        min={2}
                        max={15}
                        onChange={(v) => {
                          setBins(v);
                          logEvent('Prop Change', `bins = ${v}`);
                        }}
                      />
                    </PropControlRow>
                  )}
                </>
              )}

              {/* Category: Style */}
              {activePropsTab === 'style' && (
                <>
                  <PropControlRow
                    name="color"
                    type="string"
                    defaultVal="'#c2872e'"
                    description="Primary stroke or accent color token applied to chart marks."
                  >
                    <ColorControl
                      value={color}
                      onChange={(v) => {
                        setColor(v);
                        logEvent('Prop Change', `color = "${v}"`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="strokeWidth"
                    type="number"
                    defaultVal="2"
                    description="Stroke width in pixels for line paths and container borders."
                  >
                    <NumberControl
                      value={strokeWidth}
                      min={1}
                      max={10}
                      onChange={(v) => {
                        setStrokeWidth(v);
                        logEvent('Prop Change', `strokeWidth = ${v}`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="showGrid"
                    type="boolean"
                    defaultVal="true"
                    description="Toggles cartographic coordinate grid lines."
                  >
                    <ToggleControl
                      value={showGrid}
                      onChange={(v) => {
                        setShowGrid(v);
                        logEvent('Prop Change', `showGrid = ${v}`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="theme"
                    type="'light' | 'dark'"
                    defaultVal="'light'"
                    description="Color theme mode for viewport presentation."
                  >
                    <SelectControl
                      value={theme}
                      options={[
                        { label: 'light', value: 'light' },
                        { label: 'dark', value: 'dark' },
                      ]}
                      onChange={(v) => {
                        setTheme(v as 'light' | 'dark');
                        logEvent('Prop Change', `theme = "${v}"`);
                      }}
                    />
                  </PropControlRow>
                </>
              )}

              {/* Category: Events */}
              {activePropsTab === 'events' && (
                <>
                  <PropControlRow
                    name="onClick"
                    type="(event: MouseEvent) => void"
                    description="Customized event handler triggered on click on chart elements."
                  >
                    <button
                      onClick={() => logEvent('Test Event Trigger', 'onClick user button click')}
                      className="px-3 py-1 bg-[#1e2a22] text-[#ecefea] hover:bg-[#c2872e] hover:text-[#1e2a22] transition-colors"
                    >
                      Trigger onClick
                    </button>
                  </PropControlRow>

                  <PropControlRow
                    name="onMouseEnter"
                    type="(event: MouseEvent) => void"
                    description="Customized event handler triggered when mouse enters chart element."
                  >
                    <button
                      onClick={() => logEvent('Test Event Trigger', 'onMouseEnter triggered')}
                      className="px-3 py-1 bg-[#1e2a22] text-[#ecefea] hover:bg-[#c2872e] hover:text-[#1e2a22] transition-colors"
                    >
                      Trigger onMouseEnter
                    </button>
                  </PropControlRow>

                  <PropControlRow
                    name="onMouseLeave"
                    type="(event: MouseEvent) => void"
                    description="Customized event handler triggered when mouse leaves chart element."
                  >
                    <button
                      onClick={() => logEvent('Test Event Trigger', 'onMouseLeave triggered')}
                      className="px-3 py-1 bg-[#1e2a22] text-[#ecefea] hover:bg-[#c2872e] hover:text-[#1e2a22] transition-colors"
                    >
                      Trigger onMouseLeave
                    </button>
                  </PropControlRow>
                </>
              )}

              {/* Category: Animation */}
              {activePropsTab === 'animation' && (
                <>
                  <PropControlRow
                    name="isAnimationActive"
                    type="boolean"
                    defaultVal="true"
                    description="If set false, entrance animations for chart marks are disabled."
                  >
                    <ToggleControl
                      value={isAnimationActive}
                      onChange={(v) => {
                        setIsAnimationActive(v);
                        logEvent('Prop Change', `isAnimationActive = ${v}`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="animationDuration"
                    type="number (ms)"
                    defaultVal="400"
                    description="Specifies duration of chart element entrance animation in milliseconds."
                  >
                    <NumberControl
                      value={animationDuration}
                      min={100}
                      max={2000}
                      step={50}
                      onChange={(v) => {
                        setAnimationDuration(v);
                        logEvent('Prop Change', `animationDuration = ${v}ms`);
                      }}
                    />
                  </PropControlRow>

                  <PropControlRow
                    name="animationEasing"
                    type="string"
                    defaultVal="'linear'"
                    description="Easing interpolation curve function for mark transitions."
                  >
                    <SelectControl
                      value={animationEasing}
                      options={[
                        { label: 'linear', value: 'linear' },
                        { label: 'ease-in', value: 'ease-in' },
                        { label: 'ease-out', value: 'ease-out' },
                        { label: 'ease-in-out', value: 'ease-in-out' },
                      ]}
                      onChange={(v) => {
                        setAnimationEasing(v);
                        logEvent('Prop Change', `animationEasing = "${v}"`);
                      }}
                    />
                  </PropControlRow>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
