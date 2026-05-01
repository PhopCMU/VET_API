-- CreateEnum
CREATE TYPE "Types" AS ENUM ('Diamond', 'Platinum', 'Gold', 'Silver', 'Bronze');

-- CreateTable
CREATE TABLE "Sponsor" (
    "sponsorId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "image" TEXT,
    "link" TEXT,
    "price" TEXT,
    "type" "Types" NOT NULL DEFAULT 'Bronze',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Sponsor_sponsorId_key" ON "Sponsor"("sponsorId");
