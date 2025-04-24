/*
  Warnings:

  - You are about to drop the `Stuff` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "positionType" AS ENUM ('internship', 'permanent', 'both');

-- DropTable
DROP TABLE "Stuff";

-- DropEnum
DROP TYPE "Condition";

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "owner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "skill" TEXT[],
    "type" "positionType" NOT NULL DEFAULT 'internship',
    "openings" INTEGER NOT NULL,
    "salary" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
