'use client';

import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';

const features = [
  { text: 'Access to All Fingering Charts', free: true, pro: true },
  { text: 'Basic Instrument Startup Guides', free: true, pro: true },
  { text: 'Interactive Fingering Quizzes', free: false, pro: true },
  { text: 'Advanced AI-Powered Setup Guides', free: false, pro: true },
  { text: 'Downloadable PDF Study Guides', free: false, pro: true },
  { text: 'Track Progress & Stats', free: false, pro: true },
];

export default function PricingPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleFreeTierClick = () => {
    if (user) {
      router.push('/');
    } else {
      router.push('/signup');
    }
  };

  const handleUpgrade = () => {
    // Placeholder for payment processing logic
    // For now, it can redirect or show a "coming soon" message
    if (user) {
      alert('Payment processing is not yet implemented. Stay tuned!');
    } else {
      router.push('/signup');
    }
  };


  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
          Pricing Plans
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that best fits your musical journey.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Free Tier */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>
              For casual learners and beginners to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
            <p className="text-4xl font-bold">
              $0<span className="text-lg font-normal text-muted-foreground">/month</span>
            </p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  {feature.free ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-red-500" />
                  )}
                  <span
                    className={cn(
                      !feature.free && 'text-muted-foreground line-through'
                    )}
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleFreeTierClick}
            >
              {user ? 'Continue for Free' : 'Get Started'}
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Tier */}
        <Card className="border-primary flex flex-col ring-2 ring-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              For dedicated musicians who want to unlock their full potential.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 space-y-4">
             <p className="text-4xl font-bold">
              $5<span className="text-lg font-normal text-muted-foreground">/month</span>
            </p>
             <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleUpgrade}>
              {user ? 'Upgrade to Pro' : 'Sign Up for Pro'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
