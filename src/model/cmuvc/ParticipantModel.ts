// src/model/ParticipantModel.ts
import { t } from "elysia";

// Schema สำหรับ request
export const ParticipantRequestModel = t.Object({
  themeTitleId: t.String({ format: "uuid" }),
  categoryId: t.String({ format: "uuid" }),
  packagesId: t.String({ format: "uuid" }),
  packageOneDay: t.Optional(t.String({ default: "0" })), // รับค่าเฉพาะที่ เลือก 1 วัน
  selectdayId: t.String({ format: "uuid" }),
  ce: t.Optional(t.String({ default: "0" })),
  prefix: t.String(),
  fname: t.String(),
  lname: t.String(),
  phone: t.String(),
  email: t.String({ format: "email" }),
  organization: t.String(),
  country: t.String(),
  address: t.String(),
  subDistrict: t.String(),
  district: t.String(),
  province: t.String(),
  zipCode: t.String(),
  foodId: t.String({ format: "uuid" }),
  acc: t.String({ default: "true" }), // รับ string "true"/"false" ได้ใน controller
  Imagepayment: t.File({
    type: [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
      "image/gif",
      "image/bmp",
      "image/tiff",
      "image/avif",
    ],
    maxSize: 10 * 1024 * 1024,
    error: "ต้องอัปโหลดไฟล์รูปภาพ และขนาดไม่เกิน 10MB",
  }),
  payments: t.String({ default: "false" }), // รับ string "true"/"false" ได้ใน controller
});

export const ParticipantRequstModelImage = t.Object({
  encryptedData: t.String(),
  Imagepayment: t.File({
    type: [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/webp",
      "image/gif",
      "image/bmp",
      "image/tiff",
      "image/avif",
    ],
    maxSize: 100 * 1024 * 1024,
    error:
      "You must upload an image file, and the file size must not exceed... 10MB",
  }),
});

export const ParticipantRequstModelStatusPayment = t.Object({
  paymentData: t.String(),
});

export interface ParticipantRequstModelImage {
  encryptedData: string;
  Imagepayment?: File;
}

// Type สำหรับการสร้าง Participant
export interface ParticipantCreateProps {
  themeTitleId: string;
  categoryId: string;
  packagesId: string;
  packageOneDay: string;
  selectdayId: string;
  dayParticipate: string;
  ce?: string | undefined;
  prefix: string;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  organization: string;
  country: string;
  address: string;
  subDistrict: string;
  district: string;
  province: string;
  zipCode: string;
  foodId: string;
  acc?: boolean | string;
  Imagepayment: File;
  payments?: boolean | string;
}

export const VetCreateOmit = t.Object({
  encryptedData: t.String(),
});

export interface VetCreateProps {
  encryptedData: string;
}

export interface VetDataInterface {
  acciuntId: string;
  prefix: string;
  fname: string;
  lname: string;
  number_ce?: string;
}

export const StudentCreateOmit = t.Object({
  encryptedData: t.String(),
});

export interface StudentCreateProps {
  encryptedData: string;
}

export interface StudentDataInterface {
  studentId?: string;
  studentCode?: string;
  prefix: string;
  fname: string;
  lname: string;
  level: string;
  createAt: string;
  updateAt?: string;
}

export const PersonnelCreateOmit = t.Object({
  encryptedData: t.String(),
});

export interface PersonnelCreateProps {
  encryptedData: string;
}

export interface PersonnelDataInterface {
  personnelId?: string;
  prefix: string;
  fname: string;
  lname: string;
  createAt: string;
  updateAt?: string;
}

export const ParticipantCreateOmit = t.Object({
  encryptedData: t.String(),
});

export interface ParticipantCreateProps {
  encryptedData: string;
}

export interface ParticipantDataInterface {
  particpantId?: string;
  prefix: string;
  fname: string;
  lname: string;
  createAt: string;
  updateAt?: string;
}
