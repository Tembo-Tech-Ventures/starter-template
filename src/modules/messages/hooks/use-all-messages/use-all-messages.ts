import useSWR from "swr";
import { getAllMessages } from "../../lib/get-all-messages/get-all-messages";
import { useCallback } from "react";

export function useAllMessages() {
  const fetcher = useCallback(async ([path]: [path: string]) => {
    return await getAllMessages();
  }, []);
  return useSWR(["/api/messages"], fetcher);
}
