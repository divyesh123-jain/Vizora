# CLAUDE.md

This project follows the shared **AGENTS.md** convention. Read `AGENTS.md` in the repo root first — it is the source of truth for project scope, repo structure, tech stack, and conventions. This file only adds Claude-specific notes on top of it.

## Priority order

1. `AGENTS.md` — scope, structure, conventions (applies to all agents, including Antigravity)
2. `docs/requirements.md` — the locked MVP functional/non-functional requirements and acceptance criteria
3. `docs/feature-roadmap.md` — the polish-vs-scope tiebreaker; use this before assuming a UI/feature request is bigger than it is
4. `docs/vision.md` — full product vision, for context on *why*, not what to build right now
5. `docs/roadmap.md` — MVP → V1 → V2 → V3 phasing and the explicit non-goals per phase
6. `docs/design-brief-v2.md` — the visual direction any UI work should follow
7. This file — Claude-specific working notes

If any instruction here conflicts with `AGENTS.md`, `AGENTS.md` wins.

## Working style for this repo

- **Stay inside the current phase's scope.** The MVP scope list in `AGENTS.md` is deliberately narrow (5 chart types, SVG only, no AI layer, heuristic-only AutoChart), plus a small set of explicitly approved "polish" items (finishing the Candlestick/Funnel/Donut stubs, reorganizing `apps/web` nav by category, composed templates from existing charts). The single biggest risk on this project is scope creep — see "Key Risks" in `docs/roadmap.md`. If a request would pull in something from a later phase, say so explicitly and propose the smallest MVP-compatible version instead of quietly building the bigger thing.
- **Polish is not the same as scope expansion.** Reorganizing navigation, finishing an already-stubbed chart type, or applying the design brief's visual language to existing screens is fine to just do. Adding a genuinely new chart type, a new interactivity feature (zoom, crosshair, cross-filtering), or a new package is not — check `docs/feature-roadmap.md` before assuming a UI ask is small.
- **ChartSpec is the contract, not JSX.** Any feature — AI-driven or not — should produce or consume a validated `ChartSpec`, never generate ad hoc rendering code as the primary path.
- **Prefer plans before large changes.** For anything touching `@core`'s `ChartSpec` schema, scales, or transforms, lay out the change (what fields, why, migration impact) before writing code, since this schema is the shared contract every other package depends on.
- **Small, reviewable diffs.** Avoid speculative scaffolding for packages marked "do not build yet" in `AGENTS.md` (`render-canvas`, `render-webgl`, `vue`, `svelte`, `ai`), even if it seems convenient to stub them out.
- **UI work follows `docs/design-brief-v2.md`.** The visual language is the "cartography of data" direction — Compass dial for recommendations, Legend band for the live ChartSpec, contour shading for magnitude, flag pins for anomalies. `CompassDial` and related components already exist in `apps/web`; extend that language rather than introducing a new visual system.

## Useful context to keep in mind

- The product's differentiator is the AI-layer-edits-a-validated-spec model, not raw chart-type coverage. When explaining design decisions or writing docs/comments, lead with that framing.
- The chart-recommendation engine (full weighted scoring) is intentionally deferred to V1 and flagged as the highest-risk, least-proven part of the system — don't casually expand the MVP's heuristic recommender into something more sophisticated without a human asking for it.
- Naming: working name is **Vizora** (placeholder). If you see references to earlier candidate names (Vizly, Chartix, Graphly, Graphon) in old docs or comments, those were ruled out due to npm/naming collisions — don't reintroduce them.

## Commands

See `AGENTS.md` → Commands. Same commands apply here; this file doesn't duplicate them.

## When starting a session

1. Skim `AGENTS.md` and the current phase's scope list, including the "approved MVP polish" section.
2. Check `docs/roadmap.md` for which phase (MVP / V1 / V2 / V3) is active if it's been updated since this file was written.
3. If a task is ambiguous about which phase or bucket (core MVP / polish / V1+) it belongs to, check `docs/feature-roadmap.md` first, then ask rather than assume the broader scope.
4. Remember the project already has real code in `packages/` and `apps/web` — check what's actually implemented before assuming something needs to be built from scratch (e.g. Candlestick/Funnel/Donut are stubbed, not missing entirely).