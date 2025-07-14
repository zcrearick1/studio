
'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface FluteFingeringDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
}

// Key sub-component
const Key = ({
  cx,
  cy,
  id,
  activeKeys,
  onClick,
  isSmall = false,
  isLever = false,
  isEllipse = false,
  width,
  height,
  radius,
  d,
}: {
  cx: number;
  cy: number;
  id: string;
  activeKeys?: string[];
  onClick?: (id: string) => void;
  isSmall?: boolean;
  isLever?: boolean;
  isEllipse?: boolean;
  width?: number;
  height?: number;
  radius?: number;
  d?: string;
}) => {
  const isActive = activeKeys?.includes(id);
  const keyClass = isActive ? 'fill-primary stroke-foreground' : 'fill-card stroke-foreground';
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  if (d) {
    return (
        <path
            d={d}
            className={cn('transition-colors', keyClass, interactiveClass)}
            strokeWidth="1.5"
            onClick={handleClick}
            transform={`translate(${cx}, ${cy})`}
        />
    )
  }

  if (isLever) {
    const w = width || 10;
    const h = height || 10;
    return (
      <rect
        x={cx - w / 2}
        y={cy - h / 2}
        width={w}
        height={h}
        rx="3"
        ry="3"
        className={cn('transition-colors', keyClass, interactiveClass)}
        strokeWidth="1.5"
        onClick={handleClick}
      />
    );
  }

  if (isEllipse) {
    const rx = width || 6;
    const ry = height || 4;
    return (
        <ellipse
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            className={cn('transition-colors', keyClass, interactiveClass)}
            strokeWidth="1.5"
            onClick={handleClick}
        />
    )
  }
  
  const r = radius !== undefined ? radius : isSmall ? 6 : 9;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className={cn('transition-colors', keyClass, interactiveClass)}
      strokeWidth="1.5"
      onClick={handleClick}
    />
  );
};


export const FluteFingeringDiagram: FC<FluteFingeringDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
}) => {
  return (
    <svg
      viewBox="0 0 400 100"
      className={cn('w-full h-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Instrument Body */}
      <path
        d="M2 48 h96 a6 5 180 0 1 0 4 h-96
        M2 48 a6 5 180 0 1 0 4
        M2.5 48 a6 5 180 0 1 0 4
        M10.5 48 a6 5 180 0 1 0 4
        M11 48 a6 5 180 0 1 0 4
        M2 48 a6 5 180 0 0 0 4
        M75.5 48 a6 5 180 0 1 0 4
        M76 48 a6 5 180 0 1 0 4"
        stroke="hsl(var(--foreground))"
        strokeWidth=".2"
        transform="scale (4) translate(0, -40)"
        fill="hsl(var(--muted))"
      />
    
      {/* Thumb Keys */}
      <g transform="scale(1.2) translate(-15, 0)">
        <Key cx={90} cy={5} id="thumb-b" activeKeys={activeKeys} onClick={onClickKey} d="M50 50 h-12 q-3 0 -3 3.5 q0 2.4 5 2 q2 0 3 -2 q0.5 -2.5 7 -2.5 Z" />
        <Key cx={90} cy={5} id="thumb-bflat" activeKeys={activeKeys} onClick={onClickKey} d="M43 47.5 s-16 -2 -16 4 a1 1.4 180 0 0 7 -1 a1.5 1.5 0 0 1 1.5 -1.5 h7.5 Z" />
      </g>

      {/* Left Hand Keys */}
      <Key cx={130} cy={38} id="L1" activeKeys={activeKeys} onClick={onClickKey} radius={7} />
      <Key cx={155} cy={38} id="L2" activeKeys={activeKeys} onClick={onClickKey} radius={7} />
      <Key cx={180} cy={38} id="L3" activeKeys={activeKeys} onClick={onClickKey} radius={7} />

      {/* Bb Lever */}
      <Key cx={120} cy={30} id="L1-b-flat" activeKeys={activeKeys} onClick={onClickKey} isLever width={25} height={8} />

      {/* G# Pinky Key */}
      <Key cx={135} cy={-8} id="pinky-gsharp" activeKeys={activeKeys} onClick={onClickKey} d="M57 45 s2 -13 -5 -14 a2 1 180 0 0 1 7 s2 0 2 7 Z" />

      {/* Right Hand Keys */}
      <Key cx={230} cy={38} id="R1" activeKeys={activeKeys} onClick={onClickKey} radius={7} />
      <Key cx={255} cy={38} id="R2" activeKeys={activeKeys} onClick={onClickKey} radius={7} />
      <Key cx={280} cy={38} id="R3" activeKeys={activeKeys} onClick={onClickKey} radius={7} />

      {/* Trill Keys */}
      <Key cx={243} cy={42} id="trill-d" activeKeys={activeKeys} onClick={onClickKey} isEllipse width={3} height={5} />
      <Key cx={268} cy={42} id="trill-dsharp" activeKeys={activeKeys} onClick={onClickKey} isEllipse width={3} height={5} />
      
      {/* Footjoint Keys (Pinky Keys) */}
      <Key cx={320} cy={42} id="foot-dsharp" activeKeys={activeKeys} onClick={onClickKey} isLever width={8} height={15} />
      <Key cx={330} cy={45} id="foot-csharp" activeKeys={activeKeys} onClick={onClickKey} isLever width={10} height={7} />
      <Key cx={330} cy={37} id="foot-c" activeKeys={activeKeys} onClick={onClickKey} isLever width={10} height={5} />

    </svg>
  );
};
