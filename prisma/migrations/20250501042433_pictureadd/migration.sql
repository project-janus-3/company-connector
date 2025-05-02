/*
  Warnings:

  - Added the required column `companyPic` to the `CompanyProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePic` to the `StudentProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CompanyProfile" ADD COLUMN     "companyPic" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StudentProfile" ADD COLUMN     "profilePic" TEXT NOT NULL;
