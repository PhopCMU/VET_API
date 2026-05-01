import { PrismaClient } from "../../../generated/cmuvc";

const prisma = new PrismaClient();
export const FoodsController = async (set: any) => {
  const requestTime = new Date().toLocaleString("th-TH", {
    timeZone: "Asia/Bangkok",
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const Title = "CMUVC";

  console.info(`-`.repeat(80));
  console.info(`Foods type`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}]  Starting fetch Foods type`);
  try {
    const response = prisma.foods.findMany({
      select: {
        foodId: true,
        foodType: true,
      },
      orderBy: {
        createAt: "asc",
      },
    });
    set.status = 200;
    if (response) {
      console.info(`[${Title}] [${requestTime}] Fetch Foods type successfully`);
      return response;
    }
  } catch (e: any) {
    console.error(
      `[${Title}] [${requestTime}] Error in ParticipantList_All: ${e.message}\nStack: ${e.stack}`
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}]  process completed`);
    console.info("─".repeat(80));
  }
};
