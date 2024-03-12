import { GetNoteByIdResponse } from "@/app/api/messages/[id]/route";
import { Message } from "@prisma/client";

export async function getMessageById(id: string) {
  const response = await fetch(`api/Messages ${id}`);
  const json: GetNoteByIdResponse = await response.json();
  return json.message;
}
