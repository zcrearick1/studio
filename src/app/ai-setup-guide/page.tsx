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
import { Wrench } from "lucide-react";
import Link from "next/link";

export default function SetupGuidesPage() {
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
            <Wrench className="mx-auto h-12 w-12 text-accent mb-4" />
            <h1 className="text-4xl font-bold font-headline">Instrument Startup Guides</h1>
            <p className="text-muted-foreground mt-2">
                Step-by-step startup guides to help you get your instrument ready to play.
            </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Instrument Startup Guides</CardTitle>
                <CardDescription>Select an instrument category, then choose your instrument to see the startup guide.</CardDescription>
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
                                            <Link href={`/ai-setup-guide/${instrument.slug}`}>
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
