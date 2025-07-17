
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Music, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
            <div className="flex flex-col justify-center items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Unlock Your Musical Potential with the Upbeat Music Trainer!
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  Your essential companion for mastering any instrument. Explore comprehensive fingering charts, and challenge your knowledge with interactive quizzes.
                  Explore guides for every instrument!
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
                    Browse Fingering Charts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-background">
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
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 lg:grid-cols-3 lg:gap-12 mt-12">
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
                  <p>Quickly look up fingerings for any note. 
                    Perfect as a quick reference when learning new music. 
                    Every note and fingering is clear, concise, and easy to read.</p>
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
                  <p>Our guides provide step-by-step instructions for instrument setup and maintenance. 
                    Ideal for complete beginners.</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/fingering-charts/quizzes">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-secondary/80 p-3 rounded-full">
                    <svg
                      className="h-6 w-6 text-secondary-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                      <line x1="8" y1="16" x2="16" y2="16"></line>
                      <text
                        x="18"
                        y="6"
                        fill="currentColor"
                        fontSize="6"
                        fontFamily="Arial, sans-serif"
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        A+
                      </text>
                    </svg>
                  </div>
                  <div className="grid gap-1">
                    <CardTitle>Interactive Quizzes</CardTitle>
                    <CardDescription>
                      Test your knowledge and speed with fingering quizzes.
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Test your knowledge of intstrument fingerings with our interactive diagrams!
                    Customize the quiz to your level to design the perfect challenge.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
