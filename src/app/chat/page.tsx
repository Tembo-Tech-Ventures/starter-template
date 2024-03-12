"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { Box, Stack } from "@mui/material";
import "../globalicons.css";
import { useRouter } from "next/navigation";

interface MessageData {
  message: string;
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "mt1",
});

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const channel = pusher.subscribe("chat");

    channel.bind("message", (data: MessageData) => {
      console.log("@@ message: ", data);
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/Cht.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <nav
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            wordSpacing: 2,
            gap: 5,
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ position: "relative", color: "gray" }}
          >
            home
          </span>
          <p
            style={{
              fontFamily: "'Indie Flower', cursive",
              color: "gray",
              cursor: "pointer",
              position: "relative",
            }}
            id="home"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Home
          </p>
          <span
            className="material-symbols-outlined"
            id="contacts"
            style={{ marginLeft: 40, color: "gray" }}
          >
            contacts_product
          </span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
          >
            Contact us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 30, color: "gray" }}
          >
            local_library
          </span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(y) => {
              y.preventDefault();
              router.push("/about");
            }}
          >
            About us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50, color: "gray" }}
          >
            chat
          </span>
          <p
            id="chats"
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(c) => {
              c.preventDefault();
              router.push("/chat");
            }}
          >
            Chats & Privacy
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50, color: "gray" }}
          >
            forum
          </span>
          <p
            id="p2b"
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(c) => {
              c.preventDefault();
              router.push("/dashboard");
            }}
          >
            PrimeAI
          </p>
        </nav>
        <Stack>
          <div
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.3)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flexDirection: "column",
              position: "relative",
              height: 500,
              width: 1000,
              left: 150,
              top: 50,
              overflow: "scroll",
            }}
          >
            {messages.map((message, index) => (
              <p
                key={index}
                style={{
                  backgroundColor: "green",
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 50,
                  width: 250,
                  height: 50,
                }}
              >
                {message}
              </p>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              flexDirection: "row",
              top: 500,
            }}
          >
            <input
              placeholder="Message"
              style={{
                display: "flex",
                position: "fixed",
                top: 640,
                marginTop: "auto",
                alignItems: "bottom",
                justifyContent: "bottom",
                borderBottom: 0,
                flexGrow: 1,
                marginRight: 10,
                backgroundColor: "rgba(128, 128, 128, 0.3)",
                height: 50,
                width: 1250,
                outline: "none",
                border: "none",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              style={{
                display: "flex",
                position: "fixed",
                top: 645,
                background: "transparent",
                border: "transparent",
                left: 1255,
              }}
            >
              <span
                className="material-symbols-outlined"
                id="text"
                style={{
                  backgroundColor: "green",
                  width: 30,
                  cursor: "pointer",
                }}
                onClick={() => {
                  fetch("/api/chat", {
                    method: "POST",
                    body: JSON.stringify({
                      message: input,
                    }),
                  });
                  setInput("");
                }}
                onMouseEnter={(u) => {
                  u.preventDefault();
                  var button = document.getElementById(
                    "text",
                  ) as HTMLSpanElement;
                  button.style.backgroundColor = "aqua";
                  button.style.color = "white";
                  button.style.transition = "1s ease-in-out";
                }}
                onMouseOut={(j) => {
                  j.preventDefault();
                  var button = document.getElementById(
                    "text",
                  ) as HTMLSpanElement;
                  button.style.backgroundColor = "green";
                  button.style.color = "black";
                  button.style.transition = "1s ease-in-out";
                }}
              >
                send
              </span>
            </button>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
