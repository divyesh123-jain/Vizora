'use client';

import React from 'react';
import Link from 'next/link';
import { Chart } from '@vizora/react';
import { ChartType } from '@vizora/core';
import { LegendBand } from './LegendBand';

export interface CategoryInfo {
  slug: string;
  title: string;
  badge: string;
  description: string;
  count: number;
  heroChart: ChartType;
  x?: string;
  y?: string;
  data: Record<string, unknown>[];
  dark?: boolean;
}

interface CategoryCardProps {
  category: CategoryInfo;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      href={`/components/${category.slug}`}
      className={`group flex flex-col justify-between p-6 rounded-2xl transition-all duration-200 border ${
        category.dark
          ? 'bg-[#111813] border-[#2d3a30] text-[#e0e4dc] hover:border-[#c2872e]'
          : 'bg-[#f4f7f3] border-[#18241b]/15 text-[#18241b] hover:border-[#c2872e] hover:shadow-md'
      }`}
    >
      {/* Top: Header metadata */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[11px] font-bold text-[#c2872e] uppercase tracking-wider">
            {category.badge}
          </span>
          <span
            className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
              category.dark
                ? 'bg-[#18221b] border-[#2d3a30] text-[#a4c995]'
                : 'bg-white/80 border-[#18241b]/10 text-[#60685c]'
            }`}
          >
            {category.count} charts
          </span>
        </div>

        <h3 className="font-headline-md text-xl font-bold group-hover:text-[#c2872e] transition-colors">
          {category.title}
        </h3>

        <p className="font-body-ui text-xs leading-relaxed text-[#60685c]">
          {category.description}
        </p>
      </div>

      {/* Center: Live Mini-Chart Preview with LegendBand */}
      <div className="my-4 rounded-xl overflow-hidden border border-[#18241b]/10">
        <div
          className={`h-40 p-2 flex items-center justify-center pointer-events-none ${
            category.dark ? 'bg-[#0b100d]' : 'bg-white'
          }`}
        >
          <Chart
            type={category.heroChart}
            data={category.data}
            x={category.x}
            y={category.y}
            theme={category.dark ? 'zinc' : undefined}
          />
        </div>
        <LegendBand
          spec={{
            type: category.heroChart,
            encoding: {
              x: category.x ? { field: category.x } : undefined,
              y: category.y ? { field: category.y } : undefined,
            },
            data: category.data,
          }}
          dataCount={category.data.length}
          dark={category.dark}
        />
      </div>

      {/* Bottom: Action bar */}
      <div className="flex items-center justify-between pt-2 text-xs font-semibold">
        <span className="font-mono text-[11px] text-[#c2872e]">/components/{category.slug}</span>
        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#c2872e]">
          Browse &rarr;
        </span>
      </div>
    </Link>
  );
};
