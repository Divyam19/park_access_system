-- CreateTable
CREATE TABLE "RideOrders" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "RideOrders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParkOrders" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "ParkOrders_pkey" PRIMARY KEY ("id")
);
