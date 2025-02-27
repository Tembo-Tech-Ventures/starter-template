"use server";

import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";

export async function deleteMessageAction(id: number) {
  await prisma.chatMessage.delete({
    where: {
      id: id,
    },
  });
  return {
    success: true,
    id,
  };
}
