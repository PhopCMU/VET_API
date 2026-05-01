/*
  Warnings:

  - A unique constraint covering the columns `[firstName,lastName]` on the table `Participant` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Items_vip" (
    "itemId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "participantId" UUID NOT NULL,
    "sizeId" UUID NOT NULL,
    "items" TEXT,
    "model_shirt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Items_vip_itemId_key" ON "Items_vip"("itemId");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_firstName_lastName_key" ON "Participant"("firstName", "lastName");

-- AddForeignKey
ALTER TABLE "Items_vip" ADD CONSTRAINT "Items_vip_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("participantId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items_vip" ADD CONSTRAINT "Items_vip_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size_shirt"("shirtId") ON DELETE RESTRICT ON UPDATE CASCADE;
