/*
  Warnings:

  - Added the required column `participantId` to the `CheckPoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CheckPoint" ADD COLUMN     "participantId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "CheckPoint" ADD CONSTRAINT "CheckPoint_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("participantId") ON DELETE RESTRICT ON UPDATE CASCADE;
