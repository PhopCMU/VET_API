/*
  Warnings:

  - You are about to drop the column `payeeAccountName` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeAccountNumber` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBankFeeAmount` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBankFeeCurrency` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBankID` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBillerCode` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBillerName` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBillerSvcName` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeBillerType` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeProxyAccountName` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeProxyId` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeProxyType` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeRegion` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerAccountBalance` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerAccountCurrency` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerAccountName` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerAccountNumber` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerAccountStatusCode` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerAccountStatusDesc` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerBankFeeAmount` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerBankFeeCurrency` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payerRegion` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `senderFeeAmount` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `senderFeeCurrency` on the `ScbVoid` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ScbVoid" DROP COLUMN "payeeAccountName",
DROP COLUMN "payeeAccountNumber",
DROP COLUMN "payeeBankFeeAmount",
DROP COLUMN "payeeBankFeeCurrency",
DROP COLUMN "payeeBankID",
DROP COLUMN "payeeBillerCode",
DROP COLUMN "payeeBillerName",
DROP COLUMN "payeeBillerSvcName",
DROP COLUMN "payeeBillerType",
DROP COLUMN "payeeProxyAccountName",
DROP COLUMN "payeeProxyId",
DROP COLUMN "payeeProxyType",
DROP COLUMN "payeeRegion",
DROP COLUMN "payerAccountBalance",
DROP COLUMN "payerAccountCurrency",
DROP COLUMN "payerAccountName",
DROP COLUMN "payerAccountNumber",
DROP COLUMN "payerAccountStatusCode",
DROP COLUMN "payerAccountStatusDesc",
DROP COLUMN "payerBankFeeAmount",
DROP COLUMN "payerBankFeeCurrency",
DROP COLUMN "payerRegion",
DROP COLUMN "senderFeeAmount",
DROP COLUMN "senderFeeCurrency";
