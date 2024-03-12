"use client";

import { useMessageById } from "@/modules/messages/hooks/use-message-by-id/use-message-by-id";
import { useParams } from "next/navigation";

export default function ReplyPage() {
  const params = useParams();
  const message = useMessageById(params.id as string);
  return (
    <div>
      {message.data?.content.split("\n").map((p) => <p key={p}>{p}</p>)}
    </div>
  );
}
