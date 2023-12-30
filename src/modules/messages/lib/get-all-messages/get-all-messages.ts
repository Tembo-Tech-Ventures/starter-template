import { GetNoteByIdResponse } from "@/app/api/Messages/[id]/route";
import { GetAllMessagesResponse } from "@/app/api/Messages/route";
import { Message } from "@prisma/client";

export async function getAllMessages() {
  const response = await fetch(`api/Messages `);
  const json: GetAllMessagesResponse = await response.json();
  return json.message;
}
