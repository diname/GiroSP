-- CreateEnum
CREATE TYPE "AccessType" AS ENUM ('USER', 'ADMIN', 'VENDEDOR');

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "access" "AccessType" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "vendedores" ADD COLUMN     "access" "AccessType" NOT NULL DEFAULT 'VENDEDOR';
