/*
  Warnings:

  - Added the required column `owner` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "owner" TEXT NOT NULL;
