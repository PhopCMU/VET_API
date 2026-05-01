import { PrismaClient } from "../../generated/role";

const prisma = new PrismaClient();

interface RateLimitStore {
  count: number;
  lastReset: number;
}

const rateLimitStore = new Map<string, RateLimitStore>();
const MAX_REQUESTS_PER_SECOND = 5; // requests per second
const RESET_INTERVAL_MS = 1000; // 1 second
const BLOCK_DURATION_MS = 5 * 60 * 1000; // 5 minutes

const formatDateThaiTZ = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const obj: any = {};
  parts.forEach((p) => (obj[p.type] = p.value));
  return `${obj.year}-${obj.month}-${obj.day} time ${obj.hour}:${obj.minute}`;
};

export const getClientIp = (request: Request): string => {
  const xff =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("X-Forwarded-For");
  if (xff) {
    return xff.split(",")[0].trim();
  }
  const xrip =
    request.headers.get("x-real-ip") || request.headers.get("X-Real-IP");
  if (xrip) return xrip.trim();
  const forwarded = request.headers.get("forwarded");
  if (forwarded) {
    const m = forwarded.match(/for=([^;]+)/i);
    if (m && m[1]) return m[1].replace(/\"/g, "").trim();
  }
  return "anonymous";
};

export const rateLimitByIp = async (
  request: Request,
): Promise<{ success: boolean; message?: string }> => {
  const ipKey = getClientIp(request) || "anonymous";
  const now = Date.now();

  // Check block record
  const existingBlock = await prisma.visitorBlock.findUnique({
    where: { visitorId: ipKey },
  });

  if (existingBlock && existingBlock.unblockAt.getTime() > now) {
    return {
      success: false,
      message: `You are blocked until ${formatDateThaiTZ(
        existingBlock.unblockAt,
      )} (Thailand time).`,
    };
  }

  // Remove expired block
  if (existingBlock && existingBlock.unblockAt.getTime() <= now) {
    await prisma.visitorBlock.delete({
      where: { visitorId: ipKey },
    });
  }

  // Rate limit calculation
  const record = rateLimitStore.get(ipKey);

  if (!record || now - record.lastReset >= RESET_INTERVAL_MS) {
    rateLimitStore.set(ipKey, { count: 1, lastReset: now });
    return { success: true };
  }

  if (record.count >= MAX_REQUESTS_PER_SECOND) {
    const unblockAt = new Date(now + BLOCK_DURATION_MS);
    await prisma.visitorBlock.upsert({
      where: { visitorId: ipKey },
      create: {
        visitorId: ipKey,
        blockedAt: new Date(now),
        unblockAt,
      },
      update: {
        blockedAt: new Date(now),
        unblockAt,
      },
    });
    return {
      success: false,
      message: `You have been blocked for 5 minutes (until ${formatDateThaiTZ(
        unblockAt,
      )} Thailand time).`,
    };
  }

  // Increment count
  record.count += 1;
  rateLimitStore.set(ipKey, record);

  return { success: true };
};
