import { UUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export interface Message {
    id: string
    content: string
}

let Messages: Message[] = []
export const POST = async (req: NextRequest, res: NextResponse) => {
    const nmessage: Message = await req.json();
    Messages.push(nmessage);
    console.log('all messages', Messages)
    return NextResponse.json(nmessage);
}
export const GET = async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json(Messages);
};