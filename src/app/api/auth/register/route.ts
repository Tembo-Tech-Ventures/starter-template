/**
 * API route to create a user account using email and password.
 * This avoids the need for an SMTP server and provides a
 * minimal credential-based registration flow for students.
 */
import { NextResponse } from "next/server";
import { hashPassword } from "@/modules/auth/lib/password/hash-password";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing email or password" },
      { status: 400 },
    );
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashed = await hashPassword(password);
  const user = await prisma.user.create({ data: { email, password: hashed } });
  return NextResponse.json({ id: user.id, email: user.email });
}
