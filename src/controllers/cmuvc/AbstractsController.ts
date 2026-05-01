import { Context } from "elysia";
import {
  AbstractCreateProps,
  AbstractFetchDataProps,
  AbstractTypeImageProps,
} from "../../model/cmuvc/AbstractModel";
import { promises as fs } from "fs";
import path from "path";
import { PrismaClient } from "../../../generated/cmuvc";
import { getClientIp } from "../../utils/rateLimiter";
import { EmailService } from "../../services/EmailSmtp";
import { ADMIN_EMAILS } from "../../contacts";
import { sendTelegramNotification } from "../../services/TelegramBot";
const prisma = new PrismaClient();

export const AbstractsController_AbstractType = async ({
  set,
}: {
  set: { status: number };
}) => {
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

  const Title = "CMUVC";

  console.info(`-`.repeat(80));
  console.info(`Abstract Type`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting to fetch abstract types`);

  try {
    const response = await prisma.abstractType.findMany({
      orderBy: {
        createAt: "asc",
      },
    });

    console.info(
      `[${Title}] [${requestTime}] Successfully fetched ${response.length} abstract types`,
    );
    set.status = 200;
    return response;
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error fetching abstract types - ` +
        `Message: ${e.message} | ` +
        `Stack: ${e.stack?.split("\n")[0]}...`, // Only show first line of stack trace
    );
    return {
      success: false,
      message: "Failed to fetch abstract types",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}]  process completed`);
    console.info("─".repeat(80));
  }
};

export const AbstractsController = async ({
  body,
  set,
  request,
}: Context & { body: AbstractCreateProps }) => {
  // Get client IP address
  const clientIp = getClientIp(request) || "unknown";

  // Create timestamp
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

  console.info(
    `[${requestTime}] [IP: ${clientIp}] Received submission - ` +
      `Email: ${body.email} | Title: ${body.titleAbstarct}`,
  );
  try {
    const {
      abstractTypeId,
      categoryId,
      packagesId,
      ce,
      prefix,
      fname,
      lname,
      phone,
      email,
      organization,
      country,
      address,
      subDistrict,
      district,
      province,
      zipCode,
      foodId,
      acc,
      titleAbstarct,
      fileAbstarct,
      payments,
    } = body;

    console.info(
      `[${requestTime}] [IP: ${clientIp}] Validating input - ` +
        `Email: ${email} | AbstractType: ${abstractTypeId} | Category: ${categoryId}`,
    );

    const parsedAcc = typeof acc === "string" ? acc === "true" : (acc ?? false);
    const parsedPayments =
      typeof payments === "string" ? payments === "true" : (payments ?? false);

    const [existingEmail, abstractType, category, packageData, food] =
      await Promise.all([
        prisma.abstract.findUnique({ where: { email } }),
        prisma.abstractType.findUnique({ where: { abstractTypeId } }),
        prisma.categorys.findUnique({ where: { categoryId } }),
        prisma.packages.findUnique({ where: { packageId: packagesId } }),
        prisma.foods.findUnique({ where: { foodId } }),
      ]);

    if (isNaN(packageData?.earlyBird ?? 0)) {
      console.error(`Invalid price for packageId: ${packagesId}`);
      set.status = 400;
      return { success: false, message: "price The number must be valid." };
    }

    if (existingEmail) {
      console.warn(
        `[${requestTime}] [IP: ${clientIp}] Duplicate email - ` +
          `Email: ${email} already exists`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Email already registered.",
      };
    }
    if (!abstractType) {
      console.error(`Invalid abstractTypeId: ${abstractTypeId}`);
      set.status = 400;
      return {
        success: false,
        message: "abstractTypeId Invalid or not found in the system.",
      };
    }
    if (!category) {
      console.error(`Invalid categoryId: ${categoryId}`);
      set.status = 400;
      return {
        success: false,
        message: "categoryId Invalid or not found in the system.",
      };
    }
    if (!packageData) {
      console.error(`Invalid packageId: ${packagesId}`);
      set.status = 400;
      return {
        success: false,
        message: "packagesId Invalid or not found in the system.",
      };
    }
    if (!food) {
      console.error(`Invalid foodId: ${foodId}`);
      set.status = 400;
      return {
        success: false,
        message: "foodId Invalid or not found in the system.",
      };
    }

    // กำหนด docFileName
    const docExt = fileAbstarct.name.split(".").pop(); // ดึงนามสกุลไฟล์
    const sanitizedFname = fname.replace(/\s+/g, "_"); // แทนที่ช่องว่างใน fname ด้วย _
    const sanitizedTitle = titleAbstarct.replace(/\s+/g, "_"); // แทนที่ช่องว่างใน titleAbstarct ด้วย _
    const docFileName = `${sanitizedFname}-${sanitizedTitle}-${Date.now()}.${docExt}`; // สร้างชื่อไฟล์
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Generated filename - ` +
        `Original: ${fileAbstarct.name} | New: ${docFileName}`,
    );

    const response = await prisma.abstract.create({
      data: {
        abstractTypeId,
        categoryId,
        packagesId,
        price: packageData.earlyBird ?? 0,
        ce,
        prefix,
        fname,
        lname,
        phone,
        email,
        organization,
        country,
        address,
        subDistrict,
        district,
        province,
        zipCode,
        foodId,
        acc: parsedAcc,
        titleAbstarct,
        fileAbstarct: docFileName,
        payments: parsedPayments,
      },
    });
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Abstract created - ` +
        `ID: ${response.abstractId} | Name: ${fname} ${lname} | Email: ${email}`,
    );

    const emailData = {
      recipients: ADMIN_EMAILS,
      subject: "New Abstract Submission Received",
      abstractData: {
        prefix,
        fname,
        lname,
        titleAbstarct,
        email,
        organization,
        submissionDate: new Date().toLocaleDateString(),
        categoryId,
        packagesId,
        abstractTypeId,
        fileName: docFileName, // ใช้ docFileName ที่กำหนดแล้ว
      },
    };

    const emailResult = await EmailService.sendEmail(emailData);
    console.info(
      `[${requestTime}] [IP: ${clientIp}] Email notification - ` +
        `Status: ${emailResult.status} | ${emailResult.messageId || ""}`,
    );

    if (emailResult.status === "error") {
      console.error(`Email notification failed: ${emailResult.error}`);
    } else {
      console.info(
        `Admin notification sent successfully: ${emailResult.messageId}`,
      );
    }

    const uploadDirAbstracts = path.join(
      process.cwd(),
      "uploads/dataCmuvc/abstracts",
    );
    await fs.mkdir(uploadDirAbstracts, { recursive: true });
    const docPath = path.join(uploadDirAbstracts, docFileName);
    await fs.writeFile(docPath, Buffer.from(await fileAbstarct.arrayBuffer()));
    console.info(
      `[${requestTime}] [IP: ${clientIp}] File saved - ` +
        `Path: ${docPath} | Size: ${fileAbstarct.size} bytes`,
    );

    set.status = 201;
    return {
      success: true,
      message: "Submission processed successfully",
      data: response,
      emailStatus: emailResult.status,
    };
  } catch (e: any) {
    console.error(
      `[${requestTime}] ` +
        `[IP: ${clientIp}] Error in submission - ` +
        `Message: ${e.message} | Stack: ${e.stack?.substring(0, 200)}...`,
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred while saving the data.",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(
      `[${requestTime}] ` + `[IP: ${clientIp}] Database connection closed`,
    );
  }
};

export const UpdateAbstractController = async ({
  body,
  set,
}: Context & { body: AbstractTypeImageProps }) => {
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
  const Title = "CMUVC";

  console.info(`-`.repeat(80));
  console.info(`Update Image Payment Abstract`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting Update ParticipantList`);
  try {
    const { abstractId, Imagepayment } = body;

    console.info(
      `[${Title}] [${requestTime}] Validating file for abstractId: ${abstractId}`,
    );

    const allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
    const imageExt = Imagepayment.name.split(".").pop()?.toLowerCase();
    const maxFileSize = 100 * 1024 * 1024; // 100MB

    if (!imageExt || !allowedExtensions.includes(imageExt)) {
      console.error(
        `[${Title}] [${requestTime}] Invalid file extension: ${imageExt}`,
      );
      set.status = 400;
      return {
        success: false,
        message: "Invalid file type. Only jpg, jpeg, png, pdf are supported.",
      };
    }

    const imageBuffer = Buffer.from(await Imagepayment.arrayBuffer());
    if (imageBuffer.length > maxFileSize) {
      console.error(
        `[${Title}] [${requestTime}] File too large: ${(
          imageBuffer.length /
          (1024 * 1024)
        ).toFixed(2)}MB`,
      );
      set.status = 400;
      return {
        success: false,
        message: "The file size is too large, maximum 100MB only.",
      };
    }

    console.info(
      `[${Title}] [${requestTime}] Fetching abstract data: ${abstractId}`,
    );
    const [abstractData] = await Promise.all([
      prisma.abstract.findUnique({ where: { abstractId } }),
    ]);

    if (!abstractData) {
      console.error(
        `[${Title}] [${requestTime}] Abstract not found: ${abstractId}`,
      );
      set.status = 400;
      return {
        success: false,
        message: "abstractId Incorrect or not in the system",
      };
    }

    if (abstractData.Imagepayment == null || abstractData.Imagepayment == "") {
      const imageFileName = `${abstractData.fname}-${Date.now()}-price(${
        abstractData.price || "free"
      }).${imageExt}`;
      console.info(
        `[${Title}] [${requestTime}] Generated filename: ${imageFileName}`,
      );

      console.info(`-`.repeat(80));
      console.info(`Sending Telegram notification`);
      console.info(`-`.repeat(80));
      console.info(
        `[${Title}] [${requestTime}] Sending Telegram notification for participantId: ${abstractId}`,
      );

      await sendTelegramNotification(abstractData, imageBuffer, imageFileName);

      // เตรียม path และสร้าง folder หลังส่ง Telegram
      const uploadDirSlips = path.join(
        process.cwd(),
        "uploads/dataCmuvc/slips",
      );
      await fs.mkdir(uploadDirSlips, { recursive: true });
      const imagePath = path.join(uploadDirSlips, imageFileName);

      // เขียนไฟล์ลง disk หลังส่ง Telegram
      await fs.writeFile(imagePath, imageBuffer);
      console.info(`[${Title}] [${requestTime}] File saved to: ${imagePath}`);

      // อัพเดทข้อมูลใน database
      console.info(`[${Title}] [${requestTime}] Updating database record`);
      const response = await prisma.abstract.update({
        where: {
          abstractId: abstractData.abstractId,
        },
        data: {
          Imagepayment: imageFileName,
        },
      });

      console.info(
        `[${Title}] [${requestTime}] Update successful for: ${abstractId}`,
      );
      set.status = 200;
      return {
        success: true,
        message: "Data update successful",
        data: response,
      };
    } else {
      console.warn(
        `[${Title}] [${requestTime}] Payment image already exists for abstractId: ${abstractId}`,
      );
      set.status = 400;
      return {
        success: false,
        message:
          "Unable to update, possibly because payment image already exists or information not found.",
      };
    }
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in UpdateAbstractController: ${e.message}\nStack: ${e.stack}`,
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

export const AbstractsController_fetchData = async ({
  query,
  set,
}: Context & { query: AbstractFetchDataProps }) => {
  // Create timestamp
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

  const Title = "CMUVC";

  console.info(`-`.repeat(80));
  console.info(`Check Abstract`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting Check Abstract`);

  try {
    console.info(
      `[${Title}] [${requestTime}] Fetching abstract data for email: ${query.email}`,
    );
    const response = await prisma.abstract.findFirst({
      where: {
        email: query.email,
      },
      select: {
        abstractId: true,
        fname: true,
        lname: true,
        email: true,
        phone: true,
        address: true,
        abstractType: {
          select: {
            abstractTypeId: true,
            adstractType: true,
          },
        },
        categorys: {
          select: {
            categoryId: true,
            categoryType: true,
          },
        },
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
            people: true,
          },
        },
        foods: {
          select: {
            foodId: true,
            foodType: true,
          },
        },
        titleAbstarct: true,
        fileAbstarct: true,
        statusAbstract: true,
        price: true,
        acc: true,
        payments: true,
        Imagepayment: true,
        createAt: true,
      },
    });

    if (!response) {
      console.warn(
        `[${Title}] [${requestTime}] No data found for email: ${query.email}`,
      );
      set.status = 404;
      return {
        message: "No data found for this email.",
        success: false,
        result: null,
      };
    }

    // Successful fetch log with all required details
    console.info(
      `[${Title}] [${requestTime}] Successfully fetched data Abstract`,
    );
    console.info(
      `[${Title}] [${requestTime}] AbstractID: ${response.abstractId}`,
    );
    console.info(
      `[${Title}] [${requestTime}] Name: ${response.fname} ${response.lname}`,
    );
    console.info(`[${Title}] [${requestTime}] Email: ${response.email}`);

    set.status = 200;
    return {
      success: true,
      message: "Success",
      result: response,
    };
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in AbstractsController_fetchData - 
      Email: ${query.email} | 
      Error: ${e.message} | 
      Stack: ${e.stack}`,
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
