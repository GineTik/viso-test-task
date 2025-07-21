/*
  Warnings:

  - The primary key for the `RecipeRating` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `RecipeRating` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[recipeId,userId]` on the table `RecipeRating` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "RecipeRating" DROP CONSTRAINT "RecipeRating_pkey",
DROP COLUMN "id";

-- CreateIndex
CREATE UNIQUE INDEX "RecipeRating_recipeId_userId_key" ON "RecipeRating"("recipeId", "userId");
