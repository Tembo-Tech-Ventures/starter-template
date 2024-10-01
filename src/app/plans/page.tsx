"use client";
import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { PlanCard } from "./components/plan-cards";
import { useEffect, useState } from "react";
import { data } from "../dashboard/components/countries/countries";

export default function PlansAndPricing() {
  const [userCountry, setUserCountry] = useState();
  const [currency, setCurrency] = useState("");
  const [symbol, setSymbol] = useState("");
  useEffect(() => {
    const userData = data.find((item) => item.country === userCountry);
    if (userData) {
      setCurrency(userData.currency);
      setSymbol(userData.symbol);
    } else {
      setCurrency("USD");
      setSymbol("$");
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
    <Box>
      <Stack
        sx={{
          background: "linear-gradient(to bottom right, blue, purple)",
          height: "100vh",
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            textAlign: "center",
            fontFamily: "'Nerko One', cursive",
            fontStyle: "normal",
            fontWeight: 300,
            fontOpticalSizing: "auto",
          }}
        >
          Plans & Pricing
        </Typography>
        <Stack
          sx={{
            display: "flex",
            position: "relative",
            flexDirection: "row",
            gap: 0,
            width: "100%",
          }}
        >
          <PlanCard
            tier=""
            symbol=""
            price={null}
            currency=""
            description=""
            category="nullible"
            firstRemark="Latest data about user's country"
            secondRemark="MWF display"
            thirdRemark="Latest data worldwide"
            fourthRemark="Decentralized chat"
            fifthRemark="AI Chat Feature"
            sixthRemark="Access to a world map"
            remarkColor="gray.600"
            render={"h5"}
            duration={null}
          />
          <PlanCard
            tier="Free"
            symbol={symbol}
            price={0}
            currency={currency}
            category="material-symbols-outlined"
            description="Free plan"
            firstRemark="close"
            secondRemark="close"
            thirdRemark="check"
            fourthRemark="close"
            fifthRemark="close"
            sixthRemark="close"
            remarkColor="red"
            render={"span"}
            duration="/month"
          />
          <PlanCard
            tier="Basic"
            symbol={symbol}
            price={10}
            currency={currency}
            category="material-symbols-outlined"
            description="Basic plan"
            firstRemark="check"
            secondRemark="check"
            thirdRemark="check"
            fourthRemark="check"
            fifthRemark="close"
            sixthRemark="close"
            remarkColor="red"
            render={"span"}
            duration="/month"
          />
          <PlanCard
            tier="Premium"
            category="material-symbols-outlined"
            symbol={symbol}
            price={25}
            currency={currency}
            description="Premium plan"
            remarkColor="red"
            firstRemark="check"
            secondRemark="check"
            thirdRemark="check"
            fourthRemark="check"
            fifthRemark="check"
            sixthRemark="check"
            render={"span"}
            duration="/month"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
