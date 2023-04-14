import { IFacebookAdsFeedRequest } from "../interfaces/request.inteface";

export const generateFacebookAdsFeedDescriptionPrompt = ({
  description,
  amount,
}: IFacebookAdsFeedRequest) => {
  return `Gere uma descrição persuasiva para um post no Facebook Feed Ads sobre ${description}.
            Regras:
            - Não pode ultrapassar 30 caracteres
            - Gere ${amount} descrição(ões)
            `;
};

export const generateFacebookAdsFeedPrimaryTextPrompt = ({
  description,
  amount,
}: IFacebookAdsFeedRequest) => {
  return `Gere um texto primário persuasivo para um post no Facebook Feed Ads sobre ${description}.
              Regras:
              - Não pode ultrapassar 125 caracteres
              - Gere ${amount} texto(s)
              `;
};

export const generateFacebookAdsFeedHeadlinePrompt = ({
  description,
  amount,
}: IFacebookAdsFeedRequest) => {
  return `Gere um título persuasivo para um post no Facebook Feed Ads sobre ${description}.
              Regras:
              - Não pode ultrapassar 40 caracteres
              - Gere ${amount} título(s)
              `;
};
