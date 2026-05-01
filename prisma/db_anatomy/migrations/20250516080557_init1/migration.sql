-- CreateTable
CREATE TABLE "Student" (
    "studentId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "levelup" TEXT NOT NULL,
    "shcool" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hdb" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "uploadImage" TEXT NOT NULL,
    "uploadPDPA" TEXT NOT NULL,
    "uploadSlip" TEXT NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "Score" (
    "scoreId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "term" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "score" TEXT NOT NULL,
    "studentId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("scoreId")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "certificateId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "downloadUrl" TEXT NOT NULL,
    "studentId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("certificateId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_cardId_key" ON "Student"("cardId");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
