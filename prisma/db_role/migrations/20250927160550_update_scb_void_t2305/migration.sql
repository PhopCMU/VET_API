/*
  Warnings:

  - You are about to drop the column `orRqUID` on the `ScbVoid` table. All the data in the column will be lost.
  - You are about to drop the column `payeeReion` on the `ScbVoid` table. All the data in the column will be lost.
  - Added the required column `createDateTime` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orgRqUID` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeAccountName` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeAccountNumber` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBankFeeAmount` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBankFeeCurrency` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBankID` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBillerCode` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBillerName` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBillerSvcName` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeBillerType` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeProxyId` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeProxyType` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payeeRegion` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerAccountBalance` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerAccountName` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerAccountNumber` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerAccountStatusCode` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerAccountStatusDesc` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerBankFeeAmount` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerBankFeeCurrency` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerRegion` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postedDateTime` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderFeeAmount` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderFeeCurrency` to the `ScbVoid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ScbVoid" DROP COLUMN "orRqUID",
DROP COLUMN "payeeReion",
ADD COLUMN     "createDateTime" TEXT NOT NULL,
ADD COLUMN     "orgRqUID" TEXT NOT NULL,
ADD COLUMN     "payeeAccountName" TEXT NOT NULL,
ADD COLUMN     "payeeAccountNumber" TEXT NOT NULL,
ADD COLUMN     "payeeBankFeeAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "payeeBankFeeCurrency" TEXT NOT NULL,
ADD COLUMN     "payeeBankID" TEXT NOT NULL,
ADD COLUMN     "payeeBillerCode" TEXT NOT NULL,
ADD COLUMN     "payeeBillerName" TEXT NOT NULL,
ADD COLUMN     "payeeBillerSvcName" TEXT NOT NULL,
ADD COLUMN     "payeeBillerType" TEXT NOT NULL,
ADD COLUMN     "payeeProxyId" TEXT NOT NULL,
ADD COLUMN     "payeeProxyType" TEXT NOT NULL,
ADD COLUMN     "payeeRegion" TEXT NOT NULL,
ADD COLUMN     "payerAccountBalance" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "payerAccountName" TEXT NOT NULL,
ADD COLUMN     "payerAccountNumber" TEXT NOT NULL,
ADD COLUMN     "payerAccountStatusCode" TEXT NOT NULL,
ADD COLUMN     "payerAccountStatusDesc" TEXT NOT NULL,
ADD COLUMN     "payerBankFeeAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "payerBankFeeCurrency" TEXT NOT NULL,
ADD COLUMN     "payerRegion" TEXT NOT NULL,
ADD COLUMN     "postedDateTime" TEXT NOT NULL,
ADD COLUMN     "senderFeeAmount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "senderFeeCurrency" TEXT NOT NULL;
