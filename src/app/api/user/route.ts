import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

type UpdateRequest = Pick<User, "username">;

export const POST = async (req: Request) => {
  const reqData = (await req.json()) as UpdateRequest;
  const session = await getServerSession();
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: reqData,
  });
  return NextResponse.json(reqData);
};
export const GET = async (req: Request) => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  return NextResponse.json(user);
};
