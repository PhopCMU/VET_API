import axios from "axios";
import { Context } from "elysia";
import { AuthenticationProps } from "../../model/role/AuthenticationModel";
import * as qs from "qs";
import { createPartLogger } from "../../../utils/Logger";

const authenLogger = createPartLogger("/Role/authen");

export const AuthenticationController = async ({
  body,
  set,
}: Context & { body: AuthenticationProps }) => {
  const action = "AUTHENTICATION_DASHBOARD";

  try {
    const { code } = body;

    if (!code) {
      authenLogger.error(`[${action}]  Missing code in request`);
      set.status = 400;
      return {
        success: false,
        messsage: "Code is required",
      };
    }

    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URL;
    const tokenUrl = process.env.TOKEN_URL ?? "";
    const scope = process.env.SCOPE;

    if (!clientId || !clientSecret || !redirectUri || !tokenUrl || !scope) {
      set.status = 400;
      authenLogger.error(
        `[${action}]  Missing required environment variable(s) for authentication`
      );
    }

    const options = {
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
      scope: scope,
    };

    const response = await axios.post(tokenUrl, qs.stringify(options), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const accessToken = response.data.access_token;
    if (!accessToken) {
      authenLogger.error(`[${action}]  No access token found in the response.`);
    }

    authenLogger.info(`[${action}]  Authentication successful.`);
    set.status = 200;
    return accessToken;
  } catch (e: any) {
    const errorContext = {
      action,

      stack: e.stack,
      ...(e.response && { response: e.response }),
    };
    set.status = 500;

    authenLogger.error(`[${action}]  Authentication failed`, {
      errorContext,
    });

    return { success: false, message: "Authentication failed" };
  } finally {
    console.debug("process completed", {
      action,
      durationMs: Date.now() - new Date().getTime(),
    });
  }
};

export const Authentication360Controller = async ({
  body,
  set,
}: Context & { body: AuthenticationProps }) => {
  const action = "AUTHENTICATION_360";

  try {
    const { code } = body;

    if (!code) {
      authenLogger.error(`[${action}]  Missing code in request`);
      set.status = 400;
      return {
        success: false,
        messsage: "Code is required",
      };
    }

    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_360_URL;
    const tokenUrl = process.env.TOKEN_URL ?? "";
    const scope = process.env.SCOPE;

    if (!clientId || !clientSecret || !redirectUri || !tokenUrl || !scope) {
      set.status = 400;
      authenLogger.error(
        `[${action}]  Missing required environment variable(s) for authentication`
      );
    }

    const options = {
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
      scope: scope,
    };

    const response = await axios.post(tokenUrl, qs.stringify(options), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const accessToken = response.data.access_token;
    if (!accessToken) {
      authenLogger.error(`[${action}]  No access token found in the response.`);
    }

    authenLogger.info(`[${action}]  Authentication successful.`);
    set.status = 200;
    return accessToken;
  } catch (e: any) {
    const errorContext = {
      action,

      stack: e.stack,
      ...(e.response && { response: e.response }),
    };
    set.status = 500;

    authenLogger.error(`[${action}]  Authentication failed`, {
      errorContext,
    });

    return { success: false, message: "Authentication failed" };
  } finally {
    console.debug("process completed", {
      action,
      durationMs: Date.now() - new Date().getTime(),
    });
  }
};

export const fetchCMUPersonalInfo = async () => {
  try {
    const clientId = process.env.PERSONAL_CLIENT_ID;
    const clientSecret = process.env.PERSONAL_CLIENT_SECRET;
    const tokenUrl = process.env.PERSONAL_TOKEN_URL;
    const scope = process.env.PERSONAL_SCOPE;
    const apiUrl = process.env.PERSONAL_API;

    if (!clientId || !clientSecret || !tokenUrl || !scope || !apiUrl) {
      throw new Error("Missing required environment variables");
    }

    // ⚠️ ตรวจสอบ scope สำหรับ client_credentials flow
    if (!scope.endsWith("/.default")) {
      console.warn(
        `[WARNING] Scope should end with '/.default'. Current: ${scope}`
      );
      // ถ้าต้องการแก้ไขอัตโนมัติ:
      // scope = scope.endsWith('/') ? `${scope}.default` : `${scope}/.default`;
    }

    // 📥 1. ขอ Access Token
    const tokenResponse = await axios.post(
      tokenUrl,
      qs.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
        scope: scope,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        timeout: 10000,
      }
    );

    const accessToken = tokenResponse.data.access_token;

    if (!accessToken) {
      throw new Error("No access token received");
    }

    // 📤 2. เรียก API จริง
    const apiResponse = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    return [
      tokenResponse.data, // ข้อมูล token
      apiResponse.data, // ข้อมูลจาก API
    ];
  } catch (error: any) {
    console.error("[ERROR]", error.message);
    return [
      { error: error.message, details: error.response?.data },
      { error: "API call failed" },
    ];
  }
};
