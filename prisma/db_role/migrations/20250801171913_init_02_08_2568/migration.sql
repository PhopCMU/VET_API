/*
  Warnings:

  - The primary key for the `SubMenu` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `submenuid` on the `SubMenu` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `MenuAccess` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubMenuAccess` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AccessScope" AS ENUM ('ALL', 'BY_DEPARTMENT', 'BY_RESPONSIBILITY', 'RESTRICTED');

-- DropForeignKey
ALTER TABLE "MenuAccess" DROP CONSTRAINT "MenuAccess_menuId_fkey";

-- DropForeignKey
ALTER TABLE "MenuAccess" DROP CONSTRAINT "MenuAccess_roleId_fkey";

-- DropForeignKey
ALTER TABLE "SubMenu" DROP CONSTRAINT "SubMenu_menuId_fkey";

-- DropForeignKey
ALTER TABLE "SubMenuAccess" DROP CONSTRAINT "SubMenuAccess_roleId_fkey";

-- DropForeignKey
ALTER TABLE "SubMenuAccess" DROP CONSTRAINT "SubMenuAccess_submenuId_fkey";

-- DropForeignKey
ALTER TABLE "SubMenuAccess" DROP CONSTRAINT "SubMenuAccess_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "SubMenu" DROP CONSTRAINT "SubMenu_pkey",
DROP COLUMN "submenuid",
ADD COLUMN     "submenuId" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "SubMenu_pkey" PRIMARY KEY ("submenuId");

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId";

-- DropTable
DROP TABLE "MenuAccess";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "SubMenuAccess";

-- CreateTable
CREATE TABLE "Department" (
    "departmentId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" TEXT NOT NULL,
    "name_EN" TEXT NOT NULL,
    "name_TH" TEXT NOT NULL,
    "parentCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("departmentId")
);

-- CreateTable
CREATE TABLE "DepartmentMembership" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "departmentId" UUID NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DepartmentMembership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPermission" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,
    "submenuId" UUID NOT NULL,
    "projectId" UUID,
    "view" BOOLEAN NOT NULL DEFAULT false,
    "create" BOOLEAN NOT NULL DEFAULT false,
    "edit" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,
    "accessScope" "AccessScope" NOT NULL DEFAULT 'RESTRICTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PermissionDepartment" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userPermissionId" UUID NOT NULL,
    "departmentId" UUID NOT NULL,

    CONSTRAINT "PermissionDepartment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Department_code_key" ON "Department"("code");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentMembership_userId_departmentId_key" ON "DepartmentMembership"("userId", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPermission_userId_submenuId_projectId_key" ON "UserPermission"("userId", "submenuId", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "PermissionDepartment_userPermissionId_departmentId_key" ON "PermissionDepartment"("userPermissionId", "departmentId");

-- AddForeignKey
ALTER TABLE "DepartmentMembership" ADD CONSTRAINT "DepartmentMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepartmentMembership" ADD CONSTRAINT "DepartmentMembership_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("departmentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenu" ADD CONSTRAINT "SubMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_submenuId_fkey" FOREIGN KEY ("submenuId") REFERENCES "SubMenu"("submenuId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPermission" ADD CONSTRAINT "UserPermission_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("projectId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionDepartment" ADD CONSTRAINT "PermissionDepartment_userPermissionId_fkey" FOREIGN KEY ("userPermissionId") REFERENCES "UserPermission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionDepartment" ADD CONSTRAINT "PermissionDepartment_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("departmentId") ON DELETE RESTRICT ON UPDATE CASCADE;
