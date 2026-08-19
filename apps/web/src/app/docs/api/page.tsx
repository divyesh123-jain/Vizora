'use client';

import React from 'react';
import Link from 'next/link';

export default function ApiReferencePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
            API REFERENCE
          </span>
          <span className="font-mono text-xs text-[#60685c]">
            Full Package Exports
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Package Exports & Types
        </h1>
        <p className="font-body-doc text-sm text-[#404641] max-w-3xl leading-relaxed">
          Detailed API specifications across all four modular packages in the Vizora monorepo.
        </p>
      </div>

      {/* Package 1: @vizora/react */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            1. @vizora/react
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#c2872e]/10 px-2 py-0.2 rounded-[2px] border border-[#c2872e]/20 font-bold">
            React Adapter
          </span>
        </div>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3">Export</th>
                <th className="p-3">Type Signature</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3 font-bold text-[#18241b]">&lt;Chart /&gt;</td>
                <td className="p-3 text-[#c2872e]">React.FC&lt;ChartProps&gt;</td>
                <td className="p-3 text-[11px]">Explicit chart component accepting data, type, x, y, theme, orientation, and color props.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">&lt;AutoChart /&gt;</td>
                <td className="p-3 text-[#c2872e]">React.FC&lt;AutoChartProps&gt;</td>
                <td className="p-3 text-[11px]">Zero-config component that profiles raw data and automatically renders the optimal chart.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">useChartSpec()</td>
                <td className="p-3 text-[#c2872e]">(props: ChartProps) =&gt; ChartSpec</td>
                <td className="p-3 text-[11px]">Hook that resolves and validates incoming component props into a memoized ChartSpec contract.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Package 2: @vizora/core */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            2. @vizora/core
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#c2872e]/10 px-2 py-0.2 rounded-[2px] border border-[#c2872e]/20 font-bold">
            Core Engine (Zero React)
          </span>
        </div>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3">Export</th>
                <th className="p-3">Type Signature</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3 font-bold text-[#18241b]">validateChartSpec(spec)</td>
                <td className="p-3 text-[#c2872e]">(raw: unknown) =&gt; ChartSpec</td>
                <td className="p-3 text-[11px]">Validates an unknown JS object against the runtime Zod schema, throwing descriptive errors on failure.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">buildSceneGraph(spec, opts)</td>
                <td className="p-3 text-[#c2872e]">(spec: ChartSpec, opts: LayoutOptions) =&gt; SceneNode</td>
                <td className="p-3 text-[11px]">Headless layout strategy execution that computes coordinates and outputs an abstract scene graph tree.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">createScaleLinear(domain, range)</td>
                <td className="p-3 text-[#c2872e]">(domain: [number, number], range: [number, number]) =&gt; ScaleLinear</td>
                <td className="p-3 text-[11px]">Continuous quantitative linear coordinate mapping function with nice tick intervals.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">createScaleBand(domain, range, pad)</td>
                <td className="p-3 text-[#c2872e]">(domain: string[], range: [number, number], pad?: number) =&gt; ScaleBand</td>
                <td className="p-3 text-[11px]">Discrete categorical band coordinate mapping function with bandwidth calculation.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">createScaleTime(domain, range)</td>
                <td className="p-3 text-[#c2872e]">(domain: [Date, Date], range: [number, number]) =&gt; ScaleTime</td>
                <td className="p-3 text-[11px]">Temporal time-series coordinate mapping function with automated interval ticks.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">formatNumber(val, opts)</td>
                <td className="p-3 text-[#c2872e]">(value: number, opts?: FormatOpts) =&gt; string</td>
                <td className="p-3 text-[11px]">Shared numeric metric formatter with compact notation (12.5k, 1.4M) and locale currency formatting.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">formatDate(date, format)</td>
                <td className="p-3 text-[#c2872e]">(date: Date | string, format?: string) =&gt; string</td>
                <td className="p-3 text-[11px]">Shared date/time formatter with standard ISO and short date formatting.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Package 3: @vizora/render-svg */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            3. @vizora/render-svg
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#c2872e]/10 px-2 py-0.2 rounded-[2px] border border-[#c2872e]/20 font-bold">
            SVG Serializer & A11y
          </span>
        </div>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3">Export</th>
                <th className="p-3">Type Signature</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3 font-bold text-[#18241b]">renderSceneToSvgString(scene)</td>
                <td className="p-3 text-[#c2872e]">(scene: SceneNode) =&gt; string</td>
                <td className="p-3 text-[11px]">Serializes an abstract scene graph tree into a valid, standalone W3C SVG markup string.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">renderAccessibleTable(spec)</td>
                <td className="p-3 text-[#c2872e]">(spec: ChartSpec) =&gt; string</td>
                <td className="p-3 text-[11px]">Generates an accessible semantic HTML table fallback matching NFR-5 accessibility compliance.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Package 4: @vizora/intelligence */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[#18241b]/10 pb-2">
          <h2 className="font-headline-md text-xl text-[#18241b] font-bold">
            4. @vizora/intelligence
          </h2>
          <span className="font-mono text-xs text-[#c2872e] bg-[#c2872e]/10 px-2 py-0.2 rounded-[2px] border border-[#c2872e]/20 font-bold">
            Data Profiling
          </span>
        </div>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3">Export</th>
                <th className="p-3">Type Signature</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3 font-bold text-[#18241b]">profileField(data, field)</td>
                <td className="p-3 text-[#c2872e]">(data: Record&lt;string, unknown&gt;[], field: string) =&gt; FieldProfile</td>
                <td className="p-3 text-[11px]">Infers field type (quantitative, temporal, categorical) and calculates unique distinct count.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">recommendChartSpec(data)</td>
                <td className="p-3 text-[#c2872e]">(data: Record&lt;string, unknown&gt;[]) =&gt; ChartSpec</td>
                <td className="p-3 text-[11px]">Scans all fields in data and returns a fully initialized, validated ChartSpec with optimal type.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">scoreChartRecommendations(data)</td>
                <td className="p-3 text-[#c2872e]">(data: Record&lt;string, unknown&gt;[]) =&gt; ChartRecommendationScore[]</td>
                <td className="p-3 text-[11px]">Calculates ranked scores (0–100) and rationale for every candidate chart type.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation */}
      <div className="p-5 bg-white border border-[#18241b]/15 rounded-[2px] flex items-center justify-between">
        <div>
          <h3 className="font-headline-md text-sm font-bold text-[#18241b]">
            Start Building with Vizora
          </h3>
          <p className="font-body-ui text-xs text-[#60685c]">
            Follow the complete step-by-step developer tutorial.
          </p>
        </div>
        <Link
          href="/docs/build-with-vizora"
          className="px-3.5 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold rounded-[2px] transition-colors"
        >
          Build with Vizora Guide &rarr;
        </Link>
      </div>
    </div>
  );
}
