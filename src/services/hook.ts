import { IDescriptionRequest } from "../interfaces/request.inteface";
import { createCompletion } from "../remote/openai";
import { formatOneCompletionResponse } from "../utils/format.completion";
import { generateHookPromptFrom } from "../utils/hook";

export const generateHook = async ({
  description,
  amount,
}: IDescriptionRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateHookPromptFrom({ description, amount }),
      temperature: 0.5,
      max_tokens: 300,
    });

    if (amount <= 1) {
      return {
        data: formatOneCompletionResponse(response.choices[0].text),
      };
    }

    return {
      data: formatOneCompletionResponse(response.choices[0].text),
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Internal server error");
  }
};
