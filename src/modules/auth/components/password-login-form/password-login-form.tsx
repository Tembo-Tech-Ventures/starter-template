"use client";

/**
 * Simple email/password login form that relies on the credentials
 * provider. The form submits via `next-auth` and displays a basic
 * error message if authentication fails.
 */
import { Button, Stack, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function PasswordLoginForm() {
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        const form = e.target as HTMLFormElement;
        const res = await signIn("credentials", {
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          password: (form.elements.namedItem("password") as HTMLInputElement)
            .value,
          redirect: false,
        });
        if (res?.error) {
          setError("Invalid credentials");
        } else {
          window.location.href = "/dashboard";
        }
      }}
    >
      <Stack spacing={2}>
        <TextField label="Email" name="email" type="email" required />
        <TextField label="Password" name="password" type="password" required />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
