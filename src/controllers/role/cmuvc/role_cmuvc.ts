import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import { ParticipantRequstModelImage } from "../../../model/cmuvc/ParticipantModel";
import path from "path";
import { promises as fs } from "fs";
import { unlink } from "fs/promises";

const prisma = new PrismaClient();

const UPLOAD_DIR = {
  slips: path.join(process.cwd(), "uploads", "dataCmuvc", "slips"),
};

const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
// const allowedPDPAExtensions = ["pdf"];
// const allowedAbstractExtensions = ["docx"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB
// const MAX_DOCX_SIZE = 10 * 1024 * 1024; // 10 MB

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

const Title = "ADMIN DASHBOARD][CMUVC][PARTICIPANT";

export const Role_Participant_List = async ({
  query,
  jwt,
  request,
  set,
}: Context & { query: string; jwt: any; request: any; set: any }) => {
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
        `[${Title}] [${requestTime}] Missing encrypted data in query`
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
        `[${Title}] [${requestTime}] Failed to decrypt data: ${decryptedDataYear}`
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const search_participant = await prisma.participant.findMany({
      where: {
        createAt: {
          gte: new Date(`${decryptedDataYear}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedDataYear + 1}-01-01T00:00:00Z`),
        },
      },
      select: {
        participantId: true,
        themeTitleId: true,
        fname: true,
        lname: true,
        packageOneDay: true,
        payments: true,
        email: true,
        country: true,
        organization: true,
        address: true,
        subDistrict: true,
        district: true,
        province: true,
        zipCode: true,
        phone: true,
        Imagepayment: true,
        price: true,
        createAt: true,
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
          },
        },
        selectday: {
          select: {
            selectdayId: true,
            day: true,
            month: true,
            year: true,
            dayDate: true,
            createAt: true,
          },
        },
      },
      orderBy: {
        price: "desc",
      },
    });

    const search_abstract = await prisma.abstract.findMany({
      where: {
        createAt: {
          gte: new Date(`${decryptedDataYear}-01-01T00:00:00Z`),
          lt: new Date(`${decryptedDataYear + 1}-01-01T00:00:00Z`),
        },
      },
      orderBy: {
        price: "desc",
      },
    });

    if (!search_participant || !search_abstract) {
      set.status = 404;
      console.error(
        `[${Title}] [${requestTime}]  Fetch Participant Not Data found`
      );
      return {
        success: false,
        message: "No data found",
      };
    }

    console.info(
      `[${Title}] [${requestTime}]  Fetch ParticipantList successfully`
    );
    set.status = 200;
    return {
      success: true,
      message: "Fetch ParticipantList successfully",
      result: {
        search_participant,
        search_abstract,
      },
    };
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in ParticipantList_All: ${e.message}\nStack: ${e.stack}`
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] [${requestTime}]  process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Participant_And_Abstract_Update_Image = async ({
  body,
  jwt,
  request,
  set,
}: Context & {
  body: ParticipantRequstModelImage;
  jwt: any;
  request: any;
  set: any;
}) => {
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
        `[${Title}] [${requestTime}] Missing encrypted data in query`
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = decodeURIComponent(body.encryptedData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Failed to decrypt data: ${decryptedData}`
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const main_id = decryptedData.participantId || decryptedData.abstractId;
    const main_type = decryptedData.type;
    const { Imagepayment } = body;

    let searchData: string | any = "";

    if (main_type === "participant") {
      searchData = await prisma.participant.findUnique({
        where: {
          participantId: main_id,
          Imagepayment: { not: "" },
        },
      });
    }

    if (main_type === "abstract") {
      searchData = await prisma.abstract.findUnique({
        where: {
          abstractId: main_id,
          Imagepayment: { not: "" },
        },
      });
    }

    if (!searchData) {
      set.status = 404;
      console.error(
        `[${Title}] [${requestTime}]  Update ${
          main_type === "participant" ? "Participant" : "Abstract"
        } Not Data found`
      );
      return {
        success: false,
        message: `${
          main_type === "participant" ? "Participant" : "Abstract"
        } not found`,
      };
    }

    if (!Imagepayment) {
      set.status = 400;
      console.error(
        `[${Title}] [${requestTime}]  Missing Imagepayment in request`
      );
      return {
        success: false,
        message: "Missing Imagepayment in request",
      };
    }

    let newFileImage: string | null = null;

    if (Imagepayment) {
      const imageExt = Imagepayment.name.split(".").pop()?.toLowerCase();
      if (!imageExt || !allowedImageExtensions.includes(imageExt)) {
        set.status = 400;
        console.error(
          `[${Title}] [${requestTime}]  Invalid Image extension: ${imageExt}`
        );
        return {
          success: false,
          message: "Invalid Image extension",
        };
      }

      const imageSize = Buffer.byteLength(await Imagepayment.arrayBuffer());
      if (imageSize > MAX_IMAGE_SIZE) {
        set.status = 400;
        console.error(
          `[${Title}] [${requestTime}]  Image size exceeds the limit: ${imageSize}`
        );
        return {
          success: false,
          message: "Image size exceeds the limit",
        };
      }

      const sanitizedFname = searchData.fname.replace(/\s+/g, "-");
      newFileImage = `${sanitizedFname}-${Date.now()}-price(${
        searchData.price
      }).${imageExt}`;
    }

    const deletionPromises = [];

    if (searchData.Imagepayment && Imagepayment) {
      const oldFilePath = path.join(UPLOAD_DIR.slips, searchData.Imagepayment);
      deletionPromises.push(
        unlink(oldFilePath).catch((err) => {
          console.error(
            `[${Title}] [${requestTime}]  Error deleting old file: ${err.message}`
          );
        })
      );
    }

    await Promise.all(deletionPromises);

    const updateData: {
      Imagepayment?: string;
    } = {};

    if (newFileImage) {
      updateData.Imagepayment = newFileImage;
    }

    let updateImagePayment;

    if (main_type === "participant") {
      updateImagePayment = await prisma.participant.update({
        where: {
          participantId: main_id,
        },
        data: updateData,
      });
    }

    if (main_type === "abstract") {
      updateImagePayment = await prisma.abstract.update({
        where: {
          abstractId: main_id,
        },
        data: updateData,
      });
    }

    const writePromises = [];

    if (Imagepayment && newFileImage) {
      const ImageBuffer = Buffer.from(await Imagepayment.arrayBuffer());
      const ImagePath = path.join(UPLOAD_DIR.slips, newFileImage);
      writePromises.push(
        fs.writeFile(ImagePath, ImageBuffer).catch((err) => {
          console.error(
            `[${Title}] [${requestTime}]  Error writing Image file: ${err.message}`
          );
        })
      );
    }

    await Promise.all(writePromises);

    if (updateImagePayment) {
      console.info(
        `[${Title}] [${requestTime}]  UPDATE ${
          main_type === "participant" ? "PARTICIPANT" : "ABSTRACT"
        } SUCCESSFUL`
      );
      set.status = 200;
      return {
        success: true,
        message: `Update Image payment ${
          main_type === "participant" ? "participant" : "abstract"
        }  successfully`,
      };
    }
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in Update Image payment: ${e.message}\nStack: ${e.stack}`
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] [${requestTime}]  process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Participant_And_Abstract_Status = async ({
  query,
  jwt,
  request,
  set,
}: Context & {
  query: ParticipantRequstModelImage;
  jwt: any;
  request: any;
  set: any;
}) => {
  console.info(`-`.repeat(80));
  console.info(`Payment Slip Verification List`);
  console.info(`-`.repeat(80));

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] [${requestTime}] AUTH_FAILED `);
      set.status = 401;
    }

    if (!query.paymentData) {
      console.error(
        `[${Title}] [${requestTime}] Missing encrypted data in query`
      );
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.paymentData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(
        `[${Title}] [${requestTime}] Failed to decrypt data: ${decryptedData}`
      );
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const main_id = decryptedData.id;
    const main_type = decryptedData.type;

    let searchData: string | any = "";

    if (main_type === "participant") {
      searchData = await prisma.participant.findUnique({
        where: {
          participantId: main_id,
          payments: false,
        },
      });
    }

    if (main_type === "abstract") {
      searchData = await prisma.abstract.findUnique({
        where: {
          abstractId: main_id,
          payments: false,
        },
      });
    }

    if (!searchData) {
      set.status = 404;
      console.error(
        `[${Title}] [${requestTime}]  Update ${
          main_type === "participant" ? "Participant" : "Abstract"
        } Not Data found`
      );
      return {
        success: false,
        message: `${
          main_type === "participant" ? "Participant" : "Abstract"
        } not found`,
      };
    }

    let updateStatusPayment;

    if (main_type === "participant") {
      updateStatusPayment = await prisma.participant.update({
        where: {
          participantId: main_id,
        },
        data: {
          payments: true,
        },
      });
    }

    if (main_type === "abstract") {
      updateStatusPayment = await prisma.abstract.update({
        where: {
          abstractId: main_id,
        },
        data: {
          payments: true,
        },
      });
    }

    if (updateStatusPayment) {
      console.info(
        `[${Title}] [${requestTime}]  UPDATE ${
          main_type === "participant" ? "PARTICIPANT" : "ABSTRACT"
        } SUCCESSFUL`
      );
      set.status = 200;
      return {
        success: true,
        message: `Update Status payment ${
          main_type === "participant" ? "participant" : "abstract"
        }  successfully`,
      };
    }
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in Update Image payment: ${e.message}\nStack: ${e.stack}`
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}]  process completed`);
    console.info("─".repeat(80));
  }
};
