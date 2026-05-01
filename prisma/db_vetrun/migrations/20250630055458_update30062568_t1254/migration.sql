/*
  Warnings:

  - You are about to drop the column `selectModel` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `vipModel` on the `Participant` table. All the data in the column will be lost.
  - You are about to drop the column `vipModelMini` on the `Participant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Participant" DROP COLUMN "selectModel",
DROP COLUMN "vipModel",
DROP COLUMN "vipModelMini";
