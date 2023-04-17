import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { ICreditRequest } from "../interfaces/credits.interface";

export const decrementCredits = ({ credits, id }: ICreditRequest) => {
  prisma.user.update({
    where: {
      id: id,
    },
    data: {
      credits: {
        decrement: credits,
      },
    },
  });
};

export const incrementCredits = ({ credits, id }: ICreditRequest) => {
  prisma.user.update({
    where: {
      id: id,
    },
    data: {
      credits: {
        increment: credits,
      },
    },
  });
};

export const hasEnoughCredits = async ({ credits, id }: ICreditRequest) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (user && user.credits > credits) {
    return true;
  }

  return false;
};
