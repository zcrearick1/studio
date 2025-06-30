'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { instruments, type Instrument } from '@/lib/instrument-data';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    const storedInstrumentSlug = localStorage.getItem("primaryInstrument");
    if (storedInstrumentSlug) {
      const found = instruments.find((i) => i.slug === storedInstrumentSlug);
      setSelectedInstrument(found || null);
    }
  }, [user, loading, router]);

  const handleInstrumentSelect = (slug: string) => {
    const instrument = instruments.find((i) => i.slug === slug);
    if (instrument) {
      setSelectedInstrument(instrument);
      localStorage.setItem("primaryInstrument", instrument.slug);
    }
  };

  const instrumentCategories = [...new Set(instruments.map(i => i.category))];
  const categoryOrder = ["Woodwind", "Brass", "Percussion", "String"];
  const sortedCategories = instrumentCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  if (loading || !user) {
    return (
      <div className="container mx-auto flex h-full items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md">
          <CardHeader>
             <Skeleton className="h-8 w-3/4 mx-auto" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex h-full items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">My Profile</CardTitle>
           <CardDescription className="text-center">Your account details and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p>{user.email}</p>
            </div>
             <div>
                <h3 className="text-sm font-medium text-muted-foreground">User ID</h3>
                <p className="text-xs">{user.uid}</p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="instrument-select">My Primary Instrument</Label>
                <Select onValueChange={handleInstrumentSelect} value={selectedInstrument?.slug ?? ''}>
                    <SelectTrigger id="instrument-select">
                        <SelectValue placeholder="Select an instrument..." />
                    </SelectTrigger>
                    <SelectContent>
                        {sortedCategories.map(category => (
                        <SelectGroup key={category}>
                            <SelectLabel>{category}</SelectLabel>
                            {instruments.filter(i => i.category === category).map(instrument => (
                            <SelectItem key={instrument.slug} value={instrument.slug}>
                                {instrument.name}
                            </SelectItem>
                            ))}
                        </SelectGroup>
                        ))}
                    </SelectContent>
                </Select>
            </div>
          <Button asChild className="w-full !mt-8">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
