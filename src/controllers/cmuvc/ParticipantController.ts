import { Context } from "elysia";
import { ParticipantCreateProps } from "../../model/cmuvc/ParticipantModel";
import { promises as fs } from "fs";
import path from "path";
import { PrismaClient } from "../../../generated/cmuvc";
import {
  sendTelegramNotificationParticipant,
  sendTelegramNotificationParticipantPre,
} from "../../services/TelegramBot";

// importconsole from "../../utils/logger";

const prisma = new PrismaClient();

export const ParticipantController = async ({
  body,
  set,
}: Context & {
  body: ParticipantCreateProps;
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

  console.info(
    `[${Title}] [${requestTime}]  Received request with email: ${body.email}`
  );
  try {
    const {
      themeTitleId,
      categoryId,
      packagesId,
      packageOneDay,
      selectdayId,
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
      Imagepayment,
      payments,
    } = body;

    let parsedPrice;
    let message;
    let rate;

    const parsedAcc = typeof acc === "string" ? acc === "true" : acc ?? false;
    const parsedPayments =
      typeof payments === "string" ? payments === "true" : payments ?? false;

    if (isNaN(parsedPrice ?? 0)) {
      set.status = 400;
      return { success: false, message: "price ต้องเป็นตัวเลขที่ถูกต้อง" };
    }
    // ตรวจสอบข้อมูลในฐานข้อมูล

    console.info(
      `[${Title}] [${requestTime}]  Validating input for email: ${email}`
    );
    const [existingEmail, category, packageData, food] = await Promise.all([
      prisma.participant.findFirst({
        where: {
          email: email,
          themeTitleId: themeTitleId,
        },
      }),
      prisma.categorys.findUnique({ where: { categoryId } }),
      prisma.packages.findUnique({ where: { packageId: packagesId } }),
      prisma.foods.findUnique({ where: { foodId } }),
    ]);

    if (existingEmail) {
      console.warn(
        `[${Title}] [${requestTime}]  Duplicate email detected: ${email} for [P-ID]: ${existingEmail.participantId}`
      );
      set.status = 400;
      return {
        success: false,
        message: "This email is already in the system.",
      };
    }
    if (!category) {
      console.error(
        `[${Title}] [${requestTime}]  Invalid categoryId: ${categoryId}`
      );
      set.status = 400;
      return {
        success: false,
        message: "categoryId Incorrect or not in the system",
      };
    }
    if (!packageData) {
      console.error(
        `[${Title}] [${requestTime}]  Invalid packageId: ${packagesId}`
      );
      set.status = 400;
      return {
        success: false,
        message: "packagesId Incorrect or not in the system",
      };
    }
    if (!food) {
      console.error(`[${Title}] [${requestTime}]  Invalid foodId: ${foodId}`);
      set.status = 400;
      return {
        success: false,
        message: "foodId Incorrect or not in the system",
      };
    }

    // ได้วันที่ปัจจุบัน
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0); // รีเซ็ตเวลาเป็น 00:00:00

    // กำหนดวันที่สิ้นสุด
    const earlyBirdDate = packageData.endEarlyBird ?? ""; // fallback ถ้า null
    const regularRateDate = packageData.endRegularRate ?? "";

    const cutoffDateEarlyBird = new Date(earlyBirdDate);
    const cutoffDateRegularRate = new Date(regularRateDate);

    // รีเซ็ตเวลาใน UTC
    cutoffDateEarlyBird.setUTCHours(0, 0, 0, 0);
    cutoffDateRegularRate.setUTCHours(0, 0, 0, 0);

    if (packageData.themeTitleId === "522b5662-ebc8-45b7-bfaa-350d8fff66a4") {
      if (packageOneDay === "1") {
        console.info(`-`.repeat(80));
        console.info(`Main conference`);
        console.info(`-`.repeat(80));
        console.info(
          `[${Title}] [${requestTime}]  Processing one-day package for email: ${email}`
        );
        const allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
        const imageExt = Imagepayment.name.split(".").pop()?.toLowerCase();
        const maxFileSize = 100 * 1024 * 1024; // 100MB

        if (!imageExt || !allowedExtensions.includes(imageExt)) {
          console.error(
            `[${Title}] [${requestTime}] Invalid file extension: ${imageExt} for email: ${email}`
          );
          set.status = 400;
          return {
            success: false,
            message:
              "Invalid file type. Only jpg, jpeg, png, pdf are supported.",
          };
        }

        const imageBuffer = Buffer.from(await Imagepayment.arrayBuffer());
        if (imageBuffer.length > maxFileSize) {
          console.error(
            `[${Title}] [${requestTime}] File size too large: ${imageBuffer.length} bytes for email: ${email}`
          );
          set.status = 400;
          return {
            success: false,
            message: "The file size is too large, maximum 100MB only.",
          };
        }

        const sanitizedFname = fname.replace(/\s+/g, "_");
        const sanitizedLname = lname.replace(/\s+/g, "_");
        const imageFileName = `${sanitizedFname}-${sanitizedLname}-${Date.now()}-price(${parsedPrice}).${imageExt}`;
        console.info(
          `[${Title}] [${requestTime}] Generated file name: ${imageFileName}`
        );
        // บันทึกข้อมูล
        const participant = await prisma.participant.create({
          data: {
            themeTitleId,
            categoryId,
            packagesId,
            price: packageData.oneDayParticipant ?? 0,
            ce: ce || "0",
            selectdayId,
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
            Imagepayment: imageFileName,
            packageOneDay: "1",
            payments: parsedPayments,
          },
        });
        console.info(
          `[${Title}] [${requestTime}] Participant created successfully for email: ${email}`
        );
        console.info(
          `[${Title}] [${requestTime}] Sending Telegram notification for participantId: ${participant.participantId}`
        );

        await sendTelegramNotificationParticipant(
          {
            participantId: participant.participantId,
            fname,
            lname,
            email,
            price: packageData.oneDayParticipant ?? 0,
            // ข้อมูลอื่นๆ ที่ต้องการส่ง
          },
          imageBuffer,
          imageFileName
        );

        // จัดการไฟล์ แบ่งสรา้างโฟรเดอร์ หากยังไม่มี
        const uploadDirSlips = path.join(
          process.cwd(),
          "uploads/dataCmuvc/slips"
        );
        // สร้างโฟลเดอร์ถ้ายังไม่มี
        await Promise.all([fs.mkdir(uploadDirSlips, { recursive: true })]);
        const imagePath = path.join(uploadDirSlips, imageFileName);
        await fs.writeFile(imagePath, imageBuffer);

        console.info(
          `[${Title}] [${requestTime}] File uploaded successfully: ${imagePath}`
        );

        set.status = 201;
        console.info(
          `[${Title}] [${requestTime}] Request completed successfully for email: ${email}`
        );
        return {
          success: true,
          message: "Select 1 day",
          rate: rate,
          data: participant,
        };
      } else {
        console.info(`-`.repeat(80));
        console.info(`Main conference`);
        console.info(`-`.repeat(80));
        console.info(
          `[${Title}] [${requestTime}] Processing two-day package for email: ${email}`
        );

        // เปรียบเทียบวันที่
        if (today > cutoffDateRegularRate) {
          console.error(
            `[${Title}] [${requestTime}] Deadline passed for email: ${email}`
          );
          set.status = 400;
          return {
            success: false,
            message: "Unable to apply because the deadline is 16 October 2025.",
          };
        } else if (today > cutoffDateEarlyBird) {
          parsedPrice = packageData.regularRate;
          message =
            "You can apply at the normal price because it is past the Early Bird period (16 October 2025.)";
          rate = "regular";
        } else {
          parsedPrice = packageData.earlyBird;
          message =
            "You can apply at the Early Bird price until October 16, 2025.";
          rate = "earlyBird";
        }
      }

      // package 2 Day
      const allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
      const imageExt = Imagepayment.name.split(".").pop()?.toLowerCase();
      const maxFileSize = 100 * 1024 * 1024; // 100MB

      if (!imageExt || !allowedExtensions.includes(imageExt)) {
        console.error(
          `[${Title}] [${requestTime}] Invalid file extension: ${imageExt} for email: ${email}`
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
          `[${Title}] [${requestTime}] File size too large: ${imageBuffer.length} bytes for email: ${email}`
        );
        set.status = 400;
        return {
          success: false,
          message: "The file size is too large, maximum 100MB only.",
        };
      }

      const sanitizedFname = fname.replace(/\s+/g, "_");
      const sanitizedLname = lname.replace(/\s+/g, "_");
      const imageFileName = `${sanitizedFname}-${sanitizedLname}-${Date.now()}-price(${parsedPrice}).${imageExt}`;
      console.info(
        `[${Title}] [${requestTime}] Generated file name: ${imageFileName}`
      );
      // บันทึกข้อมูล
      const participant = await prisma.participant.create({
        data: {
          categoryId,
          packagesId,
          themeTitleId,
          price: parsedPrice ?? 0,
          ce: ce || "0",
          selectdayId,
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
          Imagepayment: imageFileName,
          payments: parsedPayments,
        },
      });
      console.info(
        `[${Title}] [${requestTime}] Participant created successfully for email: ${email}`
      );
      console.info(`-`.repeat(80));
      console.info(`Sending Telegram notification`);
      console.info(`-`.repeat(80));
      console.info(
        `[${Title}] [${requestTime}] Sending Telegram notification for participantId: ${participant.participantId}`
      );
      await sendTelegramNotificationParticipant(
        {
          participantId: participant.participantId,
          fname,
          lname,
          email,
          price: parsedPrice ?? 0,
        },
        imageBuffer,
        imageFileName
      );

      // จัดการไฟล์ แบ่งสรา้างโฟรเดอร์ หากยังไม่มี
      const uploadDirSlips = path.join(
        process.cwd(),
        "uploads/dataCmuvc/slips"
      );
      // สร้างโฟลเดอร์ถ้ายังไม่มี
      await Promise.all([fs.mkdir(uploadDirSlips, { recursive: true })]);
      const imagePath = path.join(uploadDirSlips, imageFileName);
      await fs.writeFile(imagePath, imageBuffer);
      console.info(
        `[${Title}] [${requestTime}] File uploaded successfully: ${imagePath}`
      );

      set.status = 201;
      console.info(
        `[${Title}] [${requestTime}] Request completed successfully for email: ${email}`
      );
      return {
        success: true,
        message: message,
        rate: rate,
        data: participant,
      };
    }

    if (packageData.themeTitleId === "ce291973-8980-4a7c-9ab4-13a684aea33b") {
      console.info(`-`.repeat(80));
      console.info(`Pre-conference`);
      console.info(`-`.repeat(80));
      console.info(`Processing pre-conference package for email: ${email}`);
      // เปรียบเทียบวันที่
      if (today > cutoffDateRegularRate) {
        console.error(`Deadline passed for email: ${email}`);
        set.status = 400;
        return {
          success: false,
          message: "Unable to apply because the deadline is 16 October 2025.",
        };
      } else if (today > cutoffDateEarlyBird) {
        parsedPrice = packageData.regularRate;
        message =
          "You can apply at the normal price because it is past the Early Bird period (16 October 2025.)";
        rate = "regular";
      } else {
        parsedPrice = packageData.earlyBird;
        message =
          "You can apply at the Early Bird price until October 16, 2025.";
        rate = "earlyBird";
      }

      // package 2 Day
      const allowedExtensions = ["jpg", "jpeg", "png", "pdf"];
      const imageExt = Imagepayment.name.split(".").pop()?.toLowerCase();
      const maxFileSize = 100 * 1024 * 1024; // 100MB

      if (!imageExt || !allowedExtensions.includes(imageExt)) {
        console.error(
          `[${Title}] [${requestTime}] Invalid file extension: ${imageExt} for email: ${email}`
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
          `[${Title}] [${requestTime}] File size too large: ${imageBuffer.length} bytes for email: ${email}`
        );
        set.status = 400;
        return {
          success: false,
          message: "The file size is too large, maximum 100MB only.",
        };
      }

      const sanitizedFname = fname.replace(/\s+/g, "_");
      const sanitizedLname = lname.replace(/\s+/g, "_");
      const imageFileName = `${sanitizedFname}-${sanitizedLname}-${Date.now()}-price(${parsedPrice}).${imageExt}`;
      console.info(
        `[${Title}] [${requestTime}] Generated file name: ${imageFileName}`
      );

      // บันทึกข้อมูล
      const participant = await prisma.participant.create({
        data: {
          categoryId,
          packagesId,
          themeTitleId,
          price: parsedPrice ?? 0,
          ce: ce || "0",
          selectdayId,
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
          Imagepayment: imageFileName,
          payments: parsedPayments,
        },
      });
      console.info(
        `[${Title}] [${requestTime}] Participant created successfully for email: ${email}`
      );
      console.info(`-`.repeat(80));
      console.info(`Sending Telegram notification`);
      console.info(`-`.repeat(80));
      console.info(
        `[${Title}] [${requestTime}] Sending Telegram notification for participantId: ${participant.participantId}`
      );
      await sendTelegramNotificationParticipantPre(
        {
          participantId: participant.participantId,
          fname,
          lname,
          email,
          price: parsedPrice ?? 0,
        },
        imageBuffer,
        imageFileName
      );

      // จัดการไฟล์ แบ่งสรา้างโฟรเดอร์ หากยังไม่มี
      const uploadDirSlips = path.join(
        process.cwd(),
        "uploads/dataCmuvc/slips"
      );
      // สร้างโฟลเดอร์ถ้ายังไม่มี
      await Promise.all([fs.mkdir(uploadDirSlips, { recursive: true })]);
      const imagePath = path.join(uploadDirSlips, imageFileName);
      await fs.writeFile(imagePath, imageBuffer);
      console.info(
        `[${Title}] [${requestTime}] File uploaded successfully: ${imagePath}`
      );

      set.status = 201;
      console.info(
        `[${Title}] [${requestTime}] Request completed successfully for email: ${email}`
      );
      return {
        success: true,
        message: message,
        rate: rate,
        data: participant,
      };
    }
    // ถ้า themeTitleId ไม่ตรงกับเงื่อนไขใดๆ
    console.error(
      `[${Title}] [${requestTime}] Invalid themeTitleId: ${themeTitleId}`
    );
    set.status = 400;
    return {
      success: false,
      message: "Invalid themeTitleId",
    };
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in ParticipantController: ${e.message}\nStack: ${e.stack}`
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

export const ParticipantList_All = async (set: any) => {
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
  console.info(`Approved List`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting fetch ParticipantList`);

  const currentYear = new Date().getFullYear();

  try {
    const search_participant = await prisma.participant.findMany({
      where: {
        createAt: {
          gte: new Date(`${currentYear}-01-01T00:00:00Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00Z`),
        },
      },
      select: {
        participantId: true,
        themeTitleId: true,
        fname: true,
        lname: true,
        packageOneDay: true,
        payments: true,
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
    });

    const search_abstract = await prisma.abstract.findMany({
      where: {
        createAt: {
          gte: new Date(`${currentYear}-01-01T00:00:00Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00Z`),
        },
      },
      select: {
        abstractId: true,
        fname: true,
        lname: true,
        statusAbstract: true,
        payments: true,
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
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}]  process completed`);
    console.info("─".repeat(80));
  }
};
