-- CreateTable
CREATE TABLE "Evaluation_B" (
    "evaluationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "topic1" INTEGER,
    "topic2" INTEGER,
    "topic3" INTEGER,
    "topic4" INTEGER,
    "topic5" INTEGER,
    "topic6" INTEGER,
    "topic7" INTEGER,
    "topic8" INTEGER,
    "topic9" INTEGER,
    "topic10" INTEGER,
    "topic11" INTEGER,
    "topic12" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" UUID NOT NULL,
    "comment" TEXT,
    "fullname_th" TEXT,
    "assessor" TEXT,

    CONSTRAINT "Evaluation_B_pkey" PRIMARY KEY ("evaluationId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Evaluation_B_evaluationId_key" ON "Evaluation_B"("evaluationId");

-- AddForeignKey
ALTER TABLE "Evaluation_B" ADD CONSTRAINT "Evaluation_B_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "User"("accountId") ON DELETE RESTRICT ON UPDATE CASCADE;
