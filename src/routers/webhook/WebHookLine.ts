// import { Elysia } from "elysia";
// import { sendLineMessage } from "../../services/LineMessageApi";

// interface LineWebhookEvent {
//   type: string;
//   message: {
//     type: string;
//     text?: string;
//   };
//   source: {
//     userId: string;
//   };
// }

// export const webhookRouter = new Elysia({ prefix: "/line" }).post(
//   "/webhook",
//   async ({ body, set }) => {
//     try {
//       console.log("Received Line Webhook:", body);

//       const events = (body as { events: LineWebhookEvent[] }).events;
//       for (const event of events) {
//         if (event.type === "message" && event.message.type === "text") {
//           const userId = event.source.userId;
//           const message = event.message.text;
//           console.log(`User ${userId} sent: ${message}`);

//           // ตัวอย่าง: ตอบกลับผู้ใช้
//           const botToken =
//             "xSZtkEiRzRCp7Z6XZaNm8wLUqDEaBxGG3vzLkSpJ8agyAvHHVQ5BhTSe0etx8BUHhgXXW/fHmb6ow960LJFkf7jY/ezC9pz4bBGzUjG4fw6i5l16EHPbiGSmx+wzkfrVBIhhQStsLCP1NE5/UIB7HQdB04t89/1O/w1cDnyilFU=";
//           await sendLineMessage({
//             botToken,
//             groupId: userId, // หรือ groupId เดิม
//             textMessage: `Received your message: ${message}`,
//           });
//         }
//       }

//       set.status = 200;
//       return { success: true };
//     } catch (error) {
//       console.error("Error in Line webhook:", error);
//       set.status = 500;
//       return { success: false };
//     }
//   }
// );

// export const webhookRouter = new Elysia({ prefix: "/line" }).post(
//   "/webhook",
//   async ({ body, set }) => {
//     console.log("Received Line Webhook:", body);
//     set.status = 200;
//     return { success: true };
//   }
// );
