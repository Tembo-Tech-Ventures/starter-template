/**
 * Thin wrapper around `getServerSession` that applies a stricter user type.
 * Components can rely on the presence of `id`, `emailVerified` and `username`
 * fields when consuming the returned session.
 */
import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import {
  Session,
  getServerSession as internalGetServerSession,
} from "next-auth";

interface CustomSession extends Session {
  user: Session["user"] & {
    id: string;
    emailVerified: string;
    username: string;
  };
}

export function getServerSession() {
  return internalGetServerSession(authOptions) as Promise<CustomSession>;
}
