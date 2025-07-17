'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Instrument, Fingering } from '@/lib/instrument-types';
import Image from 'next/image';
import { ClarinetFingeringDiagram } from "./ui/fingering-diagrams/clarinet-fingering-diagram";
import { TrumpetFingeringDiagram } from "./ui/fingering-diagrams/trumpet-fingering-diagram";
import { FluteFingeringDiagram } from "./ui/fingering-diagrams/flute-fingering-diagram";
import { SaxophoneFingeringDiagram } from "./ui/fingering-diagrams/saxophone-fingering-diagram";
import { BassoonFingeringDiagram } from "./ui/fingering-diagrams/bassoon-fingering-diagram";
import { PianoKeyboardDiagram } from "./ui/fingering-diagrams/piano-keyboard-diagram";
import { MalletPercussionDiagram } from "./ui/fingering-diagrams/mallet-percussion-diagram";
import { TromboneFingeringDiagram } from "./ui/fingering-diagrams/trombone-fingering-diagram";
import { 
    TREBLE_CLEF_PATH, BASS_CLEF_BODY_PATH, BASS_CLEF_DOT1_PATH, BASS_CLEF_DOT2_PATH, 
    ALTO_CLEF_PATH_C, ALTO_CLEF_PATH_LEFT_BAR, ALTO_CLEF_PATH_RIGHT_BAR, 
    PERCUSSION_CLEF_PATH, SHARP_PATH, FLAT_PATH
} from "@/components/icons";

type ParsedNote = {
  letter: string;
  accidental: "sharp" | "flat" | "natural";
  octave: number;
} | null;


function parseNoteString(noteStr: string): ParsedNote {
  if (!noteStr) return null;
  const simpleNote = noteStr.split("/")[0].trim();
  
  const match = simpleNote.match(/([A-G])([#b]?)([0-9])/);
  if (!match) return null;

  let [, letter, accidentalSymbol, octaveStr] = match;
  let accidental: "sharp" | "flat" | "natural" = "natural";
  
  if (accidentalSymbol === "#") {
      accidental = "sharp";
  } else if (accidentalSymbol === "b") {
      accidental = "flat";
  }
  
  return { letter, accidental, octave: parseInt(octaveStr, 10) };
}


const MiniStaff = ({ clef, note }: { clef: Instrument['clef']; note: ParsedNote }) => {
    const STAFF_WIDTH = 100;
    const STAFF_HEIGHT = 80;
    const LINE_SPACING = 8;
    const TOP_MARGIN = (STAFF_HEIGHT - 4 * LINE_SPACING) / 2;
    const NOTE_X = 60;

    const getNoteYPosition = (pNote: ParsedNote) => {
        if (!pNote) return -1000;
        const notePositions: { [key: string]: number } = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
        const step = notePositions[pNote.letter];
        const octave = pNote.octave;
        const noteValue = (step + (octave - 4) * 7);
        let baseStep = 0;
        if (clef === "treble") baseStep = 6;
        if (clef === "bass") baseStep = -6;
        if (clef === "alto") baseStep = 0;
        const staffPosition = noteValue - baseStep;
        return (STAFF_HEIGHT / 2) - (staffPosition * (LINE_SPACING / 2));
    };

    const y = getNoteYPosition(note);

    const renderClef = () => {
        switch (clef) {
            case "treble": return <path d={TREBLE_CLEF_PATH} fill="currentColor" transform="translate(5, 75) scale(0.018, -0.018)" />;
            case "bass": return <g transform="translate(10, 60) scale(0.005, -0.005)" fillRule="evenodd"><path d={BASS_CLEF_BODY_PATH} fill="currentColor" /><path d={BASS_CLEF_DOT1_PATH} fill="currentColor" /><path d={BASS_CLEF_DOT2_PATH} fill="currentColor" /></g>;
            case "alto": return <g transform="translate(5, 65) scale(0.014, -0.014)" fill="currentColor"><path d={ALTO_CLEF_PATH_C} /><path d={ALTO_CLEF_PATH_LEFT_BAR} /><path d={ALTO_CLEF_PATH_RIGHT_BAR} /></g>;
            case "percussion": return <path d={PERCUSSION_CLEF_PATH} fill="currentColor" transform="translate(5, 63) scale(0.017, -0.017)" />;
            default: return null;
        }
    };
    
    const renderAccidental = () => {
        if (!note || note.accidental === "natural") return null;
        const accidentalX = NOTE_X - 18;
        switch (note.accidental) {
            case 'sharp': return <path d={SHARP_PATH} fill="currentColor" fillRule="evenodd" transform={`translate(${accidentalX}, ${y+7}) scale(0.007, -0.007)`} />;
            case 'flat': return <path d={FLAT_PATH} fill="currentColor" fillRule="evenodd" transform={`translate(${accidentalX-2}, ${y+5}) scale(0.009, -0.009)`} />;
            default: return null;
        }
    }

    const renderLedgerLines = () => {
        if (!note) return [];
        const lines = [];
        const staffTopY = TOP_MARGIN;
        const staffBottomY = TOP_MARGIN + 4 * LINE_SPACING;
        if (y < staffTopY - (LINE_SPACING / 2)) {
            for (let lineY = staffTopY - LINE_SPACING; lineY >= y - (LINE_SPACING/4); lineY -= LINE_SPACING) {
                 lines.push(<line key={`lt-${lineY}`} x1={NOTE_X - 7} y1={lineY} x2={NOTE_X + 7} y2={lineY} stroke="currentColor" strokeWidth="1" />);
            }
        }
        if (y > staffBottomY + (LINE_SPACING / 2)) {
            for (let lineY = staffBottomY + LINE_SPACING; lineY <= y + (LINE_SPACING/4); lineY += LINE_SPACING) {
                lines.push(<line key={`lb-${lineY}`} x1={NOTE_X - 7} y1={lineY} x2={NOTE_X + 7} y2={lineY} stroke="currentColor" strokeWidth="1" />);
            }
        }
        return lines;
    };

    const renderNote = () => {
        if (!note) return null;
        const noteHeadY = y;
        const middleStaffY = STAFF_HEIGHT / 2;
        const stemDown = noteHeadY <= middleStaffY;
        const stemX = stemDown ? NOTE_X - 4 : NOTE_X + 4;
        const stemEndY = stemDown ? noteHeadY + 25 : noteHeadY - 25;
        return (
            <g>
                {renderLedgerLines()}
                {renderAccidental()}
                <ellipse cx={NOTE_X} cy={noteHeadY} rx="5" ry="4" fill="currentColor" transform={`rotate(-10 ${NOTE_X} ${noteHeadY})`} />
                <line x1={stemX} y1={noteHeadY} x2={stemX} y2={stemEndY} stroke="currentColor" strokeWidth="1" />
            </g>
        )
    }

    return (
        <svg viewBox={`0 0 ${STAFF_WIDTH} ${STAFF_HEIGHT}`} className="w-full h-16 text-foreground">
            {[...Array(5)].map((_, i) => (
                <line key={i} x1="10" y1={TOP_MARGIN + i * LINE_SPACING} x2={STAFF_WIDTH - 10} y2={TOP_MARGIN + i * LINE_SPACING} stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
            ))}
            {renderClef()}
            {renderNote()}
        </svg>
    );
};


export const FingeringCard = ({ instrument, fingering }: { instrument: Instrument, fingering: Fingering }) => {
    const noteForStaff = parseNoteString(fingering.note);
    const displayNote = fingering.note.split('/')[0];
    const isKeyboard = ['piano', 'mallet-percussion'].includes(instrument.slug);
    const isTrombone = instrument.slug === 'trombone';
    const isTall = ['clarinet', 'alto-saxophone', 'tenor-saxophone', 'baritone-saxophone', 'bassoon'].includes(instrument.slug);

    const FingeringDiagram = () => {
        if (fingering.keys) {
            switch(instrument.slug) {
                case 'clarinet': return <ClarinetFingeringDiagram activeKeys={fingering.keys} />;
                case 'flute': return <FluteFingeringDiagram activeKeys={fingering.keys} />;
                case 'alto-saxophone':
                case 'tenor-saxophone':
                case 'baritone-saxophone':
                     return <SaxophoneFingeringDiagram activeKeys={fingering.keys} />;
                case 'bassoon': return <BassoonFingeringDiagram activeKeys={fingering.keys} />;
                case 'trumpet': 
                case 'baritone-bc':
                case 'baritone-tc':
                case 'tuba':
                    return <TrumpetFingeringDiagram activeKeys={fingering.keys} />;
                case 'piano': return <PianoKeyboardDiagram activeKeys={fingering.keys} />;
                case 'mallet-percussion': return <MalletPercussionDiagram activeKeys={fingering.keys} />;
                default: break;
            }
        }
        if (fingering.positions && isTrombone) {
            return <TromboneFingeringDiagram activePosition={parseInt(fingering.positions[0])} />;
        }
        if (fingering.imageUrl) {
            return <Image src={fingering.imageUrl} alt={`Fingering for ${displayNote}`} fill className="object-contain" />;
        }
        return <p className="text-xs text-muted-foreground break-words">{fingering.positions.join(' ')}</p>;
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="p-2 flex-shrink-0">
                <CardTitle className="text-center text-sm font-medium">{displayNote}</CardTitle>
            </CardHeader>
            <CardContent className="p-2 flex-grow flex flex-col items-center justify-center gap-2">
                <div className="w-full">
                    <MiniStaff clef={instrument.clef} note={noteForStaff} />
                </div>
                <div className={`w-full flex-grow flex items-center justify-center ${isKeyboard || isTrombone ? 'h-16' : isTall ? 'h-24' : 'h-20'}`}>
                    <FingeringDiagram />
                </div>
            </CardContent>
        </Card>
    );
};
