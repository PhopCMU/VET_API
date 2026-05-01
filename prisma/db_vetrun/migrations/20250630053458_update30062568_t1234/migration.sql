/*
  Warnings:

  - You are about to drop the column `contest` on the `Animal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "contest",
ADD COLUMN     "fancys" BOOLEAN NOT NULL DEFAULT false;
