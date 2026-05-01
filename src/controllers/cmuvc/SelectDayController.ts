import { PrismaClient } from "../../../generated/cmuvc";

const prisma = new PrismaClient();
export const SelectDayController = async (set: any) => {
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
  console.info(`Select Day`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}] Starting to select day`);
  try {
    const response = prisma.selectDay.findMany({
      orderBy: {
        createAt: "asc",
      },
    });

    console.info(`[${Title}] [${requestTime}] Select day successfully`);
    set.status = 200;
    return response;
  } catch (error: any) {
    console.error(
      `[${Title}] [${requestTime}] Select day failed: ${error.message}`
    );
    if (error.response) {
      console.error(
        `[${Title}] [${requestTime}] Error details: ${JSON.stringify(
          error.response
        )}`
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "Select day failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`*`.repeat(80));
    console.info(`[${Title}] [${requestTime}] process completed`);
    console.info("─".repeat(80));
  }
};
