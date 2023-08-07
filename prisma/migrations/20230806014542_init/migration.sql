-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "summary" TEXT NOT NULL,
    "discription" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "dtStart" TIMESTAMP(3) NOT NULL,
    "dtEnd" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);
