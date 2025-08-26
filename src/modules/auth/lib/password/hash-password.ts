/**
 * Hash a plain text password using bcrypt.
 * This helper centralizes the hashing configuration
 * so other modules do not need to know implementation details.
 */
import { hash } from "bcryptjs";

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 10);
}
