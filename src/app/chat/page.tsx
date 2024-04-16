"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { Button, Stack } from "@mui/material";
import "@/app/index.css";
import Link from "next/link";
import Image from "next/image";
import send from "../icons/paper-plane-solid.svg";
import home from "../icons/house-solid.svg";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";
import { getAllChatMessages } from "@/modules/chat/lib/get-all-chat-messages/get-all-chat-messages";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface MessageData {
  message: string;
  createdAt: Date;
  username?: string;
  email: string;
}

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
  cluster: "eu",
});

export default function Chat() {
  const session = useSession();
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [input, setInput] = useState<string>("");
  const [email, setEmail] = useState<MessageData[]>([]);
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const { data: databaseChatMessages } = useAllChatMessages();

  console.log("@@ databaseChatMessages", databaseChatMessages);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [router, session.status]);

  useEffect(() => {
    const channel = pusher.subscribe("chat");

    channel.bind("message", (data: MessageData) => {
      const messageWithTimestamp = {
        ...data,
        timestamp: data.createdAt || new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, messageWithTimestamp]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <body className="chatpage">
      <div className="chat-home">
        <Link href="./">
          <Image
            draggable="false"
            src={home}
            alt="home-icon"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <main>
        <div className="user-settings">
          <div className="user-icon">
            <FontAwesomeIcon
              className="user-itself"
              icon={faUser}
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="chat-chat">
          {menuVisible && (
            <div className="user-menu">
              <div className="user-options">
                <div className="user-profile">
                  <Link href="">
                    <b>User Profile</b>
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="chat-display">
            {[...(databaseChatMessages || []), ...messages].map(
              (message, index) => (
                <p key={index}>
                  <b>{message.email}</b>
                  {message.message && message.email && (
                    <span style={{ fontSize: "10px", color: "gray" }}>
                      ({new Date(message.createdAt).toLocaleString()})
                    </span>
                  )}
                  :{message.message}
                </p>
              ),
            )}
          </div>

          <div className="chat-input">
            <input
              className="input"
              placeholder="Message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                borderRadius: 10,
                width: "100%",
                height: 40,
                border: "none",
                outline: "none",
                background: "silver",
                marginBottom: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Button
              className="send"
              onClick={() => {
                fetch("/api/chat", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    message: input,
                    username: "user",
                    email: session.data?.user?.email || "cjxfs2007@gmail.com", // Replace with actual email
                  }),
                });
                setInput("");
              }}
            >
              <Image
                draggable="false"
                alt="send"
                src={send}
                width={20}
                height={20}
              ></Image>
            </Button>
          </div>
        </div>
      </main>
    </body>
  );
}
