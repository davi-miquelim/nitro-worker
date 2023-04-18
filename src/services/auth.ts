import { PrismaClient } from "@prisma/client";
import { hashPassword, isPasswordStrong } from "../utils/auth";
import jose from "jose";
import { Context } from "hono";
const prisma = new PrismaClient();

interface ICreateAccountRequest {
  email: string;
  password: string;
}

export const createUser = async ({
  email,
  password,
}: ICreateAccountRequest) => {
  try {
    isPasswordStrong(password);
    const hashedPassword = await hashPassword(password);

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new Error("Email already in use");
    }

    const user = await prisma.user.create({
      data: {
        id: crypto.randomUUID(),
        email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Internal server error");
  }
};

export const loginUser = async ({ email, password }: ICreateAccountRequest) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const hashedPassword = await hashPassword(password);

    if (hashedPassword !== user.password) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Internal server error");
  }
};

export const signJwt = (id: string, context: Context) => {
  try {
    const { JWT_SECRET } = context.env;
    const token = new jose.SignJWT({ id })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(JWT_SECRET);

    return token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Internal server error");
  }
};
