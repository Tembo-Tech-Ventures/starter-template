import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import "../../globalicons.css";
import Container from "./components/verify-components";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/constants";
import { getServerSession } from "next-auth";

export default async function VerifyRequest() {
  return (
    <Box>
      <Container />
    </Box>
  );
}
