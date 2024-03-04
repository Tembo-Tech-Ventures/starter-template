import { Stack, Typography } from "@mui/material";
import "@/app/index.css";

export default function VerifyRequest() {
  return (
    <body className="emailincoming">
      <div className="email">
        <main>
          <h2>
            <b>Incoming mail</b>
          </h2>
          <p className="emailh">
            Check your e-mail for a link and login from there
          </p>
        </main>
      </div>
    </body>
  );
}
