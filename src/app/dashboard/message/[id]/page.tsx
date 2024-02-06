"use client";

import { useMessageById } from "@/modules/messages/hooks/use-message-by-id/use-message-by-id";
import { useParams } from "next/navigation";

export default function MessagePage() {
  const params = useParams();
  const { data } = useMessageById(params.id as string);
  if (!data) {
    return null;
  }
  return (
    <div>
      <p>{data.content?.split("\n").map((p) => <p key={p}>{p}</p>)}</p>
    </div>
  );
}
