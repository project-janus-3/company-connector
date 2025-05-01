/*
  Warnings:

  - The values [USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `owner` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `skill` on the `Job` table. All the data in the column will be lost.
  - The `type` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `company` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PositionType" AS ENUM ('internship', 'permanent', 'both');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('STUDENT', 'COMPANY', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_userId_fkey";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "owner",
DROP COLUMN "skill",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "jobId" INTEGER NOT NULL,
ADD COLUMN     "skills" TEXT NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "PositionType" NOT NULL DEFAULT 'internship';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;

-- DropTable
DROP TABLE "Student";

-- DropEnum
DROP TYPE "positionType";

-- CreateTable
CREATE TABLE "CompanyProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    "overview" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "mainSite" TEXT,
    "contact" TEXT NOT NULL,

    CONSTRAINT "CompanyProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentProfile" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "aboutMe" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "portfolio" TEXT NOT NULL,
    "interests" TEXT NOT NULL,

    CONSTRAINT "StudentProfile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CompanyProfile_companyId_key" ON "CompanyProfile"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProfile_studentId_key" ON "StudentProfile"("studentId");

-- AddForeignKey
ALTER TABLE "CompanyProfile" ADD CONSTRAINT "CompanyProfile_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProfile" ADD CONSTRAINT "StudentProfile_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "CompanyProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
