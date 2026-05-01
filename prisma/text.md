# 🧩 Prisma Multi-Database Migration Guide (Bun + PostgreSQL)

## ⚙️ การ Migrate แยกฐานข้อมูล (DB1 & DB2)

### **DB 1**

```bash
bunx prisma migrate dev --name init_db1 --schema=./prisma/db1/schema.prisma
```

### **DB 2**

```bash
bunx prisma migrate dev --name init_db2 --schema=./prisma/db2/schema.prisma
```

---

## 📄 ตัวอย่าง schema.prisma

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL_CMUVC")
}

generator client {
  provider = "prisma-client-js"
  output   = "../../generated/cmuvc"
}
```

---

## 🌍 การตั้งค่าใน `.env`

```env
DATABASE_URL_1="postgresql://user:password@localhost:5432/db1"
DATABASE_URL_2="postgresql://user:password@localhost:5432/db2"
```

---

## 🧠 หากเกิด Error หรือหา Database ไม่เจอ ให้ใช้คำสั่งนี้

```bash
npx prisma generate --schema=./prisma/db1/schema.prisma
bunx prisma generate --schema=./prisma/db2/schema.prisma
```

---

## 🔢 คำสั่งในการรันเลขลำดับ (Sequence) ใน PostgreSQL

```sql
CREATE SEQUENCE exam_seat_number_seq START WITH 1;
ALTER SEQUENCE exam_seat_number_seq RESTART WITH 1;
```

> ✅ ใช้รันก่อนสร้าง table หรือหลัง reset ลำดับ primary key ก็ได้

---

**📘 สรุป:**  
ไฟล์นี้ช่วยให้คุณแยกฐานข้อมูล Prisma ออกเป็นหลายชุด schema ได้ชัดเจน รองรับทั้ง PostgreSQL หลาย DB และการ generate client แยกตามชื่อ DB
