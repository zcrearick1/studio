'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface BassoonFingeringDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
}

const Key = ({
    cx, cy, id, activeKeys, onClick, r,
    isRect = false, width, height,
    label, labelX, labelY
}: {
    cx: number; cy: number; id: string; activeKeys?: string[]; onClick?: (id: string) => void;
    r: number; isRect?: boolean; width?: number; height?: number;
    label?: string; labelX?: number; labelY?: number;
}) => {
    const isActive = activeKeys?.includes(id);
    const keyClass = isActive ? 'fill-primary stroke-foreground' : 'fill-card stroke-foreground';
    const interactiveClass = onClick ? 'cursor-pointer' : '';

    const handleClick = () => {
        if (onClick) onClick(id);
    };

    return (
        <g onClick={handleClick} className={interactiveClass}>
            {isRect ? (
                <rect x={cx - (width || 0) / 2} y={cy - (height || 0) / 2} width={width} height={height} rx="2" className={cn('transition-colors', keyClass)} strokeWidth="1" />
            ) : (
                <circle cx={cx} cy={cy} r={r} className={cn('transition-colors', keyClass)} strokeWidth="1.5" />
            )}
            {label && <text x={labelX || cx} y={labelY || cy} textAnchor="middle" dominantBaseline="middle" fontSize="8" className="fill-muted-foreground pointer-events-none">{label}</text>}
        </g>
    );
};

export const BassoonFingeringDiagram: FC<BassoonFingeringDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
}) => {
  return (
    <svg
      viewBox="0 0 100 240"
      className={cn('w-auto h-full', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
        {/* Instrument Body */}
        <path d="M 40 10 L 40 230 L 60 230 L 60 10 Z" fill="hsl(var(--muted))" stroke="hsl(var(--foreground))" strokeWidth="0.5" />

        {/* --- LEFT HAND --- */}
        {/* Left Thumb (Whisper, etc.) */}
        <Key cx={25} cy={60} id="whisper" activeKeys={activeKeys} onClick={onClickKey} r={5} label="W" />
        <Key cx={25} cy={80} id="lt-csharp" activeKeys={activeKeys} onClick={onClickKey} r={5} label="C#" />
        <Key cx={25} cy={100} id="lt-a" activeKeys={activeKeys} onClick={onClickKey} r={5} label="A" />
        <Key cx={25} cy={120} id="lt-c" activeKeys={activeKeys} onClick={onClickKey} r={5} label="C" />
        <Key cx={25} cy={140} id="lt-d" activeKeys={activeKeys} onClick={onClickKey} r={5} label="D" />
        <Key cx={25} cy={160} id="lt-bb" activeKeys={activeKeys} onClick={onClickKey} r={5} label="Bb" />
        
        {/* Left Hand Fingers */}
        <Key cx={50} cy={70} id="L1" activeKeys={activeKeys} onClick={onClickKey} r={9} />
        <Key cx={50} cy={95} id="L2" activeKeys={activeKeys} onClick={onClickKey} r={9} />
        <Key cx={50} cy={120} id="L3" activeKeys={activeKeys} onClick={onClickKey} r={9} />

        {/* Left Pinky */}
        <Key cx={35} cy={145} id="lp-ab" activeKeys={activeKeys} onClick={onClickKey} isRect width={8} height={12} />
        

        {/* --- RIGHT HAND --- */}
        {/* Right Thumb */}
        <Key cx={75} cy={155} id="rt-d" activeKeys={activeKeys} onClick={onClickKey} isRect width={10} height={8} label="D" labelX={82} />
        <Key cx={75} cy={165} id="rt-c" activeKeys={activeKeys} onClick={onClickKey} isRect width={10} height={8} label="C" labelX={82} />
        <Key cx={75} cy={175} id="rt-b" activeKeys={activeKeys} onClick={onClickKey} isRect width={10} height={8} label="B" labelX={82} />
        <Key cx={75} cy={185} id="rt-bb" activeKeys={activeKeys} onClick={onClickKey} isRect width={10} height={8} label="Bb" labelX={82} />
        <Key cx={75} cy={195} id="rt-csharp" activeKeys={activeKeys} onClick={onClickKey} r={5} label="C#" />
        <Key cx={75} cy={205} id="rt-eb" activeKeys={activeKeys} onClick={onClickKey} r={5} label="Eb" />

        {/* Right Hand Fingers */}
        <Key cx={50} cy={160} id="R1" activeKeys={activeKeys} onClick={onClickKey} r={9} />
        <Key cx={50} cy={185} id="R2" activeKeys={activeKeys} onClick={onClickKey} r={9} />
        <Key cx={50} cy={210} id="R3" activeKeys={activeKeys} onClick={onClickKey} r={9} />
    </svg>
  );
};
