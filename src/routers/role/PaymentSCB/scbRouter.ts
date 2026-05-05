import { Elysia, t } from "elysia";
import {
  ScbControllerAccessToken,
  ScbControllerConfirmClient,
  ScbControllerConfirmWebhook,
  ScbControllerInquiry,
  ScbControllerList,
  ScbControllerQrCode,
  ScbControllerVoid,
  ScbControllerWaitPayment,
  scbWebSocketHandler,
  testPushHandler,
} from "../../../controllers/role/SCB/ScbController";

export const scbRouter = new Elysia({
  prefix: "/api/v1",
  websocket: {
    idleTimeout: 600, // 10 นาที (600 วินาที)
    // perMessageDeflate: true,     // ถ้าต้องการบีบอัด
    // maxPayloadLength: 1024 * 1024, // 1MB
  },
})

  .post("/token", ScbControllerAccessToken)

  .post("/qrcode", ScbControllerQrCode, {
    body: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["SCB"] },
  })

  .get("/inquiry", ScbControllerInquiry, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["SCB"] },
  })

  .post("/confirm/client", ScbControllerConfirmClient, {
    body: t.Object({
      transactionId: t.String(),
    }),
    detail: { tags: ["SCB"] },
  })

  .get("/data", ScbControllerList, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["SCB"] },
  })
  .post("/void", ScbControllerVoid, {
    body: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["SCB"] },
  })

  .post("/confirm", ScbControllerConfirmWebhook, {
    body: t.Any(),
    detail: { tags: ["SCB Webhook Confirm"] },
  })

  .get("/check/wait", ScbControllerWaitPayment, {
    query: t.Object({
      encryptedData: t.String(),
    }),
    detail: { tags: ["SCB"] },
  })

  // WebSocket endpoint
  .ws("/ws", scbWebSocketHandler)

  // Test endpoint
  .get("/test-push", testPushHandler);
