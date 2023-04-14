import { formatQualities } from "./prompt";

export const generateBulletPointsPrompt = (
  productOrService: string,
  qualities: string[],
  amount: number
) => {
  const formattedQualities = formatQualities(qualities);
  return `Gere tópicos persuasivos para o seguinte produto ou serviço: ${productOrService} com as seguintes qualidades: ${formattedQualities}.
          Regras:
          - Gerar ${amount} item(ns)
  `;
};
