import useSWR from "swr";
import { useCallback } from "react";
import { getAllChatMessages } from "../../lib/get-all-chat-messages/get-all-chat-messages";

export function useAllChatMessages() {
  const fetcher = useCallback(async ([path]: [path: string]) => {
    return await getAllChatMessages();
  }, []);
  return useSWR(["/api/chat"], fetcher);
}
