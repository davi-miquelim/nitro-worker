import { IDescriptionRequest } from "../interfaces/request.inteface";

export const generateYoutubeTitlePrompt = ({
  description,
  amount,
}: IDescriptionRequest) => {
  return `Gere ${amount} título(s) para um vídeo no youtube sobre ${description}.`;
};
