import { t } from "elysia";
export const ProjectRequestModel = t.Object({
  projectId: t.String({ format: "uuid" }),
});

export interface ProjectModel {
  projectId: string;
  name: string;
  description?: string;
  database: string;
  part?: string;
  position?: number;
  createdAt: Date;
  updatedAt: Date;
}
