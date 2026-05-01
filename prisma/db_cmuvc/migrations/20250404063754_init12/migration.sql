/*
  Warnings:

  - You are about to drop the column `dayParticipate` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the `PaperAbstract` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `selectdayId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "dayParticipate",
ADD COLUMN     "selectdayId" UUID NOT NULL;

-- DropTable
DROP TABLE "PaperAbstract";

-- CreateTable
CREATE TABLE "SelectDay" (
    "selectdayId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "day" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "SelectDay_selectdayId_key" ON "SelectDay"("selectdayId");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_selectdayId_fkey" FOREIGN KEY ("selectdayId") REFERENCES "SelectDay"("selectdayId") ON DELETE RESTRICT ON UPDATE CASCADE;
