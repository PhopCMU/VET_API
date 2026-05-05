import { PrismaClient } from "../../../generated/360";
import { Context } from "elysia";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";
import { CheckJWTAuthention } from "../../services/CheckJWTService";
import { EncryptedPropsModel } from "../../model/360/UserModel";

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

export const fatchUserAllController = async ({
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

// ดึงข้อมูลที่เป็น ชันสูตร เท่านั้น
export const fatchUserAllBoardController = async ({
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

export const fatchUserAllBoardSanboxController = async ({
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

export const addScoreController = async ({
  body,
  set,
  request,
  jwt,
}: Context & { jwt: any; query: any; body: EncryptedPropsModel }) => {
  const Title = "360";

  console.info(`-`.repeat(80));
  console.info(`Score`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting add score multi`);

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

    if (!body.encryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Missing encrypted data in query`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = body.encryptedData;
    const decryptedData = decryptMiddleware(decodedEncryptedData);

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

    const addScore = await prisma.evaluation.createMany({
      data: Object.values(decryptedData).map((item) => ({
        accountId: item.accountId,
        topic1: parseInt(item.scores["1"]) || null,
        topic2: parseInt(item.scores["2"]) || null,
        topic3: parseInt(item.scores["3"]) || null,
        topic4: parseInt(item.scores["4"]) || null,
        topic5: parseInt(item.scores["5"]) || null,
        topic6: parseInt(item.scores["6"]) || null,
        topic7: parseInt(item.scores["7"]) || null,
        topic8: parseInt(item.scores["8"]) || null,
        topic9: parseInt(item.scores["9"]) || null,
        comment: item.comment || "",
        assessor: item.assessor || "",
      })),
    });

    if (addScore) {
      console.log(`[${Title}] [${requestTime}] Add score success `);
      set.status = 200;
      return {
        success: true,
        message: "Add score success",
      };
    }
  } catch (error: any) {
    console.error(
      `[${Title}] [${requestTime}] Add score failed: ${error.message}`,
    );
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
      message: "Add score failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};

export const addScoreController_Board = async ({
  body,
  set,
  request,
  jwt,
}: Context & { jwt: any; query: any; body: EncryptedPropsModel }) => {
  const Title = "360][Board";

  console.info(`-`.repeat(80));
  console.info(`Score Board`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting add score multi`);

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

    if (!body.encryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Missing encrypted data in query`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = body.encryptedData;
    const decryptedData = decryptMiddleware(decodedEncryptedData);

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

    const addScore = await prisma.evaluation_B.createMany({
      data: Object.values(decryptedData).map((item) => ({
        accountId: item.accountId,
        topic1: parseInt(item.scores["1"]) || null,
        topic2: parseInt(item.scores["2"]) || null,
        topic3: parseInt(item.scores["3"]) || null,
        topic4: parseInt(item.scores["4"]) || null,
        topic5: parseInt(item.scores["5"]) || null,
        topic6: parseInt(item.scores["6"]) || null,
        topic7: parseInt(item.scores["7"]) || null,
        topic8: parseInt(item.scores["8"]) || null,
        topic9: parseInt(item.scores["9"]) || null,
        topic10: parseInt(item.scores["10"]) || null,
        topic11: parseInt(item.scores["11"]) || null,
        topic12: parseInt(item.scores["12"]) || null,
        comment: item.comment || "",
        assessor: item.assessor || "",
      })),
    });

    if (addScore) {
      console.log(`[${Title}] [${requestTime}] Add score success `);
      set.status = 200;
      return {
        success: true,
        message: "Add score success",
      };
    }
  } catch (error: any) {
    console.error(
      `[${Title}] [${requestTime}] Add score failed: ${error.message}`,
    );
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
      message: "Add score failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};
