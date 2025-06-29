// src/ai/flows/generate-setup-guide.ts
'use server';

/**
 * @fileOverview AI-powered instrument setup guide generator for beginners.
 *
 * - generateSetupGuide - A function that generates an instrument setup guide.
 * - GenerateSetupGuideInput - The input type for the generateSetupGuide function.
 * - GenerateSetupGuideOutput - The return type for the generateSetupGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSetupGuideInputSchema = z.object({
  instrument: z.string().describe('The name of the instrument to set up.'),
});
export type GenerateSetupGuideInput = z.infer<typeof GenerateSetupGuideInputSchema>;

const GenerateSetupGuideOutputSchema = z.object({
  setupGuide: z.string().describe('A step-by-step guide on how to set up the instrument.'),
});
export type GenerateSetupGuideOutput = z.infer<typeof GenerateSetupGuideOutputSchema>;

export async function generateSetupGuide(input: GenerateSetupGuideInput): Promise<GenerateSetupGuideOutput> {
  return generateSetupGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSetupGuidePrompt',
  input: {schema: GenerateSetupGuideInputSchema},
  output: {schema: GenerateSetupGuideOutputSchema},
  prompt: `You are an expert music teacher. A student who is a complete beginner wants to learn how to setup their instrument, which is a {{instrument}}. Write a step-by-step guide, in simple terms, that explains how to prepare the instrument so that it is ready to play. Be sure to cover any required maintenance such as applying rosin to a bow or lubricating parts of the instrument. Do not include information on how to play the instrument. Include warnings for steps that can damage the instrument or cause injury to the player if done incorrectly.`,
});

const generateSetupGuideFlow = ai.defineFlow(
  {
    name: 'generateSetupGuideFlow',
    inputSchema: GenerateSetupGuideInputSchema,
    outputSchema: GenerateSetupGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
