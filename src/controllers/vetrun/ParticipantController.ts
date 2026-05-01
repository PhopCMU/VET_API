import { PrismaClient } from "../../../generated/vetrun";
import { Context } from "elysia";
import { promises as fs } from "fs";
import path from "path";
import { ParticipantCreateProp } from "../../model/vetrun/vetrunModel";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";
import { getNextBibNumber } from "../../services/BibService";
import { randomUUIDv7 } from "bun";
import { title } from "process";
import { sendTelegramNotificationVetRun } from "../../services/TelegramBot";

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

const UPLOAD_DIR = {
  slips: path.join(process.cwd(), "uploads", "dataVetRun", "paymentSlips"),
};
const allowedImageExtensions = ["jpg", "jpeg", "png", "webp", "gif", "bmp"];
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

const maskText = (text: string) => {
  if (!text || text.length <= 1) return "x"; // หากสั้นเกินไป ปิดทั้งหมด
  const visibleChars = Math.max(1, Math.floor(text.length / 2)); // แสดงอย่างน้อย 1 ตัว
  const visiblePart = text.slice(0, visibleChars);
  const hiddenPart = "x".repeat(text.length - visibleChars);
  return visiblePart + hiddenPart;
};

export const ParticipantController = async ({
  body,
  set,
}: Context & {
  body: ParticipantCreateProp;
  set: any;
}) => {
  const Title = "VETRUN REGISTRATION";

  const decryptedData = decryptMiddleware(body.encryptedData);

  if (!decryptedData) {
    console.error(`${requestTime} - ${Title} - Failed to decrypt data`);
    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  console.info(
    `${requestTime} | ${Title} | ${
      decryptedData.firstName + " " + decryptedData.lastName
    }`
  );

  const parsedAnimal = JSON.parse(decryptedData.animal);
  let name_bib: string = "";
  // let typeBibs: string = "";
  // Priority 1: VIP
  if (
    (decryptedData.eventType === "VIP" &&
      parsedAnimal.fancys === false &&
      decryptedData.hasDog === "false") ||
    (decryptedData.eventType === "VIP" &&
      parsedAnimal.fancys === false &&
      decryptedData.hasDog === "true")
  ) {
    name_bib = "VIP-";
  }
  // Priority 2: FANCY
  else if (parsedAnimal.fancys === true) {
    name_bib = "FANCY-";
    // typeBibs = "";
  }
  // Priority 3: FUN RUN
  else if (decryptedData.eventType === "FUNRUN") {
    if (decryptedData.hasDog === "true") {
      name_bib = `FR${decryptedData.sex}D-`;
      // typeBibs = "FUNRUN_DOG";
    } else {
      name_bib = `FR${decryptedData.sex}-`;
      // typeBibs = "FUNRUN";
    }
  }
  // Priority 4: MARATHON
  else if (decryptedData.eventType === "MARATHON") {
    const age = parseInt(decryptedData.age);

    if (age >= 5 && age <= 19) {
      name_bib = `${decryptedData.sex}19-`;
    } else if (age >= 20 && age <= 29) {
      name_bib = `${decryptedData.sex}20-`;
    } else if (age >= 30 && age <= 39) {
      name_bib = `${decryptedData.sex}30-`;
    } else if (age >= 40 && age <= 49) {
      name_bib = `${decryptedData.sex}40-`;
    } else if (age >= 50 && age <= 120) {
      name_bib = `${decryptedData.sex}50-`;
    }
  }

  const existingParticipant = await prisma.participant.findFirst({
    where: {
      firstName: decryptedData.firstName,
      lastName: decryptedData.lastName,
    },
  });

  if (existingParticipant) {
    console.error(`[${requestTime}] [${Title}] Participant already exists`);
    set.status = 400;
    return {
      success: false,
      message: "This name and surname have already been registered.",
    };
  }

  // ดึงเลข bib จาก PostgreSQL
  const numberBib = await getNextBibNumber(name_bib);
  const sequenceNumber = numberBib.replace(name_bib, "");
  if (!numberBib) {
    console.error(`${requestTime} - ${Title} - Failed to generate bib number`);
    set.status = 500;
    return {
      success: false,
      message: "Failed to generate bib number",
    };
  }

  const { transferFile } = body;

  const imageExtParticipant = transferFile.name.split(".").pop()?.toLowerCase();
  const imageBufferParticipant = Buffer.from(await transferFile.arrayBuffer());

  if (
    !imageExtParticipant ||
    !allowedImageExtensions.includes(imageExtParticipant)
  ) {
    console.error(
      `[${requestTime}] [${Title}] Invalid file type Image: ${imageExtParticipant}`
    );
    set.status = 400;
    return {
      success: false,
      message: "Invalid file type Image",
    };
  }

  if (imageBufferParticipant.length > MAX_IMAGE_SIZE) {
    console.error(
      `[${requestTime}] [${Title}] File size must be less than 10MB`
    );
    set.status = 400;
    return {
      success: false,
      message: "File size must be less than 10MB",
    };
  }

  console.info(`[${requestTime}] [${Title}] Checking File Type Image: Success`);

  const sanitizedFileName = randomUUIDv7();
  const newFileName = sanitizedFileName + "." + imageExtParticipant;

  if (!newFileName) {
    console.error(
      `[${requestTime}] [${Title}] Failed to generate new file name`
    );
    set.status = 500;
    return {
      success: false,
      message: "Failed to generate new file name",
    };
  }

  const yearThai = new Date().getFullYear() + 543; // Convert to Thai year
  // บันทึกข้อมูลผู้เข้าร่วม
  try {
    const newParticipant = await prisma.participant.create({
      data: {
        firstName: decryptedData.firstName,
        lastName: decryptedData.lastName,
        email: decryptedData.email,
        phone: decryptedData.phone,
        sex: decryptedData.sex,
        age: decryptedData.age ?? null,
        address: decryptedData.address ?? null,
        sizeId: decryptedData.sizeId,
        year: yearThai.toString(), // Convert to Thai year
        transferFile: newFileName,
        typeBib: decryptedData.eventType,
        nameBib: name_bib,
        numberBib: sequenceNumber,
        payment: false,
      },
    });

    let newAnimal: {
      name: string;
      breed: string;
      weight: string;
      sex: string;
      fancys: boolean;
      participantId: string;
    } | null = null;
    if (decryptedData.hasDog === "true" && newParticipant) {
      // บันทึกข้อมูลสัตว์เลี้ยง
      newAnimal = await prisma.animal.create({
        data: {
          name: parsedAnimal.name,
          breed: parsedAnimal.breed,
          weight: parsedAnimal.weight,
          sex: parsedAnimal.gender,
          fancys: parsedAnimal.fancys,
          participantId: newParticipant.participantId,
        },
      });

      if (!newAnimal) {
        console.error(`[${requestTime}] [${Title}] Failed to create animal`);
        set.status = 500;
        return {
          success: false,
          message: "Failed to create animal",
        };
      }
      console.info(`[${requestTime}] [${Title}] Create animal: Success`);
    }

    const payload: any = {
      ...newParticipant,
      animal: newAnimal,
    };

    console.info(`[${requestTime}] [${title}] Saving uploaded files`);
    if (newParticipant || (newParticipant && newAnimal)) {
      await sendTelegramNotificationVetRun(
        payload,
        imageBufferParticipant,
        set
      );
      const writeFilePromises = await Promise.all([
        fs.writeFile(
          path.join(UPLOAD_DIR.slips, newFileName),
          imageBufferParticipant
        ),
      ]);

      if (!writeFilePromises) {
        console.error(
          `[${requestTime}] [${Title}] Failed to save uploaded files payment slip`
        );
        set.status = 500;
        return {
          success: false,
          message: "Failed to save uploaded files payment slip",
        };
      }

      if (decryptedData.eventType === "VIP") {
        await prisma.items_vip.create({
          data: {
            participantId: newParticipant.participantId,
            model_shirt: decryptedData.model_shirt?.trim() || null,
            items: decryptedData.items,
            sizeId: decryptedData.sizeId_2?.trim() || null,
          },
        });
      }

      set.status = 200;
      console.info(
        `[${requestTime}] [${Title}] Saving uploaded files: Success`
      );
      return {
        success: true,
        message: "Participant created successfully",
      };
    }
  } catch (error) {
    console.error("Error saving participant:", error);
    set.status = 500;
    return {
      success: false,
      message: "Failed to save participant",
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const checkFancyLimitAndRegister = async (set: any) => {
  try {
    const options: any[] = await prisma.option.findMany();

    const fancyOption = options.find((opt) => opt.name === "fancy");
    const notFancyOption = options.find((opt) => opt.name === "not_fancy");

    // console.log(fancyOption, notFancyOption);

    if (!fancyOption || !notFancyOption) {
      throw new Error("Missing required options in database");
    }

    const [countFancyTrue, countFancyFalse] = await Promise.all([
      prisma.animal.count({
        where: { fancys: true },
      }),
      prisma.animal.count({
        where: { fancys: false },
      }),
    ]);

    console.log(countFancyTrue, countFancyFalse);

    const isFancyFull = countFancyTrue >= fancyOption.limit;
    const isNotFancyFull = countFancyFalse >= notFancyOption.limit;

    set.status = 200;
    return {
      fancy: {
        current: countFancyTrue,
        limit: fancyOption.limit,
        status: isFancyFull ? false : true,
      },
      not_fancy: {
        current: countFancyFalse,
        limit: notFancyOption.limit,
        status: isNotFancyFull ? false : true,
      },
      canRegister: !isFancyFull && !isNotFancyFull,
      success: true,
    };
  } catch (error) {
    console.error("Error checking registration limits:", error);
    throw error;
  }
};

export const getParticipantController = async (set: any) => {
  try {
    const yearThai = new Date().getFullYear() + 543; // Convert to Thai year
    const participants = await prisma.participant.findMany({
      where: {
        year: yearThai.toString(),
      },
      select: {
        firstName: true,
        lastName: true,
        year: true,
        typeBib: true,
        nameBib: true,
        numberBib: true,
        payment: true,

        Animal: {
          select: {
            name: true,
            breed: true,
            weight: true,
            sex: true,
            fancys: true,
          },
        },
      },
    });

    // Mask ชื่อ-นามสกุล ก่อนตอบกลับ
    const maskedParticipants = participants.map((p) => ({
      ...p,
      lastName: maskText(p.lastName),
    }));

    set.status = 200;
    return {
      success: true,
      data: maskedParticipants,
    };
  } catch (error) {
    console.error("Error fetching participants:", error);
    set.status = 500;
    return {
      success: false,
      message: "Failed to fetch participants",
    };
  } finally {
    await prisma.$disconnect();
  }
};
