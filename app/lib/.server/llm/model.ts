import {  createGoogleGenerativeAI } from '@ai-sdk/google';

export function getAnthropicModel(apiKey: string) {
  const anthropic = createGoogleGenerativeAI({
    apiKey,
  });

  return anthropic('gemini-1.5-flash-latest');
}
