# AGENTS.md

Instructions for any AI coding agent (Antigravity, Claude Code, Cursor, Codex, etc.) working in this repository.

## Project

**Working name:** Vizora *(placeholder — update once finalized)*
**What it is:** An intelligent, developer-first data-visualization engine. A framework-agnostic chart runtime + deterministic data profiling + automatic chart recommendation + an optional AI layer that edits a typed, validated `ChartSpec` — never raw JSX or DOM.

Full context lives in:
- `/docs/vision.md` — the original Product + Technical Vision doc
- `/docs/roadmap.md` — MVP → V1 → V2 → V3 scoping
- `/docs/requirements.md` — locked MVP functional/non-functional requirements and acceptance criteria
- `/docs/feature-roadmap.md` — the full modern-chart-library feature audit, mapped phase by phase (this is what defines what's "MVP polish" vs. genuine V1/V2/V3 scope expansion)
- `/docs/design-brief-v2.md` — the design direction ("cartography of data": Compass, Legend band, contour shading, flag pins) that the UI should follow

Read all of these before making architectural or UI decisions.

## Current phase: MVP (+ approved MVP polish)

We are building the smallest possible slice that proves `ChartSpec` is a good contract. Do not implement anything outside this list without explicit confirmation from a human:

**Core MVP scope (locked — see `docs/requirements.md`):**
- Chart types: Line, Bar/Horizontal Bar, Scatter, Histogram, KPI+Sparkline — nothing new beyond these five
- `@core` (ChartSpec schema, scales, transforms, layout) + `@render-svg` + `@react` only
- `<AutoChart data={data} />` using **simple heuristics only** (temporal field → line, categorical+quantitative → bar, two quantitative → scatter) — not a scoring engine
- `<Chart data={data} x="..." y="..." />` explicit-encoding API
- SVG rendering only. SSR-safe. Headless-resolvable (ChartSpec → scene graph without mounting DOM).

**Approved MVP polish — presentation/organization only, no new engine capability (see `docs/feature-roadmap.md` §0):**
- Finishing the existing layout-strategy stubs already present in `packages/core/src/layout/strategies/` — Candlestick, Funnel, Donut. This is polish, not new scope, because the stub files already exist; no new package or renderer is required.
- Reorganizing `apps/web` gallery/docs nav by use-case category (Dashboard & Business, Trading & Financial, Statistical, Comparison & Ranking, Composition & Flow) instead of a flat chart list — a navigation/IA change only.
- Composed template examples (e.g. a dashboard template combining KPI+Sparkline+Bar) built entirely from existing, already-shipped chart types.
- Applying the `docs/design-brief-v2.md` visual language (Compass dial, Legend band, contour shading, flag pins) to existing screens — `CompassDial` and related UI components already exist in `apps/web`; this is refinement of what's built, not new features.

**Explicitly out of scope until MVP ships and is reviewed:**
- Any AI/LLM layer, `intent=` prop, conversational editing, MCP/agent tools
- Canvas or WebGL renderers
- Vue/Svelte/Solid adapters
- The full weighted chart-recommendation scoring engine
- Any *new* chart type beyond the 5 MVP types + the 3 stubs already in the repo (Candlestick, Funnel, Donut)
- Interactivity beyond what's already built (zoom/pan, crosshair, cross-filtering, drill-down — all V1/V2 per `docs/feature-roadmap.md`)
- Dashboard editor, hosted product, data connectors

If a task seems to require touching something in the "out of scope" list, stop and flag it rather than expanding scope silently. When unsure whether something counts as "polish" or "new scope," check `docs/feature-roadmap.md` §0 first — it's the tiebreaker.

## Repo structure (monorepo, npm workspaces)

```
packages/
  core/                          # ChartSpec schema, scales, transforms, scene graph
    src/layout/strategies/       # Line, Bar, Scatter, Histogram, KPI, Area (MVP)
                                  # + Candlestick, Funnel, Donut (stubs — finish as polish, don't add more)
  render-svg/                    # SVG renderer (MVP default)
    src/accessibility/table.ts   # Accessible data-table fallback
  render-canvas/                 # (V2 — do not build yet)
  render-webgl/                  # (V2 — do not build yet)
  react/                         # <Chart />, <AutoChart />, ChartContainer, ChartTooltip,
                                  # ChartLegend, ResponsiveContainer, SVGContainer
  vue/                           # (V2 — do not build yet)
  svelte/                        # (V2 — do not build yet)
  intelligence/                  # Data profiling + heuristic recommender (MVP: simple only)
  ai/                            # (V1+ — do not build yet)
apps/
  web/                           # Next.js App Router — docs, playground, chart templates
                                  # UI: InteractivePropControls, PalettePicker, CompassDial,
                                  # VisualDataEditor, CodeBlock — reorganize by category as
                                  # MVP polish (see feature-roadmap.md §0), don't add new engine features here
docs/
  vision.md
  roadmap.md
  requirements.md
  feature-roadmap.md
  design-brief-v2.md
```

## Tech stack

- TypeScript, strict mode, no `any` without a `// TODO` justification comment
- npm workspaces for the monorepo
- Vitest for unit tests
- No runtime dependency on React inside `@core` — the core must stay framework-agnostic
- ChartSpec must be JSON-serializable and validated at runtime (e.g. zod) — every AI-generated or hand-written spec goes through the same validator

## Conventions

- **ChartSpec is the contract.** Any change to its shape is a breaking change — call it out explicitly and update the schema version.
- Every chart type implementation must include: encoding validation, a headless-render test (spec → scene graph, no DOM), and an accessible data-table fallback.
- Number/date/currency formatting goes through the shared formatting module — never format inline in a chart component.
- Bundle size budget: core + one chart type stays under 15kb gzipped. Flag any change that risks breaking this.
- Commit messages: conventional commits (`feat:`, `fix:`, `refactor:`, `docs:`, `test:`).

## Testing (already established — follow this pattern for new work)

- `@vizora/core`: `tests/scene.test.ts`, `tests/spec.test.ts` — scene graph generation and spec validation
- `@vizora/render-svg`: `tests/svg.test.ts` — SVG rendering correctness
- `@vizora/react`: `tests/Chart.test.tsx` — component wrappers
- `@vizora/intelligence`: `tests/recommender.test.ts` — recommendation heuristics
- Every chart type (including the Candlestick/Funnel/Donut stubs once finished) needs a headless-render test — spec → scene graph, no DOM mounted.
- `@core` tests must never import React or anything React-flavored — keep the framework-agnostic boundary real in tests, not just in production code.

## Commands

```bash
npm install
npm run build --workspaces        # builds all packages
npm test --workspaces             # runs vitest across the monorepo
npm run lint --workspaces         # eslint + typecheck
npm test --workspace=@core        # scope to one package
```

*(Update these once the actual build tooling is chosen — this is a placeholder until package.json scripts exist.)*

## Before opening a PR

1. `npm run lint --workspaces && npm test --workspaces` pass locally.
2. Any new/changed chart type has a headless-render test.
3. No new dependency added to `@core` without noting why in the PR description.
4. Confirm the change stays inside the MVP scope list above — if not, flag it for human review instead of proceeding.

## Notes for agents specifically

- Prefer small, reviewable diffs over large speculative scaffolding.
- If a request implies AI/agent features (natural language chart edits, `intent=`, MCP tools), that's V1+ scope — implement the smallest stub needed to unblock the task, or ask before building it out fully.
- When in doubt about chart-recommendation logic, favor the simple heuristic table over inventing a scoring system — the real recommender is a deliberately deferred, research-heavy V1 task (see `/docs/roadmap.md`, "Key Risks").
- **Polish vs. scope expansion:** finishing an existing stub (Candlestick/Funnel/Donut) or reorganizing `apps/web` navigation is in scope right now. Adding a *new* chart type not already stubbed, a new interactivity feature (zoom, crosshair, cross-filtering), or a new package is not — those live in V1/V2/V3 per `docs/feature-roadmap.md`. If unsure which bucket a task falls into, check that file before proceeding.
- V3 now exists in the roadmap as the home for everything "a modern chart library eventually needs" that doesn't fit V1/V2 without diluting them (network/graph charts, plugin system, CLI codegen, cross-filtering, drill-down). Don't pull V3 items forward without a human explicitly asking.