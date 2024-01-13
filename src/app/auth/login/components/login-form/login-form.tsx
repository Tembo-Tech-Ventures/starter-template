"use client";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import email from "next-auth/providers/email";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Background from "/public/Background.png";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(140,45,230,0.7),rgba(140,45,230,0.7)),url('/Background.png')",
      }}
    >
      <form
        onSubmit={(p) => {
          p.preventDefault();
          signIn("email", { email: (p.target as any).email.value });
          setSubmitted(true);
        }}
      >
        <Stack
          spacing={5}
          style={{ backgroundColor: "#fff", padding: 50, borderRadius: 20 }}
        >
          <Typography variant="h6">Sign in to your account</Typography>
          <TextField
            label="E-mail"
            style={{ width: 220 }}
            name="email"
            value={email}
            onChange={(o) => setEmail(o.target.value)}
            required
          ></TextField>
          <TextField label="Password" style={{ width: 220 }} />
          <Button
            type="submit"
            style={{ backgroundColor: "#000", color: "#fff", borderRadius: 50 }}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
