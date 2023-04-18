import { Hono } from "hono";
import { Bindings } from "hono/dist/types/types";
import { jwt } from "hono/jwt";

import { googleHandler } from "./handlers/google";
import { youtubeHandler } from "./handlers/youtube";
import { facebookFeedHandler } from "./handlers/facebook.feed";
import { hookHandler } from "./handlers/hook";
import { bulletHandler } from "./handlers/bullet";
import { aidaHandler } from "./handlers/aida";
import { emailHandler } from "./handlers/email";
import { decrementCredits } from "./services/credit";
import { decodeJwt } from "jose";

const app = new Hono<{ Bindings: Bindings }>();

app.use("/*", async (c, next) => {
  const auth = jwt({ secret: c.env.JWT_SECRET as string });
  return await auth(c, next);
});

app.use("/*", async (c, next) => {
  const body = await c.req.json();
  const headers = c.req.headers;
  const token: string = headers.get("Authorization")?.split(" ")[1] as string;
  const payload = decodeJwt(token);
  const prompt = body.productOrService || body.description;
  decrementCredits({ credits: prompt.length, id: payload.id as string });
  return next();
});

app.route("/google", googleHandler);

app.route("/youtube", youtubeHandler);

app.route("/facebook/feed", facebookFeedHandler);

app.route("/hook", hookHandler);

app.route("/bullet", bulletHandler);

app.route("/aida", aidaHandler);

app.route("/email", emailHandler);

app.showRoutes();

export default app;
