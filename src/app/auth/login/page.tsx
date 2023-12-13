import Image from "next/image";
import Link from "next/link";


import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import { Stack, Typography, TextField, Button, Box } from "@mui/material";
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
    <Box width="100%" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" style={{backgroundImage: "linear-gradient(rgba(140,45,230,0.7),rgba(140,45,230,0.7)),url('/Background.png')"}}>
      <Stack spacing={5} style={{backgroundColor:"#fff", padding:50, borderRadius:20}}>
       <Typography variant="h6">Sign in to your account</Typography>
        <TextField label="User ID" style={{width:220}}/>
        <TextField label="Password" style={{width:220}}/>
        <Button style={{backgroundColor:"#000", color:"#fff", borderRadius:50}}>Login</Button>

      </Stack>
    </Box>

  );
}
