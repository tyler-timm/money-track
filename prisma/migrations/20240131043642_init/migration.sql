-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "timestamp" TIMESTAMP(6),
    "description" VARCHAR(255),
    "type" VARCHAR(255),
    "amount" INTEGER NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);
