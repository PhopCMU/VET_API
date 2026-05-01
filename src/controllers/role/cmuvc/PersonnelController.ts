import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";

import { createPartLogger } from "../../../../utils/Logger";
import {
  PersonnelCreateProps,
  PersonnelDataInterface,
} from "../../../model/cmuvc/ParticipantModel";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import { rateLimitByIp, getClientIp } from "../../../utils/rateLimiter";

const prisma = new PrismaClient();
const Logger = createPartLogger("/Role/cmuvc");

export const Role_GetPersonnelController_Cmuvc = async ({
  jwt,
  set,
  request,
}: Context & { jwt: any; set: any; request: any }) => {
  const action = "FETCH_PERSONNEL";
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    if (!authToken) {
      Logger.error(`${action} | HEADERS_NOT_FOUND`);
      set.status = 401;
      return { success: false, message: "headers not found" };
    }

    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention || !authention.success) {
      Logger.warn(`${action} | AUTH_FAILED`);
      set.status = 401;
      return { success: false, message: "Authentication failed" };
    }

    const res = await prisma.personnel.findMany({
      orderBy: { createAt: "asc" },
    });
    set.status = 200;
    return { success: true, message: "Success", data: res };
  } catch (e: any) {
    Logger.error(`${action} | ${e?.message}`);
    set.status = 500;
    return { success: false, message: "Failed", error: e.message };
  } finally {
    await prisma.$disconnect();
    const clientIp = getClientIp(request) || "unknown";
    console.debug(
      `process completed | action=${action} | durationMs=${Date.now() - new Date().getTime()} | remoteAddr=${clientIp}`,
    );
  }
};

export const Role_PostPersonnelControler_Cmuvc = async ({
  body,
  jwt,
  request,
  set,
}: Context & {
  body: PersonnelCreateProps;
  jwt: any;
  set: any;
  request: any;
}) => {
  const action = "CREATE_PERSON";
  const clientIp = getClientIp(request) || "unknown";

  // Rate limit by IP
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    console.debug({ rateLimitResult: rateLimitResult.message, clientIp });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    if (!authToken) {
      Logger.error(`${action} | ERROR TOKEN HEADER | ${clientIp}`);
      set.status = 401;
      return { success: false, message: "ERROR TOKEN HEADER" };
    }

    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention || !authention.success) {
      Logger.error(`${action} | ERROR VERIFY AUTH FAILED | ${clientIp}`);
      set.status = 401;
      return { success: false, message: "Authentication failed" };
    }

    const decoded = decryptMiddleware(
      body.encryptedData,
    ) as PersonnelDataInterface;
    if (!decoded) {
      Logger.error(`${action} | DECRYPT_FAILED | ${clientIp}`);
      set.status = 403;
      return { success: false, message: "Decrypt failed" };
    }

    const { prefix, fname, lname } = decoded;
    const exists = await prisma.personnel.findFirst({
      where: { fname, lname },
    });
    if (exists) {
      return { success: false, message: "Duplicate Data" };
    }

    const res = await prisma.personnel.create({
      data: { prefix, fname, lname },
    });
    set.status = 201;
    Logger.info(
      `${action} | ${res.fname} ${res.lname} | Admin create: ${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );
    return { success: true, message: "Create Success" };
  } catch (e: any) {
    Logger.error(`${action} | ${e?.message}`);
    set.status = 500;
    return { success: false, message: "Failed", error: e.message };
  } finally {
    await prisma.$disconnect();
    console.debug(
      `process completed | action=${action} | remoteAddr=${clientIp}`,
    );
  }
};

export const Role_PutPersonnelControler_Cmuvc = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: PersonnelCreateProps;
  jwt: any;
  set: any;
  request: any;
}) => {
  const action = "EDIT_PERSON";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    console.debug({ rateLimitResult: rateLimitResult.message, clientIp });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    if (!authToken) {
      Logger.error(`${action} | ERROR TOKEN HEADER | ${clientIp}`);
      set.status = 401;
      return { success: false, message: "ERROR TOKEN HEADER" };
    }

    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention || !authention.success) {
      Logger.error(`${action} | ERROR VERIFY AUTH FAILED | ${clientIp}`);
      set.status = 401;
      return { success: false, message: "Authentication failed" };
    }

    const decodeEndcypto = decodeURIComponent(query.encryptedData);
    const decryptedData = decryptMiddleware(
      decodeEndcypto,
    ) as PersonnelDataInterface;
    if (!decryptedData) {
      console.warn(
        `[${action}] | [${clientIp}] | Missing encrypted data in query`,
      );
      set.status = 400;
      return { success: false, message: "Missing encrypted data" };
    }

    const res = await prisma.personnel.update({
      where: { personnelId: decryptedData.personnelId },
      data: {
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        updateAt: new Date(),
      },
    });

    if (!res) {
      Logger.error(`${action} | ${clientIp} | ${res}`);
      return { success: false, message: "Update error" };
    }

    Logger.info(
      `${action} | ${res.fname} ${res.lname} | Admin update: ${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );
    set.status = 201;
    return { success: true, message: "Update Success" };
  } catch (e: any) {
    Logger.error(`${action} | ${e?.message}`);
    set.status = 500;
    return { success: false, message: "Failed", error: e.message };
  } finally {
    await prisma.$disconnect();
    console.debug(
      `process completed | action=${action} | remoteAddr=${clientIp}`,
    );
  }
};

export const Role_DeletePersonnelControler_Cmuvc = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: PersonnelCreateProps;
  jwt: any;
  set: any;
  request: any;
}) => {
  const action = "DELETE_PERSON";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    console.debug({ rateLimitResult: rateLimitResult.message, clientIp });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    if (!authToken) {
      Logger.error(`${action} | ERROR TOKEN HEADER | ${clientIp}`);
      set.status = 401;
      return { success: false, message: "ERROR TOKEN HEADER" };
    }

    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention || !authention.success) {
      Logger.error(`${action} | ERROR VERIFY AUTH FAILED | ${clientIp}`);
      set.status = 401;
      return { success: false, message: "Authentication failed" };
    }

    const decodeEndcypto = decodeURIComponent(query.encryptedData);
    const decryptedData = decryptMiddleware(decodeEndcypto) as any;
    if (!decryptedData) {
      console.warn(
        `[${action}] | [${clientIp}] | Missing encrypted data in query`,
      );
      set.status = 400;
      return { success: false, message: "Missing encrypted data" };
    }

    const res = await prisma.personnel.delete({
      where: { personnelId: decryptedData },
    });
    if (!res) {
      Logger.error(`${action} | ${clientIp} | ${res}`);
      return { success: false, message: "Delete error" };
    }

    Logger.info(
      `${action} | ${res.fname} ${res.lname} | Admin delete: ${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );
    set.status = 201;
    return { success: true, message: "Delete Success" };
  } catch (e: any) {
    Logger.error(`${action} | ${e?.message}`);
    set.status = 500;
    return { success: false, message: "Failed", error: e.message };
  } finally {
    await prisma.$disconnect();
    console.debug(
      `process completed | action=${action} | remoteAddr=${clientIp}`,
    );
  }
};
