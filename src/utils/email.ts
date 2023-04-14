import { formatQualities } from "./prompt";

export const generateSubjectPrompt = (
  productOrService: string,
  qualities: string[],
  amount: number
) => {
  const formattedQualities = formatQualities(qualities);
  return `Gere um assunto de email marketing que instigue a curiosidade para ${productOrService} ${formattedQualities}.
          Regras:
           - Gere ${amount} assunto(s)
  `;
};
