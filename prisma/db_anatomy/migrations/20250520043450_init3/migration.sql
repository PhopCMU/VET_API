-- CreateTable
CREATE TABLE "OpenProject" (
    "openProjectId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "OpenProject_pkey" PRIMARY KEY ("openProjectId")
);
