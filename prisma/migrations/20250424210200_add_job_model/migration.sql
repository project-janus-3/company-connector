/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('excellent', 'good', 'fair', 'poor');

-- DropTable
DROP TABLE "Job";

-- DropEnum
DROP TYPE "positionType";

-- CreateTable
CREATE TABLE "Stuff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "condition" "Condition" NOT NULL DEFAULT 'good',
    "owner" TEXT NOT NULL,

    CONSTRAINT "Stuff_pkey" PRIMARY KEY ("id")
);
