/*
  Warnings:

  - You are about to drop the column `adstractTypeId` on the `AbstractType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[abstractTypeId]` on the table `AbstractType` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Abstract" DROP CONSTRAINT "Abstract_abstractTypeId_fkey";

-- DropIndex
DROP INDEX "AbstractType_adstractTypeId_key";

-- AlterTable
ALTER TABLE "AbstractType" DROP COLUMN "adstractTypeId",
ADD COLUMN     "abstractTypeId" UUID NOT NULL DEFAULT gen_random_uuid();

-- CreateIndex
CREATE UNIQUE INDEX "AbstractType_abstractTypeId_key" ON "AbstractType"("abstractTypeId");

-- AddForeignKey
ALTER TABLE "Abstract" ADD CONSTRAINT "Abstract_abstractTypeId_fkey" FOREIGN KEY ("abstractTypeId") REFERENCES "AbstractType"("abstractTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
