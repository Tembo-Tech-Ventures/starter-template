import React, { useEffect, useState, useRef, useCallback } from "react";
import Pusher from "pusher-js";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../globalicons.css";
import { redirect, useRouter } from "next/navigation";
import { NavBar } from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useAllChatMessages } from "@/modules/chat/hooks/use-all-chat-messages/use-all-chat-messages";
import { getAllChatMessages } from "@/modules/chat/lib/get-all-chat-messages/get-all-chat-messages";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import Link from "next/link";
import Image from "next/image";
import About from "../about/page";
import Contact from "../contact/page";
import Home from "../page";
import { matchesMiddleware } from "next/dist/shared/lib/router/router";
import { GetAllMessagesResponse } from "../api/messages/route";
import { GetAllChatMessagesResponse } from "../api/chat/route";
import { Mice } from "@/components/mice/mouse";
import { MenuBar } from "@/components/menubar/menubar";
import { PointBack, PointOut } from "@/components/mousecontrols/mousecontrol";
import { rotarySwitch, rotaryUnit } from "@/components/rotary-unit/rotary-unit";
import { faCloudShowersWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "./components/container/container";

export default async function Chat() {
  const session = await getServerSession();
  if (session.user.isBanned) {
    redirect("/banned");
  }
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <Box>
      <Container />
    </Box>
  );
}
