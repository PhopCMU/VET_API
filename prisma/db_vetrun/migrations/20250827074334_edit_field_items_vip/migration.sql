/*
  Warnings:

  - Made the column `items` on table `Items_vip` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Items_vip" DROP CONSTRAINT "Items_vip_sizeId_fkey";

-- AlterTable
ALTER TABLE "Items_vip" ALTER COLUMN "sizeId" DROP NOT NULL,
ALTER COLUMN "items" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Items_vip" ADD CONSTRAINT "Items_vip_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size_shirt"("shirtId") ON DELETE SET NULL ON UPDATE CASCADE;
