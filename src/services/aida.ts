import { ICopywriteFrameworkRequest } from "../interfaces/request.inteface";
import { createCompletion } from "../remote/openai";
import { generateCopyWriteTextUsingAIDAFrameworkPromptFrom } from "../utils/aida";
import { formatOneCompletionResponse } from "../utils/format.completion";

export const generateCopyWriteTextUsingAIDAFramework = async ({
  description,
  callToAction,
  emotion,
}: ICopywriteFrameworkRequest) => {
  try {
    if (!description || !callToAction || !emotion) {
      throw new Error("Missing required fields");
    }

    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateCopyWriteTextUsingAIDAFrameworkPromptFrom({
        description,
        callToAction,
        emotion,
      }),
      temperature: 0.5,
      max_tokens: 600,
    });

    return {
      data: formatOneCompletionResponse(response.choices[0].text),
    };
  } catch (error: any) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};
