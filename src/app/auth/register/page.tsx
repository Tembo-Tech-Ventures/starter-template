import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Stack, Typography, Box, TextField } from "@mui/material";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Box width="100%" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" style={{backgroundImage: "linear-gradient(rgba(140,45,230,0.7),rgba(140,45,230,0.7)),url('https://hdqwalls.com/artistic-horizon-mountain-purple-tree-minimalism-wallpaper.png')"}}>
      <Stack spacing={2} style={{backgroundColor:"#fff", padding:50, borderRadius:20}}>
        <Typography variant="h5" style={{textAlign:"center"}}>Create an Account</Typography>
        <TextField label="First Name" />
        <TextField label="Last Name" />       
        <TextField label="Date of Birth" />
        <TextField label="Email Address" />
        <TextField label="Password" />
        <TextField label="Country/Region" />
      </Stack>
    </Box>

  );
}
