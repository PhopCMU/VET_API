import { Context, t } from "elysia";
import axios from "axios";
import { randomUUIDv7 } from "bun";
import { createPartLogger } from "../../../../utils/Logger";
import { rateLimitByIp, getClientIp } from "../../../utils/rateLimiter";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import {
  decryptMiddleware,
  decryptMiddlewareParse,
} from "../../../middleware/decryptMiddleware";
import { PrismaClient } from "../../../../generated/role";

const prisma = new PrismaClient();

const Logger = createPartLogger("/Role/scb");

export const wsClients: any[] = [];

export const ScbControllerAccessToken = async ({
  set,
}: Context & {
  set: any;
}) => {
  try {
    const requestUId = new Date().toString();
    const headers = {
      "Content-Type": "application/json",
      "accept-language": "en",
      requestUId,
      resourceOwnerId: process.env.SCB_CLIENT_ID,
    };

    const payload = {
      applicationKey: process.env.SCB_CLIENT_ID,
      applicationSecret: process.env.SCB_CLIENT_SECRET,
    };

    const response = await axios.post(
      "https://api.partners.scb/partners/v1/oauth/token",
      payload,
      { headers },
    );

    set.status = 200;
    return {
      success: true,
      message: "Get Access Token Success",
      data: response.data?.data,
    };
  } catch (err: any) {
    console.error(
      "Error fetching access token:",
      err.response?.data || err.message,
    );
    set.status = err.response?.status || 500;
    return {
      success: false,
      message: "Failed to get access token",
      error: err.response?.data || err.message,
    };
  }
};

export const ScbControllerQrCode = async ({
  body,
  request,
  jwt,
  set,
}: Context & {
  body: { encryptedData: string };
  request: any;
  set: any;
  jwt: any;
}) => {
  const action = "CREATE_QR_CODE";
  const clientIp = getClientIp(request) || "unknown";

  // ✅ Rate Limit
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    console.debug({ rateLimitResult: rateLimitResult.message, clientIp });
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  // ✅ Authenticate JWT
  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      message: "headers not found",
    };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  // ✅ Validate body
  if (!body || !body.encryptedData) {
    Logger.error(`${action} | BODY_NOT_FOUND`);
    set.status = 400;
    return {
      success: false,
      message: "body not found",
    };
  }

  // ✅ Decrypt data
  const decryptedData = decryptMiddleware(body.encryptedData);
  const { amount, ref1, ref2, ref3, scbToken } = decryptedData as {
    amount: string;
    ref1: string;
    ref2: string;
    ref3: string;
    scbToken: string;
  };

  // ✅ Validate decrypted data
  if (!amount || !ref1 || !ref2 || !scbToken) {
    Logger.error(`${action} | INVALID_DATA`);
    set.status = 400;
    return {
      success: false,
      message: "Invalid data: missing amount, ref1, ref2, or scbToken",
    };
  }

  const checkRef2 = await prisma.scbPayments.findFirst({
    where: {
      billPaymentRef2: ref2,
    },
  });

  if (checkRef2) {
    Logger.error(
      `${action} | ${name_admin} | REF2_ALREADY_EXISTS | SCB ID: ${checkRef2.scbId}`,
    );
    set.status = 400;
    return {
      statusCode: 4000,
      success: false,
      message: "ref2 already exists",
    };
  }

  const BILLER_ID = process.env.SCB_BILLER_ID;
  const API_KEY = process.env.SCB_CLIENT_ID;

  if (!API_KEY || !BILLER_ID) {
    Logger.error(`${action} | MISSING_ENV_CONFIG`);
    set.status = 500;
    return {
      success: false,
      message: "Missing SCB_BILLER_ID or SCB_CLIENT_ID in environment",
    };
  }

  const requestUID = randomUUIDv7();

  const URI = "https://api.partners.scb/partners/v1/payment/qrcode/create";

  try {
    const headers = {
      "Content-Type": "application/json",
      "accept-language": "TH",
      requestUId: requestUID,
      resourceOwnerId: API_KEY,
      authorization: `Bearer ${scbToken}`,
    };

    const payload = {
      qrType: "PP",
      ppType: "BILLERID",
      ppId: BILLER_ID,
      amount: amount,
      ref1: ref1,
      ref2: ref2,
      ref3: ref3,
    };

    Logger.info(`${action} | ${name_admin} | Sending to SCB:`, { payload });

    const response = await axios.post(URI, payload, { headers });

    Logger.info(`${action} | SUCCESS | transaction:`, {
      requestUID,
      ref1,
      ref2,
      ref3,
      amount,
      qrRawData: response.data?.data?.qrRawData?.substring(0, 50) + "...",
    });

    // ✅ Return QR Code data to client
    set.status = 200;
    return {
      success: true,
      message: "Create QR Code Success",
      data: response.data?.data,
    };
  } catch (error: any) {
    Logger.error(`${action} | SCB_API_ERROR`, {
      error: error.message,
      response: error.response?.data,
    });

    if (error.response) {
      set.status = error.response.status;
      return {
        success: false,
        message: "SCB API Error",
        error: error.response.data,
      };
    } else {
      set.status = 500;
      return {
        success: false,
        message: "Failed to create QR code",
        error: error.message,
      };
    }
  }
};

export const ScbControllerConfirmClient = async ({
  body,
  set,
}: Context & { body: { transactionId?: string }; set: any }) => {
  const { transactionId } = body as { transactionId?: string };

  const payment = await prisma.scbPayments.findUnique({
    where: {
      transactionId,
    },
  });

  if (!payment) {
    set.status = 404;
    return {
      resCode: "01",
      resDesc: "Transaction not found",
    };
  }

  set.status = 200;
  return {
    resCode: "00",
    resDesc: "success",
    transactionId: transactionId || "unknown",
    confirmId: payment.scbId,
    data: payment,
  };
};

export const ScbControllerInquiry = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: string; request: any; set: any; jwt: any }) => {
  const action = "FETCH_INQUIRY";
  const clientIp = getClientIp(request) || "unknown";

  // --- Rate Limiting ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      message: "headers not found",
    };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  if (!query.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  let decryptedData;
  try {
    const decodeEndcypto = decodeURIComponent(query.encryptedData);
    decryptedData = decryptMiddleware(decodeEndcypto) as any;
  } catch (e) {
    Logger.error(`${action} | DECRYPT_FAILED`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  if (!decryptedData) {
    Logger.error(`${action} | DECRYPT_RETURNED_NULL`);
    set.status = 403;
    return {
      success: false,
      message: "Decrypt failed",
    };
  }

  const {
    transactionDate,
    scbToken: scbAuthention,
    ref1,
    ref2,
    ref3 = "",
  } = decryptedData;

  const eventCode = "00300100";
  const billerId = process.env.SCB_BILLER_ID;

  try {
    const urlInquiry = `https://api.partners.scb/partners/v1/payment/billpayment/inquiry?eventCode=${eventCode}&billerId=${billerId}&transactionDate=${transactionDate}&reference1=${ref1}&reference2=${ref2}&reference3=${ref3}`;

    const headers = {
      "Content-Type": "application/json",
      "accept-language": "en",
      requestUId: randomUUIDv7(),
      resourceOwnerId: process.env.SCB_CLIENT_ID,
      authorization: `Bearer ${scbAuthention}`,
    };

    const responseInquiry = await axios.get(urlInquiry, { headers });

    const shortData = responseInquiry?.data?.data;
    if (!Array.isArray(shortData) || shortData.length === 0) {
      Logger.error(`${action}| ${name_admin} | INVALID_OR_EMPTY_RESPONSE`);
      set.status = 400;
      return {
        success: false,
        message: "Invalid SCB response",
      };
    }

    const scbRecord = shortData[0];
    const { transactionId } = scbRecord;

    if (!transactionId) {
      Logger.error(`${action}| ${name_admin} | MISSING_TRANSACTION_ID`);
      set.status = 400;
      return {
        success: false,
        message: "Missing transaction ID from SCB",
      };
    }

    // ✅ ใช้ upsert เพื่อป้องกัน race condition และลดโค้ด
    const targetRecord = await prisma.scbPayments.upsert({
      where: { transactionId },
      update: {}, // ไม่ต้องอัปเดตอะไรถ้ามีอยู่แล้ว
      create: {
        payeeProxyId: scbRecord.payeeProxyId,
        payeeProxyType: scbRecord.payeeProxyType,
        payeeAccountNumber: scbRecord.payeeAccountNumber,
        payerAccountNumber: scbRecord.payerAccountNumber,
        payerName: scbRecord.payerName,
        sendingBankCode: scbRecord.sendingBankCode,
        receivingBankCode: scbRecord.receivingBankCode,
        amount: scbRecord.amount,
        transactionId: scbRecord.transactionId,
        transactionDateandTime: scbRecord.transactionDateandTime,
        billPaymentRef1: scbRecord.billPaymentRef1,
        billPaymentRef2: scbRecord.billPaymentRef2,
        billPaymentRef3: scbRecord.billPaymentRef3 || "",
        currencyCode: scbRecord.currencyCode,
        channelCode: scbRecord.channelCode,
        transactionType: scbRecord.transactionType,
        partnerTransactionId: scbRecord.partnerTransactionId,
        createdAt: new Date(),
      },
    });

    const isNewRecord =
      targetRecord.createdAt.getTime() === new Date().getTime();
    if (isNewRecord) {
      Logger.info(
        `${action}| ${name_admin} | RECORD_CREATED: | SCB_ID: ${targetRecord.scbId} | TRANSACTION_ID: ${targetRecord.transactionId}`,
      );
    } else {
      Logger.info(
        `${action}| ${name_admin} | RECORD_ALREADY_EXISTS: | SCB_ID: ${targetRecord.scbId} | TRANSACTION_ID: ${targetRecord.transactionId}`,
      );
    }

    set.status = 200;
    return {
      statusCode: 1000,
      success: true,
      message: "Success",
    };
  } catch (err: any) {
    console.error("SCB API Error:", err.message || err);
    if (err.response) {
      set.status = err.response.status || 500;
      return {
        success: false,
        message: "SCB API Error",
        error: err.response.data,
      };
    } else {
      set.status = 500;
      return {
        success: false,
        message: "Failed to Inquiry QR code",
        error: err.message,
      };
    }
  }
};

export const ScbControllerList = async ({
  jwt,
  set,
  request,
}: Context & { request: any; set: any; jwt: any }) => {
  const action = "SCB_FETCH_LIST";
  const clientIp = getClientIp(request) || "unknown";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({
      rateLimitResult: rateLimitResult.message,
      clientIp,
    });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | HEADERS_NOT_FOUND`);
    set.status = 401;
    return {
      success: false,
      message: "headers not found",
    };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  try {
    const response = await prisma.scbPayments.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        ScbSlipVerification: true,
        ScbVoid: true,
      },
    });

    set.status = 200;
    return {
      success: true,
      message: "Fetch List Success",
      data: response,
    };
  } catch (err: any) {
    console.error("SCB API Error:", err.message || err);

    if (err.response) {
      set.status = err.response.status;
      return {
        success: false,
        message: "SCB API Error",
        error: err.response.data,
      };
    } else {
      set.status = 500;
      return {
        success: false,
        message: "Failed to Inquiry QR code",
        error: err.message,
      };
    }
  }
};

export const ScbControllerVoid = async ({
  body,
  jwt,
  set,
  request,
}: Context & {
  body: { encryptedData: string };
  jwt: any;
  request: any;
  set: any;
}) => {
  const action = "SCB_VOID";
  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  const authToken = request.headers.get("Authorization") ?? "";
  if (!authToken) {
    Logger.error(`${action} | ERROR TOKEN HEADER | ${clientIp}`);
    set.status = 401;
    return { success: false, message: "headers not found" };
  }

  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return { success: false, message: "Authentication failed" };
  }

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  if (!body || !body.encryptedData) {
    Logger.error(`${action}| ${name_admin} | BODY_NOT_FOUND`);
    set.status = 400;
    return { success: false, message: "body not found" };
  }

  const decryptedData = decryptMiddleware(body.encryptedData);
  const { transactionId, transactionDateandTime, amount, scbToken, scbId } =
    decryptedData as {
      scbId?: string;
      transactionId?: string;
      transactionDateandTime?: string;
      amount?: string;
      scbToken?: string;
    };

  // Validate critical fields
  if (!scbId) {
    Logger.error(`${action} | MISSING_SCB_ID`);
    set.status = 400;
    return { success: false, message: "scbId missing" };
  }
  if (!transactionId) {
    Logger.error(`${action} | MISSING_TRANSACTION_ID`);
    set.status = 400;
    return { success: false, message: "transactionId missing" };
  }

  try {
    const urlVoid = `https://api.partners.scb/partners/v1/payment/qrcode/void`;
    const headersVoid = {
      "Content-Type": "application/json",
      "accept-language": "en",
      requestUId: new Date().toISOString(),
      resourceOwnerId: process.env.SCB_CLIENT_ID,
      authorization: `Bearer ${scbToken}`,
    };

    const payload = {
      channelDateTime: transactionDateandTime,
      originalPaymentInformationAndReversal: {
        originalEndToEndIdentification: transactionId,
        originalInstructedAmount: {
          transactionAmount: amount,
          transactionCurrency: "THB",
        },
      },
      bp: {
        reversalType: "ISO20022_CANCELLATION_REQUEST",
      },
    };

    const voidResponse = await axios.post(urlVoid, payload, {
      headers: headersVoid,
    });

    // safety: ยืนยัน structure ของ response
    const respData = voidResponse?.data;
    if (!respData) {
      Logger.error(`${action} | VOID_RESPONSE_DATA_NOT_FOUND`, {
        voidResponse,
      });
      set.status = 500;
      return { success: false, message: "Invalid void response from SCB" };
    }

    // SCB บาง endpoint ห่อข้อมูลหลายชั้น => ดูทั้ง respData.data หรือ respData
    const shortVoidResponse = respData.data ?? respData;

    // safety: ดึง status object อย่างระมัดระวัง
    const statusObj = shortVoidResponse?.status ?? shortVoidResponse;
    if (!statusObj) {
      Logger.error(`${action} | VOID_STATUS_NOT_FOUND`, { shortVoidResponse });
      set.status = 500;
      return {
        success: false,
        message: "Void status not found in SCB response",
      };
    }

    // กำหนด fallback สำหรับฟิลด์ที่อาจเป็น null
    const responseStatus =
      statusObj.responseStatus ?? statusObj.status ?? "Unknown";
    const responseCode = statusObj.responseCode ?? "";
    const responseCodeDescription = statusObj.responseCodeDescription ?? "";
    const extStatusDesc = statusObj.extStatusDesc ?? ""; // <-- ป้องกัน null

    // ตรวจสอบว่า record ของ scbPayments ที่จะ connect มีอยู่จริงไหม
    const existingPayment = await prisma.scbPayments.findUnique({
      where: { scbId },
    });

    if (!existingPayment) {
      Logger.error(`${action} | SCB_PAYMENT_NOT_FOUND`, { scbId });
      set.status = 404;
      return { success: false, message: "Related SCB payment not found" };
    }

    // สร้าง scbVoid (extStatusDesc จะไม่เป็น null เพราะเราให้ fallback "")
    const saveVoid = await prisma.scbVoid.create({
      data: {
        responseStatus,
        responseCode,
        responseCodeDescription,
        extStatusDesc,
        scbPayments: {
          connect: { scbId },
        },
      },
    });

    if (!saveVoid) {
      Logger.error(`${action} | SAVE_VOID_FAILED`);
      set.status = 500;
      return { success: false, message: "Failed to save void record" };
    }

    // อัปเดต scbPayments (set reverseFlag)
    const updateScb = await prisma.scbPayments.update({
      where: { scbId },
      data: { reverseFlag: "R" },
    });

    if (!updateScb) {
      Logger.error(`${action} | UPDATE_SCB_FAILED`, { scbId });
      set.status = 500;
      return { success: false, message: "Failed to update SCB payment" };
    }

    Logger.info(`${action} | VOID_SUCCESS`, { scbId, transactionId });
    set.status = 200;
    return {
      success: true,
      message: responseCodeDescription || "Void success",
      data: { saveVoidId: saveVoid.scbVoidId ?? null },
    };
  } catch (error: any) {
    Logger.error(`${action} | SCB_API_ERROR`, {
      error: error.message,
      response: error.response?.data,
    });

    if (error.response) {
      set.status = error.response.status ?? 500;
      return {
        success: false,
        message: "SCB API Error",
        error: error.response.data,
      };
    } else {
      set.status = 500;
      return {
        success: false,
        message: "Internal server error",
        error: error.message,
      };
    }
  }
};

// SCB Webhook (สำหรับรับข้อมูลการชำระเงินแบบ real-time จาก SCB)

export const ScbControllerConfirmWebhook = async ({
  body,
  set,
}: Context & { body: any; set: any }) => {
  try {
    Logger.info("🚀 Webhook | Incoming SCB payload", body);

    const scbRecord = body;

    if (!scbRecord?.transactionId) {
      Logger.warn("⚠️ Webhook | Missing transactionId");
      set.status = 400;
      return { resCode: "01", resDesc: "Missing transactionId" };
    }

    // ✅ upsert idempotent (กัน duplicate)
    // Logger.info("🔄 Webhook | Upsert payment", scbRecord.transactionId);
    const targetRecord = await prisma.scbPayments.upsert({
      where: { transactionId: scbRecord.transactionId },
      update: {},
      create: {
        payeeProxyId: scbRecord.payeeProxyId,
        payeeProxyType: scbRecord.payeeProxyType,
        payeeAccountNumber: scbRecord.payeeAccountNumber,
        payerAccountNumber: scbRecord.payerAccountNumber,
        payerName: scbRecord.payerName,
        sendingBankCode: scbRecord.sendingBankCode,
        receivingBankCode: scbRecord.receivingBankCode,
        amount: scbRecord.amount,
        transactionId: scbRecord.transactionId,
        transactionDateandTime: scbRecord.transactionDateandTime,
        billPaymentRef1: scbRecord.billPaymentRef1,
        billPaymentRef2: scbRecord.billPaymentRef2,
        billPaymentRef3: scbRecord.billPaymentRef3 || "",
        currencyCode: scbRecord.currencyCode,
        channelCode: scbRecord.channelCode,
        transactionType: scbRecord.transactionType,
        partnerTransactionId: scbRecord.partnerTransactionId || null,
        createdAt: new Date(),
      },
    });
    Logger.info("✅ Webhook | Completed", {
      transactionId: targetRecord.transactionId,
    });

    const payload = {
      transactionId: scbRecord.transactionId,
      transactionDateandTime: scbRecord.transactionDateandTime,
      amount: scbRecord.amount,
      receivingBankCode: scbRecord.receivingBankCode,
      billPaymentRef1: scbRecord.billPaymentRef1,
      billPaymentRef2: scbRecord.billPaymentRef2,
      billPaymentRef3: scbRecord.billPaymentRef3,
      payerName: scbRecord.payerName,
    };

    pushWebSocket({
      type: "payment",
      status: "confirmed",
      data: payload,
    });

    set.status = 200;
    return {
      success: true,
      resCode: "00",
      resDesc: "success",
      transactionId: scbRecord.transactionId,
    };
  } catch (err) {
    Logger.error("❌ Webhook | Error", err);
    set.status = 500;
    return { resCode: "99", resDesc: "internal error" };
  }
};

export const ScbControllerWaitPayment = async ({
  query,
  set,
  request,
  jwt,
}: Context & { request: any; set: any; jwt: any }) => {
  const action = "WAIT_PAYMENT";

  const clientIp = getClientIp(request) || "unknown";

  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429;
    Logger.warn(`${action} | ${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  const authToken = request.headers.get("Authorization");
  const authention = await CheckJWTAuthention(authToken, jwt, set);
  if (!authention) {
    Logger.warn(`${action} | AUTH_FAILED`);
    set.status = 401;
    return { success: false, message: "Authentication failed" };
  }

  const name_admin =
    authention.data.firstname_EN + " " + authention.data.lastname_EN;

  if (!query.encryptedData) {
    Logger.error(`${action} | MISSING_ENCRYPTED_DATA`);
    set.status = 400;
    return { success: false, message: "Missing encrypted data" };
  }

  const decodeEndcypto = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddlewareParse(decodeEndcypto) as any;

  // console.debug(`[decryptMiddleware] | ${decryptedData.value}`);

  if (!decryptedData || !decryptedData.value) {
    Logger.error(`${action} | INVALID_DECRYPTED_DATA`, { decryptedData });
    set.status = 400;
    return { success: false, message: "Invalid encrypted data" };
  }

  const ref2 = decryptedData.value;

  // ✅ แค่เช็คครั้งเดียว — ไม่ต้อง loop
  try {
    const payment = await prisma.scbPayments.findFirst({
      where: {
        billPaymentRef2: ref2,
        receivingBankCode: "014",
      },
      select: {
        transactionId: true,
        amount: true,
        payerName: true,
        transactionDateandTime: true,
      },
    });

    if (payment) {
      Logger.info(`${name_admin} | ✅ Payment confirmed `, { ref2 });
      return {
        success: true,
        status: "success",
        message: "Payment received",
        data: payment,
      };
    }

    // ถ้าไม่เจอ → ตอบกลับว่า "ยังไม่พบ"
    Logger.info("🔍 No payment found yet", { ref2 });
    return {
      success: false,
      status: "pending",
      message: "Payment not received yet",
    };
  } catch (error) {
    Logger.error("❌ DB error in check", { ref2, error });
    set.status = 500;
    return {
      success: false,
      message: "Internal server error",
    };
  }
};

/**
 * WebSocket Handler สำหรับรับการเชื่อมต่อจาก client
 */

// src/controller/scbController.ts

export const scbWebSocketHandler = {
  query: t.Object({
    ref2: t.String({ minLength: 1 }),
    apiKey: t.String(),
  }),

  open(ws: any) {
    const { ref2, apiKey } = ws.data.query;

    const VALID_API_KEY = process.env.SCB_API_KEY;

    if (!VALID_API_KEY || apiKey !== VALID_API_KEY) {
      ws.send(JSON.stringify({ error: "Invalid API Key" }));
      ws.close();
      return;
    }

    wsClients.push(ws);
    console.log(`📡 Connected with ref2: ${ref2}`);
  },

  close(ws: any) {
    const idx = wsClients.indexOf(ws);
    if (idx !== -1) wsClients.splice(idx, 1);
    console.log(`❌ WebSocket disconnected`);
  },

  message(ws: any, message: string) {
    try {
      const parsed = JSON.parse(message);
      ws.send(JSON.stringify({ echo: parsed, time: Date.now() }));

      // 🚫 อย่าปิดทันที!
      ws.close();
    } catch {
      ws.send(JSON.stringify({ error: "Invalid JSON" }));
      ws.close(); // อย่าปิด
    }
  },
};

// ส่ง event ไปยังทุก WebSocket client ------
export const pushWebSocket = (data: any) => {
  console.log(`📣 Pushing to ${wsClients.length} WebSocket clients`);
  for (const client of wsClients) {
    try {
      client.send(JSON.stringify(data));
    } catch (error) {
      console.error("❌ Failed to send WS message:", error);
      // (optional) ลบ client ที่ error ออก
    }
  }
};

/* แบบ ไม่ต้องใส่ API Key
export const scbWebSocketHandler = {
  // ✅ ตรวจสอบ query string: ต้องมี ref2
  query: t.Object({
    ref2: t.String({ minLength: 1, maxLength: 100 }),
  }),

  open(ws: any) {
    const { ref2 } = ws.data.query;
    wsClients.push(ws);
    console.log(`📡 WebSocket connected with ref2: ${ref2}`);
  },

  close(ws: any) {
    const idx = wsClients.indexOf(ws);
    if (idx !== -1) wsClients.splice(idx, 1);
    console.log(`❌ WebSocket disconnected`);
  },

  // รับ message จาก client (optional)
  message(ws: any, message: string) {
    // ถ้า client ส่ง JSON มา — ตอบกลับ echo
    try {
      const parsed = JSON.parse(message);
      ws.send(JSON.stringify({ echo: parsed, time: Date.now() }));
      ws.close();
    } catch {
      ws.send(JSON.stringify({ error: "Invalid JSON" }));
      ws.close();
    }
  },
};
*/

/**
 * Endpoint สำหรับทดสอบส่ง event
 */
export const testPushHandler = () => {
  const payload = {
    transactionId: "1004231957286212527723804509",
    amount: "500.00",
    billPaymentRef1: "BILL001",
    billPaymentRef2: "REF002",
    billPaymentRef3: "REF003",
    payerName: "นาย ภพ มูรพันธุ์",
    transactionDateandTime: "2025-10-04T23:20:03.000+07:00",
    receivingBankCode: "014",
  };

  pushWebSocket({
    type: "payment",
    status: "confirmed",
    data: payload,
  });

  return {
    status: "ok",
    message: "Payload sent to WebSocket",
    payload,
  };
};

/* Slip Verification 

let transRef = shortData[0].fastEasySlipNumber;

 let targetRecordVerification = null; // จะเก็บ record ที่ใช้งาน (ทั้งกรณีมีอยู่แล้ว หรือเพิ่งสร้าง)
    let isNewRecordVerification = false;

    const existingRecordVerification =
      await prisma.scbSlipVerification.findFirst({
        where: {
          scbId: targetRecord.scbId,
        },
      });

    if (existingRecordVerification) {
      Logger.info(
        `${action}| ${name_admin} | RECORD_VERIFICATION_ALREADY_EXISTS: | SCB_ID: ${existingRecordVerification.scbId} | SCB_VERIFICATION_ID: ${existingRecordVerification.scbVerificationId}`
      );
      targetRecordVerification = existingRecordVerification; // ใช้ record เดิม
    } else {
      const newRecordVerification = await prisma.scbSlipVerification.create({
        data: {
          scbId: targetRecord.scbId,
          transTime: responseVerification.data.data.transTime,
          transRef: responseVerification.data.data.transRef,
          displayName: responseVerification.data.data.sender.displayName,
          bankType: responseVerification.data.data.sender.account.value,
          bankName: responseVerification.data.data.sender.account.type,
          transDate: responseVerification.data.data.transDate,
          createdAt: new Date(),
        },
      });

      if (!newRecordVerification) {
        Logger.error(
          `${action}| ${name_admin} | SAVE_VERIFICATION_FAILED_TO_DB`
        );
        set.status = 4003;
        return {
          success: false,
          message: "Save Verification failed to DB",
        };
      }

      Logger.info(
        `${action}| ${name_admin} | RECORD_CREATED: | SCB_ID: ${newRecordVerification.scbId} | SCB_VERIFICATION_ID: ${newRecordVerification.scbVerificationId}`
      );

      targetRecordVerification = newRecordVerification;
      isNewRecordVerification = true;
    }

    if (targetRecordVerification && targetRecord) {
      Logger.info(
        `${action}| ${name_admin} | RECORD_UPDATED: | SCB_ID: ${targetRecord.scbId} | SCB_VERIFICATION_ID: ${targetRecordVerification.scbVerificationId}`
      );
    }


**/
