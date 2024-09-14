import { Box } from "@mui/material";
import Container from "./components/container/container";
import { getServerSession } from "@/modules/auth/lib/get-server-session/get-server-session";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();
  if (session.user.isBanned) {
    redirect("/banned");
  }
  if (!session.user) {
    redirect("/auth/login");
  }
  return (
    <Box>
      <Container />
    </Box>
  );
}
