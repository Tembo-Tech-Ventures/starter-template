import { Box, Stack, Typography } from "@mui/material";
import "./globalicons.css";

export default function Home() {
  return (
    <Box>
      <Stack>
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Tilt Warp', sans-serif",
            fontWeight: 400,
            color: "#1d3131",
            fontSize: { xs: 49, sm: 68, md: 74, lg: 79, xl: 90 },
          }}
        >
          AICulture
        </Typography>
        <br />
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            color: "#1d3131",
            fontSize: { xs: 18, sm: 20, md: 26, lg: 32 },
          }}
        >
          Unlocking the future of farmers with AI ingenuity
        </Typography>
        <br />
        <hr />
        <br />
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Tilt Warp', sans-serif",
            fontWeight: 400,
            color: "#1d3131",
            fontSize: { xs: 39, sm: 48, md: 52, lg: 67 },
          }}
        >
          Project Overview
        </Typography>
      </Stack>
    </Box>
  );
}
