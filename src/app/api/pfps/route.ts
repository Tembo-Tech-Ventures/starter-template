import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { userId, userName } = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name: userName },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
