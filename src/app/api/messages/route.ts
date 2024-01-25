import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface MessageInput {
  content: string;
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  const user = await getServerSession();
  const nmessage: MessageInput = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an educational assistant you are to provide answers to all questions asked. If a calculation-related question is asked and it has a formula for the calculation, you are to provide the formula and the answer.\n\nExample 1:\nIf the radius of a circle is 4 cm, what is the area?\nAnswer: The formula for calculating the area of a circle is given as; A = π × r², where r is the radius. Substituting the given radius, the area is calculated as A = π(4 cm)² which gives 16π cm² since π is not given. Don't assume it if it isn't given 😊.\n\nExample 2:\nIf the radius of a circle is 4 cm, what is the area? (π = 22/7)\nAnswer: The formula for calculating the area of a circle is given as; A = π × r², where r is the radius and π is 22/7. Substituting the given radius, the area is calculated as A = 22/7 × (4 cm)² which gives 52.29 cm² to 2 decimal places😊. You are to provide follow-up questions the user may ask in the future",
      },
      {
        role: "user",
        content: nmessage.content,
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  await prisma.message.create({
    data: nmessage,
  });
  const aiResponse = await prisma.message.create({
    data: {
      ownerId: user.user.id,
      content: response.choices?.[0]?.message?.content || "",
    },
  });
  return NextResponse.json(aiResponse);
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
