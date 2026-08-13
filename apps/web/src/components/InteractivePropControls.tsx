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
    <tr className="border-b border-[#1e2a22]/15 hover:bg-[#ecefea]/40 transition-colors">
      <td className="p-3 align-top">
        <div className="font-mono text-xs font-bold text-[#1e2a22]">{name}</div>
        <div className="font-mono text-[10px] text-[#c2872e] mt-0.5">{type}</div>
        {defaultVal && (
          <div className="font-mono text-[10px] text-[#6e756a] mt-0.5">
            Default: <code className="bg-[#ecefea] px-1 py-0.2">{defaultVal}</code>
          </div>
        )}
      </td>
      <td className="p-3 align-top font-body-doc text-xs text-[#434844] max-w-xs leading-relaxed">
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
      <input
        type="color"
        value={value.startsWith('#') ? value : '#c2872e'}
        onChange={(e) => onChange(e.target.value)}
        className="w-7 h-7 cursor-pointer border border-[#1e2a22] p-0 bg-transparent rounded-none"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-24 px-2 py-1 bg-white border border-[#1e2a22]/30 text-xs font-mono text-[#1e2a22] focus:outline-none focus:border-[#c2872e]"
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
      className="px-2.5 py-1 bg-white border border-[#1e2a22]/30 text-xs font-mono text-[#1e2a22] focus:outline-none focus:border-[#c2872e] cursor-pointer"
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
    <label className="flex items-center gap-2 cursor-pointer select-none font-mono text-xs text-[#1e2a22]">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 accent-[#c2872e] border-[#1e2a22] cursor-pointer"
      />
      <span>{label || (value ? 'true' : 'false')}</span>
    </label>
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
        className="w-24 accent-[#c2872e] cursor-pointer"
      />
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-16 px-2 py-1 bg-white border border-[#1e2a22]/30 text-xs font-mono text-[#1e2a22] focus:outline-none focus:border-[#c2872e]"
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
      className="w-36 px-2.5 py-1 bg-[#ffffff] border border-[#1e2a22]/30 text-xs font-mono text-[#1e2a22] focus:outline-none focus:border-[#c2872e]"
    />
  );
};
