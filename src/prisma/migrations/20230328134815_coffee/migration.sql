-- CreateTable
CREATE TABLE "Coffee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "elevation" INTEGER NOT NULL,
    "process" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "roaster" TEXT NOT NULL,
    "acidity" INTEGER NOT NULL,
    "sweetness" INTEGER NOT NULL,
    "aftertaste" INTEGER NOT NULL,
    "cleancup" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "flavor" INTEGER NOT NULL,
    "flavorText" TEXT NOT NULL,
    "mousefeel" INTEGER NOT NULL,
    "overall" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("id")
);
