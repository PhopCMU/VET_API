import { Elysia } from "elysia";
import {
  Role_Created_Vet,
  Role_Delete_Vet,
  Role_Fetch_Vet,
  Role_Update_Vet,
} from "../../../controllers/role/cmuvc/VetController";

import { EncryptedRequestModel } from "../../../model/360/UserModel";
import { VetCreateOmit } from "../../../model/cmuvc/ParticipantModel";

export const cmuvcVet = new Elysia({ prefix: "/api/v1" })
  .get("/vet/list", Role_Fetch_Vet, {
    detail: { tag: ["DASHBOARD"] },
  })
  .put("/vet/edit", Role_Update_Vet, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  })
  .post("/vet/create", Role_Created_Vet, {
    body: VetCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/vet/delete", Role_Delete_Vet, {
    query: EncryptedRequestModel,
    detail: { tags: ["DASHBOARD"] },
  });
