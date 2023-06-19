import { ICreateCompletionRequest } from "../interfaces/openai.interface";
import { IOpenaiAPIResponse } from "../interfaces/openai.interface";

export const createCompletion = async ({
  model,
  prompt,
  temperature,
  max_tokens,
}: ICreateCompletionRequest) => {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_API_KEY_HERE",
    },
    body: JSON.stringify({
      model,
      prompt,
      temperature,
      max_tokens,
    }),
  });

  return response.json() as Promise<IOpenaiAPIResponse>;
};
