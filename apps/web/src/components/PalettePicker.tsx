'use client';

import React from 'react';

export interface ThemePalette {
  id: string;
  name: string;
  primary: string;
  accent: string;
  background: string;
}

export const PALETTES: ThemePalette[] = [
  { id: 'cartography', name: 'Cartography', primary: '#c2872e', accent: '#1e2a22', background: '#ecefea' },
  { id: 'emerald', name: 'Emerald', primary: '#10b981', accent: '#064e3b', background: '#ecfdf5' },
  { id: 'indigo', name: 'Indigo', primary: '#6366f1', accent: '#1e1b4b', background: '#eef2ff' },
  { id: 'coral', name: 'Coral', primary: '#f43f5e', accent: '#881337', background: '#fff1f2' },
  { id: 'cyan', name: 'Cyan', primary: '#06b6d4', accent: '#164e63', background: '#ecfeff' },
];

interface PalettePickerProps {
  selectedId: string;
  onSelect: (palette: ThemePalette) => void;
}

export const PalettePicker: React.FC<PalettePickerProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="space-y-2 font-mono text-xs">
      <span className="text-[#60685c] font-semibold block uppercase text-[10px]">Theme Color Palette</span>
      <div className="flex flex-wrap gap-2">
        {PALETTES.map((p) => {
          const isSelected = selectedId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-150 shadow-xs ${
                isSelected
                  ? 'bg-[#18241b] text-white border-[#18241b] font-bold dark:bg-white dark:text-[#18241b] shadow-sm'
                  : 'bg-white dark:bg-[#0f1611] text-[#404641] dark:text-[#9ba196] hover:text-[#18241b] dark:hover:text-white border-[#18241b]/15 dark:border-[#2d3a30] hover:border-[#18241b]/30'
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0 shadow-xs"
                style={{ backgroundColor: p.primary }}
              />
              <span>{p.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
