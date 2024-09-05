"use client";
import {
  Avatar,
  CardActionArea,
  Paper,
  Skeleton,
  Typography,
  Card,
} from "@mui/material";
import "../../../globalicons.css";
import { useState } from "react";
import Image from "next/image";

export function GlobalCard({
  icon,
  subject,
  content,
}: {
  icon: string;
  subject: string;
  content: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <Image
        src={"/ai.jpg"}
        height={100}
        width={100}
        alt="AI"
        onLoad={() => setLoaded(true)}
        style={{ display: "block", visibility: "hidden" }}
      ></Image>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          width: "25%",
          height: 200,
          transition: "0.2s ease-in-out",
          ":hover": {
            bgcolor: "#DEDEDE",
          },
        }}
      >
        {loaded ? (
          <Avatar sx={{ height: 60, width: 60, bgcolor: "grey.900" }}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 35 }}
            >
              {icon}
            </span>
          </Avatar>
        ) : (
          <Skeleton variant="circular" height={60} width={60}></Skeleton>
        )}
        <div
          style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loaded ? (
            <Typography variant="h3">{subject}</Typography>
          ) : (
            <Skeleton variant="text" height={50} width={100}></Skeleton>
          )}
          {loaded ? (
            <Typography variant="h6" sx={{ color: "gray", fontSize: 13 }}>
              {content}
            </Typography>
          ) : (
            <Skeleton variant="text" height={30} width={145}></Skeleton>
          )}
        </div>
      </Paper>
    </>
  );
}
