import { Hono } from "hono";
import { Bindings } from "hono/dist/types/types";
import { createUser, loginUser } from "../services/auth";
import { signJwt } from "../services/auth";

const api = new Hono<{ Bindings: Bindings }>();

api.post("/signup", async (c) => {
  try {
    const body = await c.req.json();

    const user = await createUser({
      email: body.email,
      password: body.password,
    });

    const token = await signJwt(user.id, c);

    return c.json({ token }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message }, 500);
    }

    return c.json({ error: "Internal server error" }, 500);
  }
});

api.post("/signin", async (c) => {
  try {
    const body = await c.req.json();

    const user = await loginUser({
      email: body.email,
      password: body.password,
    });

    const token = await signJwt(user.id, c);

    return c.json({ token }, 200);
  } catch (error) {
    if (error instanceof Error) {
      return c.json({ error: error.message }, 500);
    }

    return c.json({ error: "Internal server error" }, 500);
  }
});
