import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { createPartLogger } from "../../../../utils/Logger";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import { rateLimitByIp, getClientIp } from "../../../utils/rateLimiter";
import { ParticipantCreateProps } from "../../../model/cmuvc/ParticipantModel";

const prisma = new PrismaClient();
const Logger = createPartLogger("/Role/cmuvc");

export const Role_Get_Package = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: any; jwt: any; request: any; set: any }) => {
  const action = "FETCH_PACKAGES";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return { success: false, message: "headers not found" };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return { success: false, message: "Authentication failed" };
  }

  if (!query?.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return { success: false, message: "Missing encrypted data" };
  }

  try {
    const decoded = decodeURIComponent(query.encryptedData);
    const decryptedData = decryptMiddleware(decoded) as any;
    if (!decryptedData) {
      set.status = 403;
      return { success: false, message: "Decrypt failed" };
    }

    let title: string | undefined;
    if (decryptedData.title === "main")
      title = "522b5662-ebc8-45b7-bfaa-350d8fff66a4";
    if (decryptedData.title === "pre")
      title = "ce291973-8980-4a7c-9ab4-13a684aea33b";
    if (!title) {
      set.status = 400;
      return { success: false, message: "Invalid title" };
    }

    const res = await prisma.packages.findMany({
      where: { themeTitleId: title },
      orderBy: { position: "asc" },
    });

    set.status = 200;
    return { success: true, message: "Fetch Packages successfully", data: res };
  } catch (e: any) {
    Logger.error(`${action} | ${e.message}`);
    set.status = 500;
    return { success: false, message: "Internal server error" };
  }
};

export const Role_Get_P_Main = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: ParticipantCreateProps;
  jwt: any;
  request: any;
  set: any;
}) => {
  const action = "FETYCH_PARTICIPANT_MAIN";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    set.status = 401;
    return { success: false, message: "headers not found" };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    set.status = 401;
    return { success: false, message: "Authentication failed" };
  }

  if (!query?.encryptedData) {
    set.status = 400;
    return { success: false, message: "Missing encrypted data" };
  }

  try {
    const decoded = decodeURIComponent(query.encryptedData);
    const decryptedData = decryptMiddleware(decoded) as any;
    if (!decryptedData) {
      set.status = 403;
      return { success: false, message: "Decrypt failed" };
    }

    let title: string | undefined;
    if (decryptedData.title === "main")
      title = "522b5662-ebc8-45b7-bfaa-350d8fff66a4";
    if (decryptedData.title === "pre")
      title = "ce291973-8980-4a7c-9ab4-13a684aea33b";
    if (!title) {
      set.status = 400;
      return { success: false, message: "Invalid title" };
    }

    const res = await prisma.participant.findMany({
      where: {
        themeTitleId: title,
        createAt: {
          gte: new Date(`${decryptedData.year}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedData.year + 1}-01-01T00:00:00Z`),
        },
      },
      include: {
        packages: true,
        themeTitle: true,
        selectday: true,
        categorys: true,
        foods: true,
      },
      orderBy: { createAt: "asc" },
    });

    set.status = 200;
    return {
      success: true,
      message: "Fetch Participant successfully",
      data: res,
    };
  } catch (e: any) {
    Logger.error(`${action} | ${e.message}`);
    set.status = 500;
    return { success: false, message: "Internal server error" };
  }
};

export const Role_PutEdit_P_Main = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: ParticipantCreateProps;
  jwt: any;
  request: any;
  set: any;
}) => {
  const action = "EDITED_PARTICIPANT_MAIN";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    set.status = 401;
    return { success: false, message: "headers not found" };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    set.status = 401;
    return { success: false, message: "Authentication failed" };
  }

  try {
    const decoded = decodeURIComponent(query.encryptedData);
    const decryptedData = decryptMiddleware(decoded) as any;
    if (!decryptedData) {
      set.status = 400;
      return { success: false, message: "Missing encrypted data" };
    }

    const res = await prisma.participant.update({
      where: {
        participantId: decryptedData.data.participantId,
        themeTitleId: decryptedData.title,
      },
      data: {
        fname: decryptedData.data.fname,
        lname: decryptedData.data.lname,
        email: decryptedData.data.email,
        price: Number(decryptedData.data.price),
        packagesId: decryptedData.data.package,
        updateAt: new Date(),
      },
    });

    set.status = 200;
    return {
      success: true,
      message: "Update Participant successfully",
      data: res,
    };
  } catch (e: any) {
    Logger.error(`${action} | ${e.message}`);
    set.status = 500;
    return { success: false, message: "Internal server error" };
  }
};

export const Role_Delete_P_Main = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: ParticipantCreateProps;
  jwt: any;
  request: any;
  set: any;
}) => {
  const action = "DELETE_PERSON";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    set.status = 401;
    return { success: false, message: "headers not found" };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    set.status = 401;
    return { success: false, message: "Authentication failed" };
  }

  try {
    const decoded = decodeURIComponent(query.encryptedData);
    const decryptedData = decryptMiddleware(decoded) as any;
    if (!decryptedData) {
      set.status = 400;
      return { success: false, message: "Missing encrypted data" };
    }

    await prisma.participant.delete({
      where: {
        participantId: decryptedData.participantId,
        themeTitleId: decryptedData.title,
      },
    });

    set.status = 201;
    return { success: true, message: "Delete Success" };
  } catch (e: any) {
    Logger.error(`${action} | ${e.message}`);
    set.status = 500;
    return { success: false, message: "Internal server error" };
  }
};
