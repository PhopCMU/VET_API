// import axios from "axios";

// interface TextMessage {
//   type: "text";
//   text: string;
// }

// interface ImageMessage {
//   type: "image";
//   originalContentUrl: string;
//   previewImageUrl: string;
// }

// type LineMessage = TextMessage | ImageMessage;

// const LINE_API_URL = "https://api.line.me/v2/bot/message/push";

// export const sendLineMessage = async ({
//   botToken,
//   groupId,
//   textMessage,
// }: {
//   botToken: string;
//   groupId: string;
//   textMessage: string;
// }) => {
//   try {
//     const messages: LineMessage[] = [{ type: "text", text: textMessage }];
//     const response = await axios.post(
//       LINE_API_URL,
//       { to: groupId, messages },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${botToken}`,
//         },
//       }
//     );
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error("Error sending LINE text message:", error);
//     throw new Error("Failed to send LINE text message");
//   }
// };

// export const sendLineImageMessage = async ({
//   botToken,
//   groupId,
//   textMessage,
//   imagePath,
// }: {
//   botToken: string;
//   groupId: string;
//   textMessage: string;
//   imagePath: string;
// }) => {
//   try {
//     const imageUrl = `${
//       process.env.BASE_URL || "http://localhost:3000"
//     }/uploads/dataCmuvc/abstracts/${imagePath}`;
//     const messages: LineMessage[] = [
//       { type: "text", text: textMessage },
//       {
//         type: "image",
//         originalContentUrl: imageUrl,
//         previewImageUrl: imageUrl,
//       },
//     ];
//     const response = await axios.post(
//       LINE_API_URL,
//       { to: groupId, messages },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${botToken}`,
//         },
//       }
//     );
//     return { success: true, data: response.data };
//   } catch (error) {
//     console.error("Error sending LINE image message:", error);
//     throw new Error("Failed to send LINE image message");
//   }
// };
