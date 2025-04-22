-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'COMPANY');
-- CreateEnum
CREATE TYPE "positionType" AS ENUM ('internship', 'permanent', 'both');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
