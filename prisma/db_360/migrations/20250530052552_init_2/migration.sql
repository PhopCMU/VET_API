/*
  Warnings:

  - You are about to drop the column `agencyId` on the `Evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `topic10` on the `Evaluation` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Evaluation` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Agency` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[accountId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `Evaluation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accounttype_th` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cmuaccount` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname_th` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level1agency_th` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level2agency_th` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positiontitle_th` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_agencyId_fkey";

-- DropForeignKey
ALTER TABLE "Evaluation" DROP CONSTRAINT "Evaluation_userId_fkey";

-- DropIndex
DROP INDEX "User_name_key";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "Evaluation" DROP COLUMN "agencyId",
DROP COLUMN "topic10",
DROP COLUMN "userId",
ADD COLUMN     "accountId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "name",
DROP COLUMN "userId",
ADD COLUMN     "accountId" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD COLUMN     "accounttype_en" TEXT,
ADD COLUMN     "accounttype_th" TEXT NOT NULL,
ADD COLUMN     "cmuaccount" TEXT NOT NULL,
ADD COLUMN     "fullname_en" TEXT,
ADD COLUMN     "fullname_th" TEXT NOT NULL,
ADD COLUMN     "level1agency_en" TEXT,
ADD COLUMN     "level1agency_th" TEXT NOT NULL,
ADD COLUMN     "level2agency_en" TEXT,
ADD COLUMN     "level2agency_th" TEXT NOT NULL,
ADD COLUMN     "level3agency_en" TEXT,
ADD COLUMN     "level3agency_th" TEXT,
ADD COLUMN     "positiontitle_en" TEXT,
ADD COLUMN     "positiontitle_th" TEXT NOT NULL,
ADD COLUMN     "ratenumber" TEXT,
ADD COLUMN     "workingstatus" BOOLEAN NOT NULL DEFAULT true,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("accountId");

-- DropTable
DROP TABLE "Agency";

-- CreateIndex
CREATE UNIQUE INDEX "User_accountId_key" ON "User"("accountId");

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
