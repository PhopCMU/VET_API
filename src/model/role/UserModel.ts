import { t } from "elysia";

export const DataITSCRequestModel = t.Object({
  cmuitaccount: t.String(),
  cmuitaccount_name: t.String(),
  firstname_EN: t.String(),
  firstname_TH: t.String(),
  itaccounttype_EN: t.String(),
  itaccounttype_TH: t.String(),
  itaccounttype_id: t.String(),
  lastname_EN: t.String(),
  lastname_TH: t.String(),
  organization_code: t.String(),
  organization_name_EN: t.String(),
  organization_name_TH: t.String(),
  prename_EN: t.String(),
  prename_TH: t.String(),
  prename_id: t.String(),
  student_id: t.Optional(t.String()),
});

export interface DataITSCRequestProps {
  cmuitaccount: string;
  cmuitaccount_name: string;
  firstname_EN: string;
  firstname_TH: string;
  itaccounttype_EN: string;
  itaccounttype_TH: string;
  itaccounttype_id: string;
  lastname_EN: string;
  lastname_TH: string;
  organization_code: string;
  organization_name_EN: string;
  organization_name_TH: string;
  prename_EN: string;
  prename_TH: string;
  prename_id: string;
  createAt: string;
  updateAt: string;
  [key: string]: any; // Allow additional properties
}
