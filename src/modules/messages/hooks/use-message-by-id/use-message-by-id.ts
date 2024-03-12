import useSWR from "swr";
import { getAllMessages } from "../../lib/get-all-messages/get-all-messages";
import { useCallback } from "react";
import { getMessageById } from "../../lib/get-message-by-id/get-message-by-id";

export function useMessageById(id: string) {
  const fetcher = useCallback(
    async ([path, innerId]: [path: string, id: string]) => {
      return await getMessageById(innerId);
    },
    [],
  );
  return useSWR(["/api/notes", id], fetcher);
}
