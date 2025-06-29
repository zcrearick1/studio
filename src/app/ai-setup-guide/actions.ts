"use server";

import {
  generateSetupGuide,
  type GenerateSetupGuideInput,
  type GenerateSetupGuideOutput,
} from "@/ai/flows/generate-setup-guide";

export async function getSetupGuide(
  data: GenerateSetupGuideInput
): Promise<{ guide?: GenerateSetupGuideOutput; error?: string }> {
  try {
    const guide = await generateSetupGuide(data);
    return { guide };
  } catch (error) {
    console.error("Error generating setup guide:", error);
    return { error: "Failed to generate the setup guide. Please try again." };
  }
}
