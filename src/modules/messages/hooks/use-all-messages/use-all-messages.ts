import useSWR from "swr";
import { getAllMessages } from "../../lib/get-all-messages/get-all-messages";
import { useCallback } from "react";
import { assert } from "console";

export function useAllMessages() {
  const fetcher = useCallback(async ([path]: [path: string]) => {
    return await getAllMessages();
  }, []);
  return useSWR(["/api/Messages"], getAllMessages);
}
