import { Context } from "elysia";
import { PrismaClient } from "../../generated/role";

const prisma = new PrismaClient();
interface ResponsePayload {
  success: boolean;
  data?: any;
  message?: string;
}

export const CheckJWTService = async (
  context: Context,
  set: any,
  jwt: any,
): Promise<ResponsePayload> => {
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
  const Title = "VERIFY";

  console.info(`[${Title}] [${requestTime}] Starting verify token`);
  try {
    const authHeader = context.headers["authorization"];

    if (!authHeader) {
      console.error(`[${Title}] [${requestTime}] Missing authorization header`);
      set.status = 400;
      return {
        success: false,
        message: "Bad Request: Missing authorization header",
      };
    }

    if (!authHeader.startsWith("Bearer ")) {
      set.status = 401;
      console.error(
        `[${Title}] [${requestTime}] Invalid token format: ${authHeader}`,
      );
      return {
        success: false,
        message: "Unauthorized: Invalid token format",
      };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      set.status = 401;
      console.error(`[${Title}] [${requestTime}] Missing token`);
      return {
        success: false,
        message: "Unauthorized: Missing token",
      };
    }

    const decodedToken = await jwt.verify(token);
    if (!decodedToken) {
      set.status = 401;
      console.error(`[${Title}] [${requestTime}] Invalid or expired token`);
      return {
        success: false,
        message: "Unauthorized: Invalid or expired token",
      };
    }

    console.info(`[${Title}] [${requestTime}] Verify token success`);
    set.status = 200;

    const userData = await prisma.user.findUnique({
      where: {
        userId: decodedToken.userId,
      },
      include: {
        UserPermission: {
          include: {
            submenu: true,
            project: true,
          },
        },
        DepartmentMembership: true,
      },
    });

    return {
      success: true,
      data: userData,
    };
  } catch (error: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in CheckJWTService:`,
      error.message,
    );
    set.status = 500;
    return { success: false, message: "Authentication failed" };
  } finally {
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(20));
  }
};

export const CheckJWTAuthention = async (
  authToken: string,
  jwt?: any,
  set?: any,
): Promise<ResponsePayload> => {
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
  const Title = "RECHECK VERIFY";

  console.info(`[${Title}] [${requestTime}] Starting recheck verify token`);
  try {
    const authHeader = authToken;

    if (!authHeader) {
      console.error(`[${Title}] [${requestTime}] Missing authorization header`);
      set.status = 400;
      return {
        success: false,
        message: "Bad Request: Missing authorization header",
      };
    }

    if (!authHeader.startsWith("Bearer ")) {
      set.status = 401;
      console.error(
        `[${Title}] [${requestTime}] Invalid token format: ${authHeader}`,
      );
      return {
        success: false,
        message: "Unauthorized: Invalid token format",
      };
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      set.status = 401;
      console.error(`[${Title}] [${requestTime}] Missing token`);
      return {
        success: false,
        message: "Unauthorized: Missing token",
      };
    }

    const decodedToken = await jwt.verify(token);
    if (!decodedToken) {
      set.status = 401;
      console.error(`[${Title}] [${requestTime}] Invalid or expired token`);
      return {
        success: false,
        message: "Unauthorized: Invalid or expired token",
      };
    }
    console.info(`[${Title}] [${requestTime}] Verify token success`);
    set.status = 200;
    return {
      success: true,
      data: decodedToken,
    };
  } catch (error: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in CheckJWTService:`,
      error.message,
    );
    set.status = 500;
    return { success: false, message: "Authentication failed" };
  } finally {
    console.info(`[${Title}] [${requestTime}]process completed`);
    console.info("─".repeat(20));
  }
};

export const verifyJWTForWebSocket = async (authToken: string, jwt: any) => {
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
  const Title = "RECHECK VERIFY";

  console.info(`[${Title}] [${requestTime}] Starting recheck verify token`);

  try {
    if (!authToken) {
      console.error(`[${Title}] [${requestTime}] Missing authorization header`);
      return {
        success: false,
        message: "Bad Request: Missing authorization header",
      };
    }

    if (!authToken.startsWith("Bearer ")) {
      console.error(
        `[${Title}] [${requestTime}] Invalid token format: ${authToken}`,
      );
      return { success: false, message: "Unauthorized: Invalid token format" };
    }

    const token = authToken.split(" ")[1];
    if (!token) {
      console.error(`[${Title}] [${requestTime}] Missing token`);
      return { success: false, message: "Unauthorized: Missing token" };
    }

    const decodedToken = await jwt.verify(token);
    if (!decodedToken) {
      console.error(`[${Title}] [${requestTime}] Invalid or expired token`);
      return {
        success: false,
        message: "Unauthorized: Invalid or expired token",
      };
    }

    console.info(`[${Title}] [${requestTime}] Verify token success`);
    return { success: true, data: decodedToken };
  } catch (error: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in CheckJWTService:`,
      error.message,
    );
    return { success: false, message: "Authentication failed" };
  } finally {
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(20));
  }
};
