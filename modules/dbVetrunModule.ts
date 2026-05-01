import { swagger } from "@elysiajs/swagger";
import Elysia from "elysia";
import { vetrunRouter } from "../src/routers/vetrun/vetrunRouter";

const dbVetrunModule = new Elysia({ prefix: "/vetrun" })

  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "VET RUN API Documentation",
          description: "VET RUN Role system.",
          version: "1.0.0",
          contact: {
            name: "VET RUN Support",
            email: "sophon.m@cmu.ac.th",
            url: "https://vmcmu.vet.cmu.ac.th ",
          },
        },
        tags: [{ name: "Vetrun", description: "Vetrun API" }],
      },
      swaggerOptions: {
        persistAuthorization: true,
        displayOperationId: true,
        tryItOutEnabled: true,
        docExpansion: "list",
      },
    })
  )

  // Middleware สำหรับตรวจสอบ x-visitor-id

  .use(vetrunRouter);

export default dbVetrunModule;
