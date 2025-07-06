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
  const r = isSmall ? 5 : 10;
  const keyClass = isActive ? 'fill-primary' : 'fill-card stroke-foreground';
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
      viewBox="0 0 100 400"
      className={cn('w-full h-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Instrument Body */}
      <rect x="35" y="10" width="30" height="380" rx="5" fill="hsl(var(--muted))" />

      {/* Keys */}
      {/* Register Key */}
      <Key cx={25} cy={40} id="register" activeKeys={activeKeys} onClick={onClickKey} isSmall />

      {/* Thumb Hole */}
      <Key cx={50} cy={60} id="thumb" activeKeys={activeKeys} onClick={onClickKey} />
      
      {/* Left Hand Keys */}
      <Key cx={50} cy={100} id="L1" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={130} id="L2" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={160} id="L3" activeKeys={activeKeys} onClick={onClickKey} />
      
      {/* A Key */}
      <Key cx={25} cy={115} id="A" activeKeys={activeKeys} isSmall />

      {/* Right Hand Keys */}
      <Key cx={50} cy={220} id="R1" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={250} id="R2" activeKeys={activeKeys} onClick={onClickKey} />
      <Key cx={50} cy={280} id="R3" activeKeys={activeKeys} onClick={onClickKey} />

      {/* Left Pinky Keys */}
      <Key cx={20} cy={190} id="LP-E" activeKeys={activeKeys} onClick={onClickKey} isSide />
      <Key cx={20} cy={205} id="LP-F-sharp" activeKeys={activeKeys} onClick={onClickKey} isSide />

      {/* Right Pinky Keys */}
      <Key cx={80} cy={310} id="RP-F" activeKeys={activeKeys} onClick={onClickKey} isSide />
      <Key cx={80} cy={325} id="RP-E-flat" activeKeys={activeKeys} onClick={onClickKey} isSide />
      
      {/* G# key */}
       <Key cx={25} cy={175} id="G-sharp" activeKeys={activeKeys} onClick={onClickKey} isSmall />

    </svg>
  );
};
