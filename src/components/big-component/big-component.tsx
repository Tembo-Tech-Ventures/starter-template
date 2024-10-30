import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Holder({
  primaryColor,
  secondaryColor,
  borderColor,
  image,
  topic,
  topicColor,
  children,
}: {
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  image: string;
  topic: string;
  topicColor: string;
  children: React.ReactNode | any;
}) {
  return (
    <Stack
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: "row",
        gap: 2,
        width: "80%",
        borderRadius: 4,
        border: `2px solid #${borderColor}`,
        background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          position: "relative",
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`/${image}.jpg`}
          alt=""
          height={"80%"}
          width={"65%"}
          style={{ borderRadius: 9 }}
        />
      </Stack>
      <Stack sx={{ display: "flex", position: "relative", width: "60%" }}>
        <Typography variant="h4" sx={{ color: `#${topicColor}` }}>
          {topic}
        </Typography>
        <br />
        <ul
          style={{
            display: "flex",
            color: "#667272",
            fontSize: 20,
            flexDirection: "column",
            gap: 13,
          }}
        >
          {children}
        </ul>
      </Stack>
    </Stack>
  );
}
