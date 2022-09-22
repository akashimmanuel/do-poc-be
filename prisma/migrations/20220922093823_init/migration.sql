/*
  Warnings:

  - Made the column `name` on table `Todos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Todos" ALTER COLUMN "name" SET NOT NULL;
