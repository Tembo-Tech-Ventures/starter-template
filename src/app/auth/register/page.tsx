import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { EmailLoginForm } from "@/modules/auth/components/email-login-form/email-login-form";
import { type Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { CenterFocusStrong, Gradient, Style } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { Train_One } from "next/font/google";
import Image from "next/image";
import logo from "public/Sample.png";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default async function Register() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "url('https://suntrics.com/wp-content/uploads/2023/05/Drones-Help-Farmers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        width="100%"
        minHeight="100vh"
        display={"flex"}
      >
        <Link
          href={
            "https://3000-harrison302-onlineagric-r0ciekpheja.ws-eu106.gitpod.io/"
          }
        >
          <Image alt="Logo" src={logo}></Image>
        </Link>
        <Stack
          display={"flex"}
          alignItems={"center"}
          style={{ backgroundColor: "white", height: 450, width: 350 }}
        >
          <Typography variant="h5" color={"black"}>
            Create an Account
          </Typography>
          <Stack
            spacing={2}
            borderTop={20}
            borderColor={"transparent"}
            marginLeft={10}
          >
            <TextField
              type="text"
              label="First Name"
              style={{
                display: "flex",
                width: 150,
                marginLeft: -90,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 30,
              }}
              required
            ></TextField>
            <TextField
              type="text"
              label="Last Name"
              style={{
                display: "flex",
                left: 70,
                width: 160,
                marginTop: -56,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
              required
            ></TextField>
            <TextField
              type="email"
              label="Email Address"
              style={{
                display: "flex",
                width: 150,
                marginLeft: -90,
                flexDirection: "column",
                position: "relative",
              }}
              required
            ></TextField>
            <TextField
              type="text"
              label="Username"
              style={{ display: "flex", width: 160, left: 70, top: -72 }}
              required
            ></TextField>
            <TextField
              type="password"
              label="Password"
              id="pswrd"
              style={{ display: "flex", right: 90, top: -70, width: 220 }}
              required
            ></TextField>
            <TextField
              type="password"
              label="Repeat-password"
              style={{ display: "flex", right: 90, top: -70 }}
              required
            ></TextField>
          </Stack>

          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"column"}
          >
            <Button
              style={{
                backgroundColor: "green",
                width: 244,
                height: 51,
                bottom: 50,
                marginTop: -3,
                borderRadius: 50,
                color: "purple",
              }}
            >
              Sign up
            </Button>
            <Typography
              color={"black"}
              fontFamily={"Train_One"}
              fontSize={13}
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={-3}
            >
              Already have an account? <Link href={"/auth/login"}>Sign in</Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
