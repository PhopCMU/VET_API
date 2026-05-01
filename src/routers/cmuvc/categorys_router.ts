import { Elysia } from "elysia";
import { CatgorysController } from "../../controllers/cmuvc/CategorysController";

export const categoryRouter = new Elysia({ prefix: "/categorys" }).get(
  "/",
  CatgorysController,
  { detail: { tags: ["Categorys"] } }
);
