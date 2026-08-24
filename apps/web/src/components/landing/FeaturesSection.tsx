'use client';

import React from 'react';

interface FeatureCard {
  id: string;
  problem: string;
  solutionTitle: string;
  solutionDescription: string;
  badge: string;
  tag: string;
}

const PROBLEM_SOLUTION_FEATURES: FeatureCard[] = [
  {
    id: '01',
    problem: 'Sick of writing boilerplate SVG & scale math?',
    solutionTitle: 'Zero-Config AutoChart',
    solutionDescription:
      'Pass raw JSON arrays directly to <AutoChart />. Vizora profiles field data types (temporal, categorical, quantitative) and selects optimal axis encodings automatically.',
    badge: 'AUTOMATIC HEURISTICS',
    tag: 'Profiling Engine',
  },
  {
    id: '02',
    problem: 'Tired of state desyncs & JSON-serialization bugs?',
    solutionTitle: 'Typed ChartSpec Contract',
    solutionDescription:
      'Decouples chart definitions from DOM rendering. Every spec is a 100% JSON-serializable, Zod-validated object ready to store in PostgreSQL schemas or send over REST/GraphQL.',
    badge: 'TYPED SCHEMA',
    tag: 'Zod Validated',
  },
  {
    id: '03',
    problem: 'Worried about SSR hydration mismatches & edge latency?',
    solutionTitle: 'Headless & SSR Safe',
    solutionDescription:
      'The core layout engine resolves an intermediate SceneGraph without mounting any DOM nodes. Renders static SVGs directly in Next.js App Router Server Components and Edge workers.',
    badge: 'ZERO DOM ENGINE',
    tag: 'Edge Ready',
  },
  {
    id: '04',
    problem: 'Frustrated by massive chart libraries bloating your bundle?',
    solutionTitle: '< 15kb Modular Architecture',
    solutionDescription:
      'Decoupled npm workspaces allow you to install only what your app uses. Core engine is under 12kb and has zero React dependencies.',
    badge: 'PERFORMANCE',
    tag: 'Tree Shakeable',
  },
  {
    id: '05',
    problem: 'Screen reader & WCAG 2.1 accessibility treated as an afterthought?',
    solutionTitle: 'Built-in Accessible Tables',
    solutionDescription:
      'Every rendered chart automatically generates an accessible semantic HTML data table fallback with ARIA live captions for visually impaired users.',
    badge: 'A11Y COMPLIANT',
    tag: 'WCAG 2.1 AA',
  },
  {
    id: '06',
    problem: 'Stuck with rigid black-box charting styling?',
    solutionTitle: 'Cartographic Design System',
    solutionDescription:
      'Harmonious warm-tinted design tokens with Compass bearings, dynamic Legend bands, contour shading, and seamless light/dark mode switching.',
    badge: 'DESIGN CRAFT',
    tag: 'Token Driven',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e] bg-[#c2872e]/10 px-3 py-1 rounded-full border border-[#c2872e]/20">
            PROBLEM → SOLUTION ARCHITECTURE
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
            Built to solve real frontend charting pain points
          </h2>
          <p className="font-body-doc text-[#404641] text-base leading-relaxed">
            Traditional charting libraries require dozens of lines of SVG setup, manual scale calculations, and fragile prop wiring. Vizora turns visualization into a typed, deterministic contract.
          </p>
        </div>

        {/* 3x2 Problem / Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SOLUTION_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-white/90 border border-[#18241b]/10 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* Header row: Problem ID + Category Badge */}
                <div className="flex items-center justify-between border-b border-[#18241b]/8 pb-2.5">
                  <span className="font-mono text-xs font-bold text-[#c2872e]">
                    {feature.id} • {feature.badge}
                  </span>
                  <span className="font-mono text-[10px] bg-[#18241b]/6 px-2 py-0.5 rounded text-[#18241b] font-medium">
                    {feature.tag}
                  </span>
                </div>

                {/* Problem Question (Reframed from designer feedback) */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#9b5123] block">
                    The Problem
                  </span>
                  <p className="font-headline-md text-sm font-bold text-[#18241b] leading-snug">
                    "{feature.problem}"
                  </p>
                </div>

                {/* Solution Answer */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#2e6b3f] block">
                    Vizora Solution
                  </span>
                  <h3 className="font-headline-md text-base text-[#18241b] font-bold">
                    {feature.solutionTitle}
                  </h3>
                  <p className="font-body-ui text-xs text-[#404641] leading-relaxed">
                    {feature.solutionDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer Accent */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#60685c] border-t border-[#18241b]/8">
                <span>Deterministic Result</span>
                <span className="text-[#c2872e] font-bold group-hover:translate-x-0.5 transition-transform">✓ Solved</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
