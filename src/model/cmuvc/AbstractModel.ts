import { t } from "elysia";

export const AbstractRequestModel = t.Object({
  abstractTypeId: t.String({ format: "uuid" }),
  categoryId: t.String({ format: "uuid" }),
  packagesId: t.String({ format: "uuid" }),
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
  titleAbstarct: t.String(),
  fileAbstarct: t.File({
    type: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    maxSize: 100 * 1024 * 1024,
    error:
      "You must upload a document file, and the file size must not exceed... 10MB",
  }),
  payments: t.String({ default: "false" }), // รับ string "true"/"false" ได้ใน controller
});

export const AbstractRequstModelImage = t.Object({
  abstractId: t.String({ format: "uuid" }),
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

export const AbstractRequstModelImageCryptoJS = t.Object({
  encryptedData: t.String(),
  fileAbstract: t.File({
    type: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    maxSize: 100 * 1024 * 1024,
    error:
      "You must upload a document file, and the file size must not exceed... 10MB",
  }),
});

export const AbstractFetchDataModel = t.Object({
  email: t.String({ format: "email", error: "Invalid email format" }),
});

export const AbstractRequstModelText = t.Object({ abstractData: t.String() });
export const AbstractRequstModelEncrypted = t.Object({
  encryptedData: t.String(),
});

export interface AbstractCreateProps {
  abstractTypeId: string;
  categoryId: string;
  packagesId: string;
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
  titleAbstarct: string;
  fileAbstarct: File;
  payments?: boolean | string;
}

export interface AbstractTypeImageProps {
  abstractId: string;
  Imagepayment: {
    name: string;
    arrayBuffer: () => Promise<ArrayBuffer>;
  };
}

export interface AbstractUpdateFileProps {
  encryptedData: string;
  fileAbstract: File;
}

export interface AbstractFetchDataProps {
  email: string;
}
