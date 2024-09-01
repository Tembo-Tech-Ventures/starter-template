import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";

export async function POST(req: Request) {
  const { name, username } = await req.json();
  const session = await getServerSession();
  await prisma.user.create({
    data: {
      username,
    },
  });
  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: name,
      username: username,
    },
  });

  console.log(`new name is ${name} and username is ${username}`);
  return new Response(
    JSON.stringify({
      status: "success",
      message: "Profile updated successfully",
    }),
    { status: 200 },
  );
}
