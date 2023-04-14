import { IDescriptionRequest } from "../interfaces/request.inteface";

export const generateHookPromptFrom = ({
  description,
  amount,
}: IDescriptionRequest) => {
  return `Gere ${amount} gancho(s) que instigam a curiosidade do leitor para ${description}.`;
};
