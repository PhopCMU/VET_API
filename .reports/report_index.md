# Code Review & Bug Fix Report — VET_API

**Date:** 2026-05-01  
**Reviewer:** GitHub Copilot  
**Scope:** `src/`, `modules/`, `middleware/`, `utils/`

---

## Summary

| # | Severity | File | Bug | Status |
|---|----------|------|-----|--------|
| 1 | 🔴 Critical | `src/middleware/authAndDecrypt.ts` | `remoteAddr` ใช้โดยไม่ได้ประกาศ → ReferenceError ที่ runtime | ✅ Fixed |
| 2 | 🔴 Security | `src/routers/role/LoggerWebsocket.ts` | Path Traversal: params ไม่ถูก sanitize ก่อนสร้าง log path | ✅ Fixed |
| 3 | 🟠 High | `src/controllers/role/AuthenticationController.ts` | Missing `return` หลัง env var check → execute ต่อโดยไม่หยุด (x2 controller) | ✅ Fixed |
| 4 | 🟠 High | `src/controllers/role/AuthenticationController.ts` | Missing `return` หลัง `accessToken` not found → ส่ง undefined กลับ (x2 controller) | ✅ Fixed |
| 5 | 🟡 Medium | `src/controllers/role/AuthenticationController.ts` | `durationMs: Date.now() - new Date().getTime()` = 0 เสมอ (x2 controller) | ✅ Fixed |
| 6 | 🟡 Medium | `src/controllers/role/AuthenticationController.ts` | Typo: `messsage` → `message` ใน response key (x2 controller) | ✅ Fixed |
| 7 | 🟡 Medium | `src/controllers/role/PaymentController.ts` | Dead code: โค้ดทั้งบล็อกไม่ถูก execute เพราะ `return` อยู่ก่อน | ✅ Fixed |

---

## Bug Details

### Bug 1 — Critical: `remoteAddr` ไม่ได้ประกาศ
**File:** `src/middleware/authAndDecrypt.ts`  
**Function:** `authWithRateLimit`

ตัวแปร `remoteAddr` ถูกใช้ใน Logger แต่ไม่ได้ประกาศในฟังก์ชัน — มีแค่ `clientIp` เท่านั้น ส่งผลให้เกิด `ReferenceError` ทุกครั้งที่ request ไม่มี Authorization header หรือ JWT ไม่ valid

```diff
- Logger.error(`${action} | IP=${remoteAddr} | HEADERS_NOT_FOUND`);
+ Logger.error(`${action} | IP=${clientIp} | HEADERS_NOT_FOUND`);

- Logger.warn(`${action} | IP=${remoteAddr} | AUTH_FAILED`);
+ Logger.warn(`${action} | IP=${clientIp} | AUTH_FAILED`);
```

---

### Bug 2 — Security: Path Traversal ใน Logger endpoint
**File:** `src/routers/role/LoggerWebsocket.ts`  
**Endpoint:** `GET /role/logger/logs/:folder/:service/:file`

params `folder`, `service`, `file` ถูกนำไปสร้าง path โดยตรงด้วย `path.join()` — ผู้ใช้สามารถใช้ `../../` เพื่อเข้าถึงไฟล์นอก `logs/` ได้

```diff
- const logPath = path.join(LOGS_BASE, folder, service, `${file}.log`);
+ const logPath = path.resolve(LOGS_BASE, folder, service, `${file}.log`);
+ if (!logPath.startsWith(LOGS_BASE + path.sep)) {
+   set.status = 403;
+   return { error: "Forbidden" };
+ }
```

---

### Bug 3 — High: Missing `return` หลัง env var validation
**File:** `src/controllers/role/AuthenticationController.ts`  
**Functions:** `AuthenticationController`, `Authentication360Controller`

เมื่อ env vars ไม่ครบ — set status 400 แล้วแต่ **ไม่ return** ทำให้ยังรันต่อและ `axios.post()` ถูกเรียกโดย `tokenUrl=""`, `clientId=undefined` ฯลฯ

```diff
  if (!clientId || !clientSecret || !redirectUri || !tokenUrl || !scope) {
    set.status = 400;
    authenLogger.error(...);
+   return { success: false, message: "Server configuration error" };
  }
```

---

### Bug 4 — High: Missing `return` หลัง `accessToken` not found
**File:** `src/controllers/role/AuthenticationController.ts`

เมื่อ Microsoft ไม่ส่ง `access_token` กลับมา — log error แต่ไม่ return → ฟังก์ชันส่ง `undefined` กลับไป (status ยังคง 200)

```diff
  if (!accessToken) {
    authenLogger.error(`[${action}]  No access token found in the response.`);
+   set.status = 502;
+   return { success: false, message: "No access token received" };
  }
```

---

### Bug 5 — Medium: `durationMs` ใน `finally` ได้ค่า 0 เสมอ
**File:** `src/controllers/role/AuthenticationController.ts`

```diff
- durationMs: Date.now() - new Date().getTime()  // ทั้งสองค่าถูกคำนวณพร้อมกัน = 0 เสมอ
+ // ต้อง capture startTime ต้นฟังก์ชัน
+ const startTime = Date.now();
  ...
+ durationMs: Date.now() - startTime
```

---

### Bug 6 — Medium: Typo `messsage` ใน response
**File:** `src/controllers/role/AuthenticationController.ts`

Key ใน object response สะกดผิด ทำให้ client ได้รับ `messsage` แทน `message`

```diff
- return { success: false, messsage: "Code is required" };
+ return { success: false, message: "Code is required" };
```

---

### Bug 7 — Medium: Dead code ใน `PaymentController`
**File:** `src/controllers/role/PaymentController.ts`

มี `return` อยู่กลางฟังก์ชัน ทำให้ทุกบรรทัดหลังจากนั้น (axios call, qrCode check, final return) ไม่ถูก execute เลย โค้ดส่วน integration กับ Payment Gateway จึงไม่มีผล

**Action:** ย้าย stub return ลง และ comment-out dead integration code เพื่อความชัดเจน

---

## Files Changed

| File | Changes |
|------|---------|
| `src/middleware/authAndDecrypt.ts` | Fix `remoteAddr` → `clientIp` (2 lines) |
| `src/routers/role/LoggerWebsocket.ts` | Add path traversal guard |
| `src/controllers/role/AuthenticationController.ts` | Fix 5 bugs: return early, startTime, typo |
| `src/controllers/role/PaymentController.ts` | Remove dead code |

---

## Notes

- `src/index.ts` — ✅ ไม่พบ bug (path traversal ถูก fix ก่อนหน้าแล้ว)
- `src/middleware/decryptMiddleware.ts` — ✅ โค้ด decrypt ปลอดภัย
- `src/utils/rateLimiter.ts` — ✅ rate limit logic ถูกต้อง
- `modules/*.ts` — ✅ ไม่พบ bug ในระดับ module registration
