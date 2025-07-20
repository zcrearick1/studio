'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface TrumpetFingeringDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
  fill?: string;
}

const Valve = ({
  x,
  id,
  activeKeys,
  onClick,
  fill,
  isThumb = false,
}: {
  x: number;
  id: string;
  activeKeys?: string[];
  onClick?: (id: string) => void;
  fill?: string;
  isThumb?: boolean;
}) => {
  const isActive = activeKeys?.includes(id);
  const valveClass = isActive ? 'fill-primary stroke-foreground' : 'fill-card stroke-foreground';
  const interactiveClass = onClick ? 'cursor-pointer' : '';
  const stemHeight = isActive ? 10 : 25;

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };
  
  if (isThumb) {
    return (
       <g onClick={handleClick} className={interactiveClass}>
        <rect x={x - 10} y={45} width={10} height={30} rx="3" className={cn(valveClass)} strokeWidth="1.5" />
       </g>
    )
  }

  return (
    <g onClick={handleClick} className={interactiveClass}>
      {/* Layer 1: The static valve casing body */}
      <rect x={x} y="50" width="30" height="20" rx="3" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="1" />
      
      {/* Layer 2: The top of the casing. This is drawn before the stem. */}
      <ellipse cx={x + 15} cy="50" rx="15" ry="5" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      
      {/* Layer 3: The moving valve stem and cap. Drawn on top of the casing. */}
      <g transform={isActive ? 'translate(0, 15)' : 'translate(0, 0)'} className="transition-transform duration-100 ease-in-out">
          {/* Stem is drawn first, so the cap sits on top of it. */}
          <rect x={x + 12} y="25" width="6" height={stemHeight} className={cn(valveClass)} strokeWidth="1.5" />
          
          {/* Cylindrical Cap */}
          <g className={cn(valveClass)} strokeWidth="1.5">
            {/* The "sides" of the cylinder, drawn as a rectangle. */}
            <rect x={x + 3} y="21" width="24" height="5" />
            {/* The bottom ellipse of the cap, drawn first to be in the back. */}
            <ellipse cx={x + 15} cy="26" rx="12" ry="5" />
            {/* The top ellipse of the cap, drawn last to be in the front. */}
            <ellipse cx={x + 15} cy="21" rx="12" ry="5" />
          </g>
      </g>
      
      {/* Layer 4: A small, dark ellipse to create the illusion of a hole for the stem. Drawn last so it's on top. */}
      <ellipse cx={x + 15} cy="50" rx="4" ry="1.5" fill={fill ?? "hsl(var(--foreground))"} opacity="1" />
    </g>
  );
};


export const TrumpetFingeringDiagram: FC<TrumpetFingeringDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
  fill,
}) => {
  return (
    <svg
      viewBox="0 0 160 100"
      className={cn('w-full h-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
        <Valve x={20} id="v1" activeKeys={activeKeys} onClick={onClickKey} fill={fill} />
        <Valve x={65} id="v2" activeKeys={activeKeys} onClick={onClickKey} fill={fill} />
        <Valve x={110} id="v3" activeKeys={activeKeys} onClick={onClickKey} fill={fill} />
        {activeKeys?.includes('T') && <Valve x={0} id="T" activeKeys={activeKeys} isThumb />}
    </svg>
  );
};
