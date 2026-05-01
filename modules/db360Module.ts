import { Elysia } from "elysia";
import { accountRouter } from "../src/routers/360/userRouter";
import { ScoreRouter } from "../src/routers/360/pointRouter";

const db360Module = new Elysia({ prefix: "/360" })
  .use(accountRouter)
  .use(ScoreRouter);

export default db360Module;
