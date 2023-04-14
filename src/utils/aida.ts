import { ICopywriteFrameworkRequest } from "../interfaces/request.inteface";

export const generateCopyWriteTextUsingAIDAFrameworkPromptFrom = ({
  description,
  emotion,
  callToAction,
}: ICopywriteFrameworkRequest) => {
  return `Usando o framework AIDA gere um texto de copywrite para ${description}. a ação que você deseja que o usuário tome é: ${callToAction}.
            Regras:
            - O texto precisa evocar a emoção: ${emotion}`;
};
