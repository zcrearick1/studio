'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface TromboneFingeringDiagramProps {
  activePosition?: number;
  className?: string;
}

// Map slide position number to a pixel offset. 1st position is 0.
const positionOffsets = [
    0,   // Position 1 (placeholder)
    0,   // Position 1
    30,  // Position 2
    63,  // Position 3
    99,  // Position 4
    138, // Position 5
    180, // Position 6
    225, // Position 7
];

export const TromboneFingeringDiagram: FC<TromboneFingeringDiagramProps> = ({
  activePosition = 1,
  className,
}) => {
  const slideX = positionOffsets[activePosition] || 0;

  return (
    <svg
      viewBox="0 0 400 120"
      className={cn('w-full h-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brassGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.8)" />
            <stop offset="50%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" />
        </linearGradient>
      </defs>

      {/* Static Bell Section */}
      <g id="bell-section" fill="url(#brassGradient)" stroke="hsl(var(--foreground))" strokeWidth="0.5">
        {/* Mouthpiece */}
        <path d="M 0,50 Q 5,45 15,45 L 25,45 Q 30,45 35,50" fill="hsl(var(--card))" strokeWidth="1" />
        <path d="M 0,60 Q 5,65 15,65 L 25,65 Q 30,65 35,60" fill="hsl(var(--card))" strokeWidth="1" />
        <rect x="0" y="50" width="15" height="10" fill="hsl(var(--card))" />

        {/* Bell flare */}
        <path d="M 390,10 C 370,30 360,50 360,55 C 360,65 370,85 390,105 L 400,110 L 400,5 L 390,10 Z" />

        {/* Top tube from bell */}
        <rect x="130" y="48" width="270" height="4" rx="2" />
        {/* Bottom tube from bell */}
        <rect x="130" y="58" width="270" height="4" rx="2" />
        
        {/* Tuning slide */}
        <path d="M 130,48 Q 110,48 110,55 Q 110,62 130,62" fill="none" strokeWidth="4" stroke="url(#brassGradient)" />
      </g>
      
      {/* Inner slide (static part) */}
      <g id="inner-slide" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="0.5">
          <rect x="35" y="49" width="100" height="2" />
          <rect x="35" y="59" width="100" height="2" />
      </g>

      {/* Outer slide (moving part) */}
      <g 
        id="outer-slide" 
        transform={`translate(${slideX}, 0)`}
        className="transition-transform duration-300 ease-in-out"
        fill="url(#brassGradient)"
        stroke="hsl(var(--foreground))"
        strokeWidth="0.5"
      >
        {/* Top tube */}
        <rect x="35" y="48" width="120" height="4" rx="2" />
        {/* Bottom tube */}
        <rect x="35" y="58" width="120" height="4" rx="2" />
        {/* U-bend */}
        <path d="M 155,48 Q 175,48 175,55 Q 175,62 155,62" fill="none" strokeWidth="4" stroke="url(#brassGradient)" />
        {/* Slide Brace */}
        <rect x="135" y="48" width="4" height="14" rx="1" />
        {/* Water key */}
        <circle cx="165" cy="65" r="3" />
        <path d="M 165,68 L 175,72" strokeWidth="1" />
      </g>

      {/* Position Markers */}
      <g fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle">
        {positionOffsets.map((offset, i) => i > 0 && (
          <text key={i} x={38 + offset} y={85}>{i}</text>
        ))}
      </g>

    </svg>
  );
};
