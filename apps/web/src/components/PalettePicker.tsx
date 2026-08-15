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
  { id: 'cartography', name: 'Cartography Gold', primary: '#c2872e', accent: '#1e2a22', background: '#ecefea' },
  { id: 'emerald', name: 'Emerald Tech', primary: '#10b981', accent: '#064e3b', background: '#ecfdf5' },
  { id: 'indigo', name: 'Electric Indigo', primary: '#6366f1', accent: '#1e1b4b', background: '#eef2ff' },
  { id: 'coral', name: 'Sunset Coral', primary: '#f43f5e', accent: '#881337', background: '#fff1f2' },
  { id: 'cyan', name: 'Cyber Cyan', primary: '#06b6d4', accent: '#164e63', background: '#ecfeff' },
];

interface PalettePickerProps {
  selectedId: string;
  onSelect: (palette: ThemePalette) => void;
}

export const PalettePicker: React.FC<PalettePickerProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="space-y-2 font-mono text-xs">
      <span className="text-[#60685c] font-bold block">Theme Color Palette</span>
      <div className="flex flex-wrap gap-2">
        {PALETTES.map((p) => {
          const isSelected = selectedId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-200 active:scale-95 ${
                isSelected
                  ? 'bg-[#18241b] text-white border-[#18241b] font-bold shadow-md shadow-emerald-950/10'
                  : 'bg-white text-[#404641] hover:text-[#18241b] hover:bg-slate-50 border-[#18241b]/15 shadow-sm'
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-sm"
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
