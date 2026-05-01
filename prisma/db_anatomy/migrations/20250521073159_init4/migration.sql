-- CreateTable
CREATE TABLE "OpenProject" (
    "openProjectId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OpenProject_pkey" PRIMARY KEY ("openProjectId")
);
