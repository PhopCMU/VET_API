-- CreateTable
CREATE TABLE "Role" (
    "roleId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "r_cre" BOOLEAN NOT NULL,
    "r_upd" BOOLEAN NOT NULL,
    "r_del" BOOLEAN NOT NULL,
    "r_app" BOOLEAN NOT NULL,
    "r_poi" INTEGER NOT NULL,
    "r_oth" INTEGER[],
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "MenuAccess" (
    "menuAccessid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "roleId" UUID NOT NULL,
    "menuId" UUID NOT NULL,
    "canAccess" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MenuAccess_pkey" PRIMARY KEY ("menuAccessid")
);

-- CreateTable
CREATE TABLE "SubMenuAccess" (
    "subMenuAccessId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "roleId" UUID NOT NULL,
    "submenuId" UUID NOT NULL,
    "canAccess" BOOLEAN NOT NULL DEFAULT false,
    "canCreate" BOOLEAN NOT NULL DEFAULT false,
    "canUpdate" BOOLEAN NOT NULL DEFAULT false,
    "canDelete" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID,

    CONSTRAINT "SubMenuAccess_pkey" PRIMARY KEY ("subMenuAccessId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roleId" UUID NOT NULL,
    "organization" TEXT,
    "image" TEXT,
    "jobpositionId" UUID,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "JobPosition" (
    "jobpositionId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "passposition" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Menu" (
    "menuId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "part" TEXT,
    "position" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("menuId")
);

-- CreateTable
CREATE TABLE "SubMenu" (
    "submenuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "part" TEXT,
    "position" INTEGER,
    "menuId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubMenu_pkey" PRIMARY KEY ("submenuid")
);

-- CreateTable
CREATE TABLE "Project" (
    "projectId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "database" TEXT NOT NULL,
    "part" TEXT,
    "position" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("projectId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleId_key" ON "Role"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "JobPosition_jobpositionId_key" ON "JobPosition"("jobpositionId");

-- AddForeignKey
ALTER TABLE "MenuAccess" ADD CONSTRAINT "MenuAccess_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuAccess" ADD CONSTRAINT "MenuAccess_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenuAccess" ADD CONSTRAINT "SubMenuAccess_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenuAccess" ADD CONSTRAINT "SubMenuAccess_submenuId_fkey" FOREIGN KEY ("submenuId") REFERENCES "SubMenu"("submenuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenuAccess" ADD CONSTRAINT "SubMenuAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_jobpositionId_fkey" FOREIGN KEY ("jobpositionId") REFERENCES "JobPosition"("jobpositionId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubMenu" ADD CONSTRAINT "SubMenu_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "Menu"("menuId") ON DELETE CASCADE ON UPDATE CASCADE;
