-- AlterTable
ALTER TABLE "SponsersBoot" ALTER COLUMN "updateAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "SponsersParticipant" ALTER COLUMN "updateAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "updateAt" DROP NOT NULL;
