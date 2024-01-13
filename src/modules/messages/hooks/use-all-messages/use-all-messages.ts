import useSWR from "swr";
import { getAllMessages } from "../../lib/get-all-messages/get-all-messages";
import { useCallback } from "react";

export function useAllMessages() {
  const fetcher = useCallback(([path]: [path: string]) => {
    return getAllMessages();
  }, []);
  return useSWR(["/api/Messages"], fetcher);
}
