import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

export default function QuizzesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <HelpCircle className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline">Fingering Quizzes</h1>
        <p className="text-muted-foreground mt-2">
          Test your knowledge of instrument fingerings.
        </p>
      </div>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This feature is under construction. Please check back later for interactive quizzes.</p>
        </CardContent>
      </Card>
    </div>
  );
}
