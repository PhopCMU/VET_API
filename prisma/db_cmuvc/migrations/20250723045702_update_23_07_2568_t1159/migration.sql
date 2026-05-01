-- CreateTable
CREATE TABLE "Personnel" (
    "personnelId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Personnel_personnelId_key" ON "Personnel"("personnelId");
