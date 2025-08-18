/**
 * Central NextAuth configuration using a credentials-based flow.
 * By avoiding magic links, students can authenticate without
 * provisioning an SMTP server. Passwords are stored as bcrypt hashes
 * and verified during the authorize step.
 */
import { prisma } from "@/modules/prisma/lib/prisma-client/prisma-client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/modules/auth/lib/password/verify-password";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user?.password) return null;
        const isValid = await verifyPassword(
          credentials.password,
          user.password,
        );
        return isValid ? user : null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      const { password, ...safeUser } = user as any;
      return { ...session, user: safeUser };
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
};
