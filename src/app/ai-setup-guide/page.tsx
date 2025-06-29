"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getSetupGuide } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { Bot, Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  instrument: z.string().min(2, {
    message: "Instrument name must be at least 2 characters.",
  }),
});

export default function AiSetupGuidePage() {
  const [guide, setGuide] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instrument: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGuide(null);
    const result = await getSetupGuide(values);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      });
    } else if (result.guide) {
      setGuide(result.guide.setupGuide);
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
            <Bot className="mx-auto h-12 w-12 text-accent mb-4" />
            <h1 className="text-4xl font-bold font-headline">AI Setup Guide</h1>
            <p className="text-muted-foreground mt-2">
                New to an instrument? Enter its name below, and our AI will provide a simple, step-by-step guide to get you ready to play.
            </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Instrument Setup</CardTitle>
            <CardDescription>
              Tell us what instrument you want to set up.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                <FormField
                  control={form.control}
                  name="instrument"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instrument Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Violin, Guitar, Piano" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Guide
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        {isLoading && (
            <div className="text-center p-8">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary"/>
                <p className="mt-4 text-muted-foreground">Our AI is warming up... please wait.</p>
            </div>
        )}

        {guide && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Your Setup Guide</CardTitle>
              <CardDescription>
                Follow these steps to prepare your {form.getValues("instrument")}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {guide.split('\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index} className="text-foreground leading-relaxed">{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
