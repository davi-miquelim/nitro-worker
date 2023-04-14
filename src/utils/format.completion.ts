const handleUndefined = () => {
  throw new Error("Open Ai completion response is undefined");
};

export const formatCompletionResponse = (response: string | undefined) => {
  if (!response) {
    return handleUndefined();
  }

  const formatedResponse = response.replace(/"|\n/g, "").split(/[0-5]+\. /);
  formatedResponse.shift();
  return formatedResponse;
};

export const formatOneCompletionResponse = (response: string | undefined) => {
  if (!response) {
    return handleUndefined();
  }

  const formatedResponse = response.replace(/"|\n/g, "").split(/[0-5]+\. /);
  return formatedResponse;
};
