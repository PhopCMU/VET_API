import { Context } from "elysia";
import { PrismaClient } from "../../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../../services/CheckJWTService";
import { decryptMiddleware } from "../../../../middleware/decryptMiddleware";
import {
  AbstractCreateProps,
  AbstractUpdateFileProps,
} from "../../../../model/cmuvc/AbstractModel";
import path from "path";
import { promises as fs } from "fs";
import { unlink } from "fs/promises";
import { rateLimitByIp, getClientIp } from "../../../../utils/rateLimiter";
import { createPartLogger } from "../../../../../utils/Logger";

const prisma = new PrismaClient();

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

const Title = "ADMIN DASHBOARD][CMUVC][ABSTRACT";

const UPLOAD_DIR = {
  abstracts: path.join(process.cwd(), "uploads", "dataCmuvc", "abstracts"),
  slips: path.join(process.cwd(), "uploads", "dataCmuvc", "slips"),
};

// const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
// const allowedPDPAExtensions = ["pdf"];
const allowedAbstractExtensions = ["docx"];
// const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_DOCX_SIZE = 10 * 1024 * 1024; // 10 MB

const Logger = createPartLogger("/Role/cmuvc");
const LoggerClient = createPartLogger("/cmuvc");

export const Role_Fetch_Abstract_User = async ({
  query,
  set,
  jwt,
  request,
}: Context & {
  jwt: any;
}) => {
  LoggerClient.info(`[${Title}] [${requestTime}] Starting to fetch user`);
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] [${requestTime}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    if (!query.encryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Missing encrypted data in query`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.encryptedData);
    const decryptedDataYear: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedDataYear) {
      console.error(
        `[${Title}] [${requestTime}] Failed to decrypt data`,
        decryptedDataYear,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const results = await prisma.abstract.findMany({
      where: {
        createAt: {
          gte: new Date(`${decryptedDataYear}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedDataYear + 1}-01-01T00:00:00Z`),
        },
      },
      select: {
        abstractId: true,
        fname: true,
        lname: true,
        email: true,
        phone: true,
        address: true,
        subDistrict: true,
        country: true,
        district: true,
        province: true,
        zipCode: true,
        titleAbstarct: true,
        fileAbstarct: true,
        statusAbstract: true,
        organization: true,
        price: true,
        acc: true,
        payments: true,
        Imagepayment: true,
        createAt: true,
        abstractType: {
          select: {
            abstractTypeId: true,
            adstractType: true,
          },
        },
        categorys: {
          select: {
            categoryId: true,
            categoryType: true,
          },
        },
        packages: {
          select: {
            packageId: true,
            category_th: true,
            category_en: true,
            earlyBird: true,
            regularRate: true,
            oneDayParticipant: true,
            endEarlyBird: true,
            endRegularRate: true,
            people: true,
          },
        },
        foods: {
          select: {
            foodId: true,
            foodType: true,
          },
        },
      },
    });

    if (!results) {
      set.status = 404;
      console.error(
        `[${Title}] [${requestTime}]  Fetch Abstract Not Data found`,
      );
      return {
        success: false,
        message: "No data found",
      };
    }

    set.status = 200;
    console.info(`[${Title}] [${requestTime}]  Fetch Abstract successfully`);
    return {
      success: true,
      message: "Fetch Abstract successfully",
      result: results,
    };
  } catch (error: any) {
    console.error(`[${Title}] [${requestTime}] Fetch failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}] [${requestTime}] Error details: ${JSON.stringify(
          error.response,
        )}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const Role_Update_Abstract_File = async ({
  body,
  set,
  jwt,
  request,
}: Context & {
  jwt: any;
  body: AbstractUpdateFileProps;
}) => {
  console.info(`-`.repeat(80));
  console.info(`Abstract File`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting to update abstract file`);
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] [${requestTime}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    console.info(
      `[${Title}] [${requestTime}] AUTH_SUCCESS | ${authention.data.firstname_EN} ${authention.data.lastname_EN} `,
    );

    const decodedEncryptedData = decodeURIComponent(body.encryptedData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Failed to decrypt data`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const abstractId = decryptedData.abstractId;
    const { fileAbstract } = body;

    const searchData = await prisma.abstract.findUnique({
      where: {
        abstractId,
      },
    });

    if (!searchData) {
      set.status = 404;
      console.error(
        `[${Title}] [${requestTime}]  Update Abstract Not Data found`,
      );
      return {
        success: false,
        message: "Abstract not found",
      };
    }

    if (!fileAbstract) {
      set.status = 400;
      console.error(
        `[${Title}] [${requestTime}]  Update Abstract Not Data found`,
      );
      return {
        success: false,
        message: "No data found",
      };
    }

    let newFileAbstract: string | null = null;

    if (fileAbstract) {
      const fileExt = fileAbstract.name.split(".").pop()?.toLowerCase();
      if (!fileExt || !allowedAbstractExtensions.includes(fileExt)) {
        set.status = 400;
        console.error(
          `[${Title}] [${requestTime}]  Update Abstract Not Data found`,
        );
        return {
          success: false,
          message: "Invalid file type",
        };
      }
      const fileSize = Buffer.byteLength(await fileAbstract.arrayBuffer());
      if (fileSize > MAX_DOCX_SIZE) {
        set.status = 400;
        console.error(
          `[${Title}] [${requestTime}]  Update Abstract Not Data found`,
        );
        return {
          success: false,
          message: "File size exceeds the limit (10MB)",
        };
      }

      const sanitizedFname = searchData.fname.replace(/\s+/g, "_"); // แทนที่ช่องว่างใน fname ด้วย _
      const sanitizedTitle = searchData.titleAbstarct.replace(/\s+/g, "_"); // แทนที่ช่องว่างใน titleAbstarct ด้วย _
      newFileAbstract = `${sanitizedFname}-${sanitizedTitle}-${Date.now()}.${fileExt}`;
    }

    const deletionPromises = [];

    if (fileAbstract && searchData.fileAbstarct) {
      const oldFilePath = path.join(
        UPLOAD_DIR.abstracts,
        searchData.fileAbstarct,
      );
      deletionPromises.push(
        unlink(oldFilePath).catch((err) => {
          console.error(
            `[${Title}] [${requestTime}]  Error deleting old file: ${err.message}`,
          );
        }),
      );
    }

    await Promise.all(deletionPromises);

    const updateData: {
      fileAbstarct?: string;
    } = {};

    if (newFileAbstract) updateData.fileAbstarct = newFileAbstract;

    const updateDataAbstract = await prisma.abstract.update({
      where: {
        abstractId,
      },
      data: updateData,
    });

    const writePromises = [];

    if (fileAbstract && newFileAbstract) {
      const docxBuffer = Buffer.from(await fileAbstract.arrayBuffer());
      writePromises.push(
        fs.writeFile(
          path.join(UPLOAD_DIR.abstracts, newFileAbstract),
          docxBuffer,
        ),
      );
    }

    await Promise.all(writePromises);

    console.info(`[${Title}] [${requestTime}]  UPDATE ABSTRACT SUCCESSFUL`);

    set.status = 200;
    return {
      success: true,
      message: "Update Abstract successfully",
      result: updateDataAbstract.fileAbstarct,
    };
  } catch (error: any) {
    console.error(`[${Title}] [${requestTime}] Fetch failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}] [${requestTime}] Error details: ${JSON.stringify(
          error.response,
        )}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const Role_Update_Abstract_Test = async ({
  query,
  set,
  jwt,
  request,
}: Context & {
  jwt: any;
  body: AbstractCreateProps;
}) => {
  console.info(`-`.repeat(80));
  console.info(`Abstract Text`);
  console.info(`-`.repeat(80));
  console.info(
    `[${Title}] [${requestTime}] Starting to update abstract status`,
  );

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] [${requestTime}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    if (!query.abstractData) {
      set.status = 400;
      console.error(
        `[${Title}] [${requestTime}]  Update Abstract Not Data found`,
      );
      return {
        success: false,
        message: "No data found",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.abstractData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Failed to decrypt data`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const updateData = Object.fromEntries(
      Object.entries(decryptedData).filter(
        ([key, value]) =>
          key !== "abstractId" && value !== undefined && value !== "",
      ),
    );

    if (Object.keys(updateData).length === 0) {
      console.log(
        `[${Title}] [${requestTime}]  NO VALID FIELDS | No fields to update`,
      );
      set.status = 400;
      return {
        success: false,
        message: "No valid fields provided for update",
      };
    }

    const updateDataAbstract = await prisma.abstract.update({
      where: {
        abstractId: decryptedData.abstractId,
      },
      data: updateData,
    });

    console.info(`[${Title}] [${requestTime}]  UPDATE ABSTRACT SUCCESSFUL`);

    set.status = 200;
    return {
      success: true,
      message: "Update Abstract Text Success",
      result: updateDataAbstract.fname,
    };
  } catch (error: any) {
    console.error(`[${Title}] [${requestTime}] Fetch failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}] [${requestTime}] Error details: ${JSON.stringify(
          error.response,
        )}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const Role_Update_Abstract_Status = async ({
  query,
  set,
  jwt,
  request,
}: Context & {
  jwt: any;
  query: any;
}) => {
  console.info(`-`.repeat(80));
  console.info(`Abstract Status`);
  console.info(`-`.repeat(80));
  console.info(
    `[${Title}] [${requestTime}] Starting to update abstract status`,
  );

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] [${requestTime}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.abstractData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Failed to decrypt data`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const abstractId = decryptedData;

    if (!abstractId) {
      set.status = 400;
      console.error(
        `[${Title}] [${requestTime}]  Update Abstract Not Data found`,
      );
      return {
        success: false,
        message: "No data found",
      };
    }

    const updateDataAbstract = await prisma.abstract.update({
      where: {
        abstractId,
      },
      data: {
        statusAbstract: "Accepted",
      },
    });

    console.info(`[${Title}] [${requestTime}]  UPDATE ABSTRACT SUCCESSFUL`);

    set.status = 200;
    return {
      success: true,
      message: "Update Abstract Status Success",
      result: updateDataAbstract.statusAbstract,
    };
  } catch (error: any) {
    console.error(`[${Title}] [${requestTime}] Fetch failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}] [${requestTime}] Error details: ${JSON.stringify(
          error.response,
        )}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const Role_Delete_Abstract = async ({
  query,
  set,
  jwt,
  request,
}: Context & {
  jwt: any;
  set: any;
  request: any;
  query: any;
}) => {
  const action = "DELETE_ABSTRACT";
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

  const name_admin =
    authention.data?.firstname_EN + " " + authention.data?.lastname_EN;

  try {
    const dataAbstract = await prisma.abstract.findUnique({
      where: {
        abstractId: decryptedData,
      },
    });

    if (!dataAbstract) {
      Logger.error(`${action} | ABSTRACT_NOT_FOUND`);
      set.status = 404;
      return {
        success: false,
        message: "Abstract not found",
      };
    }

    const deletionPromises = [];

    if (dataAbstract.fileAbstarct) {
      const filePath = path.join(
        UPLOAD_DIR.abstracts,
        dataAbstract.fileAbstarct,
      );
      deletionPromises.push(
        fs.unlink(filePath).catch((err) => {
          Logger.error(`${action} | DELETE_FILE_FAILED | ${err.message}`);
          return {
            success: false,
            message: "Delete file failed",
          };
        }),
      );
    }

    await Promise.all(deletionPromises);

    await prisma.abstract.delete({
      where: {
        abstractId: decryptedData,
      },
    });

    Logger.info(
      `${action} | ADMIN_UPDATE: ${name_admin} | ABSTRACT_ID: ${dataAbstract.abstractId} => Removed Abstract successfully`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Abstract deleted successfully",
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
    // console.debug("Exit Compalte");
  }
};
