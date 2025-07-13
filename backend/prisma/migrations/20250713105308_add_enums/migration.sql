/*
  Warnings:

  - Added the required column `priority` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('in_progress', 'reviewed', 'completed');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('important', 'low', 'medium', 'high');

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "priority" "Priority" NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL;
