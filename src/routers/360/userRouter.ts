import { Elysia } from "elysia";
import {
  fatchUserAllBoardController,
  fatchUserAllBoardSanboxController,
  fatchUserAllController,
} from "../../controllers/360/UserController";
import { EncryptedRequestModel } from "../../model/360/UserModel";

export const accountRouter = new Elysia({
  prefix: "/agency",
})
  .get("/level2", fatchUserAllController, {
    query: EncryptedRequestModel,
    detail: { tag: ["360"] },
  })

  // Get Data ชันสูตร
  .get("/level3", fatchUserAllBoardController, {
    query: EncryptedRequestModel,
    detail: { tag: ["360"] },
  })

  .get("/level2/sanbox", fatchUserAllBoardSanboxController, {
    query: EncryptedRequestModel,
    detail: { tag: ["360"] },
  });
