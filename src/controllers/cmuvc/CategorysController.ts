import { PrismaClient } from "../../../generated/cmuvc";

const prisma = new PrismaClient();
export const CatgorysController = async (set: any) => {
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
  console.info(`Categorys type`);
  console.info(`-`.repeat(80));
  console.info(`[${Title}] [${requestTime}]  Starting fetch Categorys type`);
  try {
    const response = prisma.categorys.findMany({
      select: {
        categoryId: true,
        categoryType: true,
        createAt: true,
        updateAt: true,
      },

      orderBy: {
        createAt: "asc",
      },
    });
    console.info(
      `[${Title}] [${requestTime}]  Fetch Categorys type successfully`
    );
    set.status = 200;
    return response;
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
