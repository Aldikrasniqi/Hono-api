import { createRouter } from "@/lib/create-app";
import { z } from "zod";

const router = createRouter().openapi({
  method: "get",
  path: "/",
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
    },
  }
},
(context) => {
  return context.json({
    message: "Hello, World!",
  },
  200
)
}

)

export default router;
