import { instruments } from '@/lib/instrument-data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return instruments.map((instrument) => ({
        slug: instrument.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
    const instrument = instruments.find((i) => i.slug === params.slug);

    if (!instrument) {
        return {
            title: 'Instrument Not Found',
        };
    }

    return {
        title: `${instrument.name} Setup Guide | MusicMate`,
        description: `Learn how to set up your ${instrument.name}.`,
    };
}


export default function InstrumentSetupPage({ params }: { params: { slug: string } }) {
    const instrument = instruments.find((i) => i.slug === params.slug);

    if (!instrument) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto">
                <Button asChild variant="ghost" className="mb-4 -ml-4">
                    <Link href="/ai-setup-guide">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to All Guides
                    </Link>
                </Button>
                
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold font-headline text-accent">{instrument.name}</h1>
                </div>
                
                <div className="space-y-6">
                    {instrument.setupGuide.map((section, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="text-2xl font-semibold text-primary">{section.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {(() => {
                                    const lines = section.content.split('\n').filter(line => line.trim());
                                    const warningLine = lines.find(line => line.trim().startsWith('*Warning:'));
                                    const mainLines = lines.filter(line => !line.trim().startsWith('*Warning:'));
                                    
                                    const isNumberedList = mainLines.length > 0 && mainLines[0].trim().startsWith('1.');

                                    return (
                                        <>
                                            {isNumberedList ? (
                                                <ol className="list-decimal list-outside pl-5 space-y-2 text-foreground/90">
                                                    {mainLines.map((line, idx) => (
                                                        <li key={idx}>{line.replace(/^\d+\.\s*/, '')}</li>
                                                    ))}
                                                </ol>
                                            ) : (
                                                <ul className="list-disc list-outside pl-5 space-y-2 text-foreground/90">
                                                    {mainLines.map((line, idx) => (
                                                        <li key={idx}>{line}</li>
                                                    ))}
                                                </ul>
                                            )}
                                            {warningLine && <p className="mt-4 text-muted-foreground">{warningLine}</p>}
                                        </>
                                    );
                                })()}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
