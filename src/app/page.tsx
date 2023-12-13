import { Stack, Typography, Box } from "@mui/material";
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <Box width="100%" minHeight="100vh" display="flex" alignItems="center" justifyContent="space-between" style={{backgroundImage: "linear-gradient(rgba(140,45,230,0.7),rgba(140,45,230,0.7)),url('/Background.png')"}}>
      <Stack>
        <Link href="/auth/login" style={{textDecoration:"none", color:"#fff"}}>Login</Link>
        <Link href="/auth/register" style={{textDecoration:"none", color:"#fff"}}>Sign up</Link>
                                                                                                                            

      </Stack>
    </Box>

  );
}
