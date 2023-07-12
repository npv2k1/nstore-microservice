/*
  Warnings:

  - You are about to drop the column `avatarFileId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `cvFileId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatarFileId",
DROP COLUMN "cvFileId";
