import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@prisma/client";
import { read } from "fs";
import { NextRequest, NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface MessageInput {
  content: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession();
  if (!session?.user?.id) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 403,
      },
    );
  }
  const newMessage: MessageInput = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an agricultural expert. You are to repeat the user's question, go under the question, and then provide an answer to it. You are to provide answers to agriculture-based questions only. If it's not agriculture-based, you are to respond with \"Sorry, I only answer agricultural questions\". For example,\n\nQuestion: What is Agriculture?\n\nAnswer: What is Agriculture? \n\nAgriculture is the science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products.\n\nQuestion: What is business?\n\nAnswer: What is business?\n\nSorry, I only answer agricultural questions.",
      },
      {
        role: "user",
        content: newMessage.content,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  await prisma.message.create({
    data: newMessage,
  });
  const aiResponse = await prisma.message.create({
    data: {
      ownerId: session.user.id,
      content: response.choices?.[0]?.message?.content || "",
    },
  });
  return NextResponse.json(aiResponse);
};
export interface GetAllMessagesResponse {
  messages: Message[];
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession();
  const messages = await prisma.message.findMany({
    where: {
      ownerId: session.user.id,
    },
  });
  return NextResponse.json<GetAllMessagesResponse>({
    messages,
  });
};
