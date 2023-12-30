import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { UUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { Message } from "@prisma/client";

export interface MessageInput {
  content: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const nmessage: MessageInput = await req.json();
  const created = await prisma.message.create({
    data: nmessage,
  });
  console.log("00 message: ", created);
  return NextResponse.json(created);
};
export const GET = async (req: NextRequest, res: NextResponse) => {
  const Messages = await prisma.message.findMany();
  return NextResponse.json(Messages);
};
