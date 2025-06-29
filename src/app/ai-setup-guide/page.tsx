"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { instruments } from "@/lib/instrument-data";
import { Wrench } from "lucide-react";

export default function SetupGuidesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
            <Wrench className="mx-auto h-12 w-12 text-accent mb-4" />
            <h1 className="text-4xl font-bold font-headline">Instrument Setup Guides</h1>
            <p className="text-muted-foreground mt-2">
                Step-by-step guides to help you get your instrument ready to play.
            </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Setup Guides</CardTitle>
                <CardDescription>Select your instrument to see the setup guide.</CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {instruments.map((instrument) => (
                        <AccordionItem value={instrument.name} key={instrument.name}>
                            <AccordionTrigger>{instrument.name}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4 whitespace-pre-line text-foreground/90">
                                    {instrument.setupGuide}
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
