import { Stack, Typography, Box, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import "./index.css";

export default function Home() {
  return (
    <body>
      <div className="Top">
        <nav>
          <Image
            alt="logo"
            src="/Untitled.png"
            width="100"
            height="61"
            style={{ marginLeft: 30 }}
          ></Image>
          <div className="links">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={""}
            >
              <p>Download</p>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={""}
            >
              <p>Support</p>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={""}
            >
              <p>Safety</p>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={""}
            >
              <p>About Us</p>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={"/auth/login"}
            >
              <p>Login</p>
            </a>
          </div>
        </nav>
      </div>
    </body>
  );
}
