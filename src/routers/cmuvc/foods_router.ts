import { Elysia } from "elysia";
import { FoodsController } from "../../controllers/cmuvc/FoodsController";

export const foodsRouter = new Elysia({ prefix: "/foods" }).get(
  "/",
  FoodsController,
  { detail: { tags: ["Foods"] } }
);
