import { Hono } from "hono";
import { Bindings } from "hono/dist/types/types";
import { generateEmailMarketingSubjects } from "../services/email";

const api = new Hono<{ Bindings: Bindings }>();

api.post("subject", async (c) => {
  if (c.req.method !== "POST") c.json({ error: "Method not allowed" }, 405);

  const body = await c.req.json();

  try {
    const { productOrService, qualities, amount = 1 } = body;

    const response = await generateEmailMarketingSubjects({
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

export { api as emailHandler };
