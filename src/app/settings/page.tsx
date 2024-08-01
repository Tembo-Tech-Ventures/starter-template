"use client";
import { Mice } from "@/components/mice/mouse";
import { NavBar } from "@/components/navbar/navbar";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "../../app/globalicons.css";
import { faUserAlt, faX } from "@fortawesome/free-solid-svg-icons";
import { PointBack, PointOut } from "@/components/mousecontrols/mousecontrol";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";
import { GetAllChatMessagesResponse } from "../api/chat/route";
import { useState } from "react";

export default function Settings() {
  const router = useRouter();
  const session = useSession();
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
              <Typography variant="h4" id="userName" className="userComponents">
                Name: Unknown 4 now
              </Typography>
              <br />
              <Typography
                variant="h4"
                id="userEmail"
                className="userComponents"
              >
                Email {session.data?.user?.email}
              </Typography>
              <br />
              <Typography
                variant="h4"
                id="usernameA"
                className="userComponents"
              >
                Username: {uniqueUsernames}
              </Typography>
              <br />
              <Button
                variant="outlined"
                id="editProfile"
                onMouseOver={PointOut}
                onMouseOut={PointBack}
                onClick={() => {
                  router.push("/settings/edit-user-profile");
                }}
              >
                Edit User Profile
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
