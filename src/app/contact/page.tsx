"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "../globalicons.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();
  let code = "Phone Number";
  return (
    <Box>
      <Stack
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.3), rgba(255, 0, 255, 0.3), rgba(0, 0, 255, 0.3)),url('https://wallpapercave.com/wp/wp6944127.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <nav
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            wordSpacing: 2,
            gap: 5,
          }}
        >
          <span className="material-symbols-outlined">home</span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            id="home"
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
          >
            Home
          </p>
          <span
            className="material-symbols-outlined"
            id="contacts"
            style={{ marginLeft: 40 }}
          >
            contacts_product
          </span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/contact");
            }}
          >
            Contact us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 30 }}
          >
            local_library
          </span>
          <p
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(t) => {
              t.preventDefault();
              router.push("/about");
            }}
          >
            About us
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50 }}
          >
            chat
          </span>
          <p
            id="chats"
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/chat");
            }}
          >
            Chats & Privacy
          </p>
          <span
            className="material-symbols-outlined"
            style={{ marginLeft: 50 }}
          >
            forum
          </span>
          <p
            id="p2b"
            style={{
              color: "gray",
              fontFamily: "'Indie Flower', cursive",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/dashboard");
            }}
          >
            PrimeAI
          </p>
        </nav>
        <Stack
          style={{
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "monospace",
          }}
        >
          <Stack
            style={{
              backgroundColor: "rgba(128, 128, 128, 0.4)",
              width: 1000,
              height: 500,
              marginTop: 50,
            }}
          >
            <h1
              style={{
                marginLeft: 350,
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              Contact Us
            </h1>
            <div
              style={{
                position: "relative",
                display: "flex",
                wordSpacing: 2,
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="material-symbols-outlined">location_on</span>
              <p style={{ color: "aqua" }}>
                Address: No. 3, Grande Street, Lktv Rd CHV, Zen Escalardo, Lg.,
                NG
              </p>
            </div>
            <div
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                wordSpacing: 2,
                gap: 2,
              }}
            >
              <span className="material-symbols-outlined">call</span>
              <a
                href="tel: +2348138075114"
                style={{ color: "aqua", textDecoration: "none" }}
              >
                +2348209765129
              </a>
            </div>
            <form action="#" method="post">
              <TextField
                label="First Name"
                id="fname"
                className="fname"
                required
                style={{ left: 100, top: 50 }}
              ></TextField>
              <TextField
                label="Last Name"
                id="lname"
                className="lname"
                required
                style={{ left: 150, top: 50 }}
              ></TextField>
              <TextField
                label="Email"
                id="email"
                name="email"
                required
                style={{ left: -320, top: 130 }}
              ></TextField>
              <TextField
                label="Other Name"
                style={{ top: 130, left: -270 }}
                required
              ></TextField>
              <TextField
                label={code}
                type="tel"
                id="tel"
                name="tel"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{
                  top: -5,
                  left: 605,
                }}
                required
              ></TextField>
              <TextField
                type="date"
                name="dob"
                id="dob"
                style={{
                  height: 50,
                  width: 150,
                  left: 630,
                  top: -5,
                }}
              ></TextField>
              <select
                id="Country"
                name="Country"
                style={{
                  backgroundColor: "rgba(128, 128, 128, 0.4)",
                  width: 300,
                  height: 50,
                  marginTop: 80,
                  marginLeft: 270,
                }}
                onChange={(e) => {
                  const selectedCountry = e.target.value;
                  let telephonePrefix = "";
                  switch (selectedCountry) {
                    case "Afghaistan":
                      telephonePrefix = "+93";
                      break;
                    case "Angola":
                      telephonePrefix = "+355";
                    case "Algeria":
                      telephonePrefix = "+213";
                    case "Andorra":
                      telephonePrefix = "+376";
                    default:
                      telephonePrefix = "";
                  }
                  const tele = document.getElementById(
                    "tel",
                  ) as HTMLInputElement;
                  tele.value = telephonePrefix;
                }}
              >
                <option value={""} selected disabled>
                  --Please-select-a-country--
                </option>
                <option
                  value={"Afghanistan"}
                  onSelect={(e) => {
                    e.preventDefault();
                    var cast = "+93";
                    const tele = document.getElementById(
                      "tel",
                    ) as HTMLInputElement;
                    tele.value = cast;
                  }}
                >
                  Afghanistan
                </option>
                <option
                  value={"Albania"}
                  onClick={(b) => {
                    b.preventDefault();
                    const teller = document.getElementById(
                      "tel",
                    ) as HTMLInputElement;
                    const no2dc = "+355";
                    teller.value = no2dc;
                  }}
                >
                  Albania
                </option>
                <option
                  value={"Algeria"}
                  onClick={(c) => {
                    c.preventDefault();
                    const teller = document.getElementById(
                      "tel",
                    ) as HTMLInputElement;
                    const no3dc = "+213";
                  }}
                >
                  Algeria
                </option>
                <option value={"Andorra"}>Andorra</option>
                <option value={"Angola"}>Angola</option>
                <option value={"Antigua"}>Antigua</option>
                <option value={"Argentina"}>Argentina</option>
                <option value={"Armenia"}>Armenia</option>
                <option value={"Australia"}>Australia</option>
                <option value={"Austria"}>Austria</option>
                <option value={"Azerbaijan"}>Azerbaijan</option>
                <option value={"Bahamas"}>Bahamas</option>
                <option value={"Bahrain"}>Bahrain</option>
                <option value={"Bangladesh"}>Bangladesh</option>
                <option value={"Barbados"}>Barbados</option>
                <option value={"Belarus"}>Belarus</option>
                <option value={"Belgium"}>Belgium</option>
                <option value={"Belize"}>Belize</option>
                <option value={"Benin"}>Benin</option>
                <option value={"Bhutan"}>Bhutan</option>
                <option value={"Bolivia"}>Bolivia</option>
                <option value={"Bosnia"}>Bosnia</option>
                <option value={"Botswana"}>Botswana</option>
                <option value={"Brazil"}>Brazil</option>
                <option value={"Brunei"}>Brunei</option>
                <option value={"Bulgaria"}>Bulgaria</option>
                <option value={"Burkina Faso"}>Burkina Faso</option>
                <option value={"Burundi"}>Burundi</option>
                <option value={"Côte d'Ivoire"}>Côte d&apos;Ivoire</option>
                <option value={"Cabo Verde"}>Cabo verde</option>
                <option value={"Cambodia"}>Cambodia</option>
                <option value={"Cameroon"}>Cameroon</option>
                <option value={"Canada"}>Canada</option>
                <option value={"Central African Republic"}>
                  Central African Republic
                </option>
              </select>
              <textarea
                style={{
                  marginTop: 20,
                  marginLeft: 360,
                  backgroundColor: "rgba(128, 128, 128, 0.3)",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 200,
                  height: 50,
                }}
                required
              >
                Hello
              </textarea>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "silver",
                    width: 220,
                    borderRadius: "50px",
                  }}
                  onClick={(b) => {
                    b.preventDefault();
                    router.push("/contact/verification");
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
