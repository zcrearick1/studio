'use client';

import { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { instruments } from '@/lib/instrument-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, Download, Loader2 } from 'lucide-react';
import { FingeringCard } from './fingering-card';
import { Checkbox } from './ui/checkbox';
import type { Fingering } from '@/lib/instrument-types';

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
    if (!selectedInstrument || selectedCount === 0) return;
    setIsGenerating(true);
    
    const fingeringToRender = selectedInstrument.fingerings.filter(f => selectedFingerings[f.note]);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: 'letter' // 8.5 x 11 inches
    });

    const pageElement = document.createElement('div');
    pageElement.style.width = '8.5in';
    pageElement.style.height = '11in';
    pageElement.style.padding = '1in';
    pageElement.style.backgroundColor = 'white';
    pageElement.style.boxSizing = 'border-box';
    pageElement.style.position = 'absolute';
    pageElement.style.left = '-9999px';
    pageElement.style.top = '0px';

    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex';
    contentContainer.style.flexWrap = 'wrap';
    contentContainer.style.justifyContent = 'center';
    contentContainer.style.gap = '0.25in';
    contentContainer.style.width = '100%';
    contentContainer.style.height = '100%';

    pageElement.appendChild(contentContainer);
    document.body.appendChild(pageElement);

    const cardsToRender = (
        <>
            <h1 style={{ width: '100%', textAlign: 'center', fontSize: '24pt', fontWeight: 'bold', marginBottom: '0.5in', color: 'black' }}>
                {selectedInstrument.name} Custom Fingering Chart
            </h1>
            {fingeringToRender.map(fingering => (
                <div key={fingering.note} style={{ width: '1.5in', border: '1px solid #ddd' }}>
                    <FingeringCard instrument={selectedInstrument} fingering={fingering} />
                </div>
            ))}
        </>
    );

    await new Promise<void>((resolve) => {
        ReactDOM.render(
            cardsToRender,
            contentContainer,
            () => resolve()
        );
    });

    const canvas = await html2canvas(pageElement, {
      scale: 3, // Higher scale for better resolution
      useCORS: true,
      logging: false,
    });
    
    document.body.removeChild(pageElement);

    const imgData = canvas.toDataURL('image/png');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(`${selectedInstrument.slug}-custom-chart.pdf`);

    setIsGenerating(false);
  };


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
