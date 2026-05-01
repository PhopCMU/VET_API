/*
  Warnings:

  - You are about to drop the column `internshipId` on the `Timetable` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Timetable" DROP CONSTRAINT "Timetable_internshipId_fkey";

-- AlterTable
ALTER TABLE "public"."Timetable" DROP COLUMN "internshipId",
ADD COLUMN     "vetId" UUID;

-- AddForeignKey
ALTER TABLE "public"."Timetable" ADD CONSTRAINT "Timetable_vetId_fkey" FOREIGN KEY ("vetId") REFERENCES "public"."Lecturer_vet"("accountId") ON DELETE SET NULL ON UPDATE CASCADE;
