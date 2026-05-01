import { Elysia } from "elysia";
import { themesRouter } from "../src/routers/cmuvc/themes_router";
import { packagesRouter } from "../src/routers/cmuvc/packages_router";
import { foodsRouter } from "../src/routers/cmuvc/foods_router";
import { categoryRouter } from "../src/routers/cmuvc/categorys_router";
import { participantRouter } from "../src/routers/cmuvc/participant_router";
import { abstractsRouter } from "../src/routers/cmuvc/abstracts_router";
import swagger from "@elysiajs/swagger";

const dbCmuvcModule = new Elysia({ prefix: "/cmuvc" })
  .use(
    swagger({
      path: "/docs", // เฉพาะสำหรับ /cmuvc/docs
      documentation: {
        info: {
          title: "CMUVC API Documentation",
          description: "API CMUVC system.",
          version: "1.0.0",
          contact: {
            name: "CMUVC Support",
            email: "support@cmuvc.ac.th",
          },
        },
        tags: [
          { name: "Permissions", description: "Manage access permissions" },
          { name: "Themes", description: "Manage visual themes" },
          { name: "Packages", description: "Manage service packages" },
          { name: "Foods", description: "Manage food items and menus" },
          { name: "Categories", description: "Manage item categories" },
          { name: "Participants", description: "Manage event participants" },
          { name: "Abstracts", description: "Manage abstract submissions" },
          { name: "Email", description: "Manage email notifications" },
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

  .use(themesRouter)
  .use(packagesRouter)
  .use(foodsRouter)
  .use(categoryRouter)
  .use(participantRouter)
  .use(abstractsRouter);

export default dbCmuvcModule;
