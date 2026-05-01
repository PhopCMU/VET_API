import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";

import { createPartLogger } from "../../../../utils/Logger";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import { rateLimitByIp, getClientIp } from "../../../utils/rateLimiter";
import { authWithRateLimit } from "../../../middleware/authAndDecrypt";

const prisma = new PrismaClient();

const Logger = createPartLogger("/Role/cmuvc");

export const RoleFetchDataSelector = async ({
  jwt,
  request,
  set,
}: Context & { jwt: any; request: any; set: any }) => {
  const action = "FETCH_DATA_SELECTOR";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

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
  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;
  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  try {
    // Companys
    const companys = await prisma.companys.findMany({
      orderBy: { createAt: "asc" },
    });

    // foods
    const foods = await prisma.foods.findMany({
      orderBy: { createAt: "asc" },
    });

    if (!companys || !foods) {
      Logger.error(
        `${action} | ${!companys && "companys"} | ${
          !foods && "foods"
        } | DATA_NOT_FOUND`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }

    set.status = 200;
    return {
      success: true,
      message: "Fetch data successfully",
      data: {
        companys,
        foods,
      },
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

/** Sponsor Participants */

export const RoleSponsorParticipantCmuvc_List = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const action = "FETCH_SPONSOR_PARTICIPANTS";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);

  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

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

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

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
    Logger.error(`${action} | ${name_admin} |  DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  let title;
  if (decryptedData.title === "main")
    title = "522b5662-ebc8-45b7-bfaa-350d8fff66a4";
  if (decryptedData.title === "pre")
    title = "ce291973-8980-4a7c-9ab4-13a684aea33b";

  if (!title) {
    Logger.error(`${action} | ${name_admin} | INVALID_TITLE`);
    set.status = 400;
    return {
      success: false,
      message: "Invalid title",
    };
  }

  try {
    const list = await prisma.sponsersParticipant.findMany({
      where: {
        themeTitleId: title,
        createAt: {
          gte: new Date(`${decryptedData.year}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedData.year + 1}-01-01T00:00:00Z`),
        },
      },
      include: {
        themeTitle: true,
        foods: true,
        categorys: true,
        companys: true,
        packages: true,
      },
      orderBy: { createAt: "asc" },
    });

    if (!list) {
      Logger.error(`${action} | ${name_admin} | LIST_NOT_FOUND`);
      set.status = 404;
      return {
        success: false,
        message: "List not found",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | FETCH_SPONSOR_PARTICIPANTS_SUCCESS`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Success",
      data: list,
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const RoleSponsorParticipantCmuvc_Create = async ({
  body,
  jwt,
  request,
  set,
}: Context & { body: string; jwt: any; request: any; set: any }) => {
  const action = "CREATE_SPONSOR_PARTICIPANT";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);

  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

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
  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  if (!body) {
    Logger.error(`${action} | ${name_admin} | MISSING_BODY`);
    set.status = 400;
    return {
      success: false,
      message: "Missing body",
    };
  }

  const decryptedData = decryptMiddleware((body as any).encryptedData);
  if (!decryptedData) {
    Logger.error(`${action} | ${name_admin} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  const categoryId = "191e2672-8f99-483f-beb4-4e685ccd0d9f";
  let packagesId;
  let title;

  if (decryptedData.title === "main") {
    title = "522b5662-ebc8-45b7-bfaa-350d8fff66a4";
    packagesId = "f1d9d664-e5a0-431d-96d1-23bcd25b7546";
  }

  if (decryptedData.title === "pre") {
    title = "ce291973-8980-4a7c-9ab4-13a684aea33b";
    packagesId = "0ea90da9-68ef-4882-8397-a91e4cbd974e";
  }

  try {
    const newDate = new Date();
    const year = newDate.getFullYear();

    const check = await prisma.sponsersParticipant.findFirst({
      where: {
        fname: {
          equals: decryptedData.fname,
          mode: "insensitive",
        },
        lname: {
          equals: decryptedData.lname,
          mode: "insensitive",
        },
        themeTitleId: title,
        createAt: {
          gte: new Date(`${year}-01-01T00:00:00Z`),
          lt: new Date(`${year + 1}-01-01T00:00:00Z`),
        },
      },
    });

    if (check) {
      Logger.error(
        `${action} | ${name_admin} | SPONSORS_PARTICIPANT_ALREADY_EXISTS | ${JSON.stringify(
          check,
        )
          .split(",")
          .join("\n")}`,
      );

      set.status = 409;
      throw new Error("Sponsors participant already exists");
    }

    if (packagesId == null || title == null) {
      throw new Error("Missing required fields: packagesId or themeTitleId");
    }

    const result = await prisma.sponsersParticipant.create({
      data: {
        packagesId: packagesId,
        categoryId: categoryId,
        companyId: decryptedData.companyId,
        themeTitleId: title,
        foodId: decryptedData.foodId,
        ce: decryptedData.ce,
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        phone: decryptedData.phone,
        email: decryptedData.email,
        organization: decryptedData.organization,
        createAt: new Date(),
        updateAt: new Date(),
      },
    });

    Logger.info(
      `${action} | ${name_admin} | CREATE_SPONSORS_PARTICIPANT | ${JSON.stringify(
        result,
      )
        .split(",")
        .join("\n")}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Sponsors participant created successfully",
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const RoleSponsorEditParticipantCmuvc_Update = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const action = "UPDATE_SPONSOR_PARTICIPANT";

  const authention = await authWithRateLimit(request, set, jwt, action);
  if (!authention.success) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;
  const ip = authention.ip;

  if (!query.encryptedData) {
    Logger.error(`IP=${ip} | ${action} | ENCRYPTED_DATA_NOT_FOUND`);
    set.status = 400;
    return {
      success: false,
      message: "encrypted data not found",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData) as any;
  if (!decryptedData) {
    Logger.error(
      `IP=${ip} | ${action} | ${name_admin} | PARTICIPANT_ID_NOT_FOUND`,
    );
    set.status = 400;
    return {
      success: false,
      message: "participantId not found",
    };
  }

  try {
    const newDate = new Date();
    const year = newDate.getFullYear();

    const update = await prisma.sponsersParticipant.update({
      where: {
        sponserParticipantId: decryptedData.sponserParticipantId,
        createAt: {
          gte: new Date(`${year}-01-01T00:00:00Z`),
          lt: new Date(`${year + 1}-01-01T00:00:00Z`),
        },
      },
      data: {
        companyId: decryptedData.companyId,
        foodId: decryptedData.foodId,
        ce: decryptedData.ce,
        prefix: decryptedData.prefix ?? "DVM",
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        phone: decryptedData.phone,
        email: decryptedData.email,
        organization: decryptedData.organization,
        updateAt: new Date(),
      },
    });

    if (!update) {
      Logger.error(
        `IP=${ip} | ${action} | ${name_admin} | UPDATE_SPONSOR_PARTICIPANT_FAILED`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Update sponsor participant failed",
      };
    }

    Logger.info(
      `IP=${ip} | ${action} | ${name_admin} | UPDATE_SPONSOR_PARTICIPANT | ${JSON.stringify(
        update,
      )
        .split(",")
        .join("\n")}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Update sponsor participant successfully",
    };
  } catch (error: any) {
    Logger.error(`IP=${ip} | ${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const RoleSponsorDeleteSponsorParticipantCmuvc = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const action = "DELETE_SPONSOR_PARTICIPANT";
  const clientIp = getClientIp(request) || "unknown";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention.success) {
    set.status = 401;
    return {
      success: false,
      message: authention.message,
    };
  }
  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  if (!query.encryptedData) {
    Logger.error(`${action} | ENCRYPTED_DATA_NOT_FOUND`);
    set.status = 400;
    return {
      success: false,
      message: "encrypted data not found",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData) as any;
  if (!decryptedData) {
    Logger.error(`${action} | ${name_admin} | PARTICIPANT_ID_NOT_FOUND`);
    set.status = 400;
    return {
      success: false,
      message: "participantId not found",
    };
  }

  try {
    const deleteParticipant = await prisma.sponsersParticipant.delete({
      where: {
        sponserParticipantId: decryptedData,
      },
    });

    if (!deleteParticipant) {
      Logger.error(
        `${action} | ${name_admin} | DELETE_SPONSOR_PARTICIPANT_FAILED`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Delete sponsor participant failed",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | ${clientIp} | DELETE_SPONSOR_PARTICIPANT | ${deleteParticipant.fname} ${deleteParticipant.lname} `,
    );
    set.status = 200;
    return {
      success: true,
      message: "Delete sponsor participant successfully",
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

/** Sponsor Boots */
export const RoleSponsorBootsCmuvc_List = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const action = "FETCH_SPONSOR_BOOT";
  
  const clientIp = getClientIp(request) || "unknown";
  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention.success) {
    set.status = 401;
    return {
      success: false,
      message: authention.message,
    };
  }
  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

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
    Logger.error(`${action} | ${name_admin} |  DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  try {
    const sponsorBoots = await prisma.sponsersBoot.findMany({
      where: {
        createAt: {
          gte: new Date(`${decryptedData.year}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedData.year + 1}-01-01T00:00:00Z`),
        },
      },
      include: {
        companys: {
          select: {
            name: true,
          },
        },
        foods: {
          select: {
            foodType: true,
          },
        },
        categorys: {
          select: {
            categoryType: true,
          },
        },
      },
      orderBy: { createAt: "asc" },
    });
    if (!sponsorBoots) {
      Logger.error(`${action} | ${name_admin} | FETCH_SPONSOR_BOOT_FAILED`);
      set.status = 404;
      return {
        success: false,
        message: "fetch sponsor boot failed",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | ${clientIp} | FETCH_SPONSOR_BOOT | ${sponsorBoots.length}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "fetch sponsor boot successfully",
      data: sponsorBoots,
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const RoleSponsorBootCmuvc_Create = async ({
  body,
  jwt,
  request,
  set,
}: Context & { body: string; jwt: any; request: any; set: any }) => {
  const action = "CREATE_SPONSOR_Boot";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);

  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | remoteAddr=${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | ${clientIp} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      message: "headers not found",
    };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention) {
    Logger.warn(`${action} | ${clientIp} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }
  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  if (!body) {
    Logger.error(`${action} | ${name_admin} | MISSING_BODY`);
    set.status = 400;
    return {
      success: false,
      message: "Missing body",
    };
  }

  const decryptedData = decryptMiddleware((body as any).encryptedData);
  if (!decryptedData) {
    Logger.error(`${action} | ${name_admin} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  const categoryId = "191e2672-8f99-483f-beb4-4e685ccd0d9f";

  try {
    const newDate = new Date();
    const year = newDate.getFullYear();

    const check = await prisma.sponsersParticipant.findFirst({
      where: {
        fname: {
          equals: decryptedData.fname,
          mode: "insensitive",
        },
        lname: {
          equals: decryptedData.lname,
          mode: "insensitive",
        },
        email: {
          equals: decryptedData.email,
          mode: "insensitive",
        },
        createAt: {
          gte: new Date(`${year}-01-01T00:00:00Z`),
          lt: new Date(`${year + 1}-01-01T00:00:00Z`),
        },
      },
    });

    if (check) {
      Logger.error(
        `${action} | ${name_admin} | SPONSORS_PARTICIPANT_ALREADY_EXISTS | ${JSON.stringify(
          check,
        )
          .split(",")
          .join("\n")}`,
      );

      set.status = 409;
      throw new Error("Sponsors participant already exists");
    }

    // console.debug({
    //   decryptedData: decryptedData,
    //   packagesId: packagesId,
    //   categoryId: categoryId,
    //   title: title,
    // });

    const result = await prisma.sponsersBoot.create({
      data: {
        categoryId: categoryId,
        companyId: decryptedData.companyId,
        foodId: decryptedData.foodId,
        ce: decryptedData.ce,
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        phone: decryptedData.phone,
        email: decryptedData.email,
        createAt: new Date(),
        updateAt: new Date(),
      },
    });

    Logger.info(
      `${action} | ${name_admin} | CREATE_SPONSORS_BOOT | ${JSON.stringify(
        result,
      )
        .split(",")
        .join("\n")}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Sponsors boot created successfully",
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "เกิดข้อผิดพลาดในการสร้าง Sponsor Boot",
    };
  }
};

export const RoleSponsorEditBootCmuvc_Update = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const action = "UPDATE_SPONSOR_BOOT";
  const authResult = await authWithRateLimit(request, set, jwt, action);
  if (!authResult.success) {
    return {
      success: false,
      message: authResult.message,
    };
  }

  console.debug({
    authResult: authResult,
  });

  const name_admin =
    authResult.data?.firstname_EN + " " + authResult.data?.lastname_EN;

  const ip = authResult.ip;

  if (!query.encryptedData) {
    Logger.error(
      `IP=${ip} | ${action} | ${name_admin} | ENCRYPTED_DATA_NOT_FOUND`,
    );
    set.status = 400;
    return {
      success: false,
      message: "encrypted data not found",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData) as any;
  if (!decryptedData) {
    Logger.error(
      `IP=${ip} | ${action} | ${name_admin} | PARTICIPANT_ID_NOT_FOUND`,
    );
    set.status = 400;
    return {
      success: false,
      message: "participantId not found",
    };
  }

  try {
    const newDate = new Date();
    const year = newDate.getFullYear();

    const update = await prisma.sponsersBoot.update({
      where: {
        sponserBootId: decryptedData.sponserParticipantId,
        createAt: {
          gte: new Date(`${year}-01-01T00:00:00Z`),
          lt: new Date(`${year + 1}-01-01T00:00:00Z`),
        },
      },
      data: {
        companyId: decryptedData.companyId,
        foodId: decryptedData.foodId,
        ce: decryptedData.ce,
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        phone: decryptedData.phone,
        email: decryptedData.email,
        updateAt: new Date(),
      },
    });

    if (!update) {
      Logger.error(
        `${action} | ${name_admin} | UPDATE_SPONSOR_PARTICIPANT_FAILED`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Update sponsor participant failed",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | UPDATE_SPONSOR_PARTICIPANT | ${JSON.stringify(
        update,
      )
        .split(",")
        .join("\n")}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Update sponsor participant successfully",
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const RoleSponsorDelete_Remove = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const action = "DELETE_SPONSOR_BOOT";

  const authention = await authWithRateLimit(request, set, jwt, action);
  if (!authention.success) {
    return {
      success: false,
      message: authention.message,
    };
  }

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;
  const ip = authention.ip;

  if (!query.encryptedData) {
    Logger.error(`IP=${ip} | ${action} | ENCRYPTED_DATA_NOT_FOUND`);
    set.status = 400;
    return {
      success: false,
      message: "encrypted data not found",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData) as any;
  if (!decryptedData) {
    Logger.error(`IP=${ip} | ${action} | ${name_admin} | BOOT_ID_NOT_FOUND`);
    set.status = 400;
    return {
      success: false,
      message: "BOOT ID NOT FOUND",
    };
  }

  try {
    const deleteBoot = await prisma.sponsersBoot.delete({
      where: {
        sponserBootId: decryptedData,
      },
    });

    if (!deleteBoot) {
      Logger.error(
        `IP=${ip} | ${action} | ${name_admin} | DELETE_SPONSOR_BOOT_FAILED`,
      );
      set.status = 404;
      return {
        success: false,
        message: "Delete sponsor boot failed",
      };
    }

    Logger.info(
      `IP=${ip} | ${action} | ${name_admin} | DELETE_SPONSOR_BOOT | ${deleteBoot.fname} ${deleteBoot.lname} `,
    );
    set.status = 200;
    return {
      success: true,
      message: "Delete sponsor boot successfully",
    };
  } catch (error: any) {
    Logger.error(`${action} | ${name_admin} | ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};
