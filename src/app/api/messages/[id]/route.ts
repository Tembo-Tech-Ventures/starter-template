import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export interface GetNoteByIdResponse {
  message: Message;
}

export const GET = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  console.log("@@id", id);
  const message = await prisma.message.findUniqueOrThrow({
    where: { id },
  });
  return NextResponse.json<GetNoteByIdResponse>({
    message,
  });
};
