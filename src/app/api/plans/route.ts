import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { value } = await req.json();
  const session = await getServerSession();
  // For now, until the payment method is figured out, just update it on the user's status
  console.log("Your suggested plan: ", value);
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      plan: value,
    },
  });
  return NextResponse.json(
    { message: "Payment method updated successfully" },
    { status: 200 },
  );
};
