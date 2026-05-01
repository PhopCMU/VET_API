/*
  Warnings:

  - You are about to drop the column `departmentId` on the `DepartmentMembership` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `PermissionDepartment` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,subDepartmentId]` on the table `DepartmentMembership` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userPermissionId,subDepartmentId]` on the table `PermissionDepartment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subDepartmentId` to the `DepartmentMembership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subDepartmentId` to the `PermissionDepartment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DepartmentMembership" DROP CONSTRAINT "DepartmentMembership_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "PermissionDepartment" DROP CONSTRAINT "PermissionDepartment_departmentId_fkey";

-- DropIndex
DROP INDEX "DepartmentMembership_userId_departmentId_key";

-- DropIndex
DROP INDEX "PermissionDepartment_userPermissionId_departmentId_key";

-- AlterTable
ALTER TABLE "DepartmentMembership" DROP COLUMN "departmentId",
ADD COLUMN     "subDepartmentId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "PermissionDepartment" DROP COLUMN "departmentId",
ADD COLUMN     "subDepartmentId" UUID NOT NULL;

-- DropTable
DROP TABLE "Department";

-- CreateTable
CREATE TABLE "MainDepartment" (
    "mainDepartmentId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name_EN" TEXT,
    "name_TH" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MainDepartment_pkey" PRIMARY KEY ("mainDepartmentId")
);

-- CreateTable
CREATE TABLE "SubDepartment" (
    "subDepartmentId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name_EN" TEXT,
    "name_TH" TEXT NOT NULL,
    "mainDepartmentId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubDepartment_pkey" PRIMARY KEY ("subDepartmentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "MainDepartment_name_TH_key" ON "MainDepartment"("name_TH");

-- CreateIndex
CREATE UNIQUE INDEX "SubDepartment_name_TH_key" ON "SubDepartment"("name_TH");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentMembership_userId_subDepartmentId_key" ON "DepartmentMembership"("userId", "subDepartmentId");

-- CreateIndex
CREATE UNIQUE INDEX "PermissionDepartment_userPermissionId_subDepartmentId_key" ON "PermissionDepartment"("userPermissionId", "subDepartmentId");

-- AddForeignKey
ALTER TABLE "SubDepartment" ADD CONSTRAINT "SubDepartment_mainDepartmentId_fkey" FOREIGN KEY ("mainDepartmentId") REFERENCES "MainDepartment"("mainDepartmentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentMembership" ADD CONSTRAINT "DepartmentMembership_subDepartmentId_fkey" FOREIGN KEY ("subDepartmentId") REFERENCES "SubDepartment"("subDepartmentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionDepartment" ADD CONSTRAINT "PermissionDepartment_subDepartmentId_fkey" FOREIGN KEY ("subDepartmentId") REFERENCES "SubDepartment"("subDepartmentId") ON DELETE RESTRICT ON UPDATE CASCADE;
