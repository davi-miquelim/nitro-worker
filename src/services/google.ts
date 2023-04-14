import {
  generateDescriptionPrompt,
  generateKeywordsPromptFrom,
  generateTitlePrompt,
} from "../utils/google";

import { IProductOrServiceRequest } from "../interfaces/request.inteface";
import {
  formatOneCompletionResponse,
  formatCompletionResponse,
} from "../utils/format.completion";
import { createCompletion } from "../remote/openai";

export const generateGoogleAdsDescriptions = async ({
  productOrService,
  qualities,
  amount,
}: IProductOrServiceRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateDescriptionPrompt(productOrService, qualities, amount),
      temperature: 0.5,
      max_tokens: 150,
    });

    if (amount <= 1) {
      return {
        data: formatOneCompletionResponse(response.choices[0]?.text),
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

    throw new Error("Internal server error");
  }
};

export const generateGoogleKeywords = async ({
  productOrService,
  qualities,
  amount,
}: IProductOrServiceRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateKeywordsPromptFrom(productOrService, qualities, amount),
      temperature: 0.5,
      max_tokens: 100,
    });

    if (amount <= 1) {
      return {
        data: formatOneCompletionResponse(response.choices[0]?.text),
      };
    }

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

export const generateGoogleAdsTitles = async ({
  productOrService,
  qualities,
  amount,
}: IProductOrServiceRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateTitlePrompt(productOrService, qualities, amount),
      temperature: 0.7,
      max_tokens: 100,
    });

    if (amount <= 1) {
      return {
        data: formatOneCompletionResponse(response.choices[0]?.text),
      };
    }

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
