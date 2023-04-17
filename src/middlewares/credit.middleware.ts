import { Context, Next } from "hono";
import { hasEnoughCredits } from "../services/credit";

export const creditCheckerMiddleware = async (c: Context, next: Next) => {
  const body = await c.req.json();
};
