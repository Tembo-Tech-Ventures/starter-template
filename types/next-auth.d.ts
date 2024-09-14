import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's role (admin or user) */
      role?: string;
      email?: string;
      name?: string;
      image?: string;
      /** The user's status (either true or false) */
      isBanned: boolean;
    };
  }
}
