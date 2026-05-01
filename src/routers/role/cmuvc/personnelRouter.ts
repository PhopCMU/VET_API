import { Elysia } from "elysia";
import {
  Role_DeletePersonnelControler_Cmuvc,
  Role_GetPersonnelController_Cmuvc,
  Role_PostPersonnelControler_Cmuvc,
  Role_PutPersonnelControler_Cmuvc,
} from "../../../controllers/role/cmuvc/PersonnelController";
import { PersonnelCreateOmit } from "../../../model/cmuvc/ParticipantModel";

export const cmuvcPersonnel = new Elysia({ prefix: "/api/v1" })
  .get("/personnel/list", Role_GetPersonnelController_Cmuvc, {
    detail: { tags: ["DASHBOARD"] },
  })
  .post("/person/create", Role_PostPersonnelControler_Cmuvc, {
    body: PersonnelCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/person/edit", Role_PutPersonnelControler_Cmuvc, {
    query: PersonnelCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/person/delete", Role_DeletePersonnelControler_Cmuvc, {
    query: PersonnelCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  });
