import { IProductOrServiceRequest } from "../interfaces/request.inteface";
import { createCompletion } from "../remote/openai";
import { generateBulletPointsPrompt } from "../utils/bullet";
import { formatCompletionResponse } from "../utils/format.completion";

export const generateBulletPoints = async ({
  productOrService,
  qualities,
  amount,
}: IProductOrServiceRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateBulletPointsPrompt(productOrService, qualities, amount),
      max_tokens: 300,
      temperature: 0.5,
    });

    return {
      data: formatCompletionResponse(response.choices[0]?.text),
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Internal server error");
  }
};
