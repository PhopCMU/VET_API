import { Elysia, t } from "elysia";
import {
  createUser,
  deleteProfile,
  fetchUserControllerRole,
  updateProfile,
  userData,
} from "../../../controllers/role/360/UserController";
import { EncryptedRequestModel } from "../../../model/360/UserModel";

export const roleUserRouter = new Elysia({
  prefix: "/360",
});

roleUserRouter.get("/user", fetchUserControllerRole, {
  query: EncryptedRequestModel,
  detail: { tags: ["Dashboard"] },
});

roleUserRouter.get("/hr", userData, {
  detail: { tags: ["Dashboard"] },
});

roleUserRouter.post("/hr/create", createUser, {
  body: t.Object({
    encryptedData: t.String(),
    file: t.Optional(
      t.File({
        type: ["image/png", "image/jpeg", "image/jpg", "image/webp"], // อนุญาตเฉพาะไฟล์ที่เป็นรูปภาพ
        // หรือระบุเจาะจง: ["image/png", "image/jpeg", "image/jpg", "image/webp"]
      }),
    ),
  }),
  detail: { tags: ["Dashboard"] },
});

roleUserRouter.post("/hr/update", updateProfile, {
  body: t.Object({
    encryptedData: t.String(),
    // แก้ไขตรงนี้: กำหนด type เป็น image
    file: t.Optional(
      t.File({
        type: ["image/png", "image/jpeg", "image/jpg", "image/webp"], // อนุญาตเฉพาะไฟล์ที่เป็นรูปภาพ
        // หรือระบุเจาะจง: ["image/png", "image/jpeg", "image/jpg", "image/webp"]
      }),
    ),
  }),
  detail: { tags: ["Dashboard"] },
});

roleUserRouter.delete("/hr/remove", deleteProfile, {
  query: t.Object({
    data: t.String(),
  }),
  detail: { tags: ["Dashboard"] },
});
