import axios from "axios";
import { PrismaClient } from "../../../generated/role";
import { Context } from "elysia";

const prisma = new PrismaClient();

export const PaymentController = async ({
  body,
  set,
}: Context & { body: any }) => {
  try {
    const { amount, refId, order_id, description } = body;

    const paymentData = {
      amount: amount,
      refId: refId,
      order_id: order_id,
      description: description,
      payment_method: "QR",
    };

    // TODO: Replace stub with real Payment Gateway integration
    // const scbResponse = await axios.post(
    //   "https://payment-gateway.onrender.com",
    //   paymentData,
    //   {
    //     headers: {
    //       Authorization: "Bearer " + process.env.PAYMENT_TOKEN,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const qrCode = scbResponse.data.qrCode || scbResponse.data.paymentUrl;
    // if (!qrCode) {
    //   set.status = 500;
    //   return { success: false, message: "เกิดข้อผิดพลาดในการส่งข้อมูลไปยัง Payment Gateway" };
    // }
    set.status = 200;
    return {
      success: true,
      message: "success",
      qr_data: "https://payment-gateway.onrender.com",
      transaction_id: "TWS55668",
      data: paymentData,
    };
  } catch (e: any) {
    set.status = 500;
    console.error("====================================");
    console.error("Error in AbstractsController_AbstractType:", e);
    console.error("====================================");
  } finally {
    await prisma.$disconnect();
  }
};

export const PaymentStatusController = async ({
  params,
}: {
  params: { transactionId: string };
}) => {
  try {
    const transactionId = params.transactionId;
    if (transactionId) {
      const msg = "SUCCESS"; // ส่งข้อมูลไปยัง Payment Gateway SCB API เพื่อตรวจสอบ สถานะการชําระเงิน โดยใช้ transactionId
      return {
        status: msg,
      };
    }
  } catch (e: any) {
    console.error("====================================");
    console.error("Error in AbstractsController_AbstractType:", e);
    console.error("====================================");
  } finally {
    await prisma.$disconnect();
  }
};
