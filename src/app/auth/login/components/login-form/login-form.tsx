"use client";

import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import email from "next-auth/providers/email";
import { signIn } from "next-auth/react";
import Image from "next/image";
import AICulture from "/public/Samp.png";
import Link from "next/link";
import { useState } from "react";
import { NavBar } from "@/components/navbar/navbar";
import "../../../../globalicons.css";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const inputStyle = {
    backgroundImage:
      "linear-gradient(to bottom right, red, aqua, silver, indigo, blue)",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "'Indie Flower', cursive",
  };
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/Login.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          cursor: "none",
        }}
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          console.log(mouse);
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
        }}
        width="100%"
        minHeight="100vh"
        display={"flex"}
      >
        <Image
          src={"/cursor.png"}
          alt="cursor"
          id="mouse"
          width={30}
          height={30}
          style={{
            display: "block",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <Image
          src={"/pointer.png"}
          alt="cursor"
          id="pointer"
          width={20}
          height={30}
          style={{
            display: "none",
            zIndex: 9999,
            position: "absolute",
            pointerEvents: "none",
          }}
          onClick={(l) => {
            return true;
          }}
        ></Image>
        <Stack
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
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
                style={{ fontFamily: "'Indie Flower', cursive" }}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight="normal"
                onMouseOver={(r) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(i) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
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
                id="email"
                label="Email"
                inputProps={{ style: inputStyle }}
                style={{
                  width: 220,
                  flexDirection: "column",
                  borderRadius: 50,
                }}
                value={email}
                onChange={(o) => setEmail(o.target.value)}
                onMouseOver={(r) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  var email = document.getElementById(
                    "email",
                  ) as HTMLInputElement;
                  email.style.cursor = "none";
                  cursor.srcset = "/text-cursor.png";
                }}
                onMouseOut={(i) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                }}
                required
              ></TextField>
            </Stack>
            <Stack
              borderTop={10}
              borderColor={"transparent"}
              direction={"column"}
              display={"flex"}
              style={{ width: 220, position: "relative", bottom: 50 }}
            >
              <Button
                variant="contained"
                type="submit"
                style={{
                  fontFamily: "Train_One",
                  width: 220,
                  borderRadius: 50,
                  backgroundColor: "purple",
                  cursor: "none",
                }}
                onMouseOver={(r) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/pointer.png";
                  cursor.height = 30;
                  cursor.width = 20;
                }}
                onMouseOut={(i) => {
                  var cursor = document.getElementById(
                    "mouse",
                  ) as HTMLImageElement;
                  cursor.srcset = "/cursor.png";
                  cursor.height = 30;
                  cursor.width = 30;
                }}
              >
                <span>Login</span>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
