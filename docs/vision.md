# Vizora — Product & Technical Vision

## Executive Summary

**Vizora** is an intelligent, developer-first data-visualization engine built around a single foundational architecture bet: **a typed, deterministic `ChartSpec` is the ideal contract between developers, data profiling engines, and AI agents.**

Unlike traditional chart libraries that require imperative configuration or AI chart generators that emit volatile JSX/DOM nodes, Vizora separates intent resolution (`ChartSpec`) from rendering (`SceneGraph` -> SVG/Canvas/WebGL).

---

## Core Architectural Principles

1. **ChartSpec is the Contract**
   - No feature, AI-driven or hand-written, ever outputs raw JSX or DOM commands directly.
   - Everything resolves into a JSON-serializable, schema-validated `ChartSpec`.
   - Guaranteed byte-for-byte deterministic rendering given the same `ChartSpec` and viewport.

2. **Framework-Agnostic Core**
   - `@vizora/core` contains zero dependencies on React, Vue, Svelte, or the DOM.
   - Layouts, scales, transformations, and scene graph nodes are computed headlessly.

3. **Multi-Target Rendering**
   - Scene graphs can be rendered via SVG (`@vizora/render-svg` - MVP), Canvas, or WebGL without changing the `ChartSpec` interface.

4. **Tiered Intelligence**
   - **MVP:** Rule-based deterministic heuristics (Data types + Cardinality -> Chart recommendation).
   - **V1:** Weighted chart recommendation scoring engine (Data quality, distribution, cognitive fit).
   - **V2:** Conversational AI editing layer modifying validated `ChartSpec` objects via typed patches.

---

## Package Architecture

```
@vizora/core          <-- Spec definition, scales, layout, transforms, formatters
  ▲         ▲
  │         │
@vizora/render-svg   @vizora/intelligence <-- Heuristics & field inference
  ▲         ▲
  └────┬────┘
@vizora/react         <-- <Chart />, <AutoChart />
```

---

## Key Differentiators

- **Zero-Config `AutoChart`**: Analyzes data structures and selects optimal visual encodings automatically.
- **Explicit Escape Hatch**: `<Chart data={data} x="..." y="..." />` allows full developer control when heuristics are overridden.
- **Headless Resolution**: Pre-render charts on server environments or in headless testing suites with full SceneGraph inspection.
- **Built-in Accessibility**: Every rendered chart automatically includes a semantic HTML `<table>` fallback for screen readers.
