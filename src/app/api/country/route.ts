import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { userCountry } = await req.json();
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json(
      {
        message: "Must be logged in to attempt this call",
      },
      { status: 500 },
    );
  }
  console.log(userCountry);
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      country: userCountry,
    },
  });
  return NextResponse.json(
    { message: "Updated country successfully" },
    { status: 200 },
  );
};
