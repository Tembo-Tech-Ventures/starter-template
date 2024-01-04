import { GetNoteByIdResponse } from "@/app/api/messages/[id]/route";

export async function getMessageById(id: string) {
  const response = await fetch(`/api/messages/${id}`);
  const json: GetNoteByIdResponse = await response.json();
  return json.message;
}
