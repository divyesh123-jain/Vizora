'use client';

import React from 'react';

interface CartoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  disabledCaption?: string;
}

export const CartoInput: React.FC<CartoInputProps> = ({
  label,
  error,
  disabledCaption,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-xs font-semibold text-[#18241b] dark:text-[#f1f5ee]">
        {label}
      </label>
      <input
        disabled={disabled}
        className={`carto-input ${
          disabled
            ? 'cursor-not-allowed text-[#60685c] bg-[#e8ebe5]/50 dark:bg-[#1a251d]/50'
            : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="font-mono text-[11px] text-[#d6502b]">{error}</span>
      )}
      {disabled && disabledCaption && (
        <span className="font-mono text-[10px] text-[#60685c]">({disabledCaption})</span>
      )}
    </div>
  );
};
