-- CreateTable
CREATE TABLE "VisitorBlock" (
    "blockId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "visitorId" TEXT NOT NULL,
    "blockedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unblockAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitorBlock_pkey" PRIMARY KEY ("blockId")
);

-- CreateIndex
CREATE UNIQUE INDEX "VisitorBlock_visitorId_key" ON "VisitorBlock"("visitorId");
