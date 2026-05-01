import { Context } from "elysia";
import { PrismaClient } from "../../../generated/vetrun";
import { createPartLogger } from "../../../utils/Logger";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";
import { SaleShirtsCreateProp } from "../../model/vetrun/vetrunModel";
import path from "path";
import { randomUUIDv7 } from "bun";
import { promises as fs } from "fs";
import { sendTelegramNotificationVetRun } from "../../services/TelegramBot";
import { rateLimitByIp, getClientIp } from "../../utils/rateLimiter";

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

const Logger = createPartLogger("/Vetrun");
const UPLOAD_DIR = {
  slips: path.join(process.cwd(), "uploads", "dataVetRun", "paymentShirt"),
};
const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

export const ShritContorller = async (set: any) => {
  const Title = "ShritContorller";
  console.info(`-`.repeat(80));
  console.info(`${requestTime} ${Title}`);
  console.info(`-`.repeat(80));
  try {
    const results = await prisma.size_shirt.findMany({
      orderBy: {
        point: "asc",
      },
    });

    if (results) {
      console.info(`${requestTime} ${Title} ${(await results).length}`);
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

export const SaleShirtContorller = async ({
  body,
  set,
}: Context & { body: SaleShirtsCreateProp; set: any }) => {
  const action = "CREATE_ORDER_SALE_SHIRT";

  if (!body.encryptedData) {
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

  const transferFile = body.transferFile;

  if (!transferFile) {
    Logger.error(`${action} | FILE_NOT_FOUND`);
    set.status = 404;
    return {
      success: false,
      message: "file not found",
    };
  }

  const imageExtParticipant = transferFile.name.split(".").pop()?.toLowerCase();
  const imageBufferParticipant = Buffer.from(await transferFile.arrayBuffer());

  if (
    !imageExtParticipant ||
    !allowedImageExtensions.includes(imageExtParticipant)
  ) {
    Logger.error(`${action} | INVALID_FILE_EXTENSION`);
    set.status = 400;
    return {
      success: false,
      message: "Invalid file extension",
    };
  }

  if (imageBufferParticipant.byteLength > MAX_IMAGE_SIZE) {
    Logger.error(`${action} | FILE_SIZE_TOO_LARGE`);
    set.status = 400;
    return {
      success: false,
      message: "File size too large",
    };
  }

  const sanitizedFileName = randomUUIDv7();
  const newFileName = `${sanitizedFileName}.${imageExtParticipant}`;

  if (!newFileName) {
    Logger.error(`${action} | INVALID_FILE_NAME`);
    set.status = 400;
    return {
      success: false,
      message: "Invalid file name",
    };
  }

  try {
    // แปลง orderItems จาก string เป็น object
    let orderItems;
    try {
      orderItems = JSON.parse(decryptedData.orderItems);
    } catch (err) {
      console.error(`${action} | INVALID_ORDER_ITEMS_JSON`);
      set.status = 400;
      return {
        success: false,
        message: "Invalid order items format",
      };
    }

    let orderItemsForPrisma;
    if (Array.isArray(orderItems)) {
      orderItemsForPrisma = {
        create: orderItems.map((item: any) => ({
          shirtmodelId: item.shirtModelId,
          sizeId: item.sizeId,
        })),
      };
    } else if (orderItems.create) {
      orderItemsForPrisma = {
        create: orderItems.create.map((item: any) => ({
          shirtmodelId: item.shirtModelId,
          sizeId: item.sizeId,
        })),
      };
    } else {
      Logger.error(`${action} | INVALID_ORDER_ITEMS_FORMAT`);
      set.status = 400;
      return {
        success: false,
        message: "Invalid order items format",
      };
    }

    // console.debug({
    //   orderItems: orderItems,
    //   decryptedData: decryptedData,
    // });

    const order = await prisma.userSaleShirt.create({
      data: {
        fullname: decryptedData.fullName,
        email: decryptedData.email,
        phone: decryptedData.phone,
        delivery_address: decryptedData.address || "",
        OrderItem: orderItemsForPrisma,
        transferFile: newFileName,
        total_amount: parseInt(decryptedData.total_amount),
        sh_collection_method: decryptedData.sh_collection_method || "pickup",
      },
    });

    if (!order) {
      Logger.error(`${action} | ORDER_CREATION_FAILED`);
      set.status = 500;
      return {
        success: false,
        message: "Order creation failed",
      };
    }

    const payload = {
      ...order,
      quantity: decryptedData.quantity,
    };

    if (order) {
      await sendTelegramNotificationVetRun(
        payload,
        imageBufferParticipant,
        set,
      );
      const writeFilePromises = await Promise.all([
        fs.writeFile(
          path.join(UPLOAD_DIR.slips, newFileName),
          imageBufferParticipant,
        ),
      ]);

      if (!writeFilePromises) {
        Logger.error(`${action} | FILE_WRITE_FAILED`);
        set.status = 500;
        return {
          success: false,
          message: "File write failed",
        };
      }

      Logger.info(`${action} | ORDER_CREATED_SUCCESSFULLY`);

      set.status = 200;
      return {
        success: true,
        message: "Order created successfully",
      };
    }
  } catch (error: any) {
    Logger.error(`${action}  ${error.message}`);
    Logger.error(`${action} | ORDER_CREATION_FAILED`);
    set.status = 500;
    return {
      success: false,
      message: "Order creation failed",
    };
  } finally {
    await prisma.$disconnect();
    console.debug("Exit complete");
  }
};

export const CheckTrackingController = async ({
  request,
  set,
}: Context & { request: any; set: any }) => {
  const action = "CHECK_TRACKING";
  const clientIp = getClientIp(request) || "unknown";

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

  try {
    const res = await prisma.userSaleShirt.findMany({
      select: {
        email: true,
        fullname: true,
        payment: true,
        phone: true,
        ems_tracking: true,
        sh_collection_method: true,
        createdAt: true,
        OrderItem: {
          select: {
            orderId: true,
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    if (res) {
      // ฟังก์ชันช่วย mask ข้อมูล
      const maskPhone = (phone: string): string => {
        if (!phone) return "N/A";
        const len = phone.length;
        return phone.slice(0, 4) + "xxx" + phone.slice(len - 3);
      };

      const maskFullname = (fullname: string): string => {
        if (!fullname) return "N/A";
        return fullname
          .split(" ")
          .map((name) => {
            if (name.length <= 3) return name;
            return name.slice(0, 3) + "xxxx";
          })
          .join(" ");
      };

      const maskEmail = (email: string): string => {
        if (!email) return "N/A";
        const [local, domain] = email.split("@");
        if (!domain) return "N/A";

        const maskedLocal =
          local.length > 7 ? local.slice(0, 7) + "xxx" : local;
        const [domainName, ...topLevels] = domain.split(".");
        const maskedDomain = domainName.length > 3 ? "xxx" : domainName;

        return `${maskedLocal}@${maskedDomain}.${topLevels.join(".")}`;
      };

      // Map ข้อมูลและ mask ข้อมูลส่วนตัว
      const maskedData = res.map((item) => ({
        email: maskEmail(item.email),
        fullname: maskFullname(item.fullname),
        phone: maskPhone(item.phone),
        payment: item.payment,
        ems_tracking: item.ems_tracking,
        sh_collection_method: item.sh_collection_method,
        createdAt: item.createdAt,
        orderItemCount: item.OrderItem.length, // ตั้งชื่อใหม่ให้อ่านง่าย
      }));

      set.status = 200;
      return {
        success: true,
        message: "Orders fetched successfully",
        data: maskedData,
      };
    }
  } catch (error: any) {
    Logger.error(`${action}  ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Order fetch failed",
    };
  } finally {
    await prisma.$disconnect();
    console.debug("Exit complete");
  }
};
