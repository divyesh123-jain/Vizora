# Requirements — Intelligent Visualization Engine

**Phase:** MVP
**Status:** Draft v0.1
**Related docs:** `AGENTS.md`, `CLAUDE.md`, `docs/vision.md`, `docs/roadmap.md`

This document defines what must be true for the MVP to be considered complete. It is intentionally scoped tighter than the full product vision — see `docs/roadmap.md` for what's deferred to V1/V2.

---

## 1. Purpose

Ship the smallest working slice of the visualization engine that proves the core architectural bet: a typed, deterministic `ChartSpec` is a good contract between developers, data, and (eventually) AI agents — without requiring an AI layer to be useful on day one.

---

## 2. Functional Requirements

### 2.1 Chart types (MVP set — exactly these 5, no more)

| ID | Chart | Requirement |
|---|---|---|
| FR-1 | Line | Render one or more series against a temporal or ordinal x-axis |
| FR-2 | Bar / Horizontal Bar | Render categorical comparisons; support both orientations |
| FR-3 | Scatter | Render two quantitative fields as points; optional color/size encoding |
| FR-4 | Histogram | Bin a single quantitative field and render frequency counts |
| FR-5 | KPI + Sparkline | Render a single metric value with a small inline trend line |

Each chart type MUST:
- Accept raw tabular data (array of objects) as input
- Accept an explicit encoding (`x`, `y`, `color`, etc.) via the `<Chart />` component
- Produce a valid `ChartSpec` internally before rendering — no chart may render by going straight from data to DOM
- Render identically given the same `ChartSpec` (determinism — no hidden randomness in layout)
- Provide an accessible fallback (data table or text summary) for screen readers

### 2.2 ChartSpec

- FR-6: `ChartSpec` MUST be JSON-serializable.
- FR-7: `ChartSpec` MUST be runtime-validated (e.g. via a schema library) before rendering — both hand-written and generated specs go through the same validator.
- FR-8: An invalid `ChartSpec` MUST fail with a clear, actionable error — never render silently with wrong/missing data.
- FR-9: `ChartSpec` MUST be resolvable headlessly (spec → scene graph) without mounting to a DOM, to support future testing/validation tooling.

### 2.3 APIs

- FR-10: `<AutoChart data={data} />` MUST pick a chart type using simple heuristics only:
  - One temporal field + one quantitative field → Line
  - One categorical field + one quantitative field → Bar
  - Two quantitative fields → Scatter
  - One quantitative field, no categorical/temporal → Histogram
  - This is explicitly **not** the full weighted scoring engine described in the vision doc — that's V1 scope.
- FR-11: `<Chart data={data} x="field" y="field" />` MUST support explicit encoding as an escape hatch when AutoChart's heuristic guesses wrong.
- FR-12: Both APIs MUST work with zero configuration beyond passing data — no required theme, no required API key, no network call.

### 2.4 Formatting

- FR-13: Numbers, dates, currency, and percentages MUST be automatically formatted using a shared formatting module — not ad hoc per chart type.

---

## 3. Non-Functional Requirements

| ID | Requirement | Target |
|---|---|---|
| NFR-1 | Bundle size | Core + one chart type ≤ 15kb gzipped |
| NFR-2 | AI dependency | Zero — no chart in MVP scope may require an LLM, API key, or network request to render |
| NFR-3 | SSR compatibility | All 5 chart types must render correctly server-side (no `window`/`document` assumptions in `@core`) |
| NFR-4 | Framework coupling | `@core` must have zero runtime dependency on React |
| NFR-5 | Accessibility | Keyboard-navigable focus states; color-independent encodings (not color alone) for categorical distinctions |
| NFR-6 | Determinism | Same `ChartSpec` + same viewport → same rendered output, byte-for-byte reproducible in tests |
| NFR-7 | AutoChart accuracy | ≥80% "reasonable choice" rate against a benchmark set of ~30 varied sample datasets (human-graded) |

---

## 4. Explicit Non-Requirements (MVP)

These are deliberately out of scope. Building any of these prematurely is a scope-creep risk flagged in `docs/roadmap.md`.

- NR-1: No AI/LLM layer, `intent=` prop, or natural-language chart editing
- NR-2: No agent/MCP tool surface (`create_chart`, `explain_chart`, etc.)
- NR-3: No Canvas or WebGL renderer — SVG only
- NR-4: No Vue, Svelte, Solid, or vanilla-JS adapters — React only
- NR-5: No full weighted chart-recommendation scoring engine (data types × cardinality × dataset size × misleading-encoding checks) — heuristics only
- NR-6: No chart types beyond the 5 listed in §2.1 (Area, Donut, Heatmap, Funnel, Waterfall, etc. are all V1)
- NR-7: No dashboard editor, hosted product, or data connectors
- NR-8: No streaming/incremental data updates

---

## 5. Acceptance Criteria (Definition of Done for MVP)

The MVP is complete when all of the following are true:

1. A developer can go from a raw JSON array to a rendered chart in **≤5 lines of code**, for each of the 5 chart types.
2. A `ChartSpec` can be hand-authored, serialized to JSON, deserialized, and re-rendered to produce identical output (proves determinism, satisfies FR-6/FR-9/NFR-6).
3. `<AutoChart />` meets the ≥80% accuracy target (NFR-7) against the benchmark dataset.
4. `<Chart />` explicit-encoding API works for all 5 chart types without AutoChart involvement.
5. All 5 chart types pass an SSR smoke test (render server-side without throwing).
6. Bundle size budget (NFR-1) is verified in CI, not just checked manually.
7. Every chart type has an accessible data-table fallback that a screen reader can navigate.
8. Zero network calls or AI provider dependency exist anywhere in the default rendering path.
9. `npm run lint --workspaces && npm test --workspaces` pass with no failing tests.

---

## 6. Open Questions

*(Track unresolved decisions here as they come up — keep this section current rather than letting decisions live only in chat/PR discussions.)*

- Final product name (currently placeholder "Vizora")
- Schema validation library choice for `ChartSpec` (e.g. zod vs. custom)
- Exact benchmark dataset composition for AutoChart accuracy testing (NFR-7)
- CI provider and where bundle-size checks will run

---

## 7. Traceability

Every requirement in this document maps to a phase in `docs/roadmap.md`:

- **FR-1 to FR-13, NFR-1 to NFR-7** → MVP phase
- Anything under §4 (Explicit Non-Requirements) → V1 or V2, see roadmap for exact phase

When a requirement's scope changes, update both this file and `docs/roadmap.md` together so they don't drift out of sync.