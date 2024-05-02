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
  username: string;
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
  const [profiledata, setProfileData] = useState(false);
  const [userName, setUserName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const changePic = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    await fetch("/api/pfps", {
      method: "POST",
      body: formData,
    });

    // Handle success or error
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(userName);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName }),
      });
      setUserName("");
    } catch (error) {
      console.error("Failed to update name:", error);
    }
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleProfile = () => {
    setProfileData(!profiledata);
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
                <div>
                  <Button className="user-profile" onClick={toggleProfile}>
                    Account
                  </Button>
                </div>
                <div>
                  <Button className="user-display" onClick={toggleProfile}>
                    Display
                  </Button>
                </div>
              </div>
              {profiledata && (
                <div className="user-pages">
                  <div className="user-profile-page">
                    <div className="user-profile-page-picture"></div>
                    <p>
                      Name: <b>{userName}</b>
                      <br></br>
                      E-mail: <b>{session.data?.user?.email}</b>
                    </p>
                  </div>
                  <div className="user-page-profile-picture-upload">
                    <form onSubmit={changePic}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <button type="submit">Upload</button>
                    </form>
                  </div>
                  <div className="user-page-profile-name-change">
                    <form onSubmit={handleSubmit}>
                      <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <Button type="submit">Change</Button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="chat-display">
            {[...(databaseChatMessages || []), ...messages].map(
              (message, index) => (
                <p key={index}>
                  <b>{userName ? userName : message.email}</b>
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
                    username: userName,
                    email: session.data?.user?.email || "cjxfs2007@gmail.com",
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
