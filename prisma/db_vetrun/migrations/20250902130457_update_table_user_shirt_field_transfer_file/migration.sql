/*
  Warnings:

  - Added the required column `transferFile` to the `UserSaleShirt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSaleShirt" ADD COLUMN     "transferFile" TEXT NOT NULL;
