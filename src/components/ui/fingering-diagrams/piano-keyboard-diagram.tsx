
'use client';

import { cn } from '@/lib/utils';
import type { FC } from 'react';

interface PianoKeyboardDiagramProps {
  activeKeys?: string[];
  className?: string;
  onClickKey?: (keyId: string) => void;
  startNote?: string;
  octaves?: number;
}

const whiteKeyNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const blackKeyNames = ['C#', 'D#', 'F#', 'G#', 'A#'];

const Key = ({
  note,
  isBlack,
  x,
  width,
  height,
  isActive,
  onClick,
}: {
  note: string;
  isBlack: boolean;
  x: number;
  width: number;
  height: number;
  isActive: boolean;
  onClick?: (note: string) => void;
}) => {
  const keyClass = isActive ? 'fill-primary' : isBlack ? 'fill-foreground' : 'fill-card stroke-foreground';
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  const handleClick = () => {
    if (onClick) onClick(note);
  };
  
  return (
    <rect
      x={x}
      y={isBlack ? 0 : 0}
      width={width}
      height={height}
      className={cn('transition-colors', keyClass, interactiveClass)}
      strokeWidth="1"
      onClick={handleClick}
    />
  );
};

export const PianoKeyboardDiagram: FC<PianoKeyboardDiagramProps> = ({
  activeKeys = [],
  className,
  onClickKey,
  startNote = 'C4',
  octaves = 2,
}) => {
  const whiteKeyWidth = 25;
  const blackKeyWidth = 15;
  const keyboardHeight = 100;

  const renderKeys = () => {
    const keys = [];
    let currentX = 0;
    
    // Just a simple two octave C to C display for now. Can be made dynamic later.
    const notesInOrder = [
      'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4',
      'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5'
    ];
    
    const whiteKeys = notesInOrder.filter(n => !n.includes('#'));
    const blackKeys = notesInOrder.filter(n => n.includes('#'));

    // Render white keys first
    for(const note of whiteKeys) {
      keys.push(
        <Key
          key={note}
          note={note}
          isBlack={false}
          x={currentX}
          width={whiteKeyWidth}
          height={keyboardHeight}
          isActive={activeKeys.includes(note)}
          onClick={onClickKey}
        />
      );
      currentX += whiteKeyWidth;
    }

    // Render black keys on top
    let blackKeyOffset = whiteKeyWidth - blackKeyWidth / 2;

    for(const note of blackKeys) {
        const noteLetter = note.substring(0,2);
        if (noteLetter === "C#" || noteLetter === "D#") {
           // No change
        } else if (noteLetter === "F#" || noteLetter === "G#" || noteLetter === "A#") {
           blackKeyOffset += whiteKeyWidth;
        }

        const octave = parseInt(note.slice(-1));
        if (octave > 4) {
            blackKeyOffset += whiteKeyWidth * 7;
        }

       keys.push(
        <Key
          key={note}
          note={note}
          isBlack={true}
          x={blackKeyOffset}
          width={blackKeyWidth}
          height={keyboardHeight * 0.6}
          isActive={activeKeys.includes(note)}
          onClick={onClickKey}
        />
      );

       if (noteLetter === 'D#') {
           blackKeyOffset += whiteKeyWidth;
       }
       
       blackKeyOffset += whiteKeyWidth;
    }


    return keys;
  }

  const totalWidth = whiteKeyNames.length * octaves * whiteKeyWidth;

  return (
    <svg
      viewBox={`-1 -1 ${totalWidth + 2} ${keyboardHeight + 2}`}
      className={cn('w-full h-auto', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderKeys()}
    </svg>
  );
};
