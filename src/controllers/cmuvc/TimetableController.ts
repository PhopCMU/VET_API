/*
// สมมติ input มี id และ data ที่ต้องการบันทึก
const input = {
  participantId: 'some-participant-id',
  dataToSave: new Date(), // ข้อมูลที่จะบันทึกลง field เช่น day8
};

// 1. ดึงวันที่ปัจจุบัน
const now = new Date();

// 2. หา record ใน Datetable ที่ตรงกับวันนี้
const todayRecord = await prisma.datetable.findFirst({
  where: {
    date: {
      gte: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
      lte: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
    },
  },
});

if (!todayRecord) {
  throw new Error('ไม่มีการตั้งค่าวันที่สำหรับวันนี้ใน Datetable');
}

// 3. ดึง field name เช่น "day8" จาก date_text
const targetField = todayRecord.date_text; // เช่น "day8"

if (!['day8', 'day9', 'day10', 'day11', 'day12'].includes(targetField)) {
  throw new Error(`field ${targetField} ไม่รองรับ`);
}

// 4. หา record ใน Timetable ที่ match participantId
const existingTimetable = await prisma.timetable.findFirst({
  where: { participantId: input.participantId },
});

let updatedTimetable;

if (existingTimetable) {
  // มีอยู่แล้ว → อัปเดตเฉพาะ field ที่ตรงกัน เช่น day8
  updatedTimetable = await prisma.timetable.update({
    where: { timetableId: existingTimetable.timetableId },
    data: {
      [targetField]: input.dataToSave,
    },
  });
} else {
  // ยังไม่มี → สร้างใหม่
  updatedTimetable = await prisma.timetable.create({
    data: {
      participantId: input.participantId,
      [targetField]: input.dataToSave,
    },
  });
}

console.log('บันทึกเรียบร้อย:', updatedTimetable);

*/
