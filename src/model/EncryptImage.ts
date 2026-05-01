import { t } from "elysia";

export interface RequestModelImage {
  encryptedData: string;
  imageFile?: File;
}

export const RequestModelImageOmit = t.Object({
  encryptedData: t.String(),
  imageFile: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
});

export interface RequestModelImageTransferFile {
  encryptedData: string;
  transferFile?: File;
}

export const RequestModelImageOmitTransferFile = t.Object({
  encryptedData: t.String(),
  transferFile: t.File({
    type: "image/*",
    maxFileSize: 10 * 1024 * 1024,
    errorMessage: "File size must be less than 10MB",
  }),
});
