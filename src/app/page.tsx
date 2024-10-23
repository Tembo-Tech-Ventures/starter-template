import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import "./globalicons.css";
import Image from "next/image";

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
        <Stack
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: "row",
            gap: 2,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              position: "relative",
              width: "fit-content",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Tilt Warp', sans-serif",
              fontWeight: 400,
              wordSpacing: 100,
              color: "#1d3131",
              fontSize: { xs: 39, sm: 48, md: 52, lg: 67 },
            }}
          >
            Project
          </Typography>
          <Typography
            variant="h2"
            sx={{
              display: "flex",
              position: "relative",
              width: "fit-content",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Tilt Warp', sans-serif",
              fontWeight: 400,
              wordSpacing: 100,
              color: "#6ad248",
              fontSize: { xs: 39, sm: 48, md: 52, lg: 67 },
            }}
          >
            Overview
          </Typography>
        </Stack>
        <br />
        <hr />
        <br />
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            position: "relative",
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Quicksand', sans-serif",
            color: "#873fff",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          About the Project
        </Typography>
        <br />
        <Stack
          sx={{
            display: "flex",
            position: "relative",
            width: "70%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Quicksand', sans-serif",
            color: "#873fff",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              position: "relative",
              width: "72%",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Quicksand', sans-serif",
              color: "#747d7f",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            AICulture is a cutting-edge technology project dedicated to
            unlocking the future of farmers with AI ingenuity. Our mission is to
            create innovative solutions that empower small-scale farmers to
            thrive.
          </Typography>
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
          <Stack
            sx={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              gap: 2,
              width: "80%",
              borderRadius: 4,
              border: "2px solid #5ab1ff",
              background:
                "linear-gradient(to bottom, rgb(242,251,255), rgb(255, 255, 255))",
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
                src="/farmer.jpg"
                alt=""
                height={"80%"}
                width={"65%"}
                style={{ borderRadius: 9 }}
              />
            </Stack>
            <Stack sx={{ display: "flex", position: "relative", width: "60%" }}>
              <Typography variant="h4" sx={{ color: "#5db8fc" }}>
                Project Goal
              </Typography>
              <br />
              <ul style={{ color: "#667272", fontSize: 20 }}>
                <li>
                  AICulture trims the knowledge gap by providing information
                </li>
                <br />
                <li>
                  AICulture provides up-to-date agricultural data worldwide and
                  in users&apos; countries to inform decision-making and
                  strategy
                </li>
                <br />
                <li>
                  AICulture offers precise weather forecasts to help farmers
                  plan and optimize their activities based on weather conditions
                </li>
                <br />
                <li>
                  AICulture uses chatbots and decentralized chat to provide
                  real-time support and advice to farmers and stakeholders,
                  enabling quick and efficient communication
                </li>
              </ul>
            </Stack>
          </Stack>
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
          <Stack
            sx={{
              display: "flex",
              position: "relative",
              flexDirection: "row",
              gap: 2,
              width: "80%",
              borderRadius: 4,
              border: "2px solid #e63431",
              background:
                "linear-gradient(to bottom, rgb(253,247,245), rgb(255, 255, 255))",
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
                src="/suffering.jpg"
                alt=""
                height={"80%"}
                width={"65%"}
                style={{ borderRadius: 9 }}
              />
            </Stack>
            <Stack sx={{ display: "flex", position: "relative", width: "60%" }}>
              <Typography variant="h4" sx={{ color: "#e5322e" }}>
                Problem Statement
              </Typography>
              <br />
              <ul style={{ color: "#667272", fontSize: 20 }}>
                <li>
                  Brazil suffers a 10% increase in deforestation rates impacting
                  agricultural land availability.
                </li>
                <br />
                <li>
                  China suffers from water scarcity as 30% of agricultural land
                  is affected by water scarcity.
                </li>
                <br />
                <li>
                  Canada suffers from shortage of agricultural workers due to
                  financial struggles for farmers despite significant
                  agricultural supports.
                </li>
                <br />
                <li>
                  France suffers a 10% decrease in wheat production dues to
                  heatwaves leading to 8% increase in wheat prices year-on-year
                </li>
              </ul>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
