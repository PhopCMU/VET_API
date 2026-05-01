import { Context } from "elysia";
import { PrismaClient } from "../../../generated/vetrun";
import { createPartLogger } from "../../../utils/Logger";
import { RequestModelImage } from "../../model/EncryptImage";
import { CheckJWTAuthention } from "../../services/CheckJWTService";
import { rateLimitByIp, getClientIp } from "../../utils/rateLimiter";
import path from "path";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";
import { randomUUIDv7 } from "bun";
import { promises as fs } from "fs";

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

const sponsorLogger = createPartLogger("/Role/vetrun");

const UPLOAD_DIR = {
  logo: path.join(process.cwd(), "uploads", "dataVetRun", "logo_sponsors"),
};
const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

export const SponsorContorller = async (set: any) => {
  const Title = "SponsorContorller";
  console.info(`${requestTime} ${Title}`);
  try {
    const results = await prisma.sponsor.findMany();

    if (results) {
      console.info(`${requestTime} ${Title} ${results.length}`);
      set.status = 200;
      return {
        success: true,
        data: results,
      };
    }
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
      message: "fetch failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const VetrunSponsorUploadLogo = async ({
  body,
  request,
  set,
  jwt,
}: Context & {
  body: RequestModelImage;
  request: any;
  set: any;
  jwt: any;
}) => {
  const action = "SPONSOR_UPLOAD_LOGO";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const clientIp = getClientIp(request) || "unknown";

  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention.success) {
    sponsorLogger.warn("AUTH_FAILED", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!body) {
    sponsorLogger.warn("MISSING_BODY", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 400;
    return {
      success: false,
      message: "Missing body",
    };
  }

  if (!body.imageFile) {
    sponsorLogger.warn("MISSING_IMAGE", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 400;
    return {
      success: false,
      message: "Missing image",
    };
  }

  const decryptedData = decryptMiddleware(body.encryptedData);

  if (!decryptedData) {
    sponsorLogger.warn("DECRYPT_FAILED", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 400;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  const imageExt = body.imageFile.name.split(".").pop()?.toLowerCase();
  if (body.imageFile) {
    if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
      sponsorLogger.warn("INVALID_IMAGE_EXTENSION", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });

      set.status = 400;
      return {
        success: false,
        message: "Invalid image extension",
      };
    }
  }

  const imageSize = Buffer.byteLength(await body.imageFile.arrayBuffer());
  if (imageSize > MAX_IMAGE_SIZE) {
    sponsorLogger.warn("IMAGE_TOO_LARGE", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 400;
    return {
      success: false,
      message: "Image size too large",
    };
  }

  const randomUUID = randomUUIDv7();
  const newFileImage = `${randomUUID}-${Date.now()}.${imageExt}`;

  try {
    const sponsor = await prisma.sponsor.create({
      data: {
        name: decryptedData.name,
        link: decryptedData.link ?? "",
        price: decryptedData.price ?? "",
        type: decryptedData.type,
        image: newFileImage,
      },
    });

    const writePromises = [];
    if (body.imageFile && newFileImage) {
      const ImageBuffer = Buffer.from(await body.imageFile.arrayBuffer());
      const ImagePath = path.join(UPLOAD_DIR.logo, newFileImage);
      writePromises.push(
        fs.writeFile(ImagePath, ImageBuffer).catch((err) => {
          sponsorLogger.error("Failed to write image", {
            action,
            remoteAddr: clientIp,
            userId:
              authention.data.firstname_EN + " " + authention.data.lastname_EN,
            error: err.message,
          });
        }),
      );
    }

    const writeResults = await Promise.all(writePromises);

    if (writeResults) {
      sponsorLogger.info("UPLOAD_SUCCESS", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
      set.status = 200;
      return {
        success: true,
        message: "Upload success",
        data: sponsor,
      };
    }
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      body,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    sponsorLogger.error("Failed to upload logo", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to upload logo",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${
        Date.now() - new Date(requestTime).getTime()
      } | remoteAddr=${clientIp}`,
    );
  }
};

export const VetrunSponsorRemoveLogo = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const clientIp = getClientIp(request) || "unknown";

  const action = "SPONSOR_REMOVE_LOGO";

  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention.success) {
    sponsorLogger.warn("AUTH_FAILED", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
  }

  if (!query.encryptedData) {
    sponsorLogger.warn("MISSING_ENCRYPTED_DATA", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData: any = decryptMiddleware(decodedEncryptedData);

  if (!decryptedData) {
    sponsorLogger.warn("MISSING_SPONSOR_ID", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 400;
    return {
      success: false,
      message: "Missing sponsor id ",
    };
  }

  try {
    const searchData = await prisma.sponsor.findUnique({
      where: {
        sponsorId: decryptedData,
      },
    });

    if (!searchData) {
      sponsorLogger.warn("SPONSOR_NOT_FOUND", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
      set.status = 404;
      return {
        success: false,
        message: "Sponsor not found",
      };
    }

    const deletionPromises = [];

    if (searchData.image) {
      const filePath = path.join(UPLOAD_DIR.logo, searchData.image);
      deletionPromises.push(
        fs.unlink(filePath).catch((err) => {
          sponsorLogger.error("Failed to delete file", {
            action,
            remoteAddr: clientIp,
            userId:
              authention.data.firstname_EN + " " + authention.data.lastname_EN,
            error: err.message,
          });
        }),
      );
    }

    await Promise.all(deletionPromises);

    const deleteData = await prisma.sponsor.delete({
      where: {
        sponsorId: searchData.sponsorId,
      },
    });

    if (deleteData) {
      sponsorLogger.info("SPONSOR_REMOVE_LOGO_SUCCESS", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
        data: {
          sponsorId: searchData.sponsorId,
          name: searchData.name,
        },
      });

      return {
        success: true,
        message: "Logo removed successfully",
      };
    }
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      query,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    sponsorLogger.error("Failed to upload logo", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to upload logo",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${
        Date.now() - new Date(requestTime).getTime()
      } | remoteAddr=${clientIp}`,
    );
  }
};
