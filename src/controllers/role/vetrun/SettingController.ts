import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/role";
import { authWithRateLimit } from "../../../middleware/authAndDecrypt";
import { createPartLogger } from "../../../../utils/Logger";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";

const prisma = new PrismaClient();

const Logger = createPartLogger("/Role/vetrun");

export const GetProjectToggle = async ({
  query,
  request,
  jwt,
  set,
}: Context & {
  query: string;
  request: any;
  jwt: any;
  set: any;
}) => {
  const action = "GET_PROJECT_TOGGLE";
  // ✅ ใช้ middleware สำหรับ authentication เท่านั้น (ไม่มี rate limit)
  const authResult = await authWithRateLimit(request, set, jwt, action);
  if (!authResult.success) {
    return {
      success: false,
      message: authResult.message,
    };
  }

  const name_admin =
    authResult.data?.firstname_EN + " " + authResult.data?.lastname_EN;

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
    const result = await prisma.project.findFirst({
      where: {
        database: decryptedData.title,
      },
    });

    Logger.info(
      `${action} | ${name_admin} | ${decryptedData.title} | ${result?.name} | SUCCESS`
    );
    set.status = 200;
    return {
      success: true,
      message: "Success",
      data: result?.status,
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

export const UpdateProjectToggle = async ({
  query,
  request,
  jwt,
  set,
}: Context & {
  query: string;
  request: any;
  jwt: any;
  set: any;
}) => {
  const action = "UPDATE_PROJECT_TOGGLE";
  // ✅ ใช้ middleware สำหรับ authentication เท่านั้น (ไม่มี rate limit)
  const authResult = await authWithRateLimit(request, set, jwt, action);
  if (!authResult.success) {
    return {
      success: false,
      message: authResult.message,
    };
  }

  const name_admin =
    authResult.data?.firstname_EN + " " + authResult.data?.lastname_EN;

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
    // console.debug({
    //   name_admin: name_admin,
    //   decryptedData: decryptedData,
    // });

    await prisma.project.updateMany({
      where: {
        database: decryptedData.tileData,
      },
      data: {
        status: decryptedData.onToggle,
      },
    });

    // console.debug({
    //   name_admin: name_admin,
    //   decryptedData: decryptedData,
    //   result: result,
    // });

    Logger.info(
      `${action} | ${name_admin} | ${decryptedData.tileData} |  ${decryptedData?.onToggle} | SUCCESS`
    );
    set.status = 200;
    return {
      success: true,
      message: "Success",
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
