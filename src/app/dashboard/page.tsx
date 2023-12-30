"use client";
import { Box, Stack, TextField, filledInputClasses } from "@mui/material";
import { useEffect, useState } from "react";
import { GET, MessageInput, POST } from "../api/messages/route";
import { CenterFocusStrong } from "@mui/icons-material";
import { getMessageById } from "@/modules/messages/lib/get-messages-by-id/get-messages-by-id";

const emptyMessage: MessageInput = {
  id: "",
  content: "",
};
export default function HomePage() {
  const [nmessage, setMessage] = useState<MessageInput>(emptyMessage);
  const [Messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetch("/api/messages").then(async (res) => {
      const MessagesResponse = await res.json();
      setMessages(MessagesResponse);
    });
  }, []);
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "linear-gradient(rgba(140,45,230,0.7),rgba(140,45,230,0.7)),url('/Background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        display={"flex"}
      >
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
                <a
                  href="#"
                  onClick={async (e) => {
                    e.preventDefault();
                    const result = await getMessageById(n.id);
                    console.log("@@result ", result);
                  }}
                ></a>
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
                const response = await fetch("/api/messages", {
                  method: "POST",
                  body: JSON.stringify(nmessage),
                });
                console.log("response: ", response);
                fetch("/api/messages").then(async (res) => {
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
