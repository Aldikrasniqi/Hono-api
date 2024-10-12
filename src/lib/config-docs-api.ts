import type { AppOpenApi } from "./types";
import packageJson from "../../package.json";
import { apiReference } from "@scalar/hono-api-reference"

export default function configDocsApi(app: AppOpenApi) {
  app.doc(
    "/docs",
    {
      openapi: "3.0.0",
      info: {
        version: packageJson.version,
        title: "Development tracker API",
      },
    },
  ),
  app.get(
    '/reference',
    apiReference({
      defaultHttpClient: {
        targetKey: 'javascript',
        clientKey: 'axios',
      },
      spec: {
        url: '/docs',
      },
    }),
  )
}
