import { t } from "elysia";

export const DepartmentSchemaCyrpto = t.Object({
  encryptedData: t.String(), // ข้อมูลที่เข้ารหัส
  status: t.Number({ default: 200 }), // สถานะการเข้ารหัส
});
