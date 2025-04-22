-- CreateEnum
CREATE TYPE "positionType" AS ENUM ('internship', 'permanent', 'both');

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "skill" TEXT[],
    "type" "positionType" NOT NULL DEFAULT 'internship',
    "openings" INTEGER NOT NULL,
    "salary" TEXT NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
