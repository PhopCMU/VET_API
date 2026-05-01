import { Elysia } from "elysia";
import {
  paymentRouter,
  paymentStatusRouter,
} from "../src/routers/role/paymentRouter";
import swagger from "@elysiajs/swagger";
import { menuRouter } from "../src/routers/role/menuRouter";
import { projectRouter } from "../src/routers/role/projectRouter";
import { authenticationRouter } from "../src/routers/role/authenticationRouter";
import { userRouter } from "../src/routers/role/userRouter";
import jwt from "@elysiajs/jwt";
import { roleUserRouter } from "../src/routers/role/360/userRouter";
import { abstractRouter } from "../src/routers/role/cmuvc/abstractRouter";
import { cmuvcPaymentRouter } from "../src/routers/role/cmuvc/paymentRouter";
import { vetrunPaymentRouter } from "../src/routers/role/vetrun/participantRouter";
import { cmuvcStudents } from "../src/routers/role/cmuvc/studentRouter";
import { cmuvcVet } from "../src/routers/role/cmuvc/vetRouter";
import { departmentRouter } from "../src/routers/role/DepartmentRouter";
import { loggerHttpPlugin } from "../src/routers/role/LoggerWebsocket";

import { cmuvcParticipant } from "../src/routers/role/cmuvc/participantRouter";
import { cmuvcPersonnel } from "../src/routers/role/cmuvc/personnelRouter";

const dbRoleModule = new Elysia({ prefix: "/role" })
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET_KEY ?? "",
    })
  )
  .use(
    swagger({
      path: "/docs",
      documentation: {
        info: {
          title: "Role API Documentation",
          description: "API Role system.",
          version: "1.0.0",
          contact: {
            name: "Role Support",
            email: "support@role.ac.th",
            url: "https://vmcmu.vet.cmu.ac.th",
          },
        },

        tags: [
          { name: "Payment", description: "Manage payment transactions" },
          { name: "PaymentStatus", description: "Track payment statuses" },
          { name: "Menu", description: "Manage navigation menus" },
          { name: "Project", description: "Manage project details" },
        ],
      },

      swaggerOptions: {
        persistAuthorization: true,
        displayOperationId: true,
        tryItOutEnabled: true,
        docExpansion: "list",
      },
    })
  )

  .use(paymentRouter)
  .use(paymentStatusRouter)
  .use(projectRouter)
  .use(authenticationRouter)
  .use(userRouter)
  .use(menuRouter)
  .use(roleUserRouter)
  .use(departmentRouter)

  .use(abstractRouter)
  .use(cmuvcPaymentRouter)
  .use(cmuvcStudents)
  .use(cmuvcVet)
  .use(cmuvcPersonnel)
  .use(cmuvcParticipant)

  .use(vetrunPaymentRouter)

  .use(loggerHttpPlugin);

export default dbRoleModule;
