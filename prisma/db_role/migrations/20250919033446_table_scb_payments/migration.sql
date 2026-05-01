-- CreateTable
CREATE TABLE "ScbPayments" (
    "scbId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "payeeProxyId" TEXT NOT NULL,
    "payeeProxyType" TEXT NOT NULL,
    "payeeAccountNumber" TEXT NOT NULL,
    "payerAccountNumber" TEXT NOT NULL,
    "payerName" TEXT NOT NULL,
    "sendingBankCode" TEXT NOT NULL DEFAULT '014',
    "receivingBankCode" TEXT NOT NULL DEFAULT '014',
    "amount" DECIMAL(12,2) NOT NULL,
    "transactionId" TEXT NOT NULL,
    "transactionDateandTime" TIMESTAMP(3) NOT NULL,
    "billPaymentRef1" TEXT NOT NULL,
    "billPaymentRef2" TEXT NOT NULL,
    "billPaymentRef3" TEXT,
    "currencyCode" TEXT NOT NULL,
    "channelCode" TEXT,
    "transactionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScbPayments_pkey" PRIMARY KEY ("scbId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScbPayments_transactionId_key" ON "ScbPayments"("transactionId");
