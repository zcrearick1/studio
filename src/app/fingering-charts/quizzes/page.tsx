"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { instruments } from "@/lib/instrument-data";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function QuizzesPage() {
  const instrumentCategories = [...new Set(instruments.map(i => i.category))];
  
  const categoryOrder = ["Woodwind", "Brass", "Percussion", "String"];
  const sortedCategories = instrumentCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
            <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
            <h1 className="text-4xl font-bold font-headline">Fingering Quizzes</h1>
            <p className="text-muted-foreground mt-2">
                Select an instrument to test your knowledge of its fingerings.
            </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Select a Quiz</CardTitle>
                <CardDescription>Select an instrument category, then choose an instrument to start the quiz.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {sortedCategories.map((category) => (
                        <AccordionItem value={category} key={category}>
                            <AccordionTrigger className="text-xl font-semibold text-primary">{category}</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pl-4 border-l ml-1 py-2">
                                    {instruments.filter(instrument => instrument.category === category).map((instrument) => (
                                        <Button asChild variant="ghost" className="justify-start font-normal" key={instrument.slug}>
                                            <Link href={`/fingering-charts/quizzes/${instrument.slug}`}>
                                                {instrument.name}
                                            </Link>
                                        </Button>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
