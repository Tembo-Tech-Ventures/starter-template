/**
 * Registration page that leverages a simple credential-based flow.
 * Existing users are redirected to the dashboard.
 */
import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { RegisterForm } from "@/modules/auth/components/register-form/register-form";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Stack, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h2">Get started for free</Typography>
      <Typography>
        Already registered? <Link href="/auth/login">Sign in</Link> to your
        account.
      </Typography>
      <RegisterForm />
    </Stack>
  );
}
