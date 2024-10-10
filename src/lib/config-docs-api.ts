import type { AppOpenApi } from "./types";
import packageJson from "../../package.json";

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
  );
}
