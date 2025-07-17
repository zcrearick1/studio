'use client';

import { useState, useMemo } from 'react';
import { instruments, Instrument } from '@/lib/instrument-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Download, Loader2 } from 'lucide-react';
import { FingeringCard } from './fingering-card';
import { Checkbox } from './ui/checkbox';
import type { Fingering } from '@/lib/instrument-types';

// Placeholder for PDF generation
const generatePdf = async () => {
  alert('PDF generation is coming soon!');
};

export default function CustomChartGenerator() {
  const [selectedInstrumentSlug, setSelectedInstrumentSlug] = useState<string>('');
  const [selectedFingerings, setSelectedFingerings] = useState<Record<string, boolean>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedInstrument = useMemo(
    () => instruments.find((i) => i.slug === selectedInstrumentSlug),
    [selectedInstrumentSlug]
  );
  
  const handleSelectAll = (select: boolean) => {
    if (!selectedInstrument) return;
    const allSelected: Record<string, boolean> = {};
    if (select) {
        selectedInstrument.fingerings.forEach(f => {
            allSelected[f.note] = true;
        });
    }
    setSelectedFingerings(allSelected);
  }

  const handleCheckboxChange = (note: string, checked: boolean) => {
    setSelectedFingerings(prev => ({
      ...prev,
      [note]: checked,
    }));
  };
  
  const handleInstrumentChange = (slug: string) => {
      setSelectedInstrumentSlug(slug);
      setSelectedFingerings({});
  }
  
  const selectedCount = Object.values(selectedFingerings).filter(Boolean).length;

  const handleGenerateClick = async () => {
      setIsGenerating(true);
      await generatePdf();
      setIsGenerating(false);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Custom Fingering Chart Generator</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Select an instrument, choose the notes you want, and create a personalized PDF fingering chart.
        </p>
      </div>

      <Card className="max-w-xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Instrument Selection</CardTitle>
          <CardDescription>Choose the instrument for your custom chart.</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={selectedInstrumentSlug} onValueChange={handleInstrumentChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select an instrument..." />
            </SelectTrigger>
            <SelectContent>
              {instruments.map((instrument) => (
                <SelectItem key={instrument.slug} value={instrument.slug}>
                  {instrument.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      
      {selectedInstrument && (
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Select Notes</CardTitle>
                            <CardDescription>
                                {selectedInstrument.name} - Choose the fingerings to include in your chart.
                            </CardDescription>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="link" onClick={() => handleSelectAll(true)}>Select All</Button>
                            <Button variant="link" onClick={() => handleSelectAll(false)}>Deselect All</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {selectedInstrument.fingerings.map((fingering) => (
                            <div key={fingering.note} className="relative">
                                <FingeringCard instrument={selectedInstrument} fingering={fingering} />
                                <Checkbox
                                    id={`check-${fingering.note}`}
                                    className="absolute top-2 left-2 bg-background"
                                    checked={!!selectedFingerings[fingering.note]}
                                    onCheckedChange={(checked) => handleCheckboxChange(fingering.note, !!checked)}
                                />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="sticky bottom-0 mt-8 py-4 bg-background/80 backdrop-blur-sm border-t">
                <div className="container mx-auto flex justify-center items-center">
                     <Button 
                        size="lg"
                        onClick={handleGenerateClick}
                        disabled={selectedCount === 0 || isGenerating}
                    >
                        {isGenerating ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Download className="mr-2 h-4 w-4" />
                        )}
                        Generate PDF ({selectedCount} notes)
                    </Button>
                </div>
            </div>
        </>
      )}

    </div>
  );
}
