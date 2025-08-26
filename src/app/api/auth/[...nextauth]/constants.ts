/**
 * Central NextAuth configuration used by the API route and utility helpers.
 *
 * The application relies on a simple username/password credential flow for
 * authentication.  Users are stored in SQLite during local development and a
 * Postgres database in production.  Passwords are hashed using SHA-256.
 */
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sha256 } from "js-sha256";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Authorize verifies the supplied credentials against the database.
       * Returning a user object allows NextAuth to create a session.
       */
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });
        if (!user) {
          return null;
        }
        const hashed = sha256(credentials.password);
        if (user.password !== hashed) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      };
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
};
