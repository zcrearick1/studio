
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

type ParsedNote = {
  letter: string;
  accidental: "sharp" | "flat" | "natural";
  octave: number;
} | null;

// A comprehensive chromatic scale to represent the staff
const noteOrder = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const chromaticScaleWithOctaves = Array.from({ length: 7 * 12 }, (_, i) => {
    const octave = Math.floor(i / 12);
    const noteName = noteOrder[i % 12];
    return `${noteName}${octave}`;
});

// A mapping for flat names to their sharp equivalents for lookups
const flatToSharpMap: { [key: string]: string } = {
  Db: "C#", Eb: "D#", Gb: "F#", Ab: "G#", Bb: "A#",
};

function parseNoteString(noteStr: string): ParsedNote {
  if (!noteStr) return null;
  const simpleNote = noteStr.split("/")[0].trim();
  const match = simpleNote.match(/([A-G])([#b]?)([0-9])/);
  if (!match) return null;

  let [, letter, accidentalSymbol, octaveStr] = match;
  let accidental: "sharp" | "flat" | "natural" = "natural";
  if (accidentalSymbol === "#") accidental = "sharp";
  if (accidentalSymbol === "b") {
      accidental = "flat";
      // We internally use sharps for consistency in the chromatic scale
      letter = flatToSharpMap[`${letter}b`]?.charAt(0) || letter;
  }
  
  return {
    letter,
    accidental,
    octave: parseInt(octaveStr, 10),
  };
}

// SVG Path data for clefs and accidentals
const TREBLE_CLEF_PATH = "M890 2694 c-50 -46 -104 -152 -126 -250 -21 -95 -15 -244 15 -387 l21 -98 -108 -107 c-219 -216 -303 -389 -289 -595 10 -160 90 -290 238 -387 90 -58 155 -75 290 -75 l117 0 27 -132 c22 -102 27 -148 22 -197 -7 -73 -42 -153 -82 -184 -57 -45 -193 -53 -251 -15 l-28 18 42 7 c56 9 87 32 112 82 26 54 25 81 -2 136 -30 57 -76 83 -139 77 -60 -5 -102 -36 -124 -89 -46 -116 56 -270 196 -296 161 -30 301 64 328 223 13 72 12 81 -26 264 -23 111 -24 125 -10 133 129 72 210 212 211 368 0 103 -22 157 -95 230 -67 67 -142 102 -223 104 l-64 1 -27 126 -27 126 66 89 c140 189 202 364 194 554 -5 113 -22 177 -66 242 -51 78 -127 90 -192 32z m178 -189 c41 -121 -51 -359 -183 -474 -46 -40 -48 -37 -65 72 -22 137 1 265 66 359 34 49 99 89 139 86 25 -3 32 -9 43 -43z m-199 -873 c12 -50 21 -98 21 -105 0 -8 -27 -31 -59 -51 -102 -62 -161 -162 -161 -269 1 -97 59 -176 172 -233 l53 -27 -51 55 c-44 46 -53 62 -59 106 -13 99 38 201 117 231 27 10 27 10 42 -57 66 -298 87 -415 76 -426 -7 -7 -47 -11 -103 -11 -82 0 -99 4 -159 32 -199 94 -289 344 -191 530 23 44 271 328 279 320 2 -1 12 -44 23 -95z m217 -303 c57 -27 110 -88 125 -141 25 -93 -17 -230 -87 -283 -19 -15 -37 -25 -39 -23 -2 2 -25 100 -50 218 -25 118 -49 223 -51 233 -8 25 48 23 102 -4z";
const BASS_CLEF_PATH_MAIN = "M16.5,32C15.5,10,50,10,50,30C50,45,35,40,16.5,61V11.5";
const ALTO_CLEF_PATH = "M 36.9,81.2 C 36.9,81.2 36.9,20.5 36.9,20.5 L 36.9,178.5 M 62.6,81.2 C 62.6,81.2 62.6,20.5 62.6,20.5 L 62.6,178.5 M 21.1,51.8 C 21.1,51.8 49.8,20.5 49.8,20.5 C 49.8,20.5 78.4,51.8 78.4,51.8 M 21.1,147.8 C 21.1,147.8 49.8,178.5 49.8,178.5 C 49.8,178.5 78.4,147.8 78.4,147.8";
const PERCUSSION_CLEF_PATH = "M 20 20 L 20 80 M 80 20 L 80 80 M 10 50 L 90 50";
const SHARP_PATH = "M20,5L60,0L55,35L95,30L90,65L50,70L55,100L15,105L20,70L-20,75L-15,40L20,35Z";
const FLAT_PATH = "M15,5V70C40,60,40,45,15,35";

const Staff = ({ clef, note }: { clef: Instrument['clef']; note: ParsedNote }) => {
    const STAFF_HEIGHT = 100;
    const STAFF_WIDTH = 300;
    const LINE_SPACING = 10;
    const TOP_MARGIN = (STAFF_HEIGHT - 4 * LINE_SPACING) / 2;
    const NOTE_X = 150;

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
                return <path d={TREBLE_CLEF_PATH} fill="currentColor" transform="translate(10, 100) scale(0.04, -0.04)" />;
            case "bass":
                return (
                    <g transform="translate(15, -1) scale(0.8)">
                        <path d={BASS_CLEF_PATH_MAIN} fill="currentColor" />
                        <circle cx="58" cy="23.5" r="5.5" fill="currentColor" />
                        <circle cx="58" cy="45.5" r="5.5" fill="currentColor" />
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
                return <path d={SHARP_PATH} fill="currentColor" transform={`translate(${accidentalX}, ${y-15}) scale(0.3)`} />;
            case 'flat':
                return <path d={FLAT_PATH} fill="currentColor" transform={`translate(${accidentalX}, ${y-40}) scale(0.6)`} />;
            default:
                return null;
        }
    }

    const renderLedgerLines = () => {
        if (!note) return [];
        const lines = [];
        const staffTopY = TOP_MARGIN;
        const staffBottomY = TOP_MARGIN + 4 * LINE_SPACING;

        if (y < staffTopY) { // Top ledger lines
            for (let lineY = staffTopY - LINE_SPACING; lineY >= y - LINE_SPACING / 2; lineY -= LINE_SPACING) {
                lines.push(<line key={`ledger-top-${lineY}`} x1={NOTE_X - 10} y1={lineY} x2={NOTE_X + 10} y2={lineY} stroke="currentColor" strokeWidth="1" />);
            }
        }
        if (y > staffBottomY) { // Bottom ledger lines
            for (let lineY = staffBottomY + LINE_SPACING; lineY <= y + LINE_SPACING / 2; lineY += LINE_SPACING) {
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
  
  // State now tracks the index in our master chromatic scale
  const defaultNoteIndex = chromaticScaleWithOctaves.indexOf("C4");
  const [currentNoteIndex, setCurrentNoteIndex] = useState(defaultNoteIndex);

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
  
  const currentNoteName = chromaticScaleWithOctaves[currentNoteIndex];
  const parsedNote = parseNoteString(currentNoteName);

  const instrumentNoteRangeIndices = useMemo(() => {
    if (!selectedInstrument?.range) {
      return { min: 0, max: chromaticScaleWithOctaves.length - 1 };
    }
    
    const min = chromaticScaleWithOctaves.indexOf(selectedInstrument.range.low);
    const max = chromaticScaleWithOctaves.indexOf(selectedInstrument.range.high);

    // If a note isn't found, it might be a data issue. Return -1 to signal this.
    return { min, max };
  }, [selectedInstrument]);

  const changeNote = (direction: 'up' | 'down') => {
      const { min, max } = instrumentNoteRangeIndices;
      if (min === -1 || max === -1) return; // If range is invalid, do nothing.

      const step = direction === 'up' ? 1 : -1;
      const nextIndex = currentNoteIndex + step;
      
      if (nextIndex >= min && nextIndex <= max) {
        setCurrentNoteIndex(nextIndex);
      }
  };

  const canGoUp = instrumentNoteRangeIndices.max === -1 ? false : currentNoteIndex < instrumentNoteRangeIndices.max;
  const canGoDown = instrumentNoteRangeIndices.min === -1 ? false : currentNoteIndex > instrumentNoteRangeIndices.min;


  // Find the fingering for the current note, if it exists for the instrument
  const currentFingering = useMemo(() => {
    if (!selectedInstrument || !currentNoteName) return null;
    return selectedInstrument.fingerings.find(f => {
        const noteVariants = f.note.split('/');
        return noteVariants.some(v => v === currentNoteName);
    }) || null;
  }, [selectedInstrument, currentNoteName]);

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
    // When instrument changes, set the note to the bottom of its playable range.
    if (selectedInstrument?.range) {
      const lowIndex = chromaticScaleWithOctaves.indexOf(selectedInstrument.range.low);
      if (lowIndex !== -1) {
        setCurrentNoteIndex(lowIndex);
        return;
      }
    }
    // Fallback
    setCurrentNoteIndex(defaultNoteIndex);
  }, [selectedInstrumentName, defaultNoteIndex, selectedInstrument]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const firstInstrumentInCategory = instruments.find(i => i.category === category);
    setSelectedInstrumentName(firstInstrumentInCategory?.name || "");
  };
  
  const handleInstrumentChange = (instrumentName: string) => {
    setSelectedInstrumentName(instrumentName);
  };
  
  // This function is simplified as accidental is part of the note name now
  // For UI, we can keep it to quickly jump between note variations if needed
  const handleAccidentalClick = (targetAccidental: string) => {
      if(!parsedNote) return;
      const baseNote = `${parsedNote.letter}${parsedNote.octave}`;
      const sharpNote = `${parsedNote.letter}#${parsedNote.octave}`;
      
      let targetNote = baseNote;
      if (targetAccidental === '#') targetNote = sharpNote;
      // A more complex logic could handle flats here
      
      const newIndex = chromaticScaleWithOctaves.indexOf(targetNote);
      if (newIndex !== -1) {
          setCurrentNoteIndex(newIndex);
      }
  }

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
                <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 gap-4 h-full">
                  <Button variant="outline" size="icon" onClick={() => changeNote('up')} disabled={!canGoUp}>
                    <ArrowUp className="h-5 w-5" />
                    <span className="sr-only">Note Up</span>
                  </Button>
                  <div className="text-center font-mono text-lg">{currentNoteName}</div>
                  <Button variant="outline" size="icon" onClick={() => changeNote('down')} disabled={!canGoDown}>
                    <ArrowDown className="h-5 w-5" />
                    <span className="sr-only">Note Down</span>
                  </Button>
                </div>

                {/* Staff */}
                <div className="p-6">
                  <Staff clef={selectedInstrument.clef} note={parsedNote} />
                </div>
              </div>
            </Card>

            {/* Right Card for Fingering */}
            <Card className="flex flex-col justify-center">
              <div className="p-6 h-full flex flex-col justify-center text-center">
                {currentFingering ? (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary text-4xl">{currentFingering.note}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground break-words">{currentFingering.positions.join(' ')}</p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle className="text-2xl">{currentNoteName}</CardTitle>
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
