-- CreateTable
CREATE TABLE "Foods" (
    "foodId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "foodType" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Categorys" (
    "categoryId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "categoryType" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Foods_foodId_key" ON "Foods"("foodId");

-- CreateIndex
CREATE UNIQUE INDEX "Categorys_categoryId_key" ON "Categorys"("categoryId");
