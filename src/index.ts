import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { existsSync, statSync, readFileSync } from "fs";
import path from "path";
import mime from "mime-types";

import dbCmuvcModule from "../modules/dbCmuvcModule";
import dbRoleModule from "../modules/dbRoleModule";
import dbAnatomyModule from "../modules/dbAnatomyModule";
import db360Module from "../modules/db360Module";
import dbVetrunModule from "../modules/dbVetrunModule";
import dbScbModule from "../modules/dbScbModule";

// Load .env into process.env if values are not already provided
const loadDotEnvIfNeeded = () => {
  try {
    if (process.env.ENV_MODE && process.env.ALLOWED_ORIGINS) return;
    const envPath = path.resolve(process.cwd(), ".env");
    if (!existsSync(envPath)) return;
    const raw = readFileSync(envPath, "utf8");
    raw.split(/\r?\n/).forEach((line) => {
      const l = line.trim();
      if (!l || l.startsWith("#")) return;
      const idx = l.indexOf("=");
      if (idx === -1) return;
      const key = l.slice(0, idx).trim();
      const val = l.slice(idx + 1).trim();
      if (process.env[key] === undefined) process.env[key] = val;
    });
  } catch {
    // ignore
  }
};

loadDotEnvIfNeeded();

const ENV_MODE = (process.env.ENV_MODE || "DEV").toUpperCase();
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const app = new Elysia()

  .use(
    cors({
      origin: ENV_MODE === "DEV" ? true : ALLOWED_ORIGINS,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }),
  )

  .get("/", () => {
    return "Connect Success";
  })

  // .use(
  //   staticPlugin({
  //     assets: "uploads",
  //     prefix: "/uploads",
  //   })
  // )

  // ✅ Secure Dynamic Static Route for images (prevent path traversal, allowlist, size limit)
  .get("/uploads/*", ({ params }) => {
    try {
      const raw = params["*"] || "";
      let relativePath = raw;
      try {
        relativePath = decodeURIComponent(raw);
      } catch {
        // ignore decode errors and use raw
      }

      const uploadsDir = path.resolve(process.cwd(), "uploads");
      const requestedPath = path.resolve(uploadsDir, relativePath);

      // Ensure the requested file is inside the uploads directory
      if (!requestedPath.startsWith(uploadsDir + path.sep)) {
        return new Response("Forbidden", { status: 403 });
      }

      // Disallow serving hidden files
      const baseName = path.basename(requestedPath);
      if (baseName.startsWith(".")) {
        return new Response("Forbidden", { status: 403 });
      }

      if (!existsSync(requestedPath)) {
        return new Response("File not found", { status: 404 });
      }

      const stats = statSync(requestedPath);
      if (!stats.isFile()) {
        return new Response("Not a file", { status: 404 });
      }

      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
      if (stats.size > MAX_FILE_SIZE) {
        return new Response("File too large", { status: 413 });
      }

      const contentType =
        mime.lookup(requestedPath) || "application/octet-stream";

      // Allowlist image types only
      if (
        !contentType.startsWith("image/") &&
        contentType !== "image/svg+xml"
      ) {
        return new Response("Unsupported media type", { status: 415 });
      }

      return new Response(Bun.file(requestedPath), {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=3600",
          "X-Content-Type-Options": "nosniff",
        },
      });
    } catch (err) {
      return new Response("Server error", { status: 500 });
    }
  })

  .use(dbCmuvcModule)
  .use(dbRoleModule)
  .use(dbAnatomyModule)
  .use(db360Module)
  .use(dbVetrunModule)
  .use(dbScbModule)

  .listen(process.env.PORT || "");

console.log(
  `🦊 Server 10.209.121.26 is running at ${app.server?.hostname}:${app.server?.port}`,
);
