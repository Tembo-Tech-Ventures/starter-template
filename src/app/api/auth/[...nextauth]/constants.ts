import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email },
      });

      if (dbUser) {
        // Update the last login time when the user logs in
        await prisma.user.update({
          where: { email: user.email },
          data: {
            lastLogin: new Date(),
          },
        });
      } else {
        // If the user doesn't exist, create a new record
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            image: user.image,
            lastLogin: new Date(), // Set initial login time
          },
        });
      }
      return {
        ...session,
        user,
      };
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
};
