import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { notFound, onError } from "stoker/middlewares";

import { pinoLogger } from "@/middlewares/pino-logger";

import type { AppBindings } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
  });
}

export default function createApp() {
  const app = createRouter();
  app.use(pinoLogger());
  app.use(cors());
  app.notFound(notFound);
  app.onError(onError);
  return app;
}
