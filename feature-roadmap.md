# Feature Roadmap — Becoming a Full Modern Chart Library

**Purpose:** capture *everything* a best-in-class chart library (ApexCharts, Highcharts, Tremor, Recharts, TradingView, Nivo) offers, and place each feature in the correct phase — without reopening or diluting the MVP.

**Rule for this document:** MVP scope in `requirements.md` is locked. Nothing below changes it. Anything not explicitly listed as "MVP" or "do now" stays exactly where the roadmap already put it, or gets a new home in V3.

---

## 0. What you can do *right now*, inside current scope

This is the fix for "I don't like the UI" — and it doesn't require adding a single new chart type or touching `@core`.

- **Reorganize the gallery/docs nav by use-case category** instead of a flat list: *Dashboard & Business*, *Trading & Financial*, *Statistical*, *Comparison & Ranking*, *Composition & Flow* — even though only 5–6 chart types exist today, group them under these headers now so the structure is already category-shaped when V1 adds more.
- **Give each category its own landing view** with one hero chart and real sample data, the way ApexCharts/Highcharts demo sites work — this is a navigation/IA change, not a feature change.
- **Composed template examples** using only existing chart types — e.g. a "SaaS Dashboard" template combining KPI+Sparkline+Bar (all already built). Templates are compositions of what you have, not new primitives.
- **Finish the stubs that already exist** (Candlestick, Funnel, Donut layout strategies are already stubbed in `packages/core/src/layout/strategies/`) — this was *always* implicitly MVP-adjacent since the stub exists; call it out explicitly as "MVP polish" rather than new scope, since no new package or renderer is required.

None of this requires a scope conversation. Ship it first — it's most of what's making the product feel unfinished.

---

## 1. Full Feature Audit (what "modern chart library" actually means)

### A. Chart catalog, by use case
- Dashboard/Business: KPI+Sparkline, Bar/Stacked Bar, Funnel, Donut, Cohort/Retention heatmap, Waterfall
- Trading/Financial: Candlestick, OHLC, Volume overlay, Moving Average overlay, Range Area, Crosshair cursor
- Statistical: Histogram, Box Plot, Violin Plot, Density/KDE, Error bars
- Comparison/Ranking: Lollipop, Dumbbell, Bump/Slope, Pareto
- Composition/Flow: Sankey, Treemap, Sunburst, Mekko
- Geographic: Choropleth, Point/Bubble map
- Network: Force-directed graph, Node-link, Dendrogram
- Specialized: Radar, Gauge, Parallel Coordinates, Streamgraph

### B. Theming & design system
- Light/dark mode, CSS-variable token system (already scoped)
- Prebuilt palette presets (categorical, sequential, diverging, colorblind-safe)
- Per-category visual treatment (e.g. Trading gets crosshair/dense-grid conventions distinct from Dashboard)
- Brand/theme customizer UI (already scoped, screen 2.8 in design brief)

### C. Interactivity
- Tooltip, legend toggle (show/hide series) — table stakes, not yet in requirements.md
- Zoom/pan (essential for Trading and dense time series)
- Brush/range selection
- Crosshair cursor (Trading-specific)
- Cross-filtering / linked views across charts on a dashboard
- Drill-down (aggregate → underlying records)

### D. Data handling & performance
- Large-dataset rendering strategy (virtualization/aggregation)
- Streaming/incremental updates (live-updating trading charts, real-time dashboards)
- Canvas renderer (dense/high-frequency charts)
- WebGL renderer (very large scatter/graph datasets)
- Worker-based transforms for expensive aggregation

### E. Export & sharing
- PNG/SVG/PDF export of a rendered chart
- Copy-as-image, print stylesheet
- Embeddable chart (iframe or web component)

### F. Accessibility
- Keyboard navigation between data points (already scoped for MVP, basic level)
- Screen-reader data-table fallback (already scoped for MVP)
- Colorblind-safe palette defaults (currently missing from requirements.md — should be added)

### G. Framework support
- React (MVP)
- Vue, Svelte, Solid, vanilla JS adapters

### H. AI layer
- Natural-language chart creation/editing (`intent=`, conversational editor — already scoped)
- Agent/MCP tool surface (already scoped)
- Explain-the-chart / anomaly narration (already scoped)

### I. Developer experience
- Interactive playground (already scoped, screen 2.3/4.3 in design brief)
- Full docs site with live examples (already scoped)
- TypeScript types generated from ChartSpec schema
- CLI/codegen: `npx vizora add candlestick` style scaffolding
- Storybook-style isolated component explorer

### J. Ecosystem
- Plugin system for custom chart types
- Community/shared theme registry
- Versioned ChartSpec migrations tooling

---

## 2. Phase Mapping — nothing here changes MVP

### MVP — *unchanged, still exactly what's in `requirements.md`*
Line, Bar, Scatter, Histogram, KPI+Sparkline. SVG only. React only. Heuristic AutoChart. No AI. This document doesn't touch it.

**Do now, inside MVP polish (see §0 above):** category-based gallery/nav restructuring, finish Candlestick/Funnel/Donut stubs, composed template examples.

### V1 — Intelligence + AI layer *(as already planned in roadmap.md)*, plus:
- **Catalog:** Area, Stacked Bar, Donut, Funnel, Waterfall, Candlestick, Box Plot, Cohort/Retention, Calendar Heatmap (~14 total — same number roadmap.md already targeted, just explicitly organized by category now)
- **Interactivity (new addition to V1):** tooltip polish, legend toggle, basic zoom/pan, crosshair cursor for Candlestick — these are cheap relative to the AI work already planned for V1 and belong here rather than waiting for V2
- **Accessibility (new addition to V1):** colorblind-safe palette defaults — should have been in MVP acceptance criteria in spirit; formalize it here
- Full weighted chart-recommendation engine (already planned)
- AI intent parsing + ChartSpec editing (already planned)

### V2 — Agents, Scale, Framework Expansion *(as already planned)*, plus:
- **Catalog, phase 2:** demand-driven from the remaining list — Sankey, Treemap, Radar, Gauge, Sunburst, Geographic charts (already flagged as "based on actual customer demand" in roadmap.md — no change)
- **Data handling:** Canvas + WebGL renderers, streaming/incremental updates, worker-based transforms (already planned)
- **Export:** PNG/SVG/PDF export, embeddable chart — new addition, natural fit once Canvas renderer exists
- **Frameworks:** Vue/Svelte adapters (already planned)
- Agent/MCP tool surface (already planned)

### V3 — New phase, catches everything genuinely "later"
This didn't exist in the original roadmap because the catalog audit above surfaced more than V1/V2 can reasonably absorb without diluting them. Adding V3 keeps V1/V2 honest rather than quietly overloading them.

- Network/graph chart family (Force-directed, Node-link, Dendrogram)
- Full plugin system for custom chart types
- Community theme registry
- CLI/codegen tooling (`npx vizora add ...`)
- Cross-filtering / linked views across multiple charts on one dashboard
- Drill-down from aggregate to underlying records
- ChartSpec migration/versioning tooling
- *(Still explicitly out of scope even at V3, per roadmap.md: hosted dashboard builder / BI backend — that remains a separate "platform" product, not this library.)*

---

## 3. What this means practically, right now

1. Fix the UI complaint via §0 — no scope change, ships fast, directly addresses "I want it structured like a real chart library."
2. Everything else in this document either confirms what roadmap.md already said (most of it) or adds a small number of clearly-labeled additions to V1 (interactivity basics, accessibility defaults) that are cheap enough not to threaten V1's real goal — proving the recommendation engine and AI layer.
3. V3 exists so "give me all the features" has an honest home instead of becoming scope creep inside V1/V2.

If you want, next step is picking one category (Trading, Dashboard, or Statistical) to actually build out first in V1 — that decision drives which 3–4 stubs get finished first.