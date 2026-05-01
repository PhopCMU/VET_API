/*
  Warnings:

  - You are about to drop the column `bpReference` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `createDateTime` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `orgRqUID` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `postedDateTime` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `xRequestId` on the `ScbVoid` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ScbVoid" DROP COLUMN "bpReference",
DROP COLUMN "createDateTime",
DROP COLUMN "orgRqUID",
DROP COLUMN "postedDateTime",
DROP COLUMN "xRequestId";
