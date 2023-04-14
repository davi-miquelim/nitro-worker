import { IFacebookAdsFeedRequest } from "../interfaces/request.inteface";
import { createCompletion } from "../remote/openai";
import {
  generateFacebookAdsFeedDescriptionPrompt,
  generateFacebookAdsFeedHeadlinePrompt,
  generateFacebookAdsFeedPrimaryTextPrompt,
} from "../utils/facebook.feed";
import {
  formatCompletionResponse,
  formatOneCompletionResponse,
} from "../utils/format.completion";

export const generateFacebookAdsDescription = async ({
  description,
  amount,
}: IFacebookAdsFeedRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateFacebookAdsFeedDescriptionPrompt({ description, amount }),
      temperature: 0.5,
      max_tokens: 300,
    });

    if (response.choices.length === 0) {
      throw new Error("No choices returned");
    }

    return {
      data: formatCompletionResponse(response.choices[0].text),
    };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Internal server error");
  }
};

export const generateFacebookAdsPrimaryText = async ({
  description,
  amount,
}: IFacebookAdsFeedRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateFacebookAdsFeedPrimaryTextPrompt({ description, amount }),
      temperature: 0.5,
      max_tokens: 300,
    });

    if (response.choices.length === 0) {
      throw new Error("No choices returned");
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

export const generateFacebookAdsFeedTitle = async ({
  description,
  amount,
}: IFacebookAdsFeedRequest) => {
  try {
    const response = await createCompletion({
      model: "text-davinci-003",
      prompt: generateFacebookAdsFeedHeadlinePrompt({ description, amount }),
      temperature: 0.5,
      max_tokens: 250,
    });

    if (response.choices.length === 0) {
      throw new Error("No choices returned");
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
