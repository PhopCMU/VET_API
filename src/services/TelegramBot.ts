import { Bot, InputFile } from "grammy";
import { createLogger, format, transports, Logger } from "winston";
import { AnatomyData } from "../model/anatomy/StudentModel";

// ตั้งค่า Logger
const logger: Logger = createLogger({
  level: "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({ filename: "logs/telegram.log" }),
    new transports.Console(),
  ],
});

// Type สำหรับ abstractData
interface AbstractData {
  fname: string;
  lname: string;
  price: number;
  abstractId: string;
  [key: string]: any;
}

// Type สำหรับ participantData
interface ParticipantData {
  fname: string;
  lname: string;
  email: string;
  price: string | number;
  [key: string]: any;
}

// Sending Telegram Notification Abstract
export const sendTelegramNotification = async (
  abstractData: AbstractData,
  imageBuffer: Buffer,
  imageFileName: string
): Promise<void> => {
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  if (!chatId || !botToken) {
    const errorMsg = !chatId
      ? "TELEGRAM_CHAT_ID is not set"
      : "TELEGRAM_BOT_TOKEN is not set";
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }

  if (!(imageBuffer instanceof Buffer) || imageBuffer.length === 0) {
    logger.error("Invalid imageBuffer provided", {
      abstractId: abstractData.abstractId,
    });
    throw new Error("Invalid imageBuffer: Must be a non-empty Buffer");
  }

  if (!abstractData.fname || !abstractData.abstractId) {
    logger.error("Invalid abstractData: Missing required fields", {
      abstractId: abstractData.abstractId,
    });
    throw new Error(
      "Invalid abstractData: fname, price, and abstractId are required"
    );
  }

  try {
    const cleanName = abstractData.fname.replace(/[^a-zA-Z0-9ก-๙]/g, "");
    if (!cleanName) {
      logger.error("Invalid fname: Cleaned name is empty", {
        abstractId: abstractData.abstractId,
      });
      throw new Error("Invalid fname: Cleaned name cannot be empty");
    }

    const extension = imageFileName.includes(".")
      ? imageFileName.split(".").pop()?.toLowerCase() || "jpg"
      : "jpg";
    const customFileName = `${cleanName}${cleanName}.${extension}`;

    const escapeMarkdown = (text: string): string => {
      return text.replace(/[_*[\]()~`>#+-=|{}.!\\]/g, "\\$&");
    };

    const telegramMessage = `
🎉New Abstract Submission
🆔Abstract ID: ${escapeMarkdown(abstractData.abstractId)}
🪪ชื่อ: ${escapeMarkdown(
      abstractData.fname.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&")
    )}
🪪นามสกุล: ${escapeMarkdown(
      abstractData.lname.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&")
    )}
💸ราคา: ${escapeMarkdown(abstractData.price.toString())}
⌛เวลา: ${new Date().toLocaleString("th-TH")}
    `.trim();

    const bot = new Bot(botToken);

    await bot.api.sendPhoto(
      chatId,
      new InputFile(imageBuffer, customFileName),
      {
        caption: telegramMessage,
        parse_mode: "MarkdownV2",
      }
    );

    logger.info("Telegram notification sent successfully", {
      abstractId: abstractData.abstractId,
      fileName: customFileName,
    });
  } catch (error: any) {
    const errorMessage = error.message || "Unknown error";
    logger.error("Failed to send Telegram notification", {
      abstractId: abstractData.abstractId,
      error: errorMessage,
      stack: error.stack,
    });
    throw new Error(`Failed to send Telegram notification: ${errorMessage}`);
  }
};
// Sending Telegram Notification Participant Main
export const sendTelegramNotificationParticipant = async (
  participantData: ParticipantData, // เปลี่ยนจาก ParticipantCreateProps เป็น any ชั่วคราว
  imageBuffer: Buffer,
  imageFileName: string
): Promise<void> => {
  // 1. ตรวจสอบ Environment Variables
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!chatId) {
    console.error("TELEGRAM_CHAT_ID_PARTICIPANT is not set");
    throw new Error("TELEGRAM_CHAT_ID_PARTICIPANT is not set");
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    console.error("TELEGRAM_BOT_TOKEN_PARTICIPANT is not set");
    throw new Error("TELEGRAM_BOT_TOKEN_PARTICIPANT is not set");
  }

  // 2. ตรวจสอบ imageBuffer
  if (!(imageBuffer instanceof Buffer) || imageBuffer.length === 0) {
    console.error("Invalid imageBuffer provided");
    throw new Error("Invalid imageBuffer: Must be a non-empty Buffer");
  }

  // 3. ตรวจสอบ participantData
  if (
    !participantData.fname ||
    !participantData.price ||
    !participantData.email
  ) {
    console.error("Invalid participantData: Missing required fields");
    throw new Error(
      "Invalid participantData: fname, price, and email are required"
    );
  }

  try {
    // 4. สร้างชื่อไฟล์ใหม่
    const cleanName = participantData.fname.replace(/[^a-zA-Z0-9ก-๙]/g, "");
    if (!cleanName) {
      console.error("Invalid fname: Cleaned name is empty");
      throw new Error("Invalid fname: Cleaned name cannot be empty");
    }

    const extension = imageFileName.includes(".")
      ? imageFileName.split(".").pop()?.toLowerCase() || "jpg"
      : "jpg";

    const customFileName = `${cleanName}-${Date.now()}.${extension}`;

    const escapeMarkdown = (text: string): string => {
      return text.replace(/[_*[\]()~`>#+-=|{}.!\\]/g, "\\$&");
    };

    // 5. สร้างข้อความสำหรับ caption
    const telegramMessage = `
    🎉New Main Conference
    🆔Participant ID: ${escapeMarkdown(participantData.participantId)}
    🪪ชื่อ: ${escapeMarkdown(
      participantData.fname.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&")
    )}
    🪪นามสกุล: ${escapeMarkdown(
      participantData.lname.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&")
    )}
    💸ราคา: ${escapeMarkdown(participantData.price.toString())}
    📧อีเมล: ${escapeMarkdown(participantData.email)}
    🗃️ชื่อไฟล์: ${escapeMarkdown(customFileName)}
    🗓️เวลาลงทะเบียนและชำระเงิน: ${new Date().toLocaleString("th-TH")}
        `.trim();

    // 6. ส่งรูปภาพพร้อม caption
    const bot = new Bot(botToken);

    await bot.api.sendPhoto(
      chatId,
      new InputFile(imageBuffer, customFileName),
      {
        caption: telegramMessage,
        parse_mode: "MarkdownV2",
      }
    );

    logger.info("Telegram notification sent successfully", {
      abstractId: participantData.participantId,
      fileName: customFileName,
    });
  } catch (error: any) {
    console.error("Failed to send Telegram notification", {
      error: error.message,
      stack: error.stack,
    });
    throw new Error(`Failed to send Telegram notification: ${error.message}`);
  }
};
// Sending Telegram Notification Participant Pre
export const sendTelegramNotificationParticipantPre = async (
  participantData: ParticipantData, // เปลี่ยนจาก ParticipantCreateProps เป็น any ชั่วคราว
  imageBuffer: Buffer,
  imageFileName: string
): Promise<void> => {
  // 1. ตรวจสอบ Environment Variables

  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!chatId) {
    console.error("TELEGRAM_CHAT_ID_PARTICIPANT is not set");
    throw new Error("TELEGRAM_CHAT_ID_PARTICIPANT is not set");
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    console.error("TELEGRAM_BOT_TOKEN_PARTICIPANT is not set");
    throw new Error("TELEGRAM_BOT_TOKEN_PARTICIPANT is not set");
  }

  // 2. ตรวจสอบ imageBuffer
  if (!(imageBuffer instanceof Buffer) || imageBuffer.length === 0) {
    console.error("Invalid imageBuffer provided");
    throw new Error("Invalid imageBuffer: Must be a non-empty Buffer");
  }

  // 3. ตรวจสอบ participantData
  if (
    !participantData.fname ||
    !participantData.price ||
    !participantData.email
  ) {
    console.error("Invalid participantData: Missing required fields");
    throw new Error(
      "Invalid participantData: fname, price, and email are required"
    );
  }

  try {
    // 4. สร้างชื่อไฟล์ใหม่
    const cleanName = participantData.fname.replace(/[^a-zA-Z0-9ก-๙]/g, "");
    if (!cleanName) {
      console.error("Invalid fname: Cleaned name is empty");
      throw new Error("Invalid fname: Cleaned name cannot be empty");
    }

    const extension = imageFileName.includes(".")
      ? imageFileName.split(".").pop()?.toLowerCase() || "jpg"
      : "jpg";

    const customFileName = `${cleanName}-${Date.now()}.${extension}`;

    const escapeMarkdown = (text: string): string => {
      return text.replace(/[_*[\]()~`>#+-=|{}.!\\]/g, "\\$&");
    };

    // 5. สร้างข้อความสำหรับ caption
    const telegramMessage = `
🎉 New Pre Congress
🆔 Participant ID: ${escapeMarkdown(participantData.participantId || "N/A")}
🪪 ชื่อ: ${escapeMarkdown(participantData.fname)}
🪪 นามสกุล: ${escapeMarkdown(participantData.lname || "N/A")}
💸 ราคา: ${escapeMarkdown(participantData.price.toString())}
📧 อีเมล: ${escapeMarkdown(participantData.email)}
🗃️ ชื่อไฟล์: ${escapeMarkdown(customFileName)}
🗓️ เวลาลงทะเบียนและชำระเงิน: ${escapeMarkdown(
      new Date().toLocaleString("th-TH")
    )}
`.trim();

    // 6. ส่งรูปภาพพร้อม caption
    const bot = new Bot(botToken);

    await bot.api.sendPhoto(
      chatId,
      new InputFile(imageBuffer, customFileName),
      {
        caption: telegramMessage,
        parse_mode: "MarkdownV2", // ใช้ MarkdownV2 แทน Markdown
      }
    );

    logger.info("Telegram notification sent successfully", {
      fileName: customFileName,
      participantEmail: participantData.email,
    });
  } catch (error: any) {
    console.error("Failed to send Telegram notification", {
      error: error.message,
      stack: error.stack,
    });
    throw new Error(`Failed to send Telegram notification: ${error.message}`);
  }
};
// Sending Telegram notification Vetrun
export const sendTelegramNotificationVetRun = async (
  vetrunData: any,
  imageBufferPaymentSlip: Buffer,
  set: any,
  title: "VETRUN" = "VETRUN"
): Promise<void> => {
  const getThaiTime = () => {
    return new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  const currentTime = getThaiTime();
  try {
    console.info(
      `[${currentTime}] [${title}] Running Sending Telegram notification`
    );

    const chatId = process.env.TELEGRAM_CHAT_ID_VETRUN;
    const botToken = process.env.TELEGRAM_BOT_TOKEN_VETRUN;

    if (!chatId || !botToken) {
      console.error(
        `[${currentTime}] [${title}] Telegram configuration error: ${
          !chatId ? "Missing CHAT_ID" : "Missing BOT_TOKEN"
        }`
      );
      throw new Error("Telegram configuration incomplete");
    }

    // Validate input data
    if (
      !(imageBufferPaymentSlip instanceof Buffer) ||
      imageBufferPaymentSlip.length === 0
    ) {
      console.error(
        `[${currentTime}] [${title}] Invalid image buffer provided`
      );
      throw new Error("Invalid image buffer");
    }

    // Escape special characters for MarkdownV2
    const escapeMarkdownV2 = (text: string): string => {
      return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
    };

    let telegramMessage;

    if (vetrunData.participantId) {
      telegramMessage = `
      🎉 New Vetrun Registration
      🆔 Participant ID: ${escapeMarkdownV2(vetrunData.participantId)}
      💺 Bib Number: ${escapeMarkdownV2(
        vetrunData.nameBib + "" + vetrunData.numberBib
      )}
      🪪 Name: ${escapeMarkdownV2(
        vetrunData.firstName + " " + vetrunData.lastName
      )}
      ${
        vetrunData.address
          ? `🏫 Address: ${escapeMarkdownV2(vetrunData.address)}`
          : `🏫 Address: No Address Provided`
      }
      
      📞 Phone: ${escapeMarkdownV2(vetrunData.phone)}
      📧 Email: ${escapeMarkdownV2(vetrunData.email)}
      ${
        vetrunData.animal && vetrunData.animal.animalId
          ? `🐶 Has Dog: ${
              vetrunData.animal.fancys
                ? `🎊 Fancy: ${escapeMarkdownV2(vetrunData.animal.name)}`
                : `🎊 Not Fancy: ${escapeMarkdownV2(vetrunData.animal.name)}`
            }`
          : ``
      }
      🗓️ Registration Time: ${getThaiTime()}
    `.trim();
    }
    if (vetrunData.userId) {
      telegramMessage = `
      🎉 New Vetrun Sale Shirts
      🆔 User ID: ${escapeMarkdownV2(vetrunData.userId)}
      👤 Name: ${escapeMarkdownV2(vetrunData.fullname)}
      🏠 ${
        vetrunData.delivery_address
          ? `Delivery: ${escapeMarkdownV2(vetrunData.delivery_address)}`
          : `Pick Up: รับเองที่คณะ`
      }
      📞 Phone: ${escapeMarkdownV2(vetrunData.phone)}
      📧 Email: ${escapeMarkdownV2(vetrunData.email)}
      📝 Quantity: ${escapeMarkdownV2(vetrunData.quantity)} ตัว
      💰 Total payment: ${vetrunData.total_amount.toString()} THB
      🗓️ Registration Time: ${getThaiTime()}
      `.trim();
    }

    const bot = new Bot(botToken);

    await bot.api.sendPhoto(
      chatId,
      new InputFile(
        imageBufferPaymentSlip,
        vetrunData.imageFileName || "payment_slip.jpg"
      ),
      {
        caption: telegramMessage,
        parse_mode: "MarkdownV2",
      }
    );

    if (vetrunData.participantId) {
      logger.info("Telegram notification sent successfully", {
        participantId: vetrunData.participantId,
        numberBib: vetrunData.nameBib + "" + vetrunData.numberBib,
      });
    }

    if (vetrunData.userId) {
      logger.info("Telegram notification sent successfully", {
        userId: vetrunData.userId,
        fullname: vetrunData.fullname,
      });
    }
  } catch (error: any) {
    console.error(
      `[${currentTime}] [${title}] Failed to send Telegram notification: ${error.message}`
    );
    if (error.response) {
      console.error(
        `[${currentTime}] [${title}] Telegram API error: ${JSON.stringify(
          error.response.body
        )}`
      );
    }
    set.status = 500;
    throw error;
  }
};
// Sending Telegram notification Anatomy
export const sendTelegramNotificationAnatomy = async (
  anatomyData: AnatomyData,
  imageBufferSlip: Buffer,
  set: any
): Promise<void> => {
  const getThaiTime = () => {
    return new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const currentTime = getThaiTime();

  try {
    console.info(`[${currentTime}]  Running Sending Telegram notification`);

    // Validate configuration
    const chatId = process.env.TELEGRAM_CHAT_ID_ANATOMY;
    const botToken = process.env.TELEGRAM_BOT_TOKEN_ANATOMY;

    if (!chatId || !botToken) {
      console.error(
        `[${currentTime}]  Telegram configuration error: ${
          !chatId ? "Missing CHAT_ID" : "Missing BOT_TOKEN"
        }`
      );
      throw new Error("Telegram configuration incomplete");
    }

    // Validate input data
    if (!(imageBufferSlip instanceof Buffer) || imageBufferSlip.length === 0) {
      console.error(`[${currentTime}]  Invalid image buffer provided`);
      throw new Error("Invalid image buffer");
    }

    if (!anatomyData.studentId) {
      console.error(`[${currentTime}]  Missing required student data`);
      throw new Error("Missing required student data");
    }

    // Escape special characters for MarkdownV2
    const escapeMarkdown = (text: string) => {
      return text.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&");
    };

    // Prepare message with escaped characters
    const telegramMessage = `
      🎉 New Anatomy Registration
      🆔 Student ID: ${escapeMarkdown(anatomyData.studentId)}
      💺 Seat Number: ${escapeMarkdown(anatomyData.examSeatNumber)}
      🪪 Name: ${escapeMarkdown(anatomyData.fname)}
      🏫 School: ${escapeMarkdown(anatomyData.school)}
      🏫 Address: ${escapeMarkdown(anatomyData.address)}
      📞 Phone: ${escapeMarkdown(anatomyData.phone)}
      📧 Email: ${escapeMarkdown(anatomyData.email)}
      🗓️ Registration Time: ${getThaiTime()}
    `.trim();

    console.info(
      `[${currentTime}]  Preparing to send notification for student: ${anatomyData.examSeatNumber}`
    );

    // Initialize bot with proper file handling
    const bot = new Bot(botToken);

    await bot.api.sendPhoto(chatId, new InputFile(imageBufferSlip), {
      caption: telegramMessage,
      parse_mode: "Markdown",
    });

    console.info(
      `[${currentTime}]  Successfully sent Telegram notification for student: ${anatomyData.examSeatNumber}`
    );
  } catch (error: any) {
    console.error(
      `[${currentTime}]  Failed to send Telegram notification: ${error.message}`
    );
    if (error.response) {
      console.error(
        `[${currentTime}]  Telegram API error: ${JSON.stringify(
          error.response.body
        )}`
      );
    }
    set.status = 500;
    throw error;
  } finally {
    console.info(`[${currentTime}]  Completed Telegram notification process`);
  }
};
export const sendTelegramNotificationTextAnatomy = async (
  anatomyData: AnatomyData,
  set: any
): Promise<void> => {
  const getThaiTime = () => {
    return new Date().toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const currentTime = getThaiTime();

  try {
    console.info(
      `[${currentTime}]  Running Sending Telegram notification Register Anatomy`
    );

    // Validate configuration
    const chatId = process.env.TELEGRAM_CHAT_ID_REGISTER_ANATOMY;
    const botToken = process.env.TELEGRAM_BOT_TOKEN_REGISTER_ANATOMY;

    if (!chatId || !botToken) {
      console.error(
        `[${currentTime}] Telegram configuration error: ${
          !chatId ? "Missing CHAT_ID" : "Missing BOT_TOKEN"
        }`
      );
      throw new Error("Telegram configuration incomplete");
    }

    if (!anatomyData.studentId) {
      console.error(`[${currentTime}] Missing required student data`);
      throw new Error("Missing required student data");
    }

    // Escape special characters for MarkdownV2
    const escapeMarkdown = (text: string) => {
      return text.replace(/[_*[\]()~`>#+-=|{}.!]/g, "\\$&");
    };

    // Prepare message with escaped characters
    const telegramMessage = `
      🎉 New Anatomy Registration
      🆔 Student ID: ${escapeMarkdown(anatomyData.studentId)}
      💺 Seat Number: ${escapeMarkdown(anatomyData.examSeatNumber)}
      🪪 Name: ${escapeMarkdown(anatomyData.fname)}
      🏫 School: ${escapeMarkdown(anatomyData.school)}
      🏫 Address: ${escapeMarkdown(anatomyData.address)}
      📞 Phone: ${escapeMarkdown(anatomyData.phone)}
      📧 Email: ${escapeMarkdown(anatomyData.email)}
      🗓️ Registration Time: ${getThaiTime()}
    `.trim();

    console.info(
      `[${currentTime}] Preparing to send notification for student: ${anatomyData.examSeatNumber}`
    );

    const bot = new Bot(botToken);

    await bot.api.sendMessage(chatId, telegramMessage, {
      parse_mode: "MarkdownV2",
    });

    logger.info("Telegram notification sent successfully", {
      abstractId: anatomyData.studentId,
      examSeatNumber: anatomyData.examSeatNumber,
    });

    console.info(
      `[${currentTime}]  Successfully sent Telegram notification for student: ${anatomyData.examSeatNumber}`
    );
  } catch (error: any) {
    console.error(
      `[${currentTime}]  Failed to send Telegram notification: ${error.message}`
    );
    if (error.response) {
      console.error(
        `[${currentTime}]  Telegram API error: ${JSON.stringify(
          error.response.body
        )}`
      );
    }
    set.status = 500;
    throw error;
  } finally {
    console.info(`[${currentTime}]  Completed Telegram notification process`);
  }
};
