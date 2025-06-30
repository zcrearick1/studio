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
import { cn } from "@/lib/utils";

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

  const [, letter, accidentalSymbol, octaveStr] = match;
  let accidental: "sharp" | "flat" | "natural" = "natural";
  if (accidentalSymbol === "#") accidental = "sharp";
  if (accidentalSymbol === "b") accidental = "flat";

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
    if (clef === "treble") baseStep = 6; // C4 is on ledger line below staff
    if (clef === "bass") baseStep = -2; // C4 is on ledger line above staff
    if (clef === "alto") baseStep = 0; // C4 is on middle line

    const staffPosition = (step - baseStep) + (octave - 4) * 7;
    return 50 - staffPosition * 5; // 5px per step, starting from middle
  };
  
  const y = getNoteYPosition(note);

  const renderClef = () => {
    switch (clef) {
      case "treble": return <TrebleClefIcon className="absolute -left-1 -top-8 text-foreground" style={{ transform: "scale(1.2)"}} />;
      case "bass": return <BassClefIcon className="absolute -left-1 -top-6 text-foreground" style={{ transform: "scale(1.2)"}} />;
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
          case 'natural': return <NaturalIcon {...props} />;
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
  const [currentFingeringIndex, setCurrentFingeringIndex] = useState(0);

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

  const currentFingering = selectedInstrument?.fingerings[currentFingeringIndex];
  const parsedNote = currentFingering ? parseNoteString(currentFingering.note) : null;
  
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
    setCurrentFingeringIndex(0);
  }, [selectedInstrumentName]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const firstInstrumentInCategory = instruments.find(i => i.category === category);
    setSelectedInstrumentName(firstInstrumentInCategory?.name || "");
  };
  
  const handleInstrumentChange = (instrumentName: string) => {
    setSelectedInstrumentName(instrumentName);
  };
  
  const changeNote = (direction: 'up' | 'down') => {
      if (!selectedInstrument) return;
      const nextIndex = currentFingeringIndex + (direction === 'up' ? 1 : -1);
      if (nextIndex >= 0 && nextIndex < selectedInstrument.fingerings.length) {
          setCurrentFingeringIndex(nextIndex);
      }
  }

  const handleAccidentalChange = (accidental: '#'|'b'|'') => {
      if (!parsedNote || !selectedInstrument) return;
      const targetNoteString = `${parsedNote.letter}${accidental}${parsedNote.octave}`;
      const newIndex = selectedInstrument.fingerings.findIndex(f => f.note.startsWith(targetNoteString));
      if (newIndex !== -1) {
          setCurrentFingeringIndex(newIndex);
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
            
            {selectedInstrument.fingerings.length > 0 && currentFingering ? (
                <Card className="max-w-3xl mx-auto overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center">
                        {/* Controls */}
                        <div className="flex flex-col items-center justify-center p-4 bg-secondary/50 gap-4">
                            <Button variant="outline" size="icon" onClick={() => changeNote('up')}>
                                <ArrowUp className="h-5 w-5" />
                                <span className="sr-only">Note Up</span>
                            </Button>
                            <div className="flex gap-2">
                                <Button variant={parsedNote?.accidental === 'sharp' ? 'default' : 'outline'} size="icon" onClick={() => handleAccidentalChange('#')}>
                                    <SharpIcon className="h-5 w-5 p-0.5" />
                                </Button>
                                 <Button variant={parsedNote?.accidental === 'natural' ? 'default' : 'outline'} size="icon" onClick={() => handleAccidentalChange('')}>
                                    <NaturalIcon className="h-5 w-5 p-0.5" />
                                </Button>
                                <Button variant={parsedNote?.accidental === 'flat' ? 'default' : 'outline'} size="icon" onClick={() => handleAccidentalChange('b')}>
                                    <FlatIcon className="h-5 w-5 p-0.5" />
                                </Button>
                            </div>
                            <Button variant="outline" size="icon" onClick={() => changeNote('down')}>
                                <ArrowDown className="h-5 w-5" />
                                 <span className="sr-only">Note Down</span>
                            </Button>
                        </div>

                        {/* Staff */}
                        <div className="p-6">
                            <Staff clef={selectedInstrument.clef} note={parsedNote} />
                        </div>

                        {/* Fingering Display */}
                        <div className="p-6 bg-secondary/50 h-full flex flex-col justify-center text-center">
                             <Card>
                                 <CardHeader>
                                    <CardTitle className="text-primary text-4xl">{currentFingering.note}</CardTitle>
                                 </CardHeader>
                                 <CardContent>
                                    <p className="text-lg text-muted-foreground break-words">{currentFingering.positions.join(' ')}</p>
                                 </CardContent>
                             </Card>
                        </div>
                    </div>
                </Card>
            ) : (
                <div className="text-center py-12 text-muted-foreground">
                    <Music className="mx-auto h-12 w-12 mb-4" />
                    <p>No fingerings available for this instrument.</p>
                </div>
            )}
        </div>
      )}
    </div>
  );
}
