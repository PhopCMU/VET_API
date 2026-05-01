import { Elysia } from "elysia";
import fs from "fs";
import path from "path";
import jwt from "@elysiajs/jwt";

const LOGS_BASE = path.join(process.cwd(), "logs");

export const loggerHttpPlugin = new Elysia({ prefix: "/logger" })
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET_KEY ?? "",
    })
  )
  // GET /role/logger/logs/:folder/:service/:file
  .get(
    "/logs/:folder/:service/:file",
    async ({ params, jwt, headers, set }) => {
      const authHeader = headers.authorization;
      const token = authHeader?.startsWith("Bearer ")
        ? authHeader.slice(7)
        : null;

      if (!token) {
        set.status = 401;
        return { error: "Unauthorized: No token provided" };
      }

      try {
        await jwt.verify(token);
      } catch {
        set.status = 401;
        return { error: "Unauthorized: Invalid token" };
      }

      const { folder, service, file } = params;
      const logPath = path.join(LOGS_BASE, folder, service, `${file}.log`);

      if (!fs.existsSync(logPath)) {
        set.status = 404;
        return { error: `Log file not found: ${logPath}` };
      }

      try {
        const content = fs.readFileSync(logPath, "utf-8");
        const lines = content
          .split("\n")
          .filter((line) => line.trim() !== "")
          .slice(-2000); // ดึงเฉพาะ 100 บรรทัดล่าสุด (ไม่หนักเกินไป)

        return { lines, timestamp: new Date().toISOString() };
      } catch (err) {
        set.status = 500;
        return { error: "Failed to read log file" };
      }
    }
  );
