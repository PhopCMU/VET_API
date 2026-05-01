/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Companys" (
    "companyId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Datetable" (
    "datetableId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "date_text" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "SponsersParticipant" (
    "sponserParticipantId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "categoryId" UUID NOT NULL,
    "companyId" UUID NOT NULL,
    "packagesId" UUID NOT NULL,
    "themeTitleId" UUID NOT NULL,
    "foodId" UUID NOT NULL,
    "ce" TEXT DEFAULT '0',
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "payments" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "SponsersBoot" (
    "sponserBootId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "categoryId" UUID NOT NULL,
    "companyId" UUID NOT NULL,
    "foodId" UUID NOT NULL,
    "ce" TEXT DEFAULT '0',
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "payments" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Students" (
    "studentId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "studentCode" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Internship" (
    "internshipId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ce" TEXT DEFAULT '0',
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Timetable" (
    "timetableId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "participantId" UUID,
    "abstractId" UUID,
    "sponsersParticipantId" UUID,
    "sponsersBootId" UUID,
    "internshipId" UUID,
    "studentsId" UUID,
    "day8" TIMESTAMP(3),
    "day9" TIMESTAMP(3),
    "day10" TIMESTAMP(3),
    "day11" TIMESTAMP(3),
    "day12" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Companys_companyId_key" ON "Companys"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "Datetable_datetableId_key" ON "Datetable"("datetableId");

-- CreateIndex
CREATE UNIQUE INDEX "SponsersParticipant_sponserParticipantId_key" ON "SponsersParticipant"("sponserParticipantId");

-- CreateIndex
CREATE UNIQUE INDEX "SponsersParticipant_email_key" ON "SponsersParticipant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SponsersBoot_sponserBootId_key" ON "SponsersBoot"("sponserBootId");

-- CreateIndex
CREATE UNIQUE INDEX "SponsersBoot_email_key" ON "SponsersBoot"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Students_studentId_key" ON "Students"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Students_studentCode_key" ON "Students"("studentCode");

-- CreateIndex
CREATE UNIQUE INDEX "Internship_internshipId_key" ON "Internship"("internshipId");

-- CreateIndex
CREATE UNIQUE INDEX "Timetable_timetableId_key" ON "Timetable"("timetableId");

-- AddForeignKey
ALTER TABLE "SponsersParticipant" ADD CONSTRAINT "SponsersParticipant_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorys"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersParticipant" ADD CONSTRAINT "SponsersParticipant_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companys"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersParticipant" ADD CONSTRAINT "SponsersParticipant_packagesId_fkey" FOREIGN KEY ("packagesId") REFERENCES "Packages"("packageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersParticipant" ADD CONSTRAINT "SponsersParticipant_themeTitleId_fkey" FOREIGN KEY ("themeTitleId") REFERENCES "ThemeTitle"("mainId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersParticipant" ADD CONSTRAINT "SponsersParticipant_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersBoot" ADD CONSTRAINT "SponsersBoot_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorys"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersBoot" ADD CONSTRAINT "SponsersBoot_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Companys"("companyId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SponsersBoot" ADD CONSTRAINT "SponsersBoot_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("participantId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_abstractId_fkey" FOREIGN KEY ("abstractId") REFERENCES "Abstract"("abstractId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_sponsersParticipantId_fkey" FOREIGN KEY ("sponsersParticipantId") REFERENCES "SponsersParticipant"("sponserParticipantId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_sponsersBootId_fkey" FOREIGN KEY ("sponsersBootId") REFERENCES "SponsersBoot"("sponserBootId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_internshipId_fkey" FOREIGN KEY ("internshipId") REFERENCES "Internship"("internshipId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Timetable" ADD CONSTRAINT "Timetable_studentsId_fkey" FOREIGN KEY ("studentsId") REFERENCES "Students"("studentId") ON DELETE SET NULL ON UPDATE CASCADE;
