-- CreateTable
CREATE TABLE "ThemeTitle" (
    "mainId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "startEvent" TIMESTAMP(3),
    "endEvent" TIMESTAMP(3),
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Packages" (
    "packageId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "themeTitleId" UUID NOT NULL,
    "category_th" TEXT NOT NULL,
    "category_en" TEXT NOT NULL,
    "earlyBird" INTEGER,
    "regularRate" INTEGER,
    "oneDayParticipant" INTEGER,
    "people" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "ThemeTitle_mainId_key" ON "ThemeTitle"("mainId");

-- CreateIndex
CREATE UNIQUE INDEX "Packages_packageId_key" ON "Packages"("packageId");

-- AddForeignKey
ALTER TABLE "Packages" ADD CONSTRAINT "Packages_themeTitleId_fkey" FOREIGN KEY ("themeTitleId") REFERENCES "ThemeTitle"("mainId") ON DELETE RESTRICT ON UPDATE CASCADE;
