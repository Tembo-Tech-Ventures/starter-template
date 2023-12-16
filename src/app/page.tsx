import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import {Button} from "@mui/material"
import { purple } from "@mui/material/colors";
import { DM_Serif_Text, Train_One } from "next/font/google";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import logo from "public/Sample.png"
export default function Home() {
  return (
    <Stack style={{backgroundImage: "linear-gradient(rgba(245, 158, 158, 0.5),rgba(35, 163, 152, 0.5)),url('https://i.pinimg.com/originals/4f/4a/1a/4f4a1a9d7c51499e0f4d28ec5e128022.jpg')", backgroundPosition: "center", backgroundSize: "cover", height: "100vh"}}>
      <Link href={"https://3000-harrison302-onlineagric-r0ciekpheja.ws-eu106.gitpod.io/"}><Image alt="Logo" src={logo}></Image></Link>
      <Typography variant="h1" position={"absolute"} top={110} left={500} display={"flex"} alignItems={"center"} justifyContent={"center"} fontFamily={"Cinzel"}>AICulture</Typography>
      <Link href={"/auth/register"}><Button style={{backgroundColor: "purple", top: 260, left: 150, color: "silver", width: 363, display: "flex", position: "absolute", flexDirection: "column", padding: 8, justifyContent: "center", height: 70, alignItems: "center", flexShrink: 0, marginLeft: 350, marginRight: -380, borderRadius: 50}}>Sign up</Button></Link>
      <Link href="/auth/login"><Button style={{backgroundColor: "silver", borderColor: "green", color: "gold", top: 380, left: 500, display: "flex", position: "absolute", width: 363, height: 70, flexDirection: "column", justifyContent: "center", alignItems: "center", flexShrink: 0, borderRadius: 50 }}>Login</Button></Link>
    </Stack>
  );
}
