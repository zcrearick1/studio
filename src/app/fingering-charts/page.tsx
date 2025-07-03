
"use client";

import { useState, useMemo, useEffect } from "react";
import { instruments, Instrument, Fingering } from "@/lib/instrument-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, ArrowUp, ArrowDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type ParsedNote = {
  letter: string;
  accidental: "sharp" | "flat" | "natural";
  octave: number;
} | null;

// --- Note Logic Helpers ---

const noteValueMap: { [key: string]: number } = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const noteLetterMap: string[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];


// This function converts ANY note string ("Fb4", "C#5") to a unique integer (MIDI value).
function getMidiValue(note: string): number {
  if (!note) return -1;
  const match = note.match(/([A-G])([#b]*)(\d+)/);
  if (!match) return -1;

  let [, letter, accidentals, octaveStr] = match;
  const octave = parseInt(octaveStr, 10);
  let value = noteValueMap[letter as keyof typeof noteValueMap];

  for (const acc of accidentals) {
    if (acc === '#') value++;
    else if (acc === 'b') value--;
  }
  
  return 12 * (octave + 1) + value;
}

const sharpNoteNames: { [key: number]: string } = {0: "C", 1: "C#", 2: "D", 3: "D#", 4: "E", 5: "F", 6: "F#", 7: "G", 8: "G#", 9: "A", 10: "A#", 11: "B"};
const flatNoteNames: { [key: number]: string } = {0: "C", 1: "Db", 2: "D", 3: "Eb", 4: "E", 5: "F", 6: "Gb", 7: "G", 8: "Ab", 9: "A", 10: "Bb", 11: "B"};

function getNoteNameFromMidi(midi: number, preferred: 'sharp'|'flat'|'natural' = 'natural'): string {
    const octave = Math.floor(midi / 12) - 1;
    const pitchClass = (midi % 12 + 12) % 12;

    if (preferred === 'flat') {
      const flatName = flatNoteNames[pitchClass];
      if (flatName === 'Cb') return `Cb${octave + 1}`;
      if (flatName === 'Gb') return `Gb${octave}`;
      return `${flatNoteNames[pitchClass]}${octave}`;
    }
    
    const sharpName = sharpNoteNames[pitchClass];
     if (sharpName === 'B#') return `B#${octave - 1}`;
    
    // Default to sharps for chromatic notes if 'natural' is preferred
    return `${sharpNoteNames[pitchClass]}${octave}`;
}

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
  
  return {
    letter,
    accidental,
    octave: parseInt(octaveStr, 10),
  };
}

// SVG Path data for clefs and accidentals
const TREBLE_CLEF_PATH = "M890 2694 c-50 -46 -104 -152 -126 -250 -21 -95 -15 -244 15 -387 l21 -98 -108 -107 c-219 -216 -303 -389 -289 -595 10 -160 90 -290 238 -387 90 -58 155 -75 290 -75 l117 0 27 -132 c22 -102 27 -148 22 -197 -7 -73 -42 -153 -82 -184 -57 -45 -193 -53 -251 -15 l-28 18 42 7 c56 9 87 32 112 82 26 54 25 81 -2 136 -30 57 -76 83 -139 77 -60 -5 -102 -36 -124 -89 -46 -116 56 -270 196 -296 161 -30 301 64 328 223 13 72 12 81 -26 264 -23 111 -24 125 -10 133 129 72 210 212 211 368 0 103 -22 157 -95 230 -67 67 -142 102 -223 104 l-64 1 -27 126 -27 126 66 89 c140 189 202 364 194 554 -5 113 -22 177 -66 242 -51 78 -127 90 -192 32z m178 -189 c41 -121 -51 -359 -183 -474 -46 -40 -48 -37 -65 72 -22 137 1 265 66 359 34 49 99 89 139 86 25 -3 32 -9 43 -43z m-199 -873 c12 -50 21 -98 21 -105 0 -8 -27 -31 -59 -51 -102 -62 -161 -162 -161 -269 1 -97 59 -176 172 -233 l53 -27 -51 55 c-44 46 -53 62 -59 106 -13 99 38 201 117 231 27 10 27 10 42 -57 66 -298 87 -415 76 -426 -7 -7 -47 -11 -103 -11 -82 0 -99 4 -159 32 -199 94 -289 344 -191 530 23 44 271 328 279 320 2 -1 12 -44 23 -95z m217 -303 c57 -27 110 -88 125 -141 25 -93 -17 -230 -87 -283 -19 -15 -37 -25 -39 -23 -2 2 -25 100 -50 218 -25 118 -49 223 -51 233 -8 25 48 23 102 -4z";
const BASS_CLEF_BODY_PATH = "M1540 4990 c-222 -32 -339 -62 -506 -127 -347 -136 -624 -378 -764 -667 -81 -166 -119 -352 -107 -525 18 -266 179 -484 434 -586 136 -54 324 -70 468 -40 200 42 375 189 441 369 69 192 30 362 -116 507 -85 84 -162 128 -271 154 -89 21 -145 19 -284 -10 -144 -30 -190 -31 -232 -5 -45 27 -56 54 -50 119 8 78 66 188 139 267 159 169 470 310 749 339 143 15 358 -35 507 -117 446 -246 650 -766 556 -1418 -55 -382 -214 -848 -405 -1190 -177 -317 -335 -527 -583 -776 -328 -328 -490 -454 -1262 -982 l-251 -172 20 -62 c11 -35 21 -64 22 -66 7 -8 564 281 934 485 528 291 883 525 1206 794 219 183 532 509 693 722 188 249 360 587 426 838 50 189 60 270 60 489 -1 182 -4 219 -27 332 -40 188 -70 277 -152 443 -212 427 -555 705 -1019 825 -216 55 -479 81 -626 60z";
const BASS_CLEF_DOT1_PATH = "M3860 4494 c-94 -29 -186 -125 -211 -218 -16 -60 -7 -192 18 -248 30 -65 95 -133 162 -165 47 -24 68 -28 136 -27 69 0 91 5 147 31 78 37 135 90 169 159 20 41 24 64 24 144 0 111 -16 150 -93 233 -67 72 -146 107 -237 106 -38 0 -90 -7 -115 -15z";
const BASS_CLEF_DOT2_PATH = "M3915 3140 c-101 -15 -194 -82 -243 -175 -25 -45 -27 -60 -27 -160 0 -100 2 -115 27 -161 35 -67 115 -138 179 -159 58 -20 167 -23 225 -7 96 27 191 121 219 215 40 134 5 257 -99 355 -86 82 -170 109 -281 92z";
const ALTO_CLEF_PATH = "M 36.9,81.2 C 36.9,81.2 36.9,20.5 36.9,20.5 L 36.9,178.5 M 62.6,81.2 C 62.6,81.2 62.6,20.5 62.6,20.5 L 62.6,178.5 M 21.1,51.8 C 21.1,51.8 49.8,20.5 49.8,20.5 C 49.8,20.5 78.4,51.8 78.4,51.8 M 21.1,147.8 C 21.1,147.8 49.8,178.5 49.8,178.5 C 49.8,178.5 78.4,147.8 78.4,147.8";
const PERCUSSION_CLEF_PATH = "M 20 20 L 20 80 M 80 20 L 80 80 M 10 50 L 90 50";
const SHARP_PATH = "M1328 1998 l-3 -252 -215 -58 c-118 -31 -216 -58 -217 -58 -2 0 -3 99 -3 220 l0 220 -60 0 -60 0 0 -235 0 -234 -52 -15 c-29 -8 -75 -21 -103 -28 l-50 -14 -3 -122 c-1 -67 1 -122 5 -122 4 0 48 11 98 25 49 14 93 25 97 25 5 0 8 -142 8 -315 l0 -314 -48 -14 c-26 -8 -73 -20 -105 -27 l-57 -13 0 -124 c0 -114 1 -124 18 -119 30 9 180 46 186 46 3 0 6 -106 6 -235 l0 -235 60 0 60 0 0 253 0 253 208 54 c114 29 213 55 220 58 10 4 12 -40 10 -217 l-3 -221 62 0 63 0 2 237 3 237 118 30 117 31 0 122 c0 68 -2 123 -4 123 -2 0 -55 -13 -117 -30 -63 -16 -115 -30 -117 -30 -1 0 -1 143 0 317 l3 316 118 31 117 30 0 124 c0 113 -1 123 -17 118 -10 -3 -56 -14 -103 -26 -47 -12 -93 -23 -102 -26 -17 -5 -18 11 -18 230 l0 236 -60 0 -60 0 -2 -252z m0 -815 l-3 -318 -215 -57 c-118 -31 -216 -57 -217 -57 -2 -1 -3 142 -3 317 l0 317 213 57 c116 31 215 57 220 57 4 1 6 -142 5 -316z";
const FLAT_PATH = "M910 1155 c0 -575 4 -1045 8 -1045 5 0 21 14 38 31 53 56 247 214 367 299 256 181 348 335 288 476 -12 28 -39 67 -59 87 -117 112 -287 116 -465 11 -32 -19 -60 -34 -63 -34 -2 0 -4 275 -4 610 l0 610 -55 0 -55 0 0 -1045z m366 -201 c50 -24 84 -87 84 -156 0 -105 -109 -271 -299 -453 l-41 -39 0 271 0 271 27 33 c67 80 156 108 229 73z";
const NATURAL_PATH = "M810 1359 c0 -843 1 -890 18 -885 9 3 126 32 260 64 l242 59 0 -298 0 -299 55 0 55 0 0 891 c0 843 -1 890 -17 885 -57 -17 -469 -116 -484 -116 -18 0 -19 14 -19 295 l0 295 -55 0 -55 0 0 -891z m517 -495 c-2 -2 -87 -24 -188 -49 -101 -25 -192 -48 -201 -51 -17 -5 -18 14 -18 310 l0 314 203 49 202 49 3 -310 c1 -170 1 -311 -1 -312z";

const Staff = ({ clef, note }: { clef: Instrument['clef']; note: ParsedNote }) => {
    const STAFF_HEIGHT = 100;
    const STAFF_WIDTH = 150;
    const LINE_SPACING = 10;
    const TOP_MARGIN = (STAFF_HEIGHT - 4 * LINE_SPACING) / 2;
    const NOTE_X = 100;

    const getNoteYPosition = (pNote: ParsedNote) => {
        if (!pNote) return -1000;

        const notePositions: { [key: string]: number } = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };
        const step = notePositions[pNote.letter];
        const octave = pNote.octave;
        const noteValue = (step + (octave - 4) * 7);

        let baseStep = 0; // baseStep is the diatonic value of the note on the middle line
        if (clef === "treble") baseStep = 6; // B4
        if (clef === "bass") baseStep = -6; // D3
        if (clef === "alto") baseStep = 0; // C4

        const staffPosition = noteValue - baseStep;
        return (STAFF_HEIGHT / 2) - (staffPosition * (LINE_SPACING / 2));
    };

    const y = getNoteYPosition(note);

    const renderClef = () => {
        switch (clef) {
            case "treble":
                return <path d={TREBLE_CLEF_PATH} fill="currentColor" transform="translate(5, 95) scale(0.03, -0.03)" />;
            case "bass":
                return (
                    <g transform="translate(15, 64.5) scale(0.007, -0.007)" fillRule="evenodd">
                        <path d={BASS_CLEF_BODY_PATH} fill="currentColor" />
                        <path d={BASS_CLEF_DOT1_PATH} fill="currentColor" />
                        <path d={BASS_CLEF_DOT2_PATH} fill="currentColor" />
                    </g>
                );
            case "alto":
                return <path d={ALTO_CLEF_PATH} stroke="currentColor" strokeWidth="5" fill="none" transform="translate(20, 0) scale(0.5)" />;
            case "percussion":
                return <path d={PERCUSSION_CLEF_PATH} stroke="currentColor" strokeWidth="6" fill="none" transform="translate(15, 25) scale(0.5)" />;
            default:
                return null;
        }
    };
    
    const renderAccidental = () => {
        if (!note || note.accidental === "natural") return null;
        const accidentalX = NOTE_X - 28;
        
        switch (note.accidental) {
            case 'sharp':
                return <path d={SHARP_PATH} fill="currentColor" fillRule="evenodd" transform={`translate(${accidentalX}, ${y+11}) scale(0.01, -0.01)`} />;
            case 'flat':
                return <path d={FLAT_PATH} fill="currentColor" fillRule="evenodd" transform={`translate(${accidentalX - 4}, ${y + 8}) scale(0.013, -0.013)`} />;
            default:
                return null;
        }
    }

    const renderLedgerLines = () => {
        if (!note) return [];
        const lines = [];
        const staffTopY = TOP_MARGIN;
        const staffBottomY = TOP_MARGIN + 4 * LINE_SPACING;

        // Notes need ledger lines only if they are on or beyond the first ledger line position.
        const firstLedgerAbove = staffTopY - LINE_SPACING;
        const firstLedgerBelow = staffBottomY + LINE_SPACING;

        // Top ledger lines
        if (y <= firstLedgerAbove + (LINE_SPACING / 2)) { 
            for (let lineY = staffTopY - LINE_SPACING; lineY >= y - (LINE_SPACING/2); lineY -= LINE_SPACING) {
                 lines.push(<line key={`ledger-top-${lineY}`} x1={NOTE_X - 10} y1={lineY} x2={NOTE_X + 10} y2={lineY} stroke="currentColor" strokeWidth="1" />);
            }
        }
        // Bottom ledger lines
        if (y >= firstLedgerBelow - (LINE_SPACING / 2)) {
            for (let lineY = staffBottomY + LINE_SPACING; lineY <= y + (LINE_SPACING/2); lineY += LINE_SPACING) {
                lines.push(<line key={`ledger-bottom-${lineY}`} x1={NOTE_X - 10} y1={lineY} x2={NOTE_X + 10} y2={lineY} stroke="currentColor" strokeWidth="1" />);
            }
        }
        return lines;
    };

    const renderNote = () => {
        if (!note) return null;
        const noteHeadY = y;
        const middleStaffY = STAFF_HEIGHT / 2;
        const stemDown = noteHeadY <= middleStaffY;
        const stemX = stemDown ? NOTE_X - 6 : NOTE_X + 6;
        const stemEndY = stemDown ? noteHeadY + 30 : noteHeadY - 30;

        return (
            <g>
                {renderLedgerLines()}
                {renderAccidental()}
                <ellipse cx={NOTE_X} cy={noteHeadY} rx="6.5" ry="5" fill="currentColor" />
                <line x1={stemX} y1={noteHeadY} x2={stemX} y2={stemEndY} stroke="currentColor" strokeWidth="1.5" />
            </g>
        )
    }

    return (
        <svg viewBox={`0 0 ${STAFF_WIDTH} ${STAFF_HEIGHT}`} className="w-full h-auto text-foreground">
            {/* Staff Lines */}
            {[...Array(5)].map((_, i) => (
                <line
                    key={i}
                    x1="10"
                    y1={TOP_MARGIN + i * LINE_SPACING}
                    x2={STAFF_WIDTH - 10}
                    y2={TOP_MARGIN + i * LINE_SPACING}
                    stroke="currentColor"
                    strokeOpacity="0.5"
                    strokeWidth="1"
                />
            ))}
            {renderClef()}
            {renderNote()}
        </svg>
    );
};


export default function FingeringChartsPage() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("Woodwind");
  const [selectedInstrumentName, setSelectedInstrumentName] = useState<string>("");
  const [preferredAccidental, setPreferredAccidental] = useState<'sharp' | 'flat' | 'natural'>('natural');
  const [currentNote, setCurrentNote] = useState("C4");

  const instrumentCategories = [...new Set(instruments.map(i => i.category))];
  const categoryOrder = ["Woodwind", "Brass", "String", "Percussion"];
  const sortedCategories = instrumentCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  const selectedInstrument = useMemo(
    () => instruments.find((i) => i.name === selectedInstrumentName),
    [selectedInstrumentName]
  );
  
  const instrumentNoteRangeMidi = useMemo(() => {
    if (!selectedInstrument?.range) {
      return { min: 0, max: 127 };
    }
    const min = getMidiValue(selectedInstrument.range.low);
    const max = getMidiValue(selectedInstrument.range.high);
    return { min: min === -1 ? 0 : min, max: max === -1 ? 127 : max };
  }, [selectedInstrument]);

  const noteLetters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const changeNote = (direction: 'up' | 'down') => {
      const parsedNote = parseNoteString(currentNote);
      if (!parsedNote) return;

      const { letter, accidental, octave } = parsedNote;

      const currentLetterIndex = noteLetters.indexOf(letter);
      let nextLetterIndex;
      let nextOctave = octave;

      if (direction === 'up') {
          nextLetterIndex = (currentLetterIndex + 1) % 7;
          if (letter === 'B') {
              nextOctave++;
          }
      } else { // 'down'
          nextLetterIndex = (currentLetterIndex - 1 + 7) % 7;
          if (letter === 'C') {
              nextOctave--;
          }
      }

      const nextLetter = noteLetters[nextLetterIndex];
      let accidentalSymbol = '';
      if (accidental === 'sharp') accidentalSymbol = '#';
      if (accidental === 'flat') accidentalSymbol = 'b';
      
      const nextNoteName = `${nextLetter}${accidentalSymbol}${nextOctave}`;
      const nextMidi = getMidiValue(nextNoteName);
      
      if (nextMidi >= instrumentNoteRangeMidi.min && nextMidi <= instrumentNoteRangeMidi.max) {
          setCurrentNote(nextNoteName);
      }
  };

  const [canGoUp, canGoDown] = useMemo(() => {
    const parsedNote = parseNoteString(currentNote);
    if (!parsedNote || !selectedInstrument) return [false, false];

    const { min: minMidi, max: maxMidi } = instrumentNoteRangeMidi;
    const { letter, accidental, octave } = parsedNote;
    let accidentalSymbol = '';
    if (accidental === 'sharp') accidentalSymbol = '#';
    if (accidental === 'flat') accidentalSymbol = 'b';

    // Check Up
    const upLetterIndex = (noteLetters.indexOf(letter) + 1) % 7;
    const upLetter = noteLetters[upLetterIndex];
    const upOctave = letter === 'B' ? octave + 1 : octave;
    const nextUpNoteName = `${upLetter}${accidentalSymbol}${upOctave}`;
    const nextUpMidi = getMidiValue(nextUpNoteName);
    const upAllowed = nextUpMidi !== -1 && nextUpMidi <= maxMidi;

    // Check Down
    const downLetterIndex = (noteLetters.indexOf(letter) - 1 + 7) % 7;
    const downLetter = noteLetters[downLetterIndex];
    const downOctave = letter === 'C' ? octave - 1 : octave;
    const nextDownNoteName = `${downLetter}${accidentalSymbol}${downOctave}`;
    const nextDownMidi = getMidiValue(nextDownNoteName);
    const downAllowed = nextDownMidi !== -1 && nextDownMidi >= minMidi;

    return [upAllowed, downAllowed];
  }, [currentNote, instrumentNoteRangeMidi, selectedInstrument]);


  const getDisplayNote = (noteName: string, preferred: 'sharp' | 'flat' | 'natural') => {
    if (!selectedInstrument || !noteName) return noteName;

    const midi = getMidiValue(noteName);
    if (midi === -1) return noteName;

    const fingering = selectedInstrument.fingerings.find(f => {
        const noteVariants = f.note.split('/');
        return noteVariants.some(variant => getMidiValue(variant) === midi);
    });

    // If no specific fingering found, generate a name based on preference
    if (!fingering) {
        return getNoteNameFromMidi(midi, preferred);
    }
    
    const noteVariants = fingering.note.split('/');
    if (noteVariants.length === 1) return noteVariants[0];

    // Try to find a variant that matches the preferred accidental
    if (preferred === 'flat') {
        const flatVariant = noteVariants.find(v => v.includes('b'));
        if (flatVariant) return flatVariant;
    }
     if (preferred === 'sharp') {
        const sharpVariant = noteVariants.find(v => v.includes('#'));
        if (sharpVariant) return sharpVariant;
    }
    
    // If preference doesn't match, check the current note's accidental
    const currentParsed = parseNoteString(noteName);
    if (currentParsed?.accidental === 'flat') {
       const flatVariant = noteVariants.find(v => v.includes('b'));
       if (flatVariant) return flatVariant;
    }
    if (currentParsed?.accidental === 'sharp') {
       const sharpVariant = noteVariants.find(v => v.includes('#'));
       if (sharpVariant) return sharpVariant;
    }

    // Default to the first listed variant
    return noteVariants[0];
  };
  
  const currentDisplayNote = getDisplayNote(currentNote, preferredAccidental);
  
  const currentFingering = useMemo(() => {
    if (!selectedInstrument || !currentNote) return null;
    const currentMidi = getMidiValue(currentNote);
    if (currentMidi === -1) return null;
    
    return selectedInstrument.fingerings.find(f => {
        const noteVariants = f.note.split('/');
        return noteVariants.some(variant => getMidiValue(variant) === currentMidi);
    }) || null;
  }, [selectedInstrument, currentNote]);

  useEffect(() => {
    const instrumentSlug = searchParams.get('instrument');
    const targetInstrument = instruments.find(i => i.slug === instrumentSlug);

    if (targetInstrument) {
      setActiveCategory(targetInstrument.category);
      setSelectedInstrumentName(targetInstrument.name);
    } else if (!selectedInstrumentName) {
      const firstWoodwind = instruments.find(i => i.category === "Woodwind");
      if (firstWoodwind) {
        setSelectedInstrumentName(firstWoodwind.name);
      }
    }
  }, [searchParams, selectedInstrumentName]);
  
  useEffect(() => {
    if (selectedInstrument?.range) {
      const lowNoteMidi = getMidiValue(selectedInstrument.range.low);
      const highNoteMidi = getMidiValue(selectedInstrument.range.high);
      const currentNoteMidi = getMidiValue(currentNote);
      
      if (currentNoteMidi < lowNoteMidi || currentNoteMidi > highNoteMidi) {
         setCurrentNote(selectedInstrument.range.low);
         setPreferredAccidental('natural');
      }
    }
  }, [selectedInstrument, currentNote]);
  
  useEffect(() => {
    const displayMidi = getMidiValue(currentDisplayNote);
    const currentMidi = getMidiValue(currentNote);
    if(displayMidi !== currentMidi) {
      setCurrentNote(currentDisplayNote);
    }
  }, [preferredAccidental, currentDisplayNote, currentNote]);


  const handleAccidentalChange = (newAccidental: 'sharp' | 'flat' | 'natural') => {
      setPreferredAccidental(newAccidental);
      
      const parsed = parseNoteString(currentNote);
      if (!parsed) return;
      
      let accidentalSymbol = '';
      if (newAccidental === 'sharp') accidentalSymbol = '#';
      else if (newAccidental === 'flat') accidentalSymbol = 'b';

      let targetNoteName = `${parsed.letter}${accidentalSymbol}${parsed.octave}`;

      const finalMidi = getMidiValue(targetNoteName);
      
      if (finalMidi >= instrumentNoteRangeMidi.min && finalMidi <= instrumentNoteRangeMidi.max) {
        setCurrentNote(targetNoteName);
      }
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const firstInstrumentInCategory = instruments.find(i => i.category === category);
    setSelectedInstrumentName(firstInstrumentInCategory?.name || "");
  };
  
  const handleInstrumentChange = (instrumentName: string) => {
    setSelectedInstrumentName(instrumentName);
  };
  
  const noteForStaff = parseNoteString(currentDisplayNote);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Interactive Fingering Chart</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Select an instrument and use the controls to find the fingering for any note.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              {sortedCategories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {sortedCategories.map(category => (
              <TabsContent key={category} value={category}>
                <Select
                  value={selectedInstrumentName}
                  onValueChange={handleInstrumentChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select an instrument" />
                  </SelectTrigger>
                  <SelectContent>
                    {instruments
                      .filter((i) => i.category === category)
                      .map((instrument) => (
                        <SelectItem key={instrument.name} value={instrument.name}>
                          {instrument.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
      
      {selectedInstrument && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-6">{selectedInstrument.name} Fingerings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Card for Controls and Staff */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-[auto_1fr] items-center h-full">
                {/* Controls */}
                <div className="flex flex-col items-center justify-between p-4 bg-secondary/50 h-full border-r">
                    <div className="flex flex-col items-center gap-4">
                        <Button variant="outline" size="icon" onClick={() => changeNote('up')} disabled={!canGoUp}>
                            <ArrowUp className="h-5 w-5" />
                            <span className="sr-only">Note Up</span>
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => changeNote('down')} disabled={!canGoDown}>
                            <ArrowDown className="h-5 w-5" />
                            <span className="sr-only">Note Down</span>
                        </Button>
                    </div>
                    <div className="flex flex-col justify-center gap-1 pt-4 border-t w-full">
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn('h-8 w-8', {
                                'bg-accent hover:bg-accent/90 text-accent-foreground': preferredAccidental === 'flat',
                            })}
                            onClick={() => handleAccidentalChange('flat')}
                            disabled={preferredAccidental === 'flat'}
                        >
                            <svg viewBox="0 0 2250 2250" className="w-auto h-4" fillRule="evenodd">
                                <g transform="scale(1, -1) translate(0, -2250)">
                                    <path d={FLAT_PATH} fill="currentColor" />
                                </g>
                            </svg>
                            <span className="sr-only">Flat</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn('h-8 w-8', {
                                'bg-accent hover:bg-accent/90 text-accent-foreground': preferredAccidental === 'natural',
                            })}
                            onClick={() => handleAccidentalChange('natural')}
                            disabled={preferredAccidental === 'natural'}
                        >
                             <svg viewBox="0 0 225 225" className="w-auto h-4" fillRule="evenodd">
                               <g transform="translate(0, 225) scale(0.1, -0.1)">
                                <path d={NATURAL_PATH} fill="currentColor" />
                               </g>
                            </svg>
                            <span className="sr-only">Natural</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn('h-8 w-8', {
                                'bg-accent hover:bg-accent/90 text-accent-foreground': preferredAccidental === 'sharp',
                            })}
                            onClick={() => handleAccidentalChange('sharp')}
                            disabled={preferredAccidental === 'sharp'}
                        >
                             <svg viewBox="0 0 2250 2250" className="w-auto h-4" fillRule="evenodd">
                                <g transform="scale(1, -1) translate(0, -2250)">
                                  <path d={SHARP_PATH} fill="currentColor" />
                                </g>
                            </svg>
                            <span className="sr-only">Sharp</span>
                        </Button>
                    </div>
                </div>

                {/* Staff */}
                <div className="p-3">
                  <Staff clef={selectedInstrument.clef} note={noteForStaff} />
                </div>
              </div>
            </Card>

            {/* Right Card for Fingering */}
            <Card className="flex flex-col justify-center">
              <div className="p-6 h-full flex flex-col justify-center text-center">
                {currentFingering ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary text-4xl">{currentDisplayNote}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground break-words">{currentFingering.positions.join(' ')}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle className="text-2xl">{currentDisplayNote}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Fingering not available for this instrument.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
