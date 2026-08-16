import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 lg:py-24 border-b border-[#18241b]/10 bg-[#f4f7f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#c2872e]">
            BUILT FOR MODERN DEVELOPERS
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
            Why developers choose Vizora over raw charting libraries?
          </h2>
          <p className="font-body-doc text-[#404641] text-base leading-relaxed">
            Traditional chart libraries require dozens of lines of SVG setup, manual scale calculations, and repetitive prop wiring. Vizora abstracts visualization logic into a typed, deterministic runtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
            <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
              ⚡
            </div>
            <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
              Zero-Config AutoChart
            </h3>
            <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
              Pass raw arrays of JSON objects directly to <code className="font-mono text-xs bg-[#18241b]/8 px-1.5 py-0.5 rounded-md">&lt;AutoChart /&gt;</code>. Vizora profiles field data types and maps axis encodings automatically.
            </p>
          </div>

          <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
            <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
              📜
            </div>
            <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
              Typed ChartSpec Contract
            </h3>
            <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
              Decouples chart definitions from DOM rendering. Every spec is a 100% JSON-serializable, Zod-validated object easy to store in database schemas or send across HTTP APIs.
            </p>
          </div>

          <div className="bg-white/80 border border-[#18241b]/10 rounded-2xl p-6 space-y-3.5 shadow-sm hover:shadow-xl hover:border-[#c2872e] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md group">
            <div className="w-10 h-10 rounded-xl bg-[#18241b] text-[#c2872e] flex items-center justify-center font-sans font-bold text-base group-hover:bg-[#c2872e] group-hover:text-white transition-all shadow-sm">
              ⚙️
            </div>
            <h3 className="font-headline-md text-lg text-[#18241b] font-bold">
              Headless & SSR Safe
            </h3>
            <p className="font-body-ui text-sm text-[#404641] leading-relaxed">
              Core layout engine computes an intermediate SceneGraph without mounting DOM nodes. Fully compatible with Next.js App Router Server Components and Edge environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
