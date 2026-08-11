# Vizora Roadmap: MVP → V1 → V2

## Scope Phasing Overview

| Feature Category | MVP (Current Phase) | V1 Phase | V2 Phase |
|---|---|---|---|
| **Supported Chart Types** | Line, Bar (Vert/Horiz), Scatter, Histogram, KPI+Sparkline | Area, Donut, Heatmap, Waterfall, Funnel | Custom Composite Marks, Custom Geoms |
| **Renderers** | SVG (`@vizora/render-svg`) | SVG, Canvas (`@vizora/render-canvas`) | SVG, Canvas, WebGL (`@vizora/render-webgl`) |
| **Framework Adapters** | React (`@vizora/react`) | React | React, Vue, Svelte, Solid |
| **Recommendation Engine** | Simple Heuristics (`@vizora/intelligence`) | Weighted Scoring Engine (Cardinality, Distribution, Aesthetics) | ML-driven context-aware recommendation |
| **AI / Agent Layer** | Explicitly OUT OF SCOPE | Typed ChartSpec patch editor (`@vizora/ai`) | Natural language conversational chart agent & MCP tools |
| **SSR & Headless Support** | Node/Next.js SSR safe & Headless SceneGraph resolution | Headless PNG/PDF export service | Streaming data layout recalculation |

---

## MVP Milestones (Definition of Done)

- [x] Monorepo npm workspaces structure created (`core`, `render-svg`, `intelligence`, `react`, `apps/web`).
- [ ] Schema validation for `ChartSpec` via Zod (`@vizora/core`).
- [ ] Scale mappings (linear, time, band) & shared formatting module.
- [ ] Headless layout engine resolving `ChartSpec` to `SceneGraph`.
- [ ] Pure SVG renderer with accessibility table fallback (`@vizora/render-svg`).
- [ ] Field type inference & simple heuristic recommender (`@vizora/intelligence`).
- [ ] React components `<Chart />` and `<AutoChart />` (`@vizora/react`).
- [ ] Vitest workspace test suite covering spec validation, scene graph, SVG output, and recommendation accuracy.

---

## Key Risks & Scope Scaffolding Rules

> [!WARNING]
> **Scope Creep Prevention:**
> Do NOT create package directories for `render-canvas`, `render-webgl`, `vue`, `svelte`, or `ai` during the MVP phase. Any addition of non-MVP chart types or AI dependencies must be flagged for human review.
