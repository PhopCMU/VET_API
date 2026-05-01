-- CreateTable
CREATE TABLE "ScbSlipVerification" (
    "scbVerificationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "scbId" UUID NOT NULL,
    "transTime" TEXT NOT NULL,
    "transRef" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "bankType" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "transDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScbSlipVerification_pkey" PRIMARY KEY ("scbVerificationId")
);

-- CreateTable
CREATE TABLE "ScbVoid" (
    "scbVoidId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "scbId" UUID NOT NULL,
    "bpReference" TEXT NOT NULL,
    "orRqUID" TEXT NOT NULL,
    "payeeReion" TEXT NOT NULL,
    "payeeProxyAccountName" TEXT NOT NULL,
    "payerAccountCurrency" TEXT NOT NULL,
    "xRequestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScbVoid_pkey" PRIMARY KEY ("scbVoidId")
);

-- AddForeignKey
ALTER TABLE "ScbSlipVerification" ADD CONSTRAINT "ScbSlipVerification_scbId_fkey" FOREIGN KEY ("scbId") REFERENCES "ScbPayments"("scbId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScbVoid" ADD CONSTRAINT "ScbVoid_scbId_fkey" FOREIGN KEY ("scbId") REFERENCES "ScbPayments"("scbId") ON DELETE RESTRICT ON UPDATE CASCADE;
