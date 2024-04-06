import { GetAllChatMessagesResponse } from "@/app/api/chat/route";

export async function getAllChatMessages() {
  const response = await fetch(`/api/chat`);
  const json: GetAllChatMessagesResponse = await response.json();
  return json.messages;
}
