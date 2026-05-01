import CryptoJS from "crypto-js";

const SECRET_KEY =
  process.env.SECRET_KEY_CRYPTO_BACKEND || "your-secret-key-123";

export const decryptMiddleware = (
  encryptedData: string
): Record<string, any> | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    if (!originalText) {
      console.error("Failed to decrypt data: empty or invalid");
      return null;
    }

    return JSON.parse(originalText);
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};

export const decryptMiddlewareParse = (
  encryptedData: string
): Record<string, any> | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);

    if (!originalText) {
      console.error("Failed to decrypt data: empty or invalid");
      return null;
    }

    // พยายาม parse เป็น JSON ก่อน (รูปแบบที่ 1)
    try {
      const parsed = JSON.parse(originalText);
      // หาก parse สำเร็จ → ตรวจสอบว่าเป็น string หรือ object
      if (typeof parsed === "string") {
        return { value: parsed }; // ถ้าเป็น string → ส่งกลับใน field `value`
      }
      if (typeof parsed === "object" && parsed !== null) {
        return parsed; // ถ้าเป็น object → ส่งกลับทั้ง object
      }
    } catch (jsonError) {
      // ถ้า parse ไม่ได้ → ถือว่าเป็น string ธรรมดา (รูปแบบที่ 2)
      console.warn("Not JSON format, treating as plain string", {
        originalText,
      });
      return { value: originalText };
    }

    // ถึงตรงนี้ ถือว่า parse ไม่สำเร็จและไม่ใช่ string → คืน null
    console.error("Decrypted data is neither valid JSON nor plain string", {
      originalText,
    });
    return null;
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};
