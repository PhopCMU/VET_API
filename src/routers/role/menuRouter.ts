import { Elysia } from "elysia";
import {
  AddMenuController,
  EditMenuController,
  EditSubMenuController,
  MenuController,
  RemoveMenuController,
  RemoveSubMenuController,
  SubMenuController,
} from "../../controllers/role/MenuController";
import {
  MenuIdSchema,
  MenuSchema,
  MenuSchemaCyrpto,
  SubMenuIdSchema,
  SubMenuSchema,
  SubMenuSehemaCyrpto,
} from "../../model/role/MenuModel";

export const menuRouter = new Elysia({ prefix: "/menu" })
  .get("/", MenuController, { detail: { tags: ["Menu"] } })
  .post("/add", AddMenuController, {
    body: MenuSchema,
    detail: { tags: ["Menu"] },
  })
  .post("/submenu", SubMenuController, {
    body: SubMenuSchema,
    detail: { tags: ["Menu"] },
  })

  .delete("/submenu/remove/:submenuId", RemoveSubMenuController, {
    params: SubMenuIdSchema,
    detail: { tags: ["Menu"] },
  })

  .delete("/remove/:menuId", RemoveMenuController, {
    params: MenuIdSchema,
    detail: { tags: ["Menu"] },
  })
  .put("/api/v1/update", EditMenuController, {
    query: MenuSchemaCyrpto,
    detail: { tags: ["Menu"] },
  })

  .put("/api/v1/submenu/update", EditSubMenuController, {
    query: SubMenuSehemaCyrpto,
    detail: { tags: ["Menu"] },
  });
