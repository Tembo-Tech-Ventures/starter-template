import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();
  const correct = JSON.stringify(email);
  const details = await prisma.registeredUsers.findFirst({
    where: { email: correct },
  });
  console.log(email);
  if (!details) {
    return NextResponse.json({ error: "User not found" }, { status: 500 });
  }
  console.log(details.password || details.email);
  return NextResponse.json(details);
};
