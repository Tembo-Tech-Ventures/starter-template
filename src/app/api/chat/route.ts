import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { ChatMessage } from "@prisma/client";
import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_PUSHER_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "eu",
  useTLS: true,
});

export const POST = async (req: Request) => {
  const messageInput = await req.json();

  const session = await getServerSession();

  if (!session?.user?.id || !session?.user?.email) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 403,
      },
    );
  }

  const savedMessage = await prisma.chatMessage.create({
    data: {
      message: messageInput.message,
      email: session.user.email,
      ownerId: session.user.id,
    },
  });

  await pusher.trigger("chat", "message", messageInput);

  return NextResponse.json(savedMessage);
};

export interface GetAllChatMessagesResponse {
  messages: ChatMessage[];
}

export const GET = async (req: Request) => {
  const messages = await prisma.chatMessage.findMany();
  return NextResponse.json({
    messages,
  });
};
