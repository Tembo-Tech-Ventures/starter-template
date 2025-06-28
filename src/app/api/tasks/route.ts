import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await prisma.task.findMany());
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const name = data.name;
  const task = await prisma.task.create({
    data: {
      name: name,
    },
  });

  return NextResponse.json(task);
}
