'use client';

import React from 'react';
import Link from 'next/link';
import { CodeBlock } from '../../../components/CodeBlock';
import { PalettePicker } from '../../../components/PalettePicker';

export default function ThemingGuidePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-[#18241b]/10 pb-6 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c2872e]">
            DESIGN SYSTEM
          </span>
          <span className="font-mono text-xs text-[#60685c]">
            Cartography of Data
          </span>
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Theming & Color Tokens
        </h1>
        <p className="font-body-doc text-sm text-[#404641] max-w-3xl leading-relaxed">
          Vizora uses a 6-token cartographic color system inspired by vintage geological maps, marine navigational charts, and physical instruments.
        </p>
      </div>

      {/* Cartographic Tokens Table */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Core Semantic Color Tokens
        </h2>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] overflow-hidden">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="bg-[#18241b] text-white">
                <th className="p-3">Token Name</th>
                <th className="p-3">Swatch</th>
                <th className="p-3">Hex Value</th>
                <th className="p-3">Role & Semantic Function</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#18241b]/10 text-[#404641]">
              <tr>
                <td className="p-3 font-bold text-[#18241b]">field</td>
                <td className="p-3">
                  <span className="inline-block w-5 h-5 rounded-[2px] bg-[#f4f7f3] border border-[#18241b]/20" />
                </td>
                <td className="p-3">#f4f7f3</td>
                <td className="p-3 text-[11px]">Primary canvas background (warm off-white map ground).</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">contour</td>
                <td className="p-3">
                  <span className="inline-block w-5 h-5 rounded-[2px] bg-[#18241b]" />
                </td>
                <td className="p-3">#18241b</td>
                <td className="p-3 text-[11px]">High-contrast ink for headlines, primary borders, and prominent marks.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">datum</td>
                <td className="p-3">
                  <span className="inline-block w-5 h-5 rounded-[2px] bg-[#60685c]" />
                </td>
                <td className="p-3">#60685c</td>
                <td className="p-3 text-[11px]">Secondary coordinate text, axis tick labels, and subtle boundary rules.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">waypoint</td>
                <td className="p-3">
                  <span className="inline-block w-5 h-5 rounded-[2px] bg-[#c2872e]" />
                </td>
                <td className="p-3">#c2872e</td>
                <td className="p-3 text-[11px]">Signature navigation ochre — active tabs, needle tips, and key series.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">flare</td>
                <td className="p-3">
                  <span className="inline-block w-5 h-5 rounded-[2px] bg-[#d6502b]" />
                </td>
                <td className="p-3">#d6502b</td>
                <td className="p-3 text-[11px]">Warning terracotta and keyword emphasis accents.</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[#18241b]">depth</td>
                <td className="p-3">
                  <span className="inline-block w-5 h-5 rounded-[2px] bg-[#0f1611]" />
                </td>
                <td className="p-3">#0f1611</td>
                <td className="p-3 text-[11px]">Dark terminal ground for code blocks and dark-mode surfaces.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Preset Palettes */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Built-in Preset Themes
        </h2>

        <p className="font-body-ui text-xs text-[#404641]">
          Apply preset theme tokens directly via the <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">theme</code> prop on <code className="font-mono text-xs bg-[#18241b]/8 px-1 py-0.5 rounded-[2px]">&lt;Chart theme=&quot;zinc&quot; /&gt;</code>:
        </p>

        <div className="bg-white border border-[#18241b]/15 rounded-[2px] p-4">
          <PalettePicker selectedId="default" onSelect={() => {}} />
        </div>
      </section>

      {/* Applying Custom Themes in Code */}
      <section className="space-y-4">
        <h2 className="font-headline-md text-xl font-bold text-[#18241b]">
          Customizing Themes via Code
        </h2>

        <CodeBlock
          code={`import React from 'react';
import { Chart } from '@vizora/react';

export function CustomThemedChart() {
  return (
    <Chart
      type="bar"
      data={[
        { category: 'North', value: 450 },
        { category: 'South', value: 380 },
        { category: 'East', value: 520 },
      ]}
      x="category"
      y="value"
      // Apply preset theme
      theme="emerald"
      // Or pass direct custom color
      color="#c2872e"
      showGrid={true}
    />
  );
}`}
          language="typescript"
          title="ThemedChartExample.tsx"
        />
      </section>

      {/* Navigation */}
      <div className="p-5 bg-white border border-[#18241b]/15 rounded-[2px] flex items-center justify-between">
        <div>
          <h3 className="font-headline-md text-sm font-bold text-[#18241b]">
            Next: Complete API Reference
          </h3>
          <p className="font-body-ui text-xs text-[#60685c]">
            Inspect all exported symbols, functions, types, and hooks across packages.
          </p>
        </div>
        <Link
          href="/docs/api"
          className="px-3.5 py-1.5 bg-[#18241b] hover:bg-[#c2872e] text-white font-mono text-xs font-bold rounded-[2px] transition-colors"
        >
          API Reference &rarr;
        </Link>
      </div>
    </div>
  );
}
