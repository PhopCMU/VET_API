-- AlterTable
ALTER TABLE "ThemeTitle" ADD COLUMN     "part" TEXT NOT NULL DEFAULT '/',
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;
