import { Elysia } from "elysia";
import swagger from "@elysiajs/swagger";
import { studentRouter } from "../src/routers/anatomy/addStudentRouter";

const dbAnatomyModule = new Elysia({ prefix: "/anatomy" })

  .use(
    swagger({
      path: "/docs", // เฉพาะสำหรับ /cmuvc/docs
      documentation: {
        info: {
          title: "Anatomy API Documentation",
          description: "API Anatomy system.",
          version: "1.0.0",
        },
        tags: [
          { name: "Anatomy", description: "UserAnatomy API" },
          { name: "User", description: "User ALL API" },
          { name: "Open Project", description: "Open Project API" },
          { name: "Admin Anatomy", description: "Admin" },
        ],
      },
      swaggerOptions: {
        persistAuthorization: true, // จำข้อมูลการ authenticate
        displayOperationId: true, // แสดง operationId ใน UI
        tryItOutEnabled: true, // เปิดใช้งาน "Try it out" สำหรับทดสอบ API
        docExpansion: "list",
      },
    })
  )

  .use(studentRouter);

export default dbAnatomyModule;
