-- CreateTable
CREATE TABLE "UserSuperAdmin" (
    "userSuperAdminId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" UUID NOT NULL,

    CONSTRAINT "UserSuperAdmin_pkey" PRIMARY KEY ("userSuperAdminId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSuperAdmin_userId_key" ON "UserSuperAdmin"("userId");
