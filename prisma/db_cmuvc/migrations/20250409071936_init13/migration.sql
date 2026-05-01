/*
  Warnings:

  - Added the required column `themeTitleId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "themeTitleId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_themeTitleId_fkey" FOREIGN KEY ("themeTitleId") REFERENCES "ThemeTitle"("mainId") ON DELETE RESTRICT ON UPDATE CASCADE;
