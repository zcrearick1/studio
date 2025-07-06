'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface TrumpetFingeringDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
}

const Valve = ({
  x,
  id,
  activeKeys,
  onClick,
}: {
  x: number;
  id: string;
  activeKeys?: string[];
  onClick?: (id: string) => void;
}) => {
  const isActive = activeKeys?.includes(id);
  const valveClass = isActive ? 'fill-primary' : 'fill-card stroke-foreground';
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <g onClick={handleClick} className={interactiveClass}>
        {/* Valve Stem and Cap - Drawn first to appear behind the casing top */}
        <g transform={isActive ? 'translate(0, 10)' : 'translate(0, 0)'} className="transition-transform duration-100 ease-in-out">
            {/* Stem */}
            <rect x={x + 12} y="25" width="6" height="25" className={cn(valveClass)} strokeWidth="1.5" />
            {/* Cap */}
            <ellipse cx={x + 15} cy="25" rx="12" ry="5" className={cn(valveClass)} strokeWidth="1.5" />
        </g>
        
        {/* Valve Casing (main body) */}
        <rect x={x} y="50" width="30" height="20" rx="3" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="1" />

        {/* Casing Top - Drawn last to create cylindrical illusion and cover stem */}
        <ellipse cx={x + 15} cy="50" rx="15" ry="5" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="1" />
    </g>
  );
};


export const TrumpetFingeringDiagram: FC<TrumpetFingeringDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
}) => {
  return (
    <svg
      viewBox="0 0 160 100"
      className={cn('w-full h-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
        <Valve x={20} id="v1" activeKeys={activeKeys} onClick={onClickKey} />
        <Valve x={65} id="v2" activeKeys={activeKeys} onClick={onClickKey} />
        <Valve x={110} id="v3" activeKeys={activeKeys} onClick={onClickKey} />
    </svg>
  );
};
