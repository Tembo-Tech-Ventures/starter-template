/**
 * Blog API route.
 *
 * Exposes minimal JSON endpoints for listing existing blog posts and
 * creating new ones. Keeping this file small prevents circular
 * dependencies and makes the data flow between the frontend and
 * Prisma clear.
 */
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { NextRequest, NextResponse } from "next/server";

// Retrieve all blog posts in reverse chronological order.
export async function GET() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

// Persist a new blog post using data from the request body.
export async function POST(req: NextRequest) {
  const data = await req.json();
  const post = await prisma.blogPost.create({
    data: {
      title: data.title,
      content: data.content,
    },
  });
  return NextResponse.json(post);
}
