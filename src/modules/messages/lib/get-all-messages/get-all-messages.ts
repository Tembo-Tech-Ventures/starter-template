import { GetAllMessagesResponse } from "@/app/api/messages/route";

export async function getAllMessages() {
  const response = await fetch(`/api/messages`);
  const json: GetAllMessagesResponse = await response.json();
  return json.messages;
}
