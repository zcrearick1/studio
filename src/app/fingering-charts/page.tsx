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
import {
  TrebleClefIcon,
  BassClefIcon,
  AltoClefIcon,
  PercussionClefIcon,
  SharpIcon,
  FlatIcon,
  NaturalIcon,
} from "@/components/icons";

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

const Staff = ({ clef, note }: { clef: Instrument['clef']; note: ParsedNote }) => {
  const getNoteYPosition = (pNote: ParsedNote) => {
    if (!pNote) return -1000;

    const notePositions: { [key: string]: number } = {
      C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6,
    };

    const step = notePositions[pNote.letter];
    const octave = pNote.octave;

    let baseStep = 0;
    // Base step is the position of C4 on the staff for the given clef
    if (clef === "treble") baseStep = 7; // C4 is on ledger line below staff
    if (clef === "bass") baseStep = -1; // C4 is on ledger line above staff
    if (clef === "alto") baseStep = 0; // C4 is on middle line

    const staffPosition = (step - baseStep) + (octave - 4) * 7;
    // Adjust for sharps, each sharp raises the visual position slightly
    const accidentalOffset = pNote.accidental === 'sharp' ? -0.5 : 0;
    return 50 - (staffPosition + accidentalOffset) * 5; // 5px per step, starting from middle
  };
  
  const y = getNoteYPosition(note);

  const renderClef = () => {
    switch (clef) {
      case "treble": return <TrebleClefIcon className="absolute -left-1 -top-2 text-foreground" style={{ transform: "scale(1.2)"}} />;
      case "bass": return <BassClefIcon className="absolute -left-1 top-2 text-foreground" style={{ transform: "scale(1.2)"}} />;
      case "alto": return <AltoClefIcon className="absolute left-0 top-0 text-foreground" style={{ transform: "scale(1.2)"}} />;
      case "percussion": return <PercussionClefIcon className="absolute left-0 top-0 text-foreground" style={{ transform: "scale(1.2)"}} />;
      default: return null;
    }
  };
  
  const renderAccidental = () => {
      if (!note) return null;
      const props = { className: "absolute text-foreground", style: { top: `${y-20}px`, left: '35px' }};
      switch(note.accidental) {
          case 'sharp': return <SharpIcon {...props} />;
          case 'flat': return <FlatIcon {...props} />;
          // Natural is implicitly handled by note position, no icon needed unless cancelling
          default: return null;
      }
  }

  return (
    <div className="relative w-full h-24 my-4">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-20">
        {/* Staff Lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-foreground/50 h-px" style={{ top: `${20 + i * 10}px`, position: 'absolute', width: '100%' }}></div>
        ))}
        {/* Clef */}
        {renderClef()}
        {/* Note */}
        {note && (
            <>
                {/* Accidental */}
                {renderAccidental()}
                {/* Note Head */}
                <div className="absolute rounded-full bg-foreground w-[13px] h-[10px]" style={{ top: `${y-5}px`, left: '60px' }}></div>
                {/* Note Stem */}
                <div className="absolute bg-foreground w-0.5" style={{ top: `${y-20}px`, left: `${60+12}px`, height: '25px' }}></div>
            </>
        )}
      </div>
    </div>
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
    // When instrument changes, set the note to the first available fingering or a default
    const firstNoteOfInstrument = selectedInstrument?.fingerings[0]?.note.split('/')[0];
    let initialIndex = defaultNoteIndex;
    if (firstNoteOfInstrument) {
        const indexInScale = chromaticScaleWithOctaves.indexOf(firstNoteOfInstrument);
        if (indexInScale !== -1) {
            initialIndex = indexInScale;
        }
    }
    setCurrentNoteIndex(initialIndex);
  }, [selectedInstrumentName, defaultNoteIndex]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const firstInstrumentInCategory = instruments.find(i => i.category === category);
    setSelectedInstrumentName(firstInstrumentInCategory?.name || "");
  };
  
  const handleInstrumentChange = (instrumentName: string) => {
    setSelectedInstrumentName(instrumentName);
  };
  
  const changeNote = (direction: 'up' | 'down') => {
      const step = direction === 'up' ? 1 : -1;
      let nextIndex = currentNoteIndex + step;
      // Wrap around the scale
      if (nextIndex < 0) nextIndex = chromaticScaleWithOctaves.length - 1;
      if (nextIndex >= chromaticScaleWithOctaves.length) nextIndex = 0;
      setCurrentNoteIndex(nextIndex);
  }

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
                  <Button variant="outline" size="icon" onClick={() => changeNote('up')}>
                    <ArrowUp className="h-5 w-5" />
                    <span className="sr-only">Note Up</span>
                  </Button>
                  <div className="text-center font-mono text-lg">{currentNoteName}</div>
                  <Button variant="outline" size="icon" onClick={() => changeNote('down')}>
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
