/*
  Warnings:

  - You are about to drop the column `r_oth` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `r_poi` on the `Role` table. All the data in the column will be lost.
  - Added the required column `r_poi_id` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `r_poi_name` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "r_oth",
DROP COLUMN "r_poi",
ADD COLUMN     "r_oth_id" INTEGER[],
ADD COLUMN     "r_oth_name" TEXT[],
ADD COLUMN     "r_poi_id" INTEGER NOT NULL,
ADD COLUMN     "r_poi_name" TEXT NOT NULL;
