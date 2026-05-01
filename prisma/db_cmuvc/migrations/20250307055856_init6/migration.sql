-- CreateTable
CREATE TABLE "AbstractType" (
    "adstractTypeId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "adstractType" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Abstract" (
    "abstractId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "abstractTypeId" UUID NOT NULL,
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
    "Imagepayment" TEXT,
    "fileAbstarct" TEXT NOT NULL,
    "payments" BOOLEAN NOT NULL DEFAULT false,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "AbstractType_adstractTypeId_key" ON "AbstractType"("adstractTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "Abstract_abstractId_key" ON "Abstract"("abstractId");

-- CreateIndex
CREATE UNIQUE INDEX "Abstract_email_key" ON "Abstract"("email");

-- AddForeignKey
ALTER TABLE "Abstract" ADD CONSTRAINT "Abstract_abstractTypeId_fkey" FOREIGN KEY ("abstractTypeId") REFERENCES "AbstractType"("adstractTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abstract" ADD CONSTRAINT "Abstract_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorys"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abstract" ADD CONSTRAINT "Abstract_packagesId_fkey" FOREIGN KEY ("packagesId") REFERENCES "Packages"("packageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abstract" ADD CONSTRAINT "Abstract_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;
