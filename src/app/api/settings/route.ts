import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";

export async function POST(req: Request) {
  const { name } = await req.json();
  const session = await getServerSession();
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: name,
    },
  });

  console.log(`name: ${session.user.name}`);
  console.log(`username: ${session.user.username}`);
  return new Response(
    JSON.stringify({
      status: "success",
      message: "Profile updated successfully",
    }),
    { status: 200 },
  );
}
