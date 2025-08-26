"use client";

/**
 * Registration form for creating an account with email and password.
 * On success the user is automatically signed in to streamline the
 * onboarding process.
 */
import { Button, Stack, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function RegisterForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (success) {
    return <Typography>Registration complete! Redirecting…</Typography>;
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem("email") as HTMLInputElement)
          .value;
        const password = (
          form.elements.namedItem("password") as HTMLInputElement
        ).value;
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Registration failed");
          return;
        }
        await signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: "/dashboard",
        });
        setSuccess(true);
      }}
    >
      <Stack spacing={2}>
        <TextField label="Email" name="email" type="email" required />
        <TextField label="Password" name="password" type="password" required />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Stack>
    </form>
  );
}
