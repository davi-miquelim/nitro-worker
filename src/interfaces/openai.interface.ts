export interface ICreateCompletionRequest {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
}

export interface IOpenAIAPIChoice {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

export interface IOpenaiAPIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: IOpenAIAPIChoice[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  error?: any;
}

export interface ICreateCompletionRequest {
  model: string;
  prompt: string;
  temperature: number;
  max_tokens: number;
}
