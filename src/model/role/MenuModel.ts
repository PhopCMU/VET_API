import { t } from "elysia";
// Schema สำหรับ SubMenu
export const SubMenuSchema = t.Object({
  name: t.String(), // ชื่อเมนูย่อย
  icon: t.String(), // ชื่อไอคอน
  part: t.Optional(t.String()), // เส้นทาง (optional)
  position: t.Optional(t.Number()), // ลำดับ (optional)
  menuId: t.String({ format: "uuid" }), // Foreign key UUID
});
export const SubMenuSehemaCyrpto = t.Object({
  encryptedData: t.String(), // ข้อมูลที่เข้ารหัส
  status: t.Number({ default: 200 }), // สถานะการเข้ารหัส
});

export const SubMenuIdSchema = t.Object({
  submenuId: t.String({ format: "uuid" }),
});

// Schema สำหรับ Menu
export const MenuSchema = t.Object({
  name: t.String(), // ชื่อเมนูหลัก
  icon: t.String(), // ชื่อไอคอน
  part: t.Optional(t.String()), // เส้นทาง (optional)
  position: t.Optional(t.Number({ default: 9999 })), // ลำดับ (optional)
});

export const MenuSchemaCyrpto = t.Object({
  encryptedData: t.String(), // ข้อมูลที่เข้ารหัส
  status: t.Number({ default: 200 }), // สถานะการเข้ารหัส
})
  

export const MenuIdSchema = t.Object({
  menuId: t.String({ format: "uuid" }),
});

// Interface สำหรับ SubMenu (เมนูย่อย)
export interface SubMenuModel {
  name: string; // ชื่อเมนูย่อย เช่น "QR Code"
  icon: string; // ชื่อไอคอน เช่น "qrcode"
  part?: string; // เส้นทาง (optional) เช่น "/dashboard/finance/qr-code"
  position?: number; // ลำดับการแสดงผล (optional)
  menuId: string; // Foreign key อ้างอิง Menu
}

export interface SubMenuIdModel {
  submenuId: string;
}

// Interface สำหรับ Menu (เมนูหลัก)
export interface MenuModel {
  name: string; // ชื่อเมนูหลัก เช่น "การเงินและพัสดุ"
  icon: string; // ชื่อไอคอน เช่น "finance"
  part?: string; // เส้นทาง (optional) สำหรับเมนูที่ไม่มี dropdown
  position?: number; // ลำดับการแสดงผล (optional)
  subMenus: SubMenuModel[]; // Array ของเมนูย่อย
}

export interface MenuIdModel {
  menuId: string;
}
