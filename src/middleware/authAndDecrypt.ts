import { createPartLogger } from "../../utils/Logger";
import { CheckJWTAuthention } from "../services/CheckJWTService";
import { rateLimitByIp, getClientIp } from "../utils/rateLimiter";

const Logger = createPartLogger("/Role/cmuvc");

interface AuthSuccess {
  success: true;
  data?: any; // ข้อมูลผู้ใช้จาก JWT
  visitorId: string | null;
  ip: string | null;
}

interface AuthFailure {
  success: false;
  status: number;
  message: string;
}

interface AuthOnlyResult {
  success: true;
  data: any;
  ip: string | null;
}

type AuthOnly = AuthOnlyResult | AuthFailure;
type AuthResult = AuthSuccess | AuthFailure;

export const authWithRateLimit = async (
  request: Request,
  set: any,
  jwt: any,
  action: string,
): Promise<AuthResult> => {
  const clientIp = getClientIp(request) || "unknown";

  // --- Rate Limiting ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | IP=${clientIp}`);
    return {
      success: false,
      status: 429,
      message: rateLimitResult.message ?? "Rate limit exceeded",
    };
  }

  // --- Auth Header ---
  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | IP=${remoteAddr} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      status: 401,
      message: "headers not found",
    };
  }

  // --- JWT Authentication ---
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    Logger.warn(`${action} | IP=${remoteAddr} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      status: 401,
      message: "Authentication failed",
    };
  }

  return {
    success: true,
    data: authention.data,
    visitorId: null,
    ip: clientIp,
  };
};

export const authWithRateLimit_NOTJWT = async (
  request: Request,
  set: any,
  action: string,
): Promise<AuthResult> => {
  const clientIp = getClientIp(request) || "unknown";

  // --- Rate Limiting ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`IP=${clientIp} | ${action} | ${rateLimitResult.message}`);
    return {
      success: false,
      status: 429,
      message: rateLimitResult.message ?? "Rate limit exceeded",
    };
  }

  return {
    success: true,
    visitorId: null,
    ip: clientIp,
  };
};

export const authenticateOnly = async (
  request: Request,
  set: any,
  jwt: any,
  action: string,
): Promise<AuthOnly> => {
  const authToken = request.headers.get("Authorization") ?? "";
  const remoteAddr = getClientIp(request) || "unknown";
  if (!authToken) {
    Logger.error(`${action} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      status: 401,
      message: "headers not found",
    };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention || !authention.success) {
    Logger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${remoteAddr} | userId=${
        authention?.data?.firstname_EN ?? "unknown"
      } ${authention?.data?.lastname_EN ?? ""}`,
    );

    set.status = 401;
    return {
      success: false,
      status: 401,
      message: "Unauthorized",
    };
  }

  return {
    success: true,
    data: authention.data,
    ip: remoteAddr,
  };
};
