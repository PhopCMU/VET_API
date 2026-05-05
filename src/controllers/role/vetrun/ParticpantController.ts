import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/vetrun";
import path from "path";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import {
  RequestModelImage,
  RequestModelImageTransferFile,
} from "../../../model/EncryptImage";
import { randomUUIDv7 } from "bun";
import { unlink } from "fs/promises";
import { promises as fs } from "fs";
import { createPartLogger } from "../../../../utils/Logger";
import { rateLimitByIp, getClientIp } from "../../../utils/rateLimiter";
import { authenticateOnly } from "../../../middleware/authAndDecrypt";

const prisma = new PrismaClient();
const vetLogger = createPartLogger("/Role/vetrun");
const Logger = createPartLogger("/Role/vetrun");

const UPLOAD_DIR = {
  slips: path.join(process.cwd(), "uploads", "dataVetRun", "paymentSlips"),
  shirts: path.join(process.cwd(), "uploads", "dataVetRun", "paymentShirt"),
};
const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

const Title = "[ADMIN DASHBOARD]|[VETRUN]|[PARTICIPANT]";

export const Role_ParticipantController_Vetrun = async ({
  query,
  request,
  set,
  jwt,
}: Context & {
  jwt: any;
}) => {
  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention.success) {
    console.error(`[${Title}]  AUTH_FAILED `);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    console.error(`[${Title}]  Missing encrypted data in query`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }
  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedDataYear: any = decryptMiddleware(decodedEncryptedData);

  try {
    const results = await prisma.participant.findMany({
      where: {
        createdAt: {
          gte: new Date(`${decryptedDataYear}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedDataYear + 1}-01-01T00:00:00Z`),
        },
      },
      include: {
        size_sh: true,
        Animal: true,
        Items_vip: {
          include: {
            size_sh: true,
          },
        },
        CheckPoint: true,
      },
      orderBy: [{ payment: "asc" }, { createdAt: "asc" }],
    });

    if (!results.length) {
      console.error(`[${Title}]  Not Data found`);
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }

    console.log(
      `[${Title}]  Data found | ADMIN NAME: ${authention?.data.firstname_EN} ${authention?.data.lastname_EN}`,
    );

    return {
      success: true,
      message: "Data found",
      data: results,
    };
  } catch (error: any) {
    console.error(`[${Title}]  Error: ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

export const Role_ParticipantController_Vetrun_Update_Payment = async ({
  query,
  request,
  set,
  jwt,
}: Context & {
  jwt: any;
}) => {
  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention.success) {
    console.error(`[${Title}]  AUTH_FAILED `);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    console.error(`[${Title}]  Missing encrypted data in query`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData: any = decryptMiddleware(decodedEncryptedData);

  if (typeof decryptedData === "string") {
    console.error(`[${Title}]  Missing participant ID in decrypted data`);
    set.status = 400;
    return {
      success: false,
      message: "Missing participant ID",
    };
  }

  try {
    const results = await prisma.participant.update({
      where: {
        participantId: decryptedData.id,
        payment: false,
      },
      data: {
        payment: true,
        updatedAt: new Date(),
      },
    });

    if (!results) {
      console.error(`[${Title}]  Not Data found`);
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }

    console.info(
      `[${Title}]  Data found | ADMIN NAME: ${authention?.data.firstname_EN} ${authention?.data.lastname_EN}`,
    );

    return {
      success: true,
      message: "Update payment status successfully",
    };
  } catch (error: any) {
    console.error(`[${Title}]  ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}]  Disconnected from database`);
  }
};

export const Role_ParticipantController_Vetrun_Update_PaymentSlip = async ({
  body,
  request,
  set,
  jwt,
}: Context & {
  jwt: any;
  body: RequestModelImage;
  request: any;
  set: any;
}) => {
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention.success) {
      console.error(`[${Title}]  AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    if (!body.encryptedData && !body.imageFile) {
      console.error(`[${Title}]  Missing encrypted data in query`);
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decryptedData: any = decryptMiddleware(body.encryptedData);

    if (typeof decryptedData === "string") {
      console.error(`[${Title}]  Missing participant ID in decrypted data`);
      set.status = 400;
      return {
        success: false,
        message: "Missing participant ID",
      };
    }

    const searchData: any = await prisma.participant.findUnique({
      where: {
        participantId: decryptedData.participantId,
        transferFile: { not: "" },
      },
    });

    if (!searchData) {
      set.status = 400;
      console.error(`[${Title}]   Missing participant ID in request`);
      return {
        success: false,
        message: "Missing participant ID",
      };
    }

    if (!body.imageFile) {
      set.status = 400;
      console.error(`[${Title}]   Missing imageFile in request`);
      return {
        success: false,
        message: "Missing Imagepayment in request",
      };
    }

    const imageExt = body.imageFile.name.split(".").pop()?.toLowerCase();
    if (body.imageFile) {
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        set.status = 400;
        console.error(`[${Title}]   Invalid Image extension: ${imageExt}`);
        return {
          success: false,
          message: "Invalid Image extension",
        };
      }

      const imageSize = Buffer.byteLength(await body.imageFile.arrayBuffer());
      if (imageSize > MAX_IMAGE_SIZE) {
        set.status = 400;
        console.error(
          `[${Title}]   Image size exceeds the limit: ${imageSize}`,
        );
        return {
          success: false,
          message: "Image size exceeds the limit",
        };
      }
    }
    const randomUUID = randomUUIDv7();
    const newFileImage = `${randomUUID}-${Date.now()}.${imageExt}`;

    const deletionPromises = [];

    if (searchData.transferFile && body.imageFile) {
      const oldFilePath = path.join(UPLOAD_DIR.slips, searchData.transferFile);
      deletionPromises.push(
        unlink(oldFilePath).catch((err) => {
          console.error(`[${Title}]  Error deleting old file: ${err.message}`);
        }),
      );
    }

    await Promise.all(deletionPromises);

    const updateImagePayment = await prisma.participant.update({
      where: {
        participantId: decryptedData.participantId,
      },
      data: {
        updatedAt: new Date(),
        transferFile: newFileImage,
      },
    });

    const writePromises = [];
    if (body.imageFile && newFileImage) {
      const ImageBuffer = Buffer.from(await body.imageFile.arrayBuffer());
      const ImagePath = path.join(UPLOAD_DIR.slips, newFileImage);
      writePromises.push(
        fs.writeFile(ImagePath, ImageBuffer).catch((err) => {
          console.error(`[${Title}]  Error writing Image file: ${err.message}`);
        }),
      );
    }

    await Promise.all(writePromises);

    if (updateImagePayment) {
      console.info(`[${Title}]  UPDATE IMAGE PAYMENT SUCCESSFUL`);
      set.status = 200;
      return {
        success: true,
        message: `Update Image payment successfully`,
      };
    }
  } catch (error: any) {
    console.error(`[${Title}]  ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}]  Disconnected from database`);
  }
};

export const RoleParticoantControllerVetRunRemove = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: any; request: any; set: any; jwt: any }) => {
  const action = "PARTICIPANT_CONTROLLER_VETRUN_REMOVE";

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
    vetLogger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    vetLogger.warn(
      `MISSING_ENCRYPTED_DATA | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData);
  if (!decryptedData) {
    vetLogger.warn(
      `DECRYPT_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  try {
    if (decryptedData.animalId) {
      await prisma.animal.delete({
        where: {
          animalId: decryptedData.animalId,
          participantId: decryptedData.participantId,
        },
      });
    }

    const deletionPromises = [];

    if (decryptedData.transferFile) {
      const filePath = path.join(UPLOAD_DIR.slips, decryptedData.transferFile);
      deletionPromises.push(
        unlink(filePath).catch((err) => {
          vetLogger.error(
            `Failed to delete file | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN} | error=${err.message}`,
          );
        }),
      );
    }

    await Promise.all(deletionPromises);

    const removeDataParticipant = await prisma.participant.delete({
      where: {
        participantId: decryptedData.participantId,
      },
    });

    if (removeDataParticipant) {
      vetLogger.info(
        `REMOVE_PARTICIPANT_SUCCESS | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN} | participantId=${removeDataParticipant.participantId} | name=${removeDataParticipant.firstName} ${removeDataParticipant.lastName}`,
      );
    }

    set.status = 200;
    return {
      success: true,
      message: "Remove participant success",
    };
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      query,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    vetLogger.error("Failed to Remove logo", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to Remove logo",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${
        Date.now() - new Date().getTime()
      } | remoteAddr=${clientIp}`,
    );
  }
};

export const RoleParticoantControllerVetRunEdit_Animal = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: any; request: any; set: any; jwt: any }) => {
  const action = "EDIT_PARTICIPANT_ANIMAL";

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
    vetLogger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    vetLogger.warn(
      `MISSING_ENCRYPTED_DATA | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData);
  if (!decryptedData) {
    vetLogger.warn(
      `DECRYPT_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  try {
    const editAnimal = await prisma.animal.update({
      where: {
        animalId: decryptedData.animalId,
      },
      data: {
        name: decryptedData.name,
        breed: decryptedData.breed,
        weight: decryptedData.weight,
        sex: decryptedData.sex,
      },
    });

    if (editAnimal) {
      vetLogger.info("EDIT_ANIMAL_SUCCESS", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
        data: {
          animalId: editAnimal.animalId,
          name: editAnimal.name,
          breed: editAnimal.breed,
          weight: editAnimal.weight,
          sex: editAnimal.sex,
        },
      });

      set.status = 200;
      return {
        success: true,
        message: "Edit animal success",
        data: editAnimal,
      };
    }

    // console.log({
    //   action,
    //   remoteAddr: clientIp,
    //   userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    //   data: decryptedData,
    // });
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      query,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    vetLogger.error("Failed to Remove logo", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to Remove logo",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${
        Date.now() - new Date().getTime()
      } | remoteAddr=${clientIp}`,
    );
  }
};

export const RoleParticoantControllerVetRunEdit_Prticipant = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: any; request: any; set: any; jwt: any }) => {
  const action = "EDIT_DATA_PARTICIPANT";

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
    vetLogger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    vetLogger.warn(
      `MISSING_ENCRYPTED_DATA | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData);
  if (!decryptedData) {
    vetLogger.warn(
      `DECRYPT_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  try {
    if (!decryptedData.participantId) {
      vetLogger.warn(
        `MISSING_PARTICIPANT_ID | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
      );

      set.status = 400;
      return {
        success: false,
        message: "Missing participantId",
      };
    }

    const editParticipant = await prisma.participant.update({
      where: {
        participantId: decryptedData.participantId,
      },
      data: {
        firstName: decryptedData.firstName,
        lastName: decryptedData.lastName,
        email: decryptedData.email,
        phone: decryptedData.phone,
        address: decryptedData.address,
        sex: decryptedData.sex,
        sizeId: decryptedData.sizeId,
        updatedAt: new Date(),
      },
    });

    if (editParticipant) {
      vetLogger.info(
        `EDIT_PARTICIPANT_SUCCESS | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN} | ` +
          `participantId=${editParticipant.participantId} | firstName=${editParticipant.firstName} | lastName=${editParticipant.lastName} | ` +
          `email=${editParticipant.email} | phone=${editParticipant.phone} | address=${editParticipant.address} | ` +
          `sex=${editParticipant.sex} | sizeId=${editParticipant.sizeId}`,
      );

      set.status = 200;
      return {
        success: true,
        message: "Edit Participant success",
        data: {
          firstName: editParticipant.firstName,
          lastName: editParticipant.lastName,
          email: editParticipant.email,
          phone: editParticipant.phone,
          address: editParticipant.address,
          sex: editParticipant.sex,
          sizeId: editParticipant.sizeId,
        },
      };
    }
    // const editAnimal = await prisma.animal.update({
    //   where: {
    //     animalId: decryptedData.animalId,
    //   },
    //   data: {
    //     name: decryptedData.name,
    //     breed: decryptedData.breed,
    //     weight: decryptedData.weight,
    //     sex: decryptedData.sex,
    //   },
    // });

    // if (editAnimal) {
    //   vetLogger.info("EDIT_ANIMAL_SUCCESS", {
    //     action,
    //     remoteAddr: clientIp,
    //     userId:
    //       authention.data.firstname_EN + " " + authention.data.lastname_EN,
    //     data: {
    //       animalId: editAnimal.animalId,
    //       name: editAnimal.name,
    //       breed: editAnimal.breed,
    //       weight: editAnimal.weight,
    //       sex: editAnimal.sex,
    //     },
    //   });

    //   set.status = 200;
    //   return {
    //     success: true,
    //     message: "Edit animal success",
    //     data: editAnimal,
    //   };
    // }
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      query,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    vetLogger.error("Failed to Remove logo", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to Remove logo",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${
        Date.now() - new Date().getTime()
      } | remoteAddr=${clientIp}`,
    );
  }
};

export const RoleOrderShirtsControllerVetrun = async ({
  query,
  set,
  request,
  jwt,
}: Context & { query: any; jwt: any; set: any; request: any }) => {
  const action = "FETCH_ORDER_SHIRTS";
  const clientIp = getClientIp(request) || "unknown";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
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
    authention.data?.firstname_EN + " " + authention.data?.lastname_EN;

  if (!query.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodeEndcypto = decodeURIComponent(query.encryptedData);
  const decryptedDataYear = decryptMiddleware(decodeEndcypto) as any;
  if (!decryptedDataYear) {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  try {
    const orderShirts = await prisma.userSaleShirt.findMany({
      where: {
        createdAt: {
          gte: new Date(`${decryptedDataYear}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedDataYear + 1}-01-01T00:00:00Z`),
        },
      },
      include: {
        OrderItem: {
          include: {
            size: true,
            shirtmodel: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!orderShirts) {
      Logger.error(`${action} | ORDER_SHIRTS_NOT_FOUND`);
      set.status = 404;
      return {
        success: false,
        message: "Order shirts not found",
      };
    }

    set.status = 200;
    return {
      success: true,
      message: "Fetch order shirts success",
      data: orderShirts,
    };
  } catch (e: any) {
    // Log error with context
    Logger.error(`${action} | ${name_admin} | ${e.message}`);
    set.status = 500;
    return {
      success: false,
      message: e.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const RoleOrderShirtsControllerVetrun_Update = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: any; jwt: any; set: any; request: any }) => {
  const action = "UPDATE_ORDER_SHIRTS";
  const clientIp = getClientIp(request) || "unknown";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
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
    authention.data?.firstname_EN + " " + authention.data?.lastname_EN;

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
  if (!decryptedData && typeof decryptedData === "string") {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  try {
    const res = await prisma.userSaleShirt.update({
      where: {
        userId: decryptedData,
      },
      data: {
        payment: true,
        updatedAt: new Date(),
      },
    });

    if (!res) {
      Logger.error(`${action} | ORDER_SHIRTS_NOT_FOUND`);
      set.status = 404;
      return {
        success: false,
        message: "Order shirts not found",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | ORDER_SHIRTS_UPDATE_SUCCESS | ${res.fullname} | ${res.userId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update order shirts success",
      data: res,
    };
  } catch (e: any) {
    // Log error with context
    Logger.error(`${action} | ${name_admin} | ${e.message}`);
    set.status = 500;
    return {
      success: false,
      message: e.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const RoleOrderTrackingControllerVetrun_Update = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: any; jwt: any; set: any; request: any }) => {
  const action = "UPDATE_ORDER_TRACKING";
  const clientIp = getClientIp(request) || "unknown";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
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
    authention.data?.firstname_EN + " " + authention.data?.lastname_EN;

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
  if (!decryptedData && typeof decryptedData === "string") {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  try {
    if (!decryptedData.userId) {
      Logger.error(`${action} | MISSING_USER_ID`);
      set.status = 400;
      return {
        success: false,
        message: "Missing user id",
      };
    }

    if (!decryptedData.trackingValue) {
      Logger.error(`${action} | MISSING_TRACKING_VALUE`);
      set.status = 400;
      return {
        success: false,
        message: "Missing tracking value",
      };
    }

    const res = await prisma.userSaleShirt.update({
      where: {
        userId: decryptedData.userId,
      },
      data: {
        ems_tracking: decryptedData.trackingValue,
        updatedAt: new Date(),
      },
    });

    if (!res) {
      Logger.error(`${action} | ORDER_SHIRTS_NOT_FOUND`);
      set.status = 404;
      return {
        success: false,
        message: "Order shirts not found",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | ORDER_SHIRTS_TARACKING_UPDATE_SUCCESS | ${res.fullname} | ${res.userId}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update order taracking shirts success",
      data: res,
    };
  } catch (e: any) {
    // Log error with context
    Logger.error(`${action} | ${name_admin} | ${e.message}`);
    set.status = 500;
    return {
      success: false,
      message: e.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const RoleOrderShirtsSlipImageControllerVetrun_Update = async ({
  body,
  jwt,
  request,
  set,
}: Context & {
  body: RequestModelImageTransferFile;
  jwt: any;
  request: any;
  set: any;
}) => {
  const action = "UPDATE_ORDER_SHIRTS_SLIP_IMAGE";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    vetLogger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
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
  if (!authention.success) {
    vetLogger.warn(`${action} | AUTH_FAILED | remoteAddr=${clientIp}`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  const name_admin =
    authention.data?.firstname_EN + " " + authention.data?.lastname_EN;

  if (!body.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodeEndcypto = decodeURIComponent(body.encryptedData);
  const decryptedData = decryptMiddleware(decodeEndcypto) as any;
  if (!decryptedData && typeof decryptedData === "string") {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  if (!body.transferFile) {
    Logger.error(`${action} | MISSING_TRANSFER_FILE`);
    set.status = 400;
    return {
      success: false,
      message: "Missing transfer file",
    };
  }

  try {
    const remove_old_file = await prisma.userSaleShirt.findUnique({
      where: {
        userId: decryptedData.userId,
      },
    });

    if (!remove_old_file) {
      Logger.error(`${action} | ORDER_SHIRTS_NOT_FOUND`);
      set.status = 404;
      return {
        success: false,
        message: "Order shirts not found",
      };
    }

    const imageExt = body.transferFile.name.split(".").pop()?.toLowerCase();

    if (body.transferFile) {
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        Logger.error(`${action} | INVALID_IMAGE_EXTENSION ${imageExt}`);
        set.status = 400;
        return {
          success: false,
          message: "Invalid image extension",
        };
      }

      const imageSize = Buffer.byteLength(
        await body.transferFile.arrayBuffer(),
      );
      if (imageSize > MAX_IMAGE_SIZE) {
        Logger.error(`${action} | INVALID_IMAGE_SIZE`);
        set.status = 400;
        return {
          success: false,
          message: "Invalid image size",
        };
      }
    }

    const randomUUID = randomUUIDv7();
    const newFileName = `${randomUUID}-${Date.now()}.${imageExt}`;

    const delettionPromises = [];

    if (remove_old_file?.transferFile && body.transferFile) {
      const oldFilePath = path.join(
        UPLOAD_DIR.shirts,
        remove_old_file.transferFile,
      );
      delettionPromises.push(
        unlink(oldFilePath).catch((err) => {
          Logger.error(`${action} | ${name_admin} | ${err.message}`);
          return {
            success: false,
            message: err.message,
          };
        }),
      );
    }

    await Promise.all(delettionPromises);

    const updateImage = await prisma.userSaleShirt.update({
      where: {
        userId: decryptedData.userId,
      },
      data: {
        transferFile: newFileName,
        updatedAt: new Date(),
      },
    });

    const writePromises = [];
    if (body.transferFile && newFileName) {
      const ImageBuffer = Buffer.from(await body.transferFile.arrayBuffer());
      const ImagePath = path.join(UPLOAD_DIR.shirts, newFileName);
      writePromises.push(
        fs.writeFile(ImagePath, ImageBuffer).catch((err) => {
          Logger.error(`${action} | ${name_admin} | ${err.message}`);
          return {
            success: false,
            message: err.message,
          };
        }),
      );
    }

    await Promise.all(writePromises);

    if (!updateImage) {
      Logger.error(`${action} | UPDATE_FAILED`);
      set.status = 500;
      return {
        success: false,
        message: "Update failed",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | UPDATE_SUCCESS | ${decryptedData.userId}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Update success",
    };
  } catch (e: any) {
    // Log error with context
    Logger.error(`${action} | ${name_admin} | ${e.message}`);
    set.status = 500;
    return {
      success: false,
      message: e.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const RoleOrderShirtsControllerVetrun_Delete = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: any; jwt: any; set: any; request: any }) => {
  const action = "DELETE_ORDER_SHIRTS";
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
    Logger.error(`${action} | ERROR TOKEN HEADER | ${clientIp}`);
    set.status = 401;
    return {
      success: false,
      message: "ERROR TOKEN HEADER",
    };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention) {
    Logger.error(`${action} | ERROR VERIFY AUTH FAILED | ${clientIp}`);
  }

  const name_admin =
    authention.data?.firstname_EN + " " + authention.data?.lastname_EN;

  const decodeEndcypto = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodeEndcypto) as any;

  if (!decryptedData) {
    Logger.error(`${action} | ERROR VERIFY AUTH FAILED | ${clientIp}`);
    set.status = 401;
    return {
      success: false,
      message: "ERROR VERIFY AUTH FAILED",
    };
  }

  try {
    const checkOrderItems = await prisma.orderItem.deleteMany({
      where: {
        userSaleshirtId: decryptedData,
      },
    });

    if (!checkOrderItems) {
      Logger.error(`${action} | DELETE_ORDER_SHIRTS_FAILED`);
      set.status = 500;
      return {
        success: false,
        message: "Delete order shirts failed",
      };
    }

    const checkUser = await prisma.userSaleShirt.findUnique({
      where: {
        userId: decryptedData,
      },
    });

    const deletionPromises = [];

    if (checkUser?.transferFile) {
      const oldFilePath = path.join(UPLOAD_DIR.shirts, checkUser.transferFile);
      deletionPromises.push(
        unlink(oldFilePath).catch((err) => {
          Logger.error(`${action} | ${name_admin} | ${err.message}`);
          return {
            success: false,
            message: err.message,
          };
        }),
      );
    }

    await Promise.all(deletionPromises);

    const deleteOrderShirts = await prisma.userSaleShirt.delete({
      where: {
        userId: decryptedData,
      },
    });

    if (!deleteOrderShirts) {
      Logger.error(`${action} | DELETE_ORDER_SHIRTS_FAILED`);
      set.status = 500;
      return {
        success: false,
        message: "Delete order shirts failed",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | DELETE_ORDER_SHIRTS_SUCCESS | ${checkUser?.fullname} | ${decryptedData}`,
    );
    set.status = 200;
    return {
      success: true,
      message: "Delete order shirts success",
    };
  } catch (e: any) {
    // Log error with context
    Logger.error(`${action} | ${name_admin} | ${e.message}`);
    set.status = 500;
    return {
      success: false,
      message: e.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const RoleCheckPointControllerVetrun = async ({
  body,
  request,
  set,
  jwt,
}: Context & {
  body: { encryptedData: string };
  request: any;
  set: any;
  jwt: any;
}) => {
  const action = "CHECKPOINT";

  // ✅ ใช้ middleware สำหรับ Rate Limit + Auth
  const authResult = await authenticateOnly(request, set, jwt, action);
  if (!authResult.success) {
    return {
      success: false,
      message: authResult.message,
    };
  }

  const name_admin = `${authResult.data?.firstname_EN} ${authResult.data?.lastname_EN}`;

  // --- ตรรกะเฉพาะของ endpoint นี้ (รับจาก body) ---
  if (!body?.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decryptedData = decryptMiddleware(body.encryptedData);
  if (!decryptedData) {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  try {
    console.debug({
      action,
      name_admin,
      decryptedData,
    });

    const checkPoint = await prisma.checkPoint.upsert({
      where: {
        participantId: decryptedData.participantId,
      },
      update: {
        checkPoint: decryptedData.checkPoint,
        updatedAt: new Date(),
      },
      create: {
        participantId: decryptedData.participantId,
        checkPoint: decryptedData.checkPoint,
        createdAt: new Date(),
      },
    });

    if (!checkPoint) {
      Logger.error(`${action} | UPDATE_CHECK_POINT_FAILED`);
      set.status = 500;
      return {
        success: false,
        message: "Update check point failed",
      };
    }

    Logger.info(
      `${action} | ${name_admin} | UPDATE_CHECK_POINT_SUCCESS | ${checkPoint.participantId} | ${checkPoint.checkPoint}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Update check point success",
      change: checkPoint.checkPoint,
    };
  } catch (e: any) {
    Logger.error(`${action} | ${name_admin} | ${e.message}`);
    set.status = 500;
    return {
      success: false,
      message: e.message,
    };
  }
};
