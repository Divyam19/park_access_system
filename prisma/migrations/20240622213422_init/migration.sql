-- CreateTable
CREATE TABLE "Ride" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "age" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "groupSize" INTEGER NOT NULL,
    "rideId" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CustomerToRide" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CustomerToRide_AB_unique" ON "_CustomerToRide"("A", "B");

-- CreateIndex
CREATE INDEX "_CustomerToRide_B_index" ON "_CustomerToRide"("B");

-- AddForeignKey
ALTER TABLE "_CustomerToRide" ADD CONSTRAINT "_CustomerToRide_A_fkey" FOREIGN KEY ("A") REFERENCES "Customer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerToRide" ADD CONSTRAINT "_CustomerToRide_B_fkey" FOREIGN KEY ("B") REFERENCES "Ride"("id") ON DELETE CASCADE ON UPDATE CASCADE;
