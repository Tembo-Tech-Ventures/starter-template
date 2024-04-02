"use client";

import "@/app/index.css";
import {
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

export default function Contact_Us() {
  const [values, setValues] = useState({
    email: "",
    message: "",
  });
  return (
    <body className="contact-us">
      <div className="contact-form">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await fetch("api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
          }}
        >
          <Card>
            <CardContent>
              <Stack spacing={4} padding={2}>
                <Typography className="contact-us-header" variant="h1">
                  Contact Us
                </Typography>
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  required
                  fullWidth
                  value={values.email}
                  onChange={(e) => {
                    setValues({ ...values, email: e.target.value });
                  }}
                ></TextField>
                <TextField
                  label="Message"
                  type="text"
                  id="message"
                  name="message"
                  required
                  multiline
                  fullWidth
                  rows={4}
                  value={values.message}
                  onChange={(e) => {
                    setValues({ ...values, message: e.target.value });
                  }}
                ></TextField>
              </Stack>
              <CardActions>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </form>
      </div>
    </body>
  );
}
