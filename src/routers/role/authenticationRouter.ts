import { Context, Elysia } from "elysia";
import {
  Authentication360Controller,
  AuthenticationController,
  fetchCMUPersonalInfo,
  // PersonalInfo_CMU_ITSC,
} from "../../controllers/role/AuthenticationController";
import { AuthenticationRequestModel } from "../../model/role/AuthenticationModel";
import { CheckJWTService } from "../../services/CheckJWTService";

export const authenticationRouter = new Elysia({
  prefix: "/auth",
})
  .post("/exchange-code", AuthenticationController, {
    body: AuthenticationRequestModel,
    detail: { tags: ["Authentication"] },
  })

  .post("/exchange-code/360", Authentication360Controller, {
    body: AuthenticationRequestModel,
    detail: { tags: ["Authentication"] },
  })
  .get(
    "/verify-token",
    async (context: Context) => {
      const { set, jwt } = context as any;
      return await CheckJWTService(context, set, jwt);
    },
    {
      detail: { tags: ["Authentication"] },
    }
  )
  .post("/default", fetchCMUPersonalInfo);
