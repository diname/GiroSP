-- CreateTable
CREATE TABLE "consultores" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT
);
