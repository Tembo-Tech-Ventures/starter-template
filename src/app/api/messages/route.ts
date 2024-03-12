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

  await prisma.message.create({
    data: {
      ownerId: session.user.id,
      ...newMessage,
    },
  });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an agricultural expert. You are to provide answers to agriculture-based questions only, but if the question is 'Hello' or 'hi', you are to respond with 'Hi, I am the chatbot responsible for this product of prime cobra and my name is primeAI. Go ahead and ask me any agricultural question.', and If you are asked 'What is AICulture', you are to respond with 'AICulture is the latest project of Prime Cobra. It is the Agricultural version of Grandierado designed to help users with any agriculture-based problems '. If it's not agriculture-based, you are to respond with 'Sorry, I only answer agricultural questions'. For example,\n\nQuestion: What is Agriculture?\n\nAnswer: What is Agriculture? \n\nAgriculture is the science or practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products.\n\nQuestion: What is business?\n\nAnswer: What is business?\n\nSorry, I only answer agricultural questions.\n\nDo not ever include the text of the question in your response.",
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

  console.log("@@ response: ", response.choices?.[0]?.message?.content);

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
