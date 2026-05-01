import { Elysia } from "elysia";
import { PrismaClient } from "../../../generated/cmuvc";

const prisma = new PrismaClient();
export const themesRouter = new Elysia({ prefix: "/themes" }).get(
  "/",
  () => {
    const response = prisma.themeTitle.findMany({
      include: {
        Packages: {
          select: {
            category_en: true,
            category_th: true,
            earlyBird: true,
            regularRate: true,
            endEarlyBird: true,
            endRegularRate: true,
            oneDayParticipant: true,
            packageId: true,
            people: true,
            position: true,
            themeTitleId: true,
            createAt: true,
            updateAt: true,
            Participant: {
              select: {
                participantId: true,
              },
            },
          },
          orderBy: {
            position: "asc",
          },
        },
      },
      orderBy: {
        position: "asc",
      },
    });
    return response;
  },
  { detail: { tags: ["Themes"] } }
);
