"use client";
import { Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { data } from "../countries/countries";
import Marquee from "react-fast-marquee";

export default function MobileDisplay() {
  const [loaded, setLoaded] = useState(false);
  const [userCountry, setUserCountry] = useState();
  const [countryLoaded, setCountryLoaded] = useState(false);
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  useEffect(() => {
    if (userCountry) {
      setCountryLoaded(true);
    }
  }, [userCountry]);
  useEffect(() => {
    const countryData = data.find((item) => item.country === userCountry);
    if (countryData) {
      setText(`It appears that there has been a ${countryData.percentage}%`);
      setSubText(`${countryData.content} in
         ${countryData.country}`);
    } else {
      setText(`We don't support your country`);
      setSubText("");
    }
  }, [userCountry]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      fetchUserCountry(latitude, longitude);
    });
  }, []);

  const fetchUserCountry = async (latitude: number, longitude: number) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = "570ee4b49ecf4bf786052677c5f4a082";
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&pretty=1`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data.results.length > 0) {
            setUserCountry(data.results[0].components.country);
          }
        } catch (error) {
          console.error("Error fetching user country:", error);
        }
      });
    }
  };
  return (
    <Stack
      sx={{
        display: { xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" },
        position: "relative",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Image
        src={"/profile.png"}
        alt="ig"
        height={20}
        width={20}
        onLoad={() => setLoaded(true)}
        style={{
          display: "block",
          visibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></Image>
      {loaded ? (
        <Typography variant="h5">Latest News</Typography>
      ) : (
        <Skeleton variant="text" height={50} width={150}></Skeleton>
      )}
      <Stack
        sx={{
          display: "flex",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {countryLoaded ? (
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              position: "absolute",
              top: "59%",
              left: "9%",
              fontFamily: "'Nerko One', cursive",
              fontWeight: 300,
              fontStyle: "normal",
              width: "100%",
              textWrap: "nowrap",
            }}
          >
            {text}
          </Typography>
        ) : (
          <Skeleton variant="text" height={30} width={250}></Skeleton>
        )}
        {countryLoaded ? (
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              position: "absolute",
              top: "100%",
              left: "1%",
              fontFamily: "'Nerko One', cursive",
              fontWeight: 300,
              fontStyle: "normal",
              width: "100%",
              textWrap: "nowrap",
            }}
          >
            {subText}
          </Typography>
        ) : (
          <Skeleton variant="text" height={30} width={250}></Skeleton>
        )}
      </Stack>
    </Stack>
  );
}
