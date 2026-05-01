import { PrismaClient } from "../../../generated/cmuvc";

// กำหนด interface สำหรับ Response เพื่อให้ TypeScript รู้จักโครงสร้างข้อมูล
interface ThemeResponse {
  title?: string; // ปรับตาม schema ของคุณ
  mainId: string;
  Packages: any[]; // หรือกำหนด type ที่เจาะจงกว่านี้ตาม schema
}

// กำหนด type สำหรับการ return ของ function
type ControllerResponse = Promise<ThemeResponse[] | string>;

interface Params {
  mainId: string;
}

const prisma = new PrismaClient();

// เพิ่ม async เพราะ Prisma ทำงานแบบ asynchronous
export const ListThemeController = async ({
  params,
}: {
  params: Params;
}): Promise<ControllerResponse> => {
  try {
    const response = await prisma.themeTitle.findMany({
      where: {
        mainId: params.mainId,
      },

      include: {
        Packages: {
          select: {
            packageId: true,
            category_th: true,
            category_en: true,
            earlyBird: true,
            regularRate: true,
            oneDayParticipant: true,
            endEarlyBird: true,
            endRegularRate: true,
            people: true,
            Participant: {
              select: {
                participantId: true,
                fname: true,
                lname: true,
                price: true,
                ce: true,
                prefix: true,
                phone: true,
                email: true,
                organization: true,
                acc: true,
                payments: true,
                createAt: true,
                packageOneDay: true,
                categorys: {
                  select: {
                    categoryId: true,
                    categoryType: true,
                  },
                },
                foods: {
                  select: {
                    foodId: true,
                    foodType: true,
                  },
                },
                selectday: {
                  select: {
                    selectdayId: true,
                    day: true,
                    month: true,
                    year: true,
                    dayDate: true,
                    createAt: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        position: "asc",
      },
    });

    return response.map((item) => ({
      title: item.title,
      mainId: item.mainId,
      Packages: item.Packages,
    }));
  } catch (e: any) {
    console.error("====================================");
    console.error("Error in ListThemeController:", e);
    console.error("====================================");
    throw new Error(e.message); // เปลี่ยนจาก return เป็น throw เพื่อให้ error handling ดีขึ้น
  } finally {
    await prisma.$disconnect(); // ปิด connection เพื่อป้องกัน memory leak
  }
};
