import { Hono } from "hono";
import { Bindings } from "hono/dist/types/types";
import { generateBulletPoints } from "../services/bullet";

const api = new Hono<{ Bindings: Bindings }>();

api.post("", async (c) => {
  if (c.req.method !== "POST") c.json({ error: "Method not allowed" }, 405);

  const body = await c.req.json();

  try {
    const { productOrService, qualities, amount = 1 } = body;

    const response = await generateBulletPoints({
      productOrService,
      qualities,
      amount,
    });

    return c.json(response, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message }, 500);
    }

    return c.json({ error: "Internal server error" }, 500);
  }
});

export { api as bulletHandler };
