-- CreateTable
CREATE TABLE "ShirtModel" (
    "shirtmodelId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "UserSaleShirt" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "fullname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "sh_collection_method" TEXT NOT NULL DEFAULT 'pickup',
    "delivery_address" TEXT,
    "total_amount" DOUBLE PRECISION NOT NULL,
    "payment" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "orderId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userSaleshirtId" UUID NOT NULL,
    "shirtmodelId" UUID NOT NULL,
    "sizeId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "ShirtModel_shirtmodelId_key" ON "ShirtModel"("shirtmodelId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSaleShirt_userId_key" ON "UserSaleShirt"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_key" ON "OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "OrderItem_userSaleshirtId_idx" ON "OrderItem"("userSaleshirtId");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_userSaleshirtId_fkey" FOREIGN KEY ("userSaleshirtId") REFERENCES "UserSaleShirt"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_shirtmodelId_fkey" FOREIGN KEY ("shirtmodelId") REFERENCES "ShirtModel"("shirtmodelId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size_shirt"("shirtId") ON DELETE RESTRICT ON UPDATE CASCADE;
