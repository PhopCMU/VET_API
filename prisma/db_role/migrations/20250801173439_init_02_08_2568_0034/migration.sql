/*
  Warnings:

  - The primary key for the `DepartmentMembership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `DepartmentMembership` table. All the data in the column will be lost.
  - The primary key for the `PermissionDepartment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PermissionDepartment` table. All the data in the column will be lost.
  - The primary key for the `UserPermission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserPermission` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PermissionDepartment" DROP CONSTRAINT "PermissionDepartment_userPermissionId_fkey";

-- AlterTable
ALTER TABLE "DepartmentMembership" DROP CONSTRAINT "DepartmentMembership_pkey",
DROP COLUMN "id",
ADD COLUMN     "departmentMembershipId" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "DepartmentMembership_pkey" PRIMARY KEY ("departmentMembershipId");

-- AlterTable
ALTER TABLE "PermissionDepartment" DROP CONSTRAINT "PermissionDepartment_pkey",
DROP COLUMN "id",
ADD COLUMN     "permissionDepartmentId" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "PermissionDepartment_pkey" PRIMARY KEY ("permissionDepartmentId");

-- AlterTable
ALTER TABLE "UserPermission" DROP CONSTRAINT "UserPermission_pkey",
DROP COLUMN "id",
ADD COLUMN     "userPermissionId" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "UserPermission_pkey" PRIMARY KEY ("userPermissionId");

-- AddForeignKey
ALTER TABLE "PermissionDepartment" ADD CONSTRAINT "PermissionDepartment_userPermissionId_fkey" FOREIGN KEY ("userPermissionId") REFERENCES "UserPermission"("userPermissionId") ON DELETE RESTRICT ON UPDATE CASCADE;
