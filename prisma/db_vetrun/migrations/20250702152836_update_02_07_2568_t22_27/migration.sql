-- CreateTable
CREATE TABLE "bib_sequence" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "prefix" TEXT NOT NULL,
    "current_value" INTEGER NOT NULL DEFAULT 1,
    "max_value" INTEGER NOT NULL DEFAULT 999
);

-- CreateIndex
CREATE UNIQUE INDEX "bib_sequence_id_key" ON "bib_sequence"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bib_sequence_prefix_key" ON "bib_sequence"("prefix");
