import { Stack, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box width="100%" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" style={{backgroundImage: "linear-gradient(rgba(140,45,230,0.7),rgba(140,45,230,0.7)),url('https://hdqwalls.com/artistic-horizon-mountain-purple-tree-minimalism-wallpaper.png')"}}>
      <Stack display="flex" alignItems="top" justifyContent="center" >
        <Typography variant="h1">Home</Typography>
        <Stack flexDirection="row" display="flex" alignItems="center" justifyContent="space-between"  >
          <Link href="/auth/login" style={{textDecoration:"none", color:"#fff"}}>Login</Link>
          <Link href="/auth/register" style={{textDecoration:"none", color:"#fff"}}>Sign up</Link>
        </Stack>

      </Stack>
    </Box>

  );
}
