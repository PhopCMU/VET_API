-- CreateTable
CREATE TABLE "Lecturer_vet" (
    "accountId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "number_ce" TEXT DEFAULT '00-00000/0000',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_vet_accountId_key" ON "Lecturer_vet"("accountId");
