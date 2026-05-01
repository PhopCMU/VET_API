import { Elysia } from "elysia";
import {
  Role_Delete_Abstract,
  Role_Fetch_Abstract_User,
  Role_Update_Abstract_File,
  Role_Update_Abstract_Status,
  Role_Update_Abstract_Test,
} from "../../../controllers/role/cmuvc/abstarct_submission/Abstract_role";
import { EncryptedRequestModel } from "../../../model/360/UserModel";
import {
  AbstractRequstModelEncrypted,
  AbstractRequstModelImageCryptoJS,
  AbstractRequstModelText,
} from "../../../model/cmuvc/AbstractModel";

export const abstractRouter = new Elysia({ prefix: "/abstract" })
  .get("/all/user/role/staff", Role_Fetch_Abstract_User, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })
  .post("/update/file", Role_Update_Abstract_File, {
    body: AbstractRequstModelImageCryptoJS,
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/update/text", Role_Update_Abstract_Test, {
    query: AbstractRequstModelText,
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/update/status", Role_Update_Abstract_Status, {
    query: AbstractRequstModelText,
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/delete", Role_Delete_Abstract, {
    query: AbstractRequstModelEncrypted,
    detail: { tags: ["DASHBOARD"] },
  });
