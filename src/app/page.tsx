import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Unlock Your Musical Potential with Upbeat
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Your essential companion for mastering any instrument. Explore comprehensive fingering charts and get helpful setup guides.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/ai-setup-guide">
                    View Instrument Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/fingering-charts">
                    Browse Charts
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
                <Music size={200} className="text-primary/50" strokeWidth={1}/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Core Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything a Musician Needs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From your first note to complex solos, Upbeat provides the tools you need to succeed on your musical journey.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 mt-12">
            <Link href="/fingering-charts">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Music className="h-6 w-6 text-primary" />
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>Fingering Charts</CardTitle>
                    <CardDescription>
                      Comprehensive charts for band and orchestra instruments.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Quickly look up fingerings for any note. Perfect for practice and learning new pieces. Our charts are clear, concise, and easy to read.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/ai-setup-guide">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>Instrument Guides</CardTitle>
                    <CardDescription>
                      Get your instrument ready to play with our helpful guides.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Our guides provide step-by-step instructions for instrument setup and maintenance. Ideal for complete beginners.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
