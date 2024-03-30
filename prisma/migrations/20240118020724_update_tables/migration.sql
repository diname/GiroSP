/*
  Warnings:

  - You are about to drop the column `cargo` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `cargo` on the `vendedores` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `vendedores` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `vendedores` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" ALTER COLUMN "endereco" SET DATA TYPE TEXT,
ALTER COLUMN "telefone" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "cargo",
DROP COLUMN "endereco",
DROP COLUMN "telefone";

-- AlterTable
ALTER TABLE "vendedores" DROP COLUMN "cargo",
DROP COLUMN "endereco",
DROP COLUMN "telefone";
