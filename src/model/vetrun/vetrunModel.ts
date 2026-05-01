import { t } from "elysia";

interface Animal {
  name: string;
  breed: string;
  weight: string;
  sex: string;
  fancys: boolean;
}

export interface ParticipantCreateProp {
  nameBib: string;
  payment: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  sex: string;
  age: string;
  address?: string;
  sizeId: string;
  year: string;
  transferFile: File;
  Animal: Animal;
  encryptedData: string;
}

export interface SaleShirtsCreateProp {
  encryptedData: string;
  transferFile: File;
}

export const SaleShirtsCreateModel = t.Object({
  encryptedData: t.String(),
  transferFile: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
});

export const ParticipantCreateModel = t.Object({
  encryptedData: t.String(),
  transferFile: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
});
