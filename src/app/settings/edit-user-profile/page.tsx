"use client";
import { Mice } from "@/components/mice/mouse";
import { NavBar } from "@/components/navbar/navbar";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../../../app/globalicons.css";
import { faUserAlt, faX } from "@fortawesome/free-solid-svg-icons";
import {
  PointBack,
  PointOut,
  TextBack,
  TextOut,
} from "@/components/mousecontrols/mousecontrol";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";
import { GetAllChatMessagesResponse } from "../../api/chat/route";
import { useState } from "react";

export default function EditUserProfile() {
  const router = useRouter();
  const session = useSession();
  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
  });
  const [messages, setMessages] = useState<
    GetAllChatMessagesResponse["messages"]
  >([]);
  const { data: databaseChatMessages } = useAllChatMessages();
  const uniqueUsernames = Array.from(
    new Set(
      [...(databaseChatMessages || []), ...messages].map(
        (message) => message.owner?.username,
      ),
    ),
  ).join("");
  const doneCustomizing = () => {
    router.back();
  };
  console.log("@@values", values);
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/settings.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          cursor: "none",
        }}
        onMouseOver={(e) => {
          var mouse = document.getElementById("mouse") as HTMLElement;
          var pointer = document.getElementById("pointer") as HTMLElement;
          window.addEventListener("mousemove", (t) => {
            mouse!.style.top = `${t.clientY}px`;
            mouse!.style.left = `${t.clientX}px`;
            pointer!.style.top = `${t.clientY}px`;
            pointer!.style.left = `${t.clientX}px`;
          });
        }}
      >
        <Mice />
        <Stack id="entpage">
          <Stack id="leftPage">
            <Typography variant="h2">Settings</Typography>
            <br />
            <Stack id="userProfile">
              <FontAwesomeIcon icon={faUserAlt} id="userAlt" />
              <Typography variant="h5">User profile</Typography>
            </Stack>
          </Stack>
          <Stack id="rightPage">
            <FontAwesomeIcon
              icon={faX}
              id="exit"
              onMouseOver={PointOut}
              onMouseOut={PointBack}
              onClick={doneCustomizing}
            />
            <Stack id="profileDisplay">
              <Typography variant="h2" id="userDisplay">
                User profile
              </Typography>
              <br />
              <form
                action=""
                style={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TextField
                  label="Name"
                  id="name"
                  sx={{ cursor: "none" }}
                  fullWidth
                  onMouseOver={(l) => {
                    var fname = document.getElementById(
                      "name",
                    ) as HTMLInputElement;
                    var cursor = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    cursor.srcset = "/text-cursor.png";
                    fname.style.cursor = "none";
                  }}
                  onMouseOut={TextBack}
                  value={session.data?.user?.name}
                  onChange={(e) => {
                    setValues({ ...values, name: e.target.value });
                  }}
                />
                <br />
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  onMouseOver={(l) => {
                    var fname = document.getElementById(
                      "email",
                    ) as HTMLInputElement;
                    var cursor = document.getElementById(
                      "mouse",
                    ) as HTMLImageElement;
                    cursor.srcset = "/text-cursor.png";
                    fname.style.cursor = "none";
                  }}
                  onMouseOut={TextBack}
                  value={session.data?.user?.email}
                  onChange={(o) => {
                    setValues({ ...values, email: o.target.value });
                  }}
                />
                <br />
                <TextField
                  label="Username"
                  value={uniqueUsernames}
                  fullWidth
                  onChange={(l) => {
                    setValues({ ...values, username: l.target.value });
                  }}
                />
                <br />
                <Button
                  variant="outlined"
                  type="submit"
                  fullWidth
                  id="editProfile"
                  sx={{ borderColor: "bisque" }}
                  onMouseOver={PointOut}
                  onMouseOut={PointBack}
                >
                  Submit
                </Button>
              </form>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
