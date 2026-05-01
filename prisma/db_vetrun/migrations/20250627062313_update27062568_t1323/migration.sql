/*
  Warnings:

  - Added the required column `point` to the `Size_shirt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Size_shirt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Size_shirt" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "point" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
