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
  isPinky = false,
  width,
  height,
}: {
  cx: number;
  cy: number;
  id: string;
  activeKeys?: string[];
  onClick?: (id: string) => void;
  isSmall?: boolean;
  isLever?: boolean;
  isPinky?: boolean;
  width?: number;
  height?: number;
}) => {
  const isActive = activeKeys?.includes(id);
  const keyClass = isActive ? 'fill-primary stroke-foreground' : 'fill-card stroke-foreground';
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  if (isLever || isPinky) {
    const w = width || (isPinky ? 20 : 10);
    const h = height || (isPinky ? 15 : 10);
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
  
  const r = isSmall ? 6 : 9;
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
        M10 48 a6 5 180 0 1 0 4
        M11 48 a6 5 180 0 1 0 4
        M2 48 a6 5 180 0 0 0 4"
        stroke="hsl(var(--foreground))"
        strokeWidth=".2"
        transform="scale (4) translate(0, -40)"
        fill="hsl(var(--muted))"
      />

      {/* Thumb Keys */}
      <Key cx={80} cy={75} id="thumb-b" activeKeys={activeKeys} onClick={onClickKey} isLever width={10} height={20} />
      <Key cx={65} cy={75} id="thumb-csharp" activeKeys={activeKeys} onClick={onClickKey} isLever width={10} height={20} />

      {/* Left Hand Keys */}
      <Key cx={110} cy={50} id="L1" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={135} cy={50} id="L2" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={160} cy={50} id="L3" activeKeys={activeKeys} onClick={onClickKey} />

      {/* Bb Lever */}
      <Key cx={120} cy={30} id="L1-b-flat" activeKeys={activeKeys} onClick={onClickKey} isLever width={25} height={8} />

      {/* G# Pinky Key */}
      <Key cx={185} cy={60} id="pinky-gsharp" activeKeys={activeKeys} onClick={onClickKey} isLever width={20} height={10} />

      {/* Right Hand Keys */}
      <Key cx={220} cy={50} id="R1" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={245} cy={50} id="R2" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={270} cy={50} id="R3" activeKeys={activeKeys} onClick={onClickKey} />

      {/* Trill Keys */}
      <Key cx={295} cy={35} id="trill-d" activeKeys={activeKeys} onClick={onClickKey} isLever width={8} height={12} />
      <Key cx={310} cy={35} id="trill-dsharp" activeKeys={activeKeys} onClick={onClickKey} isLever width={8} height={12} />
      
      {/* Footjoint Keys (Pinky Keys) */}
      <Key cx={320} cy={70} id="foot-dsharp" activeKeys={activeKeys} onClick={onClickKey} isPinky />
      <Key cx={350} cy={70} id="foot-csharp" activeKeys={activeKeys} onClick={onClickKey} isPinky />
      <Key cx={380} cy={70} id="foot-c" activeKeys={activeKeys} onClick={onClickKey} isPinky />

    </svg>
  );
};
