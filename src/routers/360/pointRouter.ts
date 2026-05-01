import { Elysia } from "elysia";

import { EncryptedRequestModel } from "../../model/360/UserModel";
import {
  addScoreController,
  addScoreController_Board,
} from "../../controllers/360/UserController";

export const ScoreRouter = new Elysia({
  prefix: "/score",
})
  .post("/send", addScoreController, {
    body: EncryptedRequestModel,
    detail: { tag: ["360"] },
  })
  .post("/send/board", addScoreController_Board, {
    body: EncryptedRequestModel,
    detail: { tag: ["360"] },
  });
