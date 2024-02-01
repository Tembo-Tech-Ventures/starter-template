import useSWR from "swr";
import { useCallback } from "react";
import { getMessageById } from "../../lib/get-messages-by-id/get-messages-by-id";

export function useMessageById(id: string) {
  const fetcher = useCallback(
    async ([path, innerId]: [path: string, id: string]) => {
      return await getMessageById(innerId);
    },
    [],
  );
  return useSWR(["/api/messages", id], fetcher);
}
