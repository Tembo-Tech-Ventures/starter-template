"use client";
import { Box, Stack, Typography } from "@mui/material";
import "./globalicons.css";
import Holder from "@/components/big-component/big-component";
import { useState, useEffect, SetStateAction } from "react";
import { LatestNews } from "@/components/big-component/country-news";
import { useSession } from "next-auth/react";

export default function Home() {
  const [location, setLocation] = useState({
    country: null,
    region: null,
    ip: null,
    city: null,
    latitude: null,
    longitude: null,
    postal_code: null,
    timezone: null,
    continent: null,
    start_ip: null,
    end_ip: null,
    join_key: null,
  });
  const [news, setNews] = useState<string[]>([]);
  const [country, setCountry] = useState("");
  const session = useSession();
  useEffect(() => {
    async function fetchLocation() {
      const res = await fetch("/api/ip");
      const data = await res.json();
      setLocation(data);
    }

    fetchLocation();
  }, []);
  useEffect(() => {
    if (location) {
      const gist = LatestNews.find((item) => item.country === location.country);
      if (gist) {
        setNews(gist.news);
        setCountry(gist.full);
      }
    }
  }, [location]);
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
          About the Project ({location.country})
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
          <Holder
            primaryColor="rgb(242,251,255)"
            secondaryColor="rgb(255, 255, 255)"
            borderColor="5ab1ff"
            image="farmer"
            topic="Project Goal"
            topicColor="5bb4fd"
          >
            <li>AICulture trims the knowledge gap by providing information</li>
            <br />
            <li>
              AICulture provides up-to-date agricultural data worldwide and in
              users&apos; countries to inform decision-making and strategy
            </li>
            <br />
            <li>
              AICulture offers precise weather forecasts to help farmers plan
              and optimize their activities based on weather conditions
            </li>
            <br />
            <li>
              AICulture uses chatbots and decentralized chat to provide
              real-time support and advice to farmers and stakeholders, enabling
              quick and efficient communication
            </li>
          </Holder>
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
          <Holder
            primaryColor="rgb(253,247,245)"
            secondaryColor="rgb(255, 255, 255)"
            borderColor="e63431"
            image="suffering"
            topic={`Problem Statement (${location.city}, ${country})`}
            topicColor="e53a30"
          >
            {news.map((gist) => (
              <li key={session.data?.user.id}>{gist}</li>
            ))}
          </Holder>
        </Stack>
      </Stack>
    </Box>
  );
}
