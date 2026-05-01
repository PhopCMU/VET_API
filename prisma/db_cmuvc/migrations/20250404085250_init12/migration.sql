-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_selectdayId_fkey";

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "selectdayId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_selectdayId_fkey" FOREIGN KEY ("selectdayId") REFERENCES "SelectDay"("selectdayId") ON DELETE SET NULL ON UPDATE CASCADE;
