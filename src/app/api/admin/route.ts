import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const session = await getServerSession();
  const updatedRole = "admin";
  if (session.user.email === process.env.ADMIN_EMAIL) {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        role: updatedRole,
      },
    });
  } else {
    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        role: "user",
      },
    });
  }
  return new Response(
    JSON.stringify({
      status: "success",
      message: "Role updated successfully",
    }),
    { status: 200 },
  );
};

export const GET = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession();
  if (session.user.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
  }
};
