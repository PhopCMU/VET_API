import { Elysia } from "elysia";
import { EncryptedRequestModel } from "../../../model/360/UserModel";
import {
  Role_Participant_And_Abstract_Status,
  Role_Participant_And_Abstract_Update_Image,
  Role_Participant_List,
} from "../../../controllers/role/cmuvc/role_cmuvc";
import {
  ParticipantRequstModelImage,
  ParticipantRequstModelStatusPayment,
} from "../../../model/cmuvc/ParticipantModel";

export const cmuvcPaymentRouter = new Elysia({ prefix: "/payment" })
  .get("/data/approved", Role_Participant_List, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })
  .post(
    "/participant/update/image",
    Role_Participant_And_Abstract_Update_Image,
    {
      body: ParticipantRequstModelImage,
      detail: { tags: ["DASHBOARD"] },
    }
  )
  .post("/abstract/update/image", Role_Participant_And_Abstract_Update_Image, {
    body: ParticipantRequstModelImage,
    detail: { tags: ["DASHBOARD"] },
  })

  .put("/update/status", Role_Participant_And_Abstract_Status, {
    query: ParticipantRequstModelStatusPayment,
    detail: { tags: ["DASHBOARD"] },
  });
