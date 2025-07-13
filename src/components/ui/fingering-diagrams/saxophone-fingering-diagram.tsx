
'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface SaxophoneFingeringDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
}

const Key = ({
    cx, cy, id, activeKeys, onClick,
    isSmall = false, isSide = false, isPalm = false, isSpatula = false, r = 10, width, height, rx = 5
}: {
    cx: number; cy: number; id: string; activeKeys?: string[];
    onClick?: (id: string) => void; isSmall?: boolean;
    isSide?: boolean; isPalm?: boolean; isSpatula?: boolean; r?: number;
    width?: number; height?: number; rx?: number;
}) => {
    const isActive = activeKeys?.includes(id);
    const keyClass = isActive ? 'fill-primary stroke-foreground' : 'fill-card stroke-foreground';
    const interactiveClass = onClick ? 'cursor-pointer' : '';

    const handleClick = () => {
        if (onClick) onClick(id);
    };

    if (isSide) {
        return <ellipse cx={cx} cy={cy} rx={width || r * 0.6} ry={height || r * 1.2} className={cn('transition-colors', keyClass, interactiveClass)} strokeWidth="1.5" onClick={handleClick} />;
    }
    if (isPalm || isSpatula) {
        return <rect x={cx - (width || r*1.2)/2} y={cy - (height || r)/2} width={width || r*1.2} height={height || r} rx={rx} ry={rx} className={cn('transition-colors', keyClass, interactiveClass)} strokeWidth="1.5" onClick={handleClick} />;
    }

    return <circle cx={cx} cy={cy} r={r} className={cn('transition-colors', keyClass, interactiveClass)} strokeWidth="1.5" onClick={handleClick} />;
};


export const SaxophoneFingeringDiagram: FC<SaxophoneFingeringDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
}) => {
  return (
    <svg
      viewBox="0 0 140 400"
      className={cn('w-auto h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
       <path
        d="M45,0 l0 70 a10 10 180 0 0 22 0 s0 -20 3 -25 l-10 -5 s-4 1 -4 30 L50 5 L50 0 Z
        M45 5, L50 5"
        fill="hsl(var(--muted))"
        stroke="hsl(var(--foreground))"
        strokeWidth=".5"
        transform="scale(4) translate(-41,10)"
      />
      
      {/* Octave Key */}
      <Key cx={30} cy={100} id="octave" activeKeys={activeKeys} onClick={onClickKey} isPalm r={6} />
      
      {/* Low A key (Bari) */}
      <Key cx={40} cy={100} id="low-a" activeKeys={activeKeys} onClick={onClickKey} isSmall r={5}/>

      {/* Left Hand Keys */}
      <Key cx={30} cy={130} id="L1" activeKeys={activeKeys} onClick={onClickKey} r={9}/>
      <Key cx={30} cy={155} id="L2" activeKeys={activeKeys} onClick={onClickKey} r={9}/>
      <Key cx={30} cy={180} id="L3" activeKeys={activeKeys} onClick={onClickKey} r={9}/>
      <Key cx={40} cy={155} id="bis" activeKeys={activeKeys} onClick={onClickKey} isSmall r={6}/>

      {/* Left Pinky Spatula */}
      <g>
        <Key cx={60} cy={235} id="lp-g-sharp" activeKeys={activeKeys} onClick={onClickKey} isSpatula width={15} height={8} rx={3} />
        <Key cx={60} cy={255} id="lp-c-sharp" activeKeys={activeKeys} onClick={onClickKey} isSpatula width={7} height={8} rx={3} />
        <Key cx={60} cy={275} id="lp-b" activeKeys={activeKeys} onClick={onClickKey} isSpatula width={7} height={8} rx={3} />
        <Key cx={60} cy={295} id="lp-b-flat" activeKeys={activeKeys} onClick={onClickKey} isSpatula width={15} height={8} rx={3} />
      </g>
      
      {/* Palm Keys */}
      <g>
        <Key cx={35} cy={125} id="palm-d" activeKeys={activeKeys} onClick={onClickKey} isPalm r={8} />
        <Key cx={30} cy={145} id="palm-e-flat" activeKeys={activeKeys} onClick={onClickKey} isPalm r={8} />
        <Key cx={25} cy={165} id="palm-f" activeKeys={activeKeys} onClick={onClickKey} isPalm r={8} />
      </g>
      
      {/* Right Hand Keys */}
      <Key cx={30} cy={230} id="R1" activeKeys={activeKeys} onClick={onClickKey} r={9}/>
      <Key cx={30} cy={255} id="R2" activeKeys={activeKeys} onClick={onClickKey} r={9}/>
      <Key cx={30} cy={280} id="R3" activeKeys={activeKeys} onClick={onClickKey} r={9}/>
      
      {/* High F# key */}
      <Key cx={80} cy={235} id="high-f-sharp" activeKeys={activeKeys} onClick={onClickKey} isSmall r={5}/>

      {/* Right Pinky Keys */}
      <g>
        <Key cx={95} cy={260} id="rp-e-flat" activeKeys={activeKeys} onClick={onClickKey} isSpatula width={20} height={12} />
        <Key cx={95} cy={280} id="rp-c" activeKeys={activeKeys} onClick={onClickKey} isSpatula width={20} height={12} />
      </g>
      
      {/* Right Hand Side Keys */}
      <g>
        <Key cx={95} cy={310} id="side-b-flat" activeKeys={activeKeys} onClick={onClickKey} isSide r={6} />
        <Key cx={95} cy={330} id="side-c" activeKeys={activeKeys} onClick={onClickKey} isSide r={6} />
        <Key cx={95} cy={350} id="side-e" activeKeys={activeKeys} onClick={onClickKey} isSide r={6} />
      </g>

    </svg>
  );
};
