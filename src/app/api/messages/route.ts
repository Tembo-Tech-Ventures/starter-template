import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { Message } from "@mui/icons-material";
import { Message } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface MessageInput {
  content: string;
}
const nmessage: MessageInput = await req.json();

export const POST = async (req: NextRequest, res: NextResponse) => {
  client = OpenAI();

  response = client.chat.completions.create(
    (model = "gpt-3.5-turbo"),
    (messages = [
      {
        role: "system",
        content:
          "You are an educational assistant you are to provide answers to all questions asked. If a calculation-related question is asked and it has a formula for the calculation, you are to provide the formula and the answer.\n\nExample 1:\nIf the radius of a circle is 4 cm, what is the area?\nAnswer: The formula for calculating the area of a circle is given as; A = π × r², where r is the radius. Substituting the given radius, the area is calculated as A = π(4 cm)² which gives 16π cm² since π is not given. Don't assume it if it isn't given 😊.\n\nExample 2:\nIf the radius of a circle is 4 cm, what is the area? (π = 22/7)\nAnswer: The formula for calculating the area of a circle is given as; A = π × r², where r is the radius and π is 22/7. Substituting the given radius, the area is calculated as A = 22/7 × (4 cm)² which gives 52.29 cm² to 2 decimal places😊. You are to provide follow-up questions the user may ask in the future\n\n\n\n\n ",
      },
      {
        role: "user",
        content:
          "A 0.4kg copper calorimeter with a thermal capacity of 196Jk^-1 contains 0.3kg of water at 26°C. A metal of mass 0.2kg at a temperature of 100°C was gently dropped into the calorimeter and the mixture was well stirred. Calculate the final temperature of the mixture. Neglect heat losses to the surrounding.\n[ Specific heat capacity of water = 4200Jkg^-1k^-1\nSpecific heat capacity of the metal = 460Jkg^-1^-1]?",
      },
      {
        role: "assistant",
        content:
          "To calculate the final temperature of the mixture, we need to use the principle of conservation of energy. The heat lost by the metal will be equal to the heat gained by the water and the calorimeter.\n\nThe heat lost by the metal can be calculated using the formula:\nQ_lost = m × c × (T_hot - T_final)\nwhere m is the mass of the metal, c is the specific heat capacity of the metal, T_hot is the initial temperature of the metal, and T_final is the final temperature of the mixture.\n\nThe heat gained by the water and the calorimeter can be calculated using the formula:\nQ_gain = (m_water + m_calorimeter) × c_water × (T_final - T_cold)\nwhere m_water is the mass of the water, m_calorimeter is the mass of the calorimeter, c_water is the specific heat capacity of water, and T_cold is the initial temperature of the water.\n\nSince the final temperature of the mixture is the same for both the metal and the water/calorimeter, we can set the two equations equal to each other:\nm × c × (T_hot - T_final) = (m_water + m_calorimeter) × c_water × (T_final - T_c",
      },
      {
        role: "assistant",
        content:
          "Using the given values:\nm = 0.2 kg (mass of the metal)\nc = 460 J/kg·K (specific heat capacity of the metal)\nT_hot = 100°C (initial temperature of the metal)\nm_water = 0.3 kg (mass of water)\nc_water = 4200 J/kg·K (specific heat capacity of water)\nT_cold = 26°C (initial temperature of the water)\n\nLet T_final be the final temperature of the mixture.\n\nUsing the equation:\n0.2 kg × 460 J/kg·K × (100°C - T_final) = (0.3 kg + 0.4 kg) × 4200 J/kg·K × (T_final - 26°C)\n\nSimplifying the equation will give:\n92 J/K × (100°C - T_final) = 0.7 kg × 4200 J/kg·K × (T_final - 26°C)\n\nExpanding the equation will give:\n9200 J - 92 J/K × T_final = 2940 J/K × T_final - 76440 J\n\nCombining like terms:\n3920 J/K × T_final = 85340 J\n\nSolving for T_final:\nT_final",
      },
      {
        role: "assistant",
        content:
          "= 85340 J / (3920 J/K)\nT_final = 21.77 °C\n\nTherefore, the final temperature of the mixture is approximately 21.77 °C.",
      },
      {
        role: "user",
        content: nmessage.content,
      },
    ]),
    (temperature = 1),
    (max_tokens = 299),
    (top_p = 1),
    (frequency_penalty = 0),
    (presence_penalty = 0)
  );

  const categorizedMessage: MessageInput = {
    content: `${nmessage.content}
    
    Categories: ${response.choices[0].message.content}
    `,
  }
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
