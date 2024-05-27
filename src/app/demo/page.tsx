"use client";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import "../index.css";
import { useRouter } from "next/navigation";

export default function Demo() {
  const router = useRouter();
  const LoadScene = () => {
    var holder = document.getElementById("holder") as HTMLDivElement;
    holder.style.display = "flex";
    setTimeout(() => {
      router.replace("/dashboard");
    }, 10000);
  };
  return (
    <Box>
      <Stack>
        <h1>Click in the button below to redirect</h1>
        <Button variant="contained" onClick={LoadScene}>
          X
        </Button>
      </Stack>
      <br />
      <Stack className="holder" id="holder">
        <Stack className="circular">
          <Typography variant="h2" className="loadText">
            Loading...
          </Typography>
          <CircularProgress color="warning" variant="indeterminate" />
        </Stack>
      </Stack>
    </Box>
  );
}
