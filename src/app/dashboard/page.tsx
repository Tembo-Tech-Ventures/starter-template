"use client";
import { MessageInput } from "@/app/api/messages/route";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import { getMessageById } from "@/modules/messages/lib/get-messages-by-id/get-messages-by-id";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const [nmessage, setMessage] = useState<MessageInput>(emptyMessage);
  const { data, mutate } = useAllMessages();
  const messages = data || [];

  console.log("@@ messages: ", messages);

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
          {messages.map((n) => (
            <Box key={n.id} width="100%" p={2}>
              <a
                href="#"
                onClick={async (e) => {
                  e.preventDefault();
                  const result = await getMessageById(n.id);
                  console.log("@@result ", result);
                }}
              >
                {n.content}
              </a>
            </Box>
          ))}
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
              e.preventDefault();
              const response = await fetch("/api/messages", {
                method: "POST",
                body: JSON.stringify(nmessage),
              });
              console.log("response: ", response);
              await mutate();
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
