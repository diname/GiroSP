-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('USER', 'ADMIN', 'VENDEDOR');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "id_user" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT,
    "access" "AccessType" NOT NULL DEFAULT 'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultants" (
    "id" TEXT NOT NULL,
    "id_consultant" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT,
    "access" "AccessType" NOT NULL DEFAULT 'VENDEDOR',

    CONSTRAINT "consultants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "id_customer" SERIAL NOT NULL,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adress" TEXT,
    "phone" TEXT,
    "site" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "unitary_value" DOUBLE PRECISION NOT NULL,
    "id_category" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "id_category" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proposed_products" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "id_product" TEXT NOT NULL,
    "id_proposal" TEXT NOT NULL,

    CONSTRAINT "proposed_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proposals" (
    "id" TEXT NOT NULL,
    "number_proposal" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "total_price" DOUBLE PRECISION NOT NULL,
    "payment_term" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_customer" TEXT NOT NULL,
    "id_consultant" TEXT NOT NULL,

    CONSTRAINT "proposals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "proposed_products_id_product_key" ON "proposed_products"("id_product");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposed_products" ADD CONSTRAINT "proposed_products_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposed_products" ADD CONSTRAINT "proposed_products_id_proposal_fkey" FOREIGN KEY ("id_proposal") REFERENCES "proposals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposals" ADD CONSTRAINT "proposals_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proposals" ADD CONSTRAINT "proposals_id_consultant_fkey" FOREIGN KEY ("id_consultant") REFERENCES "consultants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
