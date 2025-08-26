"use client";

/**
 * Form used to register a new user with a username and password.
 *
 * The form POSTs to `/api/auth/register` which creates the user and returns a
 * simple success indicator.  On success, the user is redirected to the login
 * page where they can authenticate.
 */
import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sha256 } from "js-sha256";

export function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as any;
    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.username.value,
        password: sha256(form.password.value),
      }),
    });
    setLoading(false);
    router.push("/auth/login");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2} maxWidth={400}>
        <TextField label="Username" name="username" required />
        <TextField label="Password" name="password" type="password" required />
        <Button type="submit" variant="contained" disabled={loading}>
          Register
        </Button>
      </Stack>
    </form>
  );
}
