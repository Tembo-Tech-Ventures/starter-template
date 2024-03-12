-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_ownerId_fkey";

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "ownerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
