
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { instruments } from "@/lib/instrument-data";
import { ArrowRight } from "lucide-react";
import type { Instrument } from "@/lib/instrument-types";


export default function QuizzesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Woodwind");
  const [selectedInstrumentSlug, setSelectedInstrumentSlug] = useState<string>("");

  const instrumentCategories = [...new Set(instruments.map(i => i.category))];
  const categoryOrder = ["Woodwind", "Brass", "Percussion", "String"];
  const sortedCategories = instrumentCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
  
  const instrumentsInCategory = useMemo(() => {
    return instruments.filter((i) => i.category === activeCategory);
  }, [activeCategory]);

  const selectedInstrument = useMemo(() => {
    if (!selectedInstrumentSlug) return null;
    return instruments.find(i => i.slug === selectedInstrumentSlug);
  }, [selectedInstrumentSlug]);


  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSelectedInstrumentSlug("");
  };
  
  const handleInstrumentChange = (slug: string) => {
    setSelectedInstrumentSlug(slug);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <svg
                className="h-12 w-12 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                <line x1="8" y1="16" x2="16" y2="16"></line>
                <text
                  x="18"
                  y="6"
                  fill="currentColor"
                  fontSize="6"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  A+
                </text>
              </svg>
            </div>
            <h1 className="text-4xl font-bold font-headline">Fingering Quizzes</h1>
            <p className="text-muted-foreground mt-2">
                Select an instrument to test your knowledge of its fingerings.
            </p>
        </div>

        <Card>
            <CardHeader className="text-center">
                <CardTitle>Select a Quiz</CardTitle>
                <CardDescription>Select an instrument category, then choose an instrument to start the quiz.</CardDescription>
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
                        value={selectedInstrumentSlug}
                        onValueChange={handleInstrumentChange}
                        disabled={!activeCategory}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select an instrument" />
                        </SelectTrigger>
                        <SelectContent>
                            {instrumentsInCategory.map((instrument) => (
                                <SelectItem key={instrument.slug} value={instrument.slug}>
                                    {instrument.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
            <CardFooter className="justify-center pt-6">
                <Button asChild disabled={!selectedInstrument} size="lg">
                    <Link href={selectedInstrument ? `/fingering-charts/quizzes/${selectedInstrument.slug}` : '#'}>
                        Start Quiz
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}
