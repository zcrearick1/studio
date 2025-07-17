'use client';

import { Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth-context';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';
import CustomChartGenerator from '@/components/custom-chart-generator';

function CustomGeneratorPageContent() {
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
          <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-bold font-headline">Custom Fingering Chart Generator</h1>
          <p className="text-muted-foreground mt-2">
            This is a Pro feature. Please log in to create custom charts.
          </p>
        </div>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Please Log In</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">You must be logged in to use this feature.</p>
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

  return <CustomChartGenerator />;
}

export default function CustomGeneratorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomGeneratorPageContent />
    </Suspense>
  )
}
