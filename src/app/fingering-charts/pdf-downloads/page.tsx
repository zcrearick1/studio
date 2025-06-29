import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function PdfDownloadsPage() {
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
          <CardTitle>Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">This feature is under construction. Please check back later for PDF downloads.</p>
        </CardContent>
      </Card>
    </div>
  );
}
