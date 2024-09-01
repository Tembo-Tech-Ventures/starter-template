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
