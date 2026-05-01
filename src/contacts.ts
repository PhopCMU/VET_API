// ตรวจสอบและกรองอีเมลที่ถูกต้องอย่างเคร่งครัด
export const ADMIN_EMAILS: string[] = [
  process.env.ADMIN_EMAIL_1,
  process.env.ADMIN_EMAIL_2,
  process.env.ADMIN_EMAIL_3,
  process.env.ADMIN_EMAIL_4,
].filter((email): email is string => {
  return typeof email === "string" && email.includes("@");
});

// ตรวจสอบว่ามีอีเมลอย่างน้อย 1 อีเมล
if (ADMIN_EMAILS.length === 0) {
  console.warn("ไม่มีอีเมลผู้ดูแลระบบที่ถูกต้องใน environment variables");
}
