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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
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
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold font-headline">{instrument.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 whitespace-pre-line text-foreground/90">
                           {instrument.setupGuide}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
