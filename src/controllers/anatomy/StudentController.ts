import { Context } from "elysia";
import { promises as fs } from "fs";
import path from "path";
import { PrismaClient } from "../../../generated/anatomy";
import {
  AnatomyData,
  AnatomyDataUpdateCertificateProp,
  AnatomyDataUpdateSroceProp,
  StudentCreateProp,
  StudentUpdateEncryptedDataIdProp,
  StudentUpdateProp,
} from "../../model/anatomy/StudentModel";
import {
  sendTelegramNotificationAnatomy,
  sendTelegramNotificationTextAnatomy,
} from "../../services/TelegramBot";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";
import { randomUUIDv7 } from "bun";
import { CheckJWTAuthention } from "../../services/CheckJWTService";
import { unlink } from "fs/promises";
import { getClientIp } from "../../utils/rateLimiter";
const prisma = new PrismaClient();

const UPLOAD_DIR = {
  profile: path.join(process.cwd(), "uploads", "dataAnatomy", "profile"),
  pdpa: path.join(process.cwd(), "uploads", "dataAnatomy", "pdpa"),
  slips: path.join(process.cwd(), "uploads", "dataAnatomy", "slips"),
};

const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
const allowedPDPAExtensions = ["pdf"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 5 MB
const MAX_PDPA_SIZE = 10 * 1024 * 1024; // 10 MB

const now = new Date(); // เวลา UTC จริง
const requestTime = new Intl.DateTimeFormat("th-TH", {
  timeZone: "Asia/Bangkok",
  hour12: false,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}).format(now);

export const StudentRegisterCrypto = async ({
  body,
  set,
  request,
}: Context & { body: StudentCreateProp }) => {
  const clientIp = getClientIp(request) || "ANATOMY";

  console.info(`-`.repeat(80));
  console.info(`[${requestTime}] [IP: ${clientIp}] Starting Create Student:`);

  // 🔐 ถอดรหัสข้อมูล
  const decryptedData = decryptMiddleware(body.encryptedData);

  if (!decryptedData) {
    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  // ✅ ใช้งานข้อมูลที่ถอดแล้วได้ที่นี่
  // console.log("Decrypted Data:", decryptedData);

  // ตัวอย่าง: ตรวจสอบ structure ของข้อมูล
  const studentData = decryptedData as StudentCreateProp;

  const {
    prefix,
    fname,
    levelup,
    school,
    address,
    hdb,
    age,
    cardId,
    phone,
    email,
  } = studentData;

  const { uploadImage, uploadPDPA, uploadSlip } = body;

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Validating input for ID Card: ${cardId}`,
  );

  const [existingCardId] = await Promise.all([
    prisma.student.findUnique({
      where: {
        cardId: cardId,
      },
    }),
  ]);

  if (existingCardId) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] ID Card: ${cardId} already exists`,
    );
    set.status = 400;
    return {
      success: false,
      message: "ID Card already exists",
    };
  }

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Checking File Type Image Student: ${uploadImage.name}`,
  );
  const allowedExtensionsStudent = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
  const imageExtStudent = uploadImage.name.split(".").pop()?.toLowerCase();
  const maxFileSizeStudent = 10 * 1024 * 1024; // 10MB
  const imageBufferStudent = Buffer.from(await uploadImage.arrayBuffer());

  if (!imageExtStudent || !allowedExtensionsStudent.includes(imageExtStudent)) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Invalid file type Image Student: ${imageExtStudent}`,
    );
    set.status = 400;
    return {
      success: false,
      message: "Invalid file type Image Student",
    };
  }

  if (imageBufferStudent.length > maxFileSizeStudent) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] File size must be less than 10MB`,
    );
    set.status = 400;
    return {
      success: false,
      message: "File size must be less than 10MB",
    };
  }

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Checking File Type Image Student: Success`,
  );

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Checking File type Image Slip: ${uploadSlip.name}`,
  );

  const allowedExtensionsSlip = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
  const imageExtSlip = uploadSlip.name.split(".").pop()?.toLowerCase();
  const maxFileSizeSlip = 10 * 1024 * 1024; // 10MB
  const imageBufferSlip = Buffer.from(await uploadSlip.arrayBuffer());

  if (!imageExtSlip || !allowedExtensionsSlip.includes(imageExtSlip)) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Invalid file type Image Slip: ${imageExtSlip}`,
    );
    set.status = 400;
    return {
      success: false,
      message: "Invalid file type Image Slip",
    };
  }

  if (imageBufferSlip.length > maxFileSizeSlip) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] File size must be less than 10MB`,
    );
    set.status = 400;
    return {
      success: false,
      message: "File size must be less than 10MB",
    };
  }

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Checking File Type Image Slip: Success`,
  );

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Checking File type PDPA: ${uploadPDPA.name}`,
  );

  const allowedExtensionsPDPA = ["pdf"];
  const imageExtPDPA = uploadPDPA.name.split(".").pop()?.toLowerCase();
  const maxFileSizePDPA = 10 * 1024 * 1024; // 10MB
  const imageBufferPDPA = Buffer.from(await uploadPDPA.arrayBuffer());

  if (!imageExtPDPA || !allowedExtensionsPDPA.includes(imageExtPDPA)) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Invalid file type PDPA: ${imageExtPDPA}`,
    );
    set.status = 400;
    return {
      success: false,
      message: "Invalid file type PDPA",
    };
  }

  if (imageBufferPDPA.length > maxFileSizePDPA) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] File size must be less than 10MB`,
    );
    set.status = 400;
    return {
      success: false,
      message: "File size must be less than 10MB",
    };
  }

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Checking File Type PDPA: Success`,
  );

  const sanitizedFname = randomUUIDv7();
  const newProfileName = `${sanitizedFname}-${"Profile"}-${Date.now()}.${imageExtStudent}`;
  const newPDPAName = `${sanitizedFname}-${"PDPA"}-${Date.now()}.${imageExtPDPA}`;
  const newSlipName = `${sanitizedFname}-${"Slip"}-${Date.now()}.${imageExtSlip}`;

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Rename Profile: Success`,
    newProfileName,
  );
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Rename PDPA: Success`,
    newPDPAName,
  );
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Rename Slip: Success`,
    newSlipName,
  );

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting to create student to database: `,
  );

  const res = await prisma.student.create({
    data: {
      prefix: prefix,
      fname: fname,
      levelup: levelup,
      school: school,
      address: address,
      hdb: hdb,
      age: age,
      cardId: cardId,
      phone: phone,
      email: email,
      uploadImage: newProfileName,
      uploadPDPA: newPDPAName,
      uploadSlip: newSlipName,
    },
  });

  if (!res) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Failed to create student to database`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Failed to create student to database",
    };
  }

  // ✅ ใช้ SEQUENCE ในการออกเลขที่นั่งสอบทันที
  try {
    const result = await prisma.$queryRaw<{ nextval: bigint }[]>`
    SELECT nextval('exam_seat_number_seq') AS "nextval"
  `;

    const seatNumber = result[0].nextval.toString().padStart(3, "0");

    const updateRes = await prisma.student.update({
      where: { studentId: res.studentId },
      data: { examSeatNumber: seatNumber },
    });

    console.info(
      `[${requestTime}] [IP: ${clientIp}] Assigned Exam Seat Number: ${seatNumber}`,
    );

    console.info(
      `[${requestTime}] [IP: ${clientIp}] Preparing Telegram notification payload`,
    );

    const payload: AnatomyData = {
      studentId: updateRes.studentId,
      prefix: updateRes.prefix,
      fname: updateRes.fname,
      school: updateRes.school,
      address: updateRes.address,
      phone: updateRes.phone,
      email: updateRes.email,
      uploadSlip: updateRes.uploadSlip,
      examSeatNumber: updateRes.examSeatNumber,
    };
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Starting Telegram notification process`,
    );
    const imageBufferSlip = Buffer.from(await uploadSlip.arrayBuffer());
    await sendTelegramNotificationAnatomy(payload, imageBufferSlip, set);
    await sendTelegramNotificationTextAnatomy(payload, set);
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Telegram notification sent successfully`,
    );

    console.info(
      `[${requestTime}] [IP: ${clientIp}] Creating upload directories`,
    );
    const uploadDirs = {
      image: path.join(process.cwd(), "uploads/dataAnatomy/profile"),
      pdpa: path.join(process.cwd(), "uploads/dataAnatomy/pdpa"),
      slip: path.join(process.cwd(), "uploads/dataAnatomy/slips"),
    };

    console.info(`[${requestTime}] [IP: ${clientIp}] Saving uploaded files`);
    const imageBufferStudent = Buffer.from(await uploadImage.arrayBuffer());
    const imageBufferPDPA = Buffer.from(await uploadPDPA.arrayBuffer());
    await Promise.all([
      fs.writeFile(
        path.join(uploadDirs.image, newProfileName),
        imageBufferStudent,
      ),
      fs.writeFile(path.join(uploadDirs.pdpa, newPDPAName), imageBufferPDPA),
      fs.writeFile(path.join(uploadDirs.slip, newSlipName), imageBufferSlip),
    ]);
    console.info(`[${requestTime}] [IP: ${clientIp}] Files saved successfully`);

    console.info(
      `[${requestTime}] [IP: ${clientIp}] Student registration completed successfully`,
    );

    set.status = 201;
    return {
      success: true,
      message: "Student registration successful",
      data: {
        studentId: updateRes.studentId,
        examSeatNumber: updateRes.examSeatNumber,
        timestamp: requestTime,
      },
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Registration failed: ${error.message}`,
    );
    if (error.response) {
      console.error(
        `[${requestTime}] [IP: ${clientIp}] Error details: ${JSON.stringify(
          error.response,
        )}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "Student registration failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Registration process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const FatchStudentDataCrypto = async ({
  query,
  request,
  set,
}: Context & { query: StudentCreateProp }) => {
  const clientIp = getClientIp(request) || "ANATOMY";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Fatch Data Student:`,
  );

  try {
    if (!query.studentData) {
      console.error(
        `[${requestTime}] [IP: ${clientIp}] Missing encrypted data in query`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }
    // ✅ DecodeURIComponent ก่อน decrypt
    const decodedEncryptedData = decodeURIComponent(query.studentData);

    // 🔐 ถอดรหัสข้อมูล
    const decryptedData = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(
        `[${requestTime}] [IP: ${clientIp}] Failed to decrypt data`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    if (typeof decryptedData !== "object" || !("cardId" in decryptedData)) {
      console.error(
        `[${requestTime}] [IP: ${clientIp}] Invalid decrypted data format`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Invalid data format after decryption",
      };
    }

    const studentData = decryptedData as { cardId: string };
    console.info(`[${requestTime}] [IP: ${clientIp}] Decrypted Data Success:`);
    const { cardId } = studentData;

    console.info(
      `[${requestTime}] [IP: ${clientIp}] Strtart Fatch Data Student:`,
      cardId,
    );
    const res = await prisma.student.findFirst({
      where: {
        cardId: cardId,
      },
      include: {
        scores: {
          select: {
            scoreId: true,
            term: true,
            subject: true,
            score: true,
            createdAt: true,
          },
          orderBy: {
            term: "asc",
          },
        },

        certificates: true,
      },
    });

    if (res) {
      set.status = 200;
      return {
        success: true,
        message: "Data found",
        data: res,
      };
    } else {
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Failed to fetch Student types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Failed to fetch Student types",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Fatch Data Student process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const FatchStudentDataAll = async ({ request, set }: Context) => {
  const clientIp = getClientIp(request) || "ANATOMY";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Fatch Data Student [All]:`,
  );

  const currentYear = new Date().getFullYear();
  try {
    const res = await prisma.student.findMany({
      where: {
        payments: true,
        paperPDPA: true,
        accepted: true,
        createdAt: {
          gte: new Date(`${currentYear}-01-01T00:00:00Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00Z`),
        },
      },
      select: {
        studentId: true,
        prefix: true,
        fname: true,
        levelup: true,
        examSeatNumber: true,
        school: true,
        age: true,
      },
    });

    if (res.length > 0) {
      set.status = 200;
      return {
        success: true,
        message: "Data found",
        data: res,
      };
    } else {
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Failed to fetch Student types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Failed to fetch Student types",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Fatch All Data Student process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const FatchStudentData_admin = async ({
  set,
  request,
  jwt,
}: Context & { jwt: any }) => {
  const authToken = request.headers.get("Authorization") ?? "";
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] [Dashboard] Starting Fatch Data Student: [ADMIN]`,
  );

  // ดึงข้อมูลที่เป็นปีปัจจุบัน
  const currentYear = new Date().getFullYear();
  try {
    console.log(`[${requestTime}] [Menu] START | Fetching Menu Student`);

    // JWT Authentication
    console.log(`[${requestTime}] [Menu] AUTHENTICATING | IP: ${clientIp}`);
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.log(`[${requestTime}] [Menu] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const res = await prisma.student.findMany({
      where: {
        accepted: true,
        createdAt: {
          gte: new Date(`${currentYear}-01-01T00:00:00Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00Z`),
        },
      },
      include: {
        scores: true,
        certificates: true,
      },
      orderBy: {
        examSeatNumber: "asc",
      },
    });

    if (res.length > 0) {
      console.log(
        `[${requestTime}] [Success] Fetching Menu Student | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
      );
      set.status = 200;
      return {
        success: true,
        message: "Data found",
        data: res,
      };
    } else {
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Failed to fetch Student types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Failed to fetch Student types",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Fatch All Data Student process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const UpdateStudentDataPDPA = async ({
  query,
  request,
  set,
  jwt,
}: Context & { jwt: any; query: string }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Update PDPA Student: [ADMIN]`,
  );
  try {
    console.log(`[${requestTime}] [Student] AUTHENTICATING | IP: ${clientIp}`);
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );
    console.log(
      `[${requestTime}] [Student] STUDENT ID | IP: ${clientIp} | ${query.studentId}`,
    );

    const updatePDPA = await prisma.student.update({
      where: {
        studentId: query.studentId,
      },
      data: {
        paperPDPA: true,
      },
    });

    console.log(
      `[${requestTime}] [Student] UPDATE PDPA | IP: ${clientIp} | ${updatePDPA.studentId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update Student PDPA Success",
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student PDPA Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student PDPA Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student PDPA process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const UpdateStudentDataPayment = async ({
  query,
  request,
  set,
  jwt,
}: Context & { jwt: any; query: string }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting update payment Student: [ADMIN]`,
  );
  try {
    console.log(`[${requestTime}] [Student] AUTHENTICATING | IP: ${clientIp}`);
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );
    console.log(
      `[${requestTime}] [Student] STUDENT ID | IP: ${clientIp} | ${query.studentId}`,
    );

    const updatePDPA = await prisma.student.update({
      where: {
        studentId: query.studentId,
      },
      data: {
        payments: true,
      },
    });

    console.log(
      `[${requestTime}] [Student] UPDATE PAYMENT STATUS SUCCESSFUL | IP: ${clientIp} | ${updatePDPA.studentId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update Student payment Success",
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student payment Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student payment Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student payment process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const UpdateStudentFile = async ({
  body,
  set,
  request,
  jwt,
}: Context & { jwt: any; body: StudentCreateProp }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting update file Student: [ADMIN]`,
  );
  try {
    console.log(`[${requestTime}] [Student] AUTHENTICATING | IP: ${clientIp}`);
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    const decryptedData = decryptMiddleware(body.encryptedData);

    const studentData = decryptedData as StudentUpdateEncryptedDataIdProp;

    const studentId = studentData.studentId;
    const { uploadImage, uploadPDPA } = body;

    const searchData = await prisma.student.findFirst({
      where: {
        studentId: studentId,
      },
    });

    if (!searchData) {
      console.error(
        `[${requestTime}] [Student] STUDENT NOT FOUND | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Student not found",
      };
    }

    if (!uploadImage && !uploadPDPA) {
      return {
        success: false,
        message: "No files uploaded",
      };
    }

    let newProfileName: string | null = null;
    let newPDPAName: string | null = null;

    // Validate & generate filename for Image
    if (uploadImage) {
      const imageExt = uploadImage.name.split(".").pop()?.toLowerCase();
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        return {
          success: false,
          message: "Invalid image format",
        };
      }

      const imageSize = Buffer.byteLength(await uploadImage.arrayBuffer());
      if (imageSize > MAX_IMAGE_SIZE) {
        return {
          success: false,
          message: "Image size exceeds limit (5MB)",
        };
      }

      const sanitizedFname = randomUUIDv7();
      newProfileName = `${sanitizedFname}-Profile-${Date.now()}.${imageExt}`;
    }

    // Validate & generate filename for PDPA
    if (uploadPDPA) {
      const pdpaExt = uploadPDPA.name.split(".").pop()?.toLowerCase();
      if (!pdpaExt || !allowedPDPAExtensions.includes(pdpaExt)) {
        return {
          success: false,
          message: "Invalid PDPA format",
        };
      }

      const pdpaSize = Buffer.byteLength(await uploadPDPA.arrayBuffer());
      if (pdpaSize > MAX_PDPA_SIZE) {
        return {
          success: false,
          message: "PDPA size exceeds limit (10MB)",
        };
      }

      const sanitizedFname = randomUUIDv7();
      newPDPAName = `${sanitizedFname}-PDPA-${Date.now()}.${pdpaExt}`;
    }

    // Delete old files only if the corresponding new file is provided
    const deletionPromises = [];

    if (uploadImage && searchData.uploadImage) {
      const oldImagePath = path.join(
        UPLOAD_DIR.profile,
        searchData.uploadImage,
      );
      deletionPromises.push(
        unlink(oldImagePath).catch((err) =>
          console.warn(
            `[${requestTime}] Failed to delete old image: ${oldImagePath}`,
            err.message,
          ),
        ),
      );
    }

    if (uploadPDPA && searchData.uploadPDPA) {
      const oldPdpaPath = path.join(UPLOAD_DIR.pdpa, searchData.uploadPDPA);
      deletionPromises.push(
        unlink(oldPdpaPath).catch((err) =>
          console.warn(
            `[${requestTime}] Failed to delete old PDPA: ${oldPdpaPath}`,
            err.message,
          ),
        ),
      );
    }

    await Promise.all(deletionPromises);

    // Prepare update data
    const updateData: {
      uploadImage?: string;
      uploadPDPA?: string;
    } = {};

    if (newProfileName) updateData.uploadImage = newProfileName;
    if (newPDPAName) updateData.uploadPDPA = newPDPAName;

    const updatedStudent = await prisma.student.update({
      where: { studentId },
      data: updateData,
    });

    // Write new files to disk
    const writePromises = [];

    if (uploadImage && newProfileName) {
      const imageBuffer = Buffer.from(await uploadImage.arrayBuffer());
      writePromises.push(
        fs.writeFile(
          path.join(UPLOAD_DIR.profile, newProfileName),
          imageBuffer,
        ),
      );
    }

    if (uploadPDPA && newPDPAName) {
      const pdpaBuffer = Buffer.from(await uploadPDPA.arrayBuffer());
      writePromises.push(
        fs.writeFile(path.join(UPLOAD_DIR.pdpa, newPDPAName), pdpaBuffer),
      );
    }
    await Promise.all(writePromises);
    console.log(
      `[${requestTime}] [Student] UPDATE SUCCESSFUL | IP: ${clientIp} | Student ID: ${updatedStudent.studentId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update Student File Success",
      data: {
        studentId: updatedStudent.studentId,
        uploadImage: updatedStudent.uploadImage,
        uploadPDPA: updatedStudent.uploadPDPA,
      },
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student File Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student File Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student File process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const UpdataStudentText = async ({
  query,
  request,
  set,
  jwt,
}: Context & { jwt: any; query: StudentCreateProp }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Updata Text Student: [ADMIN]`,
  );
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    console.log(
      `[${requestTime}] [Student] DECRYPT CODE | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    const decryptedData = decryptMiddleware(query.studentData);
    const studentData = decryptedData as StudentUpdateProp;

    // Filter out undefined or empty values and ensure only valid fields are updated
    const updateData = Object.fromEntries(
      Object.entries(studentData).filter(
        ([key, value]) =>
          key !== "studentId" && value !== undefined && value !== "",
      ),
    );

    // Convert levelup to string if it exists
    if (updateData.levelup !== undefined) {
      updateData.levelup = String(updateData.levelup);
      console.log(
        `[${requestTime}] [Student] LEVELUP CONVERTED TO STRING | IP: ${clientIp} | levelup: ${updateData.levelup}`,
      );
    }

    if (updateData.age !== undefined) {
      updateData.age = String(updateData.age);
      console.log(
        `[${requestTime}] [Student] AGE CONVERTED TO STRING | IP: ${clientIp} | age: ${updateData.age}`,
      );
    }

    if (Object.keys(updateData).length === 0) {
      console.log(
        `[${requestTime}] [Student] NO VALID FIELDS | IP: ${clientIp} | No fields to update`,
      );
      set.status = 400;
      return {
        success: false,
        message: "No valid fields provided for update",
      };
    }
    const update = await prisma.student.update({
      where: { studentId: studentData.studentId },
      data: updateData,
    });

    console.log(
      `[${requestTime}] [Student] UPDATE SUCCESSFUL | IP: ${clientIp} | Student ID: ${update.studentId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update Student Text Success",
      data: {
        studentId: update.studentId,
      },
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student Text Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student Text Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student Text process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const AddSroceStudent = async ({
  body,
  request,
  set,
  jwt,
}: Context & { jwt: any; body: any }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Sroce Data Student: [ADMIN]`,
  );

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    console.log(
      `[${requestTime}] [Student] DECRYPT CODE | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    const decryptedData = decryptMiddleware(body.studentData);

    // ตรวจสอบ type ก่อนใช้งาน
    if (!Array.isArray(decryptedData)) {
      throw new Error("Decrypted data is not an array");
    }

    const studentScores: AnatomyDataUpdateSroceProp[] = decryptedData;

    for (const score of studentScores) {
      const { studentId, term, subject, score: value } = score;

      const scoreString = String(value);

      // เช็กว่ามีข้อมูลใน DB หรือไม่
      const existingScore = await prisma.score.findFirst({
        where: {
          studentId,
          term,
          subject,
        },
      });

      if (existingScore) {
        // อัปเดตข้อมูลเก่า
        await prisma.score.update({
          where: {
            scoreId: existingScore.scoreId,
          },
          data: {
            score: scoreString,
          },
        });
        console.log(
          `[${requestTime}] Updated SCORE for student ${studentId}, term ${term}, subject ${subject}`,
        );
      } else {
        // สร้างข้อมูลใหม่
        await prisma.score.create({
          data: {
            studentId,
            term,
            subject,
            score: scoreString,
          },
        });
        console.log(
          `[${requestTime}] Created new SCORE for student ${studentId}, term ${term}, subject ${subject}`,
        );
      }
    }

    set.status = 200;
    return {
      success: true,
      message: "Scores updated successfully",
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student SCORE Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student Text Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student SCORE process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const AddCertificateStudent = async ({
  body,
  request,
  set,
  jwt,
}: Context & { jwt: any; body: any }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Certificate Data Student: [ADMIN]`,
  );

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    console.log(
      `[${requestTime}] [Student] DECRYPT CODE | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    const decryptedData = decryptMiddleware(body.studentData);

    // ตรวจสอบ type ก่อนใช้งาน
    if (!Array.isArray(decryptedData)) {
      throw new Error("Decrypted data is not an array");
    }

    const studentCertificates: AnatomyDataUpdateCertificateProp[] =
      decryptedData;

    for (const certificate of studentCertificates) {
      const { studentId, downloadUrl } = certificate;

      console.log(
        `[${requestTime}] [Student] CERTIFICATE | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
      );

      // เช็กว่าข้อมูลใน DB ไม่
      const existingCertificate = await prisma.certificate.findFirst({
        where: {
          studentId,
        },
      });

      if (existingCertificate) {
        // ปเดตข้อมูลเก่า
        await prisma.certificate.update({
          where: {
            certificateId: existingCertificate.certificateId,
          },
          data: {
            downloadUrl: downloadUrl,
          },
        });
        console.log(
          `[${requestTime}] Updated CERTIFICATE for student ${studentId}`,
        );
      } else {
        // สร้างข้อมูลใหม่
        await prisma.certificate.create({
          data: {
            studentId,
            downloadUrl: downloadUrl,
          },
        });
        console.log(
          `[${requestTime}] Created new CERTIFICATE for student ${studentId}`,
        );
      }
    }

    set.status = 200;
    return {
      success: true,
      message: "Certificates updated successfully",
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student CERTIFICATE Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student Text Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student CERTIFICATE process completed`,
    );
    console.info("─".repeat(80));
  }
};

export const UpdateStudentFileImageSlip = async ({
  body,
  set,
  request,
  jwt,
}: Context & { jwt: any; body: StudentCreateProp }) => {
  const clientIp = getClientIp(request) || "DASHBOARD";

  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.info(`-`.repeat(80));
  console.info(
    `[${requestTime}] [IP: ${clientIp}] Starting Update Image Slip Student: [ADMIN]`,
  );
  try {
    console.log(`[${requestTime}] [Student] AUTHENTICATING | IP: ${clientIp}`);
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.log(`[${requestTime}] [Student] AUTH_FAILED | IP: ${clientIp}`);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.log(
      `[${requestTime}] [Student] AUTH_SUCCESS | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    const decryptedData = decryptMiddleware(body.encryptedData);

    const studentData = decryptedData as StudentUpdateEncryptedDataIdProp;

    const studentId = studentData.studentId;
    const { uploadSlip } = body;

    const searchData = await prisma.student.findFirst({
      where: {
        studentId: studentId,
      },
    });

    if (!searchData) {
      console.error(
        `[${requestTime}] [Student] STUDENT NOT FOUND | IP: ${clientIp} | ${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Student not found",
      };
    }

    if (!uploadSlip) {
      return {
        success: false,
        message: "No files uploaded",
      };
    }

    let newProfileName: string | null = null;

    // Validate & generate filename for Image
    if (uploadSlip) {
      const imageExt = uploadSlip.name.split(".").pop()?.toLowerCase();
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        return {
          success: false,
          message: "Invalid image format",
        };
      }

      const imageSize = Buffer.byteLength(await uploadSlip.arrayBuffer());
      if (imageSize > MAX_IMAGE_SIZE) {
        return {
          success: false,
          message: "Image size exceeds limit (10MB)",
        };
      }

      const sanitizedFname = randomUUIDv7();
      newProfileName = `${sanitizedFname}-Silp-${Date.now()}.${imageExt}`;
    }

    // Delete old files only if the corresponding new file is provided
    const deletionPromises = [];

    if (uploadSlip && searchData.uploadSlip) {
      const oldImagePath = path.join(UPLOAD_DIR.slips, searchData.uploadSlip);
      deletionPromises.push(
        unlink(oldImagePath).catch((err) =>
          console.warn(
            `[${requestTime}] Failed to delete old image: ${oldImagePath}`,
            err.message,
          ),
        ),
      );
    }

    await Promise.all(deletionPromises);

    // Prepare update data
    const updateData: {
      uploadSlip?: string;
    } = {};

    if (newProfileName) updateData.uploadSlip = newProfileName;

    const updatedStudent = await prisma.student.update({
      where: { studentId },
      data: updateData,
    });

    // Write new files to disk
    const writePromises = [];

    if (uploadSlip && newProfileName) {
      const imageBuffer = Buffer.from(await uploadSlip.arrayBuffer());
      writePromises.push(
        fs.writeFile(path.join(UPLOAD_DIR.slips, newProfileName), imageBuffer),
      );
    }

    await Promise.all(writePromises);
    console.log(
      `[${requestTime}] [Student] UPDATE FILE SLIP SUCCESSFUL | IP: ${clientIp} | Student ID: ${updatedStudent.studentId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update Student File Success",
      data: {
        studentId: updatedStudent.studentId,
        uploadSlip: updatedStudent.uploadSlip,
      },
    };
  } catch (error: any) {
    console.error(
      `[${requestTime}] [IP: ${clientIp}] Update Student File silp Failed types: ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Update Student File Failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Update Student File silp process completed`,
    );
    console.info("─".repeat(80));
  }
};
