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
      <span className="text-[#909c8d] font-bold block">Theme Color Palette</span>
      <div className="flex flex-wrap gap-2">
        {PALETTES.map((p) => {
          const isSelected = selectedId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p)}
              className={`flex items-center gap-2 px-2.5 py-1.5 border transition-all ${
                isSelected
                  ? 'bg-[#1e2a22] text-[#ecefea] border-[#1e2a22] font-bold'
                  : 'bg-[#f7faf5] text-[#434844] hover:text-[#1e2a22] border-[#1e2a22]/20'
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/20"
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
