import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /**The user's id through which the admin can edit/modify his/her account */
      id: string;
      /** The user's role (admin or user) */
      role?: string;
      email?: string;
      name?: string;
      image?: string;
      /** The user's status (either true or false) */
      isBanned: boolean;
      /** The user's plan (free, premium, etc.) */
      plan: string;
      /** The last time the user logged in */
      lastLogin: Date;
      /** The user's email verification status */
      emailVerified?: Date;
      /** The user's phone number */
      phoneNumber?: string;
      /** The user's social media profiles */
      socialMediaProfiles?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
        linkedin?: string;
      };
      /** The user's bio */
      bio?: string;
      /** The user's age */
      age?: number;
      /** The user's gender */
      gender?: string;
      /** The user's occupation */
      occupation?: string;
      /** The user's education */
      education?: string;
      /** The user's work history */
      workHistory?: {
        company: string;
        position: string;
        startDate: Date;
        endDate: Date | null;
      }[];
      /**The user's location */
      country: string;
      /** The user's current house address */
      streetAddress: string;
    };
  }
}
