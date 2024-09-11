import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import "../../app/globalicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faX } from "@fortawesome/free-solid-svg-icons";
import { PointBack, PointOut } from "../mousecontrols/mousecontrol";
import { Mice } from "../mice/mouse";
import { Controller } from "../mouse-movement-controls/mouse-movement-controls";
import { useState } from "react";
import router from "next/router";
import { useSession } from "next-auth/react";
import MenuButton from "./components/menu-buttons/menu-buttons";

export function MenuBar() {
  const session = useSession();
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar sx={{ height: 100, width: 100 }}>
          <Typography variant="h3">
            {session.data?.user?.name?.toUpperCase().substring(0, 1) ||
              session.data?.user?.email?.toUpperCase().substring(0, 1)}
          </Typography>
        </Avatar>
      </Stack>
      <br />
      <Stack
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontFamily: "'Oswald', sans-serif" }}>
          {session.data?.user?.name || "No name registered"}
        </Typography>
      </Stack>
      <br />
      <MenuButton
        link="/settings"
        color="blue"
        text="Your Profile"
        icon="person"
      />
      <hr />
      <MenuButton
        link="/settings/#plans"
        color="red"
        text="Your plans"
        icon="paid"
      />
      <hr />
      <MenuButton link="/chat" color="green" text="User Chat" icon="p2p" />
      <hr />
      <MenuButton link="/ai" color="indigo" text="AI Chat" icon="chat" />
      <hr />
      <MenuButton link="/support" color="orange" text="Support" icon="help" />
      <hr />
      <MenuButton
        link="/auth/logout"
        color="black"
        text="Logout"
        icon="logout"
      />
    </>
  );
}
