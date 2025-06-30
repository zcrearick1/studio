"use client";

import { useState, useMemo, useEffect } from "react";
import { instruments, Instrument } from "@/lib/instrument-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function FingeringChartsPage() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("Woodwind");
  const [selectedInstrumentName, setSelectedInstrumentName] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    const firstInstrumentInCategory = instruments.find(i => i.category === category);
    setSelectedInstrumentName(firstInstrumentInCategory?.name || "");
    setSearchTerm("");
  };

  const handleInstrumentChange = (instrumentName: string) => {
    setSelectedInstrumentName(instrumentName);
    setSearchTerm("");
  };

  const selectedInstrument = useMemo(
    () => instruments.find((i) => i.name === selectedInstrumentName),
    [selectedInstrumentName]
  );

  const filteredFingerings = useMemo(() => {
    if (!selectedInstrument) return [];
    if (!searchTerm) return selectedInstrument.fingerings;
    return selectedInstrument.fingerings.filter((fingering) =>
      fingering.note.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedInstrument, searchTerm]);

  const instrumentCategories = [...new Set(instruments.map(i => i.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Fingering Charts</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Select an instrument and search for specific notes. Our comprehensive charts make it easy to find the fingering you need.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              {instrumentCategories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            
            {instrumentCategories.map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-4 items-center">
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
                  <Input
                    type="search"
                    placeholder="Search for a note (e.g., 'C#4')"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
      
      {selectedInstrument && (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-6">{selectedInstrument.name} Fingerings</h2>
            {filteredFingerings.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {filteredFingerings.map((fingering) => (
                    <Card key={fingering.note} className="text-center">
                    <CardHeader>
                        <CardTitle className="text-primary">{fingering.note}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground break-words">{fingering.positions.join(' ')}</p>
                    </CardContent>
                    </Card>
                ))}
                </div>
            ) : (
                <div className="text-center py-12 text-muted-foreground">
                    <Music className="mx-auto h-12 w-12 mb-4" />
                    <p>No fingerings found for your search.</p>
                </div>
            )}
        </div>
      )}
    </div>
  );
}
