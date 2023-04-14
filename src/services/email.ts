import { IProductOrServiceRequest } from "../interfaces/request.inteface";
import { createCompletion } from "../remote/openai";
import { generateSubjectPrompt } from "../utils/email";
import { formatCompletionResponse } from "../utils/format.completion";

export const generateEmailMarketingSubjects = async ({
  productOrService,
  qualities,
  amount,
}: IProductOrServiceRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateSubjectPrompt(productOrService, qualities, amount),
      temperature: 0.5,
      max_tokens: 300,
    });

    if (amount <= 1) {
      return {
        data: formatCompletionResponse(response.choices[0]?.text),
      };
    }

    return {
      data: formatCompletionResponse(response.choices[0]?.text),
    };
  } catch (error: any) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};
