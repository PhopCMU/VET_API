-- CreateTable
CREATE TABLE "Participant" (
    "participantId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nameBib" TEXT,
    "numberBib" TEXT,
    "payment" BOOLEAN NOT NULL DEFAULT false,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "sizeId" UUID NOT NULL,
    "transferFile" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Animal" (
    "animalId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "contest" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Registration" (
    "registrationId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "selectModel" TEXT NOT NULL,
    "vipModel" TEXT,
    "vipModelMini" TEXT,
    "year" TEXT NOT NULL,
    "participantId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "animalId" UUID
);

-- CreateTable
CREATE TABLE "Size_shirt" (
    "shirtId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "size" TEXT NOT NULL,
    "s_width" INTEGER NOT NULL,
    "s_high" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_participantId_key" ON "Participant"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "Animal_animalId_key" ON "Animal"("animalId");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_registrationId_key" ON "Registration"("registrationId");

-- CreateIndex
CREATE UNIQUE INDEX "Size_shirt_shirtId_key" ON "Size_shirt"("shirtId");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size_shirt"("shirtId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("participantId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registration" ADD CONSTRAINT "Registration_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("animalId") ON DELETE SET NULL ON UPDATE CASCADE;
