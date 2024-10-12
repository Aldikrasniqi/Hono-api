import configDocsApi from "./lib/config-docs-api";
import createApp from "./lib/create-app";
import router from "./routes/index.router";
const app = createApp();

const routes = [
  router
]
routes.forEach((route) => {
  app.route('/', route);
})

configDocsApi(app);
export default app;
