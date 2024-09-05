"use client";
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GlobalCard } from "./components/cards/cards";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [loaded, setLoaded] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const session = useSession();
  const router = useRouter();
  let weatherMap;
  useEffect(() => {
    if (session.status === "authenticated" && session.data?.user?.name === "") {
      setWarningMessage(true);
    }
  }, [session.data?.user?.name, session.status]);
  interface WeatherData {
    main: {
      temp: number;
    };
    weather: Array<{
      description: string;
    }>;
  }

  interface WeatherSidebarProps {
    weatherData: WeatherData | null;
  }

  const fetchWeather = async (latitude: number, longitude: number) => {
    const apiKey = "681a847ebddfec8c90bc96ae7e0af34e";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  const WeatherSidebar: React.FC<WeatherSidebarProps> = ({ weatherData }) => {
    if (!weatherData) return null;
    const currentWeather = weatherData.main.temp - 273.15;
    return (
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          display: "flex",
          position: "absolute",
          top: "39%",
          left: "4%",
          fontFamily: "cursive",
        }}
      >
        It&apos;s currently {currentWeather.toFixed(1)}
        <sup>o</sup>C across your region
      </Typography>
    );
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const weather = await fetchWeather(latitude, longitude);
      setWeatherData(weather);
    });
  }, []);

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          backgroundColor: "black",
          color: "#fff",
        }}
      >
        <Dialog open={warningMessage}>
          <Card
            sx={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              maxWidth: 375,
              height: 375,
              overflowY: "auto",
            }}
          >
            <CardHeader title="New User Detected" />
            <CardMedia
              component="img"
              height={190}
              image="/new-user-model.png"
              alt="New User Detcted"
            />
            <CardContent>
              <Typography
                variant="body2"
                fontFamily={"monospace"}
                className="weatherHolder"
              >
                It appears you don&apos;t have a name yet. Try adding a name to
                your account to help other users recognize who you are
              </Typography>
            </CardContent>
            <Stack
              sx={{
                display: "flex",
                position: "relative",
                width: "100%",
                flexDirection: "row",
              }}
            >
              <Stack
                sx={{ display: "flex", position: "relative", width: "50%" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid brown",
                    width: "67%",
                    display: "flex",
                    position: "relative",
                    float: "right",
                    alignContent: "end",
                  }}
                  onClick={() => setWarningMessage(!warningMessage)}
                >
                  Cancel
                </Button>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  position: "relative",
                  width: "50%",
                  alignItems: "end",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "1px solid brown",
                    width: "67%",
                    display: "flex",
                    position: "relative",
                    float: "right",
                    alignContent: "end",
                  }}
                  onClick={() => router.push("/settings")}
                >
                  Add name
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Dialog>
        <Stack>
          <Image
            src={"/ai.jpg"}
            alt="ai"
            height={100}
            width={100}
            style={{ display: "block", visibility: "hidden" }}
            onLoad={() => setLoaded(true)}
          ></Image>
          <Skeleton
            variant="text"
            sx={{
              display: loaded ? "none" : "block",
              position: "absolute",
              top: "4%",
              left: "4%",
              bgcolor: "grey.900",
              fontsize: "5rem",
            }}
            height={50}
            width={150}
          ></Skeleton>
          <Typography
            variant="h6"
            sx={{
              display: "block",
              visibility: loaded ? "visible" : "hidden",
              position: "absolute",
              top: "4%",
              left: "4%",
            }}
          >
            Hi{" "}
            {session.data?.user?.name ||
              `New User${session.data?.user?.email?.substring(0, 4)}`}
          </Typography>
        </Stack>
        {loaded ? (
          <WeatherSidebar weatherData={weatherData} />
        ) : (
          <Skeleton
            variant="text"
            width={250}
            height={50}
            sx={{
              bgcolor: "grey.900",
              display: "block",
              position: "absolute",
              top: "43%",
              left: "4%",
            }}
          ></Skeleton>
        )}
      </Stack>
      <Stack
        sx={{
          display: "Flex",
          position: "relative",
          flexDirection: "column",
          gap: 9,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <GlobalCard
            icon={"grid_view"}
            subject="5+"
            content="Users have connected"
          ></GlobalCard>
          <GlobalCard
            icon={"commit"}
            subject="5.7%"
            content="Active users on the site"
          ></GlobalCard>
          <GlobalCard
            icon={"sentiment_satisfied"}
            subject="2.5/5"
            content="User satisfaction rating"
          ></GlobalCard>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <GlobalCard
            icon="agriculture"
            subject="7%"
            content="decrease in farms in the United States"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
