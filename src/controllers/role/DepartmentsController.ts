import { PrismaClient } from "../../../generated/role";
import { Context } from "elysia";
import { createPartLogger } from "../../../utils/Logger";
import { CheckJWTAuthention } from "../../services/CheckJWTService";
import { rateLimitByIp, getClientIp } from "../../utils/rateLimiter";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";

const prisma = new PrismaClient();

const departmentLogger = createPartLogger("/Role/authen");

export const MainDepartment_Controller_Create = async ({
  body,
  set,
  request,
  jwt,
}: Context & {
  body: { encryptedData: string; status: number };
  set: any;
  request: any;
  jwt: any;
}) => {
  const action = "CREATE_MAIN_DEPARTMENT";
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
    departmentLogger.warn("AUTH_FAILED", {
      action,
      remoteAddr: getClientIp(request) || "unknown",
      userAgent: request.headers.get("user-agent"),
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!body?.encryptedData || body.status !== 200) {
    departmentLogger.warn("MISSING_ENCRYPTED_DATA", {
      action,
      remoteAddr: getClientIp(request) || "unknown",
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decryptedData = decryptMiddleware(body.encryptedData);

  if (!decryptedData) {
    departmentLogger.warn("DECRYPT_FAILED", {
      action,
      remoteAddr: getClientIp(request) || "unknown",
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 400;
    return {
      success: false,
      message: "Decryption failed",
    };
  }

  try {
    if (body.status === 200) {
      const create = await prisma.mainDepartment.create({
        data: {
          name_TH: decryptedData.name_TH,
          name_EN: decryptedData.name_EN,
        },
      });

      if (create) {
        departmentLogger.info("CREATE_MAIN_DEPARTMENT", {
          action,
          remoteAddr: getClientIp(request) || "unknown",
          body,
          userId:
            authention.data.firstname_EN + " " + authention.data.lastname_EN,
        });

        set.status = 200;
        return {
          success: true,
          message: "Create main department success",
          data: create,
        };
      }
    } else {
      departmentLogger.error("Failed to Create main department", {
        action,
        remoteAddr: getClientIp(request) || "unknown",
        body,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
    }
  } catch (e: any) {
    const errorContext = {
      action,
      body,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    departmentLogger.error("Failed to Create main department", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to Create main department",
      error: e.message,
    };
  } finally {
    console.debug("process completed", {
      action,
      durationMs: Date.now() - new Date().getTime(),
      remoteAddr: clientIp,
    });
  }
};

export const SubDepartment_Controller_Create = async ({
  body,
  set,
  request,
  jwt,
}: Context & {
  body: { encryptedData: string; status: number };
  set: any;
  request: any;
  jwt: any;
}) => {
  const action = "CREATE_SUB_DEPARTMENT";
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
    departmentLogger.warn("AUTH_FAILED", {
      action,
      remoteAddr: clientIp,
      userAgent: request.headers.get("user-agent"),
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!body?.encryptedData || body.status !== 200) {
    departmentLogger.warn("MISSING_ENCRYPTED_DATA", {
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

  const decryptedData = decryptMiddleware(body.encryptedData);

  if (!decryptedData) {
    departmentLogger.warn("DECRYPT_FAILED", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 400;
    return {
      success: false,
      message: "Decryption failed",
    };
  }

  try {
    if (body.status === 200) {
      console.debug("process started", {
        action,
        remoteAddr: clientIp,

        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
        decryptedData,
      });

      const create = await prisma.subDepartment.create({
        data: {
          mainDepartmentId: decryptedData.mainDepartmentId,
          name_TH: decryptedData.name_TH,
          name_EN: decryptedData.name_EN,
        },
      });

      if (create) {
        departmentLogger.info("CREATE_SUB_DEPARTMENT", {
          action,
          remoteAddr: clientIp,
          body,
          userId:
            authention.data.firstname_EN + " " + authention.data.lastname_EN,
        });

        set.status = 200;
        return {
          success: true,
          message: "Create sub department success",
          // data: create,
        };
      }
    } else {
      departmentLogger.error("Failed to Edit logo", {
        action,
        remoteAddr: clientIp,
        body,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
    }
  } catch (e: any) {
    const errorContext = {
      action,
      body,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    departmentLogger.error("Failed to Create sub department", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "ailed to Create sub department",
      error: e.message,
    };
  } finally {
    console.debug("process completed", {
      action,
      durationMs: Date.now() - new Date().getTime(),
      remoteAddr: clientIp,
    });
  }
};

export const DepartmentMemberShip_Controller_Create = async ({
  body,
  set,
  request,
  jwt,
}: Context & {
  body: { encryptedData: string; status: number };
  set: any;
  request: any;
  jwt: any;
}) => {
  const action = "CREATE_SUB_DEPARTMENT";
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
    departmentLogger.warn("AUTH_FAILED", {
      action,
      remoteAddr:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
      userAgent: request.headers.get("user-agent"),
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!body.encryptedData) {
    departmentLogger.warn("MISSING_ENCRYPTED_DATA", {
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

  const decryptedData = decryptMiddleware(body.encryptedData);

  if (!decryptedData) {
    departmentLogger.warn("DECRYPT_FAILED", {
      action,
      remoteAddr: clientIp,
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 400;
    return {
      success: false,
      message: "Decryption failed",
    };
  }

  try {
    const searchUser = await prisma.user.findUnique({
      where: {
        userId: decryptedData.personnelId,
      },
    });

    if (!searchUser) {
      departmentLogger.warn("NO_USER_FOUND", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
      set.status = 400;
      return {
        success: false,
        message: "No user found",
      };
    }

    const searchMaindepartment = await prisma.mainDepartment.findUnique({
      where: {
        mainDepartmentId: decryptedData.mainDepartmentId,
      },
    });

    if (!searchMaindepartment) {
      departmentLogger.warn("NO_MAIN_DEPARTMENT_FOUND", {
        action,
        remoteAddr: clientIp,
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
      set.status = 400;
      return {
        success: false,
        message: "No main department found",
      };
    }

    const create = await prisma.departmentMembership.create({
      data: {
        subDepartmentId: decryptedData.subDepartmentId,
        userId: decryptedData.personnelId,
      },
    });

    if (create) {
      departmentLogger.info("CREATE_DEPARTMENT_SHIP_DEPARTMENT", {
        action,
        remoteAddr:
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          "unknown",
        userId:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
      });
      set.status = 200;
      return {
        success: true,
        message: "Successfully Create Department Ship department",
      };
    }
  } catch (e: any) {
    const errorContext = {
      action,
      body,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    departmentLogger.error(
      "Failed to Create Department Ship department",
      errorContext,
    );

    set.status = 500;
    return {
      success: false,
      message: "Failed to Create Department Ship department",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.debug("process completed", {
      action,
      durationMs: Date.now() - new Date().getTime(),
      remoteAddr:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
    });
  }
};

export const MainDepartment_Controller_Get_All = async ({
  request,
  set,
  jwt,
}: Context & { request: any; jwt: any }) => {
  const actions = "FETCH_MAIN_DEPARTMENT";
  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention.success) {
    departmentLogger.warn("AUTH_FAILED", {
      actions: actions,
      remoteAddr:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
      userId: authention.data.firstname_EN + " " + authention.data.lastname_EN,
    });
    set.status = 401;
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const fetch = await prisma.mainDepartment.findMany({
      include: {
        subDepartments: true,
      },
    });
    if (fetch) {
      departmentLogger.debug("FETCH_MAIN_DEPARTMENT");
      set.status = 200;
      return {
        success: true,
        message: "Fetch main department success",
        data: fetch,
      };
    }
  } catch (e: any) {
    const errorContext = {
      actions,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };
    departmentLogger.error("Failed to fetch main department", errorContext);
    set.status = 500;
    return {
      success: false,
      message: "Failed to fetch main department",
      error: e.message,
    };
  } finally {
    console.debug("process completed", {
      actions,
      durationMs: Date.now() - new Date().getTime(),
      remoteAddr:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
    });
  }
};
