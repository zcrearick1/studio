

"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { instruments, Instrument, Fingering } from "@/lib/instrument-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Music, ArrowUp, ArrowDown, Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ClarinetFingeringDiagram } from "@/components/ui/fingering-diagrams/clarinet-fingering-diagram";
import { TrumpetFingeringDiagram } from "@/components/ui/fingering-diagrams/trumpet-fingering-diagram";
import { FluteFingeringDiagram } from "@/components/ui/fingering-diagrams/flute-fingering-diagram";
import { SaxophoneFingeringDiagram } from "@/components/ui/fingering-diagrams/saxophone-fingering-diagram";
import { BassoonFingeringDiagram } from "@/components/ui/fingering-diagrams/bassoon-fingering-diagram";
import { PianoKeyboardDiagram } from "@/components/ui/fingering-diagrams/piano-keyboard-diagram";
import { MalletPercussionDiagram } from "@/components/ui/fingering-diagrams/mallet-percussion-diagram";
import { TromboneFingeringDiagram } from "@/components/ui/fingering-diagrams/trombone-fingering-diagram";
import Link from "next/link";
import { 
    TREBLE_CLEF_PATH, 
    BASS_CLEF_BODY_PATH, 
    BASS_CLEF_DOT1_PATH, 
    BASS_CLEF_DOT2_PATH, 
    ALTO_CLEF_PATH_C, 
    ALTO_CLEF_PATH_LEFT_BAR, 
    ALTO_CLEF_PATH_RIGHT_BAR, 
    PERCUSSION_CLEF_PATH, 
    SHARP_PATH, 
    FLAT_PATH, 
    NATURAL_PATH 
} from "@/components/icons";


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

const Staff = ({ clef, note }: { clef: Instrument['clef']; note: ParsedNote }) => {
    const STAFF_WIDTH = 150;
    const STAFF_HEIGHT = 160;
    const LINE_SPACING = 10;
    const TOP_MARGIN = (STAFF_HEIGHT - 4 * LINE_SPACING) / 2;
    const NOTE_X = 75;

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
                return <path d={TREBLE_CLEF_PATH} fill="currentColor" transform="translate(5, 122) scale(0.028, -0.028)" />;
            case "bass":
                return (
                    <g transform="translate(15, 95) scale(0.007, -0.007)" fillRule="evenodd">
                        <path d={BASS_CLEF_BODY_PATH} fill="currentColor" />
                        <path d={BASS_CLEF_DOT1_PATH} fill="currentColor" />
                        <path d={BASS_CLEF_DOT2_PATH} fill="currentColor" />
                    </g>
                );
            case "alto":
                return (
                    <g transform="translate(5, 103.5) scale(0.021, -0.021)" fill="currentColor">
                        <path d={ALTO_CLEF_PATH_C} />
                        <path d={ALTO_CLEF_PATH_LEFT_BAR} />
                        <path d={ALTO_CLEF_PATH_RIGHT_BAR} />
                    </g>
                );
            case "percussion":
                return <path d={PERCUSSION_CLEF_PATH} fill="currentColor" transform="translate(5, 101) scale(0.0263, -0.0263)" />;
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

        // Top ledger lines
        if (y < staffTopY - (LINE_SPACING / 2)) {
            for (let lineY = staffTopY - LINE_SPACING; lineY >= y - (LINE_SPACING/4); lineY -= LINE_SPACING) {
                 lines.push(<line key={`ledger-top-${lineY}`} x1={NOTE_X - 10} y1={lineY} x2={NOTE_X + 10} y2={lineY} stroke="currentColor" strokeWidth="1" />);
            }
        }
        // Bottom ledger lines
        if (y > staffBottomY + (LINE_SPACING / 2)) {
            for (let lineY = staffBottomY + LINE_SPACING; lineY <= y + (LINE_SPACING/4); lineY += LINE_SPACING) {
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
        const stemX = stemDown ? NOTE_X - 5.5 : NOTE_X + 5.5;
        const stemEndY = stemDown ? noteHeadY + 30 : noteHeadY - 30;

        return (
            <g>
                {renderLedgerLines()}
                {renderAccidental()}
                <ellipse cx={NOTE_X} cy={noteHeadY} rx="6.5" ry="5" fill="currentColor" transform={`rotate(-10 ${NOTE_X} ${noteHeadY})`} />
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
  const [hornSide, setHornSide] = useState<'F' | 'Bb'>('F');

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
  const displayNoteWithoutOctave = currentDisplayNote.replace(/[0-9]/g, '');
  
  const currentFingering = useMemo(() => {
    if (!selectedInstrument || !currentNote) return null;
    const currentMidi = getMidiValue(currentNote);
    if (currentMidi === -1) return null;
    
    const foundFingering = selectedInstrument.fingerings.find(f => {
        const noteVariants = f.note.split('/');
        return noteVariants.some(variant => getMidiValue(variant) === currentMidi);
    });

    if (!foundFingering) return null;

    if (selectedInstrument.slug === 'french-horn') {
        const hornFingering = hornSide === 'F' ? foundFingering.fHorn : foundFingering.bbHorn;
        if (!hornFingering) return null;
        return {
            ...foundFingering,
            positions: [hornFingering.valves],
            keys: hornFingering.keys,
        };
    }
    
    return foundFingering;
  }, [selectedInstrument, currentNote, hornSide]);

  useEffect(() => {
    const instrumentSlug = searchParams.get('instrument');
    let targetInstrument: Instrument | undefined;
    
    if (instrumentSlug) {
      targetInstrument = instruments.find(i => i.slug === instrumentSlug);
    }
    
    if (targetInstrument) {
      setActiveCategory(targetInstrument.category);
      setSelectedInstrumentName(targetInstrument.name);
    } else if (!selectedInstrumentName && instruments.length > 0) {
      const firstWoodwind = instruments.find(i => i.category === "Woodwind") || instruments[0];
      setSelectedInstrumentName(firstWoodwind.name);
      targetInstrument = firstWoodwind;
    }
  }, [searchParams, selectedInstrumentName]);
  
  useEffect(() => {
    if (selectedInstrument) {
      const defaultNote = selectedInstrument.range.default;
      setCurrentNote(defaultNote);
      setPreferredAccidental('natural'); // Reset accidental preference
      
      const parsedNote = parseNoteString(defaultNote);
      if (parsedNote?.accidental !== 'natural') {
          setPreferredAccidental(parsedNote.accidental);
      }
    }
  }, [selectedInstrument]);
  
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
    if (firstInstrumentInCategory) {
        setSelectedInstrumentName(firstInstrumentInCategory.name);
    }
  };
  
  const handleInstrumentChange = (instrumentName: string) => {
    setSelectedInstrumentName(instrumentName);
  };
  
  const noteForStaff = parseNoteString(currentDisplayNote);

  const isTallLayout = selectedInstrument && ['clarinet', 'alto-saxophone', 'tenor-saxophone', 'baritone-saxophone', 'bassoon'].includes(selectedInstrument.slug);
  const isSaxophone = selectedInstrument && ['alto-saxophone', 'tenor-saxophone', 'baritone-saxophone'].includes(selectedInstrument.slug);
  const isKeyboard = selectedInstrument && ['piano', 'mallet-percussion'].includes(selectedInstrument.slug);
  const isTrombone = selectedInstrument?.slug === 'trombone';
  const isFrenchHorn = selectedInstrument?.slug === 'french-horn';


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Interactive Fingering Chart</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Select an instrument and use the controls to find the fingering for any note.
        </p>
      </div>
      
      <div className="flex justify-center mb-6">
        <Button asChild variant="outline">
          <Link href={selectedInstrument ? `/fingering-charts/custom-generator?instrument=${selectedInstrument.slug}` : "/fingering-charts/custom-generator"}>
            <Sparkles className="mr-2 h-4 w-4" />
            Create Custom Fingering Chart
          </Link>
        </Button>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Select Your Instrument</CardTitle>
          <CardDescription>
            First, choose a category, then select your instrument from the list.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select value={activeCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {sortedCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedInstrumentName}
              onValueChange={handleInstrumentChange}
              disabled={!activeCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select an instrument" />
              </SelectTrigger>
              <SelectContent>
                {instruments
                  .filter((i) => i.category === activeCategory)
                  .map((instrument) => (
                    <SelectItem key={instrument.name} value={instrument.name}>
                      {instrument.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      {selectedInstrument && (
        <div className="mt-8">
            <div className="flex justify-center items-center mb-6 text-center">
                <h2 className="text-2xl font-bold">{selectedInstrument.name} Fingerings</h2>
                {isFrenchHorn && (
                    <div className="flex items-center space-x-2 ml-4">
                        <Label htmlFor="horn-side-switch" className={cn(hornSide === 'F' && 'text-primary')}>F Horn</Label>
                        <Switch
                            id="horn-side-switch"
                            checked={hornSide === 'Bb'}
                            onCheckedChange={(checked) => setHornSide(checked ? 'Bb' : 'F')}
                        />
                        <Label htmlFor="horn-side-switch" className={cn(hornSide === 'Bb' && 'text-primary')}>Bb Horn</Label>
                    </div>
                )}
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left Card for Controls and Staff */}
            <Card className="overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] items-center h-full">
                {/* Staff */}
                <div className="p-3 h-full flex items-center">
                  <Staff clef={selectedInstrument.clef} note={noteForStaff} />
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center justify-center p-2 bg-secondary/50 h-full gap-4 border-l">
                    <div className="flex flex-col items-center gap-2">
                        <Button variant="outline" size="icon" onClick={() => changeNote('up')} disabled={!canGoUp}>
                            <ArrowUp className="h-4 w-4" />
                            <span className="sr-only">Note Up</span>
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => changeNote('down')} disabled={!canGoDown}>
                            <ArrowDown className="h-4 w-4" />
                            <span className="sr-only">Note Down</span>
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn({
                                'bg-accent text-foreground hover:bg-accent/90': preferredAccidental === 'flat',
                            })}
                            onClick={() => handleAccidentalChange('flat')}
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
                            className={cn({
                                'bg-accent text-foreground hover:bg-accent/90': preferredAccidental === 'natural',
                            })}
                            onClick={() => handleAccidentalChange('natural')}
                        >
                             <svg viewBox="0 0 117 117" className="w-auto h-4" fillRule="evenodd">
                               <g transform="scale(1, 1) translate(8, 0) translate(0, 0)">
                                <path d={NATURAL_PATH} fill="currentColor" />
                               </g>
                            </svg>
                            <span className="sr-only">Natural</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn({
                                'bg-accent text-foreground hover:bg-accent/90': preferredAccidental === 'sharp',
                            })}
                            onClick={() => handleAccidentalChange('sharp')}
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
              </div>
            </Card>

            {/* Right Card for Fingering */}
            <Card className="flex items-center justify-center">
              <div className="p-6 h-full w-full flex items-center justify-center text-center">
                {currentFingering && selectedInstrument ? (
                  (() => {
                    const diagramDisplay = (
                      <>
                        {currentFingering.keys && selectedInstrument.slug === 'clarinet' ? (
                            <div className="w-full max-w-[100px] h-full mx-auto">
                                <ClarinetFingeringDiagram activeKeys={currentFingering.keys} />
                            </div>
                        ) : currentFingering.keys && ['trumpet', 'baritone-bc', 'baritone-tc', 'tuba', 'french-horn'].includes(selectedInstrument.slug) ? (
                            <div className="w-full max-w-[200px] mx-auto">
                                <TrumpetFingeringDiagram activeKeys={currentFingering.keys} />
                            </div>
                        ) : currentFingering.positions && isTrombone ? (
                            <div className="w-full max-w-[400px] mx-auto">
                                <TromboneFingeringDiagram activePosition={parseInt(currentFingering.positions[0])} />
                            </div>
                        ) : currentFingering.keys && selectedInstrument.slug === 'flute' ? (
                             <div className="w-full max-w-[400px] mx-auto">
                                <FluteFingeringDiagram activeKeys={currentFingering.keys} />
                            </div>
                        ) : currentFingering.keys && isSaxophone ? (
                            <div className="w-full max-w-[120px] h-full mx-auto">
                                <SaxophoneFingeringDiagram activeKeys={currentFingering.keys} />
                            </div>
                        ) : currentFingering.keys && selectedInstrument.slug === 'bassoon' ? (
                            <div className="w-full max-w-[100px] h-full mx-auto">
                                <BassoonFingeringDiagram activeKeys={currentFingering.keys} />
                            </div>
                        ) : currentFingering.keys && selectedInstrument.slug === 'piano' ? (
                            <div className="w-full max-w-[400px] mx-auto">
                                <PianoKeyboardDiagram activeKeys={currentFingering.keys} startNote="C4" />
                            </div>
                        ) : currentFingering.keys && selectedInstrument.slug === 'mallet-percussion' ? (
                            <div className="w-full max-w-[400px] mx-auto">
                                <MalletPercussionDiagram activeKeys={currentFingering.keys} startNote="C4" />
                            </div>
                        ) : currentFingering.imageUrl ? (
                          <div className="relative w-full max-w-[112px] h-24 mx-auto">
                              <Image
                                  src={currentFingering.imageUrl}
                                  alt={`Fingering diagram for ${displayNoteWithoutOctave}`}
                                  fill
                                  className="object-contain rounded-md"
                                  data-ai-hint="fingering diagram"
                              />
                          </div>
                          ) : (
                          <p className="text-lg text-muted-foreground break-words">{currentFingering.positions.join(' ')}</p>
                        )}
                      </>
                    );

                    if (isTallLayout) {
                      return (
                        <div className="grid grid-cols-2 gap-4 w-full items-center">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-primary text-4xl">{displayNoteWithoutOctave}</CardTitle>
                            </CardHeader>
                          </Card>
                          <div className="h-full flex items-center justify-center">
                            {diagramDisplay}
                          </div>
                        </div>
                      )
                    }
                     if (isKeyboard || isTrombone) {
                      return (
                        <div className="w-full">
                          <Card className="mb-4">
                            <CardHeader>
                              <CardTitle className="text-primary text-4xl">{displayNoteWithoutOctave}</CardTitle>
                            </CardHeader>
                          </Card>
                          <div className="h-full flex items-center justify-center">
                            {diagramDisplay}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Card className="w-full">
                        <CardHeader>
                          <CardTitle className="text-primary text-4xl">{displayNoteWithoutOctave}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {diagramDisplay}
                        </CardContent>
                      </Card>
                    );
                  })()
                ) : (
                  <Card className="bg-muted">
                    <CardHeader>
                      <CardTitle className="text-2xl">{displayNoteWithoutOctave}</CardTitle>
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
