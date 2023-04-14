import { formatQualities } from "./prompt";

export const generateDescriptionPrompt = (
  productOrService: string,
  qualities: string[],
  amount: number
) => {
  const formattedQualities = formatQualities(qualities);

  return `Gere ${amount} descrições de anúnico Google Ads com no máximo 90 caracteres para ${productOrService} ${formattedQualities}.`;
};

export const generateKeywordsPromptFrom = (
  productOrService: string,
  qualities: string[],
  amount: number
) => {
  const formattedQualities = formatQualities(qualities);

  return `Gere ${amount} palavras-chave Google Ads para ${productOrService} ${formattedQualities}.`;
};

export const generateTitlePrompt = (
  productOrService: string,
  qualities: string[],
  amount: number
) => {
  const formattedQualities = formatQualities(qualities);
  return `Gere ${amount} título persuasivo de anuncio Google Ads para ${productOrService} ${formattedQualities}.

              Regras:
              - O título deve seguir a estrutura: "Produto ou serviço (sinônimos são permitidos) - Qualidade".
              - Sinônimos são permitidos, mas são opcionais.
              - O título não deve conter mais de 30 caracteres.
              - O título deve ter no máximo 30 caracteres (EXTREMAMENTE IMPORTANTE).
              - O título deve ser persuasivo.
              `;
};
