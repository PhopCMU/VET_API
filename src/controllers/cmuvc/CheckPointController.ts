import { Context, t } from "elysia";
import { PrismaClient } from "../../../generated/cmuvc";
import { authWithRateLimit_NOTJWT } from "../../middleware/authAndDecrypt";

const prisma = new PrismaClient();

export const wsClients: any[] = [];



// แปลงวันที่ให้เป็น 00:00:00 เวลาของไทย
const toDateOnly = (dateStr: string) => {
    const [month, day, year] = dateStr.split("/").map(Number);
    // local time 00:00:00
    const local = new Date(year, month - 1, day, 0, 0, 0, 0);
    // convert to UTC midnight of Thailand
    return new Date(local.getTime() - local.getTimezoneOffset() * 60000);
  };

const getTodayRange = () => {
  const now = new Date(); // server ตั้งเป็น Asia/Bangkok อยู่แล้ว
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  return { start, end };
};

/*
export const CheckPointList = async (set: any) => {
  const newDate = new Date().toLocaleDateString(); // mm/dd/yyyy

  const todayDateObj = toDateOnly(newDate);

  // map วันที่ → field ในฐานข้อมูล
  const dateToFieldMap: Record<string, string> = {
    "12/8/2025": "day8",
    "12/9/2025": "day9",
    "12/10/2025": "day10",
    "12/11/2025": "day11",
    "12/12/2025": "day12",
  };

  const field = dateToFieldMap[newDate];

  if (!field) {
    console.log("วันนี้ไม่ตรงกับวันที่ lockCheckin");
    return [];
  }


  // สร้าง where แบบ dynamic
  const whereCondition = {
    [field]: todayDateObj,
  };

  const res = await prisma.timetable.findMany({
    where: whereCondition,
    select: {
      day8: true,
      day9: true,
      day10: true,
      day11: true,
      day12: true,
      participant: {
        select: {
          fname: true,
          lname: true,
          ce: true,
        },
      },
      sponsersParticipant: {
        select: {
          fname: true,
          lname: true,
          ce: true,
        },
      },
      sponsersBoot: {
        select: {
          fname: true,
          lname: true,
          ce: true,
        },
      },
      vet: {
        select: {
          fname: true,
          lname: true,
          number_ce: true,
        },
      },
      students: {
        select: {
          fname: true,
          lname: true,
          level: true,
        },
      },
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const cleanData = res.map((item: any) => {
    const userSource =
      item.participant ||
      item.sponsersParticipant ||
      item.sponsersBoot ||
      item.vet ||
      item.students;

    return {
      name: `${userSource.fname} ${userSource.lname}`,
      updatedAt:
        item.day8 || item.day9 || item.day10 || item.day11 || item.day12,
    };
  });

  set.status = 200;
  console.log("Clean Data:", cleanData);
  return cleanData;
};
*/

export const CheckPointList = async (set: any) => {
  const newDate = new Date().toLocaleDateString(); // mm/dd/yyyy (local)
  const dateToFieldMap: Record<string, string> = {
    "12/8/2025": "day8",
    "12/9/2025": "day9",
    "12/10/2025": "day10",
    "12/11/2025": "day11",
    "12/12/2025": "day12",
  };

  const field = dateToFieldMap[newDate];
  if (!field) {
    console.log("วันนี้ไม่ตรงกับวันที่ lockCheckin");
    return [];
  }

  const { start, end } = getTodayRange();

  const res = await prisma.timetable.findMany({
    where: {
      [field]: {
        gte: start,
        lt: end,
      },
    },
    select: {
      day8: true,
      day9: true,
      day10: true,
      day11: true,
      day12: true,
      updateAt: true,
      participant: {
        select: { fname: true, lname: true, ce: true },
      },
      sponsersParticipant: {
        select: { fname: true, lname: true, ce: true },
      },
      sponsersBoot: {
        select: { fname: true, lname: true, ce: true },
      },
      vet: {
        select: { fname: true, lname: true, number_ce: true },
      },
      students: {
        select: { fname: true, lname: true, level: true },
      },
    },
    orderBy: { updateAt: "desc" }, // อัปเดตล่าสุดอยู่บนสุด
  });

 const cleanData = res
  .map((item: any) => {
    const userSource =
      item.participant ||
      item.sponsersParticipant ||
      item.sponsersBoot ||
      item.vet ||
      item.students;

    if (!userSource) {
      // ไม่มีคนผูกกับ timetable แถวนี้ ข้ามหรือทำ default
      return null;
    }

    const fname = userSource.fname ?? "";
    const lname = userSource.lname ?? "";

    return {
      name: `${fname} ${lname}`.trim() || "Unknown",
      updatedAt:
        item.day8 || item.day9 || item.day10 || item.day11 || item.day12,
    };
  })
  .filter((x: any) => x !== null);


  set.status = 200;
  return cleanData;
};

export const CheckPointController = async ({
  body,
  set,
  request,
}: Context & {
  body: { id: string; type: string; title: string };
  set: any;
  request: any;
}) => {
  const action = "CHECK_POINT";
  const authention = await authWithRateLimit_NOTJWT(request, set, action);
  if (!authention.success) {
    return {
      success: false,
      message: authention.message,
    };
  }

  // const ip = authention.ip;

  const { id, type, title } = body;
  const newDate = new Date().toLocaleDateString();

  const lockCheckin = [
    "12/8/2025",
    "12/9/2025",
    "12/10/2025",
    "12/11/2025",
    "12/12/2025",
  ];

  // const lockCheckin = [
  //   "12/1/2025",
  //   "12/9/2025",
  //   "12/10/2025",
  //   "12/11/2025",
  //   "12/12/2025",
  // ];

 

  // ตรวจสอบวันที่ก่อน
  if (!lockCheckin.includes(newDate)) {
    set.status = 500;
    return {
      status: false,
      message: "Date is not within the specified range.",
    };
  }

  // ฟังก์ชันเลือก field ที่ใช้ lookup ตาม type
  const getWhereClauseByType = (type: string, id: string) => {
    switch (type) {
      case "participant":
        return { participantId: id };
      case "vetcmu":
        return { vetId: id };
      case "student":
        return { studentsId: id };
      case "sponser_booth":
        return { sponsersBootId: id };
      case "sponser_participant":
        return { sponsersParticipantId: id };
      case "abstract":
        return { abstractId: id };
      default:
        throw new Error(`❌ ไม่รู้จักประเภท type: ${type}`);
    }
  };

  // สร้าง where clause อัตโนมัติ
  const whereClause = getWhereClauseByType(type, id);

  // หา timetable เดิมของ type นั้น
  const existingTimetable = await prisma.timetable.findFirst({
    where: whereClause,
  });

  let checkPoint;

  // อัปเดตตาม title
  if (title === "pre") {
    const updateData = {
      day8:
        newDate === lockCheckin[0]
          ? toDateOnly(newDate)
          : existingTimetable?.day8 || null,
      day9:
        newDate === lockCheckin[1]
          ? toDateOnly(newDate)
          : existingTimetable?.day9 || null,
      day10:
        newDate === lockCheckin[2]
          ? toDateOnly(newDate)
          : existingTimetable?.day10 || null,
    };

    if (existingTimetable) {
      checkPoint = await prisma.timetable.update({
        where: { timetableId: existingTimetable.timetableId },
        data: updateData,
      });
    } else {
      checkPoint = await prisma.timetable.create({
        data: {
          ...whereClause,
          ...updateData,
        },
      });
    }
  } else if (title === "main") {
    const updateData = {
      day11:
        newDate === lockCheckin[3]
          ? toDateOnly(newDate)
          : existingTimetable?.day11 || null,
      day12:
        newDate === lockCheckin[4]
          ? toDateOnly(newDate)
          : existingTimetable?.day12 || null,
    };

    if (existingTimetable) {
      checkPoint = await prisma.timetable.update({
        where: { timetableId: existingTimetable.timetableId },
        data: updateData,
      });
    } else {
      checkPoint = await prisma.timetable.create({
        data: {
          ...whereClause,
          ...updateData,
        },
      });
    }
  }

  pushWebSocketCheckPoint({
    message: "CheckPoint updated",
    timestamp: new Date(),
    status: "completed",
    data: checkPoint,
  });

  set.status = 200;
  return {
    success: true,
    message: "Check-in Success",
  };
  // console.log("✅ Timetable updated:", checkPoint);
};

export const cmuvcWebSocketCheckPoint = {
  query: t.Object({
    mainId: t.String(),
  }),

  open: async (ws: any) => {
    // console.log("query =", ws.data.query);
    const { mainId } = ws.data.query;

    console.log(`WebSocket connection opened with mainId: ${mainId}`);

    const check = await prisma.themeTitle.findFirst({
      where: { mainId },
    });

    if (!check) {
      ws.close(1008, "Invalid mainId");
      return;
    }

    wsClients.push(ws);
  },

  // ✅ แก้พารามิเตอร์ตรงนี้
  close(ws: any, code: number, message?: string) {
    const idx = wsClients.indexOf(ws);
    if (idx !== -1) wsClients.splice(idx, 1);

    console.log(
      `WebSocket connection closed (code: ${code})${
        message ? ` - ${message}` : ""
      }`
    );
  },

  message(ws: any, message: string) {
    try {
      console.log(`Received message: ${message}`);
      const parsedMessage = JSON.parse(message);

      ws.send(
        JSON.stringify({
          success: true,
          data: parsedMessage,
          timestamp: new Date(),
        })
      );
    } catch (error) {
      ws.send(
        JSON.stringify({ success: false, message: "Invalid message format" })
      );
      ws.close(1003, "Invalid message format");
    }
  },
};

export const pushWebSocketCheckPoint = (data: any) => {
  try {
    wsClients.forEach((client) => {
      client.send(
        JSON.stringify({ success: true, data, timestamp: new Date() })
      );
    });
  } catch (error) {
    console.error("Error pushing WebSocket message:", error);
  }
};

export const exampleCheckPointUpdate = async () => {
  const payload = {
    message: "CheckPoint updated",
    timestamp: new Date(),
    firstName: "John", // แก้ frist
    lastName: "Doe",
    phone: "123-456-7890",
  };

  console.debug("Pushing example CheckPoint update via WebSocket:", payload);
  pushWebSocketCheckPoint({
    message: "CheckPoint updated",
    timestamp: new Date(),
    status: "completed",
    data: payload,
  });

  return { success: true, message: "WebSocket message pushed" };
};

export const ListNameAllPre = async ({ set }: Context & { set: any }) => {
  const action = "FETCH_NAME_ALL";
  const themeTitleId = "ce291973-8980-4a7c-9ab4-13a684aea33b"; // CMU VC 2024
  try {
    const participants = await prisma.participant.findMany({
      where: {
        payments: true,
        themeTitleId: themeTitleId,
      },
      select: {
        participantId: true,
        fname: true,
        lname: true,
        packages: true,
      },
    });

    const sponsersParticipant = await prisma.sponsersParticipant.findMany({
      where: {
        payments: true,
        themeTitleId: themeTitleId,
      },
      select: {
        sponserParticipantId: true,
        fname: true,
        lname: true,
        packages: true,
      },
    });

    const sponsersBooth = await prisma.sponsersBoot.findMany({
      where: {
        payments: true,
      },
      select: {
        sponserBootId: true,
        fname: true,
        lname: true,
      },
    });

    const vetcmu = await prisma.lecturer_vet.findMany({
      select: {
        accountId: true,
        fname: true,
        lname: true,
      },
    });

    const names = [
      ...participants
        .filter((p) => !p.lname.includes("-") && !p.fname.includes("Free"))
        .map((p) => ({
          id: p.participantId,
          firstName: p.fname,
          lastName: p.lname,
          type: "participant",
          package: p.packages.category_en,
        })),
      ...sponsersParticipant
        .filter((s) => !s.lname.includes("-") && !s.fname.includes("Free"))
        .map((s) => ({
          id: s.sponserParticipantId,
          firstName: s.fname,
          lastName: s.lname,
          type: "sponser_participant",
        })),
      ...sponsersBooth
        .filter((b) => !b.lname.includes("-") && !b.fname.includes("Free"))
        .map((b) => ({
          id: b.sponserBootId,
          firstName: b.fname,
          lastName: b.lname,
          type: "sponser_booth",
        })),
      ...vetcmu.map((l) => ({
        id: l.accountId,
        firstName: l.fname,
        lastName: l.lname,
        type: "vetcmu",
      })),
    ];

    set.status = 200;
    return { success: true, data: names, total: names.length };
  } catch (error) {
    console.error(`Error in ${action}:`, error);
    return {
      success: false,
      message: `Error fetching names: ${error}`,
    };
  }
};

export const ListNameAllMain = async ({ set }: Context & { set: any }) => {
  const action = "FETCH_NAME_ALL";
  const themeTitleId = "522b5662-ebc8-45b7-bfaa-350d8fff66a4"; // CMU VC 2024
  try {
    const participants = await prisma.participant.findMany({
      where: {
        payments: true,
        themeTitleId: themeTitleId,
      },
      select: {
        participantId: true,
        fname: true,
        lname: true,
        packages: true,
      },
    });

    const sponsersParticipant = await prisma.sponsersParticipant.findMany({
      where: {
        payments: true,
        themeTitleId: themeTitleId,
      },
      select: {
        sponserParticipantId: true,
        fname: true,
        lname: true,
        packages: true,
      },
    });

    const sponsersBooth = await prisma.sponsersBoot.findMany({
      where: {
        payments: true,
      },
      select: {
        sponserBootId: true,
        fname: true,
        lname: true,
      },
    });

    const vetcmu = await prisma.lecturer_vet.findMany({
      select: {
        accountId: true,
        fname: true,
        lname: true,
      },
    });

    const students = await prisma.students.findMany({
      select: {
        studentId: true,
        fname: true,
        lname: true,
        level: true,
      },
    });

    const abstract = await prisma.abstract.findMany({
      where: {
        payments: true,
        statusAbstract: "Accepted",
      },
      select: {
        abstractId: true,
        fname: true,
        lname: true,
        abstractType: true,
      },
    });

    const names = [
      ...participants
        .filter((p) => !p.lname.includes("-") && !p.fname.includes("Free"))
        .map((p) => ({
          id: p.participantId,
          firstName: p.fname,
          lastName: p.lname,
          type: "participant",
          package: p.packages.category_en,
        })),
      ...sponsersParticipant
        .filter((s) => !s.lname.includes("-") && !s.fname.includes("Free"))
        .map((s) => ({
          id: s.sponserParticipantId,
          firstName: s.fname,
          lastName: s.lname,
          type: "sponser_participant",
        })),
      ...sponsersBooth
        .filter((b) => !b.lname.includes("-") && !b.fname.includes("Free"))
        .map((b) => ({
          id: b.sponserBootId,
          firstName: b.fname,
          lastName: b.lname,
          type: "sponser_booth",
        })),
      ...vetcmu.map((l) => ({
        id: l.accountId,
        firstName: l.fname,
        lastName: l.lname,
        type: "vetcmu",
      })),
      ...students.map((s) => ({
        id: s.studentId,
        firstName: s.fname,
        lastName: s.lname,
        level: s.level,
        type: "student",
      })),
      ...abstract.map((a) => ({
        id: a.abstractId,
        firstName: a.fname,
        lastName: a.lname,
        type: "abstract",
      })),
    ];

    set.status = 200;
    return { success: true, data: names, total: names.length };
  } catch (error) {
    console.error(`Error in ${action}:`, error);
    return {
      success: false,
      message: `Error fetching names: ${error}`,
    };
  }
};
