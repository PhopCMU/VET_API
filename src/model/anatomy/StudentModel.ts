import { t } from "elysia";

export const StudentRequestModel = t.Object({
  prefix: t.String(),
  fname: t.String(),
  levelup: t.String(),
  school: t.String(),
  address: t.String(),
  hdb: t.String(),
  age: t.String(),
  cardId: t.String(),
  phone: t.String(),
  email: t.String({ format: "email" }),
  uploadImage: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
  uploadPDPA: t.File({
    type: "application/pdf",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
  uploadSlip: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
});

export const StudentRequestModelCrypto = t.Object({
  encryptedData: t.String(),
  uploadImage: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
  uploadPDPA: t.File({
    type: "application/pdf",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
  uploadSlip: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
});

export const StudentModelRequest = t.Object({
  studentId: t.String({ format: "uuid" }),
});

export const StudentModelCrypto = t.Object({
  studentData: t.String(),
});
export const StudentModelEncryptedData = t.Object({
  encryptedData: t.String(),
  uploadImage: t.Optional(
    t.File({
      type: "image/*",
      maxFileSize: 10 * 1024 * 1024,
      errorMessage: "File size must be less than 10MB",
    })
  ),
  uploadPDPA: t.Optional(
    t.File({
      type: "application/pdf",
      maxFileSize: 10 * 1024 * 1024,
      errorMessage: "File size must be less than 10MB",
    })
  ),
  uploadSlip: t.Optional(
    t.File({
      type: "image/*",
      maxFileSize: 10 * 1024 * 1024,
      errorMessage: "File size must be less than 10MB",
    })
  ),
});

export interface StudentCreateProp {
  encryptedData: string;
}

export interface StudentUpdateEncryptedDataIdProp {
  studentId: string;
  uploadImage: File;
  uploadPDPA: File;
}

export interface StudentCreateProp {
  prefix: string;
  fname: string;
  levelup: string;
  school: string;
  address: string;
  hdb: string;
  age: string;
  cardId: string;
  phone: string;
  email: string;
  uploadImage: File;
  uploadPDPA: File;
  uploadSlip: File;
}

export interface StudentUpdateProp {
  studentId: string;
  prefix: string;
  fname: string;
  levelup: string;
  school: string;
  address: string;
  hdb: string;
  age: string;
  cardId: string;
  phone: string;
  email: string;
}

export interface AnatomyData {
  studentId: string;
  prefix: string;
  fname: string;
  school: string;
  address: string;
  phone: string;
  email: string;
  uploadSlip: string;
  examSeatNumber: string | any;
}

export interface AnatomyDataUpdateSroceProp {
  term: string;
  subject: string;
  score: number;
  studentId: string;
}

export interface AnatomyDataUpdateCertificateProp {
  studentId: string;
  downloadUrl: string;
}
