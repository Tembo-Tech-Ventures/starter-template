import { Box, Stack, Typography } from "@mui/material";

export default function VerifyRequest() {
  return (
    <Box>
      <Stack
        width={"100%"}
        height={"100vh"}
        style={{
          backgroundImage:
            "url('https://suntrics.com/wp-content/uploads/2023/05/Drones-Help-Farmers.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          display={"flex"}
          borderTop={300}
          style={{ borderColor: "transparent" }}
        >
          <Typography
            style={{
              backgroundImage:
                "linear-gradient(to left, red, indigo, violet, blue, yellow, red)",
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
            variant="h2"
          >
            Email Incoming
          </Typography>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Typography
            variant="h4"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, gold, indigo, red, blue, violet, silver)",
              WebkitBackgroundClip: "text",
              MozBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Check your email
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
