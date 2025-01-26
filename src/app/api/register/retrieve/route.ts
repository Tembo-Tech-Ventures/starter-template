import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const email = await req.json();
  const data = await prisma.registeredUsers.findUnique({
    where: { email },
  });
  return NextResponse.json(data);
};
