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
      className={`group flex flex-col justify-between p-5 rounded-xl transition-all duration-200 border shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#c2872e] ${
        category.dark
          ? 'bg-[#151f17] border-[#2d3a30] text-[#e0e4dc] hover:border-[#9ba196]/40'
          : 'bg-white border-[#18241b]/10 text-[#18241b] hover:border-[#18241b]/25'
      }`}
    >
      {/* Top: Header metadata */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold text-[#c2872e] uppercase tracking-wider">
            {category.badge}
          </span>
          <span
            className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
              category.dark
                ? 'bg-[#18221b] border-[#2d3a30] text-[#9ba196]'
                : 'bg-[#f4f7f3] border-[#18241b]/12 text-[#60685c]'
            }`}
          >
            {category.count} charts
          </span>
        </div>

        <h3 className="font-headline-md text-lg font-bold group-hover:text-[#c2872e] transition-colors">
          {category.title}
        </h3>

        <p className="font-body-ui text-xs leading-relaxed text-[#60685c]">
          {category.description}
        </p>
      </div>

      {/* Center: Live Mini-Chart Preview with LegendBand */}
      <div className="my-3.5 rounded-lg overflow-hidden border border-[#18241b]/10 dark:border-[#2d3a30]">
        <div
          className={`h-36 p-2 flex items-center justify-center pointer-events-none ${
            category.dark ? 'bg-[#0b100d]' : 'bg-[#f9fbf8]'
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
      <div className="flex items-center justify-between pt-1 text-xs font-semibold">
        <span className="font-mono text-[11px] text-[#c2872e]">/components/{category.slug}</span>
        <span className="font-mono text-[11px] text-[#60685c] group-hover:text-[#c2872e] transition-colors">
          Browse &rarr;
        </span>
      </div>
    </Link>
  );
};
