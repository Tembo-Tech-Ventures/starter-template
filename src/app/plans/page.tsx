"use client";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { PlanCard } from "./components/plan-cards";
import { useEffect, useState } from "react";
import { data } from "../dashboard/components/countries/countries";
import "../globalicons.css";
import { useSession } from "next-auth/react";
import { MenuBar } from "@/components/menubar/menubar";
import Image from "next/image";

export default function PlansAndPricing() {
  const [userCountry, setUserCountry] = useState();
  const [currency, setCurrency] = useState("");
  const [price, setPrice] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [premiumPrice, setPremiumPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [symbol, setSymbol] = useState("");
  const session = useSession();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const userData = data.find((item) => item.country === userCountry);
    if (userData) {
      setCurrency(userData.currency);
      setSymbol(userData.symbol);
      setPrice(`${userData.basicPrice?.toLocaleString()}`);
      setPremiumPrice(`${userData.premiumPrice?.toLocaleString()}`);
    } else {
      setCurrency("");
      setPrice("");
      setPremiumPrice("");
      setSymbol("");
      setTimeout(() => {
        setCurrency("USD");
        setPrice("162");
        setPremiumPrice("3642");
        setSymbol("$");
      }, 15000);
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
        <Drawer
          open={open}
          onClose={handleClose}
          anchor="right"
          PaperProps={{
            sx: { width: { xs: 75, sm: 100, md: 150, lg: 250, xl: 350 } },
          }}
        >
          <MenuBar />
        </Drawer>
        <Stack
          sx={{
            display: "flex",
            position: "absolute",
            flexDirection: "row",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Image
            src={"/ai.jpg"}
            alt="ai"
            height={100}
            width={100}
            style={{ display: "block", visibility: "hidden" }}
            onLoad={() => setLoaded(true)}
          ></Image>
          <Stack
            sx={{
              display: "flex",
              position: "absolute",
              right: "4%",
              top: "25%",
            }}
          >
            <Avatar
              sx={{
                height: { xs: 25, md: 29, lg: 32, xl: 150 },
                width: { xs: 25, md: 29, lg: 32, xl: 150 },
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              <Typography variant="h6">
                {session.data?.user?.name?.toUpperCase().substring(0, 1) ||
                  session.data?.user?.email?.toUpperCase().substring(0, 1)}
              </Typography>
            </Avatar>
          </Stack>
        </Stack>
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
            remarkColor="grey.600"
            render={"h5"}
            duration={null}
          >
            <Button sx={{ display: "flex", visibility: "hidden" }}>
              Upgrade Now
            </Button>
          </PlanCard>
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
            remarkColor="grey.600"
            render={"span"}
            duration="/month"
          >
            <Button className="purchase">Start for free</Button>
          </PlanCard>
          <PlanCard
            tier="Basic"
            symbol={symbol}
            price={price}
            currency={currency}
            category="material-symbols-outlined"
            description="Basic plan"
            firstRemark="check"
            secondRemark="check"
            thirdRemark="check"
            fourthRemark="check"
            fifthRemark="close"
            sixthRemark="close"
            remarkColor="grey.600"
            render={"span"}
            duration="/month"
          >
            <Button className="purchase">Purchase Now</Button>
          </PlanCard>
          <PlanCard
            tier="Premium"
            category="material-symbols-outlined"
            symbol={symbol}
            price={premiumPrice}
            currency={currency}
            description="Premium plan"
            remarkColor="grey.600"
            firstRemark="check"
            secondRemark="check"
            thirdRemark="check"
            fourthRemark="check"
            fifthRemark="check"
            sixthRemark="check"
            render={"span"}
            duration="/month"
          >
            <Button className="purchase">Purchase Now</Button>
          </PlanCard>
        </Stack>
      </Stack>
    </Box>
  );
}
