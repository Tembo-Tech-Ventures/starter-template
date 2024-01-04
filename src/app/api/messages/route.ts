import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

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

export interface GetAllMessagesResponse {
  messages: Message[];
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const messages = await prisma.message.findMany();
  return NextResponse.json({
    messages: messages,
  });
};
