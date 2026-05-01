/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `fname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `organization` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cmuitaccount]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cmuitaccount` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cmuitaccount_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname_EN` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname_TH` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itaccounttype_EN` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itaccounttype_TH` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itaccounttype_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname_EN` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname_TH` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_code` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_name_EN` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_name_TH` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prename_EN` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prename_TH` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prename_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "fname",
DROP COLUMN "lname",
DROP COLUMN "organization",
ADD COLUMN     "cmuitaccount" TEXT NOT NULL,
ADD COLUMN     "cmuitaccount_name" TEXT NOT NULL,
ADD COLUMN     "firstname_EN" TEXT NOT NULL,
ADD COLUMN     "firstname_TH" TEXT NOT NULL,
ADD COLUMN     "itaccounttype_EN" TEXT NOT NULL,
ADD COLUMN     "itaccounttype_TH" TEXT NOT NULL,
ADD COLUMN     "itaccounttype_id" TEXT NOT NULL,
ADD COLUMN     "lastname_EN" TEXT NOT NULL,
ADD COLUMN     "lastname_TH" TEXT NOT NULL,
ADD COLUMN     "organization_code" TEXT NOT NULL,
ADD COLUMN     "organization_name_EN" TEXT NOT NULL,
ADD COLUMN     "organization_name_TH" TEXT NOT NULL,
ADD COLUMN     "organization_vet" TEXT,
ADD COLUMN     "organization_vet_id" TEXT,
ADD COLUMN     "prename_EN" TEXT NOT NULL,
ADD COLUMN     "prename_TH" TEXT NOT NULL,
ADD COLUMN     "prename_id" TEXT NOT NULL,
ADD COLUMN     "student_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_cmuitaccount_key" ON "User"("cmuitaccount");
