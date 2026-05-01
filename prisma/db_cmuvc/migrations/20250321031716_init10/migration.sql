-- CreateTable
CREATE TABLE "PaperAbstract" (
    "paperAbstractId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "papername" TEXT NOT NULL,
    "filePepar" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "PaperAbstract_paperAbstractId_key" ON "PaperAbstract"("paperAbstractId");
