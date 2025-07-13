import { instruments } from '@/lib/instrument-data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';
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
        return { title: 'Quiz Not Found' };
    }
    return {
        title: `${instrument.name} Fingering Quiz | Maestro`,
        description: `Test your knowledge of ${instrument.name} fingerings.`,
    };
}

export default function InstrumentQuizPage({ params }: { params: { slug: string } }) {
    const instrument = instruments.find((i) => i.slug === params.slug);

    if (!instrument) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
                <h1 className="text-4xl font-bold font-headline">{instrument.name} Fingering Quiz</h1>
                <p className="text-muted-foreground mt-2">
                    Test your knowledge of {instrument.name} fingerings.
                </p>
            </div>
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Coming Soon!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">This feature is under construction. Please check back later for interactive quizzes.</p>
                     <Button asChild className="w-full">
                        <Link href="/fingering-charts/quizzes">Back to All Quizzes</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
