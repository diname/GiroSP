-- AlterTable
ALTER TABLE "propostas" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "status" SET DEFAULT true;
