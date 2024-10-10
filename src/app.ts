import configDocsApi from "./lib/config-docs-api";
import createApp from "./lib/create-app";

const app = createApp();
configDocsApi(app);

app.get("/", (c) => {
  return c.json(
    {
      message: "Hello World",
    },
  );
});

export default app;
