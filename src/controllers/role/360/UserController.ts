import { PrismaClient } from "../../../../generated/360";
import { Context } from "elysia";
import {
  decryptMiddleware,
  decryptMiddlewareParse,
} from "../../../middleware/decryptMiddleware";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { EncryptedPropsModel } from "../../../model/360/UserModel";
import path from "path";
import { randomUUIDv7 } from "bun";
import { unlink } from "fs/promises";
import { promises as fs } from "fs";

const prisma = new PrismaClient();

const UPLOAD_DIR = {
  imgProfile: path.join(process.cwd(), "uploads", "data360", "profiles"),
};
const allowedImageExtensions = ["jpg", "jpeg", "png", "webp"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

export const fetchUserControllerRole = async ({
  query,
  set,
  request,
  jwt,
}: Context & { jwt: any; query: EncryptedPropsModel }) => {
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
  const Title = `ADMIN DASHBOARD][360`;

  console.info(`-`.repeat(80));
  console.info(`User`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting to fetch user`);

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

    const search = await prisma.user.findMany({
      where: {
        level2agency_th: decryptedData ?? "",
      },
      include: {
        evaluations: true,
        evaluation_B: true,
      },
      orderBy: {
        fullname_th: "asc",
      },
    });

    if (search) {
      console.log(`[${Title}] [${requestTime}] User Fetch success`);
      set.status = 200;
      return {
        success: true,
        data: search,
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
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const fatchUserAllBoardController_Role = async ({
  query,
  set,
  request,
  jwt,
}: Context & { jwt: any; query: any }) => {
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

  const Title = "360";

  console.info(`-`.repeat(80));
  console.info(`User`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting to fetch user`);

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

    const search = await prisma.user.findMany({
      where: {
        level2agency_th: decryptedData ?? "",
        level3agency_th: "ศูนย์เวชศาสตร์ชันสูตรและนวัตกรรมด้านสุขภาพสัตว์",
      },
      orderBy: {
        fullname_th: "asc",
      },
    });

    if (search) {
      console.log(`[${Title}] [${requestTime}] Fetch user success `);
      set.status = 200;
      return {
        success: true,
        data: search,
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
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const fatchUserAllBoardSanboxController_Role = async ({
  query,
  set,
  request,
  jwt,
}: Context & { jwt: any; query: any }) => {
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

  const Title = "360";

  console.info(`-`.repeat(80));
  console.info(`User`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting to fetch user`);

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

    const search = await prisma.user.findMany({
      where: {
        level2agency_th: decryptedData ?? "",
        NOT: {
          level3agency_th: "ศูนย์เวชศาสตร์ชันสูตรและนวัตกรรมด้านสุขภาพสัตว์",
        },
      },
      orderBy: {
        fullname_th: "asc",
      },
    });

    if (search) {
      console.log(`[${Title}] [${requestTime}] Fetch user success `);
      set.status = 200;
      return {
        success: true,
        data: search,
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
      message: "User fetch failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const userData = async ({
  set,
  request,
  jwt,
}: Context & { jwt: any; request: any; set: any }) => {
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${request.headers.method}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const search = await prisma.user.findMany({
      orderBy: {
        fullname_th: "asc",
      },
    });

    console.info(
      `[${JSON.stringify(request.method)}][${JSON.stringify(request.url)}] Success fetch user `,
    );

    if (search) {
      set.status = 200;
      return {
        success: true,
        data: search,
      };
    }
  } catch (error: any) {
    set.status = 500;
    return {
      success: false,
      message: "User fetch failed",
    };
  }
};

export const updateProfile = async ({
  body,
  set,
  request,
  jwt,
}: Context & {
  jwt: any;
  request: any;
  set: any;
  body: { encryptedData: string; file: File };
}) => {
  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention.success) {
    console.error(`[${request.headers.method}] AUTH_FAILED `);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  try {
    if (!body.file && !body.encryptedData) {
      console.error(
        `[${request.method}] | [${request.url}] Missing encrypted data `,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decryptedData = decryptMiddleware(body.encryptedData);

    if (!decryptedData) {
      console.error(
        `[${request.method}] | [${request.url}] Failed to decrypt data`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    if (!decryptedData.accountId) {
      console.error(
        `[${request.method}] | [${request.url}] Missing accountId in decrypted data`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing accountId in decrypted data",
      };
    }

    const user = await prisma.user.findFirst({
      where: {
        accountId: decryptedData.accountId,
      },
    });

    if (!user) {
      console.error(`[${request.method}] | [${request.url}] User not found`);
      set.status = 404;
      return {
        success: false,
        message: "User not found",
      };
    }

    let imagePathForDb = user.imageprofile;

    if (body.file) {
      const imageExt = body.file.name.split(".").pop()?.toLocaleLowerCase();
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        console.error(
          `[${request.method}] | [${request.url}] Invalid image file`,
        );
        set.status = 400;
        return {
          success: false,
          message: "Invalid image file",
        };
      }

      const imageSize = Buffer.byteLength(await body.file.arrayBuffer());
      if (imageSize > MAX_IMAGE_SIZE) {
        console.error(
          `[${request.method}] | [${request.url}] Image file size too large`,
        );
        set.status = 400;
        return {
          success: false,
          message: "Image file size too large",
        };
      }

      const randomUUID = randomUUIDv7();
      const filename = `${randomUUID}-${Date.now()}.${imageExt}`;
      imagePathForDb = `/uploads/data360/profiles/${filename}`;

      // 1. ตรวจสอบก่อนว่ามี ไฟล์ รูปเดิมอยู่ไหม ถ้ามีให้ลบรูปเดิมออกก่อน
      if (user.imageprofile) {
        const oldFileName = path.basename(user.imageprofile);
        const oldFilePath = path.join(UPLOAD_DIR.imgProfile, oldFileName);
        try {
          await fs.access(oldFilePath);
          await unlink(oldFilePath);
          console.info(
            `[${request.method}] | [${request.url}] Deleted old image file: ${oldFileName}`,
          );
        } catch (error) {
          console.warn(
            `[${request.method}] | [${request.url}] Old image file not found or could not be deleted: ${oldFileName}`,
          );
        }
      }

      // 2. บันทึกไฟล์ใหม่ลงไป
      await fs.mkdir(UPLOAD_DIR.imgProfile, { recursive: true });
      const imageBuffer = Buffer.from(await body.file.arrayBuffer());
      const imagePath = path.join(UPLOAD_DIR.imgProfile, filename);
      await fs.writeFile(imagePath, imageBuffer);
    }

    const updateImageFile = await prisma.user.update({
      where: {
        accountId: user.accountId,
      },
      data: {
        cmuaccount: decryptedData.cmuaccount,
        fullname_th: decryptedData.fullname_th,
        accounttype_th: decryptedData.accounttype_th,
        level2agency_th: decryptedData.level2agency_th,
        level3agency_th: decryptedData.level3agency_th,
        positiontitle_th: decryptedData.positiontitle_th,
        nickname: decryptedData.nickname,
        ratenumber: decryptedData.ratenumber,
        imageprofile: imagePathForDb,
        updatedAt: new Date(),
      },
    });

    if (!updateImageFile) {
      console.error(
        `[${request.method}] | [${request.url}] Failed to update user profile`,
      );
      set.status = 500;
      return {
        success: false,
        message: "Failed to update user profile",
      };
    }

    set.status = 200;
    console.info(
      `[${request.method}] | [${request.url}] Success update user profile`,
    );
    return {
      success: true,
      message: "Success update user profile",
    };
  } catch (error) {
    console.error("Update profile error:", error);
    set.status = 500;
    return {
      success: false,
      message: "Update profile failed",
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteProfile = async ({
  query,
  set,
  request,
  jwt,
}: Context & { query: { data: string }; request: any; jwt: any }) => {
  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention.success) {
    console.error(`[${request.headers.method}] AUTH_FAILED `);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  try {
    if (!query.data) {
      console.error(`[${request.method}] | [${request.url}] No data provided`);
      set.status = 400;
      return {
        success: false,
        message: "No data provided",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.data);
    const decryptedData = decryptMiddlewareParse(decodedEncryptedData);

    if (!decryptedData || !decryptedData.value) {
      console.error(`[${request.method}] | [${request.url}] Invalid data`);
      set.status = 400;
      return {
        success: false,
        message: "Invalid data",
      };
    }

    const accountId = decryptedData.value;
    console.debug(
      `[${request.method}] | [${request.url}] Decrypted accountId:`,
      accountId,
    );

    // 1. ค้นหา User ก่อนเพื่อดึงข้อมูลไฟล์รูปภาพ
    const user = await prisma.user.findUnique({
      where: { accountId },
    });

    if (!user) {
      console.error(`[${request.method}] | [${request.url}] User not found`);
      set.status = 404;
      return {
        success: false,
        message: "User not found",
      };
    }

    // 2. ตรวจสอบและลบข้อมูลใน evaluation และ evaluation_B
    const evaluationsCount = await prisma.evaluation.count({
      where: { accountId },
    });
    if (evaluationsCount > 0) {
      await prisma.evaluation.deleteMany({
        where: { accountId },
      });
      console.info(
        `[${request.method}] | [${request.url}] Deleted ${evaluationsCount} evaluations`,
      );
    }

    const evaluationBsCount = await prisma.evaluation_B.count({
      where: { accountId },
    });
    if (evaluationBsCount > 0) {
      await prisma.evaluation_B.deleteMany({
        where: { accountId },
      });
      console.info(
        `[${request.method}] | [${request.url}] Deleted ${evaluationBsCount} evaluation_Bs`,
      );
    }

    // 3. ลบรูปโปรไฟล์ออกจาก file system
    if (user.imageprofile) {
      const fileName = path.basename(user.imageprofile);
      const filePath = path.join(UPLOAD_DIR.imgProfile, fileName);
      try {
        await fs.access(filePath);
        await unlink(filePath);
        console.info(
          `[${request.method}] | [${request.url}] Deleted profile image: ${fileName}`,
        );
      } catch (err) {
        console.warn(
          `[${request.method}] | [${request.url}] Profile image not found or could not be deleted: ${fileName}`,
        );
      }
    }

    // 4. ลบ User
    const remove = await prisma.user.delete({
      where: { accountId },
    });

    if (!remove) {
      console.error(
        `[${request.method}] | [${request.url}] Failed to delete user`,
      );
      set.status = 500;
      return {
        success: false,
        message: "Failed to delete user",
      };
    }

    set.status = 200;
    console.info(
      `[${request.method}] | [${request.url}] Success delete user profile`,
    );
    return {
      success: true,
      message: "Success delete user profile",
    };
  } catch (error: any) {
    set.status = 500;
    console.error(`[${request.method}] | [${request.url}] ${error.message}`);
    return {
      success: false,
      message: "Delete profile failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const createUser = async ({
  body,
  set,
  request,
  jwt,
}: Context & { jwt: any; request: any; set: any; body: any }) => {
  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention.success) {
    console.error(`[${request.headers.method}] AUTH_FAILED `);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  try {
    if (!body.encryptedData) {
      console.error(
        `[${request.headers.method}] | [${request.url}] Missing encrypted data `,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decryptedData = decryptMiddleware(body.encryptedData);

    if (!decryptedData) {
      console.error(
        `[${request.method}] | [${request.url}] Failed to decrypt data`,
        decryptedData,
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const user = await prisma.user.findFirst({
      where: {
        cmuaccount: decryptedData.cmuaccount,
      },
    });

    if (user) {
      console.error(
        `[${request.method}] | [${request.url}] User already exists`,
      );
      set.status = 400;
      return {
        success: false,
        message: "User already exists",
      };
    }

    let imagePathForDb = null;

    if (body.file) {
      const imageExt = body.file.name.split(".").pop()?.toLocaleLowerCase();
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        console.error(
          `[${request.method}] | [${request.url}] Invalid image file`,
        );
        set.status = 400;
        return {
          success: false,
          message: "Invalid image file",
        };
      }

      const imageSize = Buffer.byteLength(await body.file.arrayBuffer());
      if (imageSize > MAX_IMAGE_SIZE) {
        console.error(
          `[${request.method}] | [${request.url}] Image file size too large`,
        );
        set.status = 400;
        return {
          success: false,
          message: "Image file size too large",
        };
      }

      const randomUUID = randomUUIDv7();
      const filename = `${randomUUID}-${Date.now()}.${imageExt}`;
      imagePathForDb = `/uploads/data360/profiles/${filename}`;

      await fs.mkdir(UPLOAD_DIR.imgProfile, { recursive: true });
      const imageBuffer = Buffer.from(await body.file.arrayBuffer());
      const imagePath = path.join(UPLOAD_DIR.imgProfile, filename);
      await fs.writeFile(imagePath, imageBuffer);
    }

    const newUser = await prisma.user.create({
      data: {
        cmuaccount: decryptedData.cmuaccount,
        fullname_th: decryptedData.fullname_th,
        accounttype_th: decryptedData.accounttype_th,
        level1agency_th: "คณะสัตวแพทยศาสตร์",
        level2agency_th: decryptedData.level2agency_th,
        level3agency_th: decryptedData.level3agency_th,
        positiontitle_th: decryptedData.positiontitle_th,
        nickname: decryptedData.nickname,
        ratenumber: decryptedData.ratenumber,
        imageprofile: imagePathForDb,
        workingstatus: decryptedData.workingstatus,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    if (!newUser) {
      console.error(
        `[${request.method}] | [${request.url}] Failed to create user`,
      );
      set.status = 500;
      return {
        success: false,
        message: "Failed to create user",
      };
    }

    set.status = 201;
    console.info(
      `[${request.method}] | [${request.url}] Success create user profile`,
    );
    return {
      success: true,
      message: "Success create user profile",
      data: newUser,
    };
  } catch (error: any) {
    console.error(
      `[${request.headers.method}] | [${request.url}] ${error.message}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "Create user failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};
