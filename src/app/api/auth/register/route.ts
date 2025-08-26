/**
 * POST /api/auth/register
 *
 * Minimal endpoint used to create a new user record during registration.  The
 * request body must contain a `username` and a SHA-256 hashed `password`.
 */
import { NextResponse } from "next/server";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const exists = await prisma.user.findUnique({ where: { username } });
  if (exists) {
    return NextResponse.json({ error: "exists" }, { status: 400 });
  }
  await prisma.user.create({ data: { username, password } });
  return NextResponse.json({ ok: true });
}
