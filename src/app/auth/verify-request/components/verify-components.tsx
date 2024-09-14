"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "../../../globalicons.css";

export default function Container() {
  return (
    <Stack
      width={"100%"}
      height={"100vh"}
      style={{
        backgroundImage: "url('/email.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
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
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        borderTop={300}
        style={{ borderColor: "transparent" }}
      >
        <Typography
          style={{
            backgroundImage:
              "linear-gradient(to left, red, indigo, violet, blue, yellow, red)",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "'Reddit Mono', monospace",
          }}
          onMouseOver={(r) => {
            var cursor = document.getElementById("mouse") as HTMLImageElement;
            cursor.srcset = "/text-cursor.png";
          }}
          onMouseOut={(i) => {
            var cursor = document.getElementById("mouse") as HTMLImageElement;
            cursor.srcset = "/cursor.png";
          }}
          variant="h2"
        >
          Email Incoming
        </Typography>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography
          variant="h4"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, gold, indigo, red, blue, violet, silver)",
            WebkitBackgroundClip: "text",
            MozBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "'Reddit Mono', monospace",
          }}
          onMouseOver={(r) => {
            var cursor = document.getElementById("mouse") as HTMLImageElement;
            cursor.srcset = "/text-cursor.png";
          }}
          onMouseOut={(i) => {
            var cursor = document.getElementById("mouse") as HTMLImageElement;
            cursor.srcset = "/cursor.png";
          }}
        >
          Check your email
        </Typography>
      </Stack>
    </Stack>
  );
}
