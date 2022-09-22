-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "status" TEXT NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
