'use client';

import React from 'react';

export interface PropControlRowProps {
  name: string;
  type: string;
  defaultVal?: string;
  description: string;
  children: React.ReactNode;
}

export const PropControlRow: React.FC<PropControlRowProps> = ({
  name,
  type,
  defaultVal,
  description,
  children,
}) => {
  return (
    <tr className="border-b border-[#18241b]/10 hover:bg-[#18241b]/4 transition-colors">
      <td className="p-3.5 align-top">
        <div className="font-mono text-xs font-bold text-[#18241b] dark:text-[#f1f5ee]">{name}</div>
        <div className="font-mono text-[10px] text-[#c2872e] mt-0.5">{type}</div>
        {defaultVal && (
          <div className="font-mono text-[10px] text-[#60685c] mt-0.5">
            Default: <code className="bg-[#18241b]/8 dark:bg-white/10 px-1.5 py-0.5 rounded-md">{defaultVal}</code>
          </div>
        )}
      </td>
      <td className="p-3.5 align-top font-body-doc text-xs text-[#404641] dark:text-[#9ba196] max-w-xs leading-relaxed">
        {description}
      </td>
      <td className="p-3.5 align-top font-mono text-xs">
        <div className="flex items-center gap-2">{children}</div>
      </td>
    </tr>
  );
};

export const ColorControl: React.FC<{
  value: string;
  onChange: (val: string) => void;
}> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-6 h-6 rounded-md overflow-hidden border border-[#18241b]/20 dark:border-[#2d3a30] shrink-0 shadow-sm">
        <input
          type="color"
          value={value.startsWith('#') ? value : '#c2872e'}
          onChange={(e) => onChange(e.target.value)}
          className="absolute -top-2 -left-2 w-10 h-10 cursor-pointer border-none bg-transparent"
        />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-24 px-2.5 py-1 bg-white dark:bg-[#0f1611] rounded-md border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-mono text-[#18241b] dark:text-[#f1f5ee] focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all"
      />
    </div>
  );
};

export const SelectControl: React.FC<{
  value: string;
  options: { label: string; value: string }[];
  onChange: (val: string) => void;
}> = ({ value, options, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-1 bg-white dark:bg-[#0f1611] rounded-md border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-sans font-medium text-[#18241b] dark:text-[#f1f5ee] focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 cursor-pointer transition-all shadow-sm"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export const ToggleControl: React.FC<{
  value: boolean;
  onChange: (val: boolean) => void;
  label?: string;
}> = ({ value, onChange, label }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className="flex items-center gap-2 cursor-pointer select-none font-sans text-xs text-[#18241b] dark:text-[#f1f5ee]"
    >
      <div
        className={`w-8 h-4.5 rounded-full transition-colors duration-200 relative p-0.5 border border-[#18241b]/15 ${
          value ? 'bg-[#c2872e]' : 'bg-[#18241b]/15 dark:bg-white/15'
        }`}
      >
        <div
          className={`w-3.5 h-3.5 rounded-full bg-white dark:bg-[#18241b] shadow-sm transform transition-transform duration-200 ${
            value ? 'translate-x-3.5' : 'translate-x-0'
          }`}
        />
      </div>
      <span className="font-semibold text-xs text-[#404641] dark:text-[#9ba196] font-sans">
        {label || (value ? 'true' : 'false')}
      </span>
    </button>
  );
};

export const NumberControl: React.FC<{
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (val: number) => void;
}> = ({ value, min = 0, max = 100, step = 1, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-20 accent-[#c2872e] cursor-pointer"
      />
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-14 px-2 py-1 bg-white dark:bg-[#0f1611] rounded-md border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-mono text-[#18241b] dark:text-[#f1f5ee] focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-sm"
      />
    </div>
  );
};

export const TextControl: React.FC<{
  value: string;
  placeholder?: string;
  onChange: (val: string) => void;
}> = ({ value, placeholder, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-36 px-2.5 py-1 bg-white dark:bg-[#0f1611] rounded-md border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-sans font-medium text-[#18241b] dark:text-[#f1f5ee] focus:outline-none focus:ring-2 focus:ring-[#c2872e]/40 transition-all shadow-sm"
    />
  );
};
