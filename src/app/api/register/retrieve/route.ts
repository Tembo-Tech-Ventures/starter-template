import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

const GET = async (req: NextRequest) => {
  const id = await req.json();
  const data = await prisma.registeredUsers.findFirstOrThrow({
    where: { id },
  });
  return NextResponse.json(data);
};
