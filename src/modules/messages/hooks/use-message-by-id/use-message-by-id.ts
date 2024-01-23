import useSWR from "swr";
import { getAllMessages } from "../../lib/get-all-messages/get-all-messages";
import { useCallback } from "react";

export function useMessageById() {
  const fetcher = useCallback(
    async ([path, innerId]: [path: string, id: string]) => {
      return await getMessageById(innerId);
    },
    [],
  );
  return useSWR(["/api/Messages", id], fetcher);
}
