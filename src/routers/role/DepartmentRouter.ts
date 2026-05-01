import Elysia from "elysia";
import {
  DepartmentMemberShip_Controller_Create,
  MainDepartment_Controller_Create,
  MainDepartment_Controller_Get_All,
  SubDepartment_Controller_Create,
} from "../../controllers/role/DepartmentsController";
import { DepartmentSchemaCyrpto } from "../../model/role/RoleModel";

export const departmentRouter = new Elysia({
  prefix: "/api/v1/department",
})
  .post("/create", MainDepartment_Controller_Create, {
    body: DepartmentSchemaCyrpto,
    detail: { tags: ["Department"] },
  })
  .post("/sub/create", SubDepartment_Controller_Create, {
    body: DepartmentSchemaCyrpto,
    detail: { tags: ["Department"] },
  })
  .post("/ship/create", DepartmentMemberShip_Controller_Create, {
    body: DepartmentSchemaCyrpto,
    detail: { tags: ["Department"] },
  })
  .get("/list", MainDepartment_Controller_Get_All, {
    detail: { tags: ["Department"] },
  });
