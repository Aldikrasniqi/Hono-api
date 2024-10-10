import type { ZodError } from "zod";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config());

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(3000),
});

export type env = z.infer<typeof EnvSchema>;
let env: env;
try {
  env = EnvSchema.parse(process.env);
}
catch (e) {
  const error = e as ZodError;
  console.log("Invalid environment variables:");
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
