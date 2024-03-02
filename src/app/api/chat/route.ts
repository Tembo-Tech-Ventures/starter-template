import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1761467",
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: "eu",
  useTLS: true,
});

export const POST = async (req: Request) => {
  const messageInput = await req.json();

  await pusher.trigger("chat", "message", messageInput);

  return NextResponse.json(messageInput);
};
