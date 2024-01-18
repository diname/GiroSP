/*
  Warnings:

  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `propostas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `vendedores` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_produto_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_proposta_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_id_vendedor_fkey";

-- AlterTable
ALTER TABLE "clientes" DROP CONSTRAINT "clientes_pkey",
ADD COLUMN     "codigo_cliente" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "clientes_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "clientes_id_seq";

-- AlterTable
ALTER TABLE "items" DROP CONSTRAINT "items_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_produto" SET DATA TYPE TEXT,
ALTER COLUMN "id_cliente" SET DATA TYPE TEXT,
ALTER COLUMN "id_proposta" SET DATA TYPE TEXT,
ALTER COLUMN "id_vendedor" SET DATA TYPE TEXT,
ADD CONSTRAINT "items_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "items_id_seq";

-- AlterTable
ALTER TABLE "produtos" DROP CONSTRAINT "produtos_pkey",
ADD COLUMN     "codigo_produto" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "produtos_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "produtos_id_seq";

-- AlterTable
ALTER TABLE "propostas" DROP CONSTRAINT "propostas_pkey",
ADD COLUMN     "nro_proposta" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "propostas_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "propostas_id_seq";

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
ADD COLUMN     "codigo_usuario" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "usuarios_id_seq";

-- AlterTable
ALTER TABLE "vendedores" DROP CONSTRAINT "vendedores_pkey",
ADD COLUMN     "codigo_vendedor" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "vendedores_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "vendedores_id_seq";

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_vendedor_fkey" FOREIGN KEY ("id_vendedor") REFERENCES "vendedores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_proposta_fkey" FOREIGN KEY ("id_proposta") REFERENCES "propostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
