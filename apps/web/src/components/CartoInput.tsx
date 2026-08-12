'use client';

import React from 'react';

interface CartoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CartoInput: React.FC<CartoInputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-data-spec text-[#6e756a] text-xs">{label}</label>
      <input className={`carto-input ${className}`} {...props} />
    </div>
  );
};
