"use client";

import { MuiProvider } from "@/modules/mui/providers/mui-provider/mui-provider";
import { SessionProvider } from "next-auth/react";
import React from "react";
export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <MuiProvider>{children}</MuiProvider>
    </SessionProvider>
  );
}
