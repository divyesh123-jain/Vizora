import React from 'react';

export interface VizoraLogoProps {
  size?: number;
  className?: string;
}

export const VizoraLogo: React.FC<VizoraLogoProps> = ({ size = 32, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-label="Vizora Logo"
      role="img"
      className={className}
    >
      <rect width="100" height="100" fill="#18241b"/>
      <path d="M 15 70 Q 50 40 85 70" stroke="#c2872e" strokeWidth={3} fill="none" strokeLinecap="round"/>
      <circle cx="85" cy="70" r="3" fill="#c2872e"/>
      <text x="50" y="50" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16" letterSpacing={4} fill="#ffffff">VIZORA</text>
      <text x="50" y="65" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize={9} letterSpacing={2} fill="#c2872e">DATA</text>
    </svg>
  );
};