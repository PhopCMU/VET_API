import { Context } from "elysia";
import { createPartLogger } from "../../../../utils/Logger";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { PrismaClient } from "../../../../generated/cmuvc";

const prisma = new PrismaClient();

const Logger = createPartLogger("/Role/cmuvc");

export const Role_Get_L_All = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: any;
  jwt: any;
  request: any;
  set: any;
}) => {
  const action = "FETCH_L_ALL";
  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      message: "headers not found",
    };
  }
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodeEndcypto = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodeEndcypto) as any;
  if (!decryptedData) {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  console.debug(`Decrypted Data: ${JSON.stringify(decryptedData)}`);

  if (!decryptedData.title) {
    Logger.error(`${action} | INVALID_TITLE`);
    set.status = 400;
    return {
      success: false,
      message: "Invalid title",
    };
  }
  const yearS = 2025;
  const yearE = 2025;
  const yearStart = new Date(`${yearS}-01-01T00:00:00Z`);
  const nextYearStart = new Date(`${yearE + 1}-01-01T00:00:00Z`);

  // const baseDateFilter = {
  //   createAt: { gte: yearStart, lt: nextYearStart },
  // };

  const baseDateFilter = {
    createAt: { gte: yearStart, lt: nextYearStart },
  };

  // include เฉพาะ relation ตาม title
  const includeByTitle: Record<string, any> = {
    vet: {
      vet: { select: { fname: true, lname: true, number_ce: true } },
    },
    pat: {
      participant: {
        select: {
          ce: true,
          fname: true,
          lname: true,
          packages: { select: { category_th: true } },
        },
      },
    },
    abstract: {
      abstract: {
        select: { fname: true, lname: true, ce: true, abstractType: true },
      },
    },
    patsponser: {
      sponsersParticipant: {
        select: {
          ce: true,
          fname: true,
          lname: true,
          companys: { select: { name: true } },
        },
      },
    },
    patboot: {
      sponsersBoot: {
        select: {
          fname: true,
          lname: true,
          ce: true,
          companys: { select: { name: true } },
        },
      },
    },
  };

  // where ตาม title (ไม่ต้องซ้อน key ชื่อ `where`)
  const whereByTitle: Record<string, any> = {
    vet: {
      ...baseDateFilter,
      vetId: { not: null },
    },
    pat: {
      ...baseDateFilter,
      participantId: { not: null },
    },
    abstract: {
      ...baseDateFilter,
      abstractId: { not: null },
    },
    patsponser: {
      ...baseDateFilter,
      sponsersParticipantId: { not: null },
    },
    patboot: {
      ...baseDateFilter,
      sponsersBootId: { not: null },
    },
  };

  // สร้าง where/include ตาม title; ถ้าไม่ match ให้เป็น {} (ไม่กรอง/ไม่ include เพิ่ม)
  const where = whereByTitle[decryptedData.title] ?? { ...baseDateFilter };
  const include = includeByTitle[decryptedData.title] ?? {};

  try {
    const res = await prisma.timetable.findMany({
      where,
      include,
    });

    if (!res) {
      Logger.error(`${action} | FETCH_FAILED`);
      set.status = 500;
      return {
        success: false,
        message: "Fetch failed",
      };
    }

    set.status = 200;
    return {
      success: true,
      message: "Fetch successfully",
      data: res,
    };
  } catch (error: any) {
    Logger.error(
      `${action} | ${authention.data.firstname_EN} ${authention.data.lastname_EN} | ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  } finally {
    console.debug("Exit Compalte");
  }
};
