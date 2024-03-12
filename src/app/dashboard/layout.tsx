"use client";
import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container
        style={{
          position: "fixed",
          display: "none",
          top: 0,
          left: 0,
          right: 0,
          paddingTop: 20,
        }}
      >
        <nav>
          <Stack direction="row" justifyContent="flex-end">
            <Link href={"/auth/logout"}>
              <Button variant="contained" style={{ backgroundColor: "black" }}>
                Logout
              </Button>
            </Link>
          </Stack>
        </nav>
      </Container>
      {children}
    </>
  );
}
