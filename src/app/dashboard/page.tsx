"use client";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import { Box, CircularProgress, Stack } from "@mui/material";
import Image from "next/image";
import Logo from "public/Sample.png";
import { useState } from "react";
import { MessageInput } from "../api/messages/route";

const emptyMessage: MessageInput = {
  content: "",
};
export default function HomePage() {
  const [nmessage, setMessage] = useState<MessageInput>(emptyMessage);

  const { data: MessagesResponse, mutate, isLoading } = useAllMessages();

  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "url('https://suntrics.com/wp-content/uploads/2023/05/Drones-Help-Farmers.jpg')",
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
            {MessagesResponse?.map((m) => (
              <a href="#">
                <p>{m.content}</p>
              </a>
            ))}
            <div style={{ height: 100 }} />
            {isLoading && <CircularProgress />}
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
              e.preventDefault();
              console.log("@@ message input: ", nmessage);
              const response = await fetch("/api/messages", {
                method: "POST",
                body: JSON.stringify(nmessage),
              });
              console.log("@@response: ", response);
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
