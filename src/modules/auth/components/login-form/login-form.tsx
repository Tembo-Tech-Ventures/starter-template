"use client";

/**
 * Simple username/password login form used on the login page.
 *
 * The form posts the supplied credentials to NextAuth using the credentials
 * provider.  Errors are intentionally not exposed to keep the example concise.
 */
import { Button, Stack, TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as any;
    await signIn("credentials", {
      username: form.username.value,
      password: form.password.value,
      callbackUrl: "/dashboard",
    });
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2} maxWidth={400}>
        <TextField label="Username" name="username" required />
        <TextField label="Password" name="password" type="password" required />
        <Button type="submit" variant="contained" disabled={loading}>
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
