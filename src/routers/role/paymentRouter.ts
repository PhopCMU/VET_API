import { Elysia } from "elysia";
import { PaymentController, PaymentStatusController } from "../../controllers/role/PaymentController";

export const paymentRouter = new Elysia({ prefix: "/payment" }).post(
  "/qr-code",
  PaymentController,
  { detail: { tags: ["Payment"] } }
);


export const paymentStatusRouter = new Elysia({ prefix: "/payment" }).get(
  "/status/:transactionId",
  PaymentStatusController,
  { detail: { tags: ["Payment"] } }
);