/**
 * Compare a plain text password against its bcrypt hash.
 * Returns true when the provided password matches.
 */
import { compare } from "bcryptjs";

export async function verifyPassword(
  password: string,
  hashed: string,
): Promise<boolean> {
  return compare(password, hashed);
}
