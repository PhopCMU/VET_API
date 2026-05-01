import { Elysia } from "elysia";
import {
  AddCertificateStudent,
  AddSroceStudent,
  FatchStudentData_admin,
  FatchStudentDataAll,
  FatchStudentDataCrypto,
  // StudentRegister,
  StudentRegisterCrypto,
  UpdataStudentText,
  UpdateStudentDataPayment,
  UpdateStudentDataPDPA,
  UpdateStudentFile,
  UpdateStudentFileImageSlip,
} from "../../controllers/anatomy/StudentController";
import {
  StudentModelCrypto,
  StudentModelEncryptedData,
  StudentModelRequest,
  // StudentRequestModel,
  StudentRequestModelCrypto,
} from "../../model/anatomy/StudentModel";

export const studentRouter = new Elysia({ prefix: "/student" })

  .post("/add", StudentRegisterCrypto, {
    body: StudentRequestModelCrypto,
    detail: { tag: ["Anatomy"] },
  })

  .get("/search", FatchStudentDataCrypto, {
    query: StudentModelCrypto,
    detail: { tag: ["Anatomy"] },
  })

  .get("/all/user", FatchStudentDataAll, {
    detail: { tag: ["Anatomy fatch all"] },
  })

  .get("/all/user/role/staff", FatchStudentData_admin, {
    detail: { tag: ["Admin Anatomy"] },
  })

  .put("/update/pdpa", UpdateStudentDataPDPA, {
    query: StudentModelRequest,
    detail: { tag: ["Admin Anatomy"] },
  })
  .put("/update/silp", UpdateStudentDataPayment, {
    query: StudentModelRequest,
    detail: { tag: ["Admin Anatomy"] },
  })
  .put("/update/text", UpdataStudentText, {
    query: StudentModelCrypto,
    detail: { tag: ["Admin Anatomy"] },
  })
  .post("/update/file", UpdateStudentFile, {
    body: StudentModelEncryptedData,
    detail: { tag: ["Admin Anatomy"] },
  })
  .post("/update/file/slip", UpdateStudentFileImageSlip, {
    body: StudentModelEncryptedData,
    detail: { tag: ["Admin Anatomy"] },
  })
  .post("/add/certificate", AddCertificateStudent, {
    body: StudentModelCrypto,
    detail: { tag: ["Admin Anatomy"] },
  })
  .post("/add/score", AddSroceStudent, {
    body: StudentModelCrypto,
    detail: { tag: ["Admin Anatomy"] },
  });
