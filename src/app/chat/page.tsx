"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

interface MessageData {
  message: string;
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "eu",
});

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

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
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <input
        placeholder="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          fetch("/api/chat", {
            method: "POST",
            body: JSON.stringify({
              message: input,
            }),
          });
          setInput("");
        }}
      >
        Send
      </button>
    </div>
  );
}
