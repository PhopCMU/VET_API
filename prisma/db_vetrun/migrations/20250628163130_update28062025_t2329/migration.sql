/*
  Warnings:

  - You are about to drop the column `animalId` on the `Participant` table. All the data in the column will be lost.
  - Added the required column `participantId` to the `Animal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Participant" DROP CONSTRAINT "Participant_animalId_fkey";

-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "participantId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "animalId";

-- CreateTable
CREATE TABLE "Option" (
    "optionId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Option_optionId_key" ON "Option"("optionId");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("participantId") ON DELETE RESTRICT ON UPDATE CASCADE;
