import { Elysia, t } from "elysia";

import { ParticipantCreateOmit } from "../../../model/cmuvc/ParticipantModel";
import {
  Role_Delete_P_Main,
  Role_Get_P_Main,
  Role_Get_Package,
  Role_PutEdit_P_Main,
} from "../../../controllers/role/cmuvc/P_Main";
import {
  RoleFetchDataSelector,
  RoleSponsorBootCmuvc_Create,
  RoleSponsorBootsCmuvc_List,
  RoleSponsorDelete_Remove,
  RoleSponsorDeleteSponsorParticipantCmuvc,
  RoleSponsorEditBootCmuvc_Update,
  RoleSponsorEditParticipantCmuvc_Update,
  RoleSponsorParticipantCmuvc_Create,
  RoleSponsorParticipantCmuvc_List,
} from "../../../controllers/role/cmuvc/S_Main";
import { Role_Get_L_All } from "../../../controllers/role/cmuvc/L_All";

export const cmuvcParticipant = new Elysia({ prefix: "/api/v1" })
  .get("/participant/list", Role_Get_P_Main, {
    query: ParticipantCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  })
  .get("/packages", Role_Get_Package, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  // Participant Main
  .put("/participant/main/edit", Role_PutEdit_P_Main, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/participant/main/delete", Role_Delete_P_Main, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })

  // Participant Pre
  .put("/participant/pre/edit", Role_PutEdit_P_Main, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/participant/pre/delete", Role_Delete_P_Main, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })

  // Sponsor Participant Cmuvc

  .get("/sponsors/list", RoleSponsorParticipantCmuvc_List, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .get("/selector", RoleFetchDataSelector, {
    detail: { tags: ["DASHBOARD"] },
  })
  .post("/sponsor/create", RoleSponsorParticipantCmuvc_Create, {
    body: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/sponsor/edit", RoleSponsorEditParticipantCmuvc_Update, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/sponsor/delete", RoleSponsorDeleteSponsorParticipantCmuvc, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .get("/sponsor/boots/list", RoleSponsorBootsCmuvc_List, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .post("/sponsor/boot/create", RoleSponsorBootCmuvc_Create, {
    body: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/sponsor/boot/edit", RoleSponsorEditBootCmuvc_Update, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/sponsor/boot/delete", RoleSponsorDelete_Remove, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
   .get("/end/event/list", Role_Get_L_All, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["DASHBOARD"] },
  })
