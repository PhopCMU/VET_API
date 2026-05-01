-- CreateTable
CREATE TABLE "Agency" (
    "agencyId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("agencyId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "evaluationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "agencyId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "topic1" INTEGER,
    "topic2" INTEGER,
    "topic3" INTEGER,
    "topic4" INTEGER,
    "topic5" INTEGER,
    "topic6" INTEGER,
    "topic7" INTEGER,
    "topic8" INTEGER,
    "topic9" INTEGER,
    "topic10" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("evaluationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Agency_agencyId_key" ON "Agency"("agencyId");

-- CreateIndex
CREATE UNIQUE INDEX "Agency_name_key" ON "Agency"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Evaluation_evaluationId_key" ON "Evaluation"("evaluationId");

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("agencyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evaluation" ADD CONSTRAINT "Evaluation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
