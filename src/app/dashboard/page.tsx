"use client";
import { useAllMessages } from "@/modules/messages/hooks/use-all-messages/use-all-messages";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "public/Samp.png";
import { useState, useEffect, useRef } from "react";
import { MessageInput } from "../api/messages/route";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import { Train_One } from "next/font/google";
import "../globalicons.css";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useChat } from "ai/react";
import Markdown from "react-markdown";
import { PointOut, PointBack } from "@/components/mousecontrols/mousecontrol";
import { rotaryUnit, rotarySwitch } from "@/components/rotary-unit/rotary-unit";
import { faCloudShowersWater } from "@fortawesome/free-solid-svg-icons";
const emptyMessage: MessageInput = {
  content: "",
};
export default function Chat() {
  const router = useRouter();
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const pStyling: React.CSSProperties = {
    color: "gray",
    fontFamily: "'Indie Flower', cursive",
    cursor: "pointer",
  };

  const Home = () => {
    window.location.href = "/";
  };
  const Contact = () => {
    window.location.href = "/contact";
  };
  const About = () => {
    window.location.href = "/about";
  };
  const Chat = () => {
    window.location.href = "/chat";
  };
  const Bot = () => {
    window.location.href = "/dashboard";
  };
  const weather = () => {
    router.push("/weather");
  };

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100vh",
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
          <span className="material-symbols-outlined">home</span>
          <p style={pStyling} id="home" onClick={Home}>
            Home
          </p>
          <span
            className="material-symbols-outlined"
            id="contacts"
            style={{ marginLeft: 40 }}
          >
            contacts_product
          </span>
          <p style={pStyling} onClick={Contact}>
            Contact us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 30 }}
          >
            local_library
          </span>
          <p style={pStyling} onClick={About}>
            About us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50 }}
          >
            chat
          </span>
          <p id="chats" style={pStyling} onClick={Chat}>
            P2P Chat
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50 }}
          >
            forum
          </span>
          <p id="p2b" style={pStyling} onClick={Bot}>
            Chats & Privacy
          </p>
          <span>
            <FontAwesomeIcon
              icon={faCloudShowersWater}
              style={{ marginLeft: 40 }}
            />
          </span>
          <p style={pStyling} onClick={weather}>
            Weather Forecast
          </p>
          <Stack
            direction="row"
            justifyContent="flex-end"
            style={{ cursor: "none" }}
          >
            <Button
              variant="contained"
              id="button"
              style={{ backgroundColor: "black", left: 130, cursor: "pointer" }}
              onClick={(r) => {
                window.location.href = "/auth/logout";
              }}
            >
              Logout
            </Button>
          </Stack>
        </nav>
        <span
          id="settings"
          className="material-symbols-outlined"
          style={{ color: "white", position: "absolute", right: 7, top: 10 }}
          onClick={(j) => {
            window.location.href = "/settings";
          }}
          onMouseOver={PointOut}
          onMouseEnter={rotaryUnit}
          onMouseLeave={rotarySwitch}
          onMouseOut={PointBack}
        >
          settings
        </span>
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Baskervville SC', serif",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          Search Anything...
        </Typography>
        <Stack
          sx={{
            display: "flex",
            position: "relative",
            overflowY: "scroll",
            overflowX: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          {messages.map((message) => (
            <div key={message.id}>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "'Oswald', sans-serif",
                  fontOpticalSizing: "auto",
                  fontStyle: "normal",
                }}
              >
                {message.role === "user" ? "User: " : "AI: "}
              </p>
              <Markdown>{message.content}</Markdown>
              <br /> <br />
            </div>
          ))}
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              id="search-bar"
              placeholder="Search for anything..."
              className="search-bar"
              value={input}
              onChange={handleInputChange}
            ></input>
          </form>
        </Stack>
      </Stack>
    </Box>
  );
}
