-- CreateTable
CREATE TABLE "CheckPoint" (
    "checkPointId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "checkPoint" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckPoint_checkPointId_key" ON "CheckPoint"("checkPointId");
