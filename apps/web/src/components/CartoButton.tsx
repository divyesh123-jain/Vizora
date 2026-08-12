'use client';

import React from 'react';

interface CartoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const CartoButton: React.FC<CartoButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClass = variant === 'primary' ? 'carto-btn-primary' : 'carto-btn-secondary';
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
