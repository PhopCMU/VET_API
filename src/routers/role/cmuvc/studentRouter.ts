import { Elysia } from "elysia";
import {
  Role_Create_Student,
  Role_Delete_Student,
  Role_Fetch_Students,
  Role_Update_Student,
} from "../../../controllers/role/cmuvc/StudentContoller";
import { StudentCreateOmit } from "../../../model/cmuvc/ParticipantModel";
// import { EncryptedRequestModel } from "../../../model/360/UserModel";

export const cmuvcStudents = new Elysia({ prefix: "/api/v1" })
  .get("/student/list", Role_Fetch_Students, {
    detail: { tag: ["DASHBOARD"] },
  })
  .post("/student/create", Role_Create_Student, {
    body: StudentCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  })
  .put("/student/edit", Role_Update_Student, {
    query: StudentCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  })
  .delete("/student/delete", Role_Delete_Student, {
    query: StudentCreateOmit,
    detail: { tags: ["DASHBOARD"] },
  });
