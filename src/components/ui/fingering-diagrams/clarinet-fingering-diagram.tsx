'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface ClarinetFingeringDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
}

// A simple component to render a circle for a key
const Key = ({
  cx,
  cy,
  id,
  activeKeys,
  onClick,
  isSmall = false,
  isSide = false,
}: {
  cx: number;
  cy: number;
  id: string;
  activeKeys?: string[];
  onClick?: (id: string) => void;
  isSmall?: boolean;
  isSide?: boolean;
}) => {
  const isActive = activeKeys?.includes(id);
  const r = isSmall ? 4 : 6;
  const keyClass = isActive ? 'fill-primary stroke-foreground' : 'fill-card stroke-foreground';
  const strokeWidth = isSide ? 1 : 1.5;
  const interactiveClass = onClick ? 'cursor-pointer' : '';
  
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  }

  if (isSide) {
      return <rect x={cx-r} y={cy-r/2} width={r*2} height={r} rx={3} ry={3} className={cn('transition-colors', keyClass, interactiveClass)} strokeWidth={strokeWidth} onClick={handleClick} />
  }

  return (
    <circle cx={cx} cy={cy} r={r} className={cn('transition-colors', keyClass, interactiveClass)} strokeWidth={strokeWidth} onClick={handleClick} />
  );
};

export const ClarinetFingeringDiagram: FC<ClarinetFingeringDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
}) => {
  return (
    <svg
      viewBox="0 0 100 220"
      className={cn('w-auto h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Instrument Body */}
      <path
        transform="translate(0, 10)"
        fill="hsl(var(--muted))"
        d="M50 0 s-6 -2 -6 6 l-2 26 v132 q-2 20 -10 30 Q32 200 50 200 M50 0 s6 -2 6 6 l2 26 v132 q2 20 10 30 Q68 200 50 200"
        stroke="hsl(var(--foreground))"
        strokeWidth=".2"
      />

      {/* Keys */}
      {/* Register Key */}
      <Key cx={25} cy={25} id="register" activeKeys={activeKeys} onClick={onClickKey} isSmall />

      {/* Thumb Hole */}
      <Key cx={50} cy={37} id="thumb" activeKeys={activeKeys} onClick={onClickKey} />
      
      {/* Left Hand Keys */}
      <Key cx={50} cy={61} id="L1" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={79} id="L2" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={97} id="L3" activeKeys={activeKeys} onClick={onClickKey} />
      
      {/* A Key */}
      <Key cx={25} cy={70} id="A" activeKeys={activeKeys} isSmall />

      {/* Right Hand Keys */}
      <Key cx={50} cy={133} id="R1" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={151} id="R2" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={169} id="R3" activeKeys={activeKeys} onClick={onClickKey} />

      {/* Left Pinky Keys */}
      <Key cx={20} cy={115} id="LP-E" activeKeys={activeKeys} onClick={onClickKey} isSide />
      <Key cx={20} cy={124} id="LP-F-sharp" activeKeys={activeKeys} onClick={onClickKey} isSide />

      {/* Right Pinky Keys */}
      <Key cx={80} cy={187} id="RP-F" activeKeys={activeKeys} onClick={onClickKey} isSide />
      <Key cx={80} cy={196} id="RP-E-flat" activeKeys={activeKeys} onClick={onClickKey} isSide />
      
      {/* G# key */}
       <Key cx={25} cy={106} id="G-sharp" activeKeys={activeKeys} onClick={onClickKey} isSmall />

    </svg>
  );
};
