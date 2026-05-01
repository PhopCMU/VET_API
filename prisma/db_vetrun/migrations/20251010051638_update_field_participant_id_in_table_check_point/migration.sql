/*
  Warnings:

  - A unique constraint covering the columns `[participantId]` on the table `CheckPoint` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CheckPoint_participantId_key" ON "CheckPoint"("participantId");
