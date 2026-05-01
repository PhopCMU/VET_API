import Elysia, { t } from "elysia";
import {
  Role_ParticipantController_Vetrun,
  Role_ParticipantController_Vetrun_Update_Payment,
  Role_ParticipantController_Vetrun_Update_PaymentSlip,
  RoleCheckPointControllerVetrun,
  RoleOrderShirtsControllerVetrun,
  RoleOrderShirtsControllerVetrun_Delete,
  RoleOrderShirtsControllerVetrun_Update,
  RoleOrderShirtsSlipImageControllerVetrun_Update,
  RoleOrderTrackingControllerVetrun_Update,
  RoleParticoantControllerVetRunEdit_Animal,
  RoleParticoantControllerVetRunEdit_Prticipant,
  RoleParticoantControllerVetRunRemove,
} from "../../../controllers/role/vetrun/ParticpantController";
import { EncryptedRequestModel } from "../../../model/360/UserModel";
import {
  RequestModelImageOmit,
  RequestModelImageOmitTransferFile,
} from "../../../model/EncryptImage";
import {
  VetrunSponsorRemoveLogo,
  VetrunSponsorUploadLogo,
} from "../../../controllers/vetrun/SponsorsController";
import {
  GetProjectToggle,
  UpdateProjectToggle,
} from "../../../controllers/role/vetrun/SettingController";

export const vetrunPaymentRouter = new Elysia({
  prefix: "/api/v1",
})
  .get(
    "/vetrun/payment/data/approved/list",
    Role_ParticipantController_Vetrun,
    {
      query: EncryptedRequestModel,
      detail: { tags: ["DASHBOARD"] },
    }
  )
  .put(
    "/vetrun/payment/data/approved",
    Role_ParticipantController_Vetrun_Update_Payment,
    {
      query: EncryptedRequestModel,
      detail: { tags: ["DASHBOARD"] },
    }
  )
  .delete("vetrun/participant/delete", RoleParticoantControllerVetRunRemove, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })

  .post(
    "/vetrun/payment/update/image",
    Role_ParticipantController_Vetrun_Update_PaymentSlip,
    {
      body: RequestModelImageOmit,
      detail: { tags: ["DASHBOARD"] },
    }
  )

  .post("/vetrun/logo/sponsor/image", VetrunSponsorUploadLogo, {
    body: RequestModelImageOmit,
    detail: { tags: ["DASHBOARD"] },
  })

  .delete("vetrun/sponsor/logo/delete", VetrunSponsorRemoveLogo, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })

  .put("vetrun/animal/update", RoleParticoantControllerVetRunEdit_Animal, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })

  .put(
    "vetrun/participant/update",
    RoleParticoantControllerVetRunEdit_Prticipant,
    {
      query: EncryptedRequestModel,
      detail: { tags: ["DASHBOARD"] },
    }
  )

  .get("/vetrun/tracking", RoleOrderShirtsControllerVetrun, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })

  .put(
    "/vetrun/shirt/payment/update/approved",
    RoleOrderShirtsControllerVetrun_Update,
    {
      query: EncryptedRequestModel,
      detail: { tags: ["DASHBOARD"] },
    }
  )
  .put("/vetrun/tracking/update", RoleOrderTrackingControllerVetrun_Update, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })

  .post(
    "/vetrun/shirt/slip/image",
    RoleOrderShirtsSlipImageControllerVetrun_Update,
    {
      body: RequestModelImageOmitTransferFile,
      detail: { tags: ["DASHBOARD"] },
    }
  )
  .delete("vetrun/shirt/order/delete", RoleOrderShirtsControllerVetrun_Delete, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })
  .post("/vetrun/checkpoint", RoleCheckPointControllerVetrun, {
    body: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .get("/vetrun/status", GetProjectToggle, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/vetrun/update/status", UpdateProjectToggle, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  });
