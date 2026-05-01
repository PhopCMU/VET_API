/*
  Warnings:

  - You are about to drop the column `limtit` on the `Option` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Option" DROP COLUMN "limtit",
ADD COLUMN     "limit" INTEGER NOT NULL DEFAULT 0;
