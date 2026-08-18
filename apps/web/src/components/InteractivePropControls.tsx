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
    <tr className="border-b border-[#18241b]/10 hover:bg-[#18241b]/5 transition-colors">
      <td className="p-3 align-top">
        <div className="font-mono text-xs font-bold text-[#18241b] dark:text-[#f1f5ee]">{name}</div>
        <div className="font-mono text-[10px] text-[#c2872e] mt-0.5">{type}</div>
        {defaultVal && (
          <div className="font-mono text-[10px] text-[#60685c] mt-0.5">
            Default: <code className="bg-[#18241b]/8 dark:bg-white/10 px-1 py-0.5 rounded-[2px]">{defaultVal}</code>
          </div>
        )}
      </td>
      <td className="p-3 align-top font-body-doc text-xs text-[#404641] dark:text-[#9ba196] max-w-xs leading-relaxed">
        {description}
      </td>
      <td className="p-3 align-top font-mono text-xs">
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
      <div className="relative w-6 h-6 rounded-[2px] overflow-hidden border border-[#18241b]/20 dark:border-[#2d3a30] shrink-0">
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
        className="w-24 px-2 py-1 bg-white dark:bg-[#0f1611] rounded-[2px] border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-mono text-[#18241b] dark:text-[#f1f5ee] focus:outline-2 focus:outline-[#c2872e]"
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
      className="px-2.5 py-1 bg-white dark:bg-[#0f1611] rounded-[2px] border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-sans font-medium text-[#18241b] dark:text-[#f1f5ee] focus:outline-2 focus:outline-[#c2872e] cursor-pointer"
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
        className={`w-7 h-4 rounded-[2px] transition-colors relative p-0.5 border border-[#18241b]/20 ${
          value ? 'bg-[#c2872e]' : 'bg-[#18241b]/10 dark:bg-white/10'
        }`}
      >
        <div
          className={`w-2.5 h-2.5 rounded-[1px] bg-white dark:bg-[#18241b] transform transition-transform ${
            value ? 'translate-x-3' : 'translate-x-0'
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
        className="w-14 px-2 py-1 bg-white dark:bg-[#0f1611] rounded-[2px] border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-mono text-[#18241b] dark:text-[#f1f5ee] focus:outline-2 focus:outline-[#c2872e]"
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
      className="w-36 px-2.5 py-1 bg-white dark:bg-[#0f1611] rounded-[2px] border border-[#18241b]/20 dark:border-[#2d3a30] text-xs font-sans font-medium text-[#18241b] dark:text-[#f1f5ee] focus:outline-2 focus:outline-[#c2872e]"
    />
  );
};
