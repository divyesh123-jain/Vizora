import React from 'react';

export interface VizoraLogoProps {
  size?: number;
  className?: string;
}

export const VizoraLogo: React.FC<VizoraLogoProps> = ({ size = 48, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-label="Vizora Logo - Cartography of Data"
      role="img"
      className={className}
    >
      <defs>
        <linearGradient id="v-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c2872e" />
          <stop offset="100%" stopColor="#18241b" />
        </linearGradient>
        <filter id="v-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <circle cx="100" cy="100" r="90" fill="#0f1611" stroke="#2d3a30" strokeWidth="1" />

      {/* Compass ring */}
      <circle cx="100" cy="100" r="72" fill="none" stroke="#2d3a30" strokeWidth="1" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="#2d3a30" strokeWidth="0.5" strokeDasharray="4 3" />

      {/* Compass ticks */}
      <g stroke="#c2872e" strokeWidth="1.5" opacity="0.9">
        <line x1="100" y1="36" x2="100" y2="44" />
        <line x1="100" y1="156" x2="100" y2="164" />
        <line x1="36" y1="100" x2="44" y2="100" />
        <line x1="156" y1="100" x2="164" y2="100" />
      </g>

      {/* Chart data line (area series) */}
      <polyline
        points="60,130 80,95 95,110 115,75 130,88 150,55 170,60"
        fill="none"
        stroke="#c2872e"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.92"
        filter="url(#v-glow)"
      />

      {/* Area fill */}
      <polygon
        points="60,130 80,95 95,110 115,75 130,88 150,55 170,60 170,130 60,130"
        fill="url(#v-grad)"
        opacity="0.35"
      />

      {/* Data points */}
      <g fill="#f4f7f3" stroke="#c2872e" strokeWidth="2">
        <circle cx="60" cy="130" r="3.5" />
        <circle cx="80" cy="95" r="3.5" />
        <circle cx="115" cy="75" r="3.5" />
        <circle cx="150" cy="55" r="3.5" />
        <circle cx="170" cy="60" r="3.5" />
      </g>

      {/* Compass needle */}
      <polygon points="100,42 106,100 94,100" fill="#c2872e" stroke="#18241b" strokeWidth="1" />

      {/* Center flag pin */}
      <circle cx="100" cy="100" r="10" fill="#c2872e" stroke="#18241b" strokeWidth="2" />
      <circle cx="100" cy="100" r="3" fill="#0f1611" />

      {/* Wordmark */}
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="18"
        letterSpacing="6"
        fill="#f4f7f3"
      >
        VIZORA
      </text>
      <text
        x="100"
        y="190"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fontSize="7"
        letterSpacing="3"
        fill="#c2872e"
      >
        CARTOGRAPHY OF DATA
      </text>
    </svg>
  );
};
