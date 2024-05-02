import { PrismaClient } from "@prisma/client";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@prisma/client";

const prisma = new PrismaClient();
type UpdateRequest = Pick<User, "username">;

export async function POST(req: Request) {
  const userName = (await req.json()) as UpdateRequest;

  const session = await getServerSession();

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      username: userName.username,
    },
  });
  return NextResponse.json(userName);
}

export const GET = async (req: Request) => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  return NextResponse.json(user);
};
