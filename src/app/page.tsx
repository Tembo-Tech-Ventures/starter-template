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
            style={{ marginLeft: 30, marginTop: 10 }}
          ></Image>
          <div className="links">
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={"/support"}
            >
              <p>Support</p>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={"/contact-us"}
            >
              <p>Contact Us</p>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "#fff",
                fontFamily: "Kavoon",
              }}
              href={"/about-us"}
            >
              <p>About Us</p>
            </a>
            <div className="login">
              <a
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontFamily: "HappyMonkey",
                }}
                href={"/auth/login"}
              >
                <p>Login</p>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="main">
        <main>
          <div className="imagineaplace">
            <p>IMAGINE A PLACE...</p>
            <p className="description">
              ...where you can interact with chatbot to catch up on what you
              missed in school. A place that makes learning easier.
            </p>
          </div>
        </main>
      </div>
    </body>
  );
}
