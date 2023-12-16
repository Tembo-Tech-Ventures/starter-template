import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import {Box, Button, Stack, TextField, Typography, colors } from "@mui/material";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Duru_Sans, Fira_Sans, Inter, Train_One } from "next/font/google";
import { green, red } from "@mui/material/colors";
import {Agriculture, Label, RememberMe} from "@mui/icons-material"
import Image from "next/image"
import AICulture from "public/Sample.png"
export const metadata: Metadata = {
  title: "Sign In",
};

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (

    <Box>
      <Stack style={{backgroundImage: "linear-gradient(rgba(245, 158, 158, 0.5),rgba(35, 163, 152, 0.5)),url('https://i.pinimg.com/originals/4f/4a/1a/4f4a1a9d7c51499e0f4d28ec5e128022.jpg')", backgroundSize: "cover", backgroundPosition: "center", alignItems: "center", justifyContent: "center", display: "flex"}} width="100%" minHeight="100vh" display={"flex"}>
        <Stack display={"flex"} width={220} height={50} position={"relative"} style={{float: "left"}} left={-500}>
          <Link href={"https://3000-harrison302-onlineagric-r0ciekpheja.ws-eu106.gitpod.io/"}><Image alt="AICulture" src={AICulture}></Image></Link>
        </Stack>
        <Stack style={{backgroundColor: "white", width: 310, alignItems: "center", justifyContent: "center"}}>
          <Stack direction={"column"} style={{height: "30vh"}} spacing={5} borderTop={90} borderColor={"transparent"} >
            <Typography fontSize={22} fontFamily={"Inter"} fontStyle={"normal"} fontWeight={400} lineHeight="normal" >Sign into your account</Typography>
          </Stack>
          <Stack spacing={2} style={{ width: 220, height: "30vh"}} borderBottom={50} borderColor={"transparent"}>
            <TextField label="Username or email" style={{width: 220, flexDirection: "column", borderRadius: 50,}} required></TextField>
            <TextField label="Password" type="password" required />
          </Stack>
          <Stack borderTop={10} borderColor={"transparent"} direction={"column"} display={"flex"} style={{width: 220, position: "relative"}}>
            <Link href={"/dashboard"}><Button variant="contained" style={{fontFamily: "Train_One", width: 220, borderRadius: 50, backgroundColor: "purple"}}>Login</Button></Link>
          </Stack>
          <Typography marginTop={5} borderColor={"transparent"} fontFamily={"Duru_Sans"} width={255} display={"flex"} alignItems={"center"} justifyContent={"center"} flexShrink={0} fontSize={14} fontStyle={"normal"} fontWeight={400} lineHeight={"normal"}>Don't have an account? Sign up</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}