import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Duru_Sans, Fira_Sans, Inter, Train_One } from "next/font/google";
import { green, red } from "@mui/material/colors";
import { Agriculture, Label, RememberMe } from "@mui/icons-material";
import Image from "next/image";
import AICulture from "public/Sample.png";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { LoginForm } from "./components/login-form/login-form";
export const metadata: Metadata = {
  title: "Sign In",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
