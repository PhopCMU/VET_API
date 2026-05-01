-- CreateTable
CREATE TABLE "Participant" (
    "participantId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "categoryId" UUID NOT NULL,
    "packagesId" UUID NOT NULL,
    "price" INTEGER NOT NULL,
    "ce" TEXT DEFAULT '0',
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "subDistrict" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "foodId" UUID NOT NULL,
    "acc" BOOLEAN NOT NULL DEFAULT true,
    "Imagepayment" TEXT NOT NULL,
    "payments" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Participant_participantId_key" ON "Participant"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "Participant_email_key" ON "Participant"("email");

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorys"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_packagesId_fkey" FOREIGN KEY ("packagesId") REFERENCES "Packages"("packageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;
