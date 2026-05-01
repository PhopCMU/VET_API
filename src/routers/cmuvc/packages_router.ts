import { Elysia } from "elysia";
import { ListThemeController } from "../../controllers/cmuvc/ListThemeController";

export const packagesRouter = new Elysia({ prefix: "/packages" }).get(
  "/listData/:mainId",
  ListThemeController,
  { detail: { tags: ["Packages"] } }
);
