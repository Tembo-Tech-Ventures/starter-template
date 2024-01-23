"use client";

import { useMessageById } from "@/modules/messages/hooks/use-message-by-id/use-message-by-id";

export default function MessagePage() {
  const params = useParams();
  const message = useMessageById(params.id as string);
  return (
    <div>
      <p>
        {nmessage.data?.content.split("\n").map((p) => {
          <p key={p}>{p}</p>;
        })}
      </p>
    </div>
  );
}
