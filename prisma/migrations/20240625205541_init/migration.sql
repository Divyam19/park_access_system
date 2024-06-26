/*
  Warnings:

  - The primary key for the `ParkOrders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RideOrders` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ParkOrders" DROP CONSTRAINT "ParkOrders_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ParkOrders_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "RideOrders" DROP CONSTRAINT "RideOrders_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "RideOrders_pkey" PRIMARY KEY ("id");
