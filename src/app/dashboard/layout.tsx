import { Button, Container } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Container>
        <nav>
          <Link href="/auth/logout">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 50,
              }}
            >
              Logout
            </Button>
          </Link>
        </nav>
      </Container>
      {children}
    </div>
  );
}
