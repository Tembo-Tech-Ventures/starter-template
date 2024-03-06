"use client";

import { Stack, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "@/app/index.css";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    (async () => {
      await signOut({
        callbackUrl: "/",
      });
    })();
  }, [router]);

  return (
    <body className="logout">
      <Typography>LOGGING YOU OUT!</Typography>
    </body>
  );
}
