/**
 * Login page rendering the `LoginForm` component.  If a user already has a
 * session, they are immediately redirected to the dashboard.
 */
import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { LoginForm } from "@/modules/auth/components/login-form/login-form";
import { Stack, Typography } from "@mui/material";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h2">Sign in to your account</Typography>
      <Typography>
        Don’t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-green-600 hover:underline"
        >
          Sign up
        </Link>{" "}
        for a free trial.
      </Typography>
      <LoginForm />
    </Stack>
  );
}
