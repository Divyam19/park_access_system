/*
  Warnings:

  - Added the required column `ride` to the `RideOrders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RideOrders" ADD COLUMN     "ride" TEXT NOT NULL;
