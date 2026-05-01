import { Elysia } from "elysia";
import {
  OprenProjectController,
  ProjectController,
} from "../../controllers/role/ProjectController";
import { ProjectRequestModel } from "../../model/role/ProjectModel";

export const projectRouter = new Elysia({ prefix: "/project" })
  .get("/", ProjectController, { detail: { tags: ["Project"] } })
  .get("/projectId", OprenProjectController, {
    query: ProjectRequestModel,
    detail: { tags: ["Project"] },
  });
