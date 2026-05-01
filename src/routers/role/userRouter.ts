import { Elysia } from "elysia";
import {
  AddAccountController,
  FetchUserIdPermissionSuperAdmin,
  FetchUsersList,
} from "../../controllers/role/UserController";
import { DataITSCRequestModel } from "../../model/role/UserModel";

export const userRouter = new Elysia({ prefix: "/user" })
  .post("/add-account", AddAccountController, {
    body: DataITSCRequestModel,
    detail: { tags: ["User"] },
  })
  .get("/api/v1/ids", FetchUserIdPermissionSuperAdmin, {
    detail: { tags: ["User"] },
  })
  .get("/api/v1/list", FetchUsersList, { detail: { tags: ["User"] } });

