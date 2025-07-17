'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { instruments } from '@/lib/instrument-data';
import { Skeleton } from '@/components/ui/skeleton';

export default function PdfDownloadsPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <Skeleton className="h-10 w-1/2 mx-auto mb-2" />
                <Skeleton className="h-6 w-3/4 mx-auto mb-8" />
                <Card>
                    <CardHeader>
                        <Skeleton className="h-8 w-1/4" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <Download className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-bold font-headline">PDF Downloads</h1>
          <p className="text-muted-foreground mt-2">
            Downloadable fingering charts for offline use.
          </p>
        </div>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Please Log In</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">You must be logged in to view and download PDF files.</p>
            <Button asChild className="w-full">
              <Link href="/login">Log In</Link>
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/signup" className="underline hover:text-primary">
                Sign Up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Download className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-bold font-headline">PDF Downloads</h1>
          <p className="text-muted-foreground mt-2">
            Downloadable fingering charts for offline use.
          </p>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Fingering Charts</CardTitle>
                <CardDescription>Click to download a printable PDF fingering chart for your instrument.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {instruments.map((instrument) => {
                        const pdfPath = `/pdfs/${instrument.slug}-fingering-chart.pdf`;
                        return (
                            <Button asChild key={instrument.slug} variant="outline" className="justify-between">
                                <a href={pdfPath} download>
                                    {instrument.name}
                                    <Download className="h-4 w-4" />
                                </a>
                            </Button>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
        <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Don't see your instrument? <Link href="/fingering-charts" className="underline hover:text-primary">Suggest one!</Link></p>
        </div>
      </div>
    </div>
  );
}