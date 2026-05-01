import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { existsSync } from "fs";
import path from "path";
import mime from "mime-types";

import dbCmuvcModule from "../modules/dbCmuvcModule";
import dbRoleModule from "../modules/dbRoleModule";
import dbAnatomyModule from "../modules/dbAnatomyModule";
import db360Module from "../modules/db360Module";
import dbVetrunModule from "../modules/dbVetrunModule";
import dbScbModule from "../modules/dbScbModule";

const app = new Elysia()

  .use(
    cors({
      origin: [
        "https://cmuvc.vet.cmu.ac.th",
        "https://vmtph.vet.cmu.ac.th",
        "https://vetcmurun.vet.cmu.ac.th",
        "https://vmdashboard.vet.cmu.ac.th",
        "https://evaluation.vet.cmu.ac.th",
        // "http://10.209.121.26:8080",
        // "http://10.209.121.21:91",
        // "http://localhost:8080",
        // "http://10.209.10.153:4040/",
      ],
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

  // ✅ Dynamic Static Route รองรับ sub-path ด้วย
  .get("/uploads/*", ({ params }) => {
    const relativePath = params["*"]; // ดึง path หลัง /uploads/
    const filePath = path.join(process.cwd(), "uploads", relativePath);

    if (!existsSync(filePath)) {
      return new Response("File not found", { status: 404 });
    }

    const contentType = mime.lookup(filePath) || "application/octet-stream";

    return new Response(Bun.file(filePath), {
      headers: {
        "Content-Type": contentType,
      },
    });
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
