import {} from "winston";
import fs from "fs";
import path from "path";

const logDir = path.join(process.cwd(), "logs");
const MAX_AGE_DAYS = 90;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export const cleanupOldLogs = () => {
  if (!fs.existsSync(logDir)) return;

  console.log(
    `[Log Cleanup] Checking for log files older than ${MAX_AGE_DAYS} days...`
  );

  const now = Date.now();
  const cutoffTime = now - MAX_AGE_DAYS * MS_PER_DAY;

  let deletedCount = 0;

  // อ่านทุกโฟลเดอร์ย่อยใน /logs
  fs.readdirSync(logDir).forEach((partName) => {
    const partDir = path.join(logDir, partName);
    const stat = fs.statSync(partDir);

    if (!stat.isDirectory()) return;

    // อ่านไฟล์ในแต่ละ part
    fs.readdirSync(partDir).forEach((fileName) => {
      const filePath = path.join(partDir, fileName);
      const fileStat = fs.statSync(filePath);

      // ข้ามไฟล์ที่ยังใช้งานอยู่ (อาจ lock โดย process)
      if (fileStat.isDirectory()) return;

      // ถ้าไฟล์เก่ากว่า 90 วัน → ลบ
      if (fileStat.mtime.getTime() < cutoffTime) {
        try {
          fs.unlinkSync(filePath);
          console.log(`[Log Cleanup] Deleted: ${filePath}`);
          deletedCount++;
        } catch (err: any) {
          console.warn(
            `[Log Cleanup] Failed to delete ${filePath}:`,
            err.message
          );
        }
      }
    });
  });

  console.log(`[Log Cleanup] Completed. ${deletedCount} file(s) deleted.`);
};
