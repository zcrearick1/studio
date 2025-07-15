'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface TromboneFingeringDiagramProps {
  activePosition?: number;
  className?: string;
}

// Map slide position number to a pixel offset. 1st position is 0.
const positionOffsets = [
    0,   // Position Placeholder
    0,   // Position 1
    30,  // Position 2
    60,  // Position 3
    90,  // Position 4
    120, // Position 5
    150, // Position 6
    180, // Position 7
];

export const TromboneFingeringDiagram: FC<TromboneFingeringDiagramProps> = ({
  activePosition = 1,
  className,
}) => {
  const slideX = positionOffsets[activePosition] || 0;

  return (
    <svg
      viewBox="0 0 220 100"
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

      {/* Trombone Body */}
      <g id="bell-section" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="0.5">
        {/* Bell */}
        <path d="M0 35 s70 0 85 -30 a1 3 0 0 1 0 70 s-10 -30 -85 -30" />
      </g>
      
      {/* Inner slide (static part) */}
      <g id="inner-slide" fill="hsl(var(--card))" stroke="hsl(var(--foreground))" strokeWidth="0.5">
          <rect x="4" y="60" width="200" height="2" />
          <rect x="4" y="80" width="200" height="2" />
      </g>

      {/* Outer slide (moving part) */}
      <g 
        id="outer-slide" 
        transform={`translate(${slideX}, 0)`}
        className="transition-transform duration-300 ease-in-out"
        fill="hsl(var(--primary))"
        stroke="hsl(var(--foreground))"
        strokeWidth="0.4"
      >
        {/* Outer Slide Tubes */}
        <path d="M0 59 h200 a1 1 0 0 1 0 24 h-200 v-4 h200 a1 1 0 0 0 0 -16 h-200 Z
        M10 63 v16 h3 v-16 Z" />
      </g>

      <g
        id="trombone-mouthpiece"
        fill="hsl(var(--muted)"
        stroke="hsl(var(--foreground))"
        strokeWidth=".4"
      >
       <rect x="0" y="58" width="4" height="26" />
      </g>

      {/* Position Markers */}
      <g fill="hsl(var(--muted-foreground))" fontSize="10" textAnchor="middle">
        {positionOffsets.map((offset, i) => i > 0 && (
          <text key={i} x={13 + offset} y={100}>{i}</text>
        ))}
      </g>
    </svg>
  );
};
