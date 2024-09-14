import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function middleware(req: any) {
  const session = await getSession({ req });

  if (session) {
    const dbUser = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (dbUser?.isBanned) {
      return NextResponse.redirect("/banned");
    }
  }

  return NextResponse.next();
}
