import { t } from "elysia";

export const EncryptedRequestModel = t.Object({
  encryptedData: t.String(),
});
export interface EncryptedPropsModel {
  encryptedData: string;
}

export interface AccountModalProps {
  accountId: string; // UUID
  fullname_th: string;
  fullname_en?: string; // Optional
  cmuaccount: string;
  accounttype_th: string;
  accounttype_en?: string; // Optional
  positiontitle_th: string;
  positiontitle_en?: string; // Optional
  ratenumber?: string; // Optional
  level1agency_th: string;
  level1agency_en?: string; // Optional
  level2agency_th: string;
  level2agency_en?: string; // Optional
  level3agency_th?: string; // Optional
  level3agency_en?: string; // Optional
  workingstatus: boolean; // Default true
  createdAt: Date;
  updatedAt: Date;
  evaluations: EvaluationProps[]; // Assuming Evaluation interface is defined
}

export interface EvaluationProps {
  evaluationId: string; // UUID
  topic1?: number; // Optional numeric score
  topic2?: number;
  topic3?: number;
  topic4?: number;
  topic5?: number;
  topic6?: number;
  topic7?: number;
  topic8?: number;
  topic9?: number;
  createdAt: Date;
  updatedAt: Date;
  accountId: string; // Reference to User.accountId
  user?: AccountModalProps; // Optional relation to User
}
