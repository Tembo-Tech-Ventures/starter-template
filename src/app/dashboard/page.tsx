"use client";
import { Box, Stack, TextField, filledInputClasses } from "@mui/material";
import Image from "next/image";
import Logo from "public/Sample.png";
import { useEffect, useState } from "react";
import { GET, Message, POST } from "../api/Messages/route";
import { CenterFocusStrong } from "@mui/icons-material";

const emptyMessage: Message = {
  id: "",
  content: "",
};
export default function HomePage() {
  const [nmessage, setMessage] = useState<Message>(emptyMessage);
  const [Messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/Messages").then(async (res) => {
      const MessagesResponse = await res.json();
      setMessages(MessagesResponse);
    });
  }, []);
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "linear-gradient(rgba(245, 158, 158, 0.5),rgba(35, 163, 152, 0.5)),url('https://i.pinimg.com/originals/4f/4a/1a/4f4a1a9d7c51499e0f4d28ec5e128022.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          marginTop: 10,
        }}
        display={"flex"}
      >
        <Stack display={"flex"} width={220} height={50}>
          <Image alt="Logo" src={Logo}></Image>
        </Stack>
        <Stack
          style={{ backgroundColor: "white", overflow: "scroll" }}
          width={600}
          height={595}
          marginLeft={52}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            style={{ position: "relative", width: 100, marginBottom: -100 }}
          >
            {Messages.map((n) => (
              <div key={n.content}>
                <p>{n.content}</p>
              </div>
            ))}
            <div style={{ height: 100 }} />
          </Stack>
        </Stack>
        <Stack
          width={500}
          marginTop={-38}
          style={{
            height: 2,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 450,
          }}
        >
          <form
            style={{
              position: "relative",
              width: 500,
              marginTop: 540,
              backgroundColor: "silver",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
            onSubmit={async (e) => {
              {
                e.preventDefault();
                const response = await fetch("/api/Messages", {
                  method: "POST",
                  body: JSON.stringify(nmessage),
                });
                console.log("response: ", response);
                fetch("/api/Messages").then(async (res) => {
                  const MessagesResponse = await res.json();
                  setMessages(MessagesResponse);
                });
              }
            }}
          >
            <input
              onChange={(e) =>
                setMessage((prev) => ({ ...prev, content: e.target.value }))
              }
              type="search"
              placeholder="search"
              id="search"
              name="search"
              style={{
                borderRadius: 50,
                width: "95%",
                height: 51,
                border: "none",
                outline: "none",
                alignItems: "bottom",
                justifyContent: "bottom",
                background: "silver",
              }}
            ></input>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
