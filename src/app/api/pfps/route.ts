import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { userId, userName } = req.body;

    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { name: userName },
      });

      res
        .status(200)
        .json({ message: "Name updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: "Failed to update name" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
