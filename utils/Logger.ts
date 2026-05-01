import { createLogger, format, transports, Logger } from "winston";
import { TransformableInfo } from "logform";
import fs from "fs";
import path from "path";

// ขยาย type ของ info เพื่อรองรับ field พิเศษ เช่น 'part'
interface CustomTransformableInfo extends TransformableInfo {
  part?: string;
}

const { combine, timestamp, printf, colorize, errors, splat } = format;

// โฟลเดอร์หลักสำหรับ logs
const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// รูปแบบ log หลัก — แสดง part, level, timestamp, message
const logFormat = printf((info: CustomTransformableInfo) => {
  const { timestamp, level, message, part = "app", ...meta } = info;

  let finalMessage = String(message);

  // ถ้ามี metadata → รวมเข้าไปใน message
  if (Object.keys(meta).length > 0) {
    finalMessage += ` ${JSON.stringify(meta, null, 2)}`;
  }

  return `${timestamp} [${part.padEnd(12)}] [${level
    .toUpperCase()
    .padEnd(7)}]: ${finalMessage}`;
});

// ฟังก์ชันสร้าง transport สำหรับแต่ละ part
function createPartTransports(part: string) {
  const partDir = path.join(logDir, part);
  if (!fs.existsSync(partDir)) {
    fs.mkdirSync(partDir, { recursive: true });
  }

  return [
    // บันทึกเฉพาะ error ลง error.log
    new transports.File({
      filename: path.join(partDir, "error.log"),
      level: "error",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        splat(),
        logFormat
      ),
    }),
    // บันทึก warn และ error ลง warn.log
    new transports.File({
      filename: path.join(partDir, "warn.log"),
      level: "warn",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        splat(),
        logFormat
      ),
    }),
    // บันทึก info ขึ้นไป (info, warn, error)
    new transports.File({
      filename: path.join(partDir, "info.log"),
      level: "info",
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        errors({ stack: true }),
        splat(),
        logFormat
      ),
    }),
  ];
}

// สร้าง logger สำหรับแต่ละ part
export function createPartLogger(partName: string): Logger {
  return createLogger({
    format: combine(
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      errors({ stack: true }), // รองรับ Error object + stack trace
      splat(), // รองรับ string interpolation เช่น logger.info('User %s', id)
      format((info) => {
        // ✅ ใช้ Object.assign เพื่อไม่แก้ info ต้นฉบับ
        return Object.assign({}, info, { part: partName });
      })(),
      logFormat
    ),
    transports: [
      ...createPartTransports(partName),
      // Console: แสดงทุกระดับ พร้อมสี
      new transports.Console({
        level: "debug", // แสดง debug ขึ้นไปใน console
        format: combine(
          colorize(),
          printf((info) => {
            const part: any = info.part || "app";
            const level = info.level.toUpperCase().padEnd(7);
            const ts = info.timestamp;
            const message =
              typeof info.message === "object" && info.message !== null
                ? JSON.stringify(info.message, null, 2)
                : info.stack || info.message;
            return `${ts} [${part.padEnd(12)}] [${level}]: ${message}`;
          })
        ),
      }),
    ],
    exitOnError: false,
    // ✅ ตั้งค่า default level ถ้าต้องการควบคุมผ่าน env
    level: process.env.LOG_LEVEL || "info",
  });
}