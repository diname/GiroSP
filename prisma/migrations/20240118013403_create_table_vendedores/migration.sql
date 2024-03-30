/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `items` table. All the data in the column will be lost.
  - Added the required column `id_vendedor` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_usuario_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "id_usuario",
ADD COLUMN     "id_vendedor" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "vendedores" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT,
    "cargo" TEXT,
    "endereco" JSONB,
    "telefone" JSONB,
    "data_criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_alteracao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "vendedores_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_vendedor_fkey" FOREIGN KEY ("id_vendedor") REFERENCES "vendedores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
