"use client";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import email from "next-auth/providers/email";
import { signIn } from "next-auth/react";
import Image from "next/image";
import AICulture from "/public/Sample.png";
import Link from "next/link";
import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
        <Stack
          display={"flex"}
          width={220}
          height={50}
          position={"relative"}
          style={{ float: "left" }}
          left={-500}
        >
          <Link
            href={
              "https://3000-harrison302-onlineagric-r0ciekpheja.ws-eu106.gitpod.io/"
            }
          >
            <Image alt="AICulture" src={AICulture}></Image>
          </Link>
        </Stack>
        <Stack
          style={{
            backgroundColor: "white",
            width: 410,
            alignItems: "center",
            justifyContent: "center",
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
              direction={"column"}
              style={{ height: "30vh" }}
              spacing={5}
              borderTop={90}
              borderColor={"transparent"}
            >
              <Typography
                fontSize={22}
                fontFamily={"Inter"}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight="normal"
              >
                Sign into your account
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              style={{ width: 220, height: "30vh" }}
              borderBottom={50}
              borderColor={"transparent"}
            >
              <TextField
                name="email"
                label="Username or email"
                style={{
                  width: 220,
                  flexDirection: "column",
                  borderRadius: 50,
                }}
                value={email}
                onChange={(o) => setEmail(o.target.value)}
                required
              ></TextField>
              <TextField label="Password" type="password" required />
            </Stack>
            <Stack
              borderTop={10}
              borderColor={"transparent"}
              direction={"column"}
              display={"flex"}
              style={{ width: 220, position: "relative" }}
            >
              <Button
                variant="contained"
                type="submit"
                style={{
                  fontFamily: "Train_One",
                  width: 220,
                  borderRadius: 50,
                  backgroundColor: "purple",
                }}
              >
                <span>Login</span>
              </Button>
            </Stack>
            <Typography
              marginTop={5}
              borderColor={"transparent"}
              fontFamily={"Duru_Sans"}
              width={255}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexShrink={0}
              fontSize={14}
              fontStyle={"normal"}
              fontWeight={400}
              lineHeight={"normal"}
            >
              Don't have an account? Sign up
            </Typography>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
