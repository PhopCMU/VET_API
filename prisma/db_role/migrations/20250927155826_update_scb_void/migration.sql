/*
  Warnings:

  - Added the required column `extStatusDesc` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responseCode` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responseCodeDescription` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responseStatus` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScbVoid" ADD COLUMN     "extStatusDesc" TEXT NOT NULL,
ADD COLUMN     "responseCode" TEXT NOT NULL,
ADD COLUMN     "responseCodeDescription" TEXT NOT NULL,
ADD COLUMN     "responseStatus" TEXT NOT NULL;
