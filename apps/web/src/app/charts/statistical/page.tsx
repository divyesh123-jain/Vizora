'use client';

import React, { useState } from 'react';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';
import { CompassDial } from '../../../components/CompassDial';
import { LegendBand } from '../../../components/LegendBand';

const STATISTICAL_DATA = [
  { score: 15 }, { score: 18 }, { score: 22 }, { score: 25 }, { score: 28 },
  { score: 32 }, { score: 35 }, { score: 38 }, { score: 45 }, { score: 52 },
];

export default function StatisticalCategoryPage() {
  const [activeChart, setActiveChart] = useState<ChartType>('histogram');

  return (
    <div className="space-y-8">
      <div className="border-b border-[#18241b]/10 pb-6 space-y-3">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
          STATISTICAL
        </span>
        <h1 className="font-headline-lg text-3xl sm:text-4xl text-[#18241b] font-bold">
          Distributions & Densities
        </h1>
        <p className="font-body-doc text-[#404641] max-w-2xl text-base leading-relaxed">
          Distributions, probability densities, correlations, and variance across large statistical datasets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#f4f7f3] border border-[#18241b]/10 p-6 rounded-3xl shadow-inner">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[#18241b] mb-4">
              Select Chart Layout
            </h3>
            <CompassDial 
              recommendedType="histogram" 
              selectedType={activeChart} 
              onSelectType={setActiveChart} 
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white/80 border border-[#18241b]/15 rounded-3xl p-6 shadow-xl backdrop-blur-md min-h-[400px] flex flex-col">
            <div className="flex-1 flex items-center justify-center bg-[#f4f7f3] rounded-2xl border border-[#18241b]/5 p-8 shadow-inner relative overflow-hidden carto-grid-bg">
              <Chart 
                type={activeChart} 
                data={STATISTICAL_DATA} 
                x="score"
              />
            </div>
            
            <div className="mt-6 border-t border-[#18241b]/10 rounded-b-3xl overflow-hidden">
               <LegendBand 
                  spec={{ version: '0.1.0', type: activeChart, data: STATISTICAL_DATA, encoding: { x: { field: 'score' } } }}
                  dataCount={STATISTICAL_DATA.length}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
