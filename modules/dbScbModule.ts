import { Elysia } from "elysia";
import jwt from "@elysiajs/jwt";
import { scbRouter } from "../src/routers/role/PaymentSCB/scbRouter";

const dbScbModule = new Elysia({ prefix: "/scb" })
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET_KEY ?? "",
    })
  )

  .use(scbRouter);
export default dbScbModule;
