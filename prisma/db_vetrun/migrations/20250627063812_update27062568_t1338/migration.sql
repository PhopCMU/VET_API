/*
  Warnings:

  - You are about to drop the `Registration` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `selectModel` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_animalId_fkey";

-- DropForeignKey
ALTER TABLE "Registration" DROP CONSTRAINT "Registration_participantId_fkey";

-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "animalId" UUID,
ADD COLUMN     "selectModel" TEXT NOT NULL,
ADD COLUMN     "vipModel" TEXT,
ADD COLUMN     "vipModelMini" TEXT,
ADD COLUMN     "year" TEXT NOT NULL;

-- DropTable
DROP TABLE "Registration";

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("animalId") ON DELETE SET NULL ON UPDATE CASCADE;
