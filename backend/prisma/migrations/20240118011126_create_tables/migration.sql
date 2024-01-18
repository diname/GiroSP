-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
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

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" JSONB,
    "telefone" JSONB,
    "site" TEXT,
    "data_criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_alteracao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_unitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data_criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "id_produto" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_proposta" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "propostas" (
    "id" SERIAL NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL,
    "prazo_pgto" INTEGER NOT NULL,
    "descricao" TEXT,
    "data_atualizacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "propostas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_id_proposta_fkey" FOREIGN KEY ("id_proposta") REFERENCES "propostas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
