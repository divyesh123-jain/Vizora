# AGENTS.md

Instructions for any AI coding agent (Antigravity, Claude Code, Cursor, Codex, etc.) working in this repository.

## Project

**Working name:** Vizora *(placeholder — update once finalized)*
**What it is:** An intelligent, developer-first data-visualization engine. A framework-agnostic chart runtime + deterministic data profiling + automatic chart recommendation + an optional AI layer that edits a typed, validated `ChartSpec` — never raw JSX or DOM.

Full context lives in `/docs/vision.md` (the original Product + Technical Vision doc) and `/docs/roadmap.md` (MVP → V1 → V2 scoping). Read both before making architectural decisions.

## Current phase: MVP

We are building the smallest possible slice that proves `ChartSpec` is a good contract. Do not implement anything outside this list without explicit confirmation from a human:

**In scope:**
- Chart types: Line, Bar/Horizontal Bar, Scatter, Histogram, KPI+Sparkline — nothing else
- `@core` (ChartSpec schema, scales, transforms, layout) + `@render-svg` + `@react` only
- `<AutoChart data={data} />` using **simple heuristics only** (temporal field → line, categorical+quantitative → bar, two quantitative → scatter) — not a scoring engine
- `<Chart data={data} x="..." y="..." />` explicit-encoding API
- SVG rendering only. SSR-safe. Headless-resolvable (ChartSpec → scene graph without mounting DOM).

**Explicitly out of scope until MVP ships and is reviewed:**
- Any AI/LLM layer, `intent=` prop, conversational editing, MCP/agent tools
- Canvas or WebGL renderers
- Vue/Svelte/Solid adapters
- The full weighted chart-recommendation scoring engine
- Any chart type beyond the 5 listed above
- Dashboard editor, hosted product, data connectors

If a task seems to require touching something in the "out of scope" list, stop and flag it rather than expanding scope silently.

## Repo structure (monorepo, npm workspaces)

```
packages/
  core/           # ChartSpec schema, scales, transforms, scene graph, renderer interface
  render-svg/     # SVG renderer (MVP default)
  render-canvas/  # (V2 — do not build yet)
  render-webgl/   # (V2 — do not build yet)
  react/          # Thin React adapter — <Chart />, <AutoChart />
  vue/            # (V2 — do not build yet)
  svelte/         # (V2 — do not build yet)
  intelligence/   # Field inference, recommendation heuristics (MVP: simple only)
  ai/             # (V1+ — do not build yet)
docs/
  vision.md
  roadmap.md
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