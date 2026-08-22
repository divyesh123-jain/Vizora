<div align="center">

# 🧭 Vizora

**The Intelligent, Developer-First Data Visualization Engine**

*A framework-agnostic chart runtime + deterministic data profiling + automatic chart recommendation that compiles to a typed, validated `ChartSpec`.*

[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bundle Budget](https://img.shields.io/badge/Bundle-＜15KB%20gzipped-emerald.svg)](#bundle-budget)
[![Zero React Core](https://img.shields.io/badge/Core-Zero%20React%20Coupling-orange.svg)](#architecture)

</div>

---

## 🌟 Why Vizora?

Modern charting libraries often force developers to write hundreds of lines of imperative SVG boilerplate or mount heavy DOM runtimes. **Vizora** takes a cartographic, contract-driven approach:

1. **`ChartSpec` is the Single Contract**: Everything — handcrafted JSX, auto-profiling heuristics, or AI agents — compiles to a JSON-serializable, Zod-validated `ChartSpec`.
2. **Framework-Agnostic Core**: `@vizora/core` calculates scales, projections, layout, and scene graphs with **zero DOM or React dependency**.
3. **Headless Resolution**: Spec $\rightarrow$ Scene Graph resolves synchronously without mounting a DOM element.
4. **Accessible by Default**: Every visualization emits a structured, semantic HTML ledger table fallback for screen readers.
5. **Instant Heuristics (`<AutoChart />`)**: Give Vizora raw JSON or CSV, and it infers the optimal chart bearing automatically.

---

## 📦 Monorepo Packages

| Package | Version | Description |
| :--- | :--- | :--- |
| **`@vizora/core`** | `0.1.1` | `ChartSpec` schema, scales (band, linear, time), formatters, and scene graph strategies. |
| **`@vizora/react`** | `0.1.1` | React components (`<Chart />`, `<AutoChart />`, `ChartContainer`, `SVGContainer`). |
| **`@vizora/render-svg`** | `0.1.1` | Deterministic SVG renderer with accessible table ledger fallbacks. |
| **`@vizora/intelligence`** | `0.1.1` | Deterministic data profiling and heuristic chart recommendation engine. |
| **`apps/web`** | `0.1.1` | Next.js documentation portal, interactive studio playground, builder, and template gallery. |

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install @vizora/react @vizora/core
```

### 2. Basic Chart Usage

```tsx
import React from 'react';
import { Chart } from '@vizora/react';

const revenueData = [
  { month: '2026-01-01', revenue: 42000 },
  { month: '2026-02-01', revenue: 58000 },
  { month: '2026-03-01', revenue: 84000 },
  { month: '2026-04-01', revenue: 110000 },
  { month: '2026-05-01', revenue: 145000 },
];

export function RevenueDashboard() {
  return (
    <Chart
      type="line"
      data={revenueData}
      x="month"
      y="revenue"
      title="Monthly Recurring Revenue"
      area={true}
      theme="emerald"
    />
  );
}
```

### 3. Zero-Config Inference (`<AutoChart />`)

```tsx
import React from 'react';
import { AutoChart } from '@vizora/react';

const rawDataset = [
  { region: 'North America', sales: 18400 },
  { region: 'Europe', sales: 14200 },
  { region: 'Asia Pacific', sales: 22100 },
];

// Automatically detects 1 Categorical + 1 Quantitative field and renders a Bar chart
export function SmartAnalytics() {
  return <AutoChart data={rawDataset} title="Regional Sales" />;
}
```

---

## 📊 Supported Chart Types

Vizora provides 9 core visualization primitives organized into 5 use-case categories:

1. **Dashboard & Business**:
   - `kpi-sparkline`: Headline metric display with embedded micro-trend sparklines.
   - `funnel`: Progressive stage-by-stage drop-off tracking with retention percentages.
   - `donut` / `pie`: Radial proportional slice distribution with center metric cutouts.
2. **Trading & Financial**:
   - `candlestick`: OHLC trading sessions with green bullish and red bearish candle bodies & wicks.
3. **Statistical**:
   - `histogram`: Auto-binning density distribution for continuous numerical fields.
   - `scatter`: Bivariate Cartesian correlation and clustering.
4. **Comparison & Ranking**:
   - `bar`: Categorical comparisons supporting both vertical columns and horizontal rankings.
5. **Composition & Flow**:
   - `line`: Continuous time-series and sequential quantitative trends.
   - `area`: Cumulative volume accumulation with linear SVG gradient fills.

---

## 📜 The `ChartSpec` Contract

Every chart rendered in Vizora resolves to a JSON-serializable `ChartSpec`:

```json
{
  "version": "0.1.0",
  "type": "bar",
  "title": "Quarterly Revenue",
  "data": [
    { "quarter": "Q1", "revenue": 45000 },
    { "quarter": "Q2", "revenue": 58000 }
  ],
  "encoding": {
    "x": { "field": "quarter", "type": "categorical" },
    "y": { "field": "revenue", "type": "quantitative" }
  },
  "config": {
    "showGrid": true,
    "theme": "light"
  }
}
```

---

## 🛠️ Monorepo Development

```bash
# Clone the repository
git clone https://github.com/divyesh123-jain/Vizora.git
cd Vizora

# Install dependencies
npm install

# Start local Next.js docs & studio playground
npm run dev

# Run unit tests across all workspaces
npm test

# Build all packages
npm run build

# Audit package bundle sizes
npm run size
```

---

## 📄 License

MIT © [Vizora Contributors](https://github.com/divyesh123-jain/Vizora)

